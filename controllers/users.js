import { models } from '../models';
import { 
    errorResponse,
    successResonse,
    notFoundResponse,
 } from '../responses';
 import { User } from '../entities/user';

export const handleUsers = (req, res) => {
    models.User
    .find()
    .then((users) => successResonse(res, {users}))
    .catch( err => errorResponse(res, err));
}

export const handleCreateUser = (req, res) => {
    new models.User(new User(req.body))
        .save()
        .then((user) => successResonse(res, {user}))
        .catch((err) => errorResponse(res, err));
}

export const handleDeleteUser = (req, res) => {
    models.User
        .findOneAndRemove(req.params.id)
        .then(user => {
            if (user) {
                successResonse(res, {user});
            } else {
                notFoundResponse(res, `User ${user._id} not found`);
            }
        })
        .catch( err => errorResponse(res, err));
}