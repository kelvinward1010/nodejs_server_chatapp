const bcrypt = require('bcrypt');
const validator = require('validator');
const userModel = require('../models/userModel');
const { createToken } = require('../middleware/token');


const register = async (req, res) => {
    const {
        name,
        email,
        password
    } = req.body;

    try {
        let user = await userModel.findOne({ email});
        if (user) return res.status(200).json("User has been registered!");
        if(!name || !email || !password) return res.status(400).json("All fields are required!");
        if(!validator.isEmail(email)) return res.status(400).json("Email not matched!");
        if(!validator.isStrongPassword(password)) return res.status(400).json("Password not strong!");

        const newUser = new userModel({name, email, password});

        const salt = await bcrypt.genSalt(10);
        newUser.password = await bcrypt.hash(newUser.password, salt)

        await newUser.save()

        const token = createToken(newUser._id)

        res.status(201).json({...newUser._doc, token});
    } catch (error) {
        res.status(500).json("Error: " + error.message)
    }
}


const login = async (req, res) => {
    const {
        email,
        password
    } = req.body;

    try {
        let user = await userModel.findOne({ email});
        if (!user) return res.status(400).json("Invalid email or password!");

        const isValidPassword = await bcrypt.compare(password, user?.password)

        if(!isValidPassword) return res.status(400).json("Invalid password!");

        const token = createToken(user._id)

        res.status(201).json({_id: user?._id, name: user?.name, email: user?.email, token});

    } catch (error) {
        res.status(500).json("Error: " + error.message)
    }
}


module.exports = {
    register,
    login,
}