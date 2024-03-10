import React, { useContext } from "react";
import classes from "../../../style/Layouts/Drawer/EmptyCartAndFavorites.module.scss";
import { appRoutes } from "../../../utils/consts";
import { useNavigate } from "react-router-dom";
import { GlobalContext } from "../../../context/GlobalContext";

type EmptyCartAndFavoritesProps = {
  isCart?: boolean;
};

const EmptyCartAndFavorites: React.FC<EmptyCartAndFavoritesProps> = ({
  isCart,
}) => {
  const { closeDrawer } = useContext(GlobalContext);
  const navigate = useNavigate();

  const exploreHanlder = () => {
    navigate(appRoutes.Home);
    closeDrawer();
  };

  return (
    <div className={classes.container}>
      <p>Your {isCart ? "cart" : "favorites list"} is empty...</p>
      <button onClick={exploreHanlder}>Explore</button>
    </div>
  );
};

export default EmptyCartAndFavorites;
