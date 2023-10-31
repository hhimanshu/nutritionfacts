export const getValueRounded = (amount: number) => {
  // https://stackoverflow.com/a/11832950
  return Math.round((amount + Number.EPSILON) * 100) / 100;
};
