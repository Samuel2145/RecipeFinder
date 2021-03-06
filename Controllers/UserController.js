import User from '../Schemas/User.js'
import * as bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'


export const createUser = (req, res) => {

    bcrypt.genSalt(10, function(err,salt) {

        bcrypt.hash(req.body.user.Password, salt, function(err, hash) {

            const newEntry = new User({
                Username: req.body.user.Username,
                Email: req.body.user.Email,
                Password: hash
            })

            newEntry.save( function(err) {

                if(err){
                    res.status(400).send('Bad shit happened');
                }else{
                    res.status(200).send('User created');
                }

            })

        });
    });
}

export const userLogin = (req, res) => {

    User.findOne( {Username:req.body.user.Username}, (err, user) => {

        if(!user) {

            res.status(400).send('User not found');

        }else{

            bcrypt.compare(req.body.user.Password,  user.Password, (err, same) => {

                if(same){

                    const toSend  = {
                        Username: user.Username,
                        Email: user.Email,
                        Image: user.Image,
                        Joined: user.Joined
                    }

                    let token = jwt.sign(toSend, 'shhhhh');

                    res.cookie('UserInfo', token, {expire: 604800 + Date.now(), httpOnly: true}).status(200);
                    res.send("Successfully logged in");
                }else{
                    res.status(400).send('Password is incorrect!');
                }

            })
        }
    });

}

export const userLogout = (req, res) => {

    res.clearCookie('UserInfo', {path: '/'});
    res.send('Successfully logged out');
}

export const getOptions = (req, res) => {

    const loggedOutOptions = [
        {Item: 'Search', Link:'/Search'},
        {Item: 'Recommended', Link:'/TopRecipes'}
    ];

    if(!req.cookies.UserInfo){

        const loggedOutPacket = {
            Options: loggedOutOptions
        };

        res.status(200).send(loggedOutPacket);
        return;
    }

    const userData = jwt.verify(req.cookies.UserInfo, 'shhhhh');

    const loggedInOptions = [
        {Item: 'My Recipes', Link:'/MyRecipes'},
        {Item: 'Add Recipe', Link:'/NewRecipe'},
        {Item: 'Trades', Link:'/trades'},
        {Item: 'About', Link:'/about'}
    ];

    const loggedInPacket = {
        Options: loggedOutOptions.concat(loggedInOptions),
        User: userData
    };

    res.status(200).send(loggedInPacket);
}