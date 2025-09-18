// src/Login.js
// src/Login.js
import React from "react";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const navigate = useNavigate();

  const handleConnectWallet = () => {

    navigate("/dashboard");
  };

  return (
    <div className="w-full h-screen flex justify-center items-center bg-black">
      <div className="text-center text-white p-6">
        <div className="border border-purple-600 p-6 rounded-lg">
          <div className="flex justify-center">
          <img
            src="/SolLogo.jpg"
            alt="App Logo"
            className="w-24 h-24 object-contain"
          />
        </div>
        <div className="text-5xl font-bold mb-2">
          <span className="text-purple-600">Sol</span>
          <span className="text-green-600">Split</span>
          </div>
        <h2 className="text-lg mb-4 italic">
          Simplify group expenses on Solana
        </h2>
    <button
          onClick={handleConnectWallet}
          className="px-4 py-2 bg-purple-500 rounded hover:bg-purple-600 mt-6"
        >
          Connect Wallet
        </button>
      </div>
      <p className="text-sm text-center text-white p-6">Don't have a Wallet? Get one on the {" "}
  <a 
    href="https://www.apple.com/app-store/" 
    target="_blank" 
    rel="noopener noreferrer" 
    className="text-blue-500 underline"
  >
    App Store
  </a></p>

    </div>
    </div>
  );
};