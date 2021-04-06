import React, {useState} from 'react'
import axios from 'axios'


const CreateAccountForm = (props) => {

    const [Username, setUsername] = useState("");
    const [Email, setEmail] = useState("");
    const [Password, setPassword] = useState("")

    const creationHandler = (e) => {

        e.preventDefault();

        const user = {
            Username: Username,
            Email: Email,
            Password: Password
        }

        axios.post("/user/CreateAccount", {user}).then( (res) => {
            console.log(res);
            window.location.href = '/SignIn';

        }).catch( (err) => {
            console.log(err);
        })

    }

    return(
        <div className="flex items-center h-screen w-full bg-gray-50">
            <div className="w-screen bg-white rounded shadow-lg p-8 m-4 md:max-w-sm md:mx-auto">


                <h1 className="block w-full text-center text-grey-darkest mb-6">Create Account</h1>

                <form className="flex flex-col items-center mb-4">

                    <div className="flex flex-col mb-4 md:w-full">
                        <input className="border py-2 px-3 text-grey-darkest rounded-lg"
                                  placeholder="Username"
                                  onChange={(e) => {setUsername(e.target.value)}}
                        />
                    </div>

                    <div className="flex flex-col mb-4 md:w-full">
                        <input className="border py-2 px-3 text-grey-darkest rounded-lg"
                                  placeholder="Email" type="email"
                                  onChange={(e) => {setEmail(e.target.value)}}
                        />
                    </div>

                    <div className="flex flex-col mb-4 md:w-full">
                        <input className="border py-2 px-3 text-grey-darkest rounded-lg"
                                  placeholder="Password" type="password"
                                  onChange={(e) => {setPassword(e.target.value)}}
                        />
                    </div>

                    <button className={"bg-blue-700 px-5 py-3 m-1 rounded-full text-white hover:bg-blue-800"} type="text" onClick={creationHandler}>
                        Create Account
                    </button>

                </form>

            </div>
        </div>

    )


}


export default CreateAccountForm;