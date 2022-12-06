const express = require("express");
const blogModel = require("../models/blog.model");
const blogRoute = express.Router();

blogRoute.get("/", async (req, res) => {
    let blog = await blogModel.find()
    res.send(blog)
})

blogRoute.get("/:id", async (req, res) => {
    try {
        let user = await blogModel.find({ _id: req.params.id })
        res.send(user)
    } catch (e) {
        res.send("blog Not Found")
    }
})

blogRoute.post("/", async (req, res) => {
    try {
        let body = req.body
        const create = await blogModel.create({ ...body })
        res.send(create);
    } catch (e) {
        res.send(e.message)
    }
})

blogRoute.delete("/:id", async (req, res) => {
    try {
        let user = await blogModel.deleteOne({ _id: req.params.id })
        res.send(user)
    } catch (e) {
        res.send(e.message)
    }
})

module.exports = blogRoute