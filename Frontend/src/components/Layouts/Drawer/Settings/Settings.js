import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { useContext, useState } from "react";
import { AuthContext } from "../../../../context/AuthContext";
import ChangePasswordForm from "./ChangePasswordForm";
import classes from "../../../../style/Layouts/Drawer/Settings/Settings.module.scss";
import DeleteAccountModal from "./DeleteAccountModal";
import axios from "axios";
import { useMutation } from "react-query";
import SnackBar from "../../../UI/SnackBar";
import { getErrorMsg } from "../../../../utils/functions";
const Settings = () => {
    const { user, logout } = useContext(AuthContext);
    const [showDeleteModal, setShowDeleteModal] = useState(false);
    const changePassword = async (password) => {
        const response = await axios.patch("/auth/change-password", { password });
        return response.data;
    };
    const changePasswordMutation = useMutation({
        mutationFn: (password) => changePassword(password),
    });
    const deleteAccount = async () => {
        const response = await axios.delete("/auth/delete-account");
        return response.data;
    };
    const deleteAccountMutation = useMutation({
        mutationFn: () => deleteAccount().then(() => {
            setShowDeleteModal(false);
            logout();
        }),
    });
    return (_jsxs(_Fragment, { children: [_jsxs("div", { className: classes.container, children: [_jsxs("div", { className: classes.infoContainer, children: [_jsx("p", { className: classes.title, children: "Email :" }, void 0), _jsx("p", { className: classes.text, children: user?.email }, void 0)] }, void 0), _jsx(ChangePasswordForm, { onChangePassword: changePasswordMutation.mutate }, void 0), _jsxs("div", { className: classes.infoContainer, children: [_jsx("h2", { className: classes.title, children: "Delete account :" }, void 0), _jsx("p", { className: classes.text, children: "* warning : Once you delete your account, there is no going back. Please be certain." }, void 0), _jsx("button", { className: classes.deleteBtn, type: "button", onClick: () => setShowDeleteModal(true), children: "Delete" }, void 0)] }, void 0)] }, void 0), _jsx(DeleteAccountModal, { open: showDeleteModal, onClose: () => setShowDeleteModal(false), onDeleteAccount: deleteAccountMutation.mutate, isError: deleteAccountMutation.isError, errorMsg: getErrorMsg(deleteAccountMutation.error) }, void 0), _jsx(SnackBar, { open: changePasswordMutation.isError, hideDuration: 5000, message: getErrorMsg(changePasswordMutation.error) }, void 0), _jsx(SnackBar, { success: true, open: changePasswordMutation.isSuccess || deleteAccountMutation.isSuccess, message: changePasswordMutation.isSuccess
                    ? "Password changed successfully!"
                    : "Account deleted successfully!", hideDuration: 5000 }, void 0)] }, void 0));
};
export default Settings;
