const express = require("express")
const cors = require("cors")
const app = express();

app.use(cors())

const {createTodo,updateTodo} = require("./types");
const { todo } = require("./DB");


app.use(express.json());

app.post("/todo", async(req,res)=>{
    const payLoad = req.body
    const parsedPayLoad = createTodo.safeParse(payLoad)
    console.log(`safe parsed - ${parsedPayLoad}`)
    if(!parsedPayLoad.success){
        res.status(411).json({msg : "wrong inputs for todo"})
        return
    }
    // insert todo logic 
    await todo.create({
        title : payLoad.title,
        description : payLoad.description,
        completed : false,
    })
    res.json({msg : "todo created"})

    
})
app.get("/todos", async (req,res)=>{
    const todos = await todo.find({})
    res.json({todos})
})
app.put("/completed", (req,res)=>{
    const updatePayLoad = req.body
    const parsedUpdatedTodo = updateTodo.safeParse(updatePayLoad)
    if(!parsedUpdatedTodo.success){
        res.status(411).json({msg : "wrong inputs for update"})
    }
})

app.listen(3000);