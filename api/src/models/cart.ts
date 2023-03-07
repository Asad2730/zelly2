import mongoose from "mongoose";

const { Schema } = mongoose;

const cartSchema = new Schema({
    orderItems: [{
        type: mongoose.Types.ObjectId, ref: 'order', required: true
    }],
    Address: { type: String, required: true },
    city: { type: String, required: true },
    zip: { type: Number, required: true },
    phone: { type: Number, required: true },
    status: { type: String, required: true, default: "pending" },
    user: { type: mongoose.Types.ObjectId, ref: 'user', required: true },
    totalItems: Number,
    totalPrice: Number,
    dateOrdered: {
        type: Date,
        default: Date.now
    }
});

export const Cart = mongoose.model("cart", cartSchema);