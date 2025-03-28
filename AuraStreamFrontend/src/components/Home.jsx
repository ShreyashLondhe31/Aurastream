import React from "react";
import Navbar from "./Navbar";

const Home = () => {
  return (
    <>
      <Navbar />
      <div className="h-full w-full mt-20">
        <div className="h-full w-full mt-5 p-4">
          <h3 className="text-3xl font-medium ">For you</h3>
          <div className="wrapper h-[340px] w-full  p-2 mt-5 gap-4 flex justify-between items-center flex-nowrap overflow-x-auto overflow-y-hidden  ">
            <div className="card h-[310px] min-w-[250px] flex flex-col justify-center items-center border-2 rounded-md">
              <div className="w-full h-[275px] flex justify-center items-center">
                <img
                  src="/Images/Emergency_movie_poster.jpg"
                  alt=""
                  className="w-full h-full flex justify-center items-center"
                />
              </div>
              <h3 className="text-xl font-semibold">
                Emergency <span>(2025)</span>{" "}
              </h3>
            </div>
            <div className="card h-[310px] min-w-[250px] flex flex-col justify-center items-center border-2 rounded-md">
              <div className="w-full h-[275px] flex justify-center items-center">
                <img
                  src="/Images/Shang-chi.jpeg"
                  alt=""
                  className="w-full h-full flex justify-center items-center"
                />
              </div>
              <h3 className="text-xl font-semibold">
                Shang-chi <span>(2022)</span>{" "}
              </h3>
            </div>
            <div className="card h-[310px] min-w-[250px] flex flex-col justify-center items-center border-2 rounded-md">
              <div className="w-full h-[275px] flex justify-center items-center">
                <img
                  src="/Images/Snowwhite.jpeg"
                  alt=""
                  className="w-full h-full flex justify-center items-center"
                />
              </div>
              <h3 className="text-xl font-semibold">
                Snowwhite <span>(2021)</span>{" "}
              </h3>
            </div>
            <div className="card h-[310px] min-w-[250px] flex flex-col justify-center items-center border-2 rounded-md">
              <div className="w-full h-[275px] flex justify-center items-center">
                <img
                  src="/Images/venom.jpeg"
                  alt=""
                  className="w-full h-full flex justify-center items-center"
                />
              </div>
              <h3 className="text-xl font-semibold">
                Venom <span>(2022)</span>{" "}
              </h3>
            </div>
            <div className="card h-[310px] min-w-[250px] flex flex-col justify-center items-center border-2 rounded-md">
              <div className="w-full h-[275px] flex justify-center items-center">
                <img
                  src="/Images/365-days.jpg"
                  alt=""
                  className="w-[250px] h-full flex object- justify-center items-center"
                />
              </div>
              <h3 className="text-xl font-semibold">
                365 days <span>(2021)</span>{" "}
              </h3>
            </div>
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
