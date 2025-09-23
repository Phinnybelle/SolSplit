import { useApp } from './context/AppContext';
import Login from './Login';
import MainLayout from './components/layout/MainLayout';
import { Routes, Route, Navigate } from 'react-router-dom';

function App() {
  const { isLoggedIn } = useApp();

  return (
    <div className="bg-dark-bg text-white font-sans min-h-screen">
      <Routes>
        {isLoggedIn ? (
          // If logged in, show the main app layout.
          <Route path="/*" element={<MainLayout />} />
        ) : (
          // If not logged in, show only the login page.
          <>
            <Route path="/login" element={<Login />} />
            <Route path="*" element={<Navigate to="/login" replace />} />
          </>
        )}
      </Routes>
    </div>
  );
}

export default App;