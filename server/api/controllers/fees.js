const { getFees} = require('../queries/paymentFee')

exports.getFees = (req, res, next) => {
    try {
        getFees().then( fees => {
            res.status(200).json({fees: fees})
        })
    } catch (error) {
        res.status(500).json({
            messags: 'Error ocurred',
            error
        })
    }
}