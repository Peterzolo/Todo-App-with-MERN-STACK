const express = require('express');
const todoRouter = express.Router();




const todoController = require('../controllers/todoController');



todoRouter.post('/', todoController.postTodu);
todoRouter.get('/', todoController.getTodo),


module.exports = todoRouter;