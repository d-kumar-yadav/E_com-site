
import React from "react"
import { FaCartShopping, FaHeart } from "react-icons/fa6";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";

function Navbar(){
    const cart = useSelector((state) => state.cart);
    const wishlist = useSelector((state) => state.wishlist);
    return (
  <div className="flex items-center justify-evenly mx-auto max-w-6xl h-20">

<NavLink to="/">
<div>

<img src="/logo.png" alt="Logo" height={100} width={100} />

</div>

</NavLink>





<div className="flex space-x-6 ">

<NavLink to="/">
    <div className="text-slate-100 font-bold hover:underline hover:cursor-pointer text-sm ">Home</div>
</NavLink>

<NavLink to="/orders">
    <div className="text-slate-100 font-bold hover:underline hover:cursor-pointer text-sm ">My Orders</div>
</NavLink>

<NavLink to="/wishlist">

<div className="relative text-white font-bold  ">
  <FaHeart className="text-white font-bold text-sm hover:cursor-pointer"  />
  {wishlist.length > 0 &&
    <span className="absolute -top-1 -right-2 bg-green-600 text-xs w-4 h-4 flex justify-center items-center animate-bounce rounded-full text-white">
      {wishlist.length}
    </span>
  }
</div>

</NavLink>

<NavLink to="/cart">

<div className="relative text-white font-bold  ">
  <FaCartShopping className="text-white font-bold text-sm hover:cursor-pointer"  />
  {cart.length > 0 &&
    <span className="absolute -top-1 -right-2 bg-green-600 text-xs w-4 h-4 flex justify-center items-center animate-bounce rounded-full text-white">
      {cart.length}
    </span>
  }
</div>


</NavLink>
 </div>




  </div>


    )
}
export default Navbar;
