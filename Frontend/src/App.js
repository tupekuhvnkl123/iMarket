import { jsx as _jsx, Fragment as _Fragment, jsxs as _jsxs } from "react/jsx-runtime";
import Navbar from "./components/Layouts/Navbar/Navbar";
import AppRoutes from "./routes/Routes";
import Footer from "./components/Layouts/Footer/Footer";
import "./style/global/global.scss";
import { setAxiosDefaults } from "./utils/setAxiosDefaults";
import { useContext, useLayoutEffect } from "react";
import { AuthContext } from "./context/AuthContext";
import SnackBar from "./components/UI/SnackBar";
const App = () => {
    const { isLoggedIn, loggedInSucceed } = useContext(AuthContext);
    useLayoutEffect(() => {
        setAxiosDefaults();
    }, [isLoggedIn]);
    return (_jsxs(_Fragment, { children: [_jsx(Navbar, {}, void 0), _jsx(AppRoutes, {}, void 0), _jsx(Footer, {}, void 0), _jsx(SnackBar, { success: true, open: loggedInSucceed, message: "Logged in successfully!", hideDuration: 3000 }, void 0)] }, void 0));
};
export default App;
