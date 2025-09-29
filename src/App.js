import { useState } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { useApp } from './context/AppContext';
import Login from './Login';
import Register from './Register'; // your new registration page
import MainLayout from './components/layout/MainLayout';
import InsightsPage from './components/InsightsPage';

function App() {
  const { isLoggedIn } = useApp();

  // Bill state for split workflow
  const [bill, setBill] = useState({ description: '', amount: '', group: '' });
  const [screen, setScreen] = useState(1);

  return (
    <div className="bg-dark-bg text-white font-sans min-h-screen">
      <Routes>
        {!isLoggedIn ? (
          <>
            {/* Registration page */}
            <Route path="/register" element={<Register />} />

            {/* Login page */}
            <Route path="/login" element={<Login />} />
            
            {/* Redirect all other routes to login */}
            <Route path="*" element={<Navigate to="/login" replace />} />
          </>
        ) : (
          <>
            {/* Logged in: Main app */}
            <Route
              path="/*"
              element={
                <MainLayout
                  bill={bill}
                  setBill={setBill}
                  screen={screen}
                  setScreen={setScreen}
                />
              }
            />

            
          </>
        )}
      </Routes>
    </div>
  );
}

export default App;