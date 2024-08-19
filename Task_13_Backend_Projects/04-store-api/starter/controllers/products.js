import Product from '../models/product.js';

export const getAllProducts = async (req , res) => {
    try {
        const { featured , company , name} = req.query;
        const queryObject = {};
        if(featured) {
            queryObject.featured = featured === 'true' ? true : false ;
        }
        if(company) {
            queryObject.company = company ;
        }
        if(name) {
            queryObject.name = { $regex : name , $options : 'i'} ;
        }
        console.log(queryObject);
        const data = await Product.find(queryObject);
        res.status(200).json(data);
        console.log(data.length);
    } catch (error) {
        console.log(error);
    }
    
}

export const getAllProductsStatic = async (req , res) => {
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