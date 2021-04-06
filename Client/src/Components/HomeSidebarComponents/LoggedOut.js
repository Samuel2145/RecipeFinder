import React from 'react'
import pancakes from '../Images/pancakes.jpg'


const LoggedOut = (props) => {

    return(
        <div className={"flex flex-col items-center text-white"}>

            <figure >
                <img className={"w-24 h-24 rounded-full"} src={pancakes} alt={"pancakes.jpg"}/>
            </figure>

            <a className={"bg-blue-700 px-5 py-3 m-1 rounded-full hover:bg-blue-800"} href={"/SignIn"}>
                Sign In
            </a>

            <a className={"bg-blue-700 px-5 py-3 m-1 rounded-full hover:bg-blue-800"} href={"/CreateUser"}>
                Create account
            </a>

        </div>
    )

}

export default LoggedOut;