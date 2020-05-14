import {PREPARE_LIST} from '../actions/ProductAction';
const productState = {
  availableProduct: [],
  userProduct: [],
};

export default (state = productState, action) => {
  switch (action.type) {
    case PREPARE_LIST:
      const listProduct = action.listProduct;
      listProduct.forEach((element) => {
        state.availableProduct.push(element);
      });

      return {...state};
    default:
      return state;
  }
};
