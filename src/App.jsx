import React from 'react';
import Sidebar from './components/Sidebar';
import StatCard from './components/StatCard';

const statData = [
  { title: "Total Revenue", value: "$124,500", outerColorClass: "bg-blue-500/10", innerColorClass: "bg-blue-400" },
  { title: "Active Users", value: "1,204", outerColorClass: "bg-purple-500/10", innerColorClass: "bg-purple-400" },
  { title: "System Status", value: "Optimal", outerColorClass: "bg-green-500/10", innerColorClass: "bg-green-400", valueClass: "text-green-400" },
];

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
           {statData.map((stat, index) => (
             <StatCard key={index} {...stat} />
           ))}
        </div>
      </main>
    </div>
  );
}

export default App;
