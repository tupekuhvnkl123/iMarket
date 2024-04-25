import FavoriteItem from "./FavoriteItem";
import classes from "../../../../style/Layouts/Drawer/Favorites/Favorites.module.scss";
import ExploreCard from "../../../UI/ExploreCard";
import { useMutation, useQuery } from "react-query";
import { PuffLoader } from "react-spinners";
import { FavoriteProductType } from "./Favorites.types";
import { getAxiosRequest, getErrorMsg } from "../../../../utils/functions";
import { useContext } from "react";
import { AuthContext } from "../../../../context/AuthContext";
import axios from "axios";
import SnackBar from "../../../UI/SnackBar";

const Favorites: React.FC = () => {
  const { isLoggedIn } = useContext(AuthContext);
  const { data, isError, isLoading, error, refetch } = useQuery("favorites", {
    enabled: isLoggedIn,
    queryFn: () =>
      getAxiosRequest<{ favorites: FavoriteProductType[] }>("/user/favorites"),
  });

  const removeFromFavorite = async (model: string) => {
    const response = await axios.post("/user/addToFavorite", { model });
    return response.data;
  };

  const {
    mutate: removeFavHandler,
    isError: removeFavIsError,
    error: removeFavError,
  } = useMutation({
    mutationFn: (model: string) =>
      removeFromFavorite(model).then(() => {
        refetch();
      }),
  });

  if (isLoading) {
    return (
      <div className={classes.loaderContainer}>
        <PuffLoader color="white" />
      </div>
    );
  }

  if (!data?.favorites?.length) {
    return <ExploreCard text="Your favorites list is empty..." />;
  }

  return (
    <>
      <ul className={classes.favoritesList}>
        {data &&
          data.favorites.map((product: FavoriteProductType) => (
            <FavoriteItem
              key={product._id}
              product={product}
              onRemoveFavorite={removeFavHandler}
            />
          ))}
      </ul>

      <SnackBar
        open={isError || removeFavIsError}
        hideDuration={5000}
        message={getErrorMsg(error || removeFavError)}
      />
    </>
  );
};

export default Favorites;
