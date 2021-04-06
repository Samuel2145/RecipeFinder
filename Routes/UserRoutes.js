import express from 'express'
import * as user from '../Controllers/UserController.js'

const userRouter = express.Router();

userRouter.post("/CreateAccount", user.createUser);
userRouter.post("/SignIn", user.userLogin);
userRouter.post("/SignOut", user.userLogout)
userRouter.get("/GetOptions", user.getOptions);


export default userRouter;