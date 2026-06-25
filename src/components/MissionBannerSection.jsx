




// import React from "react";

// export default function MissionBannerSection() {
//   // UNIQUE WANDSWORTH CONFIGURATION FRAMEWORK
//   const LOCAL = {
//     area: "Wandsworth",
//     postcode: "SW18",
//     businessName: "PrimeShield Wandsworth",
//     address: "91 Pirbright Rd, London SW18 5ND",
//     phoneDisplay: "07356 253624",
//   };

//   return (
//     <section className="relative w-full bg-[#0b0b0c] py-20 lg:py-28 overflow-hidden font-sans border-b border-white/5">
      
//       {/* DECORATIVE LIGHT RAYS (SaaS-Style Glow Effect to break standard structures) */}
//       <div className="absolute top-0 right-1/4 w-[500px] h-[500px] bg-[#F36F21]/5 rounded-full filter blur-[120px] pointer-events-none z-0" />
      
//       <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-10 lg:px-12">
//         <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-stretch">
          
//           {/* COLUMN 1: MINIMALIST HEAVY EDITORIAL TYPEFACE (5/12 Content Space) */}
//           <div className="lg:col-span-6 flex flex-col justify-center pr-0 lg:pr-8">
            
//             <div className="flex items-center gap-3 mb-6">
//               <span className="text-xs font-bold uppercase tracking-[0.3em] text-[#F36F21] bg-[#F36F21]/5 border border-[#F36F21]/20 px-3 py-1 rounded-sm">
//                 Strategic Focus // {LOCAL.postcode}
//               </span>
//             </div>

//             <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white leading-[1.15] mb-6">
//               Securing Domestic & Industrial Grid Frameworks in <span className="text-[#F36F21]">{LOCAL.area}</span>.
//             </h2>

//             <div className="space-y-4 text-slate-300 text-sm sm:text-base font-normal max-w-xl">
//               <p className="leading-relaxed">
//                 Operations deployed under the <strong>{LOCAL.businessName}</strong> banner adhere to modern containment logistics. Running directly out of our core base at{" "}
//                 <span className="text-white font-semibold underline decoration-[#F36F21]/50 underline-offset-4">
//                   {LOCAL.address}
//                 </span>
//                 , we clear high-risk structural zones and execute precision bio-proofing.
//               </p>
              
//               <p className="text-slate-400 text-xs sm:text-sm leading-relaxed">
//                 We work silently behind the scenes to disrupt nesting biology, neutralize vectors, and upgrade entry defenses so that premium properties retain asset value.
//               </p>
//             </div>
//           </div>

//           {/* COLUMN 2: THE CARD MATRICES & MEDIA CONTAINER (6/12 Space) */}
//           <div className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-4 items-center">
            
//             {/* LARGE SHARP VISUAL BLOCK */}
//             <div className="relative h-64 sm:h-full min-h-[280px] rounded-lg overflow-hidden border border-white/10 shadow-2xl group">
//               <img
//                 src="/images/pest-banner.webp"
//                 alt={`${LOCAL.businessName} rapid intervention vector block active in ${LOCAL.area}`}
//                 className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
//                 loading="lazy"
//                 decoding="async"
//               />
//               <div className="absolute inset-0 bg-gradient-to-t from-[#0b0b0c] via-[#0b0b0c]/40 to-transparent" />
//               <div className="absolute bottom-4 left-4 right-4">
//                 <p className="text-[10px] font-mono tracking-widest text-slate-400 uppercase">Active Unit</p>
//                 <p className="text-xs font-bold text-white uppercase tracking-wider">SW18 Regional Response</p>
//               </div>
//             </div>

//             {/* VERTICALLY STACKED PILLARS WITH OFFSET CARD HOVER AESTHETICS */}
//             <div className="space-y-4">
              
//               {/* PILLAR 1 */}
//               <div className="p-5 bg-[#121214] border border-white/5 rounded-lg relative group overflow-hidden transition-all duration-300 hover:border-white/10 hover:-translate-y-0.5">
//                 <div className="absolute left-0 top-0 bottom-0 w-[3px] bg-[#F36F21] transform scale-y-0 group-hover:scale-y-100 transition-transform duration-300" />
//                 <div className="flex items-center gap-2.5 mb-1">
//                   <span className="text-slate-400 text-xs font-mono">01 //</span>
//                   <h3 className="text-xs font-black uppercase tracking-wider text-white">Rapid Dispatch</h3>
//                 </div>
//                 <p className="text-[11px] text-slate-400 leading-relaxed">
//                   Real-time routing from Pirbright Rd ensuring local proximity response timelines.
//                 </p>
//               </div>

