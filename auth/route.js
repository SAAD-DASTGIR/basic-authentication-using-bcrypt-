import express from 'express';
import { auth } from './auth.js';
// const router =express.router()
const router= express.Router()
router.route("/register").post(auth)

export default router
