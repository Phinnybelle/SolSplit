import { NavLink, useNavigate } from 'react-router-dom';
import { DashboardIcon, StatsIcon } from '../common/Icons';

const Sidebar = ({ onNewSplitClick }) => {
    const navigate = useNavigate();

    return (
        <nav className="w-64 bg-dark-bg border-r border-card-bg p-4 flex-col fixed h-full hidden md:flex">
            {/* FIX: Reverted to the text-based logo */}
            <div className="text-4xl font-bold mb-10 px-2">
                <span className="text-purple-600">Sol</span>
                <span className="text-green-600">Split</span>
            </div>
            
            <ul className="flex-grow space-y-2">
                <li>
                    <NavLink 
                        to="/dashboard" 
                        end 
                        className={({ isActive }) => 
                            `w-full flex items-center p-3 rounded-lg transition-colors ${
                                isActive 
                                ? 'bg-solana-purple text-white' 
                                : 'text-light-gray hover:bg-card-bg hover:text-white'
                            }`
                        }
                    >
                        <DashboardIcon /> 
                        <span>Dashboard</span>
                    </NavLink>
                </li>
                <li>
                    <NavLink 
                        to="/stats" 
                        className={({ isActive }) => 
                            `w-full flex items-center p-3 rounded-lg transition-colors ${
                                isActive 
                                ? 'bg-solana-purple text-white' 
                                : 'text-light-gray hover:bg-card-bg hover:text-white'
                            }`
                        }
                    >
                        <StatsIcon className="w-6 h-6 mr-3"/> 
                        <span>Statistics</span>
                    </NavLink>
                </li>
            </ul>

            <button 
                onClick={() => {
                    onNewSplitClick();
                    navigate('/new-split');
                }}
                className="w-full bg-solana-purple text-white font-bold py-3 rounded-lg shadow-lg shadow-solana-purple/20 hover:bg-opacity-90 transition-all">
                New Split
            </button>
        </nav>
    );
};

export default Sidebar;