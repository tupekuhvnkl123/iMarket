import { Types } from "mongoose";
import {
  ProductBrandsType,
  ProductColorType,
  ProductOptionType,
  ProductType,
} from "./product.type";

// export type CartSchemaType = {
//   _id: Types.ObjectId;
//   product: Types.ObjectId;
//   option: ProductOptionType;
//   color: ProductColorType;
// };

export type PopulatedCartType = {
  _id: Types.ObjectId;
  product: ProductType;
  option: ProductOptionType;
  color: ProductColorType;
};
export type CartProductType = {
  _id: Types.ObjectId;
  brand: ProductBrandsType;
  model: string;
  option: ProductOptionType;
  color: ProductColorType;
};
