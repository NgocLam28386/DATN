mport db from "../models/index";
require('dotenv').config();
const { Op } = require("sequelize");


let createNewSupplier = (data) => {
    return new Promise(async (resolve, reject) => {
        try {
            if (!data.name || !data.address || !data.phonenumber || !data.email) {
                resolve({
                    errCode: 1,
                    errMessage: 'Missing required parameter !'
                })
            } else {
                await db.Supplier.create({
                    name: data.name,
                    address: data.address,
                    phonenumber: data.phonenumber,
                    email: data.email,
                })
                resolve({
                    errCode: 0,
                    errMessage: 'ok'
                })
            }
        } catch (error) {
            reject(error)
        }
    })
}
module.exports = {
    createNewSupplier: createNewSupplier,
}