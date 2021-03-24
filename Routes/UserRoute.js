import express from 'express'
import * as user from '../Controller/UserController.js'

const userRouter = express.Router();

userRouter.get('/getRecipes', user.getRecipes);
userRouter.post('/newRecipe', user.createRecipe);
userRouter.get('/getTop', user.getTopRecipes)

export default userRouter;