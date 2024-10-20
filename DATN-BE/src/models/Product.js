import mongoose from "mongoose";

export const productSchema = new mongoose.Schema({
    name:{
        type: String,
       required: true,
    },
    price:{
        type: Number,
        required: true,
    },
    desc:{
        type: String,
       required: true,
    },

}, { versionKey: false, timestamps: true }
)
export default mongoose.model("products", productSchema);