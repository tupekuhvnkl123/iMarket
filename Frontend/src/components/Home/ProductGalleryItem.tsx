import { HomeGalleryItemType } from "./Home.types";
import classes from "../../style/Home/ProductGalleryItem.module.scss";

type ProductGalleryItemProps = HomeGalleryItemType & {
  className?: string;
  onClick?: React.MouseEventHandler<HTMLDivElement>;
};

const ProductGalleryItem: React.FC<ProductGalleryItemProps> = ({
  title,
  image,
  className,
  onClick,
}) => {
  return (
    <div onClick={onClick} className={`${classes.card} ${className}`}>
      {title && <span className={classes.title}>{title}</span>}
      <img
        className={`${classes.image} ${!title ? classes.fullHeight : ""}`}
        src={image}
        alt={title}
      />
    </div>
  );
};

export default ProductGalleryItem;
