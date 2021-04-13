import Recipes from "../Schemas/Recipe.js";
import jwt from "jsonwebtoken";

/*
*   Create recipe, require all fields, even if they're empty (Recipe, Ingredients, Description).
*   However, name and the five basic tastes need to be there with actual values (Validate in backend with JOI)
*/

export const createRecipe = (req, res) => {

    //It is expected that this token will be there, given that the addRecipe form can only be accessed if logged in
    const userData = jwt.verify(req.cookies.UserInfo, 'shhhhh');

    console.log(req.body.NewRecipe)

    const recipe = req.body.NewRecipe;

    const newEntry = new Recipes({
        Owner: userData.Username,
        Name: recipe.Name,
        Description: recipe.Description,
        Cuisine: recipe.Cuisine,
        Tags: recipe.TagList,
        Ingredients: recipe.Ingredients,
        Recipe: recipe.Steps
    })

    newEntry.save( (err) => {

        if(err){
            res.status(400).send('Could not save')
        }else{
            res.status(200).send('Saved correctly')
        }
    })

}


/*
*   Function to find recipes based on values for five tastes
*
*   (Eventually need to update to account for extra filters, so try to make it extendable)
*
*   Redo this shit boiiii.
*
*/
export const getRecipes = (req, res) => {

    const Search = JSON.parse(req.query.Taste);
    console.log(Search);

    Recipes.
    find().
    where('Umami.calcValue').equals(Search.Umami).
    where('Bitter.calcValue').equals(Search.Bitter).
    where('Sour.calcValue').equals(Search.Sour).
    where('Salty.calcValue').equals(Search.Salty).
    where('Sweet.calcValue').equals(Search.Sweet).
    exec((error, result) => {

        if(error){

            res.status(500).send('Error with database transaction');

        }else if(result.length === 0){
            res.status(404).send('No recipes match your input');
        }else{

            const toReturn = result.map( (data) => {

                return {
                    RecipeID: data._id,
                    Name: data.Name,
                    Description: data.Description,
                    Ingredients: data.Ingredients
                };
            })

            res.status(200).send(toReturn);
        }

    })

}

/*
*   Finds the most clicked recipes (most popular) in the database and returns them to be displayed upon loading of FoodSearch component
*
*   This is outdated, will have to redo given changes to db and eventually Frontend
*
 */

export const getTopRecipes = (req, res) => {

    Recipes.find().sort('-Clicks').limit(3).exec( (err, result) => {

        const toReturn = result.map( (data) => {

            return {
                RecipeID: data._id,
                Name: data.Name,
                Description: data.Description,
                Ingredients: data.Ingredients
            };
        })

        res.status(200).send(toReturn);

    });


}

export const getCuisineTypes = (req,res) => {


    const CuisineList = ["Italian", "Mexican", "Indian", "American", "Spanish", "French", "Ethiopian",
        "Mediterranean", "Brazilian", "Colombian", "Puerto Rican", "Moroccan", "Lebanese", "Turkish",
        "English", "Scandinavian", "Argentinian", "Japanese", "Chinese"]

    res.status(200).send(CuisineList);

}