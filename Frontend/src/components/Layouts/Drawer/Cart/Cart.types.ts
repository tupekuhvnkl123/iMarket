import {
  ProductColorType,
  ProductOptionType,
} from "../../../Pages/ProductPage/ProductPage.types";

export type CartProductType = {
  _id: string;
  productId: string;
  model: string;
  option: ProductOptionType;
  color: ProductColorType;
};
