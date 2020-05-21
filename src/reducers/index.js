import {combineReducers} from 'redux';
import ProductReducer from './ProductReducer';
import CartReducer from './CartReducer';
import OrderReducer from './OrderReducer';

const rootReducer = combineReducers({
  products: ProductReducer,
  cart: CartReducer,
  order: OrderReducer,
});

export default rootReducer;
