
const Todo = require('../model/Todo');
const mongoose = require('mongoose');

exports.getTodo = (req, res) =>{
    res.send('Get Request is working')
};

exports.postTodu = async(req, res) =>{
    
    const {task, description, author, userId, isComplete,date} = req.body;



    let todo = new Todo({
        task,
        description,
        author,
        userId,    
        isComplete,
        date,
        } 
    );
    try {
        todo = await todo.save()
       
        res.send(todo)
    } catch (error) {
        res.status(500).send(error.message);
    }
};



