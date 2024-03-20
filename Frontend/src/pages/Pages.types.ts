import { ProductType } from "../components/Pages/ProductPage/ProductPage.types";
import { ProductItemType } from "../components/Pages/ProductsPage/ProductsPage.types";

export type ProductsResponseType = Promise<{
  products: ProductItemType[] | [];
}>;

export type ProductResponseType = Promise<{
  product: ProductType;
}>;
