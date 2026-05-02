import React, { useState } from 'react';
import './index.css';
import Header from './components/Header';
import Footer from './components/Footer';
import BusinessAuthModal from './components/BusinessAuthModal';

function App() {
  const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);
  return (
    <>
      {/* TopNavBar */}
      <Header />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-6 overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full pointer-events-none">
          <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-violet-600/10 blur-[120px]"></div>
          <div className="absolute bottom-[10%] right-[-10%] w-[30%] h-[30%] bg-violet-900/20 blur-[100px]"></div>
        </div>
        <div className="max-w-7xl mx-auto text-center relative z-10">
          <h1 className="font-headline text-5xl md:text-8xl font-bold tracking-tighter leading-tight mb-8">
            TURN CONTENT INTO<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-400 to-violet-600">GROWTH MACHINES</span>
          </h1>
          <p className="max-w-2xl mx-auto text-zinc-400 text-lg md:text-xl mb-10 font-light leading-relaxed">
            Scale your reach with a decentralized network of clippers. Our clip-based system automates distribution, boosts retention, and drives viral expansion.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button 
              onClick={() => setIsAuthModalOpen(true)}
              className="w-full sm:w-auto px-10 py-4 bg-violet-600 hover:bg-violet-500 text-white font-bold transition-all uppercase tracking-widest text-sm shadow-[0_0_30px_rgba(139,92,246,0.3)]"
            >
              Start Growing now
            </button>
            <button className="w-full sm:w-auto px-10 py-4 bg-transparent border border-zinc-700 hover:border-violet-400 text-white font-bold transition-all uppercase tracking-widest text-sm">
              Join as a creator
            </button>
          </div>
        </div>
      </section>

      {/* Dashboard Preview */}
      <section className="px-6 py-10 max-w-7xl mx-auto">
        <div className="glass-panel border border-zinc-800 p-2 md:p-4 shadow-2xl">
          <div className="flex items-center gap-2 mb-4 px-2">
            <div className="w-2 h-2 bg-red-500"></div>
            <div className="w-2 h-2 bg-amber-500"></div>
            <div className="w-2 h-2 bg-emerald-500"></div>
            <div className="ml-4 font-mono text-[10px] text-zinc-500 uppercase tracking-widest">clipper_terminal_main_node</div>
          </div>
          <div className="grid grid-cols-12 gap-4">
            {/* Sidebar Fake */}
            <div className="hidden lg:block col-span-2 space-y-4 border-r border-zinc-800 pr-4">
              <div className="h-4 w-full bg-zinc-800"></div>
              <div className="h-4 w-3/4 bg-zinc-900"></div>
              <div className="h-4 w-5/6 bg-zinc-900"></div>
              <div className="h-4 w-2/3 bg-zinc-900"></div>
            </div>
            {/* Main Grid */}
            <div className="col-span-12 lg:col-span-10 grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="col-span-1 md:col-span-2 glass-panel p-6 border border-violet-500/20">
                <div className="flex justify-between mb-8">
                  <div>
                    <div className="font-mono text-[10px] text-violet-400 mb-1 tracking-widest uppercase">Global Views</div>
                    <div className="text-3xl font-headline font-bold">12.4M</div>
                  </div>
                  <div className="text-right">
                    <div className="font-mono text-[10px] text-emerald-400 mb-1 tracking-widest uppercase">Growth Rate</div>
                    <div className="text-3xl font-headline font-bold text-emerald-400">+244%</div>
                  </div>
                </div>
                <div className="h-48 flex items-end gap-1">
                  <div className="w-full bg-zinc-800 h-[20%]"></div>
                  <div className="w-full bg-zinc-800 h-[35%]"></div>
                  <div className="w-full bg-violet-600 h-[65%] shadow-[0_0_15px_rgba(139,92,246,0.5)]"></div>
                  <div className="w-full bg-zinc-800 h-[45%]"></div>
                  <div className="w-full bg-zinc-800 h-[30%]"></div>
                  <div className="w-full bg-violet-400 h-[85%] shadow-[0_0_15px_rgba(189,157,255,0.5)]"></div>
                  <div className="w-full bg-zinc-800 h-[55%]"></div>
                </div>
              </div>
              <div className="space-y-4">
                <div className="glass-panel p-4 border border-zinc-800">
                  <div className="font-mono text-[10px] text-zinc-500 mb-2 uppercase tracking-widest">Active Clippers</div>
                  <div className="text-2xl font-headline font-bold">452</div>
                </div>
                <div className="glass-panel p-4 border border-zinc-800">
                  <div className="font-mono text-[10px] text-zinc-500 mb-2 uppercase tracking-widest">Conversion</div>
                  <div className="text-2xl font-headline font-bold">8.2%</div>
                </div>
                <div className="bg-violet-600 p-4">
                  <div className="font-mono text-[10px] text-white/70 mb-2 uppercase tracking-widest">System Load</div>
                  <div className="text-2xl font-headline font-bold">OPTIMAL</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-24 px-6 max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <h2 className="font-headline text-4xl font-bold tracking-tighter mb-4">DECENTRALISED GROWTH</h2>
          <div className="w-20 h-1 bg-violet-500 mx-auto"></div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-0">
          {/* Step 1 */}
          <div className="group border border-zinc-800 p-10 hover:bg-zinc-900/30 transition-all">
            <div className="font-mono text-violet-500 text-sm mb-6">01 // INTAKE</div>
            <h3 className="font-headline text-2xl font-bold mb-4 tracking-tight">PASTE LINK</h3>
            <p className="text-zinc-500 leading-relaxed font-light mb-8">Drop your long-form content URL. Our AI identifies high-engagement potential timestamps automatically.</p>
            <div className="w-12 h-12 flex items-center justify-center bg-zinc-900 border border-zinc-800 group-hover:border-violet-500 group-hover:text-violet-400 transition-colors">
              <span className="material-symbols-outlined">link</span>
            </div>
          </div>
          {/* Step 2 */}
          <div className="group border border-zinc-800 p-10 hover:bg-zinc-900/30 transition-all bg-zinc-900/10">
            <div className="font-mono text-violet-500 text-sm mb-6">02 // DISTRIBUTION</div>
            <h3 className="font-headline text-2xl font-bold mb-4 tracking-tight">CLIPPERS POST</h3>
            <p className="text-zinc-500 leading-relaxed font-light mb-8">Verified clippers transform segments into high-impact shorts, Reels, and TikToks, deploying them across the grid.</p>
            <div className="w-12 h-12 flex items-center justify-center bg-zinc-900 border border-zinc-800 group-hover:border-violet-500 group-hover:text-violet-400 transition-colors">
              <span className="material-symbols-outlined">share</span>
            </div>
          </div>
          {/* Step 3 */}
          <div className="group border border-zinc-800 p-10 hover:bg-zinc-900/30 transition-all">
            <div className="font-mono text-violet-500 text-sm mb-6">03 // ANALYSIS</div>
            <h3 className="font-headline text-2xl font-bold mb-4 tracking-tight">TRACK GROWTH</h3>
            <p className="text-zinc-500 leading-relaxed font-light mb-8">Real-time metrics dashboard tracks views, reach, and conversion back to your primary ecosystem.</p>
            <div className="w-12 h-12 flex items-center justify-center bg-zinc-900 border border-zinc-800 group-hover:border-violet-500 group-hover:text-violet-400 transition-colors">
              <span className="material-symbols-outlined">query_stats</span>
            </div>
          </div>
        </div>
      </section>

      {/* Social Proof / Metrics */}
      <section className="py-24 bg-zinc-950/50 border-y border-zinc-900">
        <div className="max-w-7xl mx-auto px-6">
          <div class="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="font-headline text-5xl font-bold tracking-tighter mb-8 leading-none">THE NETWORK EFFECT IN ACTION</h2>
              <div className="grid grid-cols-2 gap-4">
                <div className="p-6 border border-zinc-800">
                  <div className="text-4xl font-headline font-bold text-violet-400 mb-1">10M+</div>
                  <div className="font-mono text-[10px] text-zinc-500 tracking-widest uppercase">Organic Views</div>
                </div>
                <div className="p-6 border border-zinc-800">
                  <div className="text-4xl font-headline font-bold text-violet-400 mb-1">15k+</div>
                  <div className="font-mono text-[10px] text-zinc-500 tracking-widest uppercase">Active Nodes</div>
                </div>
              </div>
            </div>
            <div className="space-y-6">
              <div className="glass-panel p-8 relative">
                <span className="material-symbols-outlined absolute top-4 right-4 text-zinc-800 text-4xl">format_quote</span>
                <p className="text-zinc-300 italic mb-6 leading-relaxed">"Clipper decentralized my marketing. Within 48 hours of pasting my latest podcast link, I had over 50 variations circulating on TikTok with millions of hits."</p>
                <div className="flex items-center gap-4">
                  <img alt="Creator" className="w-12 h-12 rounded-none border border-violet-500/30" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCyt7xRIHnHf1f_Y0B1LnIwjqcMm8Mjbnf-U_Pe89hN145Bx-9agO6jlVy4Blgq2deIumtbfUsZVbKrSpwVrTFS26eEjQOLqvCNJbrBzl3XOfU8NODkkkAQNTwkHt6s5aHKNU-n8atkiZwI3LEgd12-K2Y9vWf74ZOi11MHqPEs9SD3dpVkQRQhndUMZeZLTrPhjSXKu8LmzsLddmX96eHJHYHxIw3icKR3WqZt9D4VXOkMOMZcoWh6ltp0weas5PiygFIQ2dBFIHk" />
                  <div>
                    <div className="font-bold text-sm tracking-tight">ALEX RIVERA</div>
                    <div className="font-mono text-[10px] text-violet-400 uppercase tracking-widest">Growth Lead @ NeuralStream</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="py-24 px-6 max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="font-headline text-4xl font-bold tracking-tighter mb-4">ACCESS TIERS</h2>
          <p className="text-zinc-500 font-mono text-xs uppercase tracking-widest">Select your resource allocation</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {/* Free Tier */}
          <div className="p-10 border border-zinc-800 hover:border-zinc-700 transition-all flex flex-col">
            <div className="font-mono text-zinc-500 text-xs mb-4 uppercase tracking-widest">Standard_Package</div>
            <div className="mb-8">
              <span className="text-4xl font-headline font-bold">$0</span>
              <span className="text-zinc-600 font-mono text-xs">/MONTH</span>
            </div>
            <ul className="space-y-4 mb-10 flex-grow">
              <li className="flex items-center gap-3 text-zinc-400 text-sm">
                <span className="material-symbols-outlined text-zinc-700 text-lg">check_circle</span>
                1 Active Campaign
              </li>
              <li className="flex items-center gap-3 text-zinc-400 text-sm">
                <span className="material-symbols-outlined text-zinc-700 text-lg">check_circle</span>
                5 Verified Clippers
              </li>
              <li className="flex items-center gap-3 text-zinc-400 text-sm">
                <span className="material-symbols-outlined text-zinc-700 text-lg">check_circle</span>
                Basic Analytics Node
              </li>
            </ul>
            <button className="w-full py-4 border border-zinc-700 text-zinc-400 hover:text-white hover:border-white transition-all uppercase tracking-widest text-xs font-bold">
              Initialize Free
            </button>
          </div>
          {/* Pro Tier */}
          <div className="p-10 border-2 border-violet-600 bg-violet-600/5 relative flex flex-col overflow-hidden">
            <div className="absolute top-0 right-0 bg-violet-600 text-white font-mono text-[8px] px-3 py-1 uppercase tracking-[0.2em]">Recommended</div>
            <div className="font-mono text-violet-400 text-xs mb-4 uppercase tracking-widest">Enterprise_Node</div>
            <div className="mb-8 text-violet-400">
              <span className="text-4xl font-headline font-bold">$49</span>
              <span className="font-mono text-xs opacity-60">/MONTH</span>
            </div>
            <ul className="space-y-4 mb-10 flex-grow">
              <li className="flex items-center gap-3 text-zinc-200 text-sm">
                <span className="material-symbols-outlined text-violet-500 text-lg">verified</span>
                Unlimited Campaigns
              </li>
              <li className="flex items-center gap-3 text-zinc-200 text-sm">
                <span className="material-symbols-outlined text-violet-500 text-lg">verified</span>
                Priority Clipper Access
              </li>
              <li className="flex items-center gap-3 text-zinc-200 text-sm">
                <span className="material-symbols-outlined text-violet-500 text-lg">verified</span>
                Advanced Terminal Metrics
              </li>
              <li className="flex items-center gap-3 text-zinc-200 text-sm">
                <span className="material-symbols-outlined text-violet-500 text-lg">verified</span>
                API Interface Access
              </li>
            </ul>
            <button className="w-full py-4 bg-violet-600 hover:bg-violet-500 text-white transition-all uppercase tracking-widest text-xs font-bold shadow-[0_0_20px_rgba(139,92,246,0.4)]">
              Upgrade to Pro
            </button>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-32 px-6 relative overflow-hidden text-center">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-violet-900/10 to-transparent"></div>
        <div className="max-w-4xl mx-auto relative z-10">
          <h2 className="font-headline text-5xl md:text-7xl font-bold tracking-tighter mb-8">READY TO SCALE?</h2>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <a className="group flex items-center gap-4 text-2xl font-headline font-bold hover:text-violet-400 transition-colors" href="#">
              START YOUR CAMPAIGN
              <span className="material-symbols-outlined transition-transform group-hover:translate-x-2">arrow_forward</span>
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
      <BusinessAuthModal isOpen={isAuthModalOpen} onClose={() => setIsAuthModalOpen(false)} />
    </>
  );
}

export default App;
