import { useApp } from '../../context/AppContext';
import Avatar from '../common/Avatar';

const ProfileModal = () => {
    const { isProfileModalOpen, setProfileModalOpen, balanceVisibility, toggleBalanceVisibility, logout } = useApp();
    const userAddress = "So11...1112";

    if (!isProfileModalOpen) return null;
    
    const EyeIcon = () => (
        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" /></svg>
    );

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70" onClick={() => setProfileModalOpen(false)}>
            <div className="bg-card-bg w-11/12 max-w-sm rounded-2xl p-6" onClick={e => e.stopPropagation()}>
                <div className="text-center">
                    <div className="mx-auto w-16 h-16 mb-4"><Avatar seed={userAddress} /></div>
                    <p className="text-light-gray text-sm">Wallet Address</p>
                    <p className="font-mono text-sm break-all mb-4">{userAddress}</p>
                </div>
                <div className="text-left bg-input-bg p-4 rounded-lg mb-6">
                    <div className="flex items-center space-x-2">
                        <p className="text-light-gray text-sm">Wallet Balance</p>
                        <button onClick={() => toggleBalanceVisibility('wallet')} className="text-light-gray"><EyeIcon /></button>
                    </div>
                    {/* FIX: Wallet balance is zeroed and respects privacy toggle */}
                    <p className="text-lg font-bold text-white">{balanceVisibility.wallet ? `$0.00` : '******'}</p>
                </div>
                <button onClick={logout} className="w-full bg-danger text-white font-bold py-3 rounded-lg">Disconnect</button>
                <button onClick={() => setProfileModalOpen(false)} className="mt-4 text-light-gray w-full text-center">Close</button>
            </div>
        </div>
    );
};

export default ProfileModal;