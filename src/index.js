const express = require('express');
const app = express();
const mongoose = require('mongoose');
const dotenv = require('dotenv').config();

const ApiRoutes = require('./routes/product');

app.use(express.json());
app.use('/api/product', ApiRoutes);

const connectToDB = async () => {
    try {
        await mongoose.connect(process.env.MONGODB_URL);
        console.log("Connected to the database.")
    } catch (error) {
        console.log(error.message)
    }
}

const SetUpAndStartServer = async () => {
    app.listen(process.env.PORT, async () => {
        console.log(`Server started on Port: ${process.env.PORT}`);
        await connectToDB();
    });
}

SetUpAndStartServer();
