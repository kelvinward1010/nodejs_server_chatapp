const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const cors = require('cors');
const userRoute = require('./routes/user');
const authRoute = require('./routes/auth');
const conversationRoute = require('./routes/conversation');



const app = express();
dotenv.config();
app.use(cors());
app.use(express.json());

const connect = async () => {
    try {
        await mongoose.connect(process.env.MONGOOSE_URL) 
        console.log('Connected to MongoDB!')       
    } catch (error) {
        console.log(error)
    }
}


app.use("/api/users", userRoute);
app.use("/api/auth", authRoute);
app.use("/api/conversations", conversationRoute);

app.get(("/"), (req, res) => {
    res.send("Welcome my server chatapp...")
})


app.listen(1010, () => {
    connect();
    console.log("Server listening on http://localhost:1010")
})