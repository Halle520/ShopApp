export const ORDER_PRODUCT = 'ORDER_PRODUCT';

export const orderProduct = (cartItems, totalAmount) => {
  return {
    type: ORDER_PRODUCT,
    orderData: {items: cartItems, amount: totalAmount},
  };
};
