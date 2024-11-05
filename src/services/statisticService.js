const { Op } = require("sequelize");
import db from "../models/index";
import moment from 'moment'

function compareDates(d1, d2) {
    //  lon hon la false
    //  be hon la true

    var parts = d1.split('/');
    var d1 = Number(parts[2] + parts[1] + parts[0]);
    parts = d2.split('/');
    var d2 = Number(parts[2] + parts[1] + parts[0]);

    if (d1 <= d2) return true
    if (d1 >= d2) return false

}
let getCountCardStatistic = () => {
    return new Promise(async (resolve, reject) => {
        try {
            let countUser = await db.User.count({ where: { statusId: 'S1' } })
            let countProduct = await db.Product.count()
            let countReview = await db.Comment.count({
                where: {
                    star: { [Op.gt]: 0, }
                }
            })
            let countOrder = await db.OrderProduct.count({
                where: {
                    statusId: { [Op.ne]: 'S7', }
                }
            })
            let data = {
                countUser, countProduct, countReview, countOrder
            }
            resolve({
                errCode: 0,
                data: data
            })

        } catch (error) {
            reject(error)
        }
    })
}
let getCountStatusOrder = (data) => {
    return new Promise(async (resolve, reject) => {
        try {
            if (!data.oneDate && !data.twoDate) {
                resolve({
                    errCode: 1,
                    data: 'Missing required paramenter !'
                })

            } else {
                let statusOrder = await db.Allcode.findAll({
                    where: { type: 'STATUS-ORDER' }
                })
                let objectCount = {}
                let arrayLable = []
                let arrayValue = []
                if (statusOrder) {
                    let orderProduct = await db.OrderProduct.findAll()
                    orderProduct = orderProduct.filter(item => {

                        if (data.type == "day") {
                            let updatedAt = moment.utc(item.updatedAt).local().format('DD/MM/YYYY').split('/')
                            updatedAt = Number(updatedAt[2] + updatedAt[1] + updatedAt[0])

                            let twoDate = moment(data.twoDate).format("DD/MM/YYYY").split('/')
                            twoDate = Number(twoDate[2] + twoDate[1] + twoDate[0])
                            let oneDate = moment(data.oneDate).format("DD/MM/YYYY").split('/')
                            oneDate = Number(oneDate[2] + oneDate[1] + oneDate[0])

                            if ((updatedAt >= oneDate) && (updatedAt <= twoDate)) {

                                return true
                            }

                        }
                        else if (data.type == "month") {
                            let updatedAtMonth = moment.utc(item.updatedAt).local().format('M')
                            let updatedAtYear = moment.utc(item.updatedAt).local().format('YYYY')
                            if (moment(data.oneDate).format('M') == updatedAtMonth && moment(data.oneDate).format('YYYY') == updatedAtYear) {

                                return true
                            }

                        } else {
                            let updatedAtYear = moment.utc(item.updatedAt).local().format('YYYY')
                            if (moment(data.oneDate).format('YYYY') == updatedAtYear) {

                                return true
                            }
                        }
                    })

                    for (let i = 0; i < statusOrder.length; i++) {
                        arrayLable.push(statusOrder[i].value)

                        arrayValue.push(orderProduct.filter(item => { return item.statusId == statusOrder[i].code }).length)

                    }

                    objectCount = {
                        arrayLable,
                        arrayValue
                    }
                    resolve({
                        errCode: 0,
                        data: objectCount
                    })
                }


            }



        } catch (error) {
            reject(error)
        }
    })
}
module.exports = {
    getCountCardStatistic: getCountCardStatistic,
    getCountStatusOrder: getCountStatusOrder,
}