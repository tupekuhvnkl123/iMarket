import axios from "axios";
import Cookies from "js-cookie";

const { VITE_API_ENDPOINT } = import.meta.env;

export const setAxiosDefaults = () => {
  axios.defaults.baseURL = VITE_API_ENDPOINT;

  const storedUser = Cookies.get("user");
  const token = storedUser && JSON.parse(storedUser).token;

  if (token) {
    axios.defaults.headers.common["authorization"] = token;
  }
};
