import React, { use } from "react"
import { useSelector, useDispatch} from "react-redux";
import { toast } from 'react-hot-toast';

import { add, remove } from "../Redux/slice/CartSlice";
import { addToWishlist, removeFromWishlist } from "../Redux/slice/WishlistSlice";

function Card({product}){
  const cart = useSelector((state) => state.cart);
  const wishlist = useSelector((state) => state.wishlist);
  const dispatch=useDispatch();
  const decp=product.description.slice(0,100) + " " + ". . . " 
  const addhandler = () => {
    dispatch(add(product));
    toast.success('Product added to cart');            

  };
  const removehandler = () => {
    dispatch(remove(product.id));
    toast.error('Product removed from cart');
  };
  
  const isInWishlist = wishlist.some((p) => p.id === product.id);
  
  const wishlistHandler = () => {
    if (isInWishlist) {
      dispatch(removeFromWishlist(product.id));
      toast.error('Removed from wishlist');
    } else {
      dispatch(addToWishlist(product));
      toast.success('Added to wishlist');
    }
  };


    return (
  <div className="flex flex-col space-y-4 items-center hover:scale-90 transition duration-300 ease-out hover:shadow-2xl hover:shadow-slate-900 mt-10 ml-5 rounded-xl p-1 relative group bg-white" >
    
    {/* Wishlist Heart Icon */}
    <button 
      onClick={wishlistHandler}
      className="absolute top-2 right-2 p-1 rounded-full bg-white/80 hover:bg-white shadow-sm z-10 transition-colors duration-200"
    >
      {isInWishlist ? (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 text-red-500">
          <path d="m11.645 20.91-.007-.003-.022-.012a15.247 15.247 0 0 1-.383-.218 25.18 25.18 0 0 1-4.244-3.17C4.688 15.36 2.25 12.174 2.25 8.25 2.25 5.322 4.714 3 7.688 3A5.5 5.5 0 0 1 12 5.052 5.5 5.5 0 0 1 16.313 3c2.973 0 5.437 2.322 5.437 5.25 0 3.925-2.438 7.111-4.739 9.256a25.175 25.175 0 0 1-4.244 3.17 15.247 15.247 0 0 1-.383.219l-.022.012-.007.004-.003.001a.752.752 0 0 1-.704 0l-.003-.001Z" />
        </svg>
      ) : (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-gray-400 hover:text-red-500">
          <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z" />
        </svg>
      )}
    </button>

<div>
  <p className="text-slate-700 font-semibold text-lg text-left truncate w-40 mt-1">{product.title}</p>
</div>

<div>
  <p className="w-40 text-gray-400 font-normal text-[12px] text-left">{decp}</p>
</div>

<div className="h-[180px]">
  <img src={product.image} alt="post" className="w-full h-full object-fit"  />
</div>

<div className="flex  justify-between items-center w-full gap-12 mt-5 pr-2 pb-3 ">
  <p className="text-green-600 font-semibold pl-2">${product.price}</p>
  {
    cart.some((p) => p.id === product.id) ? (<button className="border-2 border-b-gray-700  rounded-full bg-white p-1 px-3 hover:bg-gray-700 hover:text-white font-semibold text-[12px] hover:border-0 uppercase transition duration-300 ease-out " onClick={removehandler} >Remove from cart</button>) : 
    (<button className="border-2 border-b-gray-700  rounded-full bg-white p-1 px-3 hover:bg-gray-700 hover:text-white font-semibold text-[12px] hover:border-0 uppercase transition duration-300 ease-out " onClick={addhandler}>Add to cart</button>)  
  }

</div>

  </div>


    );
};
export default Card;