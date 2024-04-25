import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { Fade, Modal } from "@mui/material";
import classes from "../../../../style/Layouts/Drawer/Settings/DeleteAccountModal.module.scss";
import SnackBar from "../../../UI/SnackBar";
const DeleteAccountModal = ({ open, onClose, errorMsg, isError, onDeleteAccount, }) => {
    return (_jsx(_Fragment, { children: _jsx(Modal, { open: open, onClose: onClose, className: classes.modal, closeAfterTransition: true, children: _jsx(Fade, { in: open, children: _jsxs("div", { className: classes.content, children: [_jsx("p", { children: "* Warning : Once you delete your account, there is no going back. Please be certain." }, void 0), _jsxs("div", { className: classes.buttonsContainer, children: [_jsx("button", { className: classes.confirmBtn, onClick: () => onDeleteAccount(), children: "Confirm" }, void 0), _jsx("button", { className: classes.cancelBtn, onClick: onClose, children: "Cancel" }, void 0)] }, void 0), _jsx(SnackBar, { open: isError, hideDuration: 5000, message: errorMsg }, void 0)] }, void 0) }, void 0) }, void 0) }, void 0));
};
export default DeleteAccountModal;
