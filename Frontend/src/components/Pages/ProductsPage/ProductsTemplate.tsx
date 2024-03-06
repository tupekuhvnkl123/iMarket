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

const skeletonItems = [0, 1, 2, 3, 4, 5, 6, 7];

type ProductsTemplateProps = {
  staticData: ProductsPageStaticDataType;
  products: ProductItemType[];
  iPhonePage?: boolean;
};

const ProductsTemplate: React.FC<ProductsTemplateProps> = ({
  staticData,
  products,
  iPhonePage,
}) => {
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
        {products
          ? products.map((product) => (
              <ProductItem key={product._id} data={product} />
            ))
          : skeletonItems.map((num) => (
              <Skeleton key={num} className={classes.skeletonItem} />
            ))}
      </ul>
    </main>
  );
};

export default ProductsTemplate;
