

import React from "react";
import { ShieldCheck, Target, Eye, Flame, PhoneCall, Check, Sparkles, Activity } from "lucide-react";

export default function MissionVisionSection() {
  // SINGLE SOURCE OF TRUTH FOR WATERLOO NODE
  const area = "Waterloo";
  const postcode = "SE1";
  const address = "6 Chaplin Cl, London SE1 8TU";
  const phone = "07448 180941";

  return (
    <section className="relative bg-[#050507] py-24 sm:py-32 overflow-hidden font-sans border-t border-zinc-900 selection:bg-[#F36F21] selection:text-white">
      
      {/* Background Micro Interface Accents */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#F36F21]/[0.02] rounded-full filter blur-[130px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-zinc-900/[0.2] rounded-full filter blur-[100px] pointer-events-none" />
      
      {/* Subtle Grid Intercept Lines */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff005_1px,transparent_1px),linear-gradient(to_bottom,#ffffff005_1px,transparent_1px)] bg-[size:6rem_6rem] pointer-events-none opacity-40" />

      <div className="max-w-7xl mx-auto px-6 md:px-10 lg:px-12 relative z-10">
        
        {/* SECTION MASTER HEADER BLOCK */}
        <div className="max-w-3xl mb-20 space-y-4">
          <div className="inline-flex items-center gap-2 bg-zinc-950 border border-zinc-900 px-3 py-1.5 rounded-lg text-[10px] font-mono uppercase tracking-[0.2em] text-[#F36F21]">
            <Activity size={12} className="text-[#F36F21]" /> Core Commitments // {area} HQ
          </div>
          <h2 className="text-white text-4xl sm:text-5xl lg:text-[54px] font-black uppercase tracking-tight leading-[1.05]">
            Our Core Purpose. <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-zinc-500 to-zinc-700">Your absolute peace of mind.</span>
          </h2>
        </div>

        {/* NEW HIGH-END SPLIT LAYOUT */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-stretch">
          
          {/* LEFT PANEL: NARRATIVE POSITIONING (5 Columns) */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-10">
            <div className="space-y-6">
              <div className="flex items-center gap-2">
                <div className="h-[1px] w-8 bg-[#F36F21]" />
                <span className="text-xs font-mono text-zinc-500 uppercase tracking-widest block">Trusted London Exclusion</span>
              </div>
              
              <p className="text-zinc-300 text-lg leading-relaxed font-semibold">
                At PrimeShield {area}, we focus on clean, permanent results rather than temporary fixes. Our team is dedicated to stopping active infestations completely and securing your property layout against future risks.
              </p>
              
              <p className="text-zinc-400 text-sm sm:text-base leading-relaxed">
                Operating directly from our local response station at <span className="text-white font-medium">{address}</span>, we handle emergency calls quickly across the entire <span className="text-white font-bold">{postcode}</span> network. By removing the root breeding sources and sealing critical structural gaps, we ensure long-term safety for homes and retail businesses alike.
              </p>
            </div>

            {/* Premium CTA Box with Glass Accents */}
            <div className="bg-gradient-to-r from-zinc-950 to-[#0c0c0f] border border-zinc-900 p-6 rounded-2xl flex flex-col sm:flex-row sm:items-center justify-between gap-6">
              <div className="space-y-1">
                <span className="text-[9px] font-mono text-zinc-500 block uppercase tracking-wider">Direct Dispatch Helpline</span>
                <span className="text-white text-lg font-black font-mono tracking-wide">{phone}</span>
              </div>
              <a 
                href={`tel:${phone.replace(/\s/g, '')}`} 
                className="inline-flex items-center justify-center gap-2 bg-[#F36F21] hover:bg-white text-white hover:text-black text-xs font-bold uppercase tracking-wider px-5 py-3.5 rounded-xl transition-all duration-300 shadow-lg shadow-[#F36F21]/10 hover:shadow-none group"
              >
                <PhoneCall size={13} className="group-hover:translate-x-0.5 transition-transform" /> Connect to Team
              </a>
            </div>
          </div>

          {/* RIGHT PANEL: DYNAMIC INTERACTIVE PROTOCOLS (7 Columns) */}
          <div className="lg:col-span-7 flex flex-col gap-6 justify-center">
            
            {/* FRAMEWORK 01: THE MISSION */}
            <div className="bg-zinc-950/40 backdrop-blur-sm border border-zinc-900 p-8 rounded-2xl relative group hover:bg-zinc-950 transition-all duration-300">
              <div className="absolute top-0 right-0 w-[1px] h-12 bg-zinc-800 group-hover:bg-[#F36F21] transition-colors" />
              
              <div className="flex gap-5 items-start">
                <div className="w-12 h-12 rounded-xl bg-zinc-900 border border-zinc-800 flex items-center justify-center text-[#F36F21] shrink-0 group-hover:border-[#F36F21]/30 transition-all">
                  <Target size={20} />
                </div>
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <span className="text-[9px] font-mono text-[#F36F21] tracking-widest uppercase">Protocol // 01</span>
                    <h3 className="text-white text-sm font-black uppercase tracking-wider">The Mission</h3>
                  </div>
                  
                  <h4 className="text-zinc-200 text-base font-bold leading-snug">
                    Providing dependable pest removal and structural proofing across {area} to keep living and work environments perfectly safe.
                  </h4>
                  
                  <p className="text-zinc-500 text-xs sm:text-sm leading-relaxed">
                    We completely clear hidden nests of rodents, bed bugs, and stubborn insects using certified, safe methods. By focusing on thorough site hygiene and immediate response, we protect your property from ongoing environmental hazards.
                  </p>

                  {/* Horizontal Bullet Badges */}
                  <div className="mt-4 pt-4 border-t border-zinc-900 grid grid-cols-1 sm:grid-cols-2 gap-2">
                    <div className="flex items-center gap-2 text-xs text-zinc-400">
                      <div className="w-4 h-4 rounded-full bg-[#F36F21]/10 flex items-center justify-center"><Check size={10} className="text-[#F36F21]" /></div>
                      Complete Source Eradication
                    </div>
                    <div className="flex items-center gap-2 text-xs text-zinc-400">
                      <div className="w-4 h-4 rounded-full bg-[#F36F21]/10 flex items-center justify-center"><Check size={10} className="text-[#F36F21]" /></div>
                      Rapid Response Teams
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* FRAMEWORK 02: THE VISION */}
            <div className="bg-zinc-950/40 backdrop-blur-sm border border-zinc-900 p-8 rounded-2xl relative group hover:bg-zinc-950 transition-all duration-300">
              <div className="absolute top-0 right-0 w-[1px] h-12 bg-zinc-800 group-hover:bg-[#F36F21] transition-colors" />
              
              <div className="flex gap-5 items-start">
                <div className="w-12 h-12 rounded-xl bg-zinc-900 border border-zinc-800 flex items-center justify-center text-zinc-500 group-hover:text-[#F36F21] shrink-0 group-hover:border-[#F36F21]/30 transition-all">
                  <Eye size={20} />
                </div>
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <span className="text-[9px] font-mono text-zinc-500 tracking-widest uppercase">Protocol // 02</span>
                    <h3 className="text-white text-sm font-black uppercase tracking-wider">The Vision</h3>
                  </div>
                  
                  <h4 className="text-zinc-200 text-base font-bold leading-snug">
                    Setting the standard for local pest control through fully clear pricing and reliable long-term entry point protection.
                  </h4>
                  
                  <p className="text-zinc-500 text-xs sm:text-sm leading-relaxed">
                    We aim to bring durable structural resilience to every building in the {postcode} sector. Combining precise workmanship with high-grade barrier sealing, we build trusted partnerships with residential landlords and local business managers.
                  </p>

                  {/* Horizontal Bullet Badges */}
                  <div className="mt-4 pt-4 border-t border-zinc-900 grid grid-cols-1 sm:grid-cols-2 gap-2">
                    <div className="flex items-center gap-2 text-xs text-zinc-400">
                      <div className="w-4 h-4 rounded-full bg-zinc-900 flex items-center justify-center"><Flame size={10} className="text-zinc-600 group-hover:text-[#F36F21]" /></div>
                      Heavy-Duty Steel Proofing
                    </div>
                    <div className="flex items-center gap-2 text-xs text-zinc-400">
                      <div className="w-4 h-4 rounded-full bg-zinc-900 flex items-center justify-center"><Flame size={10} className="text-zinc-600 group-hover:text-[#F36F21]" /></div>
                      Eco-Conscious Treatments
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </div>

        </div>

        {/* BOTTOM RUNWAY STRIP */}
        <div className="mt-20 pt-6 border-t border-zinc-900 flex flex-col sm:flex-row items-center justify-between gap-4 text-[10px] font-mono text-zinc-600 tracking-wider">
          <div className="flex items-center gap-2">
            <Sparkles size={10} className="text-[#F36F21]" />
            <span>OBJECTIVES CONTROL // SHIELD_GOALS_V2</span>
          </div>
          <span className="uppercase text-zinc-500">System State: Active & Secured // London {postcode}</span>
        </div>

      </div>
    </section>
  );
}