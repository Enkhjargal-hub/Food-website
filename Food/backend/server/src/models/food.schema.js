import mongoose from "mongoose";

const {Schema, model, models} = mongoose;

const productSchema = new Schema ({
    name: String,
    price: {type: Number, requered: true},
    description: String,
    quantity: {type: Number, requered: true },
});

export const Products = models.Products || model("Products", productSchema);