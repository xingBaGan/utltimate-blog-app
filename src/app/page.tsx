import React from "react";
import { IoReorderThreeOutline } from "react-icons/io5";
import { BsBell } from "react-icons/bs";
import { FiEdit } from "react-icons/fi";

const HomePage = () => {
  return (
    <div className="flex h-screen w-full flex-col">
      <header className="h-20 bg-white w-full flex flex-row justify-around items-center border border-grey-200">
        <div>
          <IoReorderThreeOutline className="text-2xl text-grey-400" />
        </div>
        <div className="text-thin text-xl">Ultimate Blog</div>
        <div className="flex items-center space-x-2">
          <div>
            <BsBell className="text-2xl text-grey-400" />
          </div>
          <div className="h-10 w-10 rounded-full bg-gray-300"></div>
          <div>
            <button className="flex transition hover:border-gray-900 hover:text-gray-900
             items-center px-4 py-2.5 space-x-2.5 border border-grey-200 rounded-xl py-2.5 text-gray-600">
              <div>Write</div>
              <div><FiEdit /></div>
            </button>
          </div>
        </div>
      </header>
      <div className="grid grid-cols-12"></div>
    </div>
  );
}

export default HomePage;