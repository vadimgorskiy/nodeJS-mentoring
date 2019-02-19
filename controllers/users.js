import { getUsers } from '../models/users';

export const handleUsers = (req, res) => {
    const users = getUsers();

    if (users && users.length) {
        res.status(200).json(users);
    } else {
        res.status(404).json({
            messsage: 'users not found',
        });
    }
    
}