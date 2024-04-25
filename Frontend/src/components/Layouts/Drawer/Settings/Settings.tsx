import { useContext, useState } from "react";
import { AuthContext } from "../../../../context/AuthContext";
import ChangePasswordForm from "./ChangePasswordForm";
import classes from "../../../../style/Layouts/Drawer/Settings/Settings.module.scss";
import DeleteAccountModal from "./DeleteAccountModal";
import axios from "axios";
import { useMutation } from "react-query";
import SnackBar from "../../../UI/SnackBar";
import { getErrorMsg } from "../../../../utils/functions";

const Settings: React.FC = () => {
  const { user, logout } = useContext(AuthContext);
  const [showDeleteModal, setShowDeleteModal] = useState<boolean>(false);

  const changePassword = async (password: string) => {
    const response = await axios.patch("/auth/change-password", { password });
    return response.data;
  };

  const changePasswordMutation = useMutation({
    mutationFn: (password: string) => changePassword(password),
  });

  const deleteAccount = async () => {
    const response = await axios.delete("/auth/delete-account");
    return response.data;
  };

  const deleteAccountMutation = useMutation({
    mutationFn: () =>
      deleteAccount().then(() => {
        setShowDeleteModal(false);
        logout();
      }),
  });

  return (
    <>
      <div className={classes.container}>
        <div className={classes.infoContainer}>
          <p className={classes.title}>Email :</p>
          <p className={classes.text}>{user?.email}</p>
        </div>
        <ChangePasswordForm onChangePassword={changePasswordMutation.mutate} />
        <div className={classes.infoContainer}>
          <h2 className={classes.title}>Delete account :</h2>
          <p className={classes.text}>
            * warning : Once you delete your account, there is no going back.
            Please be certain.
          </p>
          <button
            className={classes.deleteBtn}
            type="button"
            onClick={() => setShowDeleteModal(true)}
          >
            Delete
          </button>
        </div>
      </div>
      <DeleteAccountModal
        open={showDeleteModal}
        onClose={() => setShowDeleteModal(false)}
        onDeleteAccount={deleteAccountMutation.mutate}
        isError={deleteAccountMutation.isError}
        errorMsg={getErrorMsg(deleteAccountMutation.error)}
      />
      <SnackBar
        open={changePasswordMutation.isError}
        hideDuration={5000}
        message={getErrorMsg(changePasswordMutation.error)}
      />
      <SnackBar
        success
        open={
          changePasswordMutation.isSuccess || deleteAccountMutation.isSuccess
        }
        message={
          changePasswordMutation.isSuccess
            ? "Password changed successfully!"
            : "Account deleted successfully!"
        }
        hideDuration={5000}
      />
    </>
  );
};

export default Settings;
