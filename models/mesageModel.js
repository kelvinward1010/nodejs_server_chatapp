const mongoose = require('mongoose');


const mesageSchema = new mongoose.Schema({
    conversationId: String,
    senderId: String,
    content: String,
}, {
    timestamps: true
})


const messageModel = mongoose.model("Message", mesageSchema)

module.exports = messageModel;