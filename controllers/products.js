import { models } from "../models";
import { 
    errorResponse, 
    successResonse,
    notFoundResponse
} from '../responses';

export const getProducts = (req, res) => {
    models.Product
        .find()
        .then((products) => {
            if (Array.isArray(products) && products.length) {
                successResonse(res, {products});
            } else {
                notFoundResponse(res, 'Products not found');
            }
        })
        .catch((err) => errorResponse(res, err));
};

export const getProductById = (req, res) => {
    models.Product
        .findById(req.params.id)
        .then((product) => {
            if (product) {
                successResonse(res, {product});
            } else {
                notFoundResponse(res, `Product by id ${req.params.id} not found`);
            }
        })
        .catch((err) => errorResponse(res, err));
};

export const deleteProductById = (req, res) => {
    models.Product
        .findOneAndRemove(req.params.id)
        .then(() => res.status(204).send())
        .catch((err) => errorResponse(res, err));
};