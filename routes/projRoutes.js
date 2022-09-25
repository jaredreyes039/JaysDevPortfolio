const express = require('express');
const projrouter = express.Router();
const projModel = require("../models/projModel")

projrouter.get('/', (req,res)=>{
    const data = projModel.find()
    res.send(data)
})


module.exports = projrouter