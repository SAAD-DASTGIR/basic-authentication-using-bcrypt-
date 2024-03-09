import express from 'express';
import db from './db.js';
import connectDb from './db.js';
import router from './auth/route.js';
const app= express()
const PORT = 5000
connectDb()
app.use(express.json())
app.use("/api/auth",router)
app.listen(PORT,()=>{
    console.log(`Server is running on port ${PORT}`)
})