import dotenv from 'dotenv'
dotenv.config();
import cors from 'cors'
// import axios from 'axios'
import app from "./app.js";
import connectDB from './config/db'
connectDB();
const PORT=process.env.PORT|| 3000;
const startServer=async()=>{
    try{
        await connectDB();
        app.listen(PORT,()=>{
            console.log(`Server running on port:${PORT}`);
        })
    }catch(err){
        console.err('Server connection failed',err);
        process.exit(1);
    }
}
startServer();