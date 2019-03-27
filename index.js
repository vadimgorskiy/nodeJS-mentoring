import express from 'express';
import authRouter from './routes/auth';
import usersRouter from './routes/users';
import productsRouter from './routes/products';
import citiesRouter from './routes/cities';
import config from './config';
import { models } from './models';

const app = express();

app.use(express.json());

app.use('/api', authRouter);
app.use('/api', usersRouter);
app.use('/api', productsRouter);
app.use('/api', citiesRouter);

models.connect()
    .then(() => app.listen(config.port, () => console.log(`App listening on port ${config.port}!`)))
    .catch((err) => console.error('Unable to connect to the database:', err));