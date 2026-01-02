import React from "react";
import { useSelector } from "react-redux";
import Card from "../component/Card";
import { NavLink } from "react-router-dom";

const Wishlist = () => {
  const wishlist = useSelector((state) => state.wishlist);

  return (
    <div className="max-w-6xl mx-auto p-4 min-h-[80vh]">
      <h1 className="text-3xl font-bold text-slate-700 mb-8 text-center">My Wishlist</h1>

      {wishlist.length > 0 ? (
        <div className="grid xs:grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 max-w-6xl p-2 mx-auto space-y-10 space-x-5 min-h-[80vh]">
          {wishlist.map((product) => (
            <Card key={product.id} product={product} />
          ))}
        </div>
      ) : (
        <div className="flex flex-col justify-center items-center h-[50vh] gap-4">
          <p className="text-slate-700 font-semibold text-xl">Your wishlist is empty!</p>
          <NavLink to="/">
            <button className="bg-green-600 text-white font-semibold py-2 px-6 rounded-lg hover:bg-green-700 transition duration-300">
              Start Shopping
            </button>
          </NavLink>
        </div>
      )}
    </div>
  );
};

export default Wishlist;