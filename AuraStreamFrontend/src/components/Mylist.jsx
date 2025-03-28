import React from "react";
import Navbar from "./Navbar";

const Mylist = () => {
  return (
    <>
      <Navbar />
      <div className="w-full h-screen flex flex-col pt-26 items-center">
        <h1 className="text-4xl font-semibold">Your wish list</h1>
        <div className="w-full h-full px-4">
          <div className="w-full h-[20%] mt-6 rounded-lg bg-red-400 flex justify-between items-center px-10">
            <h1 className="text-xl font-semibold">Movie title</h1>
            <p className="w-[40%] font-bold ">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Dignissimos quia libero eligendi qui assumenda cupiditate dicta
              nobis iure molestiae debitis beatae vitae dolorem accusamus
              corrupti aliquam aut, iste fugit quos.
            </p>
            <button className="bg-red-500 px-4 py-2 rounded-xl cursor-pointer">
              Remove
            </button>
          </div>
          <div className="w-full h-[20%] mt-6 rounded-lg bg-red-400 flex justify-between items-center px-10">
            <h1 className="text-xl font-semibold">Movie title</h1>
            <p className="w-[40%] font-bold ">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Dignissimos quia libero eligendi qui assumenda cupiditate dicta
              nobis iure molestiae debitis beatae vitae dolorem accusamus
              corrupti aliquam aut, iste fugit quos.
            </p>
            <button className="bg-red-500 px-4 py-2 rounded-xl cursor-pointer">
              Remove
            </button>
          </div>
          <div className="w-full h-[20%] mt-6 rounded-lg bg-red-400 flex justify-between items-center px-10">
            <h1 className="text-xl font-semibold">Movie title</h1>
            <p className="w-[40%] font-bold ">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Dignissimos quia libero eligendi qui assumenda cupiditate dicta
              nobis iure molestiae debitis beatae vitae dolorem accusamus
              corrupti aliquam aut, iste fugit quos.
            </p>
            <button className="bg-red-500 px-4 py-2 rounded-xl cursor-pointer">
              Remove
            </button>
          </div>
          <div className="w-full h-[20%] mt-6 rounded-lg bg-red-400 flex justify-between items-center px-10">
            <h1 className="text-xl font-semibold">Movie title</h1>
            <p className="w-[40%] font-bold ">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Dignissimos quia libero eligendi qui assumenda cupiditate dicta
              nobis iure molestiae debitis beatae vitae dolorem accusamus
              corrupti aliquam aut, iste fugit quos.
            </p>
            <button className="bg-red-500 px-4 py-2 rounded-xl cursor-pointer">
              Remove
            </button>
          </div>
          <div className="w-full h-[20%] mt-6 rounded-lg bg-red-400 flex justify-between items-center px-10">
            <h1 className="text-xl font-semibold">Movie title</h1>
            <p className="w-[40%] font-bold ">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Dignissimos quia libero eligendi qui assumenda cupiditate dicta
              nobis iure molestiae debitis beatae vitae dolorem accusamus
              corrupti aliquam aut, iste fugit quos.
            </p>
            <button className="bg-red-500 px-4 py-2 rounded-xl cursor-pointer">
              Remove
            </button>
          </div>
        </div>
      </div>
    </>
  );
};
export default Mylist;
