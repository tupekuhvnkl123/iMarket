import express from "express";
import {
  changePassword,
  deleteAccount,
  login,
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
  checkAuth, // @ts-expect-error
  changePassword
); // @ts-expect-error
router.delete("/delete-account", checkAuth, deleteAccount);

export default router;
