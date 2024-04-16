import express from 'express'
const router = express();
import { sendMessege, getMesseges } from '../controllers/messege.controller.js';
import protectedRoute from '../middleware/protectedRoute.js';


router.post('/send/:id', protectedRoute, sendMessege)
router.get('/get/:id', protectedRoute, getMesseges)



export default router;