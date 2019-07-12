const express  = require('express');
const todoRouter = express.Router();
const Todo = require('../models/todo');

todoRouter.post("/addtodo",function(req,res){
    Todo.create(req.body).then(function(todo){
        res.status(200).send("Success "+todo,)
    })
});

todoRouter.get("/todos",function(req,res){
    Todo.find({}).then(eachOne =>{
        res.send(eachOne);
    })
})

todoRouter.delete("/delete/:id",function(req,res){
    Todo.findByIdAndRemove({_id:req.params.id}).then(function(todo){
        res.status(200).send("Deleted"+todo);
    }).catch(function(err){
        err.status(400).send(err)
    })
})

todoRouter.put("/update/:id",function(req,res){
    Todo.findOneAndUpdate({_id:req.params.id},req.body,{new:true}).then(function(todo){
        res.status(200).send("Updated",todo)
    }).catch(function(err){
        res.status(400).send(err)
    })
})


module.exports = todoRouter;