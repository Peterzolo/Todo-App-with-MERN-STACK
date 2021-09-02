const express = require('express');
const app = express();

const todoRouter = require('./routes/todoRoute')

const port =  5000


app.use('/api/todo/', todoRouter);

app.listen(port, ()=>{
    console.log(`Server started on port ${port}`)         
})


