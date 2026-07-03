import React from 'react';
import evolveLogo from './assets/evolve-logo.png';

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

function App() {
  return (
    <div className="flex min-h-screen bg-[#050508] font-sans">
      <Sidebar />
      <main className="flex-1 p-10 text-white relative overflow-hidden">
        {/* Subtle background glow */}
        <div className="absolute top-0 left-0 w-full h-[500px] bg-gradient-to-b from-blue-900/10 to-transparent pointer-events-none"></div>

        <header className="mb-10 relative z-10 border-b border-gray-800/50 pb-6">
           <h1 className="text-3xl font-light tracking-tight text-gray-200">
             Welcome to <span className="font-bold text-white">EVOLVE OPERATIONAL SUITE (OS)</span>
           </h1>
        </header>

        {/* Placeholder content area */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 relative z-10">
           <div className="h-48 rounded-2xl bg-gray-900/50 border border-gray-800 p-6 flex flex-col justify-between">
              <div className="w-10 h-10 rounded-full bg-blue-500/10 flex items-center justify-center mb-4">
                 <div className="w-4 h-4 rounded-full bg-blue-400"></div>
              </div>
              <div>
                 <p className="text-sm text-gray-400">Total Revenue</p>
                 <p className="text-2xl font-semibold">$124,500</p>
              </div>
           </div>

           <div className="h-48 rounded-2xl bg-gray-900/50 border border-gray-800 p-6 flex flex-col justify-between">
              <div className="w-10 h-10 rounded-full bg-purple-500/10 flex items-center justify-center mb-4">
                 <div className="w-4 h-4 rounded-full bg-purple-400"></div>
              </div>
              <div>
                 <p className="text-sm text-gray-400">Active Users</p>
                 <p className="text-2xl font-semibold">1,204</p>
              </div>
           </div>

           <div className="h-48 rounded-2xl bg-gray-900/50 border border-gray-800 p-6 flex flex-col justify-between">
              <div className="w-10 h-10 rounded-full bg-green-500/10 flex items-center justify-center mb-4">
                 <div className="w-4 h-4 rounded-full bg-green-400"></div>
              </div>
              <div>
                 <p className="text-sm text-gray-400">System Status</p>
                 <p className="text-2xl font-semibold text-green-400">Optimal</p>
              </div>
           </div>
        </div>
      </main>
    </div>
  );
}

export default App;
