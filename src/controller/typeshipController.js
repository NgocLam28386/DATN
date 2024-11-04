import typeshipService from '../services/typeshipService';

let createNewTypeShip = async (req, res) => {
    try {
        let data = await typeshipService.createNewTypeShip(req.body);
        return res.status(200).json(data);
    } catch (error) {
        console.log(error)
        return res.status(200).json({
            errCode: -1,
            errMessage: 'Error from server'
        })
    }
}
let getDetailTypeshipById = async (req, res) => {
    try {
        let data = await typeshipService.getDetailTypeshipById(req.query.id);
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
    createNewTypeShip: createNewTypeShip,
    getDetailTypeshipById: getDetailTypeshipById
}