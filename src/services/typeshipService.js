import db from "../models/index";
require('dotenv').config();
const { Op } = require("sequelize");

let createNewTypeShip = (data) => {
    return new Promise(async (resolve, reject) => {
        try {
            if (!data.type || !data.price) {
                resolve({
                    errCode: 1,
                    errMessage: 'Missing required parameter !'
                })
            } else {
                await db.TypeShip.create({
                    type: data.type,
                    price: data.price
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
let getDetailTypeshipById = (id) => {
    return new Promise(async (resolve, reject) => {
        try {
            if (!id) {
                resolve({
                    errCode: 1,
                    errMessage: 'Missing required parameter !'
                })
            } else {
                let res = await db.TypeShip.findOne({
                    where: { id: id },
                })
                resolve({
                    errCode: 0,
                    data: res
                })
            }
        } catch (error) {
            reject(error)
        }
    })
}
module.exports = {
    createNewTypeShip: createNewTypeShip,
    getDetailTypeshipById: getDetailTypeshipById
}