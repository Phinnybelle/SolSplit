import React, { useState } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Sidebar from './Sidebar';
import Header from './Header';
import BottomNav from './BottomNav';
import DashboardPage from '../../pages/DashboardPage';
import ProfileModal from '../modals/ProfileModal';
import CreateGroupModal from '../modals/CreateGroupModal';
import GroupDetailsModal from '../modals/GroupDetailsModal';
import AddBillEmpty from '../AddBillEmpty';
import SplitBill from '../SplitBill';

// Placeholder Stats page
const StatsPage = () => (
  <div className="animate-[fadeIn_0.4s_ease-out]">
    <h1 className="text-2xl font-bold text-white">Statistics Page (by Jemmy)</h1>
  </div>
);

const MainLayout = () => {
  const [bill, setBill] = useState({ description: '', amount: '', group: '' });
  const [screen, setScreen] = useState(1); // 1 = AddBillEmpty, 2 = SplitBill
  const [groups, setGroups] = useState([]); // user-created groups

  return (
    <>
      <div className="md:flex">
        <Sidebar setScreen={setScreen} /> {/* Sidebar triggers screen changes */}
        <main className="flex-1 md:ml-64 bg-dark-bg min-h-screen">
          <Header />
          <div className="max-w-4xl mx-auto p-4 md:p-6 pb-28 md:pb-6">
            <Routes>
              <Route path="/" element={<Navigate to="/dashboard" replace />} />
              <Route path="/dashboard" element={<DashboardPage />} />
              <Route path="/stats" element={<StatsPage />} />
              <Route
                path="/new-split"
                element={
                  screen === 1 ? (
                    <AddBillEmpty
                      bill={bill}
                      setBill={setBill}
                      onNext={() => setScreen(2)}
                      groups={groups} // pass dynamic groups
                    />
                  ) : (
                    <SplitBill 
        bill={bill} 
        members={
          groups.find(g => g.name === bill.group)?.members || []
        } 
      />
                  )
                }
              />
            </Routes>
          </div>
        </main>
        <BottomNav />
      </div>

      {/* Modals */}
      <ProfileModal />
      <CreateGroupModal setGroups={setGroups} />
      <GroupDetailsModal />
    </>
  );
};

export default MainLayout;