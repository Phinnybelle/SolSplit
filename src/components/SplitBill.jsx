import React, { useState } from "react";

const SplitBill = ({ bill }) => {
  const total = parseFloat(bill.amount) || 0;
  const [splits, setSplits] = useState({
    you: total / 3,
    abiola: total / 3,
    chinedu: total / 3,
  });

  const handleChange = (name, value) => {
    setSplits({ ...splits, [name]: value });
  };

  return (
    <div className="p-6">
      <h1 className="text-center text-lg font-semibold">Add New Bill</h1>

      <div className="text-center mt-4">
        <p className="text-gray-300">{bill.description}</p>
        <p className="text-green-400 text-2xl font-bold">${total.toFixed(2)}</p>
      </div>

      {/* Sliders */}
      <div className="flex justify-around mt-10">
        {Object.entries(splits).map(([name, value]) => (
          <div key={name} className="flex flex-col items-center">
            <input
              type="range"
              min="0"
              max={total}
              value={value}
              onChange={(e) => handleChange(name, parseFloat(e.target.value))}
              className="w-16 h-40 rotate-[-90deg] accent-purple-600"
            />
            <p className="mt-4 font-medium">${value.toFixed(2)}</p>
            <p className="text-gray-300 text-sm capitalize">{name}</p>
          </div>
        ))}
      </div>

      <button className="mt-10 w-full bg-purple-600 py-3 rounded-lg font-medium">
        Confirm Split
      </button>
    </div>
  );
};

export default SplitBill;
