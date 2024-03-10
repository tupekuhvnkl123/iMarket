import { ProductBrandsType } from "../../../Pages/ProductPage/ProductPage.types";

export type FavoriteProductType = {
  _id: string;
  brand: ProductBrandsType;
  model: string;
  image: string;
};
