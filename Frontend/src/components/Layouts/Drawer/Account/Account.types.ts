type AuthMethods = "login" | "register";

export type AuthFormValues = {
  email: string;
  password: string;
};

export type AuthMutationParam = { method: AuthMethods; body: AuthFormValues };
