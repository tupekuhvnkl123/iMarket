import {
  ProductBrandsType,
  ProductColorType,
  ProductOptionType,
} from "../../../Pages/ProductPage/ProductPage.types";

export type CartProductType = {
  _id: string;
  brand: ProductBrandsType;
  model: string;
  option: ProductOptionType;
  color: ProductColorType;
};
