import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useApp } from './context/AppContext';

const Register = () => {
  const { registerUser } = useApp(); // Get the context function
  const navigate = useNavigate();

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!username || !password || !confirmPassword) {
      alert("All fields are required");
      return;
    }

    if (password !== confirmPassword) {
      alert("Passwords do not match");
      return;
    }

    // Register user in context
    registerUser({ username, password });
    alert("Registration successful! Please login.");

    // Redirect to login page
    navigate("/login");
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-dark-bg text-white">
      <div className="bg-gray-800 p-8 rounded-xl w-full max-w-md">
        <h2 className="text-2xl font-bold text-center mb-6">Register</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block mb-1">Username</label>
            <input
              type="text"
              value={username}
              onChange={e => setUsername(e.target.value)}
              placeholder="Enter username"
              className="w-full p-3 rounded-md bg-gray-700 text-white"
            />
          </div>
          <div>
            <label className="block mb-1">Password</label>
            <input
              type="password"
              value={password}
              onChange={e => setPassword(e.target.value)}
              placeholder="Enter password"
              className="w-full p-3 rounded-md bg-gray-700 text-white"
            />
          </div>
          <div>
            <label className="block mb-1">Confirm Password</label>
            <input
              type="password"
              value={confirmPassword}
              onChange={e => setConfirmPassword(e.target.value)}
              placeholder="Confirm password"
              className="w-full p-3 rounded-md bg-gray-700 text-white"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-purple-600 py-3 rounded-lg font-medium hover:bg-purple-700"
          >
            Register
          </button>
        </form>
        <p className="text-sm text-center mt-4">
          Already have an account?{" "}
          <span
            onClick={() => navigate("/login")}
            className="text-blue-500 cursor-pointer underline"
          >
            Login
          </span>
        </p>
      </div>
    </div>
  );
};

export default Register;