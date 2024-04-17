import React from "react";
import { Alert, Snackbar } from "@mui/material";

type SuccessPopoutProps = {
  open: boolean;
  text: string;
};

const SuccessPopout: React.FC<SuccessPopoutProps> = ({ open, text }) => {
  return (
    <Snackbar open={open} autoHideDuration={3000}>
      <Alert severity="success" variant="filled" sx={{ width: "100%" }}>
        {text}
      </Alert>
    </Snackbar>
  );
};

export default SuccessPopout;
