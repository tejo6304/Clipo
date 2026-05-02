import React from 'react';

const Footer = () => {
  return (
    <footer className="w-full py-8 px-10 flex justify-between items-center bg-black dark:bg-black border-t border-zinc-900 font-mono text-[10px] uppercase opacity-60">
      <div className="flex items-center gap-6">
        <span className="text-zinc-400 tracking-tighter">// SYSTEM_ACCESS: CLIPPER PLATFORM 2024</span>
        <div className="hidden md:flex gap-4">
          <a className="text-zinc-700 hover:text-violet-500" href="#">Docs</a>
          <a className="text-zinc-700 hover:text-violet-500" href="#">Security</a>
          <a className="text-zinc-700 hover:text-violet-500" href="#">Legal</a>
        </div>
      </div>
      <div className="flex items-center gap-4">
        <span className="text-emerald-500">CONNECTED</span>
        <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></div>
      </div>
    </footer>
  );
};

export default Footer;
