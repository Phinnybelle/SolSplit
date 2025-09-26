import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useApp } from './context/AppContext';
import AppLogo from './components/common/AppLogo';

const Login = () => {
  const { login, users } = useApp(); // users is an array of registered users
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleLogin = () => {
    const userExists = users.find(u => u.username === username && u.password === password);
    if (userExists) {
      login();
      navigate("/dashboard");
    } else {
      setError("Invalid username or password");
    }
  };

  return (
    <div className="w-full h-screen flex justify-center items-center bg-black">
      <div className="text-center text-white p-6 border border-purple-600 rounded-lg">
        <div className="flex justify-center w-24 h-24 mx-auto mb-4">
          <AppLogo spinning={false} />
        </div>
        <div className="text-5xl font-bold mb-2">
          <span className="text-purple-600">Sol</span>
          <span className="text-green-600">Split</span>
        </div>
        <h2 className="text-lg mb-4 italic">Simplify group expenses on Solana</h2>

        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          className="w-full p-2 mb-2 rounded bg-gray-800 text-white"
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full p-2 mb-4 rounded bg-gray-800 text-white"
        />

        {error && <p className="text-red-500 mb-2">{error}</p>}

        <button
          onClick={handleLogin}
          className="px-4 py-2 bg-purple-500 rounded hover:bg-purple-600 mb-4 w-full"
        >
          Log in
        </button>

        <p className="text-sm">
          Don't have an account?{" "}
          <span
            onClick={() => navigate("/register")}
            className="text-blue-500 underline cursor-pointer"
          >
            Sign Up
          </span>
        </p>
      </div>
    </div>
  );
};

export default Login;