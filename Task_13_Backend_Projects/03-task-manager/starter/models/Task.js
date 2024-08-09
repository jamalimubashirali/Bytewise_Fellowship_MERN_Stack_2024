import mongoose from 'mongoose';

const taskSchema = new mongoose.Schema({
    name : {
        type: String,
        required : [true, 'Please Enter the value'],
        trim : true,
        maxlength : [50 , 'The task string should not be longer then 50 characters']
    },
    taskStatus : {
        type : Boolean,
        default : false
    }
});

export default mongoose.model('Task' , taskSchema);