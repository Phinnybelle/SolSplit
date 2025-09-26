import React, { createContext, useState, useContext } from 'react';

const AppContext = createContext();
export const useApp = () => useContext(AppContext);

export const AppProvider = ({ children }) => {
  const [isLoggedIn, setLoggedIn] = useState(false);
  const [groups, setGroups] = useState([]);
  const [users, setUsers] = useState([]); // ✅ move inside component
  const [balanceVisibility, setBalanceVisibility] = useState({ wallet: true, owes: true, owed: true });
  const [isProfileModalOpen, setProfileModalOpen] = useState(false);
  const [isCreateGroupModalOpen, setCreateGroupModalOpen] = useState(false);
  const [isGroupDetailsModalOpen, setGroupDetailsModalOpen] = useState(false);
  const [activeGroupDetails, setActiveGroupDetails] = useState(null);

  const login = () => setLoggedIn(true);
  const logout = () => {
    setLoggedIn(false);
    setProfileModalOpen(false);
  };

  const registerUser = (user) => setUsers(prev => [...prev, user]); // ✅ also inside component

  const createGroup = (newGroup) => {
    if (groups.length >= 5) {
      alert("You can have a maximum of 5 groups.");
      return;
    }
    setGroups(prev => [...prev, { ...newGroup, id: Date.now() }]);
  };

  const deleteGroup = (groupId) => {
    setGroups(prev => prev.filter(group => group.id !== groupId));
  };

  const addExpense = (groupId, newExpense) => {
    setGroups(prev =>
      prev.map(group =>
        group.id === parseInt(groupId)
          ? { ...group, expenses: [...group.expenses, { ...newExpense, id: Date.now(), date: new Date().toISOString().slice(0, 10) }] }
          : group
      )
    );
  };

  const toggleBalanceVisibility = (key) => setBalanceVisibility(prev => ({ ...prev, [key]: !prev[key] }));

  const value = {
    isLoggedIn, login, logout,
    users, registerUser, // ✅ include in context
    groups, createGroup, addExpense, deleteGroup,
    balanceVisibility, toggleBalanceVisibility,
    isProfileModalOpen, setProfileModalOpen,
    isCreateGroupModalOpen, setCreateGroupModalOpen,
    isGroupDetailsModalOpen, setGroupDetailsModalOpen,
    activeGroupDetails, setActiveGroupDetails,
  };

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};