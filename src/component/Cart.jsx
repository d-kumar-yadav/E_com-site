import { useState, useEffect } from "react";
import {useSelector, useDispatch} from "react-redux"
import React from "react"
import { NavLink, useNavigate } from "react-router-dom";
import CartItem from "./CartItem";


function Cart(){
 // Because the state is the array, you access it directly as state.cart. You do not need .value or .items because the array isn't wrapped inside another object.

  const cart = useSelector((state) => state.cart); // Returns an Array [] because initialState in CartSlice is []
  const navigate = useNavigate();
  const dispatch=useDispatch()
   const[totalamount,settotalamount]=useState(0);

useEffect(() => {
  settotalamount(cart.reduce((acc, curr) => acc + curr.price * curr.quantity, 0));
}, [cart]);


  const checkoutHandler = () => {
    navigate("/payment");
  }


    return (

      <div className="max-w-6xl mx-auto p-4">
  
 
{

cart.length > 0 ? (
 <div className="flex flex-col md:flex-row gap-10" >

 <div className="flex-1 flex flex-col gap-6">
    {cart.map((item) => <CartItem key={item.id} item={item} />)}
  </div>

<div className="w-full md:w-[40%] flex flex-col justify-between h-[80vh] p-5 mt-5 sticky top-20">

<div>
  <p className="text-green-700 font-semibold text-xl uppercase">Your Cart</p>
<p className="text-green-700 font-bold text-4xl uppercase mt-2"> Summary</p>
<p className="font-semibold text-slate-700 text-xl mt-4"> Total Items: <span className="font-bold">{cart.length}</span></p>

</div>

<div className="flex flex-col gap-4">
{/* $ for dollar not syntax */}
<p className="text-slate-700 font-bold text-xl">Total Amount: <span className="font-bold text-black">${totalamount.toFixed(2)}</span></p>
<button onClick={checkoutHandler} className="bg-green-700 text-white font-bold py-3 px-10 rounded-lg w-full hover:bg-green-800 transition duration-300 border-2 border-green-700 hover:text-green-700 hover:bg-white">Checkout Now</button>


</div>

</div>

 </div>




) :
( 
  <div className="flex flex-col justify-center items-center h-[80vh] gap-4">

<p className="text-slate-700 font-semibold text-xl">Your cart is empty!</p>
<NavLink to="/">
  <button className="bg-green-600 text-white font-semibold py-3 px-10 rounded-lg hover:bg-green-700 transition duration-300 border-2 border-green-600 hover:text-green-600 hover:bg-white">Shop Now</button>
</NavLink>

</div>)

}

  </div>





     




    );
};
export default Cart;