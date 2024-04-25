import { CgLock } from "react-icons/cg";
import classes from "../../../../style/Layouts/Drawer/Settings/ChangePasswordForm.module.scss";
import { changePasswordSchema } from "../../../../utils/validations";
import { useFormik } from "formik";
import { UseMutateFunction } from "react-query";

type ChangePasswordFormProps = {
  onChangePassword: UseMutateFunction<void, unknown, string, unknown>;
};

const ChangePasswordForm: React.FC<ChangePasswordFormProps> = ({
  onChangePassword,
}) => {
  const formik = useFormik({
    initialValues: {
      password: "",
    },
    validationSchema: changePasswordSchema,
    onSubmit: (values) => onChangePassword(values.password),
  });

  return (
    <form className={classes.form} onSubmit={formik.handleSubmit}>
      <p className={classes.title}>Password</p>
      <div>
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

      <button className={classes.changeBtn} type="submit">
        Change password
      </button>
    </form>
  );
};

export default ChangePasswordForm;
