import express from 'express';
import { passport } from '../config/passport-local';
import { handleAuth, handleAuthLocalPassport } from '../controllers/auth';

const router = express.Router();

router.post('/auth', handleAuth);

router.post('/auth_passport_local', passport.authenticate('local-login'), handleAuthLocalPassport);

export default router;