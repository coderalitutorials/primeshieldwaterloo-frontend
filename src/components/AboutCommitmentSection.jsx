



// import React from "react";
// import { useNavigate } from "react-router-dom";
// import { Shield, Timer, Home, ArrowUpRight, HelpCircle, HardHat } from "lucide-react";

// export default function AboutCommitmentSection() {
//   const navigate = useNavigate();

//   // SINGLE SOURCE OF TRUTH FOR WANDSWORTH NODE
//   const area = "Wandsworth";
//   const postcode = "SW18";
//   const address = "91 Pirbright Rd, London SW18 5ND";
//   const phone = "07356 253624";

//   return (
//     <section className="relative overflow-hidden bg-[#0A0A0B] py-20 sm:py-28 lg:py-32 font-sans border-b border-white/[0.03]">
      
//       {/* Background Micro Interface Elements */}
//       <div className="absolute top-0 left-1/4 w-[1px] h-full bg-white/[0.01]" />
//       <div className="absolute bottom-0 right-1/4 w-[1px] h-full bg-white/[0.01]" />
//       <div className="absolute top-1/4 right-10 w-80 h-80 bg-[#F36F21]/[0.02] rounded-full filter blur-[100px] pointer-events-none" />

//       <div className="max-w-7xl mx-auto px-6 md:px-10 lg:px-14 relative z-10">
        
//         {/* ASYMMETRIC GRID CONTAINER */}
//         <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
//           {/* LEFT AREA: DISPATCH CORE MATRIX CONTROL (4 Columns) */}
//           <div className="lg:col-span-4 space-y-4 lg:sticky lg:top-24">
            
//             <div className="bg-[#111114] border border-white/[0.06] p-6 rounded relative overflow-hidden group">
//               <div className="absolute top-0 right-0 w-12 h-12 bg-white/[0.01] rounded-bl-lg flex items-center justify-center text-neutral-700 group-hover:text-[#F36F21] transition-colors">
//                 <HardHat size={16} />
//               </div>
//               <span className="text-[10px] font-mono text-[#F36F21] tracking-widest block uppercase mb-4">// Dedicated Local Station</span>
//               <h3 className="text-white text-2xl font-black uppercase tracking-tight">{area} Dispatch</h3>
//               <p className="text-neutral-400 text-xs sm:text-sm mt-2 leading-relaxed">{address}</p>
              
//               <div className="mt-6 pt-4 border-t border-white/[0.05] flex items-center justify-between">
//                 <span className="text-[11px] font-mono text-neutral-500">POSTAL AREA // {postcode}</span>
//                 <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
//               </div>
//             </div>

//             {/* Quick Informational Parameters */}
//             <div className="space-y-2">
//               {[
//                 { icon: Shield, title: "100% Safe Methods", desc: "Approved local treatments" },
//                 { icon: Timer, title: "Rapid Emergency Response", desc: "Same-day property clearance" },
//                 { icon: Home, title: "Total Property Proofing", desc: "Sealing active entry lines" }
//               ].map((item, idx) => (
//                 <div key={idx} className="bg-white/[0.01] border border-white/[0.04] p-4 rounded flex items-center gap-4 group hover:border-white/[0.08] transition-all">
//                   <div className="w-9 h-9 rounded bg-white/[0.02] border border-white/[0.08] flex items-center justify-center text-[#F36F21] group-hover:bg-[#F36F21] group-hover:text-white transition-all shrink-0">
//                     <item.icon size={16} />
//                   </div>
//                   <div>
//                     <h4 className="text-white text-xs font-bold uppercase tracking-wider">{item.title}</h4>
//                     <p className="text-neutral-500 text-[11px]">{item.desc}</p>
//                   </div>
//                 </div>
//               ))}
//             </div>

//           </div>

//           {/* RIGHT AREA: CONTENT BREAKDOWN & ACTION TILES (8 Columns) */}
//           <div className="lg:col-span-8 space-y-10">
            
