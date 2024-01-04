const mongoose = require('mongoose');


const conversationSchema = new mongoose.Schema({
    members: Array,
}, {
    timestamps: true
})


const conversationModel = mongoose.model("Conversation", conversationSchema)

module.exports = conversationModel;