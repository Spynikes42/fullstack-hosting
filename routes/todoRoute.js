const router = require("express").Router()
const todoController = require("./../controller/todoController")

router
    .get("/", todoController.getTodo)
    .post("/add", todoController.addTodo)
    .put("/update/:id", todoController.updateTodo)
    .delete("/delete/:id", todoController.deleteTodo)

module.exports = router