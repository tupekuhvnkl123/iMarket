import { MdOutlineAlternateEmail } from "react-icons/md";
import { CgLock } from "react-icons/cg";
import { useFormik } from "formik";
import { authSchema } from "../../../../utils/validations";
import { AuthFormValues } from "./Account.types";
import classes from "../../../../style/Layouts/Drawer/Account/AuthForm.module.scss";
import { PuffLoader } from "react-spinners";

type AuthProps = {
  onSubmit: (data: AuthFormValues, isLogin: boolean) => void;
  isLogin: boolean;
  errorMsg: string;
  isLoading: boolean;
};

const AuthForm: React.FC<AuthProps> = ({
  onSubmit,
  isLogin,
  errorMsg,
  isLoading,
}) => {
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: authSchema,
    onSubmit: (values) => onSubmit(values, isLogin),
  });

  return (
    <form onSubmit={formik.handleSubmit} className={classes.form}>
      <div className={classes.inputsContainer}>
        <div className={classes.inputContainer}>
          <div className={classes.iconContainer}>
            <MdOutlineAlternateEmail className={classes.icon} />
          </div>
          <input
            onChange={formik.handleChange}
            value={formik.values.email}
            name="email"
            type="email"
            placeholder="Email"
          />
        </div>
        {formik.touched.email && formik.errors.email && (
          <p className={classes.errorMessage}>{formik.errors.email}</p>
        )}
        <div className={classes.inputContainer}>
          <div className={classes.iconContainer}>
            <CgLock className={classes.icon} />
          </div>
          <input
            onChange={formik.handleChange}
            value={formik.values.password}
            name="password"
            type="password"
            placeholder="Password"
          />
        </div>
        {formik.touched.password && formik.errors.password && (
          <p className={classes.errorMessage}>{formik.errors.password}</p>
        )}
      </div>
      {errorMsg && <p className={classes.errorMessage}>{errorMsg}</p>}
      <button className={classes.authButton} type="submit">
        {isLoading ? (
          <PuffLoader size={20} />
        ) : isLogin ? (
          "Login"
        ) : (
          "Create Account"
        )}
      </button>
    </form>
  );
};

export default AuthForm;
