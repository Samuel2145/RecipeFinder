import './App.css';
import './index.css';
import React from "react";
import {BrowserRouter as Router, Link, Route, Switch} from "react-router-dom";
import HomeSidebar from "./Components/HomeSidebarComponents/HomeSidebar.js";
import FoodSearch from "./Components/SearchComponents/FoodSearch.js";
import AddRecipe from "./Components/AddRecipeComponents/AddRecipe.js";
import CreateAccountForm from "./Components/HomeSidebarComponents/CreateAccountForm.js";
import SignInForm from "./Components/HomeSidebarComponents/SignInForm";

function App() {
  return (
    <div className={"flex flex-row"}>

        <HomeSidebar/>

        <Router>
            <Switch>

                {/*<Route exact path={"/"} component={}/>*/}
                <Route path={"/Search"} component={FoodSearch}/>
                <Route path={"/CreateUser"} component={CreateAccountForm}/>
                <Route path={"/newRecipe"} component={AddRecipe}/>
                <Route path={"/SignIn"} component={SignInForm}/>


            </Switch>

        </Router>

    </div>
  );
}

export default App;
