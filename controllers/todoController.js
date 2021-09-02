
const Todo = require('../model/Todo');
const Joi = require('joi');





exports.getTodo = async(req, res) =>{

    try {
        const allTodos = await Todo.find().sort({date : -1})
        res.send(allTodos);
    } catch (error) {
        res.status(500).send(error.message)
    }

};

exports.postTodu = async(req, res) =>{

    const schema = Joi.object({
       task : Joi.string().min(3).max(80).required(),
       description : Joi.string().min(10).max(500),
       author : Joi.string().min(4).max(100).required(),
       userId : Joi.string(),
       isComplete : Joi.boolean(),    
       date : Joi.date()
    }).options({abortEarly:false})

    const {error} = schema.validate(req.body);
    if(error){
        return res.status(400).send(error.details[0].message);
    }
   
    
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

exports.deleteTodo = async(req, res) =>{

    const deletedItem = await Todo.findByIdAndDelete(req.params.id);
    res.send(deletedItem);     
    
}



