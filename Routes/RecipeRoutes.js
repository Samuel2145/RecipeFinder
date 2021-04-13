import express from 'express'
import * as recipe from '../Controllers/RecipeController.js'

const recipeRouter = express.Router();

recipeRouter.post('/newRecipe', recipe.createRecipe);
recipeRouter.get('/getCuisines', recipe.getCuisineTypes);

recipeRouter.get('/getRecipes', recipe.getRecipes);
recipeRouter.get('/getTop', recipe.getTopRecipes)

export default recipeRouter;