export default function SideNavbar() {
  return (
    <div className="w-64 h-screen bg-gray-900 text-white flex flex-col p-6">
      
      <div className="mb-8">
        <div className="text-4xl font-bold mb-6">
          <span className="text-purple-600">Sol</span>
          <span className="text-green-600">Split</span>
          </div>
        <a href="#" className="block w-full px-4 py-2 rounded hover:bg-gray-800 mb-2">
          Dashboard
        </a>
        <a href="#" className="block w-full px-4 py-2 rounded hover:bg-gray-800 mb-2">
          Statistics & Insights
        </a>
        <a href="#" className="block w-full px-4 py-2 rounded hover:bg-gray-800 mb-2">
          Profile
        </a>
      </div>

      <div className="mt-auto">
        <button className="w-full px-4 py-2 bg-purple-600 rounded hover:bg-purple-800">
          New Split
        </button>
      </div>
    </div>
  );
};