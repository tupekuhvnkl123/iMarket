import {
  ProductBrandsType,
  ProductOptionType,
} from "../ProductPage/ProductPage.types";

export type ProductItemColorType = {
  _id: string;
  hex: string;
};

export type ProductItemType = {
  _id: string;
  image: string;
  model: string;
  colors: ProductItemColorType[];
  options: ProductOptionType[];
};

export type ProductsPageStaticDataType = {
  title: ProductBrandsType;
  background: string;
  previewImage: string;
};
