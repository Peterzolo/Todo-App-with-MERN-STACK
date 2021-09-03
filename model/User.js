const mongoose = require('mongoose');


const UserSchema = new mongoose.Schema({
    name : {
        type: String,
        minlength : 3,
        maxlength : 100,
        required : true

    },
    email : {
        type : String,
        unique : true,
        minlength : 3,
        maxlength : 250,
        required : true

    },
    password : {
        type : String,
        minlength : 8,
        maxlength : 300,
        required : true

    }
});

const User = mongoose.model("user", UserSchema);

exports. User = User;