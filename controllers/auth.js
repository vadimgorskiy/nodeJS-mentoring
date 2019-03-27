import jwt from 'jsonwebtoken';
import { models } from '../models';

export const handleAuth = (req, res) => {

    models.User
        .findOne({
            firstName: req.body.firstName,
            password: req.body.password,
        })
        .then((user) => {
            if (user) {
                res.status(200).json({
                    code: 200,
                    message: 'OK',
                    token: jwt.sign({userId: user._id}, 'auth', {expiresIn: 10000}),
                    data: {
                        user: {
                            _id: user._id,
                            username: user.firstName,
                            lastName: user.lastName,
                            age: user.age,
                            registered: user.registered,
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
        })
};

export const handleAuthLocalPassport = (req, res) => {
    res.json({data: 'login success'});
};