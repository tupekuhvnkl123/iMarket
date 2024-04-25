import { Schema, model } from "mongoose";

const colorsSchema = new Schema({
  name: { type: String, required: true },
  hex: { type: String, required: true },
  image: { type: String, required: true },
});

const optionSchema = new Schema({
  capacity: { type: String, default: "" },
  price: { type: Number, required: true },
});

const cartProductSchema = new Schema({
  productId: { type: Schema.Types.ObjectId, ref: "Product", required: true },
  model: { type: String, required: true },
  option: { type: optionSchema, required: true },
  color: { type: colorsSchema, required: true },
});
const orderProductSchema = new Schema({
  productId: { type: Schema.Types.ObjectId, ref: "Product", required: true },
  stripeOrderId: { type: String, required: true },
  model: { type: String, required: true },
  option: { type: optionSchema, required: true },
  color: { type: colorsSchema, required: true },
});

const userSchema = new Schema(
  {
    email: { type: String, require: true },
    password: { type: String, require: true },
    cart: { type: [cartProductSchema], default: [] },
    favorites: [{ type: Schema.Types.ObjectId, ref: "Product", default: [] }],
    orders: { type: [orderProductSchema], default: [] },
  },

  { collection: "Users", timestamps: true }
);

const User = model("User", userSchema);

export default User;
