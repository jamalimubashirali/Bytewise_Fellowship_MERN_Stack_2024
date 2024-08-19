import express from 'express';
import dotenv from 'dotenv';
import {notFound} from './middleware/not-found.js'
import {errorHandlerMiddleware} from './middleware/error-handler.js'
import {connectDB} from './db/connect.js';
import router from './routes/products.js';
import 'express-async-errors';

// Server initialization
const app = express();
dotenv.config();
const port = process.env.PORT || 3000

// Middlewares in Use
app.use(express.json())

// Api Routes
app.get('/' , (req , res) => {
    res.send({
        msg : "This working fine"
    });
});

app.use('/api/products', router);

// Error Handler Middlewares
app.use(notFound);
app.use(errorHandlerMiddleware);

// Port on which server is running
const start = async () => {
    try {
        await connectDB(process.env.MONGOS_URI).then(
            console.log("Connected to Database")
        )
        app.listen(3000, console.log("The server is running on Port 3000"));
    } catch (error) {
        console.log(error);
    }
}

start();
