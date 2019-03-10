import express from 'express';
import authRouter from './routes/auth';
import usersRouter from './routes/users';
import productsRouter from './routes/products';
import { passport, passportLocalStrategy } from './config/passport-local';
import models from './models';

// const users = require('./data/users');
const products = require('./data/products');

passportLocalStrategy();
const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());

app.use(passport.initialize());
app.use(passport.session());

app.use('/api', authRouter);
app.use('/api', usersRouter);
app.use('/api', productsRouter);

models.sequelize
    .sync()
    .then(() => {

        // users.forEach(user => {
        //     models.User.create({
        //         id: user.id.toString(),
        //         username: user.firstName,
        //         lastName: user.lastName,
        //         password: user.password || '1111'
        //     }).then((d) => {
        //         console.log(d);
        //     });
        // });

        // models.User.destroy({
        //     where: {username: 'Vadim'}
        // }).then();

        // models.User.create({
        //     id: '4',
        //     username: 'Vadim',
        //     lastName: 'Gorskiy',
        //     password: '1234'
        // }).then((d) => {
        //     console.log(d);
        // });

        return models.Product.findAll({
            raw: true,
        });
    })
    .then((data) => {
        if (!data.length) {
            products.forEach(product => {
                models.Product.create({
                    id: product.id,
                    name: product.name,
                    detail: product.detail,
                    price: product.price
                }).then();
            });
        }

        app.listen(port, () => console.log(`App listening on port ${port}!`));
    })
    .catch(err => {
        console.error('Unable to connect to the database:', err);
    });