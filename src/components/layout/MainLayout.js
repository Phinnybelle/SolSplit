import { Routes, Route } from 'react-router-dom';
import Sidebar from './Sidebar';
import Header from './Header';
import BottomNav from './BottomNav';
import DashboardPage from '../../pages/DashboardPage';
import AddBillEmpty from '../AddBillEmpty';
import AddBillFilled from '../AddBillFilled';
import SplitBill from '../SplitBill';
import Insights from '../../pages/Insights'; // make sure the path matches your project

import ProfileModal from '../modals/ProfileModal';
import CreateGroupModal from '../modals/CreateGroupModal';
import GroupDetailsModal from '../modals/GroupDetailsModal';

// Placeholder components
const StatsPage = () => <h1 className="text-2xl">Stats Page (by Jemmy)</h1>;

const MainLayout = ({ bill, setBill, screen, setScreen }) => {
  return (
    <>
      <div className="md:flex">
        <Sidebar />

        <main className="flex-1 md:ml-64 bg-dark-bg min-h-screen">
          <Header />
          <div className="max-w-4xl mx-auto p-4 md:p-6 pb-28 md:pb-6">
            <Routes>
              <Route index element={<DashboardPage />} />
              <Route path="stats" element={<StatsPage />} />
              <Route
                path="new-split"
                element={
                  screen === 1 ? (
                    <AddBillEmpty
                      bill={bill}
                      setBill={setBill}
                      onNext={() => setScreen(2)}
                    />
                  ) : screen === 2 ? (
                    <AddBillFilled bill={bill} onNext={() => setScreen(3)} />
                  ) : screen === 3 ? (
                    <SplitBill bill={bill} />
                  ) : screen === 4 ? (
                    <Insights />
                  ) : null
                }
              />
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