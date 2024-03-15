import React, { useContext } from "react";
import { appRoutes } from "../../utils/consts";
import { useNavigate } from "react-router-dom";
import { DrawerContext } from "../../context/DrawerContext";
import classes from "../../style/UI/ExploreCard.module.scss";

type ExploreCardProps = {
  text?: string;
};

const ExploreCard: React.FC<ExploreCardProps> = ({ text }) => {
  const { closeDrawer } = useContext(DrawerContext);
  const navigate = useNavigate();

  const exploreHanlder = () => {
    navigate(appRoutes.Home);
    closeDrawer();
  };

  return (
    <div className={classes.container}>
      {text && <p>{text}</p>}
      <button onClick={exploreHanlder}>Explore</button>
    </div>
  );
};

export default ExploreCard;
