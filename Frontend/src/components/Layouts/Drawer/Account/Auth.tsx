import { AuthFormValues } from "./Account.types";
import AuthForm from "./AuthForm";
import classes from "../../../../style/Layouts/Drawer/Account/Auth.module.scss";
import { SetStateType } from "../../../../types/custom.types";

type AuthProps = {
  onSubmit: (data: AuthFormValues, isLogin: boolean) => void;
  errorMsg: string | unknown;
  isLoading: boolean;
  setIsLogin: SetStateType<boolean>;
  isLogin: boolean;
};

const Auth: React.FC<AuthProps> = ({
  onSubmit,
  errorMsg,
  isLoading,
  setIsLogin,
  isLogin,
}) => {
  return (
    <div className={classes.container}>
      <div className={classes.selectAuth}>
        <p
          onClick={() => setIsLogin(true)}
          className={isLogin ? classes.active : ""}
        >
          Login
        </p>
        <hr />
        <p
          className={!isLogin ? classes.active : ""}
          onClick={() => setIsLogin(false)}
        >
          Create Account
        </p>
      </div>
      <AuthForm
        onSubmit={onSubmit}
        isLogin={isLogin}
        errorMsg={errorMsg}
        isLoading={isLoading}
      />
      {isLogin && (
        <div className={classes.demoAccount}>
          <p>
            <b>Demo Account :</b> demo@gmail.com | demo12345
          </p>
        </div>
      )}
    </div>
  );
};

export default Auth;
