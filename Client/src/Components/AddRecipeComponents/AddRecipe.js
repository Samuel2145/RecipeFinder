import React, {useState} from 'react'
import TasteButton from "./TasteButton.js";

const AddRecipe = () => {

    const [Umami, setUmami] = useState(1);
    const [Sweet, setSweet] = useState(1);
    const [Salty, setSalty] = useState(1);
    const [Sour, setSour] = useState(1);
    const [Bitter, setBitter] = useState(1);

    const [rName, setRName] = useState("");
    const [Description, setDescription] = useState("");
    const [Ingredients, setIngredients] = useState("");
    const [Recipe, setRecipe] = useState("");

    const newUmami =(newVal) => {
        setUmami(newVal);
    }

    const newSweet =(newVal) => {
        setSweet(newVal);
    }

    const newSalty =(newVal) => {
        setSalty(newVal);
    }

    const newSour =(newVal) => {
        setSour(newVal);
    }

    const newBitter =(newVal) => {
        setBitter(newVal);
    }


    const submitHandler = (e) => {

        e.preventDefault();
        console.log(Umami);
        console.log(Sweet);
        console.log(Salty);
        console.log(Sour);
        console.log(Bitter);
        console.log(rName);
        console.log(Description);
        console.log(Ingredients);
        console.log(Recipe);

    }


    return(
        <div className="flex items-center h-screen w-full bg-gray-50">
            <div className="w-screen bg-white rounded shadow-lg p-8 m-4 md:max-w-sm md:mx-auto">


                <h1 className="block w-full text-center text-grey-darkest mb-6">Create-A-Recipe</h1>

                <form className="mb-4 md:flex md:flex-wrap md:justify-between" action="/" method="post">

                    <div className="flex flex-col mb-4 md:w-full">
                        <textarea className="border py-2 px-3 text-grey-darkest rounded-lg"
                                  placeholder="Recipe Name"
                                  onChange={(e) => {setRName(e.target.value)}}
                        />
                    </div>

                    <div className="flex flex-col mb-4 md:w-full">
                        <textarea className="border py-2 px-3 text-grey-darkest rounded-lg"
                                  placeholder="Description (Optional)"
                                  onChange={(e) => {setDescription(e.target.value)}}
                        />
                    </div>

                    <div className="flex flex-col mx-1 mb-6 md:w-1/6">
                        <label className="text-center">{"Umami"}</label>
                        <TasteButton name={"Umami"} value={Umami} setValue={newUmami}/>
                    </div>

                    <div className="flex flex-col mx-1 mb-6 md:w-1/6">
                        <label className="text-center">{"Sweet"}</label>
                        <TasteButton name={"Sweet"} value={Sweet} setValue={newSweet}/>
                    </div>

                    <div className="flex flex-col mx-1 mb-6 md:w-1/6">
                        <label className="text-center">{"Sour"}</label>
                        <TasteButton name={"Sour"} value={Sour} setValue={newSour}/>
                    </div>

                    <div className="flex flex-col mx-1 mb-6 md:w-1/6">
                        <label className="text-center">{"Bitter"}</label>
                        <TasteButton name={"Bitter"} value={Bitter} setValue={newBitter}/>
                    </div>

                    <div className="flex flex-col mx-1 mb-6 md:w-1/6">
                        <label className="text-center">{"Salty"}</label>
                        <TasteButton name={"Salty"} value={Salty} setValue={newSalty}/>
                    </div>


                    <div className="flex flex-col mb-6 md:w-full">
                        <label className="mb-2 text-lg text-grey-darkest">Ingredients</label>
                        <textarea className="border py-2 px-3 text-grey-darkest rounded-lg"
                                  placeholder="Comma-Separated"
                                  onChange={(e) => {setIngredients(e.target.value)}}
                        />
                    </div>

                    <div className="flex flex-col mb-6 md:w-full">
                        <label className="mb-2 text-lg text-grey-darkest" htmlFor="rName">Recipe</label>
                        <textarea className="border py-2 px-3 text-grey-darkest rounded-lg"
                                  placeholder="Newline between steps"
                                  onChange={(e) => {setRecipe(e.target.value)}}
                        />
                    </div>

                    <button className="block bg-gradient-to-br from-yellow-400 to-yellow-700 text-white uppercase text-lg mx-auto p-4 rounded" type="text" onClick={submitHandler}>
                        Submit for review
                    </button>
                </form>


            </div>
        </div>

    )


}

export default AddRecipe;
