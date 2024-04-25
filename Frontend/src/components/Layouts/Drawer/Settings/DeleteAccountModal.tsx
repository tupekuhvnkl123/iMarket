import { Fade, Modal } from "@mui/material";
import classes from "../../../../style/Layouts/Drawer/Settings/DeleteAccountModal.module.scss";
import { UseMutateFunction } from "react-query";
import SnackBar from "../../../UI/SnackBar";

type DeleteAccountModalProps = {
  open: boolean;
  onClose: () => void;
  onDeleteAccount: UseMutateFunction<void, unknown, void, unknown>;
  isError: boolean;
  errorMsg: string;
};

const DeleteAccountModal: React.FC<DeleteAccountModalProps> = ({
  open,
  onClose,
  errorMsg,
  isError,
  onDeleteAccount,
}) => {
  return (
    <>
      <Modal
        open={open}
        onClose={onClose}
        className={classes.modal}
        closeAfterTransition
      >
        <Fade in={open}>
          <div className={classes.content}>
            <p>
              * Warning : Once you delete your account, there is no going back.
              Please be certain.
            </p>
            <div className={classes.buttonsContainer}>
              <button
                className={classes.confirmBtn}
                onClick={() => onDeleteAccount()}
              >
                Confirm
              </button>
              <button className={classes.cancelBtn} onClick={onClose}>
                Cancel
              </button>
            </div>
            <SnackBar open={isError} hideDuration={5000} message={errorMsg} />
          </div>
        </Fade>
      </Modal>
    </>
  );
};

export default DeleteAccountModal;
