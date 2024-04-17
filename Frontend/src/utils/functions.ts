import axios, { AxiosError } from "axios";

export const firstLetterCapitalized = (string: string): string =>
  string.charAt(0).toUpperCase() + string.slice(1);

export const sliceStringToArr = (string: string, sliceIndex: number) => {
  const splitedString = string.split(" ");
  const firstPart = splitedString.slice(0, sliceIndex).join(" ");
  const secondPart = splitedString.slice(sliceIndex).join(" ");

  return [firstPart, secondPart];
};

export const scrollToTop = (behavior: "auto" | "smooth") => {
  window.scrollTo({
    top: 0,
    behavior,
  });
};

export const getAxiosRequest = async <T>(url: string): Promise<T> => {
  const response = await axios.get(url);
  return response.data;
};

export const getErrorMsg = (error: unknown): string => {
  if (error instanceof AxiosError && error?.response?.data) {
    return error.response.data.error.message;
  }
  return "Internal server error. Please try to refresh.";
};
