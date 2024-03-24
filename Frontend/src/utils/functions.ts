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
