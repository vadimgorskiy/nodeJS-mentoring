import models from "../models";

export const handleProducts = (req, res) => {
    models.Product
        .findAll({
            raw: true,
        })
        .then((products) => {
            if (products && products.length) {
                res.status(200).json({
                    products: products.map( product => ({
                        id: product.id,
                        name: product.name,
                        detail: product.detail,
                        price: product.price
                    })),
                });
            } else {
                res.status(404).json({
                    messages: 'products not found',
                });
            }
        })
        .catch((error) => {
            res.status(500).json({
                error,
            });
        });
};

export const handleProductById = (req, res) => {
    models.Product
        .findById(req.params.id, {
            raw: true,
        })
        .then((product) => {
            if (product) {
                res.status(200).json({
                    product: {
                        id: product.id,
                        name: product.name,
                        detail: product.detail,
                        price: product.price
                    },
                });
            } else {
                res.status(404).json({
                    messages: `product by id ${req.params.id} not found`,
                });
            }
        })
        .catch((error) => {
            res.status(500).json({
                error,
            });
        });
};

export const handleDeleteProductById = (req, res) => {
    models.Product
        .destroy({
            where: {id: req.params.id}
        })
        .then((isSuccess) => {
            if (isSuccess) {
                res.status(204).send();
            } else {
                res.status(404).send();
            }
        })
        .catch((error) => {
            res.status(500).json({
                error,
            });
        });
};