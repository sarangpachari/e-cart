import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import { FaCartPlus, FaHeart, FaStar } from "react-icons/fa";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addToWishlist } from "../redux/slices/wishlistSlice";
import { addToCart } from "../redux/slices/cartSlice";

const View = () => {
  const userCart = useSelector(state=>state.cartReducer)
  const dispatch = useDispatch();
  const userWishlist = useSelector((state) => state.wishlistReducer);
  const [product, setProduct] = useState({});
  const { id } = useParams();

  useEffect(() => {
    if (sessionStorage.getItem("allProducts")) {
      const allProducts = JSON.parse(sessionStorage.getItem("allProducts"));
      setProduct(allProducts.find((item) => item.id == id));
    }
  }, []);

  const handleWishlist = () => {
    const existingProduct = userWishlist.find((item) => item?.id == id);
    if (existingProduct) {
      alert("Already Added to Wishlist");
    } else {
      alert("Added to Wishlist");
      dispatch(addToWishlist(product));
    }
  };


  const handleCart = ()=>{
    dispatch(addToCart(product))
    const existingProduct = userCart.find(item=>item?.id == id)
    if (existingProduct) {
      alert("Product Quantity Incrementing")
    } else {
      alert("Added to Cart")
    }
  }

  return (
    <>
      <Header />
      <div style={{ paddingTop: "100px" }} className="flex items-center p-5">
        <div className="container flex items-center gap-5">
          {/* LEFT SIDE - PRODUCT IMAGE */}
          <div className="w-1/2 ">
            {/* <h1 className="flex justify-end  text-red-800">
              
            </h1> */}

            <img
              className="w-3/4 hover:scale-105"
              src={product?.thumbnail}
              alt=""
            />
          </div>

          {/* RIGHT SIDE - PRODUCT DATA */}
          <div className="w-1/2">
            <div className=" flex flex-col gap-2">
              <h3 className="text-slate-600">
                PID : <span>{product?.id}</span>
              </h3>
              <h3 className="text-3xl">
                <span>{product?.title}</span>
              </h3>
              <h3 className="text-xl text-red-600">
                Price : $ <span>{product?.price}</span>
              </h3>
              <h3>
                <span className="">Brand : </span>
                {product?.brand}{" "}
              </h3>
              <h3>
                <span className="">Category : </span>
                {product?.category}{" "}
              </h3>
              <h3>
                <span className="">Description : </span>
                <span>{product?.description}</span>
              </h3>
            </div>
            <div className="flex gap-5 items-center py-5">
              {/* WISHLIST BUTTON */}
              <button
                onClick={handleWishlist}
                className="flex items-center gap-3 text-lg text-red-800 hover:text-green-800"
              >
                <FaHeart />
                Add to Wishlist
              </button>

              {/* ADD TO CART BUTTON */}
              <button onClick={handleCart} className="bg-green-200 hover:bg-red-200 px-4 py-2 flex items-center gap-2">
                <FaCartPlus />
                Add to Cart
              </button>
              {/* <button className="bg-green-200 px-4 py-2">Buy Now</button> */}
            </div>
            <div className="">
              <h3 className="font-semibold text-slate-600 mt-10">
                Customer Reviews
              </h3>
              {product?.reviews?.length > 0 ? (
                product?.reviews?.map((item, index) => (
                  <div
                    key={index}
                    className="border shadow p-3 w-full flex flex-col mt-4"
                  >
                    <h3 className=" text-slate-600">
                      <span className="font-semibold">
                        {item?.reviewerName}
                      </span>{" "}
                      : {item?.comment}
                    </h3>

                    <h3 className="flex items-center gap-2 justify-end mt-2">
                      {item?.rating} <FaStar className="text-yellow-400" />
                    </h3>
                  </div>
                ))
              ) : (
                <p>No reviews yet</p>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default View;
