export default (sequelize, DataTypes) => {
    return sequelize.define('Product', {
        id: { type: DataTypes.STRING, primaryKey: true },
        name: DataTypes.STRING,
        detail: DataTypes.TEXT,
        price: DataTypes.FLOAT
    });
};