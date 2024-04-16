import { getUsers } from "../controllers/users.controller.js";
import express from 'express';
import protectedRoute from "../middleware/protectedRoute.js";


const router = express();


router.get('/get', protectedRoute, getUsers);

export default router;