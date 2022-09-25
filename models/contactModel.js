const mongoose = require('mongoose')
const {Schema} = mongoose

const ContactSchema = new Schema({
    first: {
        type: String,
    },
    last: {
        type: String
    },
    email: {
        type: String,
    },
    reason: {
        type: String,
    }
})

const ContactData = mongoose.model("ContactForm", ContactSchema)
module.exports = ContactData;