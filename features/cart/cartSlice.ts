import {createSlice} from '@reduxjs/toolkit';
import {CartItem} from '../../types';
import {RootState} from '../../store/store';

export interface RootCardState {
  items: CartItem[];
  totalQuantity: number;
}

const initialState: RootCardState = {
  items: [],
  totalQuantity: 0,
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addItemToCart(state, action) {
      const newItem = action.payload;
      const existingItem = state.items.find((item) => item.id === newItem.id);
      state.totalQuantity++;

      if (!existingItem) {
        state.items.push({
          id: newItem.id,
          price: newItem.price,
          quantity: 1,
          totalPrice: newItem.price,
          name: newItem.title,
        });
      } else {
        existingItem.quantity++;
        existingItem.totalPrice = existingItem.totalPrice + newItem.price;
      }
    },
    removeItemFromCart(state, action) {
      const id = action.payload;
      const existingItem = state.items.find((item) => item.id === id);
      state.totalQuantity--;
      if (existingItem) {
        existingItem.totalPrice -= existingItem.price;

        if (existingItem.quantity === 1) {
          state.items = state.items.filter((item) => item.id !== id);
        } else {
          existingItem.quantity--;
        }
      }
    },
    clearCart(state) {
      (state.items = []), (state.totalQuantity = 0);
    },
  },
});

export const {addItemToCart, removeItemFromCart, clearCart} = cartSlice.actions;

export default cartSlice.reducer;

export const selectCart = (state: RootState) => state.cart;
export const selectCartTotalQuantity = (state: RootState) =>
  state.cart.cart.totalQuantity;
export const selectCartItems = (state: RootState) => state.cart.cart.items;
