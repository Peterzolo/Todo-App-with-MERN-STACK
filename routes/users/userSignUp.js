const express = require('express');

const userRouter = express.Router();

const userSignUpController = require('../../controllers/userControllers');


userRouter.get('/', userSignUpController.getUsers);

userRouter.post('/', userSignUpController.userSignUp);









module.exports = userRouter;