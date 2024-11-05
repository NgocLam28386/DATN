import express from "express";
import receiptController from '../controllers/receiptController';
let router = express.Router();

let initwebRoutes = (app) => {
    router.get("/", (req, res) => {
        return res.send("hello")
    })
     //=================API RECEIPT================================//
     router.post('/api/create-new-receipt', middlewareControllers.verifyTokenAdmin, receiptController.createNewReceipt)
     router.get('/api/get-detail-receipt', receiptController.getDetailReceiptById)
     router.get('/api/get-all-receipt', receiptController.getAllReceipt)
     router.put('/api/update-receipt', middlewareControllers.verifyTokenAdmin, receiptController.updateReceipt)
     router.delete('/api/delete-receipt', middlewareControllers.verifyTokenAdmin, receiptController.deleteReceipt)
     router.post('/api/create-new-detail-receipt', middlewareControllers.verifyTokenAdmin, receiptController.createNewReceiptDetail)
    return app.use("/", router);
}

module.exports = initwebRoutes;