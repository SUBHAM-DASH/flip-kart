import express from "express";
import connectToMongoose from "./db.js";
import DefaultData from "./default.js";
import dotenv from "dotenv";
import cors from "cors";
import bodyParser from "body-parser";

import AuthRouter from "./routes/authRouter.js";
import ProductRouter from "./routes/productRouter.js";
const app = express();
app.use(cors());

const PORT = 8000;
dotenv.config();
app.use(express.json());
app.use(bodyParser.json({ extended: true }));
app.use(bodyParser.urlencoded({ extended: true }));

const USERNAME = process.env.DB_USERNAME;
const PASSWORD = process.env.DB_PASSWORD;
connectToMongoose(USERNAME, PASSWORD);

//Routes
app.use("/api", AuthRouter);
app.use("/api", ProductRouter);

app.listen(PORT, () => {
  console.log(`server running on port ${PORT}`);
});
DefaultData();