//               {/* PILLAR 2 */}
//               <div className="p-5 bg-[#121214] border border-white/5 rounded-lg relative group overflow-hidden transition-all duration-300 hover:border-white/10 hover:-translate-y-0.5">
//                 <div className="absolute left-0 top-0 bottom-0 w-[3px] bg-slate-500 transform scale-y-0 group-hover:scale-y-100 transition-transform duration-300" />
//                 <div className="flex items-center gap-2.5 mb-1">
//                   <span className="text-slate-400 text-xs font-mono">02 //</span>
//                   <h3 className="text-xs font-black uppercase tracking-wider text-white">BPCA Audited</h3>
//                 </div>
//                 <p className="text-[11px] text-slate-400 leading-relaxed">
//                   Every product molecule and proofing mesh complies fully with UK safety laws.
//                 </p>
//               </div>

//               {/* PILLAR 3 */}
//               <div className="p-5 bg-[#121214] border border-white/5 rounded-lg relative group overflow-hidden transition-all duration-300 hover:border-white/10 hover:-translate-y-0.5">
//                 <div className="absolute left-0 top-0 bottom-0 w-[3px] bg-slate-500 transform scale-y-0 group-hover:scale-y-100 transition-transform duration-300" />
//                 <div className="flex items-center gap-2.5 mb-1">
//                   <span className="text-slate-400 text-xs font-mono">03 //</span>
//                   <h3 className="text-xs font-black uppercase tracking-wider text-white">Low Profile</h3>
//                 </div>
//                 <p className="text-[11px] text-slate-400 leading-relaxed">
//                   Unmarked operational hardware deployment to protect residential and brand reputation.
//                 </p>
//               </div>

//             </div>

//           </div>

//         </div>
//       </div>
//     </section>
//   );
// }







import React from "react";

