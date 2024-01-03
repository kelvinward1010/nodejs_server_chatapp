const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const cors = require('cors');



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



app.get('/', () => {
    return "Hello, world!";
})







app.listen(1010, () => {
    connect();
    console.log("Server listening on http://localhost:1010")
})