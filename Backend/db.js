const mongoose = require("mongoose")

mongoose.connect("mongodb+srv://preetyadav:H8vaiSkbRkh0YcOZ@cluster0.akot1za.mongodb.net/TODOs")

const todoSchema = mongoose.Schema({
    title: String,
    description: String,
    completed: Boolean,
})

const todo = mongoose.model("todo",todoSchema)

module.exports = {
    todo
}