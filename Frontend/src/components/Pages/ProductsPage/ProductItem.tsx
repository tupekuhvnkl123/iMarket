import { useNavigate } from "react-router-dom";
import { ProductItemType } from "./ProductsPage.types";
import { MdFavoriteBorder, MdFavorite } from "react-icons/md";
import classes from "../../../style/Pages/ProductsPage/ProductItem.module.scss";
import { useContext } from "react";
import { AuthContext } from "../../../context/AuthContext";
import { DrawerContext } from "../../../context/DrawerContext";
import { DrawerValues } from "../../Layouts/Drawer/Drawer.types";

type ProductItemProps = {
  data: ProductItemType;
};

const ProductItem: React.FC<ProductItemProps> = ({ data }) => {
  const { isLoggedIn } = useContext(AuthContext);
  const { setDrawerContent } = useContext(DrawerContext);
  const navigate = useNavigate();
  const { model, colors, options } = data;

  const navigateToProduct = () => {
    const productRoute = model.replace(/ /g, "-");
    navigate(productRoute);
  };

  const favoriteHandler = () => {
    if (isLoggedIn) {
      console.log("adding to favorite");
    } else {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
      setDrawerContent(DrawerValues.account);
    }
  };

  return (
    <div className={classes.item}>
      <div className={classes.favoriteContainer} onClick={favoriteHandler}>
        <MdFavoriteBorder className={classes.favoriteIcon} />
        <MdFavorite
          className={`${classes.favoriteIcon} ${classes.filledIcon}`}
        />
      </div>
      <img
        onClick={navigateToProduct}
        className={classes.image}
        src={colors[0].image}
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
