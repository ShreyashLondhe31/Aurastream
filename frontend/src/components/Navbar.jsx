import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      <div className="h-20 w-full bg-zinc-800 p-5 text-white flex justify-between items-center px-20">
        <h3 className="text-3xl font-semibold">Aurastream</h3>
        <nav>
          <li className="flex justify-between items-center gap-14 font-medium">
            <NavLink
              className={(e) => {
                return e.isActive ? "red" : "";
              }}
              to="/home"
            >
              Home
            </NavLink>
            <NavLink
              className={(e) => {
                return e.isActive ? "red" : "";
              }}
              to="/movies"
            >
              Movies
            </NavLink>
            <NavLink
              className={(e) => {
                return e.isActive ? "red" : "";
              }}
              to="/tvshows"
            >
              Tv shows
            </NavLink>
            <NavLink
              className={(e) => {
                return e.isActive ? "red" : "";
              }}
              to="/mylist"
            >
              My list
            </NavLink>
          </li>
        </nav>
      </div>
    </div>
  );
};
export default Navbar;
