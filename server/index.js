const express = require("express");
const mongoose  = require("mongoose");
const bodyParser = require("body-parser");
const app = express();
const todoRouter = require('./routes/todo-api');
const cors  = require('cors')
const PORT = process.env.PORT || 8002;


app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());

mongoose.connect("mongodb://localhost/todoist",{useNewUrlParser:true});
mongoose.Promise = global.Promise;

app.use(cors())

app.use('/api',todoRouter)

app.listen(PORT);
console.log("Server is running on Port "+ PORT);