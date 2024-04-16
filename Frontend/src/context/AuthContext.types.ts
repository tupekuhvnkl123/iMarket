export type UserContextType = {
  token: string;
  id: string;
  email: string;
  cart: string[];
  favorites: string[];
  orders: string[];
};

export type AuthContextType = {
  isLoggedIn: boolean;
  loggedInSucceed: boolean;
  user: null | UserContextType;
  login: (user: UserContextType) => void;
  logout: () => void;
};
