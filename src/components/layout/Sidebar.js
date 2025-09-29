import { NavLink, useNavigate } from 'react-router-dom';
import { DashboardIcon, StatsIcon } from '../common/Icons';
import { Sparkles } from 'lucide-react';

const Sidebar = ({setScreen}) => {
    const navigate = useNavigate();

    return (
        <nav className="w-64 bg-dark-bg border-r border-card-bg p-4 flex-col fixed h-full hidden md:flex">
            <div className="text-4xl font-bold mb-6">
          <span className="text-purple-600">Sol</span>
          <span className="text-green-600">Split</span>
          </div>
        <ul className="flex-grow space-y-2">
                <li>
                    <NavLink to="/dashboard" end className={({ isActive }) => `nav-link w-full flex items-center p-3 rounded-lg transition-colors ${isActive ? 'bg-card-bg text-white' : 'text-light-gray hover:bg-card-bg hover:text-white'}`}>
                        <DashboardIcon /> Dashboard
                    </NavLink>
                </li>
                <li>
                    <NavLink to="stats" className={({ isActive }) => `nav-link w-full flex items-center p-3 rounded-lg transition-colors ${isActive ? 'bg-card-bg text-white' : 'text-light-gray hover:bg-card-bg hover:text-white'}`}>
                        <StatsIcon className="w-6 h-6 mr-3"/> Statistics
                    </NavLink>
                </li>

                {/* 🚀 NEW: AI Insights link */}
        <li>
          <NavLink
            to="/insights"
            className={({ isActive }) =>
              `nav-link w-full flex items-center p-3 rounded-lg transition-colors ${
                isActive
                  ? 'bg-card-bg text-white'
                  : 'text-light-gray hover:bg-card-bg hover:text-white'
              }`
            }
          >
            <Sparkles className="w-6 h-6 mr-3 text-purple-400" /> AI Insights
          </NavLink>
        </li>


            </ul>
            <button 
                onClick={() => {
                    setScreen(1);
                    navigate('/new-split')}}
                className="w-full bg-solana-purple text-white font-bold py-3 rounded-lg shadow-lg shadow-solana-purple/20 hover:bg-opacity-90 transition-all">
                New Split
            </button>
        </nav>
    );
};

export default Sidebar;
