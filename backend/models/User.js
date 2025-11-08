import mongoose from "mongoose";
// import { use } from "react";
const userSchema=new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        unique:true,
        required:true
    },
    password: {
        type:String,
        required:true
    },
    createdAT:{
        type:Date,
        default:Date.now
    }
});
export default mongoose.model("User",userSchema);