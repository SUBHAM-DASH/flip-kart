import express from "express";
import { getProducts } from "../controller/productController.js";
const router = express.Router();

//Product Routes
router.get("/getProducts", getProducts);

export default router;
