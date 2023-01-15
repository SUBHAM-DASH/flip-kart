import { products } from "./constants/data.js";
import Product from "./models/productModel.js";


const DefaultData = async()=>{
    try {
        await Product.deleteMany(products);
        await Product.insertMany(products);
        console.log("data imported successfully");
    } catch (error) {
        console.log("error while data inserting in mongo db!",error.message);
    }
}

export default DefaultData;
