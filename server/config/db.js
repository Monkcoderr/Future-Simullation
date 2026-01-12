import mongoose from "mongoose";

const connectDB = async()=>{
    try {
        mongoose.connect(process.env.MONGO_URI)
        console.log("mongo db connected")
    } catch (error) {
        console.error("connection error :",error.message)
        process.exit(1);
    }
}

export default connectDB;