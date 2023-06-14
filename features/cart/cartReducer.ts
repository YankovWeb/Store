import {combineReducers} from '@reduxjs/toolkit';
import cartReducer from './cartSlice';

const cartReducers = combineReducers({
  cart: cartReducer,
});

export default cartReducers;
