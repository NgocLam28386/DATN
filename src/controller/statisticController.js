import statisticService from '../services/statisticService';
let getCountCardStatistic = async (req, res) => {
    try {
        let data = await statisticService.getCountCardStatistic(req.query);
        return res.status(200).json(data);
    } catch (error) {
        console.log(error)
        return res.status(200).json({
            errCode: -1,
            errMessage: 'Error from server'
        })
    }
}
let getCountStatusOrder = async (req, res) => {
    try {
        let data = await statisticService.getCountStatusOrder(req.query);
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
    getCountCardStatistic: getCountCardStatistic,
    getCountStatusOrder: getCountStatusOrder,

}