import { useRef } from "react";
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

const skeletonItems = [0, 1, 2, 3, 4, 5, 6, 7];

type ProductsTemplateProps = {
  staticData: ProductsPageStaticDataType;
  products?: ProductItemType[] | [];
  iPhonePage?: boolean;
  isLoading: boolean;
  isError: boolean;
};

const ProductsTemplate: React.FC<ProductsTemplateProps> = ({
  staticData,
  products,
  iPhonePage,
  isLoading,
  isError,
}) => {
  const productsListRef = useRef<HTMLUListElement>(null);
  const { previewImage, background, title } = staticData;

  const scrollIntoProductsView = () => {
    if (productsListRef.current) {
      productsListRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  const errorMessage = "Could not fetch products, please try to refresh.";

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
          products.map((product) => (
            <ProductItem key={product._id} data={product} />
          ))}
      </ul>
      {isError && (
        <Snackbar
          open={isError}
          autoHideDuration={5000}
          message={errorMessage}
        />
      )}
    </main>
  );
};

export default ProductsTemplate;
