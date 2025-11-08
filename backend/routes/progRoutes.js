import express from 'express'
import { updatePrg,getProgress } from '../controllers/progController.js'
import{auth} from '../middlewares/authMiddle.js';
const router=express.Router();
router.post("/update",auth,updatePrg);
router.get("/",auth,getProgress);
export default router;