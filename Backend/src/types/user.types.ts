import { Types } from "mongoose";
import { ProductBrandsType } from "./product.type";

export type FavoriteProductType = {
  _id: Types.ObjectId;
  brand: ProductBrandsType;
  model: string;
  image: string;
};
