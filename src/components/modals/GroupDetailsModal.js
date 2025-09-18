import { useApp } from '../../context/AppContext';
import Avatar from '../common/Avatar';

const GroupDetailsModal = () => {
    const { isGroupDetailsModalOpen, setGroupDetailsModalOpen, activeGroupDetails } = useApp();

    if (!isGroupDetailsModalOpen || !activeGroupDetails) return null;

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70" onClick={() => setGroupDetailsModalOpen(false)}>
            <div className="bg-card-bg w-11/12 max-w-sm rounded-2xl p-6" onClick={e => e.stopPropagation()}>
                <h2 className="text-xl font-bold text-center mb-6">{activeGroupDetails.name}</h2>
                <div className="space-y-3 max-h-64 overflow-y-auto">
                    {activeGroupDetails.members.map(member => (
                        <div key={member.id} className="flex items-center bg-input-bg p-2 rounded-lg">
                           <Avatar seed={member.address} className="w-10 h-10 mr-3 flex-shrink-0" />
                            <div className="overflow-hidden">
                                <p className="font-bold truncate">{member.name}</p>
                                <p className="text-xs text-light-gray font-mono truncate">{member.address}</p>
                            </div>
                        </div>
                    ))}
                </div>
                <button onClick={() => setGroupDetailsModalOpen(false)} className="mt-6 w-full bg-input-bg rounded-lg py-3">Close</button>
            </div>
        </div>
    );
};

export default GroupDetailsModal;