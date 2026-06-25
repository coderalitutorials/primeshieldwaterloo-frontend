

import React from "react";
import { ArrowUpRight, ShieldCheck, Crosshair, Sparkles, CheckCircle2, Phone, ShieldAlert, Eye } from "lucide-react";

export default function AboutPassionSection() {
  // SINGLE SOURCE OF TRUTH FOR WATERLOO NODE
  const area = "Waterloo";
  const postcode = "SE1";
  const address = "6 Chaplin Cl, London SE1 8TU";
  const phone = "07448 180941";

  const targetedPests = [
    "Rat & Mice Control",
    "Bed Bug Treatment",
    "Cockroach Removal",
    "Wasp Nest Removal",
    "Moth Extermination",
    "Property Proofing"
  ];

  return (
    <section className="relative bg-[#050507] py-24 sm:py-32 overflow-hidden font-sans border-b border-zinc-900 selection:bg-[#F36F21] selection:text-white">
      
      {/* Premium Linear SaaS Grid Mesh */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff01_1px,transparent_1px),linear-gradient(to_bottom,#ffffff01_1px,transparent_1px)] bg-[size:4rem_4rem] pointer-events-none" />
      <div className="absolute top-0 left-1/3 w-[1px] h-full bg-zinc-900/40 hidden lg:block" />
      <div className="absolute top-0 left-2/3 w-[1px] h-full bg-zinc-900/40 hidden lg:block" />

      {/* Deep Low-Luminosity Radial Aura */}
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-[500px] h-[500px] bg-[#F36F21]/[0.03] rounded-full filter blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-10 lg:px-12 relative z-10">
        
        {/* NEW HIGH-END HEADER WITH INTEGRATED HOTLINE CELLS */}
        <div className="border-b border-zinc-900 pb-12 mb-16 flex flex-col lg:flex-row lg:items-end justify-between gap-8">
          <div className="space-y-4 max-w-3xl">
            <div className="inline-flex items-center gap-2 bg-zinc-950 border border-zinc-850 px-3 py-1.5 rounded-md text-[10px] font-mono uppercase tracking-[0.2em] text-[#F36F21]">
              <Crosshair size={12} className="animate-spin-slow" /> Strategic Treatment Plan
            </div>
            <h2 className="text-4xl sm:text-5xl font-black uppercase tracking-tight text-white leading-[1.05]">
              Targeting Root Causes. <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-zinc-500 to-zinc-700">Securing Local Spaces.</span>
            </h2>
          </div>
          
          {/* Quick Contact Micro-Module */}
          <a 
            href={`tel:${phone.replace(/\s/g, "")}`}
            className="bg-zinc-950/60 border border-zinc-900 p-4 rounded-xl flex items-center gap-4 group hover:border-[#F36F21]/30 transition-all duration-300 self-start lg:self-auto min-w-[280px]"
          >
            <div className="w-8 h-8 rounded-lg bg-zinc-900 border border-zinc-800 flex items-center justify-center text-emerald-400 group-hover:bg-emerald-500/10 transition-all">
              <Phone size={14} />
            </div>
            <div>
              <span className="text-[9px] font-mono text-zinc-500 block uppercase tracking-widest">Waterloo Emergency Desk</span>
              <span className="text-white text-sm font-black font-mono tracking-wide group-hover:text-[#F36F21] transition-colors">{phone}</span>
            </div>
          </a>
        </div>

        {/* RE-ARCHITECTED INTERACTIVE MATRIX WITH IMAGE INTEGRATION */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
          
          {/* CELL 1: PREMIUM IMAGE DISPLAY INTERACTIVE BLOCK */}
          <div className="lg:col-span-4 relative group cursor-crosshair overflow-hidden rounded-2xl border border-zinc-900 bg-zinc-950 p-4 flex flex-col justify-between min-h-[340px] lg:min-h-auto">
            
            {/* Geometric Outer Border Accents */}
            <div className="absolute top-0 right-0 w-6 h-[1px] bg-[#F36F21] z-20" />
            <div className="absolute bottom-0 left-0 w-[1px] h-6 bg-[#F36F21] z-20" />
            
            {/* Image Wrap */}
            <div className="absolute inset-0 z-0 h-full w-full overflow-hidden rounded-2xl">
              <img
                src="/images/about-primeshield-banner.webp"
                alt={`PrimeShield professional pest control operations team at work in ${area}`}
                className="w-full h-full object-cover transition-all duration-700 transform scale-100 group-hover:scale-105 filter grayscale contrast-125 opacity-35 group-hover:grayscale-0 group-hover:opacity-60 mix-blend-luminosity group-hover:mix-blend-normal"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#050507] via-transparent to-transparent opacity-90" />
            </div>

            {/* Top Floating Status Indicator inside Image */}
            <div className="relative z-10 self-start bg-zinc-950/80 backdrop-blur border border-zinc-800 px-3 py-1.5 rounded-lg text-[9px] font-mono text-zinc-400 uppercase tracking-widest flex items-center gap-2">
              <Eye size={12} className="text-[#F36F21]" />
              {area}_Core_Node
            </div>

            {/* Bottom Info Row */}
            <div className="relative z-10 border-t border-zinc-900/60 pt-4 bg-zinc-950/40 backdrop-blur-sm p-3 rounded-xl border border-zinc-900">
              <span className="text-[9px] font-mono text-zinc-500 block uppercase tracking-wider">Property Survey Unit</span>
              <p className="text-zinc-200 text-xs font-medium leading-relaxed mt-0.5">
                Live perimeter scanning and active access blockade deployment across {area} corridors.
              </p>
            </div>
          </div>

          {/* CELL 2: TEXT NARRATIVE PROFILE */}
          <div className="lg:col-span-5 bg-gradient-to-b from-zinc-950 to-[#0b0b0e] border border-zinc-900 p-8 rounded-2xl flex flex-col justify-between relative group">
            <div className="absolute top-0 left-0 w-16 h-[1px] bg-[#F36F21]" />
            
            <div className="space-y-5">
              <span className="text-[10px] font-mono tracking-widest text-[#F36F21] uppercase block">// 01 / Technical Scope</span>
              <h3 className="text-white text-xl font-extrabold uppercase tracking-tight">
                Complete Eradication Across {area}
              </h3>
              <p className="text-zinc-400 text-sm leading-relaxed font-normal">
                Quick superficial treatments only scratch the surface. From our main local operations hub at <span className="text-white font-medium">{address}</span>, we find out exactly how and where pests are multiplying. We locate deep nests hidden behind kitchen counters, pipework gaps, and floorboards to stop them entirely.
              </p>
            </div>

            {/* Target List System Inside Narrative Block */}
            <div className="border-t border-zinc-900 pt-6 mt-6">
              <span className="text-[10px] font-mono tracking-widest text-zinc-500 uppercase block mb-3">// 02 / Local Target Grid</span>
              <div className="grid grid-cols-2 gap-2">
                {targetedPests.map((pest, index) => (
                  <div 
                    key={index} 
                    className="bg-[#050507] border border-zinc-900/60 px-3 py-2 rounded-xl text-[11px] text-zinc-400 font-mono tracking-wide flex items-center justify-between group/badge transition-all"
                  >
                    <span>{pest}</span>
                    <CheckCircle2 size={11} className="text-zinc-800 group-hover/badge:text-[#F36F21] transition-colors" />
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* CELL 3: DUAL PROTOCOL MINI CARDS */}
          <div className="lg:col-span-3 flex flex-col gap-4">
            
            {/* Protocol Card A */}
            <div className="bg-gradient-to-b from-zinc-950 to-[#0b0b0e] border border-zinc-900 p-6 rounded-2xl flex-1 flex flex-col justify-between group hover:border-zinc-800 transition-all duration-300 relative overflow-hidden">
              <div className="absolute -top-12 -right-12 w-24 h-24 bg-zinc-900/40 rounded-full filter blur-xl group-hover:bg-[#F36F21]/5 transition-colors" />
              <div>
                <div className="flex items-center justify-between text-zinc-600 group-hover:text-[#F36F21] transition-colors mb-5">
                  <ShieldCheck size={20} />
                  <ArrowUpRight size={14} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
                <h4 className="text-white text-xs font-black uppercase tracking-wider mb-2">
                  Targeted Treatments
                </h4>
                <p className="text-zinc-500 text-xs leading-relaxed">
                  Safe, clean, and professional treatments deployed specifically around nesting hotspots without causing disturbance to your day.
                </p>
              </div>
              <span className="text-[9px] font-mono text-zinc-600 block mt-4 uppercase tracking-widest">// Phase_01_Clear</span>
            </div>

            {/* Protocol Card B */}
            <div className="bg-gradient-to-b from-zinc-950 to-[#0b0b0e] border border-zinc-900 p-6 rounded-2xl flex-1 flex flex-col justify-between group hover:border-zinc-800 transition-all duration-300 relative overflow-hidden">
              <div className="absolute -top-12 -right-12 w-24 h-24 bg-zinc-900/40 rounded-full filter blur-xl group-hover:bg-[#F36F21]/5 transition-colors" />
              <div>
                <div className="flex items-center justify-between text-zinc-600 group-hover:text-[#F36F21] transition-colors mb-5">
                  <ShieldAlert size={20} />
                  <ArrowUpRight size={14} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
                <h4 className="text-white text-xs font-black uppercase tracking-wider mb-2">
                  Guaranteed Proofing
                </h4>
                <p className="text-zinc-500 text-xs leading-relaxed">
                  Installing rigid physical mesh work and professional wire blockades to securely close off pathways over the long term.
                </p>
              </div>
              <span className="text-[9px] font-mono text-zinc-600 block mt-4 uppercase tracking-widest">// Protection_Secure</span>
            </div>

          </div>

        </div>

        {/* METADATA PLATFORM BAR */}
        <div className="mt-8 border-t border-zinc-900 pt-5 flex flex-col sm:flex-row items-center justify-between gap-4 text-[10px] font-mono text-zinc-600">
          <div className="flex items-center gap-2">
            <Sparkles size={10} className="text-[#F36F21]" />
            <span>PRIMESHIELD HUB CONTROL // VER_2.06</span>
          </div>
          <span className="uppercase tracking-widest text-zinc-500">
            Waterloo Central Service Network // London {postcode}
          </span>
        </div>

      </div>
    </section>
  );
}