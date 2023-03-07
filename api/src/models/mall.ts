import mongoose from "mongoose";

const { Schema } = mongoose;

const mallSchema = new Schema({
    totalShops: Number,
    floors: Number,
    registeredShops: Number,
    availableShops: Number,
});

export const Mall = mongoose.model("mall", mallSchema);