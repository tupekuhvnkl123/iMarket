import { useState } from "react";
import { DrawerValues } from "../components/Layouts/Drawer/Drawer.types";
import { GlobalContextType } from "../context/GlobalContext.types";

const useGlobalContext = (): GlobalContextType => {
  const [drawerContent, setDrawerContent] = useState<DrawerValues | null>(null);

  const closeDrawer = () => {
    setDrawerContent(null);
  };

  return {
    drawerContent,
    drawerIsOpen: !!drawerContent,
    setDrawerContent,
    closeDrawer,
  };
};

export default useGlobalContext;
