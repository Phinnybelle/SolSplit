import { useMemo } from 'react';
import { useApp } from '../context/AppContext';
import { groupIcons } from '../components/common/Icons';
import Avatar from '../components/common/Avatar';
import AppLogo from '../components/common/AppLogo';

const DashboardPage = () => {
    const { 
        groups, 
        balanceVisibility, 
        toggleBalanceVisibility, 
        setCreateGroupModalOpen,
        setGroupDetailsModalOpen,
        setActiveGroupDetails,
        deleteGroup
    } = useApp();

    const { balances, recentTransactions } = useMemo(() => {
        // ... (calculations remain the same)
        const newBalances = { owes: 0, owed: 0 }; // Balances start at 0
        return {
            balances: newBalances,
            recentTransactions: []
        };
    }, [groups]);

    const handleGroupClick = (group) => {
        setActiveGroupDetails(group);
        setGroupDetailsModalOpen(true);
    };

    const handleDelete = (e, groupId) => {
        e.stopPropagation();
        if (window.confirm("Are you sure you want to delete this group?")) {
            deleteGroup(groupId);
        }
    };

    const EyeIcon = () => (
        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" /></svg>
    );

    return (
        <div className="animate-[fadeIn_0.4s_ease-out]">
            <div className="bg-card-bg p-6 rounded-2xl mb-8">
                <div className="grid grid-cols-2 gap-4">
                    <div>
                        <div className="flex items-center space-x-2">
                            <p className="text-light-gray text-sm">You Owe</p>
                            <button onClick={() => toggleBalanceVisibility('owes')} className="text-light-gray"><EyeIcon /></button>
                        </div>
                        <p className="text-2xl font-bold text-danger">{balanceVisibility.owes ? `$${balances.owes.toFixed(2)}` : '******'}</p>
                    </div>
                    <div className="text-right">
                         <div className="flex items-center justify-end space-x-2">
                            <p className="text-light-gray text-sm">You are Owed</p>
                            <button onClick={() => toggleBalanceVisibility('owed')} className="text-light-gray"><EyeIcon /></button>
                        </div>
                        <p className="text-2xl font-bold text-solana-green">{balanceVisibility.owed ? `$${balances.owed.toFixed(2)}` : '******'}</p>
                    </div>
                </div>
            </div>

            <div className="mb-8">
                <div className="flex justify-between items-center mb-4">
                    <h2 className="text-xl font-bold">Active Groups</h2>
                    <button onClick={() => setCreateGroupModalOpen(true)} className="w-8 h-8 bg-solana-purple rounded-full text-white flex items-center justify-center text-2xl">+</button>
                </div>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                   {groups.length > 0 ? groups.map(group => (
                        <div key={group.id} onClick={() => handleGroupClick(group)} className="group bg-card-bg p-4 rounded-lg text-left cursor-pointer relative">
                            <button onClick={(e) => handleDelete(e, group.id)} className="absolute top-2 right-2 w-6 h-6 rounded-full bg-danger text-white flex items-center justify-center opacity-0 group-hover:opacity-100">&times;</button>
                            <div><div className="mb-2">{groupIcons[group.category] || groupIcons['Other']}</div><h3 className="font-bold">{group.name}</h3></div>
                             <div className="flex items-center -space-x-2 mt-4">{group.members.map(m => <Avatar key={m.id} seed={m.address} className="w-6 h-6 border-2 border-dark-bg" />)}</div>
                        </div>
                   )) : <p className="text-light-gray col-span-full">No active groups. Click '+' to create one!</p>}
                </div>
            </div>
            
            <div>
                <h2 className="text-xl font-bold mb-4">Recent Transactions</h2>
                <div className="space-y-3">
                   {recentTransactions.length > 0 ? recentTransactions.map(tx => (
                       <div key={tx.id}>{/* Transaction item */}</div>
                   )) : <p className="text-light-gray">No recent transactions yet.</p>}
                </div>
            </div>
        </div>
    );
};
export default DashboardPage;