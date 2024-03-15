import logo from "../../../assets/Logo.png";
import { Link, useLocation } from "react-router-dom";
import { appRoutes } from "../../../utils/consts";
import Drawer from "../Drawer/Drawer";
import { useContext } from "react";
import IconsList from "./IconsList";
import { DrawerContext } from "../../../context/DrawerContext";
import classes from "../../../style/Layouts/Navbar/Navbar.module.scss";

const Navbar: React.FC = () => {
  const { drawerIsOpen, closeDrawer } = useContext(DrawerContext);

  const location = useLocation();
  const route = location.pathname.replace("/", "");
  const blackNavbar =
    route === appRoutes.Mac ||
    route === appRoutes.iPhone ||
    route === appRoutes.AirPods;

  return (
    <>
      <nav
        className={`${classes.navbar} ${
          blackNavbar && !drawerIsOpen ? classes.blackNavbar : ""
        }`}
      >
        <img className={classes.logo} src={logo} alt="Logo" />

        <ul className={classes.navLinksList}>
          {Object.keys(appRoutes).map((key) => (
            <li onClick={closeDrawer} className={classes.navLink} key={key}>
              <Link to={key.toLowerCase()}>{key}</Link>
            </li>
          ))}
        </ul>
        <IconsList />
      </nav>

      <Drawer />
    </>
  );
};

export default Navbar;
