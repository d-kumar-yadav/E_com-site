import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { clearCart } from "../Redux/slice/CartSlice";
import { addOrder } from "../Redux/slice/OrderSlice";
import { toast } from "react-hot-toast";

const Payment = () => {
  const cart = useSelector((state) => state.cart);
  const [totalAmount, setTotalAmount] = useState(0);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    setTotalAmount(cart.reduce((acc, curr) => acc + curr.price * curr.quantity, 0));
  }, [cart]);

  const handlePayment = (e) => {
    e.preventDefault();
    // Simulate payment processing 
    const order = {
      id: crypto.randomUUID(),       // Generates a string like "36b8f84d-df4e-4d49..."
    Tracation_id: Date.now().toString() ,
      items: cart,
      totalAmount: totalAmount,
      date: new Date().toLocaleDateString(),
      status: "Processing" // Default status for tracking
    };
    dispatch(addOrder(order));
    dispatch(clearCart());
    toast.success("Payment Successful! Order Placed.");
    navigate("/orders");
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-[80vh] p-4">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md border-2 border-slate-200">
        <h2 className="text-2xl font-bold text-slate-700 mb-6 text-center">Payment Details</h2>
        
        <div className="mb-6">
          <p className="text-lg font-semibold text-slate-600">Total Amount to Pay:</p>
          <p className="text-3xl font-bold text-green-700">${totalAmount.toFixed(2)}</p>
        </div>

        <form onSubmit={handlePayment} className="flex flex-col gap-4">
          <div>
            <label className="block text-slate-700 font-medium mb-1">Card Number</label>
            <input type="text" placeholder="1234 5678 1234 5678" className="w-full border-2 border-slate-300 rounded-md p-2 outline-none focus:border-green-600" required />
          </div>
          
          <div className="flex gap-4">
            <div className="w-1/2">
              <label className="block text-slate-700 font-medium mb-1">Expiry</label>
              <input type="text" placeholder="MM/YY" className="w-full border-2 border-slate-300 rounded-md p-2 outline-none focus:border-green-600" required />
            </div>
            <div className="w-1/2">
              <label className="block text-slate-700 font-medium mb-1">CVV</label>
              <input type="text" placeholder="123" className="w-full border-2 border-slate-300 rounded-md p-2 outline-none focus:border-green-600" required />
            </div>
          </div>

          <div>
             <label className="block text-slate-700 font-medium mb-1">Card Holder Name</label>
             <input type="text" placeholder="John Doe" className="w-full border-2 border-slate-300 rounded-md p-2 outline-none focus:border-green-600" required />
          </div>

          <button type="submit" className="bg-green-700 text-white font-bold py-3 rounded-lg mt-4 hover:bg-green-800 transition duration-300">
            Pay Now
          </button>
        </form>
      </div>
    </div>
  );
};

export default Payment;