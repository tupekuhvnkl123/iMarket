import FavoriteItem from "./FavoriteItem";
import classes from "../../../../style/Layouts/Drawer/Favorites/Favorites.module.scss";
import ExploreCard from "../../../UI/ExploreCard";
import { useQuery } from "react-query";
import { PuffLoader } from "react-spinners";
import { Snackbar } from "@mui/material";
import { FavoriteProductType } from "./Favorites.types";
import { getAxiosRequest, getErrorMsg } from "../../../../utils/functions";
import { useContext } from "react";
import { AuthContext } from "../../../../context/AuthContext";

const Favorites: React.FC = () => {
  const { isLoggedIn } = useContext(AuthContext);
  const { data, isError, isLoading, error } = useQuery("favorites", {
    enabled: isLoggedIn,
    queryFn: () =>
      getAxiosRequest<{ favorites: FavoriteProductType[] }>("/user/favorites"),
  });

  if (isLoading) {
    return (
      <div className={classes.loaderContainer}>
        <PuffLoader color="white" />
      </div>
    );
  }

  if (isError) {
    return (
      <Snackbar
        open={isError}
        autoHideDuration={5000}
        message={getErrorMsg(error)}
      />
    );
  }

  if (!data?.favorites?.length) {
    return <ExploreCard text="Your favorites list is empty..." />;
  }

  return (
    <ul className={classes.favoritesList}>
      {data &&
        data.favorites.map((product: FavoriteProductType) => (
          <FavoriteItem key={product._id} product={product} />
        ))}
    </ul>
  );
};

export default Favorites;
