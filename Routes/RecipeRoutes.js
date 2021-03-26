import express from 'express'
import * as recipe from '../Controllers/RecipeController.js'

const recipeRouter = express.Router();

recipeRouter.get('/getRecipes', recipe.getRecipes);
recipeRouter.post('/newRecipe', recipe.createRecipe);
recipeRouter.get('/getTop', recipe.getTopRecipes)

export default recipeRouter;