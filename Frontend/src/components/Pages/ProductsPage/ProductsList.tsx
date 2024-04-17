import React from "react";
import ProductItem from "./ProductItem";
import Skeleton from "react-loading-skeleton";
import { UseMutateFunction } from "react-query";
import { ProductItemType } from "./ProductsPage.types";
import { FavoriteProductType } from "../../Layouts/Drawer/Favorites/Favorites.types";
import classes from "../../../style/Pages/ProductsPage/ProductsList.module.scss";

const skeletonItems = [0, 1, 2, 3, 4, 5, 6, 7];

type ProductsListProps = {
  productsListRef: React.RefObject<HTMLUListElement>;
  favorites?: { favorites: FavoriteProductType[] };
  products?: ProductItemType[] | [];
  addToFavHandler: UseMutateFunction<void, unknown, string, unknown>;
  isLoading: boolean;
};

const ProductsList: React.FC<ProductsListProps> = ({
  productsListRef,
  products,
  isLoading,
  addToFavHandler,
  favorites,
}) => (
  <ul ref={productsListRef} className={classes.productsList}>
    {isLoading &&
      skeletonItems.map((num) => (
        <Skeleton key={num} className={classes.skeletonItem} />
      ))}
    {products &&
      products.map((product) => {
        const favorited = favorites?.favorites.some(
          (fav: FavoriteProductType) => fav._id === product._id
        );

        return (
          <ProductItem
            key={product._id}
            data={product}
            onAddToFavorite={addToFavHandler}
            addedToFav={favorited}
          />
        );
      })}
  </ul>
);

export default ProductsList;
