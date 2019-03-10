import express from 'express';
import { validateToken } from '../middlewares/token-validator';
import { handleProducts, handleProductById, handleDeleteProductById } from '../controllers/products';

const router = express.Router();

router.get('/products', validateToken, handleProducts);

router.get('/products/:id', validateToken, handleProductById);

router.delete('/products/:id', validateToken, handleDeleteProductById);

export default router;
