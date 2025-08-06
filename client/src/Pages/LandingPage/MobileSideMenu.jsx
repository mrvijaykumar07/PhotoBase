import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";

import { FaUser } from "react-icons/fa";
const MobileSideMenu = () => {
  const [openSubmenu, setOpenSubmenu] = useState(null);

  const toggleSubmenu = (menu) => {
    setOpenSubmenu(openSubmenu === menu ? null : menu);
  };
  const  isLoggedIn  = false;
  const currentUser  = "";
  const profileImage  = null;
    const handleLogin = () => {
    window.location.href = "/auth/google";
  };

  return (
    <>
      {/* Profile Card */}
      <div className="relative p-4 mx-2 mt-12 mr-2 rounded-xl bg-gradient-to-r from-[#958fa5] to-[#9b9d9d] text-white shadow-md  h-40 flex flex-col items-start">
        {isLoggedIn && (
          <button className="absolute top-6 right-5 text-xs font-semibold underline hover:text-[#1E1E1E]">
            Update Profile
          </button>
        )}

        <div className="w-16 h-16 my-2 bg-white rounded-full flex items-center justify-center overflow-hidden">
          {profileImage ? (
            <img
              src={profileImage}
              alt=""
              className="w-full h-full object-cover rounded-full"
              onError={(e) => {
                e.target.style.display = "none";
              }}
            />
          ) : (
            <FaUser size={34} className="text-black " />
          )}
        </div>

        {isLoggedIn ? (
          <>
            <h2 className="font-semibold text-base">{currentUser?.name}</h2>
            <p className="text-sm">{currentUser?.email}</p>
          </>
        ) : (
          <button
            onClick={handleLogin}
            className="text-base font-semibold underline"
          >
            Login / Signup
          </button>
        )}
      </div>

      <ul className="flex flex-col items-start p-6 mt-2 space-y-2 text-gray-800 text-lg font-semibold w-full ">
        {/* Why Online? NO submenu */}
        <li className="w-full border-b border-gray-300 py-3">
    Sample Galleries
        </li>

        {/* Product with submenu */}
        <li className="w-full border-b border-gray-300 ">
          <button
            onClick={() => toggleSubmenu("product")}
            className="flex justify-between items-center w-full py-3  hover:text-blue-600 transition font-semibold"
            type="button"
          >
            <span>Solutions</span>
            {openSubmenu === "product" ? <FaChevronUp /> : <FaChevronDown />}
          </button>
          {openSubmenu === "product" && (
            <ul className="pl-10 pb-3 space-y-2 text-gray-700 w-full">
              <li>
                <Link
                  to="/product/content"
                  className="hover:text-blue-600 transition block"
                >
                  Content
                </Link>
              </li>
              <li>
             
              </li>
              <li>
                <Link
                  to="/product/repairing"
                  className="hover:text-blue-600 transition block"
                >
                  invites
                </Link>
              </li>
              <li>
                <Link
                  to="/product/mobile"
                  className="hover:text-blue-600 transition block"
                >
                  Mobile
                </Link>
              </li>
              <li>
                <Link
                  to="/product/connections"
                  className="hover:text-blue-600 transition block"
                >
                  Connections
                </Link>
              </li>
            </ul>
          )}
        </li>

        {/* Solutions with submenu */}
        <li className="w-full border-b border-gray-300">
          <button
            onClick={() => toggleSubmenu("solutions")}
            className="flex justify-between items-center w-full py-3  hover:text-blue-600 transition font-semibold"
            type="button"
          >
            <span>Pricing</span>
            {openSubmenu === "solutions" ? <FaChevronUp /> : <FaChevronDown />}
          </button>
          {openSubmenu === "solutions" && (
            <ul className="pl-10 pb-3 space-y-2 text-gray-700 w-full">
              <li>
                <Link
                  to="/solutions/onboarding"
                  className="hover:text-blue-600 transition block"
                >
                  --------------------
                </Link>
              </li>
              <li>
                <Link
                  to="/solutions/refresher-training"
                  className="hover:text-blue-600 transition block"
                >
                  ----------------
                </Link>
              </li>
            </ul>
          )}
        </li>

        {/* Partners with submenu */}
        <li className="w-full border-b border-gray-300">
          <button
            onClick={() => toggleSubmenu("partners")}
            className="flex justify-between items-center w-full py-3  hover:text-blue-600 transition font-semibold"
            type="button"
          >
            <span>Partners</span>
            {openSubmenu === "partners" ? <FaChevronUp /> : <FaChevronDown />}
          </button>
          {openSubmenu === "partners" && (
            <ul className="pl-10 pb-3 space-y-2 text-gray-700 w-full">
              <li>
                <Link
                  to="/partners/insurance"
                  className="hover:text-blue-600 transition block"
                >
                  Insurance
                </Link>
              </li>
              <li>
                <Link
                  to="/partners/become-a-partner"
                  className="hover:text-blue-600 transition block"
                >
                  Become a Partner
                </Link>
              </li>
            </ul>
          )}
        </li>

        {/* Resources NO submenu */}
        <li className="w-full border-b border-gray-300 py-3">
          <Link
            to="/resources"
            className="hover:text-blue-600 transition font-semibold block"
          >
            Contact
          </Link>
        </li>
      </ul>
      {/* -------------------login /flags--------------- */}
      <div className="fixed bottom-0 left-0 w-full bg-white p-4 border-t  flex justify-between items-center z-50">
                 <Link
            to="/login"
            className="bg-amber-600 px-12 py-1.5 rounded-3xl hover:bg-white hover:text-blue-950  transition"
          >
            Login
          </Link>
        <div className="flex items-center space-x-3">
          <div className="bg-amber-600 px-6 py-1.5  rounded-3xl">
            Get in touch{" "}
          </div>
        </div>
     
      </div>
    </>
  );
};

export default MobileSideMenu;