//             {/* Header Content */}
//             <div className="space-y-4">
//               <div className="inline-flex items-center gap-1.5 font-mono text-[10px] tracking-[0.3em] uppercase text-neutral-500">
//                 <HelpCircle size={12} className="text-[#F36F21]" /> PrimeShield Quality Standards
//               </div>
//               <h2 className="text-white text-3xl sm:text-4xl lg:text-5xl font-black uppercase tracking-tight leading-none">
//                 Reliable pest protection built for residential and business owners.
//               </h2>
//               <div className="w-16 h-[2px] bg-[#F36F21]" />
//             </div>

//             {/* Narrative Breakdown Paragraphs */}
//             <div className="space-y-6 text-neutral-300 text-sm sm:text-base leading-relaxed">
//               <p>
//                 At <span className="text-white font-bold">PrimeShield {area}</span>, we approach pest elimination as an essential aspect of proper property preservation. We understand that finding unwanted rodents, bed bugs, or crawling insects inside your space causes massive stress and requires quick, dependable action.
//               </p>
              
//               {/* Asymmetric Block Layout Grid */}
//               <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 my-8">
//                 <div className="bg-[#111113] border-l-2 border-[#F36F21] p-5 rounded-r">
//                   <h4 className="text-white text-xs font-bold uppercase tracking-wider mb-2">Finding The Root Cause</h4>
//                   <p className="text-neutral-400 text-xs leading-relaxed">
//                     Instead of just spraying the surface patterns, our technicians track the core entry cracks and hidden crawl channels to fix the root problem.
//                   </p>
//                 </div>
//                 <div className="bg-[#111113] border-l-2 border-neutral-700 p-5 rounded-r">
//                   <h4 className="text-white text-xs font-bold uppercase tracking-wider mb-2">Long-Term Property Safety</h4>
//                   <p className="text-neutral-400 text-xs leading-relaxed">
//                     We deliver customized pest prevention frameworks designed specifically for private homes, local landlords, and high-street shops across {postcode}.
//                   </p>
//                 </div>
//               </div>

//               <p className="text-neutral-400">
//                 Pest situations threaten your daily comfort and operational routines. Our professional local team works with complete care and safety to ensure your living rooms, stock units, or workspaces remain entirely clear and fully secure. From sealing active entry holes to deep insect clearing treatments, we ensure your building stays completely safe and thoroughly protected.
//               </p>
//             </div>

//             {/* CUSTOM INTEGRATED CTA DASHBOARD PANEL */}
//             <div className="bg-[#111114] border border-[#F36F21]/20 p-6 rounded flex flex-col sm:flex-row sm:items-center justify-between gap-6 relative group">
//               <div className="space-y-1">
//                 <h4 className="text-white text-sm font-bold uppercase tracking-wider">Need to clean your property perimeters?</h4>
//                 <p className="text-neutral-500 text-xs">Book an immediate site inspection or call local desk: {phone}</p>
//               </div>
//               <button
//                 onClick={() => navigate("/contact-us")}
//                 className="inline-flex items-center justify-center gap-2 bg-[#F36F21] hover:bg-[#ff8c42] text-white text-xs font-bold uppercase tracking-widest px-5 py-3 rounded transition-all group shrink-0"
//               >
//                 Book Inspection <ArrowUpRight size={14} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
//               </button>
//             </div>

//           </div>

//         </div>

//       </div>
//     </section>
//   );
// }














import React from "react";
import { useNavigate } from "react-router-dom";
import { Shield, Timer, Home, ArrowUpRight, HelpCircle, HardHat, Radio, ShieldAlert } from "lucide-react";

