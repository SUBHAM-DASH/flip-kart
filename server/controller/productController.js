import Product from "../models/productModel.js";

//Get Products
export const getProducts = async (req, res) => {
  try {
    const products = await Product.find();
    res.status(200).json(products);
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

//Get Product Detail
export const getProductDetail = async (req, res) => {
  try {
    const { id } = req.params;
    const product = await Product.findOne({ id });
    res.status(200).json(product);
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};
