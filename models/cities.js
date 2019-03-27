import mongoose from 'mongoose';

const citySchema = new mongoose.Schema({
    name: String,
    country: String,
    capital: Boolean,
    location: {
        lat: Number,
        long: Number
    },
    lastModifiedDate: Date
}, { 
    collection: 'cities',
    timestamps: {
        createdAt: 'lastModifiedDate',
        updatedAt: 'lastModifiedDate'
    }
});

export const City = mongoose.model('City', citySchema);