import { AiOutlineUser } from "react-icons/ai";
import { IoIosSearch } from "react-icons/io";
import { LuHeart } from "react-icons/lu";
import { PiShoppingCartSimple } from "react-icons/pi";
import Burger from "../../UI/Burger";
import { DrawerValues } from "../Drawer/Drawer.types";
import { useContext } from "react";
import { GlobalContext } from "../../../context/GlobalContext";
import classes from "../../../style/Layouts/Navbar/IconsList.module.scss";

const IconsList: React.FC = () => {
  const { setDrawerContent, drawerContent } = useContext(GlobalContext);

  const burgerClickHandler = () => {
    if (!!drawerContent === true) {
      setDrawerContent(null);
    } else {
      setDrawerContent(DrawerValues.navLinks);
    }
  };

  return (
    <ul className={classes.iconsList}>
      <li onClick={() => setDrawerContent(DrawerValues.search)}>
        <IoIosSearch className={classes.icon} />
      </li>
      <li
        onClick={() => setDrawerContent(DrawerValues.favorites)}
        className={classes.favorite}
      >
        <LuHeart className={classes.icon} />
      </li>
      <li onClick={() => setDrawerContent(DrawerValues.account)}>
        <AiOutlineUser className={classes.icon} />
      </li>
      <li
        onClick={() => setDrawerContent(DrawerValues.cart)}
        className={classes.cart}
      >
        <PiShoppingCartSimple className={classes.icon} />
      </li>
      <li onClick={burgerClickHandler} className={classes.burger}>
        <Burger open={!!drawerContent} />
      </li>
    </ul>
  );
};

export default IconsList;
