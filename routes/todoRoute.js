const express = require('express');
const todoRouter = express.Router();
const auth = require('../middleware/authenticate')




const todoController = require('../controllers/todoController');



todoRouter.post('/',auth, todoController.postTodu);

todoRouter.get('/', auth, todoController.getTodo);

todoRouter.delete('/:id', auth,todoController.deleteTodo);

todoRouter.put('/:id', auth, todoController.updateTodo);

todoRouter.patch('/:id', auth, todoController.updateSingleTodo)


module.exports = todoRouter;