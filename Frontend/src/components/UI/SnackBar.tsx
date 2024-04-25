import { Alert, Snackbar } from "@mui/material";
import { useEffect, useState } from "react";

type SnackBarProps = {
  open: boolean;
  success?: boolean;
  hideDuration: number;
  message?: string;
};

const SnackBar: React.FC<SnackBarProps> = ({
  open,
  hideDuration = 3000,
  message,
  success,
}) => {
  const [autoClose, setAutoClose] = useState<boolean>(false);

  useEffect(() => {
    if (!open) {
      setAutoClose(false);
    }
  }, [open]);

  if (success) {
    return (
      <Snackbar
        open={open && !autoClose}
        autoHideDuration={hideDuration}
        onClose={() => setAutoClose(true)}
      >
        <Alert severity="success" variant="filled" sx={{ width: "100%" }}>
          {message}
        </Alert>
      </Snackbar>
    );
  }

  return (
    <Snackbar
      open={open && !autoClose}
      autoHideDuration={hideDuration}
      onClose={() => setAutoClose(true)}
      message={message}
    />
  );
};

export default SnackBar;
