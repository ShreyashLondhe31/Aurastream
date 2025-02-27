import React from "react";
import Login from "./components/Login";
import Signup from "./components/Signup";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Movies from "./components/Movies";
import Tvshows from "./components/Tvshows";
import Mylist from "./components/Mylist";

const App = () => {
  return (
    <>
      <Router>
        <Routes>
          {" "}
          <Route path="/signup" element={<Signup />} />{" "}
          <Route path="/login" element={<Login />} />
          <Route path="/home" element={<Home />} />
          <Route path="/movies" element={<Movies />} />
          <Route path="/tvshows" element={<Tvshows />} />
          <Route path="/mylist" element={<Mylist />} />
        </Routes>
      </Router>
    </>
  );
};
export default App;
