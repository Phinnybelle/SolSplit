import React from "react";
import SideNavbar from "./SideNavbar";

export default function Dashboard() {
  return (
    <div className="flex">
      <SideNavbar />
      <div className="flex-1 p-6">
        <h1 className="text-3xl font-bold">Dashboard Content</h1>
        <p>Our dashboard content.</p>
      </div>
    </div>
  );
};