import axios from "axios";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { NavLink, useNavigate } from "react-router-dom";
import { updateUser } from "../store/slices/userSlice";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogin = async () => {
    if (username.length == 0 || password.length == 0) {
      alert("USERNAME AND PASSWORD ARE REQUIRED");
    }
    try {
      const response = await axios({
        method: "post",
        data: {
          username,
          password,
        },
        url: "http://localhost:8080/api/v1/users/login",
      });
      dispatch(updateUser({ ...response.data.user }));
      navigate("/dashboard");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="bg-yellow-50 h-screen w-screen flex flex-col items-center justify-center gap-12">
      <p className="text-7xl font-bold text-blue-600">MINI TWEET</p>
      <div className="flex flex-col w-1/4 bg-blue-50  gap-4 p-4 rounded-md">
        <input
          className="text-2xl p-2 rounded-md"
          placeholder="username"
          required
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          className="text-2xl p-2 rounded-md"
          placeholder="password"
          required
          onChange={(e) => setPassword(e.target.value)}
        />
        <button
          className="bg-blue-500 text-white text-2xl font-bold px-4 py-2 rounded-md"
          onClick={handleLogin}
        >
          LOGIN
        </button>
        <p className="my-4 font-mono">
          New to minitweet ?{" "}
          <NavLink className="text-blue-500" to={"/register"}>
            Register
          </NavLink>
        </p>
      </div>
    </div>
  );
};

export default Login;
