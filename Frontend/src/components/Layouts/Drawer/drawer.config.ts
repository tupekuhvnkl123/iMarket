import { DrawerValues } from "./Drawer.types";
import Account from "./Account/Account";
import NavLinks from "./NavLinks/NavLinks";
import Search from "./Search/Search";
import Favorites from "./Favorites/Favorites";
import Cart from "./Cart/Cart";

export type DrawerContentProps = {
  closeDrawer?: () => void;
};

export const DrawerConfig = {
  [DrawerValues.account]: Account,
  [DrawerValues.cart]: Cart,
  [DrawerValues.favorites]: Favorites,
  [DrawerValues.search]: Search,
  [DrawerValues.navLinks]: NavLinks,
};
