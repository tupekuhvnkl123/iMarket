import { DUMMY_FAVORITES } from "../../../../utils/consts";
import FavoriteItem from "./FavoriteItem";
import classes from "../../../../style/Layouts/Drawer/Favorites/Favorites.module.scss";
import EmptyCartAndFavorites from "../EmptyCartAndFavorites";

const Favorites: React.FC = () => {
  if (!DUMMY_FAVORITES.length) {
    return <EmptyCartAndFavorites />;
  }

  return (
    <ul className={classes.favoritesList}>
      {DUMMY_FAVORITES.map((product) => (
        <FavoriteItem key={product._id} product={product} />
      ))}
    </ul>
  );
};

export default Favorites;
