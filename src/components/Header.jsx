import React from "react";
import { FaCartPlus, FaHeart } from "react-icons/fa";
import { FaTruckFast } from "react-icons/fa6";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { searchProduct } from "../redux/slices/productSlice";

const Header = ({ insideHome }) => {
  const dispatch = useDispatch()
  const userCart = useSelector(state=>state.cartReducer)
  const userWishlist = useSelector((state) => state.wishlistReducer);

  return (
    <nav className="shadow-lg flex  fixed w-full px-5 py-3 items-center text-slate-800 bg-white">
      <Link className="text-2xl font-bold flex items-center gap-3" to={"/"}>
        <FaTruckFast className="text-5xl " />
        Daily Cart
      </Link>
      <ul className="flex-1 text-right">
        {insideHome && (
          <li className="list-none inline-flex px-5">
            <input
              onChange={e=>dispatch(searchProduct(e.target.value.toLowerCase()))}
              className="w-96 rounded p-2 bg-slate-100 shadow-md"
              type="text"
              placeholder="Search Products Here"
            />
          </li>
        )}
        <Link to={"/wishlist"}>
          <li className=" list-none inline-flex items-center gap-2 px-5">
            <FaHeart className="text-slate-800" />
            Wishlist{" "}
            <span className="text-white bg-teal-950 rounded p-1 text-xs">
              {userWishlist?.length}
            </span>
          </li>
        </Link>

        <Link to={"/cart"}>
          <li className=" list-none inline-flex items-center gap-2 px-5">
            <FaCartPlus className="text-slate-800" />
            Cart{" "}
            <span className="text-white bg-teal-950 rounded p-1 text-xs">
              {userCart?.length}
            </span>
          </li>
        </Link>
      </ul>
    </nav>
  );
};

export default Header;
