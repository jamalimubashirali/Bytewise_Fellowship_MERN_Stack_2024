import dotenv from 'dotenv';
import { connectDB } from './db/connect.js'
import Product from './models/product.js';
import products from './products.json' assert { type: 'json' };

// ENV Configuration
dotenv.config();

// Setting Database connection to populate it
const start = async () => {
    try {
        await connectDB(process.env.MONGOS_URI);
        await Product.deleteMany();
        await Product.create(products);
        console.log("Connection Successful");
        process.exit(0);
    } catch (error) {
        console.log(error);
        process.exit(1);
    }
}

start();