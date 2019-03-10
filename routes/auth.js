import express from 'express';
import { passport } from '../config/passport-local';
import { handleAuth, handleAuthLocalPassport } from '../controllers/auth';

const router = express.Router();

router.post('/auth', handleAuth);

router.post('/auth/passport/local', passport.authenticate('local-login', {session: false}), handleAuthLocalPassport);

export default router;