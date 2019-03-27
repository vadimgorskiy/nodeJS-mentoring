import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: true
      },
    lastName: {
        type: String,
        required: true
      },
    age: {
        type: Number,
        min: 18
    },
    password: {
        type: String,
        validate: {
            validator: (value) => value.length > 6,
            message: 'Password must be longer than 6 characters' 
        }
      },
    registered: String,
    lastModifiedDate: Date
}, {
    timestamps: {
        createdAt: 'registered',
        updatedAt: 'lastModifiedDate'
    }
});

export const User = mongoose.model('User', userSchema);