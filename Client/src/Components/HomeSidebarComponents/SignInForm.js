import React, {useState} from 'react'
import axios from 'axios';

const SignInForm = (props) => {

    const [Username, setUsername] = useState("");
    const [Password, setPassword] = useState("")

    const SignInHandler = (e) => {

        e.preventDefault();

        const user = {
            Username:Username,
            Password: Password
        }

        axios.post("/user/SignIn", {user}).then( (res) => {

            console.log(res);
            window.location.href = "/Search"
        }).catch( (err) => {
            console.log(err);
        })

    }

    return(
        <div className="flex items-center h-screen w-full bg-gray-50">
            <div className="w-screen bg-white rounded shadow-lg p-8 m-4 md:max-w-sm md:mx-auto">


                <h1 className="block w-full text-center text-grey-darkest mb-6">Sign In</h1>

                <form className="mb-4 md:flex md:flex-wrap md:justify-between">

                    <div className="flex flex-col mb-4 md:w-full">
                        <input className="border py-2 px-3 text-grey-darkest rounded-lg"
                               placeholder="Username"
                               onChange={(e) => {setUsername(e.target.value)}}
                        />
                    </div>

                    <div className="flex flex-col mb-4 md:w-full">
                        <input className="border py-2 px-3 text-grey-darkest rounded-lg"
                               placeholder="Password" type="password"
                               onChange={(e) => {setPassword(e.target.value)}}
                        />
                    </div>

                    <button className="block bg-gradient-to-br from-yellow-400 to-yellow-700 text-white uppercase text-lg mx-auto p-4 rounded"
                            type="text" onClick={SignInHandler}>
                        Sign In
                    </button>
                </form>
            </div>
        </div>

    )


}


export default SignInForm;