const {getOrder, saveOrder, getAllOrders } = require('../queries/orders')


exports.getOrder = (req, res, next) => {
    try {
        getOrder().then( order => {
            res.status(200).json({order: order})
        })
    } catch (error) {
        res.status(500).json({
            messags: 'Error ocurred',
            error
        })
    }
}

exports.getAllOrders = (req, res, next) => {
    try {
        getAllOrders().then(orders =>{
            res.status(200).json({orders: orders})
        })
    } catch (error) {
        res.status(500).json({
            messags: 'Error ocurred',
            error
        })
    }
}

exports.saveOrder = (req, res, next) => {
    console.log(req.body);
    try {
        saveOrder(req.body)
        .then( order => {
            res.status(200).json({
                message: "Order Submit successfully",
                newId: order.id
            })
        }).catch(err => res.status(401).json({ err }));
    } catch (error) {
        res.status(500).json({
            messags: 'Error ocurred',
            error
        })
    }
}