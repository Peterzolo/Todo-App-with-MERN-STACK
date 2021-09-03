const express = require('express');
const app = express();
const mongoose = require('mongoose');
const cors = require('cors');

require('dotenv').config();

const todoRouter = require('./routes/todoRoute')  
const userSignUpRouter = require('./routes/users/userSignUp');
const userSignInRouter = require('./routes/users/userSignIn')

app.use(cors());   
app.use(express.json());

    
const port =  5000
    
app.use('/api/todos/', todoRouter);  
app.use('/api/signup/', userSignUpRouter);  
app.use('/api/signin/', userSignInRouter);

const mongoDb_connect = process.env.MONGODB_CONNECTION

app.listen(port, ()=>{
    console.log(`Server started on port ${port}`)         
})

mongoose.connect(mongoDb_connect,{useNewUrlParser : true}).then(
    console.log('MongoDb successfully connected')
).catch( (error) =>{
    console.error("Could not establish database connection.", error.message)
})

