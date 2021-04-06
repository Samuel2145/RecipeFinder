import React from 'react'
import axios from 'axios'
import pancakes from "../Images/pancakes.jpg";

const LoggedIn = (props) => {


    const SignOutHandler = (e) => {
        axios.post("/user/SignOut").then( (res) => {
            console.log(res);
            window.location.href = "/";
        })
    }

    return(
        <div className={"flex flex-col items-center text-white"}>

            <div className={"text-black"}>
                <h3>
                    Welcome {props.user}!
                </h3>
            </div>

            <figure >
                <img className={"w-24 h-24 rounded-full"} src={pancakes} alt={"pancakes.jpg"}/>
            </figure>

            <button className={"bg-blue-700 px-5 py-3 m-1 rounded-full hover:bg-blue-800"} type={"text"} onClick={SignOutHandler}>
                Sign Out
            </button>

        </div>
    )

}

export default LoggedIn;