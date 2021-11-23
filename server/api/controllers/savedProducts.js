const { getSavedProducts, saveSavedProducts, updateSavedProducts, deleteSavedProducts } = require('../queries/savedProducts')


exports.getSavedProducts = (req, res, next) => {
    try {
        getSavedProducts(req.query.userId).then( savedProducts => {
            res.status(200).json({savedProducts: savedProducts});
        })
    } catch (error) {
        res.status(500).json({
            message: 'Error ocurred',
            error
        })
    }
}



exports.deleteSavedProducts = (req, res, next) => {
    try {
        deleteSavedProducts(req.query.id).then(response => {
            res.status(200).json({
                message: "Deleted successfully"
            })
        }).catch(err => res.status(401).json({ err }));
    } catch (error) {
        res.status(500).json({
            message: 'Error ocurred',
            error
        })
    }
}

exports.saveSavedProducts = (req, res, next) => {
    try {
        // Aqui yo verifico si tiene o no tiene productos
        // Si tiene productos itero para verificar si el
        // producto que voy a guardar ya existe, de ser
        // asi lo obvio y no guardo nada, pero tengo que sacarlo,
        // del cart, so envio al cliente para a atras que ya existe
        // para luego poder eliminarlo del carrito.
        getSavedProducts(req.body.userId).then(response => {
            if (response.rows.length === 0) {
                let productToSave = {}
                let productsArray = [];

                productToSave.userId = req.body.userId;
                productToSave.createdDate = new Date();
                productsArray.push(req.body.product.productToSave);
                productToSave.products = JSON.stringify(productsArray);

                saveSavedProducts(productToSave).then(response => {
                    res.status(200).json({
                        message: "Added successfully"
                    })
                }).catch(err => res.status(500).json({ err }));
            } else {

                let productExist = false;

                response.rows[0].products.map((value, index) => {
                    if (value.productId === req.body.product.productToSave.productId) {
                        productExist = true
                    }
                })
                if (productExist === false) {
                    let updateProductObj = {};
                    let productsArray = response.rows[0].products;

                    productsArray.push(req.body.product.productToSave);
                    updateProductObj.products = JSON.stringify(productsArray);
                    updateProductObj.modifiedDate = new Date();
                    updateProductObj.id = response.rows[0].id;
                    updateSavedProducts(updateProductObj).then( updateResponse => {
                        res.status(200).json({
                            message: "Updated succesfully",
                            updated: true
                        })
                    }).catch(err => res.status(500).json({err}));
                } else {
                    res.status(200).json({
                        message: "Product is already in save for later",
                        alreadySaved: true
                    })
                }
            }
        });
    } catch (error) {
        res.status(500).json({
            message: 'Error ocurred',
            error
        })
    }
}

exports.putSavedProducts = (req, res, next) => {
    try {
        updateSavedProducts(req.body).then( updateProducts => {
            res.status(200).json({updateProducts: updateProducts});
        })
    } catch (error) {
        res.status(500).json({
            message: 'Error ocurred',
            error
        })
    }
}