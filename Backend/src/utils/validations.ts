import { check } from "express-validator";

export const registerValidation = [
  check("email")
    .trim()
    .not()
    .isEmpty()
    .isEmail()
    .withMessage("Please enter your email."),
  check("password")
    .trim()
    .not()
    .isEmpty()
    .isString()
    .isLength({ min: 6, max: 64 })
    .withMessage("Password must be between 6-64 characters."),
];
export const loginValidation = [
  check("email").trim().not().isEmpty().withMessage("Please enter your email."),
  check("password")
    .trim()
    .not()
    .isEmpty()
    .withMessage("Please enter your password."),
];

export const changePasswordValidation = [
  check("password")
    .trim()
    .not()
    .isEmpty()
    .isString()
    .isLength({ min: 6, max: 64 })
    .withMessage("Password must be between 6-64 characters."),
];
