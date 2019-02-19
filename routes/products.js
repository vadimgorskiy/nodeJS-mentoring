import express from 'express';
import { validateToken } from '../middlewares/token-validator';
import { handleProducts, handleProductById } from '../controllers/products';

const router = express.Router();

router.get('/products', validateToken, handleProducts);

router.get('/products/:id', validateToken, handleProductById);

export default router;
