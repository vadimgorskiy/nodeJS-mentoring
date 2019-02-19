import { getProducts, getProductById } from '../models/products';

export const handleProducts = (req, res) => {
    const products = getProducts();

    if (products && products.length) {
        res.status(200).json(products);
    } else {
        res.status(404).json({
            messages: 'products not found',
        });
    }
};

export const handleProductById = (req, res) => {
    const product = getProductById(req.params.id);

    if (product) {
        res.status(200).json(product);
    } else {
        res.status(404).json({
            messages: `product ${req.params.id} not found`,
        });
    }
};