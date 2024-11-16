import React from "react";
import Header from "../components/Header";
import { FaTrash } from "react-icons/fa";
import { Link } from "react-router-dom";

const Cart = () => {
  return (
    <>
      <Header />
      <div style={{ paddingTop: "100px" }} className="p-5">
        <>
          <h1 className="text-3xl font-semibold text-slate-800 py-5">
            My Cart
          </h1>

          

          <div className="grid grid-cols-3 gap-4 mt-5">
            {/* CART LEFT SIDE */}
            <div className="col-span-2 border rounded p-5 shadow">
              <table className="table-auto w-full">
                <thead>
                  <tr>
                    <td className="font-semibold">No</td>
                    <td className="font-semibold">Name</td>
                    <td className="font-semibold">Image</td>
                    <td className="font-semibold">Quantity</td>
                    <td className="font-semibold">Price</td>
                    <td className="font-semibold">...</td>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>1</td>
                    <td>Product Name</td>
                    <td><img className="w-[70px] h-[70px]" src="https://png.pngtree.com/png-clipart/20221013/ourmid/pngtree-simulation-cosmetics-product-sample-skin-care-essential-oil-png-image_6158599.png" alt="" /></td>
                    <td>
                      <div className="flex">
                        <button className="bg-red-800 text-white rounded-s-full p-2 font-black">-</button>
                        <input type="text" className="rounded p-1 mx-2 w-[30px] text-center" readOnly value={0} />
                        <button className="bg-red-800 text-white rounded-e-full p-2 font-black">+</button>
                      </div>
                    </td>
                    <td>$ 250</td>
                    <td> <FaTrash className="text-red-500"/> </td>
                  </tr>
                </tbody>
              </table>
              <div className="float-right mt-5">
                <button className="bg-red-600 text-white rounded px-3 py-2 hover:bg-red-800 text-sm">Empty Cart</button>
                <Link to={'/'} className="bg-green-300 text-slate-900 ms-3 rounded px-3 py-2 hover:bg-red-300 text-sm">Shop More</Link>
              </div>
            </div>
            {/* CART RIGHT SIDE */}
            <div className="col-span-1">
              <div className="border rounded shadow p-5">
                <h3 className="text-xl text-slate-800">Total Amount : <span className="text-red-500">$ 250</span> </h3>
                <hr className="mt-5" />
                <button className="rounded px-3 py-2 mt-4 bg-green-800 text-white text-sm hover:bg-red-800">Proceed to Checkout</button>
              </div>
            </div>
          </div>
          
        </>
      </div>
    </>
  );
};

export default Cart;
