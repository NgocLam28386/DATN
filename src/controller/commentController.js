import commentService from '../services/commentService'

let createNewReview = async (req, res) => {
    try {
        let data = await commentService.createNewReview(req.body);
        return res.status(200).json(data);
    } catch (error) {
        console.log(error)
        return res.status(200).json({
            errCode: -1,
            errMessage: 'Error from server'
        })
    }
}
let getAllReviewByProductId = async (req, res) => {
    try {

        let data = await commentService.getAllReviewByProductId(req.query.id);
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
    createNewReview: createNewReview,
    getAllReviewByProductId: getAllReviewByProductId,
}