const express = require('express');
const mongoose = require('mongoose');
const app = express();
const dotenv = require('dotenv').config();

const PORT = process.env.PORT;
const MONGODB_URL = process.env.MONGODB_URL;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const connectToDB = async () => {
    try {
        await mongoose.connect(MONGODB_URL);
        console.log("Connected to MongoDB");
    } catch (error) {
        console.log("Error in connecting to MongoDB", error);
    }
}

const setUpAndStartServer = async () => {
    app.listen(PORT, async () => {
        console.log(`Server running at PORT: ${PORT}`)
        await connectToDB();
    });
}

setUpAndStartServer();