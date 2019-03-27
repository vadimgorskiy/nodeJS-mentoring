import mongoose from 'mongoose';
import config from '../config';

import { User } from './users';
import { Product } from './products';
import { City } from './cities';

export const models = {
  User,
  Product,
  City,
  mongoose,
  connect: function() {
    return mongoose.connect(config.urlDB, { useNewUrlParser: true });
  },
};