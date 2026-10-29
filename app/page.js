'use client';

import { useState } from 'react';

export default function Home() {
  const [city, setCity] = useState('Austin');
  const [weight, setWeight] = useState(2);
  const [result, setResult] = useState(null);
  const [clippyMsg, setClippyMsg] = useState('It looks like you\'re building the future. Want help matching the closest vehicle? 💩🐦');

  const matchVehicle = () => {
    if (weight > 10) {
      setResult({ error: 'Cab takes documents and small parcels at 10 lb and under. People are not a cargo class.' });
      return;
    }
    const vehicles = city === 'Austin'
      ? [
          { name: 'Tesla Cybercab', eta: Math.floor(Math.random() * 8) + 3, capacity: '2 seats / parcel tray', color: '#FFD700' },
          { name: 'Waymo', eta: Math.floor(Math.random() * 10) + 4, capacity: '4 seats / cargo', color: '#4285F4' },
        ]
      : [
          { name: 'Waymo', eta: Math.floor(Math.random() * 7) + 3, capacity: '4 seats / cargo', color: '#4285F4' },
        ];
    const winner = vehicles.reduce((a, b) => a.eta < b.eta ? a : b);
    setResult({ winner, all: vehicles, city });
    setClippyMsg(`Closest win: ${winner.name} in ${winner.eta} min. Spirit of the old Clippy reborn in lime-green phoenix. 🐦✨`);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-obsidian via-black to-[#001100] text-white font-sans">
      <header className="relative overflow-hidden py-16 px-6 text-center border-b border-lime/30">
        <div className="absolute inset-0 opacity-20 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-lime/40 via-transparent to-transparent"></div>
        <h1 className="text-6xl md:text-8xl font-black tracking-tighter text-lime drop-shadow-[0_0_20px_#39FF14]">
          gnomies.io
        </h1>
        <p className="mt-4 text-2xl md:text-3xl text-lime/90">Closest vehicle wins. Item-drop desk. Not people cargo.</p>
        <p className="mt-2 text-lg opacity-80">Austin Cybercab 🔥 + Waymo Austin/LA · Documents & ≤10 lb parcels</p>
        <div className="mt-8 inline-block px-6 py-3 bg-lime text-black font-bold rounded-full text-xl animate-pulse">
          A + B → C/D (7-panel gate pending)
        </div>
      </header>

      <section className="py-12 px-6 max-w-6xl mx-auto grid md:grid-cols-2 gap-8 items-center">
        <div className="text-center">
          <div className="inline-block p-4 border-4 border-lime rounded-3xl bg-black/50 shadow-[0_0_40px_#39FF14]">
            <div className="w-64 h-64 mx-auto bg-gradient-to-br from-lime to-yellow-400 rounded-2xl flex items-center justify-center text-6xl">
              🐦✨
            </div>
            <p className="mt-4 text-lime font-bold">Phoenix Clippy · Spirit · Mouth · Mecha-Brain · Dookie Energy</p>
          </div>
        </div>
        <div className="bg-black/60 border border-lime/40 rounded-2xl p-6">
          <h2 className="text-3xl font-bold text-lime mb-4">Phoenix Clippy Desktop</h2>
          <p className="mb-4">Learns RSI/HSI from your clicks, browser movements & accessible Siri data. Replicates actions. Local-first LLM.</p>
          <div className="bg-lime/10 border-l-4 border-lime p-4 rounded mb-4 italic">
            "{clippyMsg}"
          </div>
          <ul className="space-y-2 text-sm">
            <li>• Open Hands CLI + Vercel CLI</li>
            <li>• Ganesh-AI-Brain + 25SHA Web3 Wallet ID artifact</li>
            <li>• Token recycle · Episodic → Semantic → Procedural memory</li>
            <li>• Bird of paradise / Phoenix with mouth required</li>
          </ul>
        </div>
      </section>

      <section className="py-12 px-6 bg-black/40 border-y border-lime/20">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-black text-center text-lime mb-8">Item-Drop Desk · Closest Wins</h2>
          <p className="text-center mb-6 opacity-80">People are not a cargo class. Cab takes documents and small parcels ≤10 lb.</p>
          
          <div className="grid md:grid-cols-3 gap-4 mb-6">
            <div>
              <label className="block text-lime mb-2">City</label>
              <select value={city} onChange={e => setCity(e.target.value)} className="w-full bg-black border border-lime rounded px-4 py-3 text-white">
                <option>Austin</option>
                <option>Los Angeles</option>
              </select>
            </div>
            <div>
              <label className="block text-lime mb-2">Parcel Weight (lb)</label>
              <input type="number" min="0" max="15" value={weight} onChange={e => setWeight(Number(e.target.value))} className="w-full bg-black border border-lime rounded px-4 py-3 text-white" />
            </div>
            <div className="flex items-end">
              <button onClick={matchVehicle} className="w-full bg-lime text-black font-black py-3 rounded-lg hover:bg-limeDark transition text-lg">
                FIND CLOSEST
              </button>
            </div>
          </div>

          {result && (
            <div className="mt-6 p-6 border-2 border-lime rounded-2xl bg-lime/5">
              {result.error ? (
                <p className="text-red-400 text-xl">{result.error}</p>
              ) : (
                <>
                  <h3 className="text-2xl font-bold text-lime">Winning Vehicle: {result.winner.name}</h3>
                  <p className="text-xl">ETA: {result.winner.eta} minutes · {result.winner.capacity}</p>
                  <p className="mt-2 opacity-70">City: {result.city} · Framework mirrors Waymo dispatch + Tesla Robotaxi patterns</p>
                  <div className="mt-4 grid grid-cols-2 gap-4">
                    {result.all.map(v => (
                      <div key={v.name} className={`p-3 rounded border ${v.name === result.winner.name ? 'border-lime bg-lime/20' : 'border-gray-600'}`}>
                        <strong style={{color: v.color}}>{v.name}</strong><br />
                        {v.eta} min
                      </div>
                    ))}
                  </div>
                </>
              )}
            </div>
          )}
        </div>
      </section>

      <section className="py-16 px-6 max-w-5xl mx-auto text-center">
        <h2 className="text-3xl font-bold text-lime mb-6">A + B = C</h2>
        <div className="grid md:grid-cols-3 gap-6">
          <div className="p-6 border border-lime/40 rounded-xl">
            <h3 className="text-xl font-bold text-lime">A — Courier Matching</h3>
            <p className="mt-2 text-sm">Query closest available Cybercab (Austin live) or Waymo (both cities). Lowest ETA + capacity. Delivery + passenger modes.</p>
          </div>
          <div className="p-6 border border-lime/40 rounded-xl">
            <h3 className="text-xl font-bold text-lime">B — Phoenix Desktop</h3>
            <p className="mt-2 text-sm">macOS first. Learns clicks/browser/Siri. Replicates. Open Hands · Vercel · Ganesh · 25SHA artifact.</p>
          </div>
          <div className="p-6 border border-lime bg-lime/10 rounded-xl">
            <h3 className="text-xl font-bold">C — Coexist.llc Totem</h3>
            <p className="mt-2 text-sm">Gold / Obsidian / Glass. Helping.llc = gnomies with bells + carousel. Production path open.</p>
          </div>
        </div>
        <p className="mt-8 text-sm opacity-60">Custom 5nm ASIC sensor fusion · Predictive graph neural rebalancing · Recursive memory layers · 7-panel judge gate remains.</p>
      </section>

      <footer className="py-8 text-center border-t border-lime/20 text-lime/60">
        gnomies.io · Lime-green phoenix Clippy reborn · Closest-vehicle wins · Human gate on domain, deploy, email, privacy.
      </footer>
    </div>
  );
}