import { configureStore } from '@reduxjs/toolkit'
import CartSlice from './slice/CartSlice.jsx'
import OrderSlice from './slice/OrderSlice.jsx'
import WishlistSlice from './slice/WishlistSlice.jsx'

 const  store = configureStore({
  reducer: {
   cart:CartSlice,
   order: OrderSlice,
   wishlist: WishlistSlice,

  },
})

export default store;