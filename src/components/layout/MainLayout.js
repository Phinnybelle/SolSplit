import { Routes, Route, Navigate } from 'react-router-dom';
import Sidebar from './Sidebar';
import Header from './Header';
import BottomNav from './BottomNav';
import DashboardPage from '../../pages/DashboardPage';
import ProfileModal from '../modals/ProfileModal';
import CreateGroupModal from '../modals/CreateGroupModal';
import GroupDetailsModal from '../modals/GroupDetailsModal';

// Placeholder components for your teammates' parts
const StatsPage = () => <h1 className="text-2xl">Stats Page (by Jemmy)</h1>;
const NewSplitPage = () => <h1 className="text-2xl">New Split Page (by Jemmy)</h1>;

const MainLayout = () => {
  return (
    <>
      <div className="md:flex">
        <Sidebar />
        <main className="flex-1 md:ml-64 bg-dark-bg min-h-screen">
          <Header />
          <div className="max-w-4xl mx-auto p-4 md:p-6 pb-28 md:pb-6">
            <Routes>
              <Route path="/" element={<DashboardPage />} />
              <Route path="/dashboard" element={<Navigate replace to="/" />} />
              <Route path="/stats" element={<StatsPage />} />
              <Route path="/new-split" element={<NewSplitPage />} />
            </Routes>
          </div>
        </main>
        <BottomNav />
      </div>
      
      {/* Modals */}
      <ProfileModal />
      <CreateGroupModal />
      <GroupDetailsModal />
    </>
  );
};

export default MainLayout;