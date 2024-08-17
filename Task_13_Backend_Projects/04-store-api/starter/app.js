import express from 'express';
import dotenv from 'dotenv';
import {notFound} from './middleware/not-found.js'
import {errorHandlerMiddleware} from './middleware/error-handler.js'

// Server initialization
const app = express();
dotenv.config();

// Middlewares in Use
app.use(express.json())

// Api Routes
app.get('/' , (req , res) => {
    res.send({
        msg : "This working fine"
    })
})

// Error Handler Middlewares
app.use(notFound)
app.use(errorHandlerMiddleware)

// Port on which server is running
app.listen(3000, console.log("The server is running on Port 3000"));

