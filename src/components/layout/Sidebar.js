import { NavLink, useNavigate } from 'react-router-dom';
import AppLogo from '../common/AppLogo';
import { DashboardIcon, StatsIcon } from '../common/Icons';

const Sidebar = () => {
    const navigate = useNavigate();

    return (
        <nav className="w-64 bg-dark-bg border-r border-card-bg p-4 flex-col fixed h-full hidden md:flex">
            <div className="flex items-center space-x-3 mb-10">
                <div className="w-8 h-8">
                    <AppLogo />
                </div>
                <span className="font-bold text-xl">SolSplit</span>
            </div>
            <ul className="flex-grow space-y-2">
                <li>
                    <NavLink to="/" className={({ isActive }) => `nav-link w-full flex items-center p-3 rounded-lg transition-colors ${isActive ? 'bg-card-bg text-white' : 'text-light-gray hover:bg-card-bg hover:text-white'}`}>
                        <DashboardIcon /> Dashboard
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/stats" className={({ isActive }) => `nav-link w-full flex items-center p-3 rounded-lg transition-colors ${isActive ? 'bg-card-bg text-white' : 'text-light-gray hover:bg-card-bg hover:text-white'}`}>
                        <StatsIcon className="w-6 h-6 mr-3"/> Statistics
                    </NavLink>
                </li>
            </ul>
            <button 
                onClick={() => navigate('/new-split')}
                className="w-full bg-solana-purple text-white font-bold py-3 rounded-lg shadow-lg shadow-solana-purple/20 hover:bg-opacity-90 transition-all">
                New Split
            </button>
        </nav>
    );
};

export default Sidebar;