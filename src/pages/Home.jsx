import { useState, useEffect } from "react";
import Spinner from "../component/Spinner.jsx";
import Card from "../component/Card.jsx";
import React from "react";

const Home = () => {
const[loading,setloading]=useState(true)
const[products,setproducts ]=useState([])
 

const API_URL = "https://fakestoreapi.com/products";
  

async function fetchproduct(){
  setloading(true);
 try{
    const response=await fetch(API_URL);
  const data= await response.json();
   setproducts(data);
   setloading(false);

 }
catch (error) {
  console.log(error);
  setloading(false);
  setproducts([]);
}

}
 useEffect (() => {
  fetchproduct();
 }, []);

 

  return (
    <div>
      {loading ? (
        <div className="flex justify-center items-center min-h-screen"><Spinner /></div>
      ) : products.length > 0 ? (
        <div className="grid xs:grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 max-w-6xl p-2 mx-auto space-y-10 space-x-5 min-h-[80vh]">
          {products.map((product) => (
            <Card key={product.id} product={product} />
          ))}
        </div>
      ) : (
        <div className="flex justify-center items-center h-screen">No post avilable</div>
      )}


    </div>
  );
};

export default Home;
