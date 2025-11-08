import User from "../models/User.js";
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
export const signup=async(req,res)=>{
    try{
        const{
            name,
            email,
            password
        }= req.body;
        let user=await User.findOne({email});
        if(user) return res.status(400).json({message:"User Already exsits"});
        const hashed=await bcrypt.hash(password,10);
        user=new User({name,email,password:hashed})
        await user.save();
        res.json({message:"Sign up successful"});
    }catch(err){
        res.status(500).json({message:err.message});
    }
}
export const login=async (req,res) => {
    try{
        const {
            email,
            password
        }=req.body;
        let user=await User.findOne({email});
        if(!user) return res.status(400).json({message:"Invalid email"});
        const isMatch=await bcrypt.compare(password,user.password);
        if(!isMatch) return res.status(400).json({message:"Invalid password"});
        const tok=jwt.sign({id:user._id},process.env.JWT_SECRET);
        res.json({message:"Login successful",tok});
    }catch(err){
        res.json({message:err.message});
    }
}