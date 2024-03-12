const asyncHandler = require("express-async-handler")
const Todo = require("../models/Todo")

exports.addTodo = asyncHandler(async (req, res) => {
    await Todo.create(req.body)
    res.json({ message: "Todo Creat Success" })
})
exports.getTodo = asyncHandler(async (req, res) => {
    const result = await Todo.find(req.body)
    res.json({ message: "Todo Creat Success", result })
})
exports.updateTodo = asyncHandler(async (req, res) => {
    await Todo.findByIdAndUpdate(req.params.id, req.body)
    res.json({ message: "Todo Creat Success" })
})
exports.deleteTodo = asyncHandler(async (req, res) => {
    await Todo.findByIdAndDelete(req.params.id)
    res.json({ message: "Todo Creat Success" })
})