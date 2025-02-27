import React, { useState } from "react";
import Login from "./Login";
import { Link } from "react-router-dom";

const Signup = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const submitHandler = (e) => {
    e.preventDefault();
    setName("");
    setEmail("");
    setPassword("");
    setConfirmPassword("");
  };
  return (
    <div className="h-screen w-full flex flex-col justify-center items-center">
      <h1 className="text-5xl font-bold mb-10">Welcome to signup page</h1>
      <div className="h-[600px] w-[450px] border-2 border-zinc-200 rounded-lg flex flex-col justify-center items-center ">
        <form
          onSubmit={(e) => submitHandler(e)}
          action=""
          className="flex flex-col justify-center items-center gap-10"
        >
          <input
            onChange={(e) => {
              setName(e.target.value);
            }}
            value={name}
            className="border-2 border-zinc-500  px-5 py-2"
            type="text"
            placeholder="Enter your name"
          />
          <input
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            value={email}
            className="border-2 border-zinc-500  px-5 py-2"
            type="email"
            placeholder="Enter your email"
          />
          <input
            onChange={(e) => {
              setPassword(e.target.value);
            }}
            value={password}
            className="border-2 border-zinc-500 px-5 py-2"
            type="password"
            placeholder="Create a password"
          />
          <input
            onChange={(e) => {
              setConfirmPassword(e.target.value);
            }}
            value={confirmPassword}
            className="border-2 border-zinc-500 px-5 py-2"
            type="password"
            placeholder="Confirm password"
          />
          <input
            className="border-2 border-zinc-500 bg-green-400  px-5 py-2"
            type="submit"
            value="Signup"
          />
        </form>
        <Link
          to="/login"
          className="mt-10 hover:scale-90 transition-all ease-linear"
        >
          Already registered? Click here to login.
        </Link>
      </div>
    </div>
  );
};
export default Signup;
