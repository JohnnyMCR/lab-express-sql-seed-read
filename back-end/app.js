const express = require("express");
const app = express();
const cors = require("cors");
// const songController = require("./controllers/songController");

app.use(express.json());
app.use(cors());

// app.use("/song", songController)

app.get("/", (req, res) => {
    res.send("Welcome")
})

app.get("*", (req, res) => {
    res.status(404).json({error: "Page not found"});
})

module.exports = app;