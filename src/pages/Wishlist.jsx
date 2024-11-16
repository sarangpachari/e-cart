import React from "react";
import Header from "../components/Header";
import { IoHeartDislikeOutline } from "react-icons/io5";
import { FaCartPlus } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { removeItem } from "../redux/slices/wishlistSlice";

const Wishlist = () => {
  const dispatch = useDispatch()
  const userWishlist = useSelector((state) => state.wishlistReducer);

  return (
    <>
      <Header />
      <div style={{ paddingTop: "100px" }} className="px-12 py-10">
        <>
          <h1 className="text-3xl font-semibold text-slate-800 py-5">
            My Wishlist
          </h1>
          <div className="grid grid-cols-6 gap-4">
            {userWishlist?.length > 0 ? (
              userWishlist.map((item, index) => (
                <div key={index} className="rounded border shadow pb-5">
                  <img
                    className="w-full h-[250px]"
                    src={item?.thumbnail}
                    alt="image"
                  />
                  <div className="text-left px-5">
                    <h2 className="text-lg font-medium">{item?.title}</h2>
                    <div className="flex justify-start gap-8 mt-3">
                      <button onClick={()=>dispatch(removeItem(item?.id))}>
                        <IoHeartDislikeOutline className="text-2xl" />
                      </button>
                      <button>
                        <FaCartPlus className="text-2xl text-green-600" />
                      </button>
                    </div>
                  </div>
                </div>
              ))
            ) : (
              <div className="">
                <h1>Your Wishlist is Empty !</h1>
              </div>
            )}
          </div>
        </>
      </div>
    </>
  );
};

export default Wishlist;
