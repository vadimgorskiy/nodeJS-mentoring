import express from 'express';
import { validateToken } from '../middlewares/token-validator';
import { handleUsers } from '../controllers/users';

const router = express.Router();

router.get('/users', validateToken, handleUsers);

export default router;
