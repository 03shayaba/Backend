const express = require("express");
const { createTodo, updateTodo } = require("./types");
const { todo } = require("./db");
const cors = require("cors");
const app = express();
app.use(express.json());
app.use(cors());
app.post("/todo", async function(req,res){
    const createPayload = req.body;
    const parsedPayload = createTodo.safeParse(createPayload);
    if(!parsedPayload.success){
        res.status(411).json({
            msg:"you sent the wrong inputs",
        })
        return;
    }
    // put it in mongodb
//    await todo.create({
    // title:createPayload.title,
    // description:createPayload.description,
    // completed:false
//    }) 
   res.json({
    msg:"Todo created"
   })
})
app.get("/todos",async function(req,res){
    const todos = await todo.find({});
    res.json({
        todos:[]
    })
})
app.put("/completed", async function(req,res){
    const updatePayload = req.body;
    const parsePayload = updateTodo.safeParse(updatePayload);
    if(!parsePayload.success){
        res.status(411).json({
            msg:"you sent the wrong inputs"
        })
        return;
    }
    await todo.updateOne(
        {_id:req.body.id},
   {$set: {completed:true }})
    res.json({
        msg:"Todo marked as completed"
    })
})
const PORT = 3000;
app.listen(PORT, () => {
    console.log(`🚀 Server is running on http://localhost:${PORT}`);
});