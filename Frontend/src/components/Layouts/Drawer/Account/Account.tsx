import { useContext, useState } from "react";
import Auth from "./Auth";
import { AuthContext } from "../../../../context/AuthContext";
import UserMenu from "./UserMenu";
import { useMutation } from "react-query";
import axios from "axios";
import { AuthFormValues, AuthMutationParam } from "./Account.types";
import { DrawerContext } from "../../../../context/DrawerContext";
import { getErrorMsg } from "../../../../utils/functions";

const Account: React.FC = () => {
  const { closeDrawer } = useContext(DrawerContext);
  const [isLogin, setIsLogin] = useState<boolean>(true);
  const { isLoggedIn, login } = useContext(AuthContext);

  const authRequest = async (param: AuthMutationParam) => {
    const response = await axios.post(`/auth/${param.method}`, param.body);
    return response.data;
  };

  const authMutation = useMutation({
    mutationFn: (param: AuthMutationParam) => authRequest(param),
  });

  const authSubmitHandler = (data: AuthFormValues, isLogin: boolean) => {
    const method = isLogin ? "login" : "register";

    authMutation.mutateAsync({ method, body: data }).then((data) => {
      if (method === "login") {
        login(data.user);
        closeDrawer();
      } else {
        setIsLogin(true);
      }
    });
  };

  return (
    <>
      {isLoggedIn ? (
        <UserMenu />
      ) : (
        <Auth
          onSubmit={authSubmitHandler}
          errorMsg={authMutation.error && getErrorMsg(authMutation.error)}
          isLoading={authMutation.isLoading}
          setIsLogin={setIsLogin}
          isLogin={isLogin}
        />
      )}
    </>
  );
};

export default Account;
