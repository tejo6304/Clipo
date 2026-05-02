import React from 'react';
import logo from '../assets/logo-clipo.png';

const Header = () => {
  return (
    <nav className="bg-black dark:bg-black font-mono uppercase tracking-tighter text-xs docked full-width top-0 border-b-2 border-zinc-800 dark:border-zinc-900 shadow-[0_0_20px_rgba(139,92,246,0.15)] flex justify-between items-center w-full px-6 py-3 fixed z-50">
      <div className="flex items-center gap-8">
        <img src={logo} alt="Clipo Logo" className="h-8" />
        <div className="hidden md:flex gap-6">
          <a className="text-violet-400 border-b-2 border-violet-500 pb-1" href="#">Campaigns</a>
          <a className="text-zinc-500 hover:text-zinc-300 transition-colors" href="#">Marketplace</a>
          <a className="text-zinc-500 hover:text-zinc-300 transition-colors" href="#">Analytics</a>
        </div>
      </div>
      <div className="flex items-center gap-4">
        <span className="material-symbols-outlined text-zinc-500 hover:text-violet-400 cursor-pointer">notifications</span>
       </div>
    </nav>
  );
};

export default Header;
