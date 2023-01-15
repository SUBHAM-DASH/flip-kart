import express from "express";
import { authSignup, authLogin } from "../controller/authController.js";

const router = express.Router();

//Signup Route
router.post("/authSignup", authSignup);
//Login Route
router.post("/authLogin", authLogin);

export default router;
