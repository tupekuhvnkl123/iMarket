import axios, { AxiosError } from "axios";
export const firstLetterCapitalized = (string) => string.charAt(0).toUpperCase() + string.slice(1);
export const sliceStringToArr = (string, sliceIndex) => {
    const splitedString = string.split(" ");
    const firstPart = splitedString.slice(0, sliceIndex).join(" ");
    const secondPart = splitedString.slice(sliceIndex).join(" ");
    return [firstPart, secondPart];
};
export const scrollToTop = (behavior) => {
    window.scrollTo({
        top: 0,
        behavior,
    });
};
export const getAxiosRequest = async (url) => {
    const response = await axios.get(url);
    return response.data;
};
export const getErrorMsg = (error) => {
    if (error instanceof AxiosError && error?.response?.data) {
        return error.response.data.error?.message || error.message;
    }
    return "Internal server error. Please try to refresh.";
};
