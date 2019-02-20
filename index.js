import express from 'express';
import authRouter from './routes/auth';
import usersRouter from './routes/users';
import productsRouter from './routes/products';
import { passport, passportLocalStrategy } from './config/passport-local';

passportLocalStrategy();
const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());

app.use(passport.initialize());
app.use(passport.session());

app.use('/api', authRouter);
app.use('/api', usersRouter);
app.use('/api', productsRouter);

app.listen(port, () => console.log(`App listening on port ${port}!`));