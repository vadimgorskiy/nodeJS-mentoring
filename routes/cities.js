import express from 'express';
import { validateToken } from '../middlewares/token-validator';
import { 
    getRandomCity, 
    getCities,
    getCityById,
    createCity,
    updateCity,
    deleteCity,
 } from '../controllers/cities';

const router = express.Router();

router.get('/city', getRandomCity);
router.get('/cities', validateToken, getCities);
router.get('/cities/:id', validateToken, getCityById);
router.post('/cities', validateToken, createCity);
router.put('/cities/:id', validateToken, updateCity);
router.delete('/cities/:id', validateToken, deleteCity);


export default router;