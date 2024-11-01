import Product from "../models/product"
import { StatusCodes } from "http-status-codes";
//  export const getAllProduct = async (req, res) =>{
//     try {
//         const data = await Product.find()
//         response.status(200).json({ data, message: "Da lay tat ca san pham" });
//       } catch (error){
//         console.log(error);
//       }
//  }
export const getAllProduct = async (req, res) => {
    try {
        const products = await Product.find();
        return res.status(StatusCodes.OK).json(products);
    } catch (error) {
        return res.status(400).json({ message: error.message });
    }
};
 export const getDetail = async (req, res) =>{
    try {
        const data = await Product.findById({_id: req.params.id})
        res.status(200).json({data, message:"lay 1 san pham"})
    } catch (error) {
        console.log(error);
        
    }
 }
 export const createProduct = async (req, res) =>{
    try {
        const data = await (await Product.create(req.body)).save()
        res.status(200).json({data, message:"them thanh cong san pham"})
    } catch (error) {
        console.log(error);
        
    }
 }
 export const updateProduct = async (req, res) =>{
    try {
        const data = await Product.findByIdAndUpdate(req.params.id,req.body,{new: true})
        res.status(200).json({data, message:"sua san pham thanh cong"})
    } catch (error) {
        console.log(error);
        
    }
 }
 export const deleteProduct = async (req, res) =>{
    try {
        const data = await Product.findOneAndDelete({_id: req.params.id})
        res.status(200).json({data, message:"xoa san pham thanh cong"})
    } catch (error) {
        console.log(error);  
    }
 }import Product from "../models/product"
 import { StatusCodes } from "http-status-codes";
 //  export const getAllProduct = async (req, res) =>{
 //     try {
 //         const data = await Product.find()
 //         response.status(200).json({ data, message: "Da lay tat ca san pham" });
 //       } catch (error){
 //         console.log(error);
 //       }
 //  }
 export const getAllProduct = async (req, res) => {
     try {
         const products = await Product.find();
         return res.status(StatusCodes.OK).json(products);
     } catch (error) {
         return res.status(400).json({ message: error.message });
     }
 };
  export const getDetail = async (req, res) =>{
     try {
         const data = await Product.findById({_id: req.params.id})
         res.status(200).json({data, message:"lay 1 san pham"})
     } catch (error) {
         console.log(error);
         
     }
  }
  export const createProduct = async (req, res) =>{
     try {
         const data = await (await Product.create(req.body)).save()
         res.status(200).json({data, message:"them thanh cong san pham"})
     } catch (error) {
         console.log(error);
         
     }
  }
  export const updateProduct = async (req, res) =>{
     try {
         const data = await Product.findByIdAndUpdate(req.params.id,req.body,{new: true})
         res.status(200).json({data, message:"sua san pham thanh cong"})
     } catch (error) {
         console.log(error);
         
     }
  }
  export const deleteProduct = async (req, res) =>{
     try {
         const data = await Product.findOneAndDelete({_id: req.params.id})
         res.status(200).json({data, message:"xoa san pham thanh cong"})
     } catch (error) {
         console.log(error);  
     }
  }