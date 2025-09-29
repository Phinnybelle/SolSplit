import React from "react";
import InsightsCard from "../components/InsightsPage";

function Insights() {
  const data = [
    { title: "Total Spent", value: "$420" },
    { title: "Average per Person", value: "$70" },
    { title: "Most Active Group", value: "Roommates" }
  ];

  return (
    <div className="p-4 grid gap-4">
      <h2 className="text-2xl font-bold mb-4">Insights</h2>
      {data.map((item, idx) => (
        <InsightsCard key={idx} title={item.title} value={item.value} />
      ))}
    </div>
  );
}

export default Insights;
