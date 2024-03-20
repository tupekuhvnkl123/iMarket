import { Schema, model } from "mongoose";

const userSchema = new Schema(
  {
    email: { type: String, require: true },
    password: { type: String, require: true },
    cart: [{ type: Schema.Types.ObjectId, ref: "Product", default: [] }],
    favorites: [{ type: Schema.Types.ObjectId, ref: "Product", default: [] }],
    orders: [{ type: Schema.Types.ObjectId, ref: "Product", default: [] }],
  },

  { collection: "Users", timestamps: true }
);

const User = model("User", userSchema);

export default User;
