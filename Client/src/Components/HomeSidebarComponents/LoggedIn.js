import React from 'react'
import axios from 'axios'

const LoggedIn = (props) => {


    const SignOutHandler = (e) => {


        axios.post("/user/SignOut").then( (res) => {
            console.log(res);
            window.location.href = "/";
        })


    }

    return(
        <div>

            <button type={"text"} onClick={SignOutHandler}>
                Sign Out
            </button>

        </div>
    )

}

export default LoggedIn;