import mongoose from "mongoose";


// Establishing the connection to MonogoDB
export const connectDB = (url) => {
    return mongoose
    .connect(url, {
      useCreateIndex: true,
      useNewUrlParser : true,
      useFindAndModify : false, 
      useUnifiedTopology: true,
    })
}
  