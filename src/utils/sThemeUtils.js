export const getSize =
  (sizeKey) =>
  ({ theme }) =>
    theme.size[sizeKey];

export const getVwSize =
  (sizeKey) =>
  ({ theme }) =>
    theme.vwSize[sizeKey];
