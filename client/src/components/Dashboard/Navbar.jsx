import React from "react";
import { useSelector } from "react-redux";

const Navbar = () => {
  const user = useSelector((state) => state.user);
  return (
    <div className="bg-blue-500 h-16 text-white flex flex-row items-center px-12 justify-between">
      <p className="text-3xl font-bold tracking-widest font-mono">MINITWEET</p>
      <div className="flex flex-row items-center gap-16">
        <img
          src="https://github.com/rohan-kulkarni-25.png"
          className="h-12 rounded-full p-1 bg-white"
        />
        <p className="text-2xl font-bold">{user?.username?.toUpperCase()}</p>
        <button className="bg-white px-8 py-2 rounded-md text-black font-bold">
          LOGOUT
        </button>
      </div>
    </div>
  );
};

export default Navbar;
