
const express = require('express');

const userRouter = express.Router();


const userSignInConroller  = require('../../controllers/userControllers');



userRouter.post('/', userSignInConroller.userSignIn);


module.exports = userRouter;