import rootReducer from './reducers';
import {createStore, applyMiddleware} from 'redux';

let store;
if (__DEV__) {
  const createDebugger = require('redux-flipper').default;
  let reduxDebugger = createDebugger();
  store = createStore(rootReducer, {}, applyMiddleware(reduxDebugger));
} else {
  store = createStore(rootReducer, {});
}
export default store;
