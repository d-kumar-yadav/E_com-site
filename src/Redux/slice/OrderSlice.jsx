import { createSlice } from "@reduxjs/toolkit";

export const OrderSlice = createSlice({
  name: "order",
  initialState: localStorage.getItem("orders") ? JSON.parse(localStorage.getItem("orders")) : [],
  reducers: {
    addOrder: (state, action) => {
      state.unshift(action.payload); // Add new order to the beginning of the list
      localStorage.setItem("orders", JSON.stringify(state));
    },
  },
});

export const { addOrder } = OrderSlice.actions;
export default OrderSlice.reducer;