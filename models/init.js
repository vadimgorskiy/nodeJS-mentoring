import { models } from './index';
import { MongoClient } from 'mongodb';

import { City } from '../entities/city';
import { User } from '../entities/user';
import { Product } from '../entities/product';

import users from '../data/users.json';
import products from '../data/products.json';
import cities from '../data/cities.json';

function clearData(model) {
    model.find().then(items => {
        items.forEach(item => model.findOneAndDelete(item._id).then());
    })
}

async function initModel(data, model, entity) {
    for (const item of data) {
        await new model(new entity(item))
            .save()
            .then()
            .catch((e) => console.log(e));    
    }
    console.log('Done!');
}

models.connect()
    .then(() => {

        initModel(cities, models.City, City);
        initModel(users, models.User, User);
        initModel(products, models.Product, Product);

        // cities.forEach(city => {
        //     new models.City(new City(city)).save().then((d) => console.log(d)).catch((e) => console.log(e));
        // });

        // users.forEach(user => {
        //     new models.User(new User(user)).save().then((d) => console.log(d)).catch((e) => console.log(e));
        // });

        // products.forEach(product => {
        //     new models.Product(new Product(product)).save().then((d) => console.log(d)).catch((e) => console.log(e));
        // });

        // clearData(models.City);
        // clearData(models.User);
        // clearData(models.Product);
    })
    .catch(() => {});

// MongoClient.connect(config.urlDB, { useNewUrlParser: true })
//     .then((client) => {
//         const myDB = client.db('newdb');
//         myDB.createCollection('cities')
//             .then(collection => {
//                 return collection.insertMany(products); 
//             })
//             .then(() => console.log('a collection of cities was created'));
//     })