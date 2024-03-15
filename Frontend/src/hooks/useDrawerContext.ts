import { useState } from "react";
import { DrawerValues } from "../components/Layouts/Drawer/Drawer.types";
import { DrawerContextType } from "../context/DrawerContext.types";

const useDrawerContext = (): DrawerContextType => {
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

export default useDrawerContext;
