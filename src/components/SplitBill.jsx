import React, { useState, useEffect } from "react";

const SplitBill = ({ bill, members }) => {
  const total = parseFloat(bill.amount) || 0;
  const ownerName = "You"; // Admin/owner

  // Initialize splits equally
  const initialSplits = {};
  members.forEach(member => {
    initialSplits[member.name] = total / members.length;
  });

  const [splits, setSplits] = useState(initialSplits);

  useEffect(() => {
    // Reset splits if members or total changes
    const updatedSplits = {};
    members.forEach(member => {
      updatedSplits[member.name] = total / members.length;
    });
    setSplits(updatedSplits);
  }, [members, total]);

  const handleChange = (name, value) => {
    if (name === ownerName) return; // Owner slider is fixed, others change it

    const currentOwner = splits[ownerName];
    const currentValue = splits[name];
    const diff = value - currentValue;

    // If increasing member, owner must have enough to cover it
    if (diff > 0 && diff > currentOwner) {
      value = currentValue + currentOwner; // cap increase
    }

    // Update member value
    setSplits(prev => ({
      ...prev,
      [name]: value,
      [ownerName]: prev[ownerName] - (value - currentValue)
    }));
  };

  return (
    <div className="p-6">
      <h1 className="text-center text-lg font-semibold">Split Bill</h1>

      <div className="text-center mt-4">
        <p className="text-gray-300">{bill.description}</p>
        <p className="text-green-400 text-2xl font-bold">${total.toFixed(2)}</p>
      </div>

      {/* Sliders */}
      <div className="flex justify-around mt-10">
        {members.map(member => (
          <div key={member.name} className="flex flex-col items-center">
            <input
              type="range"
              min="0"
              max={member.name === ownerName ? total : total} 
              value={splits[member.name]}
              onChange={(e) => handleChange(member.name, parseFloat(e.target.value))}
              className="w-16 h-40 rotate-[-90deg] accent-purple-600"
            />
            <p className="mt-4 font-medium">${splits[member.name]?.toFixed(2)}</p>
            <p className="text-gray-300 text-sm capitalize">{member.name}</p>
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