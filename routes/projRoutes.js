const express = require('express');
const projrouter = express.Router();
const projModel = require("../models/projModel")

projrouter.get('/', async (req,res)=>{
    const data = await projModel.find()
    res.send(data)
})


// REMOVE POST CAPABILITY

projrouter.post('/', (req, res)=>{
    const newProj = new projModel(
        {
            name: req.body.name,
            desc: req.body.desc,
            tags: req.body.tags,
            stack: req.body.stack,
            img_url: req.body.img_url
        }
    )
    newProj.save()
    res.send("Successfully added project!")
})

module.exports = projrouter