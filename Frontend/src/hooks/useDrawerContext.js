import { useState } from "react";
const useDrawerContext = () => {
    const [drawerContent, setDrawerContent] = useState(null);
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
