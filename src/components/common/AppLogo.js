const AppLogo = ({ spinning = false }) => (
  <img 
    src="/SolSplit Logo.png" 
    alt="SolSplit Logo" 
    className={spinning ? 'animate-spin' : ''} 
    style={{ animationDuration: '5s' }} 
  />
);

export default AppLogo;