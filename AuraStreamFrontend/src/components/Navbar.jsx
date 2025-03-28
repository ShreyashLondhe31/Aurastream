import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="w-full fixed top-0 ">
      <div className="h-20 w-full bg-zinc-800 p-5 text-white flex justify-between items-center ">
        <h3 className="text-3xl font-semibold">Aurastream</h3>
        <nav>
          <li className="flex justify-between items-center gap-14 font-medium">
            <NavLink
              className={(e) => {
                return e.isActive ? "red" : "";
              }}
              to="/api/home"
            >
              Home
            </NavLink>
            <NavLink
              className={(e) => {
                return e.isActive ? "red" : "";
              }}
              to="/api/movies"
            >
              Movies
            </NavLink>
            <NavLink
              className={(e) => {
                return e.isActive ? "red" : "";
              }}
              to="/api/tvshows"
            >
              Tv shows
            </NavLink>
            <NavLink
              className={(e) => {
                return e.isActive ? "red" : "";
              }}
              to="/api/mylist"
            >
              My list
            </NavLink>
            <div className="w-8 h-8 border-2 rounded-full overflow-hidden cursor-pointer">
              <img src="/Images/mockProfilePic.jpeg" alt="" />
            </div>
          </li>
        </nav>
      </div>
    </div>
  );
};
export default Navbar;
