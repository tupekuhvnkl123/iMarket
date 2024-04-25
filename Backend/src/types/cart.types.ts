import { Types } from "mongoose";

export type CartSchemaType = Types.DocumentArray<{
  productId: Types.ObjectId;
  model: string;
  option: { capacity: string; price: number };
  color: { name: string; hex: string; image: string };
}>;

export type OrderSchemaType = Types.DocumentArray<{
  productId: Types.ObjectId;
  stripeOrderId: string;
  model: string;
  option: { capacity: string; price: number };
  color: { name: string; hex: string; image: string };
}>;
