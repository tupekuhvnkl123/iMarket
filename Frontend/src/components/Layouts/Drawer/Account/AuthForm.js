import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { MdOutlineAlternateEmail } from "react-icons/md";
import { CgLock } from "react-icons/cg";
import { useFormik } from "formik";
import { authSchema } from "../../../../utils/validations";
import classes from "../../../../style/Layouts/Drawer/Account/AuthForm.module.scss";
import { PuffLoader } from "react-spinners";
const AuthForm = ({ onSubmit, isLogin, errorMsg, isLoading, }) => {
    const formik = useFormik({
        initialValues: {
            email: "",
            password: "",
        },
        validationSchema: authSchema,
        onSubmit: (values) => onSubmit(values, isLogin),
    });
    return (_jsxs("form", { onSubmit: formik.handleSubmit, className: classes.form, children: [_jsxs("div", { className: classes.inputsContainer, children: [_jsxs("div", { className: classes.inputContainer, children: [_jsx("div", { className: classes.iconContainer, children: _jsx(MdOutlineAlternateEmail, { className: classes.icon }, void 0) }, void 0), _jsx("input", { onChange: formik.handleChange, value: formik.values.email, name: "email", type: "email", placeholder: "Email" }, void 0)] }, void 0), formik.touched.email && formik.errors.email && (_jsx("p", { className: classes.errorMessage, children: formik.errors.email }, void 0)), _jsxs("div", { className: classes.inputContainer, children: [_jsx("div", { className: classes.iconContainer, children: _jsx(CgLock, { className: classes.icon }, void 0) }, void 0), _jsx("input", { onChange: formik.handleChange, value: formik.values.password, name: "password", type: "password", placeholder: "Password" }, void 0)] }, void 0), formik.touched.password && formik.errors.password && (_jsx("p", { className: classes.errorMessage, children: formik.errors.password }, void 0))] }, void 0), typeof errorMsg === "string" && (_jsx("p", { className: classes.errorMessage, children: errorMsg }, void 0)), _jsx("button", { className: classes.authButton, type: "submit", children: isLoading ? (_jsx(PuffLoader, { size: 20 }, void 0)) : isLogin ? ("Login") : ("Create Account") }, void 0)] }, void 0));
};
export default AuthForm;
