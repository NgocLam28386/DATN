import express from "express";
import { createProduct, deleteProduct, getAllProduct, getDetail, updateProduct } from "../controller/Product";

const productRouter = express()

productRouter.get("/products",getAllProduct)
productRouter.get("/products/:id",getDetail)
productRouter.post("/products",createProduct)
productRouter.put("/products/:id",updateProduct)
productRouter.delete("/products/:id",deleteProduct)
export default productRouter;
