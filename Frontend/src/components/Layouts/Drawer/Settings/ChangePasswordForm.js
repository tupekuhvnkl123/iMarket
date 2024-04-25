import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { CgLock } from "react-icons/cg";
import classes from "../../../../style/Layouts/Drawer/Settings/ChangePasswordForm.module.scss";
import { changePasswordSchema } from "../../../../utils/validations";
import { useFormik } from "formik";
const ChangePasswordForm = ({ onChangePassword, }) => {
    const formik = useFormik({
        initialValues: {
            password: "",
        },
        validationSchema: changePasswordSchema,
        onSubmit: (values) => onChangePassword(values.password),
    });
    return (_jsxs("form", { className: classes.form, onSubmit: formik.handleSubmit, children: [_jsx("p", { className: classes.title, children: "Password" }, void 0), _jsxs("div", { children: [_jsxs("div", { className: classes.inputContainer, children: [_jsx("div", { className: classes.iconContainer, children: _jsx(CgLock, { className: classes.icon }, void 0) }, void 0), _jsx("input", { onChange: formik.handleChange, value: formik.values.password, name: "password", type: "password", placeholder: "Password" }, void 0)] }, void 0), formik.touched.password && formik.errors.password && (_jsx("p", { className: classes.errorMessage, children: formik.errors.password }, void 0))] }, void 0), _jsx("button", { className: classes.changeBtn, type: "submit", children: "Change password" }, void 0)] }, void 0));
};
export default ChangePasswordForm;
