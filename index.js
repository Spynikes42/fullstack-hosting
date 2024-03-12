const express = require("express")
const mongoose = require("mongoose")
const cors = require("cors")
const path = require("path")
require("dotenv").config({ path: "./.env" })


const app = express()
//middleware
app.use(express.json())
app.use(express.static("dist"))
app.use(cors({
    origin: process.env.FRONTEND_URL
}))

//routes
app.use("/api/todo", require("./routes/todoRoute"))
//404
app.use("*", (req, res) => {
    res.sendFile(path.join(__dirname, "dist", "index.html"))
})
//error handler
app.use((err, req, res, next) => {
    res.status(500).json({ message: err.message || "something went wrong" })
})
//db
mongoose.connect(process.env.MONGO_URL)

mongoose.connection.once("open", () => {
    console.log("MONGO CONNECTED")
    app.listen(process.env.PORT, console.log("SERVER RUNNNG"))
})