export default function AboutCommitmentSection() {
  const navigate = useNavigate();

  // SINGLE SOURCE OF TRUTH FOR WATERLOO NODE
  const area = "Waterloo";
  const postcode = "SE1";
  const address = "6 Chaplin Cl, London SE1 8TU";
  const phone = "07448 180941";

  return (
    <section className="relative bg-[#060608] py-24 sm:py-32 overflow-hidden font-sans border-b border-zinc-900 selection:bg-[#F36F21] selection:text-white">
      
      {/* Premium Ambient Background Background Elements */}
      <div className="absolute top-0 left-1/3 w-[1px] h-full bg-gradient-to-b from-zinc-900/40 via-transparent to-transparent" />
      <div className="absolute top-1/3 left-10 w-96 h-96 bg-[#F36F21]/[0.015] rounded-full filter blur-[120px] pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-72 h-72 bg-zinc-900/[0.3] rounded-full filter blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-10 lg:px-12 relative z-10">
        
        {/* ASYMMETRIC 12-COLUMN DASHBOARD GRID */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* LEFT PANEL: DISPATCH MONITOR CARD (4 Columns) */}
          <div className="lg:col-span-4 space-y-4 lg:sticky lg:top-28">
            
            {/* Interactive Control Base Card */}
            <div className="bg-zinc-950/70 backdrop-blur-md border border-zinc-900 p-6 rounded-2xl relative overflow-hidden group hover:border-zinc-800 transition-all duration-300">
              <div className="absolute top-0 right-0 w-14 h-14 bg-zinc-900/50 rounded-bl-2xl flex items-center justify-center text-zinc-700 group-hover:text-[#F36F21] transition-colors duration-300">
                <HardHat size={18} />
              </div>
              
              <div className="flex items-center gap-2 mb-4">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
                </span>
                <span className="text-[10px] font-mono text-[#F36F21] tracking-widest uppercase font-semibold">Live Dispatch Station</span>
              </div>

              <h3 className="text-white text-2xl font-black uppercase tracking-tight">{area} Node</h3>
              <p className="text-zinc-400 text-xs sm:text-sm mt-2 leading-relaxed font-medium">{address}</p>
              
              <div className="mt-6 pt-4 border-t border-zinc-900 flex items-center justify-between text-[10px] font-mono text-zinc-500">
                <span>MATRIX REGION // {postcode}</span>
                <span className="bg-zinc-900 px-2 py-0.5 rounded text-zinc-400">ONLINE</span>
              </div>
            </div>

            {/* Micro Feature Parameters Layout */}
            <div className="grid grid-cols-1 gap-2">
              {[
                { icon: Shield, title: "Safe Target Treatments", desc: "Approved local methods" },
                { icon: Timer, title: "Same-Day Emergency Response", desc: "Fast property clearing" },
                { icon: Home, title: "Complete Structural Sealing", desc: "Blocking active access points" }
              ].map((item, idx) => (
                <div key={idx} className="bg-zinc-950/30 border border-zinc-900/60 p-4 rounded-xl flex items-center gap-4 hover:border-zinc-800 transition-all duration-300 group">
                  <div className="w-10 h-10 rounded-lg bg-zinc-950 border border-zinc-900 flex items-center justify-center text-zinc-500 group-hover:text-white group-hover:bg-[#F36F21] group-hover:border-[#F36F21] transition-all duration-300 shrink-0">
                    <item.icon size={16} />
                  </div>
                  <div>
                    <h4 className="text-white text-xs font-bold uppercase tracking-wide group-hover:text-[#F36F21] transition-colors">{item.title}</h4>
                    <p className="text-zinc-500 text-[11px] mt-0.5">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>

          </div>

          {/* RIGHT PANEL: MAIN NARRATIVE & CONSOLE ACTION (8 Columns) */}
          <div className="lg:col-span-8 space-y-10">
            
            {/* Header Content Block */}
            <div className="space-y-4">
              <div className="inline-flex items-center gap-2 font-mono text-[9px] tracking-[0.25em] uppercase text-zinc-500 bg-zinc-950 border border-zinc-900 px-3 py-1 rounded-md">
                <HelpCircle size={11} className="text-[#F36F21]" /> Quality Standards Report
              </div>
              <h2 className="text-white text-3xl sm:text-4xl lg:text-[46px] font-black uppercase tracking-tight leading-[1.1]">
                Reliable pest protection engineered for homeowners and business spaces.
              </h2>
              <div className="h-[2px] w-12 bg-[#F36F21]" />
            </div>

            {/* Clear Customer-Focused Text Flow */}
            <div className="space-y-6 text-zinc-300 text-sm sm:text-base leading-relaxed">
              <p className="font-medium">
                At <span className="text-white font-bold">PrimeShield {area}</span>, we handle pest elimination with strict attention to property preservation. We know that finding mice, rats, bed bugs, or crawling insects inside your property creates immediate disruption. Our local technicians react quickly to deliver practical, permanent clearance.
              </p>
              
              {/* Premium Asymmetric Split Feature Cards */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 my-8">
                <div className="bg-zinc-950 border border-zinc-900 p-6 rounded-xl relative group">
                  <div className="absolute top-0 left-0 w-1 h-8 bg-[#F36F21]" />
                  <h4 className="text-white text-xs font-black uppercase tracking-wider mb-2">Stopping The Core Source</h4>
                  <p className="text-zinc-500 text-xs leading-relaxed">
                    Instead of just dealing with what's visible on the surface, our local specialists locate hidden entry channels and nesting sites to fix the problem permanently.
                  </p>
                </div>
                
                <div className="bg-zinc-950 border border-zinc-900 p-6 rounded-xl relative group">
                  <div className="absolute top-0 left-0 w-1 h-8 bg-zinc-700 group-hover:bg-[#F36F21] transition-colors" />
                  <h4 className="text-white text-xs font-black uppercase tracking-wider mb-2">Long-Term Site Isolation</h4>
                  <p className="text-zinc-500 text-xs leading-relaxed">
                    We implement tough, custom entry proofing setups explicitly constructed to defend private homes, local restaurants, and retail spaces across {postcode}.
                  </p>
                </div>
              </div>

              <p className="text-zinc-400 text-xs sm:text-sm">
                Active infestations jeopardize your structural hygiene and peace of mind. Our experienced operators utilize safe, targeted professional treatments to restore total comfort to your living areas, storage blocks, or business units. From sealing critical entry structural gaps to thorough nest extractions, we keep your property clear and perfectly protected.
              </p>
            </div>

            {/* COMPACT PREMIUM CONTROL PANEL CTA */}
            <div className="bg-gradient-to-r from-zinc-950 via-[#0a0a0d] to-zinc-950 border border-zinc-900 p-6 rounded-2xl flex flex-col sm:flex-row sm:items-center justify-between gap-6 relative overflow-hidden group">
              <div className="absolute -right-6 -bottom-6 text-zinc-900/10 pointer-events-none group-hover:text-[#F36F21]/5 transition-colors duration-500">
                <ShieldAlert size={120} />
              </div>
              
              <div className="space-y-1 relative z-10">
                <h4 className="text-white text-sm font-bold uppercase tracking-wide">Need to secure your property boundaries?</h4>
                <p className="text-zinc-500 text-xs">Book an immediate site inspection or speak directly with the local station desk: <span className="text-zinc-300 font-mono font-bold">{phone}</span></p>
              </div>
              
              <button
                onClick={() => navigate("/contact-us")}
                className="relative z-10 inline-flex items-center justify-center gap-2 bg-[#F36F21] hover:bg-white text-white hover:text-black text-xs font-bold uppercase tracking-widest px-6 py-3.5 rounded-xl transition-all duration-300 shrink-0 shadow-lg shadow-[#F36F21]/5 hover:shadow-none"
              >
                Book Inspection <ArrowUpRight size={13} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </button>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}