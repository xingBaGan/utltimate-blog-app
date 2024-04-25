'use client'
import React from "react";
import Header from "./components/Header";
import { CiSearch } from "react-icons/ci";
import { SessionProvider } from "next-auth/react";
const HomePage = () => {
  return (
    <div className="flex h-screen w-full flex-col">
      <SessionProvider>
        <Header />
      </SessionProvider>
      <div className="grid grid-cols-12 place-items-center w-full h-full">
        <main className="col-span-8 w-full h-full border-r border-grey-300">
          <div className="flex flex-col space-y-4">
            <div className="flex items-center space-x-4">
              <label htmlFor="search" className="relative">
                <CiSearch className="absolute top-1/2 left-1 translate-y-[-50%] text-xl text-gray-500" />
                <input
                  type="text"
                  name="search"
                  id="search"
                  className="outline-none border-grey-300 border p-2 boreder rounded-xl pl-6 w-[24rem]"
                  placeholder="Search for anything..."
                />
              </label>
              <div className="flex">
                <div>My topic:</div>
                <div>all tags are here</div>
              </div>
            </div>
          </div>
        </main>
        <aside className="col-span-4 w-full h-full"> aside</aside>
      </div>
    </div>
  );
}

export default HomePage;