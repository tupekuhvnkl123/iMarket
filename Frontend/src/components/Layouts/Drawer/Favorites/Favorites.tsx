import { DUMMY_FAVORITES } from "../../../../utils/consts";
import FavoriteItem from "./FavoriteItem";
import classes from "../../../../style/Layouts/Drawer/Favorites/Favorites.module.scss";
import ExploreCard from "../../../UI/ExploreCard";

const Favorites: React.FC = () => {
  if (!DUMMY_FAVORITES.length) {
    return <ExploreCard text="Your favorites list is empty..." />;
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
