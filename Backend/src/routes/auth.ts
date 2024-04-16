import express from "express";
import {
  changePassword,
  deleteAccount,
  login,
  logout,
  register,
} from "../controllers/auth";
import {
  changePasswordValidation,
  loginValidation,
  registerValidation,
} from "../utils/validations";
import checkValidations from "../middlewares/checkValidations";
import checkAuth from "../middlewares/checkAuth";

const router = express.Router();

router.post("/register", registerValidation, checkValidations, register);
router.post("/login", loginValidation, checkValidations, login);
router.patch(
  "/change-password",
  changePasswordValidation,
  checkValidations,
  checkAuth,
  changePassword
);
router.delete("/delete-account", checkAuth, deleteAccount);
// router.post("/logout", logout);

export default router;
