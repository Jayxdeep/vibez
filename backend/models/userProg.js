import mongoose from "mongoose";//this for history
const userProgSchema=new mongoose.Schema({
    userId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"true",
        required:true,
        unique:true
    },
    chapter:{
        type:Number,
        required:true
    },
    shlok:{
        type:Number,
        required:true
    },
    updatedAt:{
        type:Date,
        default:Date.now
    }
})
export default mongoose.model("userProg",userProgSchema);