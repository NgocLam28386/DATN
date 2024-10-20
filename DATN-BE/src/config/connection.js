 import mongoose from "mongoose";

 export const connectDB = async () =>{
    try {
        await mongoose.connect("mongodb://localhost:27017/datn")
        console.log("connect DB()");
        
    } catch (error) {
        console.log(error);
    }
 }
 export default connectDB();