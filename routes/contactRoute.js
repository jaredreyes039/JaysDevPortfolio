const express = require('express');
const contactrouter = express.Router();
const contactModel = require("../models/contactModel")

contactrouter.get('/', async (req,res)=>{
    res.send("Denied, sorry mate!")
})


contactrouter.post('/', (req, res)=>{
    const newContact = new contactModel(
        {
            first: req.body.first,
            last: req.body.last,
            email: req.body.email,
            reason: req.body.reason
        }
    )
    newContact.save()
    res.send("Contact form submitted!")
})

module.exports = contactrouter