import React, { useEffect } from "react";
import Header from "../components/Header";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "../redux/slices/productSlice";

const Home = () => {
  const dispatch = useDispatch();
  const { allProducts, loading, errorMsg } = useSelector(
    (state) => state.productReducer
  );

  // console.log(allProducts, loading, errorMsg);

  useEffect(() => {
    dispatch(fetchProducts());
  }, []);

  return (
    <>
      <Header insideHome={true} />
      <div
        style={{ paddingTop: "100px" }}
        className="container px-4 py-10 mx-auto"
      >
        {loading ? (
          <div className="flex justify-center items-center">Loading...</div>
        ) : (
          <>
            <div className="grid grid-cols-6 gap-4">
              {allProducts?.length > 0 ? (
                allProducts?.map((product) => (
                  <div key={product?.id} className="rounded border shadow pb-5 hover:scale-105">
                    <img
                      className="w-full h-[250px]"
                      src={product?.thumbnail}
                      alt="image"
                    />
                    <div className="text-left pl-5">
                      <h2 className="text-lg font-medium">{product?.title}</h2>
                      <Link
                        to={`/${product?.id}/view`}
                        className="bg-red-600 text-white text-sm rounded py-1 px-2 mt-3 inline-block font-light hover:bg-green-800"
                      >
                        View More
                      </Link>
                    </div>
                  </div>
                ))
              ) : (
                <div className="my-5 text-center text-lg font-medium text-red-600">
                  No Products Found
                </div>
              )}
            </div>
          </>
        )}
      </div>
    </>
  );
};

export default Home;
