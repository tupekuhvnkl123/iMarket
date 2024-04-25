import React from "react";
import { homePageProductGallery } from "../../utils/consts";
import ProductGalleryItem from "./ProductGalleryItem";
import classes from "../../style/Home/ProductsGallery.module.scss";

type ProductGalleryProps = {
  titleRef: React.RefObject<HTMLHeadingElement>;
  onClickProduct: (route: string | undefined) => void;
};

const ProductsGallery: React.FC<ProductGalleryProps> = ({
  titleRef,
  onClickProduct,
}) => {
  const { mappedProducts, iPhone15, airPodsMax } = homePageProductGallery;

  return (
    <section className={classes.section}>
      <div className={classes.container}>
        <div className={classes.title}>
          <h1 ref={titleRef}>New Arrivals</h1>
        </div>
        <div className={classes.galleryContainer}>
          <div className={classes.mappedProducts}>
            {mappedProducts.map((item, index) => (
              <ProductGalleryItem
                key={index}
                title={item.title}
                image={item.image}
                onClick={() => onClickProduct(item.route)}
              />
            ))}
          </div>
          <ProductGalleryItem
            title={iPhone15.title}
            image={iPhone15.image}
            className={classes.iPhone15}
            onClick={() => onClickProduct(`iPhone/iPhone-15`)}
          />
        </div>
        <div
          className={classes.airPodsMax}
          onClick={() => onClickProduct("AirPods/AirPods-Max")}
        >
          <span>{airPodsMax.title}</span>
          <img src={airPodsMax.image} alt={airPodsMax.title} />
        </div>
      </div>
    </section>
  );
};

export default ProductsGallery;
