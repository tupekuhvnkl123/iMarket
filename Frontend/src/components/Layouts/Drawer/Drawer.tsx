import { DrawerConfig } from "./drawer.config";
import { useContext } from "react";
import { DrawerContext } from "../../../context/DrawerContext";
import classes from "../../../style/Layouts/Drawer/Drawer.module.scss";

type DrawerProps = {
  className?: string;
};

const Drawer: React.FC<DrawerProps> = ({ className }) => {
  const { drawerContent, drawerIsOpen, closeDrawer } =
    useContext(DrawerContext);
  const DrawerContent = drawerContent && DrawerConfig[drawerContent];

  if (drawerIsOpen) {
    document.body.classList.add("active-modal");
  } else {
    document.body.classList.remove("active-modal");
  }

  return (
    <div
      className={`${classes.container} ${
        drawerIsOpen ? classes.open : ""
      } ${className}`}
    >
      <div className={classes.drawer}>
        <div className={classes.content}>
          {DrawerContent && <DrawerContent closeDrawer={closeDrawer} />}
        </div>
      </div>
      <div className={classes.blur} onClick={closeDrawer} />
    </div>
  );
};

export default Drawer;
