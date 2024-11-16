import React from "react";
import { FaTruckFast } from "react-icons/fa6";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <>
      <div className="container">
        <footer className="bg-gray-800 px-10 text-white py-10">
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row justify-between">
              <div className="mb-6 md:mb-0">
                <div className="flex items-center">
                  <Link
                    className="text-2xl font-bold flex items-center gap-3"
                    to={"/"}
                  >
                    <FaTruckFast className="text-5xl " />
                    Daily Cart
                  </Link>
                </div>
                <p className="mt-2 text-gray-400">
                  1234 Lorem Ipsum St.
                  <br />
                  City, State, 12345
                </p>
              </div>

              <div className="mb-6 md:mb-0">
                <h2 className="text-lg font-semibold">Links</h2>
                <ul className="mt-2 flex flex-col gap-5">
                  <li>
                    <Link to={"/"} className="text-gray-400 hover:text-white">
                      Home
                    </Link>
                  </li>
                  <li>
                    <Link
                      to={"/cart"}
                      className="text-gray-400 hover:text-white"
                    >
                      My Cart
                    </Link>
                  </li>
                  <li>
                    <Link
                      to={"/wishlist"}
                      className="text-gray-400 hover:text-white"
                    >
                      My Wishlist
                    </Link>
                  </li>
                  <li>
                    <Link
                      to={"/products"}
                      className="text-gray-400 hover:text-white"
                    >
                      All Products
                    </Link>
                  </li>
                </ul>
              </div>

              <div>
                <h2 className="text-lg font-semibold">Contact Us</h2>
                <form className="mt-2">
                  <input
                    type="text"
                    placeholder="Your Email"
                    className="p-2 rounded bg-gray-700 text-white w-full mb-2"
                    required
                  />
                  <textarea
                    placeholder="Your Message"
                    className="p-2 rounded bg-gray-700 text-white w-full mb-2"
                    rows="3"
                    required
                  ></textarea>
                  <button
                    type="submit"
                    className="bg-blue-600 hover:bg-blue-500 text-white py-2 px-4 rounded"
                  >
                    Send
                  </button>
                </form>
                
              </div>
            </div>
            <div className="mt-6 border-t border-gray-700 pt-4 text-center">
              <p className="text-gray-400">
                &copy; 2024 Daily Cart. Designed and Developed by <a target="_blank" href="https://sarangpachari.netlify.app">Sarang P Achari</a>.
              </p>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
};

export default Footer;
