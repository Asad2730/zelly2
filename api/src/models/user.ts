import mongoose from "mongoose";

const { Schema } = mongoose;

const userSchema = new Schema({
    timeAccountCreation: {
        type: Number,
        default: Date.now(),
    },
    email: { type: String, unique: true, required: true },
    password: { type: String, required: true },
    token: { type: String },
    userType: {
        type: String,
        uppercase: true,
        required: true,
        enum: ['ADMIN', 'SHOPKEEPER', 'CUSTOMER'],
        default: 'CUSTOMER'
    },
    personalInformation: {
        firstName: String,
        lastName: String,
        dob: String,
        Address: String,
        zipCode: Number,
        cnic: { type: Number, unique: true }
    },
});

export const User = mongoose.model("user", userSchema);