const {getCart, saveToCart, putCart} = require('../queries/carts')
const Calculations = require('../directives/calculations')



exports.getCart = (req, res, next) => {

    try {
        console.log(req.query)
        getCart(req.query.userId).then( cart => {
            let totals = [];
            let totalAndTax = [];
            let quantity = [];
            let cartDetails = {
                cart: cart.rows,
                subtotal: Number,
                shippingFee: (10).toFixed(2),
                subtotalWithShipping: Number,
                tax: Number,
                total: Number,
                productsQuantity: Number,
            }

            cartDetails.cart.map((cartValue, cartIndex) => {
                totals.push((cartValue.customerPrice * cartValue.quantity).toFixed(2));
                quantity.push(cartValue.quantity);
                cartDetails.cart[cartIndex].price = (cartValue.customerPrice * cartValue.quantity).toFixed(2)
                cartDetails.cart[cartIndex].customerPrice = Calculations.formatter.format(cartValue.customerPrice);
            });
            let subWithShipping = [];
            cartDetails.productsQuantity = Calculations.sum(quantity);
            cartDetails.subtotal = Calculations.sum(totals).toFixed(2);
            cartDetails.tax = (cartDetails.subtotal * .115).toFixed(2);

            subWithShipping.push(cartDetails.subtotal);
            subWithShipping.push(cartDetails.shippingFee);
            cartDetails.subtotalWithShipping = Calculations.sum(subWithShipping).toFixed(2);
            // console.log(cartDetails.subtotalWithShipping);
            totalAndTax.push(cartDetails.subtotal);
            totalAndTax.push(cartDetails.shippingFee);

            totalAndTax.push(cartDetails.tax);
            cartDetails.total = Calculations.sum(totalAndTax).toFixed(2);
            // console.log(cartDetails.total);
            res.status(200).json({cartDetails: cartDetails});
        })
    } catch (error) {
        res.status(500).json({
            message: 'Error ocurred',
            error
        })
    }
}



exports.saveToCart = (req, res, next) => {
    let hasProductInCart = false;
    let productId = 0;
    let id = 0;
    let quantity = 0;
    console.log(req.body)
    try {
        getCart(req.body.userId).then(shopingCart => {
            // console.log(shopingCart.rows);
            // console.log(req.body.userId);
            console.log(shopingCart);
            console.log(shopingCart.rows.length === 0);
            if (shopingCart.rows.length === 0){
                saveToCart(req.body)
                .then( cart => {
                    res.status(200).json({
                        message: "Cart added successfully",
                        newId: cart.id
                    })
                }).catch(err => res.status(401).json({ err }));
            } else {
                shopingCart.rows.forEach(element => {
                    // console.log(element.id);
                    if (element.productId === req.body.productId) {
                        hasProductInCart = true;
                        id = element.id;
                        productId = req.body.productId;
                        quantity = Number(element.quantity) + Number(req.body.quantity);
                    }
                });
                if (hasProductInCart === true && req.body.isEditInCart === false) {
                    let editQuantity = {
                        id: id,
                        userId: req.body.userId,
                        productId: productId,
                        quantity: quantity
                    }
                    // console.log(editQuantity);
                    putCart(editQuantity).then(refresh => {
                        res.status(200).json({
                            message: "Cart added successfully"
                        })
                    }).catch(err => res.status(401).json({ err }));
                } else if (hasProductInCart === true && req.body.isEditInCart === true) {
                    let editQuantity = {
                        id: id,
                        userId: req.body.userId,
                        productId: productId,
                        quantity: req.body.quantity
                    }
                    // console.log(editQuantity);
                    putCart(editQuantity).then(refresh => {
                        res.status(200).json({
                            message: "Cart added successfully"
                        })
                    }).catch(err => res.status(401).json({ err }));
                } else if (hasProductInCart === false) {
                    saveToCart(req.body)
                    .then( cart => {
                        res.status(200).json({
                            message: "Cart added successfully",
                            newId: cart.id
                        })
                    }).catch(err => res.status(401).json({ err }));
                }
            }
        });

    } catch (error) {
        res.status(500).json({
            messags: 'Error ocurred',
            error
        })
    }
}