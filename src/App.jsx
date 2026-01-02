import { Routes, Route } from "react-router-dom";
import Navbar from "./component/Navbar";
import Home from "./pages/Home";
import Cart from "./component/Cart";
import Payment from "./pages/Payment"; // 1. Import the Payment component
import Orders from "./pages/Orders";
import React from "react";
import { Toaster } from "react-hot-toast";
import Wishlist from "./pages/Wishlist";




const App = () => {
  return (
    <div>
      <div className="bg-slate-900">
        <Navbar />
      </div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cart" element={<Cart />} />
        {/* 2. Add the route for /payment */}
        <Route path="/wishlist" element={<Wishlist />} />
        <Route path="/payment" element={<Payment />} />
        <Route path="/orders" element={<Orders />} />
      </Routes>
      <Toaster />
    </div>
  );
};

export default App;
