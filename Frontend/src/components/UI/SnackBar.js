import { jsx as _jsx } from "react/jsx-runtime";
import { Alert, Snackbar } from "@mui/material";
import { useEffect, useState } from "react";
const SnackBar = ({ open, hideDuration = 3000, message, success, }) => {
    const [autoClose, setAutoClose] = useState(false);
    useEffect(() => {
        if (!open) {
            setAutoClose(false);
        }
    }, [open]);
    if (success) {
        return (_jsx(Snackbar, { open: open && !autoClose, autoHideDuration: hideDuration, onClose: () => setAutoClose(true), children: _jsx(Alert, { severity: "success", variant: "filled", sx: { width: "100%" }, children: message }, void 0) }, void 0));
    }
    return (_jsx(Snackbar, { open: open && !autoClose, autoHideDuration: hideDuration, onClose: () => setAutoClose(true), message: message }, void 0));
};
export default SnackBar;
