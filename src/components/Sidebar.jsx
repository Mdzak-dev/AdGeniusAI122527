import evolveLogo from '../assets/evolve-logo.png';

const Sidebar = () => {
  return (
    <div className="w-64 bg-[#0a0a0f] text-white min-h-screen p-5 flex flex-col border-r border-gray-800 shadow-2xl relative z-20">
      <div className="mb-10 mt-4">
        {/* Container matching high-end 3D metallic aesthetic */}
        <div className="h-24 w-24 mx-auto rounded-xl shadow-[0_8px_16px_rgba(0,0,0,0.6),inset_0_1px_1px_rgba(255,255,255,0.3),inset_0_-1px_1px_rgba(0,0,0,0.5)] border border-gray-600 bg-gradient-to-br from-gray-700 via-gray-800 to-gray-950 overflow-hidden flex items-center justify-center p-[2px] relative before:absolute before:inset-0 before:bg-gradient-to-b before:from-white/10 before:to-transparent before:rounded-xl">
          <img
            src={evolveLogo}
            alt="Evolve Logo"
            className="w-full h-full object-cover rounded-[10px] relative z-10"
            onError={(e) => {
              e.target.style.display = 'none';
            }}
          />
        </div>
      </div>

      <div className="flex-1">
        <div className="mb-10 text-center px-2">
          <h2 className="text-[13px] font-extrabold tracking-[0.2em] text-transparent bg-clip-text bg-gradient-to-b from-gray-100 to-gray-400 leading-snug drop-shadow-sm">
            EVOLVE OPERATIONAL SUITE (OS)
          </h2>
        </div>

        <nav className="space-y-2.5">
          <a href="#" className="block px-4 py-2.5 rounded-md bg-gradient-to-r from-gray-800/80 to-gray-800/30 border border-gray-700/50 hover:from-gray-700/80 hover:to-gray-700/30 text-sm font-semibold shadow-sm transition-all text-gray-200">Dashboard</a>
          <a href="#" className="block px-4 py-2.5 rounded-md hover:bg-gray-800/30 text-sm font-medium transition-all text-gray-400 hover:text-gray-200">Analytics</a>
          <a href="#" className="block px-4 py-2.5 rounded-md hover:bg-gray-800/30 text-sm font-medium transition-all text-gray-400 hover:text-gray-200">Settings</a>
        </nav>
      </div>

      <div className="mt-auto pt-6 pb-2 text-center relative before:absolute before:top-0 before:left-4 before:right-4 before:h-px before:bg-gradient-to-r before:from-transparent before:via-gray-700 before:to-transparent">
        <p className="text-[10px] text-gray-500 font-bold tracking-[0.25em] uppercase drop-shadow-sm">
          MD A SHAIKH POWERED
        </p>
      </div>
    </div>
  );
};

export default Sidebar;
