const express = require('express');
const todoRouter = express.Router();

const todoController = require('../controllers/todoController');



todoRouter.get('/', todoController.getTodu),


module.exports = todoRouter;