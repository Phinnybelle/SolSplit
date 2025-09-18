import React, { createContext, useState, useContext } from 'react';

const AppContext = createContext();
export const useApp = () => useContext(AppContext);

export const AppProvider = ({ children }) => {
  const [groups, setGroups] = useState([
    {
      id: 1, name: "UNILAG Roomies", category: "Home",
      members: [
        { id: 'user', name: 'You', address: 'userGamerTag123' },
        { id: 'AbiolaWallet', name: 'Abiola', address: 'CryptoKing_Abi' },
        { id: 'ChineduWallet', name: 'Chinedu', address: 'NFTMaster_Du' }
      ],
      expenses: [
        { id: 1, description: "New Monitor", amount: 100, paidBy: "user", settled: false, date: "2025-09-14" },
        { id: 2, description: "Groceries", amount: 30, paidBy: "AbiolaWallet", settled: true, date: "2025-09-12" },
      ]
    },
  ]);

  const [isCreateGroupModalOpen, setCreateGroupModalOpen] = useState(false);
  const [isGroupDetailsModalOpen, setGroupDetailsModalOpen] = useState(false);
  const [isProfileModalOpen, setProfileModalOpen] = useState(false);
  const [activeGroupDetails, setActiveGroupDetails] = useState(null);

  const createGroup = (newGroup) => {
    if (groups.length >= 5) {
      alert("You can have a maximum of 5 groups.");
      return;
    }
    setGroups(prev => [...prev, { ...newGroup, id: Date.now() }]);
  };

  const value = {
    groups, createGroup,
    isCreateGroupModalOpen, setCreateGroupModalOpen,
    isGroupDetailsModalOpen, setGroupDetailsModalOpen,
    isProfileModalOpen, setProfileModalOpen,
    activeGroupDetails, setActiveGroupDetails,
  };

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};