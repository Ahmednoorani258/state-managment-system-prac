"use client";

import React, { useState } from "react";
import { useAppSelector, useAppDispatch } from "@/app/store/hooks";
import { addProduct, deleteProduct } from "@/app/store/slices/product";
import { addCart, deleteCart, lessqty } from "@/app/store/slices/Cart";
export const ProductsList = () => {
  const products = useAppSelector((state) => state.productArray);
  const dispatch = useAppDispatch();
  const [name, setName] = useState("");
  const [category, setCategory] = useState("");
  const [qty, setQty] = useState(0);
  const cart = useAppSelector((state) => state.cartArray);

  return (
    <div className="flex flex-col px-44">
      <div className=" text-black gap-4 bg-green-100">
        <div className="grid grid-cols-4 w-[85%] rounded-md text-black gap-4 bg-green-100 p-5">
          <input
            type="text"
            placeholder="Item Name"
            onChange={(e) => setName(e.target.value)}
            className="p-5 bg-green-300 text-lg rounded-lg "
          />
          <input
            type="text"
            placeholder="Category"
            onChange={(e) => setCategory(e.target.value)}
            className="p-5 bg-green-300 text-lg rounded-lg "
          />
          <input
            type="text"
            placeholder="Qty"
            onChange={(e: any) => setQty(e.target.value)}
            className="p-5 bg-green-300 text-lg rounded-lg "
          />
        </div>
        <div className=" flex mt-12 gap-4 w-full p-5">
          <button
            onClick={(e) => dispatch(addProduct({ name, category, qty }))}
            className="bg-green-500 text-xl p-8"
          >
            Add Item
          </button>
          <button
            onClick={(e) => dispatch(deleteProduct({ name, category, qty }))}
            className="bg-green-500 text-xl p-8"
          >
            Delete Item
          </button>
        </div>
      </div>
      <div className="flex gap-5 my-5">
        {products.map((item, i) => {
          return (
            <div key={i}>
              <h1>{item.name}</h1>
              <h1>{item.category}</h1>
              <h1>{item.qty}</h1>
              <button
                onClick={(e) => dispatch(addCart(item))}
                className="p-4 border-2 border-black bg-purple-300"
              >
                Add Cart
              </button>
            </div>
          );
        })}
      </div>
      <div>
        <h2>Cart List</h2>
        <div className="flex justify-center items-center flex-wrap p-5 bg-cyan-400 text-black my-5 gap-6">
        {
          cart.map((item, i) => {
            return (
              <div key={i} className="bg-cyan-900 text-zinc-950 font-bold space-y-4 p-5 border-2 border-white">
                 <h1>{item.name}</h1> 
                 <h1>{item.category}</h1> 
                 <h1>{item.qty}</h1> 
                  <div className="flex flex-col space-y-3">
                  <button onClick={(e) => dispatch(deleteCart(item))} className="p-4 border-2 border-black bg-purple-300">Remove from Cart</button>
                 <button onClick={(e) => dispatch(lessqty(item))} className="p-4 border-2 border-black bg-purple-300">less qty Cart</button>
              
                  </div>
                </div>
            )
          })
        }
        </div>
      </div>
    </div>
  );
};
