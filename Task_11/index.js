import express from 'express';
import posts from './routes/posts.js'
import logger from './middleware/logger.js';
import errorHandler from './middleware/error.js';
import notFound from './middleware/notFound.js';
import {fileURLToPath} from 'url';
import path from 'path';

const app  = express();

app.use(express.json());
app.use(express.urlencoded({ extended : false }));
app.use(logger);

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

app.use(express.static(path.join(__dirname, 'public')));

app.use('/api/posts', posts);


// Catch all Error Middleware

app.use(notFound);

// Error Handler Middleware
app.use(errorHandler);

app.listen(8000, () => console.log("Server is running on port 8000"));

