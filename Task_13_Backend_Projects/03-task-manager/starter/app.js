import express from 'express';
import tasks from './routes/tasks.js';
import { connectDB } from './db/connect.js';
import dotenv from 'dotenv';

dotenv.config();

// Database Connection
import './db/connect.js'

// Port on which server is running on
const port = process.env.PORT

// Sever Initalization.
const app = express();

// Middlewares in use
app.use(express.json());
app.use(express.static('./public'));
app.use('/api/tasks', tasks);

// Staring point of the application
const start = async () => {
    try {
        await connectDB(process.env.MONGO_URI).then(() => {
            console.log("Connection With the sever successfull");
        })
        app.listen(port , console.log(`Server is running on ${port}...`));
    } catch (error) {
        console.log(error);
    }
}

start();

