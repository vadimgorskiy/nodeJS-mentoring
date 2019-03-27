import mongoose from 'mongoose';

const productSchema = new mongoose.Schema({
    name: String,
    detail: String,
    price: String,
    hero: String,
    image: String,
    lastModifiedDate: Date
}, {
    timestamps: {
        createdAt: 'lastModifiedDate',
        updatedAt: 'lastModifiedDate'
    }
});

export const Product = mongoose.model('Product', productSchema);