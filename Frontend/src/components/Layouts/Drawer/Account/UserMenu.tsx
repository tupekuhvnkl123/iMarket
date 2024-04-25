import { GoPackage } from "react-icons/go";
import { MdFavorite } from "react-icons/md";
import { PiSignOut } from "react-icons/pi";
import classes from "../../../../style/Layouts/Drawer/Account/UserMenu.module.scss";
import { useContext } from "react";
import { DrawerContext } from "../../../../context/DrawerContext";
import { DrawerValues } from "../Drawer.types";
import { AuthContext } from "../../../../context/AuthContext";
import { IoMdSettings } from "react-icons/io";

const UserMenu: React.FC = () => {
  const { setDrawerContent } = useContext(DrawerContext);
  const { logout } = useContext(AuthContext);

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
        <li
          className={classes.navItem}
          onClick={() => setDrawerContent(DrawerValues.settings)}
        >
          <IoMdSettings className={classes.icon} />
          <p>Settings</p>
        </li>
        <li className={classes.navItem} onClick={logout}>
          <PiSignOut className={classes.icon} />
          <p>Sign Out</p>
        </li>
      </ul>
    </div>
  );
};

export default UserMenu;
