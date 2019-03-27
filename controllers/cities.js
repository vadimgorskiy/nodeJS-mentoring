import { MongoClient } from 'mongodb';

import { models } from '../models';
import config from '../config';
import { 
    errorResponse,
    successResonse,
    notFoundResponse,
 } from '../responses';
 import { City } from '../entities/city';

const getRandomCity = (req, res) => {
    MongoClient.connect(config.urlDB, { useNewUrlParser: true })
    .then( client => {
        const myDB = client.db('newdb');
        const citiesCollection = myDB.collection('cities');

        citiesCollection.find().toArray()
            .then((cities) => {
                client.close();
                const indexCity = Math.floor(Math.random() * (cities.length - 0)) + 0;
                successResonse(res, {city: cities[indexCity]});
            })
            .catch((err) => {
                client.close();
                errorResponse(res, err)
            });
    })
    .catch( err => errorResponse(res, err));
};



const getCities = (req, res) => {
    models.City
    .find()
    .then((cities) => successResonse(res, {cities}))
    .catch((err) => errorResponse(res, err));
};

const getCityById = (req, res) => {
    models.City
    .findById(req.params.id)
    .then((city) => {
        if (city) {
            successResonse(res, {city});
        } else {
            notFoundResponse(res, 'City not found');
        }
    })
    .catch((err) => errorResponse(res, err));
}

const createCity = (req, res) => {
    new models.City(new City(req.body))
        .save()
        .then((newCity) => successResonse(res, {city: newCity}))
        .catch((err) => errorResponse(res, err));

}

const updateCity = (req, res) => {
    models.City
        .findByIdAndUpdate(req.params.id, new City(req.body), {new: true, upsert: true})
        .then((city) => successResonse(res, {city}))
        .catch((err) => errorResponse(res, err));
}

const deleteCity = (req, res) => {
    models.City
        .findOneAndRemove(req.params.id)
        .then((city) => successResonse(res, {city}))
        .catch((err) => errorResponse(res, err));

}

export { 
    getRandomCity,
    getCities,
    getCityById,
    createCity,
    updateCity,
    deleteCity,
 };