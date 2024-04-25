import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import AuthForm from "./AuthForm";
import classes from "../../../../style/Layouts/Drawer/Account/Auth.module.scss";
const Auth = ({ onSubmit, errorMsg, isLoading, setIsLogin, isLogin, }) => {
    return (_jsxs("div", { className: classes.container, children: [_jsxs("div", { className: classes.selectAuth, children: [_jsx("p", { onClick: () => setIsLogin(true), className: isLogin ? classes.active : "", children: "Login" }, void 0), _jsx("hr", {}, void 0), _jsx("p", { className: !isLogin ? classes.active : "", onClick: () => setIsLogin(false), children: "Create Account" }, void 0)] }, void 0), _jsx(AuthForm, { onSubmit: onSubmit, isLogin: isLogin, errorMsg: errorMsg, isLoading: isLoading }, void 0), isLogin && (_jsx("div", { className: classes.demoAccount, children: _jsxs("p", { children: [_jsx("b", { children: "Demo Account :" }, void 0), " demo@gmail.com | demo12345"] }, void 0) }, void 0))] }, void 0));
};
export default Auth;
