const express = require('express');
const projrouter = express.Router();
const projModel = require("../models/projModel")

projrouter.get('/', async (req,res)=>{
    const data = await projModel.find()
    res.send(data)
})


module.exports = projrouter;