import * as Yup from "yup";

export const authSchema = Yup.object({
  email: Yup.string()
    .required("Email required")
    .email("Invalid email address."),
  password: Yup.string()
    .required("Password is required")
    .min(6, "Password must be at least 6 characters long.")
    .max(64, "Password must be no longer than 64 characters."),
});
export const changePasswordSchema = Yup.object({
  password: Yup.string()
    .required("Password is required")
    .min(6, "Password must be at least 6 characters long.")
    .max(64, "Password must be no longer than 64 characters."),
});
