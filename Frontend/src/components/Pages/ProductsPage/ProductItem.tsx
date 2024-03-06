import { useNavigate } from "react-router-dom";
import { ProductItemType } from "./ProductsPage.types";
import { MdFavoriteBorder } from "react-icons/md";
import classes from "../../../style/Pages/ProductsPage/ProductItem.module.scss";

type ProductItemProps = {
  data: ProductItemType;
};

const ProductItem: React.FC<ProductItemProps> = ({ data }) => {
  const navigate = useNavigate();
  const { image, model, colors, options } = data;

  const navigateToProduct = () => {
    const productRoute = model.replace(/ /g, "-");
    navigate(productRoute);
  };

  return (
    <div className={classes.item}>
      <MdFavoriteBorder className={classes.favoriteIcon} />
      <img
        onClick={navigateToProduct}
        className={classes.image}
        src={image}
        alt={model}
      />
      <h2 onClick={navigateToProduct} className={classes.model}>
        {model}
      </h2>
      <div className={classes.colors}>
        {colors.map(({ _id, hex }) => (
          <div key={_id} style={{ backgroundColor: `#${hex}` }} />
        ))}
      </div>
      <div className={classes.capacity}>
        {options.map((option) => (
          <p key={option.capacity}>{option.capacity}</p>
        ))}
      </div>
      <p className={classes.price}>from {options[0].price}$</p>
      <button onClick={navigateToProduct} className={classes.buyNowBtn}>
        Buy now
      </button>
    </div>
  );
};

export default ProductItem;
