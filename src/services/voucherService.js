import db from "../models/index";
require('dotenv').config();
const { Op } = require("sequelize");
//==================TYPE VOUCHER====================//
let createNewTypeVoucher = (data) => {
    return new Promise(async (resolve, reject) => {
        try {
            if (!data.typeVoucher || !data.value || !data.maxValue || !data.minValue) {
                resolve({
                    errCode: 1,
                    errMessage: 'Missing required parameter !'
                })
            } else {
                await db.TypeVoucher.create({
                    typeVoucher: data.typeVoucher,
                    value: data.value,
                    maxValue: data.maxValue,
                    minValue: data.minValue
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
let getDetailTypeVoucherById = (id) => {
    return new Promise(async (resolve, reject) => {
        try {
            if (!id) {
                resolve({
                    errCode: 1,
                    errMessage: 'Missing required parameter !'
                })
            } else {
                let res = await db.TypeVoucher.findOne({
                    where: { id: id },
                    include: [
                        { model: db.Allcode, as: 'typeVoucherData', attributes: ['value', 'code'] },

                    ],
                    raw: true,
                    nest: true
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
let getAllTypeVoucher = (data) => {
    return new Promise(async (resolve, reject) => {
        try {
            let objectFilter = {
                include: [
                    { model: db.Allcode, as: 'typeVoucherData', attributes: ['value', 'code'] },

                ],
                raw: true,
                nest: true

            }
            if (data.limit && data.offset) {
                objectFilter.limit = +data.limit
                objectFilter.offset = +data.offset
            }
            let res = await db.TypeVoucher.findAndCountAll(objectFilter)

            resolve({
                errCode: 0,
                data: res.rows,
                count: res.count
            })



        } catch (error) {
            reject(error)
        }
    })
}
let updateTypeVoucher = (data) => {
    return new Promise(async (resolve, reject) => {
        try {
            if (!data.id || !data.typeVoucher || !data.value || !data.maxValue || !data.minValue) {
                resolve({
                    errCode: 1,
                    errMessage: 'Missing required parameter !'
                })
            } else {
                let typevoucher = await db.TypeVoucher.findOne({
                    where: { id: data.id },
                    raw: false
                })
                if (typevoucher) {
                    typevoucher.typeVoucher = data.typeVoucher;
                    typevoucher.value = data.value;
                    typevoucher.maxValue = data.maxValue;
                    typevoucher.minValue = data.minValue;
                    await typevoucher.save()
                    resolve({
                        errCode: 0,
                        errMessage: 'ok'
                    })
                }
            }

        } catch (error) {
            reject(error)
        }
    })
}
let deleteTypeVoucher = (data) => {
    return new Promise(async (resolve, reject) => {
        try {
            if (!data.id) {
                resolve({
                    errCode: 1,
                    errMessage: 'Missing required parameter !'
                })
            } else {
                let typevoucher = await db.TypeVoucher.findOne({
                    where: { id: data.id }
                })
                if (typevoucher) {
                    await db.TypeVoucher.destroy({
                        where: { id: data.id }
                    })
                    resolve({
                        errCode: 0,
                        errMessage: 'ok'
                    })
                }
            }

        } catch (error) {
            reject(error)
        }
    })
}
let getSelectTypeVoucher = () => {
    return new Promise(async (resolve, reject) => {
        try {

            let res = await db.TypeVoucher.findAll({
                include: [
                    { model: db.Allcode, as: 'typeVoucherData', attributes: ['value', 'code'] },

                ],
                raw: true,
                nest: true
            })

            resolve({
                errCode: 0,
                data: res

            })



        } catch (error) {
            reject(error)
        }
    })
}

module.exports = {
    createNewTypeVoucher: createNewTypeVoucher,
    getDetailTypeVoucherById: getDetailTypeVoucherById,
    getAllTypeVoucher: getAllTypeVoucher,
    updateTypeVoucher: updateTypeVoucher,
    deleteTypeVoucher: deleteTypeVoucher
}