import jwt from 'jsonwebtoken';

const validateToken = function (req, res, next) {
    const token = req.headers['x-access-token'];
  
    if (token) {
      jwt.verify(token, 'auth', (err, decoded) => {
        if (err) {
          res
            .status(403)
            .send({success: false, message: 'Filed to authenticate token.'});
        } else {
          next();
        }
      });
    } else {
      res
        .status(403)
        .send({success: false, message: 'No token provide.'});
    }
};

export { validateToken };