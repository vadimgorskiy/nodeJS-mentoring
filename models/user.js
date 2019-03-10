export default (sequelize, DataTypes) => {
    return sequelize.define('User', {
        id: { type: DataTypes.STRING, primaryKey: true },
        username: DataTypes.STRING,
        lastName: DataTypes.STRING,
        password: DataTypes.STRING
    });
};