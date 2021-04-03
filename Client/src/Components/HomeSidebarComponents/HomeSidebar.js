import React, {useState,useEffect} from 'react';
import axios from 'axios';
import LoggedIn from "./LoggedIn";
import LoggedOut from "./LoggedOut";

const HomeSidebar = (props) => {


    const [loggedIn, setLoggedIn] = useState(false)
    const [options, setOptions] = useState([])


    useEffect( () =>{

        axios.get("/user/getInfo", {withCredentials:true}).then( (res) => {

            console.log(res);
            setLoggedIn(true);
            setOptions(res.data.Options);

        }).catch(

        )


    },[])


    return (
        <div className={"flex flex-col space-y-4 font-serif text-black italic p-4 bg-gray-100"}>

            <h1 className={"text-3xl"}>
                Recipe Bazaar
            </h1>

            {loggedIn?<LoggedIn/>:<LoggedOut/>}

            <div>
                <ul>
                    <li>
                        <a href={"/search"}>
                            Search
                        </a>
                    </li>

                    <li>
                        <a href={"/topRecipes"}>
                            Recommended
                        </a>
                    </li>

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



        </div>
    );
}


export default HomeSidebar;