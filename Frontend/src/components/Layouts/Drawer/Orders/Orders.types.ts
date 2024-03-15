import {
  ProductBrandsType,
  ProductColorType,
  ProductOptionType,
} from "../../../Pages/ProductPage/ProductPage.types";

export type OrderProductType = {
  _id: string;
  brand: ProductBrandsType;
  model: string;
  option: ProductOptionType;
  color: ProductColorType;
};
