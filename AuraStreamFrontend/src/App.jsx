import React from "react";
import Login from "./components/Login";
import Signup from "./components/Signup";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Movies from "./components/Movies";
import Tvshows from "./components/Tvshows";
import Mylist from "./components/Mylist";
import AdminDashboard from "./components/AdminDashboard";
import axios from "axios";

const App = () => {
  return (
    <>
      <Router>
        <Routes>
          {" "}
          <Route path="/api/signup" element={<Signup />} />{" "}
          <Route path="/api/login" element={<Login />} />
          <Route path="/api/home" element={<Home />} />
          <Route path="/api/movies" element={<Movies />} />
          <Route path="/api/tvshows" element={<Tvshows />} />
          <Route path="/api/mylist" element={<Mylist />} />
          <Route path="/api/admindashboard" element={<AdminDashboard />} />
        </Routes>
      </Router>
    </>
  );
};
export default App;
