import fs from 'fs';
import path from 'path';
import Sequelize from 'sequelize';

const basename  = path.basename(__filename);
const db = {};
const sequelize = new Sequelize('postgres://postgres:123@localhost:5432/mentoring');

fs
  .readdirSync(__dirname)
  .filter(file => {
    return (file.indexOf('.') !== 0) && (file !== basename) && (file.slice(-3) === '.js');
  })
  .forEach(file => {
    var model = sequelize.import(path.join(__dirname, file));
    db[model.name] = model;
  });

db.sequelize = sequelize;
db.Sequelize = Sequelize;

export default db;