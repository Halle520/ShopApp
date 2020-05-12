export const PREPARE_LIST = 'PREPARE_LIST';

export const prepareListProduct = (list) => {
  return {type: PREPARE_LIST, listProduct: list};
};
