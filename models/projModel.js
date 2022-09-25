const mongoose = require('mongoose')
const {Schema} = mongoose

const ProjSchema = new Schema({
    name: {
        type: String,
    },
    desc: {
        type: String
    },
    tags: {
        type: "Mixed",
    },
    stack: {
        type: "Mixed"
    },
    img_url: {
        type: String
    }
})

const ProjectData = mongoose.model("Project", ProjSchema)
module.exports = ProjectData;