import { Schema, model } from "mongoose";

const colorsSchema = new Schema({
  name: { type: String, required: true },
  hex: { type: String, required: true },
  image: { type: String, required: true },
});
const informationSchema = new Schema({
  width: { type: String, required: true },
  height: { type: String, required: true },
  depth: { type: String, required: true },
  weight: { type: String, required: true },
});
const optionsSchema = new Schema({
  capacity: { type: String, required: true },
  price: { type: Number, required: true },
});

const productSchema = new Schema(
  {
    brand: {
      type: String,
      require: true,
      enum: ["Mac", "iPhone", "AirPods"],
    },
    model: { type: String, required: true },
    options: { type: [optionsSchema], required: true },
    colors: { type: [colorsSchema], required: true },
    information: { type: informationSchema, required: true },
  },

  { collection: "Products", timestamps: true }
);

const Product = model("Product", productSchema);

export default Product;
