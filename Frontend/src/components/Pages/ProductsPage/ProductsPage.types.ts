import {
  ProductBrandsType,
  ProductColorType,
  ProductOptionType,
} from "../ProductPage/ProductPage.types";

export type ProductItemType = {
  _id: string;
  model: string;
  colors: ProductColorType[];
  options: ProductOptionType[];
};

export type ProductsPageStaticDataType = {
  title: ProductBrandsType;
  background: string;
  previewImage: string;
};
