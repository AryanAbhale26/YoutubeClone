import React from "react";
import menu_icon from "../../assets/menu.png";
import logo from "../../assets/logo.png";
import logo1 from "../../assets/logo1.jpg";
import search from "../../assets/search.png";
import upload from "../../assets/upload.png";
import more from "../../assets/more.png";
import notification from "../../assets/notification.png";
import jack from "../../assets/jack.png";
import { Link } from "react-router-dom";
import { FaAlignJustify } from "react-icons/fa";
import { CiSearch } from "react-icons/ci";

const Navbar = ({ setSiderBar }) => {
  return (
    <nav className="flex items-center border-b-2 border-white w-full h-16 px-6 justify-between shadow-lg bg-white fixed top-0 left-0 z-50">
      <div className="flex flex-row items-center gap-6">
        <div
          className=" hover:bg-slate-300  h-10 w-10 flex items-center justify-center   rounded-full"
          onClick={() => {
            setSiderBar((prev) => (prev === false ? true : false));
          }}
        >
          <FaAlignJustify />
        </div>
        <Link to="/">
          <img src={logo1} className="h-16" alt="Logo" />
        </Link>
      </div>

      <div className="flex items-center flex-row">
        <input
          type="text"
          className="border-black border px-4 rounded-l-2xl h-10 w-[400px] focus:outline-none focus:ring-0 bg-white"
          placeholder="Search"
        />
        <div className="border border-black h-10 w-12  rounded-r-2xl  flex justify-center items-center   hover:bg-slate-100">
          <CiSearch className="h-5 w-5" />
        </div>
      </div>

      <div className="flex flex-row items-center gap-4 ">
        <img
          className="h-7 w-7 cursor-pointer "
          src={upload}
          alt="Upload Icon"
        />
        <img
          className="h-7 w-7 cursor-pointer "
          src={more}
          alt="More Options Icon"
        />
        <img
          className="h-7 w-7 cursor-pointer  rounded-full"
          src={jack}
          alt="User Icon"
        />
        <img
          className="h-7 w-7 cursor-pointer "
          src={notification}
          alt="Notification Icon"
        />
      </div>
    </nav>
  );
};

export default Navbar;
