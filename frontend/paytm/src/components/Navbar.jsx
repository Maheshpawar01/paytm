import React from "react";
import { IoMdHome } from "react-icons/io";
import { Link } from "react-router-dom";
import { FaMoneyBillTransfer } from "react-icons/fa6";
import { FaHistory } from "react-icons/fa";
import { IoPerson } from "react-icons/io5";
import { BiLogOutCircle } from "react-icons/bi";

function Navbar() {
  return (
    <div className="">
      <div className="rounded-md h-10 w-10 bg-blue-400 flex justify-center mt-2 mr-2">
        <div className="flex flex-col justify-center h-full text-xl">M</div>
      </div>

      <div className="my-20">
        
        <Link
          to="/"
          className="relative group rounded-md h-10 w-10 flex justify-center items-center hover:bg-blue-400 hover:cursor-pointer mb-4"
        >
          <IoMdHome 
            className="flex flex-col justify-center h-full"
            size={"24px"}
          />

          {/* Tooltip */}
          <span className="absolute left-full top-1/2 transform -translate-y-1/2 mb-2 w-max p-2 text-black text-sm rounded opacity-0 group-hover:opacity-100 transition-opacity ml-1 font-bold">
            Home
          </span>
        </Link>

        <Link
          to="/"
          className="relative group rounded-md h-10 w-10 flex justify-center items-center hover:bg-blue-400 hover:cursor-pointer mb-4"
        >
          <FaMoneyBillTransfer
            className="flex flex-col justify-center h-full"
            size={"24px"}
          />

          {/* Tooltip */}
          <span className="absolute left-full top-1/2 transform -translate-y-1/2 mb-2 w-max p-2 text-black text-sm rounded opacity-0 group-hover:opacity-100 transition-opacity ml-1 font-bold">
            send Money
          </span>
        </Link>

        <Link
          to="/"
          className="relative group rounded-md h-10 w-10 flex justify-center items-center hover:bg-blue-400 hover:cursor-pointer mb-4"
        >
          <FaHistory
            className="flex flex-col justify-center h-full"
            size={"24px"}
          />

          {/* Tooltip */}
          <span className="absolute left-full top-1/2 transform -translate-y-1/2 mb-2 w-max p-2 text-black text-sm rounded opacity-0 group-hover:opacity-100 transition-opacity ml-1 font-bold">
            History
          </span>
        </Link>

        <Link
          to="/"
          className="relative group rounded-md h-10 w-10 flex justify-center items-center hover:bg-blue-400 hover:cursor-pointer mb-4"
        >
          <IoPerson
            className="flex flex-col justify-center h-full"
            size={"24px"}
          />

          {/* Tooltip */}
          <span className="absolute left-full top-1/2 transform -translate-y-1/2 mb-2 w-max p-2 text-black text-sm rounded opacity-0 group-hover:opacity-100 transition-opacity ml-1 font-bold">
            Profile
          </span>
        </Link>

        <Link
          to="/"
          className="relative group rounded-md h-10 w-10 flex justify-center items-center hover:bg-blue-400 hover:cursor-pointer mb-4"
        >
          <BiLogOutCircle 
            className="flex flex-col justify-center h-full"
            size={"24px"}
          />

          {/* Tooltip */}
          <span className="absolute left-full top-1/2 transform -translate-y-1/2 mb-2 w-max p-2 text-black text-sm rounded opacity-0 group-hover:opacity-100 transition-opacity ml-1 font-bold">
            logout
          </span>
        </Link>
        <hr className="mr-2 border-gray-500" />
      </div>
    </div>
  );
}

export default Navbar;
