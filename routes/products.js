import express from 'express';
import { validateToken } from '../middlewares/token-validator';
import { getProducts, getProductById, deleteProductById } from '../controllers/products';

const router = express.Router();

router.get('/products', validateToken, getProducts);

router.get('/products/:id', validateToken, getProductById);

router.delete('/products/:id', validateToken, deleteProductById);

export default router;
