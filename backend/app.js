import express from 'express'
import cors from 'cors'
import authRoutes from './routes/authRoutes.js';
import chapterRoutes from './routes/chapterRoutes.js';
import shlokRoutes from './routes/shlokRoutes.js'
import progRoutes from "./routes/progRoutes.js"
const app=express();
app.use(cors());
app.use(express.json());
app.use("/api/progress",progRoutes);
app.use('/api/auth',authRoutes);
app.use('/api/chapters',chapterRoutes);
app.use('/api/shlok',shlokRoutes);
app.get("/",(_req,res)=>{
    res.send("api working");
})
export default app;