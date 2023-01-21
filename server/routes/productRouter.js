import express from "express";
import {
  getProducts,
  getProductDetail,
} from "../controller/productController.js";
const router = express.Router();

//Product Routes
router.get("/getProducts", getProducts);
router.get("/getProductDetail/:id", getProductDetail);

export default router;
