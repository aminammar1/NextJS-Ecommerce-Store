import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    unique: true,
  },
  price: {
    type: Number,
    required: true,
  },
  img: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  rating: {
    type: Number,
    required: true,
  },
  brand: {
    type: String,
    required: true,
  },
  shopping: {
    type: String,
    required: true,
  },
  stock: {
    type: Number,
    required: true,
  },
  reviews: {
    type: String,
    required: true,
  },
});

const Product = mongoose.model("Product", productSchema);
export default Product;
