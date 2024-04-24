import React from "react";
import { useNavigate } from "react-router-dom";
import Hamburger from "../icons/Hamburger";
import Cancel from "../icons/Cancel";
import { useDispatch, useSelector } from "react-redux";
import { toggle } from "../context/sidebarSlice";
import Logout from "../icons/Logout";


const Navbar = () => {
  const open = useSelector((state) => state.sidebar.open);
  const dispatch = useDispatch();
  // const handleChange = (e) => { };
  
  // const user = JSON.parse(localStorage.getItem("user"));

  const navigate = useNavigate();
  return (
    <div
      className="fixed bg-[#28282B] top-0 left-0 right-0 z-10 h-14  shadow-md  flex items-center justify-between px-4 md:px-20"
    >
      <div className="text-sm md:text-base font-thin text-white cursor-pointer flex items-center gap-4">
        <div
          onClick={() => dispatch(toggle())}
          className="transition-transform   ease-linear duration-700 cursor-pointer"
        >
          {!open ? <Hamburger /> : <Cancel />}
        </div>
        Threads.
      </div>

      {/* // Search Bar */}
      {/* <div
        className="searchbar hidden border-none outline-none rounded-md py-1 h-8 px-4 w-96 
      bg-gray-100 md:flex items-center"
      >
        <Search />
        <input
          onChange={handleChange}
          type="text"
          className="border-none outline-none rounded-md py-1 px-2 w-96 bg-gray-100"
          placeholder="Search for Topics"
        />
      </div> */}

      <div className="flex items-center gap-3">
        <Logout />
        <div className="hidden md:flex items-center gap-5">
          <div
            className="cursor-pointer text-[12px] text-white underline-offset-4 duration-200 transition-all hover:underline"
            onClick={() => {
              localStorage.removeItem("user");
              navigate("/login");
            }}
          >
            Logout
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
