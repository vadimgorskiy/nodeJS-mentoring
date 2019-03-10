import models from '../models';

export const handleUsers = (req, res) => {
    models.User
        .findAll({
            raw: true,
        })
        .then((users) => {
            if (users.length) {
                res.status(200).json({
                    users: users.map((user) => ({
                        id: user.id,
                        username: user.username,
                        lastName: user.lastName,
                    })),
                });
            } else {
                res.status(404).json({
                    messsage: 'users not found',
                });
            }
        })
        .catch((error) => {
            res.status(404).json({
                error,
            });
        });    
}

export const handleCreateUser = (req, res) => {
    models.User
        .create({
            id: `${new Date().getTime()}`,
            username: req.body.username,
            lastName: req.body.lastName,
            password: req.body.password,
        }, {
            raw: true,
        })
        .then((user) => {
            res.status(200).json({
                user: {
                    id: user.id,
                    username: user.username,
                    lastName: user.lastName,
                },
            });
        })
        .catch((error) => {
            res.status(500).json({
                error,
            });
        });
}

export const handleDeleteUser = (req, res) => {
    models.User
        .destroy({
            where: {id: req.params.id}
        })
        .then((isSuccess) => {
            if (isSuccess) {
                res.status(204).send();
            } else {
                res.status(404).send();
            }
        })
        .catch((error) => {
            res.status(500).json({
                error,
            });
        });
}