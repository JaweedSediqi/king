import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import userRoute from './routes/userRoute.js';

const app = express();
app.use(express.json());
app.use(cors());
mongoose.connect('mongodb://localhost:27017/Login')
    .then(() => {
        console.log('Successfully connected to MongoDB');
        app.listen(5000, () => {
            console.log('Server is running on port 5000');
        });
    })
    .catch(() => {
        console.log('Cannot connect to MongoDB');
    });

// Define the userRoute
app.use('/', userRoute);

// Catch-all route to handle any unmatched routes

