import React from 'react';
import Sidebar from './components/Sidebar';

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
