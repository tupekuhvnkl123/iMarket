import { jsx as _jsx } from "react/jsx-runtime";
import { createContext } from "react";
import useDrawerContext from "../hooks/useDrawerContext";
const initialValue = {
    drawerContent: null,
    setDrawerContent: () => { },
    drawerIsOpen: false,
    closeDrawer: () => { },
};
export const DrawerContext = createContext(initialValue);
export const DrawerContextProvider = ({ children, }) => {
    const drawerContextValue = useDrawerContext();
    return (_jsx(DrawerContext.Provider, { value: drawerContextValue, children: children }, void 0));
};
