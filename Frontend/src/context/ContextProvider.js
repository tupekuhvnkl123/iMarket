import { jsx as _jsx } from "react/jsx-runtime";
import { DrawerContextProvider } from "./DrawerContext";
import { AuthContextProvider } from "./AuthContext";
const ContextProvider = ({ children }) => {
    return (_jsx(AuthContextProvider, { children: _jsx(DrawerContextProvider, { children: children }, void 0) }, void 0));
};
export default ContextProvider;
