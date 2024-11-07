import voucherService from '../services/voucherService';
let createNewTypeVoucher = async (req, res) => {
    try {
        let data = await voucherService.createNewTypeVoucher(req.body);
        return res.status(200).json(data);
    } catch (error) {
        console.log(error)
        return res.status(200).json({
            errCode: -1,
            errMessage: 'Error from server'
        })
    }
}
let getDetailTypeVoucherById = async (req, res) => {
    try {
        let data = await voucherService.getDetailTypeVoucherById(req.query.id);
        return res.status(200).json(data);
    } catch (error) {
        console.log(error)
        return res.status(200).json({
            errCode: -1,
            errMessage: 'Error from server'
        })
    }
}
let getAllTypeVoucher = async (req, res) => {
    try {
        let data = await voucherService.getAllTypeVoucher(req.query);
        return res.status(200).json(data);
    } catch (error) {
        console.log(error)
        return res.status(200).json({
            errCode: -1,
            errMessage: 'Error from server'
        })
    }
}
let updateTypeVoucher = async (req, res) => {
    try {
        let data = await voucherService.updateTypeVoucher(req.body);
        return res.status(200).json(data);
    } catch (error) {
        console.log(error)
        return res.status(200).json({
            errCode: -1,
            errMessage: 'Error from server'
        })
    }
}
let deleteTypeVoucher = async (req, res) => {
    try {
        let data = await voucherService.deleteTypeVoucher(req.body);
        return res.status(200).json(data);
    } catch (error) {
        console.log(error)
        return res.status(200).json({
            errCode: -1,
            errMessage: 'Error from server'
        })
    }
}
let getSelectTypeVoucher = async (req, res) => {
    try {
        let data = await voucherService.getSelectTypeVoucher();
        return res.status(200).json(data);
    } catch (error) {
        console.log(error)
        return res.status(200).json({
            errCode: -1,
            errMessage: 'Error from server'
        })
    }
}
module.exports = {
    createNewTypeVoucher: createNewTypeVoucher,
    getDetailTypeVoucherById: getDetailTypeVoucherById,
    getAllTypeVoucher: getAllTypeVoucher,
    updateTypeVoucher: updateTypeVoucher,
    deleteTypeVoucher: deleteTypeVoucher,
    getSelectTypeVoucher: getSelectTypeVoucher
}