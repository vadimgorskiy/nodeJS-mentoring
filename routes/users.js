import express from 'express';
import { validateToken } from '../middlewares/token-validator';
import { handleUsers, handleCreateUser, handleDeleteUser } from '../controllers/users';

const router = express.Router();

router.get('/users', validateToken, handleUsers);

router.post('/users', validateToken, handleCreateUser);

router.delete('/users/:id', validateToken, handleDeleteUser);

export default router;
