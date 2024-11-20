import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "../redux/slices/productSlice";
import { FaBackward, FaForward } from "react-icons/fa";

const Home = () => {
  const dispatch = useDispatch();
  const { allProducts, loading, errorMsg } = useSelector(
    (state) => state.productReducer
  );

  // console.log(allProducts, loading, errorMsg);
  const [currentPage,setCurrentPage] = useState(1)
  const productsPerPage = 8
  const totalPages  = Math.ceil(allProducts?.length/productsPerPage)
  const currentPageProductLastIndex = currentPage * productsPerPage
  const currentPageProductFirstIndex = currentPageProductLastIndex - productsPerPage
  const visibleAllProducts = allProducts?.slice(currentPageProductFirstIndex,currentPageProductLastIndex)

  useEffect(() => {
    dispatch(fetchProducts());
  }, [currentPage]);

  //PAGINATION FUNCTIONS
  const navigateToNextPage = ()=>{
    if(currentPage < totalPages){
      setCurrentPage(currentPage + 1)
    }
  }
  const navigateToPreviousPage = ()=>{
    if(currentPage > 1){
      setCurrentPage(currentPage - 1)
    }
  }

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
                visibleAllProducts?.map((product) => (
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
            <div className="text-xl flex items-center justify-center mt-14">
              <span onClick={navigateToPreviousPage} className="cursor-pointer"><FaBackward/></span>
              <span className="mx-4">Page {currentPage} of {totalPages}</span>
              <span onClick={navigateToNextPage} className="cursor-pointer"><FaForward/></span>
            </div>
          </>
        )}
      </div>
    </>
  );
};

export default Home;
