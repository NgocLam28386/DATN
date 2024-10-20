import express from "express"
import { connectDB } from "./config/connection"
import productRouter from "./router/productRouter";

const app = express();
app.use(express.json());
connectDB();
app.use("/api",productRouter)

export const viteNodeApp= app;