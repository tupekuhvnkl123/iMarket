import { FavoriteProductType } from "./Favorites.types";
import { useNavigate } from "react-router-dom";
import classes from "../../../../style/Layouts/Drawer/Favorites/FavoriteItem.module.scss";
import { appRoutes } from "../../../../utils/consts";
import { useContext } from "react";
import { DrawerContext } from "../../../../context/DrawerContext";

type FavoriteItemProps = {
  product: FavoriteProductType;
};

const FavoriteItem: React.FC<FavoriteItemProps> = ({ product }) => {
  const { closeDrawer } = useContext(DrawerContext);
  const navigate = useNavigate();
  const { brand, model, image } = product;

  const exploreHandler = () => {
    const productRoute = `/${appRoutes[brand]}/${model}`;
    navigate(productRoute);
    closeDrawer();
  };

  return (
    <div className={classes.favoriteItem}>
      <div className={classes.model}>
        <img src={image} alt={model} />
        <p>{model}</p>
      </div>

      <div className={classes.actions}>
        <div className={classes.buttonsContainer}>
          <button
            onClick={exploreHandler}
            className={classes.exploreBtn}
            type="button"
          >
            Explore
          </button>
          <button className={classes.removeBtn} type="button">
            Remove
          </button>
        </div>
        <hr />
      </div>
    </div>
  );
};

export default FavoriteItem;
