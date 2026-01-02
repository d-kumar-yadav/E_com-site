import React from "react";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";

const Orders = () => {
  const orders = useSelector((state) => state.order);

  return (
    <div className="max-w-6xl mx-auto p-4 min-h-[80vh]">
      <h1 className="text-3xl font-bold text-slate-700 mb-8 text-center">My Orders</h1>

      {orders.length > 0 ? (
        <div className="flex flex-col gap-6">
          {orders.map((order) => (
            <div key={order.id} className="bg-white border-2 border-slate-200 rounded-lg p-6 shadow-md">
              <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-4 border-b pb-4">
                <div>
                  <p className="text-sm text-slate-500">Order ID: <span className="font-mono text-slate-800">#{order.id}</span></p>
                  <p className="text-sm text-slate-500">Date: <span className="text-slate-800">{order.date}</span></p>
                </div>
                <div className="mt-2 md:mt-0">
                 <p className="text-slate-900"> Trancation ID:{order.Tracation_id}</p>
                  <p className="text-lg font-bold text-green-700">Total: ${order.totalAmount.toFixed(2)}</p>
                </div>
              </div>

              {/* Tracking Bar */}
              <div className="mb-6">
                <p className="font-semibold text-slate-700 mb-2">Order Status: <span className="text-green-600">{order.status}</span></p>
                <div className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
                  <div className="bg-green-600 h-2.5 rounded-full" style={{ width: '45%' }}></div>
                </div>
                <div className="flex justify-between text-xs text-slate-500 mt-1">
                  <span>Placed</span>
                  <span>Processing</span>
                  <span>Shipped</span>
                  <span>Delivered</span>
                </div>
              </div>


              <div className="flex flex-col gap-4">
                {order.items.map((item) => (
                  <div key={item.id} className="flex items-center gap-4 bg-slate-50 p-2 rounded-md">
                    <img src={item.image} alt={item.title} className="w-16 h-16 object-contain mix-blend-multiply" />
                    <div className="flex flex-col gap-2">
                      <p className="text-sm font-semibold text-slate-700 truncate w-48 md:w-auto">{item.title}</p>
                      <p className="text-xs text-slate-500">Qty: {item.quantity} x ${item.price}</p>
                    </div>
                  </div>
                ))}
              </div>
              
            </div>
          ))}
        </div>
      ) : (
        <div className="flex flex-col justify-center items-center h-[50vh] gap-4">
          <p className="text-slate-700 font-semibold text-xl">No orders found!</p>
          <NavLink to="/">
            <button className="bg-green-600 text-white font-semibold py-2 px-6 rounded-lg hover:bg-green-700 transition duration-300">Start Shopping</button>
          </NavLink>
        </div>
      )}
    </div>
  );
};

export default Orders;