import Product from '../models/product.js';

export const getAllProducts = async (req , res) => {
    try {
        const data = await Product.find({ 
            company : "liddy"
        });
        console.log(data.length);
        res.status(200).json(data);
    } catch (error) {
        console.log(error);
    }
    
}

export const getAllProductsStatic = async (req , res) => {
    try {
        res.status(200).json({
            msg : "This is all static Products"
        }); 
    } catch (error) {
        console.log(error);
    }
}