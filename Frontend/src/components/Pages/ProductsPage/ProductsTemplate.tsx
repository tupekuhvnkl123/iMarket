import { useContext, useRef } from "react";
import { useMutation, useQuery } from "react-query";
import PreviewCard from "./PreviewCard";
import {
  ProductItemType,
  ProductsPageStaticDataType,
} from "./ProductsPage.types";
import "react-loading-skeleton/dist/skeleton.css";
import axios from "axios";
import { AuthContext } from "../../../context/AuthContext";
import { getAxiosRequest } from "../../../utils/functions";
import { FavoriteProductType } from "../../Layouts/Drawer/Favorites/Favorites.types";
import ProductsList from "./ProductsList";
import classes from "../../../style/Pages/ProductsPage/ProductsTemplate.module.scss";
import SnackBar from "../../UI/SnackBar";

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

  const { mutate: addToFavHandler, isError: addToFavIsError } = useMutation({
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
      <ProductsList
        products={products}
        productsListRef={productsListRef}
        isLoading={isLoading}
        addToFavHandler={addToFavHandler}
        favorites={favorites}
      />

      <SnackBar
        open={isError || addToFavIsError}
        hideDuration={5000}
        message={errorMsg}
      />
    </main>
  );
};

export default ProductsTemplate;
