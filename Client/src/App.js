import './App.css';
import './index.css';
import React from "react";
import LoginBar from "./Components/LoginComponents/LoginBar";
import FoodSearch from "./Components/SearchComponents/FoodSearch";
//import AddRecipe from "./Components/CreateRecipeComponents/AddRecipe";

function App() {
  return (
    <div>

        <LoginBar/>
        <FoodSearch/>


        {/*<AddRecipe/>*/}

    </div>
  );
}

export default App;
