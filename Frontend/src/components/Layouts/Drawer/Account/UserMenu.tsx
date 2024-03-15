import { AiOutlineUser } from "react-icons/ai";
import { GoPackage } from "react-icons/go";
import { MdFavorite } from "react-icons/md";
import { PiSignOut } from "react-icons/pi";
import classes from "../../../../style/Layouts/Drawer/Account/UserMenu.module.scss";
import { useContext } from "react";
import { DrawerContext } from "../../../../context/DrawerContext";
import { DrawerValues } from "../Drawer.types";

const UserMenu: React.FC = () => {
  const { setDrawerContent } = useContext(DrawerContext);

  return (
    <div className={classes.container}>
      <p className={classes.title}>Account</p>
      <ul className={classes.navList}>
        <li
          className={classes.navItem}
          onClick={() => setDrawerContent(DrawerValues.orders)}
        >
          <GoPackage className={classes.icon} />
          <p>Orders</p>
        </li>
        <li
          className={classes.navItem}
          onClick={() => setDrawerContent(DrawerValues.favorites)}
        >
          <MdFavorite className={classes.icon} />
          <p>Favorites</p>
        </li>
        <li className={classes.navItem}>
          <AiOutlineUser className={classes.icon} />
          <p>Account</p>
        </li>
        <li className={classes.navItem}>
          <PiSignOut className={classes.icon} />
          <p>Sign Out</p>
        </li>
      </ul>
    </div>
  );
};

export default UserMenu;
