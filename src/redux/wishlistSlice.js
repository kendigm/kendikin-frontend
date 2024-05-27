import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  wishlistProducts: [],
};

const wishlistSlice = createSlice({
  name: "wishlist",
  initialState,
  reducers: {
    addToWishlist(state, action) {
      const item = state.wishlistProducts.find(
        (item) => item.id === action.payload.id
      );
      if (!item) {
        state.wishlistProducts.push(action.payload);
      }
    },
    removeWishlist(state, action) {
      state.wishlistProducts = state.wishlistProducts.filter(
        (product) => product.id !== action.payload
      );
    },
    resetWishlist(state) {
      state.wishlistProducts = [];
    },
  },
});

export const { addToWishlist, resetWishlist, removeWishlist } =
  wishlistSlice.actions;
export default wishlistSlice.reducer;
