import React, { useState } from "react";
import AddBillEmpty from "./components/AddBillEmpty";
import AddBillFilled from "./components/AddBillFilled";
import SplitBill from "./components/SplitBill";
import Insights from "./components/pages/Insights"; // new page
import SpendingChart from "./components/SpendingChart"; // optional chart

function App() {
  const [screen, setScreen] = useState(1);

  // Store the bill data here
  const [bill, setBill] = useState({
    description: "",
    amount: "",
    group: ""
  });

  return (
    <div className="bg-black text-white min-h-screen flex flex-col">
      {/* Navbar */}
      {/* <Navbar onNavigate={setScreen} /> */}

      {/* Main Content */}
      <div className="flex-1 overflow-y-auto">
        {screen === 1 && (
          <AddBillEmpty
            bill={bill}
            setBill={setBill}
            onNext={() => setScreen(2)}
          />
        )}
        {screen === 2 && (
          <AddBillFilled bill={bill} onNext={() => setScreen(3)} />
        )}
        {screen === 3 && <SplitBill bill={bill} />}
        {screen === 4 && <Insights />} {/* new insights page */}
      </div>
    </div>
  );
}

export default App;
// filepath: c:\Users\PROGRESSIVE\bill-splitter\src\App.js
