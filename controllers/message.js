const messageModel = require("../models/mesageModel");



const createMessage = async (req, res) => {
    const {
        conversationId,
        senderId,
        content,
    } = req.body;

    try {

        const message = new messageModel({
            conversationId,
            senderId,
            content,
        })

        const response = await message.save();

        res.status(201).json(response);
        
    } catch (error) {
        res.status(500).json("Error: " + error.message)
    }
}


const getMessages = async (req, res) => {
    const {
        conversationId,
    } = req.params.conversationId;

    try {
        const messages = await messageModel.find(conversationId);
        res.status(200).json(messages);
    } catch (error) {
        res.status(500).json("Error: " + error.message)
    }
}



module.exports = {
    createMessage,
    getMessages,
}