const userModel = require('../models/userModel');

const findUser = async (req, res) => {
    const userId = req.params.userId;
    try {
        const user = await userModel.findById(userId);

        res.status(200).json(user)
    } catch (error) {
        res.status(500).json("Error: " + error.message)
    }
}

const getUsers = async (req, res) => {
    const userId = req.params.userId;
    try {
        const users = await userModel.find();

        res.status(200).json(users)
    } catch (error) {
        res.status(500).json("Error: " + error.message)
    }
}

module.exports = {
    findUser,
    getUsers,
}