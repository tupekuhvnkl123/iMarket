import { jsx as _jsx } from "react/jsx-runtime";
import { createContext } from "react";
import useAuthContext from "../hooks/useAuthContext";
const initialValue = {
    isLoggedIn: false,
    user: null,
    login: () => { },
    logout: () => { },
    loggedInSucceed: false,
};
export const AuthContext = createContext(initialValue);
export const AuthContextProvider = ({ children, }) => {
    const authContextValue = useAuthContext();
    return (_jsx(AuthContext.Provider, { value: authContextValue, children: children }, void 0));
};
