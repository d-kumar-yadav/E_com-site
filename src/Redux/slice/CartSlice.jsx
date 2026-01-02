import { createSlice } from "@reduxjs/toolkit";

// CounterSlice generate  two thing one is action creater ansd other is reducer function
  export const CartSlice= createSlice({
 name:"cart",
 initialState: localStorage.getItem("cart") ? JSON.parse(localStorage.getItem("cart")) : [],
   reducers:{
    add:(state,action) =>{
      
      
        state.push({ ...action.payload, quantity: 1 });
        localStorage.setItem("cart", JSON.stringify(state));
      //This converts a JavaScript object or array into a single string of text
    },
    remove:(state,action) =>{
      const newState = state.filter((a) => a.id !== action.payload);
      //The .filter() function does not change the original array. Instead, it creates a brand new copy of the array with the item removed.
      localStorage.setItem("cart", JSON.stringify(newState));
      return newState;  //By writing return newState, you are telling Redux: "Replace the old state completely with this new list."
    },
    increaseQuantity: (state, action) => {
      const item = state.find((item) => item.id === action.payload);
      if (item) {
        item.quantity++;
        localStorage.setItem("cart", JSON.stringify(state));
      }
    },
    decreaseQuantity: (state, action) => {
      const index = state.findIndex((item) => item.id === action.payload);
      if (state[index].quantity > 1) {
        state[index].quantity--;
      } else {
        state.splice(index, 1);
        //In your code, state.splice(index, 1); specifically means: "Go to this position (index) in the list, and remove 1 item.
      }
      localStorage.setItem("cart", JSON.stringify(state));
    },
    clearCart: (state) => {
      localStorage.removeItem("cart");
      return [];
    },

   }

})


export const { add, remove, increaseQuantity, decreaseQuantity, clearCart } = CartSlice.actions;

export default CartSlice.reducer; 