import mongoose from "mongoose";

export const authScema = new mongoose.Schema({
    Userame:{
        type: String,
       required: true,
    },
    email:{
        type: Number,
        required: true,
    },
    password:{
        type: String,
       required: true,
    },
},{
    versionKey:false,
    timestamps:false,
}
)
export default mongoose.model("User", authScema);