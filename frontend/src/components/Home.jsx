import React from "react";
import Navbar from "./Navbar";

const Home = () => {
  return (
    <>
      <div className="h-full w-full">
        <Navbar />
        <div className="h-full w-full mt-5 p-4">
          <h3 className="text-3xl font-medium ">For you</h3>
          <div className="wrapper h-[330px] w-full border-2 p-2 border-zinc-500 mt-5 gap-4 flex justify-between items-center flex-nowrap overflow-x-auto overflow-y-hidden  ">
            <div className="card  h-[300px] min-w-[250px] border-2 border-red-500"></div>
            <div className="card  h-[300px] min-w-[250px] border-2 border-red-500"></div>
            <div className="card  h-[300px] min-w-[250px] border-2 border-red-500"></div>
            <div className="card  h-[300px] min-w-[250px] border-2 border-red-500"></div>
            <div className="card  h-[300px] min-w-[250px] border-2 border-red-500"></div>
            <div className="card  h-[300px] min-w-[250px] border-2 border-red-500"></div>
            <div className="card  h-[300px] min-w-[250px] border-2 border-red-500"></div>
          </div>
        </div>
        <div className="h-full w-full mt-5 p-4">
          <h3 className="text-3xl font-medium ">Trending</h3>
          <div className="wrapper h-[330px] w-full border-2 p-2 border-zinc-500 mt-5 gap-4 flex justify-between items-center flex-nowrap overflow-x-auto overflow-y-hidden  ">
            <div className="card  h-[300px] min-w-[250px] border-2 border-red-500"></div>
            <div className="card  h-[300px] min-w-[250px] border-2 border-red-500"></div>
            <div className="card  h-[300px] min-w-[250px] border-2 border-red-500"></div>
            <div className="card  h-[300px] min-w-[250px] border-2 border-red-500"></div>
            <div className="card  h-[300px] min-w-[250px] border-2 border-red-500"></div>
            <div className="card  h-[300px] min-w-[250px] border-2 border-red-500"></div>
            <div className="card  h-[300px] min-w-[250px] border-2 border-red-500"></div>
          </div>
        </div>
        <div className=" h-full w-full mt-5 p-4">
          <h3 className="text-3xl font-medium ">Top 10</h3>
          <div className="wrapper h-[330px] w-full border-2 p-2 border-zinc-500 mt-5 gap-4 flex justify-between items-center flex-nowrap overflow-x-auto overflow-y-hidden  ">
            <div className="card  h-[300px] min-w-[250px] border-2 border-red-500"></div>
            <div className="card  h-[300px] min-w-[250px] border-2 border-red-500"></div>
            <div className="card  h-[300px] min-w-[250px] border-2 border-red-500"></div>
            <div className="card  h-[300px] min-w-[250px] border-2 border-red-500"></div>
            <div className="card  h-[300px] min-w-[250px] border-2 border-red-500"></div>
            <div className="card  h-[300px] min-w-[250px] border-2 border-red-500"></div>
            <div className="card  h-[300px] min-w-[250px] border-2 border-red-500"></div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Home;
