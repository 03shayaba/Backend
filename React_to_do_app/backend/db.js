const mongoose = require("mongoose");
mongoose.connect("mongodb://localhost:27017/");
const todoSchema = mongoose.Schema({
    title:String,
    description:String,
    completed:{
        type:Boolean,
        defauly:false
    }
})

const todo = mongoose.model('todos', todoSchema);
module.exports = {
    todo
}