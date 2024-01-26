const express = require('express');
const mongoo = require('mongoose');
const cors = require('cors'); // we make request from one domian to another domain
const todoModelj = require("./Models/todo")
const app = express();
app.use(cors())
app.use(express.json())

mongoo.connect('mongodb://127.0.0.1:27017/tast') // connect the db using data base and create database
app.post('/add', (req,res)=>{
    const task = req.body.task;
    todoModelj.create({
        task:task // pass the task
    }).then(result =>res.json(result))
    .catch(err=>console.log(err))

})
app.get('/get',(req,res)=>{
    todoModelj.find()
    .then(result => res.json(result))
    .catch(err => res.json(err))
})
app.put('/update/:id',(req, res) =>{
    const {id} = req.params;
    todoModelj.find
})
app.listen(3001, ()=>{
    console.log("server us start") // port 
})