import React, {useState,useEffect} from 'react';
import axios from 'axios';
import LoggedIn from "./LoggedIn";
import LoggedOut from "./LoggedOut";

const HomeSidebar = (props) => {


    const [loggedIn, setLoggedIn] = useState(false)
    const [options, setOptions] = useState([])
    const [Username, setUsername] = useState("")


    useEffect( () =>{

        axios.get("/user/GetOptions", {withCredentials:true}).then( (res) => {

            console.log(res);
            setOptions(res.data.Options);
            if(res.data.User){
                setLoggedIn(true);
                setUsername(res.data.User.Username)
            }


        }).catch( (err) => {
            console.log(err);
        });

    },[])

    const Hide = (e) => {
        props.setHide(false);
    }

    return (
        <div className={"flex flex-col font-serif text-black p-4 bg-gray-100 " + props.hidden}>

            <h1 className={"text-3xl"}>
                Recipe Bazaar
            </h1>

            <div className={"my-24"}>
                {loggedIn?<LoggedIn user={Username}/>:<LoggedOut/>}
            </div>

            <div>
                <ul>

                    {options.map( (element) => {

                        return(
                            <li>
                                <a href={element.Link}>
                                    {element.Item}
                                </a>
                            </li>
                        )

                    })}

                </ul>
            </div>

            <button className={"bg-blue-700 px-5 py-3 m-1 rounded-full hover:bg-blue-800 text-white"} onClick={Hide}>
                Hide
            </button>



        </div>
    );
}


export default HomeSidebar;