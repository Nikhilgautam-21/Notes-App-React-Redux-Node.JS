const mongoose  = require('mongoose');
const Schema = mongoose.Schema;

const TodoSchema = new Schema({

    name:{
        type:String,
        required:true
    },
    description:{
        type:String,
        required:true
    },
    targetdate:{
        type:Date,
        required:true
    },
    completed:{
        type:Boolean,
        required:true
    }
})

const Todo = mongoose.model('Todo',TodoSchema);

module.exports = Todo;