import mongoose from 'mongoose';

const productSchema = new mongoose.Schema({
    name : {
        type : String,
        required : [true , "Name should not be empty"]
    },
    price : {
        type : Number,
        required : [true , "The Price should provided"]
    },
    featured : {
        type : Boolean,
        default : false
    },
    createdAt : {
        type : Date,
        default : Date.now()
    },
    ratings : {
        type : Number,
        default : 1.0
    }, 
    company: {
        type: String,
        enum: ['ikea', 'liddy', 'caressa', 'marcos'],
        message: '{VALUE} is not a supported company.'
    }
})

export default mongoose.model('Product' , productSchema);