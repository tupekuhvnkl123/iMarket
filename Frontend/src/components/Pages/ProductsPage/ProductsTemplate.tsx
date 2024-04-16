import { useContext, useRef } from "react";
import PreviewCard from "./PreviewCard";
import ProductItem from "./ProductItem";
import {
  ProductItemType,
  ProductsPageStaticDataType,
} from "./ProductsPage.types";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import classes from "../../../style/Pages/ProductsPage/ProductsTemplate.module.scss";
import { Snackbar } from "@mui/material";
import axios from "axios";
import { useMutation, useQuery } from "react-query";
import { AuthContext } from "../../../context/AuthContext";
import { getAxiosRequest } from "../../../utils/functions";
import { FavoriteProductType } from "../../Layouts/Drawer/Favorites/Favorites.types";

const skeletonItems = [0, 1, 2, 3, 4, 5, 6, 7];

type ProductsTemplateProps = {
  staticData: ProductsPageStaticDataType;
  products?: ProductItemType[] | [];
  iPhonePage?: boolean;
  isLoading: boolean;
  isError: boolean;
  errorMsg: string;
};

const ProductsTemplate: React.FC<ProductsTemplateProps> = ({
  staticData,
  products,
  iPhonePage,
  isLoading,
  isError,
  errorMsg,
}) => {
  const { isLoggedIn } = useContext(AuthContext);
  const { data: favorites, refetch } = useQuery("favorites", {
    enabled: isLoggedIn,
    queryFn: () =>
      getAxiosRequest<{ favorites: FavoriteProductType[] }>("/user/favorites"),
  });
  const addToFavorite = async (model: string) => {
    const response = await axios.post("/user/addToFavorite", { model });
    return response.data;
  };

  const addToFavoriteMutation = useMutation({
    mutationFn: (model: string) =>
      addToFavorite(model).then(() => {
        refetch();
      }),
  });

  const productsListRef = useRef<HTMLUListElement>(null);
  const { previewImage, background, title } = staticData;

  const scrollIntoProductsView = () => {
    if (productsListRef.current) {
      productsListRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <main>
      <div
        className={classes.previewBackground}
        style={{ backgroundImage: `url(${background})` }}
      >
        <section className={classes.previewSection}>
          <PreviewCard
            previewImage={previewImage}
            title={title}
            iPhonePage={iPhonePage}
            arrowClickHandler={scrollIntoProductsView}
          />
        </section>
      </div>
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
                onAddToFavorite={addToFavoriteMutation.mutate}
                addedToFav={favorited}
              />
            );
          })}
      </ul>
      {(isError || addToFavoriteMutation.isError) && (
        <Snackbar
          open={isError || addToFavoriteMutation.isError}
          autoHideDuration={5000}
          message={errorMsg}
        />
      )}
    </main>
  );
};

export default ProductsTemplate;
