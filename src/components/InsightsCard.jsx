import React from "react";

function InsightsCard({ title, value }) {
  return (
    <div className="bg-purple-800 p-4 rounded-lg shadow-md">
      <h3 className="text-lg font-semibold">{title}</h3>
      <p className="text-2xl font-bold">{value}</p>
    </div>
  );
}

export default InsightsCard;
