const users = require('../data/users')

const getUsers = () => users;

const getUser = (firstName, password) => users.find((user) => user.firstName === firstName && user.password === password);

export { getUsers, getUser };