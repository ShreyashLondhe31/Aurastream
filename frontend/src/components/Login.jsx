import React, { useState } from "react";
import Signup from "./Signup";
import { Link } from "react-router-dom";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const submitHandler = (e) => {
    e.preventDefault();
    setUsername("");
    setPassword("");
  };
  return (
    <div className="h-screen w-full flex flex-col justify-center items-center">
      <h1 className="text-5xl font-bold mb-10">Welcome to login page</h1>
      <div className="h-[450px] w-[450px] border-2 border-zinc-200 rounded-lg flex flex-col justify-center items-center ">
        <form
          onSubmit={(e) => {
            submitHandler(e);
          }}
          action=""
          className="flex flex-col justify-center items-center gap-10"
        >
          <input
            value={username}
            onChange={(e) => {
              setUsername(e.target.value);
            }}
            className="border-2 border-zinc-500  px-5 py-2"
            type="text"
            placeholder="Enter username"
          />
          <input
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
            className="border-2 border-zinc-500 px-5 py-2"
            type="password"
            placeholder="Enter password"
          />
          <input
            className="border-2 border-zinc-500 bg-green-400  px-5 py-2"
            type="submit"
            value="Login"
          />
        </form>
        <Link
          to="/signup"
          className="mt-10 hover:scale-90 transition-all ease-linear"
        >
          New to aurastream? Click here to register.
        </Link>
      </div>
    </div>
  );
};
export default Login;
