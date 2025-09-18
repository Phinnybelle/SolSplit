import { useMemo } from 'react';
import { useApp } from '../context/AppContext';
import { groupIcons } from '../components/common/Icons';
import Avatar from '../components/common/Avatar';

const DashboardPage = () => {
    const { 
        groups, 
        setCreateGroupModalOpen,
        setGroupDetailsModalOpen,
        setActiveGroupDetails
    } = useApp();

    const { balances, recentTransactions } = useMemo(() => {
        const allTransactions = groups.flatMap(group => 
            group.expenses.map(exp => ({ ...exp, groupName: group.name, members: group.members }))
        ).sort((a, b) => new Date(b.date) - new Date(a.date));

        const newBalances = { owes: 3.53, owed: 66.67 }; // Using mock balances for display

        return {
            balances: newBalances,
            recentTransactions: allTransactions.slice(0, 5)
        };
    }, [groups]);

    const handleGroupClick = (group) => {
        setActiveGroupDetails(group);
        setGroupDetailsModalOpen(true);
    };

    return (
        <div className="animate-[fadeIn_0.4s_ease-out]">
            <div className="bg-card-bg p-6 rounded-2xl mb-8">
                <div className="grid grid-cols-2 gap-4">
                    <div>
                        <p className="text-light-gray text-sm">You Owe</p>
                        <p className="text-2xl font-bold text-danger">${balances.owes.toFixed(2)}</p>
                    </div>
                    <div className="text-right">
                        <p className="text-light-gray text-sm">You are Owed</p>
                        <p className="text-2xl font-bold text-solana-green">${balances.owed.toFixed(2)}</p>
                    </div>
                </div>
            </div>

            <div className="mb-8">
                <div className="flex justify-between items-center mb-4">
                    <h2 className="text-xl font-bold">Active Groups</h2>
                    <button onClick={() => setCreateGroupModalOpen(true)} className="w-8 h-8 bg-solana-purple rounded-full text-white flex items-center justify-center text-2xl">+</button>
                </div>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                   {groups.map(group => (
                        <div key={group.id} onClick={() => handleGroupClick(group)} className="bg-card-bg p-4 rounded-lg text-left cursor-pointer flex flex-col justify-between hover:bg-input-bg transition-colors">
                            <div>
                                <div className="mb-2">{groupIcons[group.category] || groupIcons['Other']}</div>
                                <h3 className="font-bold">{group.name}</h3>
                            </div>
                             <div className="flex items-center -space-x-2 mt-4">
                                {group.members.map(m => <Avatar key={m.id} seed={m.address} className="w-6 h-6 border-2 border-dark-bg" />)}
                            </div>
                        </div>
                   ))}
                </div>
            </div>
            
            <div>
                <h2 className="text-xl font-bold mb-4">Recent Transactions</h2>
                <div className="space-y-3">
                   {/* Displaying some mock recent transaction */}
                </div>
            </div>
        </div>
    );
};

export default DashboardPage;c