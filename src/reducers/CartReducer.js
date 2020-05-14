import {ADD_TO_CART} from '../actions/CartAction';
import CartItem from '../model/CartItem';
const cartState = {
  itemInCart: {},
  totalAmount: 0,
};

export default (state = cartState, action) => {
  switch (action.type) {
    case ADD_TO_CART:
      const addedProduct = action.product;
      const productPrice = addedProduct.price;
      const productTitle = addedProduct.title;
      let itemChangeInCart;
      if (state.itemInCart[addedProduct.id]) {
        itemChangeInCart = new CartItem(
          state.itemInCart[addedProduct.id].quantity + 1,
          productPrice,
          productTitle,
          state.itemInCart[addedProduct.id].sum + productPrice,
        );
      } else {
        itemChangeInCart = new CartItem(
          1,
          productPrice,
          productTitle,
          productPrice,
        );
      }
      return {
        ...state,
        itemInCart: {...state.itemInCart, [addedProduct.id]: itemChangeInCart},
        totalAmount: state.totalAmount + productPrice,
      };
    default:
      return state;
  }
};
