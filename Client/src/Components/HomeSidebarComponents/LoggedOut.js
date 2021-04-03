import React from 'react'


const LoggedOut = (props) => {

    return(
        <div className={"flex flex-col"}>
            {/* Here goes the user sign in thing*/}

            <a href={"/SignIn"}>
                Sign In
            </a>

            <a href={"/CreateUser"}>
                Create account
            </a>

        </div>
    )

}

export default LoggedOut;