export default function MissionBannerSection() {
  // WATERLOO MASTER HUB DATA
  const LOCAL = {
    area: "Waterloo",
    postcode: "SE1",
    businessName: "PrimeShield Waterloo",
    address: "6 Chaplin Cl, London SE1 8TU",
    phoneDisplay: "07448 180941",
  };

  return (
    <section className="relative w-full bg-[#060608] py-24 lg:py-32 overflow-hidden font-sans border-b border-white/[0.04]">
      
      {/* ALTERNATIVE SAAS GLOW - RADIAL TOP GRADIENT */}
      <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-[#F36F21]/40 to-transparent" />
      <div className="absolute -top-40 left-1/3 w-[700px] h-[400px] bg-[#F36F21]/5 rounded-full filter blur-[140px] pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-8 lg:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-12 items-center">
          
          {/* LEFT SIDE: HEAVY EDITORIAL TYPEFACE WITH CLEAN COPY (7/12 Width) */}
          <div className="lg:col-span-7 space-y-8">
            
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-white/[0.02] border border-white/10 rounded-full">
              <span className="w-1.5 h-1.5 rounded-full bg-[#F36F21]" />
              <span className="text-[10px] font-black uppercase tracking-[0.25em] text-slate-400">
                Hub Location: {LOCAL.postcode}
              </span>
            </div>

            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight text-white leading-[1.1]">
              Guaranteed Protection. <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#F36F21] to-[#ff9252]">
                Zero Pest Shortcuts.
              </span>
            </h2>

            <div className="border-l-2 border-[#F36F21]/30 pl-6 space-y-4 max-w-2xl">
              <p className="text-slate-200 text-base sm:text-lg font-medium leading-relaxed">
                Based directly at <span className="text-white underline decoration-[#F36F21] underline-offset-4 font-bold">{LOCAL.address}</span>, <strong>{LOCAL.businessName}</strong> delivers immediate commercial and residential pest eradication across the Waterloo network.
              </p>
              
              <p className="text-slate-400 text-sm leading-relaxed">
                We don't just spray surface levels and leave. Our team finds where the rodents or insects are breeding, seals up structural entry gaps permanently, and makes sure your living or working space returns to a clean, safe state.
              </p>
            </div>

            {/* CALL ACTION CALLOUT */}
            <div className="pt-4 flex flex-col sm:flex-row items-start sm:items-center gap-6">
              <a 
                href={`tel:${LOCAL.phoneDisplay.replace(/\s+/g, '')}`} 
                className="inline-flex items-center justify-center bg-white text-black px-8 py-4 rounded-xl text-xs font-black uppercase tracking-widest hover:bg-[#F36F21] hover:text-white transition-all duration-300 w-full sm:w-auto text-center"
              >
                Call Emergency Desk
              </a>
              <div>
                <span className="block text-[10px] uppercase font-bold text-slate-500 tracking-wider">Direct Line</span>
                <span className="text-white font-mono font-bold text-lg">{LOCAL.phoneDisplay}</span>
              </div>
            </div>

          </div>

          {/* RIGHT SIDE: ASYMMETRIC LIVE TRACKER TIMELINE (5/12 Width) */}
          <div className="lg:col-span-5 bg-gradient-to-b from-white/[0.03] to-transparent border border-white/5 rounded-3xl p-8 lg:p-10 backdrop-blur-md relative">
            
            {/* Absolute Background Image Layer for Texture */}
            <div className="absolute inset-0 opacity-[0.02] rounded-3xl overflow-hidden pointer-events-none">
              <img src="/images/pest-banner.webp" alt="texture background" className="w-full h-full object-cover" />
            </div>

            <div className="relative z-10">
              <div className="flex items-center justify-between mb-8 pb-4 border-b border-white/5">
                <h3 className="text-xs font-black uppercase tracking-widest text-white">
                  Local Priority Metrics
                </h3>
                <span className="text-[10px] font-mono bg-[#F36F21]/10 text-[#F36F21] px-2 py-0.5 rounded font-bold">
                  Live Dispatch
                </span>
              </div>

              {/* TIMELINE DESIGN CHAIN */}
              <div className="space-y-8 relative before:absolute before:inset-y-1 before:left-3 before:w-[1px] before:bg-white/10">
                
                {/* STEP 1 */}
                <div className="relative flex gap-5 items-start pl-8 group">
                  <div className="absolute left-[7px] top-1.5 w-3 h-3 rounded-full bg-[#F36F21] shadow-[0_0_10px_#F36F21] transition-transform group-hover:scale-125" />
                  <div>
                    <h4 className="text-xs font-black text-white uppercase tracking-wider mb-1">
                      01. Proximity Routing
                    </h4>
                    <p className="text-xs text-slate-400 leading-relaxed">
                      Vans roll out directly from Chaplin Close (SE1) ensuring zero delay from long-distance highway traffic.
                    </p>
                  </div>
                </div>

                {/* STEP 2 */}
                <div className="relative flex gap-5 items-start pl-8 group">
                  <div className="absolute left-[9px] top-2 w-2 h-2 rounded-full bg-slate-600 group-hover:bg-white transition-colors" />
                  <div>
                    <h4 className="text-xs font-black text-white uppercase tracking-wider mb-1">
                      02. Structural Deficits
                    </h4>
                    <p className="text-xs text-slate-400 leading-relaxed">
                      We target the root structural gaps and internal pathways that generic pest chemical companies completely miss.
                    </p>
                  </div>
                </div>

                {/* STEP 3 */}
                <div className="relative flex gap-5 items-start pl-8 group">
                  <div className="absolute left-[9px] top-2 w-2 h-2 rounded-full bg-slate-600 group-hover:bg-white transition-colors" />
                  <div>
                    <h4 className="text-xs font-black text-white uppercase tracking-wider mb-1">
                      03. Clear & Safe Standards
                    </h4>
                    <p className="text-xs text-slate-400 leading-relaxed">
                      Using completely vetted, legal, and premium certified treatments that guarantee long-term area protection.
                    </p>
                  </div>
                </div>

              </div>

              {/* TIMELINE FOOTER BADGE */}
              <div className="mt-8 pt-6 border-t border-white/5 flex items-center justify-between text-[11px] text-slate-500 font-medium">
                <span>Coverage: Waterloo Wide</span>
                <span className="text-slate-300 font-bold">BPCA & RSPH Standards</span>
              </div>

            </div>

          </div>

        </div>
      </div>
    </section>
  );
}