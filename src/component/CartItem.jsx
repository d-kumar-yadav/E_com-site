import React from "react";
import { useDispatch } from "react-redux";
import { toast } from "react-hot-toast";
import { remove, increaseQuantity, decreaseQuantity } from "../Redux/slice/CartSlice";
import { RiDeleteBin6Line } from "react-icons/ri";

const CartItem = ({ item }) => {
  const dispatch = useDispatch();

  const handleRemove = () => {
    dispatch(remove(item.id));
    toast.error("Item removed from cart");
  };

  const handleIncrease = () => {
    dispatch(increaseQuantity(item.id));
  };

  const handleDecrease = () => {
    dispatch(decreaseQuantity(item.id));
  };

  return (
    <div className="flex items-center p-2 md:p-5 justify-between border-b-2 border-slate-200 mt-2 mb-2 md:mx-5">
      <div className="flex flex-col md:flex-row p-0 md:p-3 gap-5 items-center w-full">
        <div className="w-1/4">
          <img src={item.image} className="object-cover" alt={item.title} />
        </div>
        <div className="md:ml-10 self-start space-y-5 w-3/4">
          <h1 className="text-xl text-slate-700 font-semibold">{item.title}</h1>
          <p className="text-base text-slate-700 font-medium">${item.price}</p>
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <button onClick={handleDecrease} className="border-2 rounded-md px-3 text-lg font-bold hover:bg-slate-200 transition-colors">-</button>
              <span className="font-semibold">{item.quantity}</span>
              <button onClick={handleIncrease} className="border-2 rounded-md px-3 text-lg font-bold hover:bg-slate-200 transition-colors">+</button>
            </div>
            <button onClick={handleRemove} className="text-red-500 hover:text-red-700 transition-colors">
              <RiDeleteBin6Line size={28} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartItem;