import jwt from 'jsonwebtoken';
import { getUser } from '../models/users';

export const handleAuth = (req, res) => {
    const employee = getUser(req.body.firstName, req.body.password);
    let status;
    let respons = {
        code: '',
        message: '',
        data: {}
    }

    if (employee) {
        status = 200;
        respons.token = jwt.sign({userId: employee.id}, 'auth', {expiresIn: 10000});
        respons.message = "OK";
        respons.data.user = employee;
    } else {
        status = 404;
        respons.message = "Not Found";
        respons.data.error = "user does not exist or credentials do not much";
    }

    respons.code = status;

    res.status(status).json(respons);
};

export const handleAuthLocalPassport = (req, res) => {
    res.json({data: 'login success'});
};