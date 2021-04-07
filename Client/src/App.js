import './App.css';
import './index.css';
import React, {useState} from "react";
import {BrowserRouter as Router, Link, Route, Switch} from "react-router-dom";
import HomeSidebar from "./Components/HomeSidebarComponents/HomeSidebar.js";
import FoodSearch from "./Components/SearchComponents/FoodSearch.js";
import AddRecipe from "./Components/AddRecipeComponents/AddRecipe.js";
import CreateAccountForm from "./Components/HomeSidebarComponents/CreateAccountForm.js";
import SignInForm from "./Components/HomeSidebarComponents/SignInForm";
import Recommended from "./Components/RecommendedComponents/Recommended";

function App() {

    const [Showing, setShowing] = useState(false);
    const [Hidden, setHidden] = useState("")

    const setHide = (newVal) => {
        setShowing(newVal);
        setHidden("hidden");
    }

    return (

        <div className={"flex flex-row bg-gray-50"}>

            <HomeSidebar setHide={setHide} hidden={Hidden}/>

            <Router>
                <Switch>

                    {/*<Route exact path={"/"} component={}/>*/}
                    <Route path={"/Search"} component={FoodSearch}/>
                    <Route path={"/CreateUser"} component={CreateAccountForm}/>
                    <Route path={"/NewRecipe"} component={AddRecipe}/>
                    <Route path={"/SignIn"} component={SignInForm}/>
                    <Route path={"/TopRecipes"} component={Recommended}/>


                </Switch>

            </Router>

        </div>
    );
}

export default App;
