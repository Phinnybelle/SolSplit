import { useApp } from '../../context/AppContext';
import Avatar from '../common/Avatar';

const ProfileModal = () => {
    const { isProfileModalOpen, setProfileModalOpen, logout } = useApp();
    const userAddress = "So11...1112"; // Mock address

    if (!isProfileModalOpen) return null;

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70" onClick={() => setProfileModalOpen(false)}>
            <div className="bg-card-bg w-11/12 max-w-sm rounded-2xl p-6" onClick={e => e.stopPropagation()}>
                <div className="text-center">
                    <div className="mx-auto w-16 h-16 mb-4"><Avatar seed={userAddress} /></div>
                    <p className="text-light-gray text-sm">Wallet Address</p>
                    <p className="font-mono text-sm break-all mb-4">{userAddress}</p>
                </div>
                <div className="text-left bg-input-bg p-4 rounded-lg mb-6">
                    <p className="text-light-gray text-sm">Wallet Balance</p>
                    <p className="text-lg font-bold text-white">$1,250.75</p>
                </div>
                <button onClick={logout} className="w-full bg-danger text-white font-bold py-3 rounded-lg">
                    Disconnect
                </button>
                <button onClick={() => setProfileModalOpen(false)} className="mt-4 text-light-gray w-full text-center">Close</button>
            </div>
        </div>
    );
};

export default ProfileModal;