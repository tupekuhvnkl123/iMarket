import React, { useContext } from "react";
import { Alert, Snackbar } from "@mui/material";
import { AuthContext } from "../../context/AuthContext";

const LoggedInPopout: React.FC = () => {
  const { loggedInSucceed } = useContext(AuthContext);

  return (
    <Snackbar open={loggedInSucceed} autoHideDuration={3000}>
      <Alert severity="success" variant="filled" sx={{ width: "100%" }}>
        Logged in successfully!
      </Alert>
    </Snackbar>
  );
};

export default LoggedInPopout;
