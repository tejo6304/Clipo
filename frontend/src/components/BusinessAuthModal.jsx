import React, { useState } from 'react';

const BusinessAuthModal = ({ isOpen, onClose }) => {
  const [isLogin, setIsLogin] = useState(true);
  const [formData, setFormData] = useState({ companyName: '', email: '', password: '', confirmPassword: '', role: '', businessType: '' });
  const [error, setError] = useState('');

  if (!isOpen) return null;

  const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');

    if (!isLogin && formData.password !== formData.confirmPassword) {
      setError('Passwords do not match');
      return;
    }

    const endpoint = isLogin ? '/api/business/login' : '/api/business/signup';
    
    try {
      const res = await fetch(`${import.meta.env.VITE_API_URL || 'http://localhost:5003'}${endpoint}`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(isLogin ? { email: formData.email, password: formData.password } : formData)
      });
      
      const data = await res.json();
      
      if (!res.ok) {
        throw new Error(data.message || 'Something went wrong');
      }
      
      // Store token
      localStorage.setItem('businessToken', data.token);
      alert(isLogin ? 'Login successful!' : 'Signup successful!');
      onClose();
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/80 backdrop-blur-sm px-4">
      <div className="relative w-full max-w-md p-8 bg-black border border-violet-500/30 shadow-[0_0_40px_rgba(139,92,246,0.15)]">
        <button onClick={onClose} className="absolute top-4 right-4 text-zinc-500 hover:text-white transition-colors">
          <span className="material-symbols-outlined">close</span>
        </button>
        
        <div className="text-center mb-8">
          <h2 className="text-2xl font-headline font-bold text-violet-400 mb-2">
            {isLogin ? 'BUSINESS LOGIN' : 'BUSINESS SIGNUP'}
          </h2>
          <p className="text-zinc-500 font-mono text-xs uppercase tracking-widest">
            {isLogin ? 'Access your growth terminal' : 'Initialize new node'}
          </p>
        </div>

        {error && (
          <div className="mb-4 p-3 bg-red-500/10 border border-red-500/50 text-red-400 text-xs font-mono uppercase text-center">
            {error}
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-4">
          {!isLogin && (
            <>
              <div>
                <label className="block text-xs font-mono text-zinc-400 uppercase mb-2">Company Name</label>
                <input 
                  type="text" 
                  name="companyName"
                  value={formData.companyName}
                  onChange={handleChange}
                  required
                  className="w-full bg-zinc-900 border border-zinc-800 focus:border-violet-500 focus:ring-1 focus:ring-violet-500 text-white px-4 py-3 outline-none transition-all font-mono text-sm"
                  placeholder="NEURALSTREAM INC."
                />
              </div>
              <div>
                <label className="block text-xs font-mono text-zinc-400 uppercase mb-2">Role</label>
                <input 
                  type="text" 
                  name="role"
                  value={formData.role}
                  onChange={handleChange}
                  required
                  className="w-full bg-zinc-900 border border-zinc-800 focus:border-violet-500 focus:ring-1 focus:ring-violet-500 text-white px-4 py-3 outline-none transition-all font-mono text-sm"
                  placeholder="e.g. MARKETING MANAGER"
                />
              </div>
              <div>
                <label className="block text-xs font-mono text-zinc-400 uppercase mb-2">Business Type</label>
                <select 
                  name="businessType"
                  value={formData.businessType}
                  onChange={handleChange}
                  required
                  className="w-full bg-zinc-900 border border-zinc-800 focus:border-violet-500 focus:ring-1 focus:ring-violet-500 text-white px-4 py-3 outline-none transition-all font-mono text-sm"
                >
                  <option value="" disabled>SELECT_INDUSTRY</option>
                  <option value="E-commerce">E-commerce</option>
                  <option value="SaaS">SaaS / Software</option>
                  <option value="Agency">Agency</option>
                  <option value="Media">Media / Entertainment</option>
                  <option value="Other">Other</option>
                </select>
              </div>
            </>
          )}
          <div>
            <label className="block text-xs font-mono text-zinc-400 uppercase mb-2">Email Address</label>
            <input 
              type="email" 
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full bg-zinc-900 border border-zinc-800 focus:border-violet-500 focus:ring-1 focus:ring-violet-500 text-white px-4 py-3 outline-none transition-all font-mono text-sm"
              placeholder="SYSTEM@COMPANY.COM"
            />
          </div>
          <div>
            <label className="block text-xs font-mono text-zinc-400 uppercase mb-2">Password</label>
            <input 
              type="password" 
              name="password"
              value={formData.password}
              onChange={handleChange}
              required
              className="w-full bg-zinc-900 border border-zinc-800 focus:border-violet-500 focus:ring-1 focus:ring-violet-500 text-white px-4 py-3 outline-none transition-all font-mono text-sm"
              placeholder="••••••••••••"
            />
          </div>
          {!isLogin && (
            <div>
              <label className="block text-xs font-mono text-zinc-400 uppercase mb-2">Confirm Password</label>
              <input 
                type="password" 
                name="confirmPassword"
                value={formData.confirmPassword}
                onChange={handleChange}
                required
                className="w-full bg-zinc-900 border border-zinc-800 focus:border-violet-500 focus:ring-1 focus:ring-violet-500 text-white px-4 py-3 outline-none transition-all font-mono text-sm"
                placeholder="••••••••••••"
              />
            </div>
          )}
          
          <button 
            type="submit"
            className="w-full mt-6 py-4 bg-violet-600 hover:bg-violet-500 text-white font-bold transition-all uppercase tracking-widest text-sm shadow-[0_0_20px_rgba(139,92,246,0.3)]"
          >
            {isLogin ? 'Initialize Login' : 'Execute Signup'}
          </button>
        </form>

        <div className="mt-6 text-center">
          <button 
            onClick={() => { setIsLogin(!isLogin); setError(''); }}
            className="text-xs font-mono text-zinc-500 hover:text-violet-400 transition-colors uppercase tracking-widest"
          >
            {isLogin ? 'Need a node? Register here' : 'Have a node? Login here'}
          </button>
        </div>
      </div>
    </div>
  );
};

export default BusinessAuthModal;
