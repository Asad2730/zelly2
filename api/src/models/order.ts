import mongoose from "mongoose";

const { Schema } = mongoose;

const orderSchema = new Schema({
    quantity: Number,
    product: { type: mongoose.Schema.Types.ObjectId, ref: 'product', required: true },
});

export const Order = mongoose.model("order", orderSchema);