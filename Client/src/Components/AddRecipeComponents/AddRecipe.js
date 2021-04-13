import React, {useEffect, useState} from 'react'
import Cuisine from "./Cuisine.js";
import TagContainer from "./TagContainer";
import RecipeSteps from "./RecipeSteps";
import axios from 'axios';

const AddRecipe = (props) => {

    const [rName, setRName] = useState("");
    const [Description, setDescription] = useState("");
    const [CuisineType, setCuisineType] = useState("")
    const [Ingredients, setIngredients] = useState([]);
    const [Recipe, setRecipe] = useState([]);
    const [Tags, setTags] = useState([])
    const [CuisineList, setCuisineList] = useState([]);

    useEffect( () => {
        axios.get("/recipe/getCuisines").then( (res) => {
            setCuisineList(res.data);
        })
    },[])


    // Handles submit of form
    const submitHandler = (e) => {

        e.preventDefault();

        const NewRecipe = {
            Name: rName,
            Description: Description,
            Cuisine: CuisineType,
            Ingredients: Ingredients,
            Steps: Recipe,
            TagList: Tags
        }

        axios.post("/recipe/newRecipe", {NewRecipe}).then((res) => {
            ///To-Do: figure out what to do after creating new recipe (perhaps a redirect or success message)
        }).catch((err) => {
            ///To-Do: If it fails, find out why and set markers on the invalid fields in form
            ///       Perhaps would be better to provide client-side validation instead fo avoid this in the long term
        });

    }

    //Callback setter's used to change state from within child component
    const changeCuisine = (newVal) => {
        setCuisineType(newVal);
    }

    const addTag = (newVal) => {
        const currentTags = [...Tags];
        currentTags.push(newVal);
        setTags(currentTags);
    }

    const deleteTag = (valToDelete) => {
        const currentTags = [...Tags];
        currentTags.splice(currentTags.indexOf(valToDelete), 1);
        setTags(currentTags);
    }

    const addStep = (newVal) => {
        const currentSteps = [...Recipe];
        currentSteps.push(newVal);
        setRecipe(currentSteps);
    }

    const deleteStep = (valToDelete) => {
        const currentSteps = [...Recipe];
        currentSteps.splice(currentSteps.indexOf(valToDelete), 1);
        setRecipe(currentSteps);
    }

    const addIng = (newVal) => {
        const currentSteps = [...Ingredients];
        currentSteps.push(newVal);
        setIngredients(currentSteps);
    }

    const deleteIng = (valToDelete) => {
        const currentSteps = [...Ingredients];
        currentSteps.splice(currentSteps.indexOf(valToDelete), 1);
        setIngredients(currentSteps);
    }


    return(
        <div className={"flex justify-center bg-gray-50 w-3/4"}>
            <div className={"w-1/2 bg-white rounded shadow-lg p-8 m-4"}>

                <h1 className={"block w-full text-center text-grey-darkest mb-6"}>Create-A-Recipe</h1>

                <form className={"flex flex-col item-center mb-4"}>

                    <div className={"flex flex-col mb-4 md:w-full"}>
                        <h2>
                            Recipe Name
                        </h2>
                        <input className={"border py-2 px-3 text-grey-darkest rounded-lg"}
                                  onChange={(e) => {setRName(e.target.value)}}
                        />
                    </div>

                    <div className={"flex flex-col my-2"}>
                        <h2>
                            Description (Optional)
                        </h2>
                        <textarea className={"border py-2 px-3 text-grey-darkest rounded-lg"}
                                  onChange={(e) => {setDescription(e.target.value)}}
                        />
                    </div>


                    <Cuisine list={CuisineList} change={changeCuisine}/>

                    <TagContainer name={"Tags"} limit={5} current={Tags} addNew={addTag} delete={deleteTag}/>

                    <TagContainer name={"Ingredients"} limit={15} current={Ingredients} addNew={addIng} delete={deleteIng}/>

                    <RecipeSteps current={Recipe} addNewStep={addStep} deleteStep={deleteStep}/>

                    <button className={"bg-blue-700 px-5 py-3 m-1 rounded-full text-white hover:bg-blue-800"} type={"text"}
                            onClick={submitHandler}>

                        Submit For Review
                    </button>
                </form>


            </div>
        </div>

    )
}

export default AddRecipe;
