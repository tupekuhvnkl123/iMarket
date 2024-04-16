import { Types } from "mongoose";

export type ProductColorType = {
  _id: Types.ObjectId;
  name: string;
  hex: string;
  image: string;
};

export type ProductInformationType = {
  _id: Types.ObjectId;
  width: string;
  height: string;
  depth: string;
  weight: string;
};

export type ProductOptionType = {
  _id: Types.ObjectId;
  capacity: string;
  price: number;
};

export enum ProductBrandsType {
  Mac = "Mac",
  iPhone = "iPhone",
  AirPods = "AirPods",
}

export type ProductType = {
  _id: Types.ObjectId;
  brand: ProductBrandsType;
  model: string;
  colors: ProductColorType[];
  information: ProductInformationType;
  options: ProductOptionType[];
};

export type BrandProductsType = {
  _id: Types.ObjectId;
  // image: string;
  model: string;
  colors: ProductColorType[];
  options: ProductOptionType[];
};
