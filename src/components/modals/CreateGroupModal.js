import React, { useState } from 'react';
import { useApp } from '../../context/AppContext';

const CreateGroupModal = () => {
    const { isCreateGroupModalOpen, setCreateGroupModalOpen, createGroup } = useApp();
    const [groupName, setGroupName] = useState('');
    const [category, setCategory] = useState('Other');
    const [members, setMembers] = useState([{ name: '', address: '' }]);

    const handleAddMember = () => {
        if (members.length < 4) {
            setMembers([...members, { name: '', address: '' }]);
        }
    };

    const handleMemberChange = (index, field, value) => {
        const newMembers = [...members];
        newMembers[index][field] = value;
        setMembers(newMembers);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const finalMembers = [
            { id: 'user', name: 'You', address: 'userGamerTag123' },
            ...members.map(m => ({...m, id: m.address}))
        ];
        createGroup({ name: groupName, category, members: finalMembers, expenses: [] });
        resetAndClose();
    };

    const resetAndClose = () => {
        setGroupName('');
        setCategory('Other');
        setMembers([{ name: '', address: '' }]);
        setCreateGroupModalOpen(false);
    };

    if (!isCreateGroupModalOpen) return null;

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70" onClick={resetAndClose}>
            <div className="bg-card-bg w-11/12 max-w-sm rounded-2xl p-6" onClick={e => e.stopPropagation()}>
                <h2 className="text-xl font-bold text-center mb-6">Create New Group</h2>
                <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                        <label className="block text-sm font-medium text-light-gray mb-2">Group Name</label>
                        <input type="text" value={groupName} onChange={e => setGroupName(e.target.value)} placeholder="e.g., Departmental Dues" className="w-full bg-input-bg rounded-lg p-3" required />
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-light-gray mb-2">Category</label>
                        <select value={category} onChange={e => setCategory(e.target.value)} className="w-full bg-input-bg rounded-lg p-3">
                            <option>Other</option><option>School</option><option>Hostel/Lodge</option><option>Squad</option><option>Trip</option><option>Family</option><option>Friends</option><option>Work</option>
                        </select>
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-light-gray mb-2">Group Members</label>
                        <div className="space-y-3">
                            {members.map((member, index) => (
                                <div key={index} className="grid grid-cols-2 gap-2">
                                    <input type="text" value={member.name} onChange={e => handleMemberChange(index, 'name', e.target.value)} placeholder="Member Name" className="w-full bg-input-bg rounded-lg p-2 text-sm" required />
                                    <input type="text" value={member.address} onChange={e => handleMemberChange(index, 'address', e.target.value)} placeholder="Wallet Address" className="w-full bg-input-bg rounded-lg p-2 text-sm" required />
                                </div>
                            ))}
                        </div>
                        {members.length < 4 && <button type="button" onClick={handleAddMember} className="text-solana-green text-sm mt-3">+ Add another member</button>}
                    </div>
                    <div className="flex space-x-4 pt-4">
                        <button type="button" onClick={resetAndClose} className="w-full bg-input-bg rounded-lg py-3">Cancel</button>
                        <button type="submit" className="w-full bg-solana-purple rounded-lg py-3">Create Group</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default CreateGroupModal;