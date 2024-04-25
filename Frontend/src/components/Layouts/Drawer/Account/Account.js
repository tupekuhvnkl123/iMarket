import { jsx as _jsx, Fragment as _Fragment } from "react/jsx-runtime";
import { useContext, useState } from "react";
import Auth from "./Auth";
import { AuthContext } from "../../../../context/AuthContext";
import UserMenu from "./UserMenu";
import { useMutation } from "react-query";
import axios from "axios";
import { DrawerContext } from "../../../../context/DrawerContext";
import { getErrorMsg } from "../../../../utils/functions";
const Account = () => {
    const { closeDrawer } = useContext(DrawerContext);
    const [isLogin, setIsLogin] = useState(true);
    const { isLoggedIn, login } = useContext(AuthContext);
    const authRequest = async (param) => {
        const response = await axios.post(`/auth/${param.method}`, param.body);
        return response.data;
    };
    const authMutation = useMutation({
        mutationFn: (param) => authRequest(param),
    });
    const authSubmitHandler = (data, isLogin) => {
        const method = isLogin ? "login" : "register";
        authMutation.mutateAsync({ method, body: data }).then((data) => {
            if (method === "login") {
                login(data.user);
                closeDrawer();
            }
            else {
                setIsLogin(true);
            }
        });
    };
    return (_jsx(_Fragment, { children: isLoggedIn ? (_jsx(UserMenu, {}, void 0)) : (_jsx(Auth, { onSubmit: authSubmitHandler, errorMsg: authMutation.error && getErrorMsg(authMutation.error), isLoading: authMutation.isLoading, setIsLogin: setIsLogin, isLogin: isLogin }, void 0)) }, void 0));
};
export default Account;
