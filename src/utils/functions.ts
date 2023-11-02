
export const getValueRounded = (amount: number) => {
  // https://stackoverflow.com/a/11832950
  return Math.round((amount + Number.EPSILON) * 100) / 100;
};

export const spaceToDashes = (name: string) => {
  const pathname = name
    .toLowerCase()
    .trim()
    .replace(/[^\w]+/g, "-");
  return pathname.endsWith("-") ? pathname.substr(0, pathname.length - 1) : pathname;
};
