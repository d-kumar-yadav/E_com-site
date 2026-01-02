import { createSlice } from "@reduxjs/toolkit";

export const WishlistSlice = createSlice({
  name: "wishlist",
  initialState: localStorage.getItem("wishlist") ? JSON.parse(localStorage.getItem("wishlist")) : [],
  reducers: {
    addToWishlist: (state, action) => {
      // Check if item already exists to avoid duplicates
      if (!state.some((item) => item.id === action.payload.id)) {
        state.push(action.payload);
        localStorage.setItem("wishlist", JSON.stringify(state));
      }
    },
    removeFromWishlist: (state, action) => {
      const newState = state.filter((item) => item.id !== action.payload);
      localStorage.setItem("wishlist", JSON.stringify(newState));
      return newState;
    },
  },
});

export const { addToWishlist, removeFromWishlist } = WishlistSlice.actions;
export default WishlistSlice.reducer;