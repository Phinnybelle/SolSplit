import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./Login";
import MainLayout from "./components/layout/MainLayout";
import { AppProvider } from "./context/AppContext";

// Import the AddBill components for passing state (optional, if needed inside MainLayout)
import AddBillEmpty from "./components/AddBillEmpty";
import AddBillFilled from "./components/AddBillFilled";
import SplitBill from "./components/SplitBill";

function App() {
  // Bill state shared across AddBill pages
  const [bill, setBill] = useState({ description: "", amount: "", group: "" });
  const [screen, setScreen] = useState(1);

  return (
    <AppProvider>
      <Router>
        <Routes>
          {/* Login page */}
          <Route path="/" element={<Login />} />

          {/* Main app routes */}
          <Route
            path="/dashboard/*"
            element={
              <div className="bg-dark-bg text-white font-sans min-h-screen">
                <MainLayout
                  bill={bill}          // pass bill state to MainLayout
                  setBill={setBill}
                  screen={screen}      // optional, if you want MainLayout to control screens
                  setScreen={setScreen}
                />
              </div>
            }
          />
        </Routes>
      </Router>
    </AppProvider>
  );
}

export default App;