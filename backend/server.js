import express from 'express';
import dotenv from 'dotenv';
import cookieParser from 'cookie-parser';
import authRoutes from './routes/authroute.js';
import userRoutes from './routes/userroute.js'
import messegeRoutes from './routes/messegeroute.js'
import connectToDb from './db/mongodb.js';

import {app, server} from './socket/socket.js'

const PORT = process.env.PORT || 5000;

dotenv.config();
app.use(express.json()); // this is to parse the incoming req with json payload 
app.use(cookieParser())

app.use('/api/auth', authRoutes);
app.use('/api/messeges', messegeRoutes);
app.use('/api/users', userRoutes)

server.listen(PORT, ()=>{
    connectToDb();
    console.log("app is running on "+ PORT)
})