import jwt from 'jsonwebtoken';
import models from '../models';

export const handleAuth = (req, res) => {

    models.User
        .findOne({
            where: {
                username: req.body.firstName,
                password: req.body.password
            },
            raw: true,
        })
        .then((user) => {
            console.log(user);
            if (user) {
                res.status(200).json({
                    code: 200,
                    message: 'OK',
                    token: jwt.sign({userId: user.id}, 'auth', {expiresIn: 10000}),
                    data: {
                        user: {
                            id: user.id,
                            username: user.username,
                            lastName: user.lastName,
                        }
                    },
                });
            } else {
                res.status(404).json({
                    code: 404,
                    message: 'Not Found',
                    data: {
                        error: 'user does not exist or credentials do not much'
                    },
                });
            }
            
        })
        .catch((error) => {
            res.status(500).json({
                code: 500,
                message: '',
                data: {
                    error
                },
            });
        });
};

export const handleAuthLocalPassport = (req, res) => {
    res.json({data: 'login success'});
};