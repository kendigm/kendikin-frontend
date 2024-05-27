import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  products: [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart(state, action) {
      const item = state.products.find((item) => item.id === action.payload.id);
      if (item) {
        item.quantity += action.payload.quantity || 1;
      } else {
        state.products.push({
          ...action.payload,
          quantity: action.payload.quantity || 1,
        });
      }
    },
    removeItem(state, action) {
      state.products = state.products.filter(
        (product) => product.id !== action.payload
      );
    },
    resetCart(state) {
      state.products = [];
    },
  },
});

export const { addToCart, resetCart, removeItem } = cartSlice.actions;
export default cartSlice.reducer;
