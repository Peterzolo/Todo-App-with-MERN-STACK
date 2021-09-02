const mongoose = require('mongoose');


const TodoSchema = new mongoose.Schema({
    
    task : {
        type : String,
        minlength : 4,
        maxlength : 60,
        required : true
    },
    description : {
        type : String,
        minlength : 10,
        maxlength : 300
    },
    author : {
        type : String,
        minlength : 3,
        maxlength : 200
    },
    userId : {
        type : String
        
    },
    isComplete : {
        type : Boolean   
    },
    date : {
        type : Date,
        default : new Date   
    }
});

const Todo = mongoose.model("todo", TodoSchema);

module.exports = Todo;