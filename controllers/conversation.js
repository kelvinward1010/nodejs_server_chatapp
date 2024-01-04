const conversationModel = require("../models/conversationModel");




const createConversation = async (req, res) => {
    const {firstId, secondId} = req.body;
    try {
        const conversation = await conversationModel.findOne({
            members: {$all: [firstId, secondId]}
        })

        if(conversation) return res.status(200).json(conversation);


        const newConversationModel = new conversationModel({
            members: [firstId, secondId]
        })

        const response = await newConversationModel.save()

        res.status(201).json(response)
    } catch (error) {
        res.status(500).json("Error: " + error.message)
    }
};

const getConversations = async (req, res) => {
    const userId = req.params.userId;
    try {
        const conversations = await conversationModel.find({
            members: {$in: [userId]}
        })

        res.status(200).json(conversations)
    } catch (error) {
        res.status(500).json("Error: " + error.message)
    }
};

const findConversation = async (req, res) => {
    const conversationId = req.params.conversationId;
    try {
        const conversation = await conversationModel.findById(conversationId)

        res.status(200).json(conversation)
    } catch (error) {
        res.status(500).json("Error: " + error.message)
    }
}



module.exports = {
    createConversation,
    getConversations,
    findConversation,
}