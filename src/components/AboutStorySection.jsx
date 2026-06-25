



// import React from "react";
// import { ShieldCheck, MapPin, Building2, ArrowUpRight, CheckSquare, Target } from "lucide-react";

// export default function AboutStorySection() {
//   // SINGLE SOURCE OF TRUTH FOR WANDSWORTH NODE
//   const area = "Wandsworth";
//   const postcode = "SW18";
//   const address = "91 Pirbright Rd, London SW18 5ND";
//   const phone = "07356 253624";

//   return (
//     <section className="bg-[#0B0B0C] mt-8 text-white py-20 sm:py-28 lg:py-32 overflow-hidden font-sans relative border-b border-white/[0.03]">
      
//       {/* SaaS Grid Lines Overlay */}
//       <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.01)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.01)_1px,transparent_1px)] bg-[size:3rem_3rem] pointer-events-none" />
//       <div className="absolute top-0 left-1/4 w-[1px] h-full bg-white/[0.02] hidden lg:block" />

//       {/* Top Gradient Glow Accent */}
//       <div className="absolute -top-48 right-1/4 w-[400px] h-[400px] bg-[#F36F21]/5 rounded-full filter blur-[100px] pointer-events-none" />

//       <div className="max-w-7xl mx-auto px-6 md:px-10 lg:px-14 relative z-10">
        
//         {/* Upper Asymmetric Master Heading Block */}
//         <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-start border-b border-white/[0.08] pb-12 lg:pb-16">
//           <div className="lg:col-span-8 space-y-4">
//             <div className="inline-flex items-center gap-2 bg-white/[0.03] border border-white/[0.08] px-3 py-1 rounded text-xs font-mono uppercase tracking-widest text-[#F36F21]">
//               <Target size={12} className="text-[#F36F21]" />
//               Operation Profile // {area}
//             </div>
//             <h2 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight uppercase leading-[1.05]">
//               Setting the premium benchmark for <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#F36F21] to-[#ff8c42]">local pest protection.</span>
//             </h2>
//           </div>
          
//           <div className="lg:col-span-4 lg:pt-14">
//             <p className="text-neutral-400 text-sm sm:text-base leading-relaxed border-l-2 border-[#F36F21] pl-4">
//               Deploying native risk eradication frameworks from our core hub at <span className="text-white font-medium">{address}</span>. We eliminate vectors at the source level.
//             </p>
//           </div>
//         </div>

//         {/* New Architectural Split Layout */}
//         <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 mt-16 lg:mt-20 items-center">
          
//           {/* Left Side: Text Narrative Layer */}
//           <div className="lg:col-span-7 space-y-8">
//             <div className="space-y-4">
//               <span className="text-xs font-mono tracking-[0.25em] text-[#F36F21] uppercase block">// Regional Core Directive</span>
//               <h3 className="text-white text-2xl sm:text-3xl font-bold tracking-tight max-w-xl">
//                 Advanced architectural pest control built specifically for the {postcode} property infrastructure.
//               </h3>
//               <p className="text-neutral-400 text-sm sm:text-base leading-relaxed max-w-2xl">
//                 Superficial retail treatments consistently fail because pests target hidden entry paths deep inside walls. Our field teams isolate structural access pathways and build custom physical defenses. We protect high-value residential grids and commercial spaces across {area} with non-toxic, long-term blockades.
//               </p>
//             </div>

//             {/* Premium SaaS Micro-cells with Clean Dark Styling */}
//             <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4">
              
//               {/* Box 1 */}
//               <div className="bg-[#121215] border border-white/[0.06] p-5 rounded hover:border-[#F36F21]/40 transition-all duration-300 group">
//                 <div className="w-8 h-8 rounded bg-white/[0.02] border border-white/[0.08] flex items-center justify-center text-[#F36F21] mb-5">
//                   <ShieldCheck className="w-4 h-4" />
//                 </div>
//                 <h4 className="text-white text-xs font-bold uppercase tracking-wider mb-1.5 flex items-center justify-between">
//                   BPCA Standards
//                   <ArrowUpRight className="w-3 h-3 text-neutral-600 opacity-0 group-hover:opacity-100 group-hover:translate-x-0.5 transition-all" />
//                 </h4>
//                 <p className="text-neutral-500 text-[11px] leading-normal">Certified industry safety compliance parameters.</p>
//               </div>

//               {/* Box 2 */}
//               <div className="bg-[#121215] border border-white/[0.06] p-5 rounded hover:border-[#F36F21]/40 transition-all duration-300 group">
//                 <div className="w-8 h-8 rounded bg-white/[0.02] border border-white/[0.08] flex items-center justify-center text-[#F36F21] mb-5">
//                   <MapPin className="w-4 h-4" />
//                 </div>
//                 <h4 className="text-white text-xs font-bold uppercase tracking-wider mb-1.5 flex items-center justify-between">
//                   SW18 Anchor
//                   <ArrowUpRight className="w-3 h-3 text-neutral-600 opacity-0 group-hover:opacity-100 group-hover:translate-x-0.5 transition-all" />
//                 </h4>
//                 <p className="text-neutral-500 text-[11px] leading-normal">Rapid transit logistics across all {area} neighborhoods.</p>
//               </div>

//               {/* Box 3 */}
//               <div className="bg-[#121215] border border-white/[0.06] p-5 rounded hover:border-[#F36F21]/40 transition-all duration-300 group">
//                 <div className="w-8 h-8 rounded bg-white/[0.02] border border-white/[0.08] flex items-center justify-center text-[#F36F21] mb-5">
//                   <Building2 className="w-4 h-4" />
//                 </div>
//                 <h4 className="text-white text-xs font-bold uppercase tracking-wider mb-1.5 flex items-center justify-between">
//                   Asset Defense
//                   <ArrowUpRight className="w-3 h-3 text-neutral-600 opacity-0 group-hover:opacity-100 group-hover:translate-x-0.5 transition-all" />
//                 </h4>
//                 <p className="text-neutral-500 text-[11px] leading-normal">High-fidelity environmental insulation solutions.</p>
//               </div>

//             </div>
//           </div>

//           {/* Right Side: Re-architected Minimal Display Card */}
//           <div className="lg:col-span-5 relative group">
//             {/* Geometric Border Accents for High-end Feel */}
//             <div className="absolute top-0 right-0 w-4 h-[1px] bg-[#F36F21]" />
//             <div className="absolute bottom-0 left-0 w-[1px] h-4 bg-[#F36F21]" />
            
//             <div className="bg-[#111113] border border-white/[0.06] p-4 rounded relative overflow-hidden">
//               <div className="relative h-[320px] lg:h-[380px] w-full rounded overflow-hidden">
//                 <img
//                   src="/images/about-primeshield-banner.webp"
//                   alt={`PrimeShield ${area} specialized taskforce inspecting local property perimeter`}
//                   className="w-full h-full object-cover filter grayscale contrast-115 group-hover:scale-102 transition-transform duration-500 opacity-80"
//                 />
//                 <div className="absolute inset-0 bg-gradient-to-t from-[#0B0B0C] via-transparent to-transparent opacity-90" />
//               </div>
              
//               {/* Asymmetric Floating Hub Node Meta Data */}
//               <div className="mt-4 pt-4 border-t border-white/[0.04] flex items-center justify-between text-xs">
//                 <div className="space-y-0.5">
//                   <span className="text-[10px] font-mono text-neutral-500 block uppercase tracking-wider">Direct dispatch line</span>
//                   <span className="font-mono text-neutral-200 font-bold">{phone}</span>
//                 </div>
//                 <div className="text-right space-y-0.5">
//                   <span className="text-[10px] font-mono text-neutral-500 block uppercase tracking-wider">Operational unit</span>
//                   <span className="text-neutral-200 font-bold uppercase tracking-wide text-[11px]">{area} HQ</span>
//                 </div>
//               </div>
//             </div>
//           </div>

//         </div>

//       </div>
//     </section>
//   );
// }






import React from "react";
import { ShieldCheck, MapPin, Building2, ArrowUpRight, Target, Shield, Zap } from "lucide-react";

export default function AboutStorySection() {
  // SINGLE SOURCE OF TRUTH FOR WATERLOO NODE
  const area = "Waterloo";
  const postcode = "SE1";
  const address = "6 Chaplin Cl, London SE1 8TU";
  const phone = "07448 180941";

  return (
    <section className="bg-[#050507] mt-10 text-white py-24 lg:py-32 overflow-hidden font-sans relative border-b border-zinc-900">
      
      {/* SaaS Premium Dot Grid Overlay */}
      <div className="absolute inset-0 bg-[radial-gradient(#ffffff01_1px,transparent_1px)] [background-size:24px_24px] pointer-events-none" />
      
      {/* Cybernetic Subtle Ambient Glows */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-gradient-to-r from-[#F36F21]/5 to-amber-500/0 rounded-full filter blur-[120px] pointer-events-none" />
      <div className="absolute -bottom-20 right-10 w-[300px] h-[300px] bg-[#F36F21]/5 rounded-full filter blur-[80px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-10 lg:px-12 relative z-10">
        
        {/* UPPER NEW ASYMMETRIC GRID HEADLINE */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-start pb-16 border-b border-zinc-900">
          <div className="lg:col-span-7 space-y-4">
            <div className="inline-flex items-center gap-2 bg-zinc-950 border border-zinc-900 px-3 py-1.5 rounded-full text-[10px] font-mono uppercase tracking-widest text-[#F36F21]">
              <Target size={12} className="text-[#F36F21] animate-pulse" />
              Branch Operations // {area}
            </div>
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight text-white uppercase leading-[1.05]">
              Guaranteed Protection <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-zinc-200 via-zinc-400 to-zinc-500">For Your Property.</span>
            </h2>
          </div>
          
          <div className="lg:col-span-5 lg:pt-12">
            <p className="text-zinc-400 text-sm sm:text-base leading-relaxed border-l-2 border-[#F36F21] pl-6 py-1">
              Operating directly from our main Waterloo dispatch center at <span className="text-white font-medium">{address}</span>, we provide immediate, professional help to clear infestations and stop them from ever coming back.
            </p>
          </div>
        </div>

        {/* RE-ARCHITECTED FRESH GRID LAYOUT */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 mt-16 items-stretch">
          
          {/* Left Side: Modern Interactive Feature Grid */}
          <div className="lg:col-span-5 order-2 lg:order-1 flex flex-col justify-between gap-6">
            
            {/* Box 1 */}
            <div className="bg-gradient-to-r from-zinc-950 to-[#0b0b0e] border border-zinc-900/80 p-6 rounded-2xl relative overflow-hidden group hover:border-zinc-800 transition-all duration-300">
              <div className="absolute top-0 right-0 w-24 h-24 bg-zinc-900/40 rounded-bl-full pointer-events-none transition-colors group-hover:bg-[#F36F21]/5" />
              <div className="flex gap-4 items-start">
                <div className="p-3 rounded-xl bg-zinc-900 border border-zinc-800 text-[#F36F21] group-hover:bg-[#F36F21]/10 transition-all">
                  <Shield size={16} />
                </div>
                <div className="space-y-1">
                  <h4 className="text-white text-sm font-bold uppercase tracking-wider flex items-center gap-1.5">
                    BPCA Certified Safety
                    <ArrowUpRight size={12} className="text-zinc-600 opacity-0 group-hover:opacity-100 group-hover:translate-x-0.5 transition-all" />
                  </h4>
                  <p className="text-zinc-400 text-xs sm:text-sm leading-relaxed">
                    All treatments are carried out by fully trained technicians following strict UK commercial safety regulations.
                  </p>
                </div>
              </div>
            </div>

            {/* Box 2 */}
            <div className="bg-gradient-to-r from-zinc-950 to-[#0b0b0e] border border-zinc-900/80 p-6 rounded-2xl relative overflow-hidden group hover:border-zinc-800 transition-all duration-300">
              <div className="absolute top-0 right-0 w-24 h-24 bg-zinc-900/40 rounded-bl-full pointer-events-none transition-colors group-hover:bg-[#F36F21]/5" />
              <div className="flex gap-4 items-start">
                <div className="p-3 rounded-xl bg-zinc-900 border border-zinc-800 text-[#F36F21] group-hover:bg-[#F36F21]/10 transition-all">
                  <MapPin size={16} />
                </div>
                <div className="space-y-1">
                  <h4 className="text-white text-sm font-bold uppercase tracking-wider flex items-center gap-1.5">
                    {postcode} Rapid Dispatch
                    <ArrowUpRight size={12} className="text-zinc-600 opacity-0 group-hover:opacity-100 group-hover:translate-x-0.5 transition-all" />
                  </h4>
                  <p className="text-zinc-400 text-xs sm:text-sm leading-relaxed">
                    Based locally in Waterloo, our vehicles are always ready to reach your home or commercial workspace quickly.
                  </p>
                </div>
              </div>
            </div>

            {/* Box 3 */}
            <div className="bg-gradient-to-r from-zinc-950 to-[#0b0b0e] border border-zinc-900/80 p-6 rounded-2xl relative overflow-hidden group hover:border-zinc-800 transition-all duration-300">
              <div className="absolute top-0 right-0 w-24 h-24 bg-zinc-900/40 rounded-bl-full pointer-events-none transition-colors group-hover:bg-[#F36F21]/5" />
              <div className="flex gap-4 items-start">
                <div className="p-3 rounded-xl bg-zinc-900 border border-zinc-800 text-[#F36F21] group-hover:bg-[#F36F21]/10 transition-all">
                  <Building2 size={16} />
                </div>
                <div className="space-y-1">
                  <h4 className="text-white text-sm font-bold uppercase tracking-wider flex items-center gap-1.5">
                    Total Structural Proofing
                    <ArrowUpRight size={12} className="text-zinc-600 opacity-0 group-hover:opacity-100 group-hover:translate-x-0.5 transition-all" />
                  </h4>
                  <p className="text-zinc-400 text-xs sm:text-sm leading-relaxed">
                    We don't just spray and leave; we locate hidden access holes, seal entry points, and lock pests out completely.
                  </p>
                </div>
              </div>
            </div>

          </div>

          {/* Right Side: Clean Narrative & Premium Display Framework */}
          <div className="lg:col-span-7 order-1 lg:order-2 flex flex-col justify-between space-y-8">
            <div className="space-y-4">
              <span className="text-[11px] font-mono tracking-[0.25em] text-[#F36F21] uppercase block">// Professional Local Service</span>
              <h3 className="text-white text-2xl sm:text-3xl font-extrabold tracking-tight max-w-xl">
                Reliable pest treatments tailored for {area} homes and businesses.
              </h3>
              <p className="text-zinc-400 text-sm sm:text-base leading-relaxed">
                Cheap off-the-shelf baits and simple sprays rarely solve a real pest issue because rodents and insects nest deep inside floors, walls, and structural cavities. Our expert technicians handle the problem at its roots.
              </p>
              <p className="text-zinc-400 text-sm sm:text-base leading-relaxed">
                By combining advanced detection tools with long-lasting proofing materials like solid wire mesh and professional-grade sealants, we create an outer barrier around your premises. Whether it’s a residential property or a local high street business, we keep you safe and completely bug-free.
              </p>
            </div>

            {/* Premium Minimal Display Hub Tag */}
            <div className="bg-[#0b0b0e] border border-zinc-900 rounded-2xl p-5 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-32 h-[1px] bg-gradient-to-r from-transparent to-[#F36F21]/40" />
              <div className="absolute bottom-0 left-0 w-32 h-[1px] bg-gradient-to-r from-[#F36F21]/40 to-transparent" />
              
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-xl bg-zinc-950 border border-zinc-850 flex items-center justify-center text-emerald-400">
                  <Zap size={14} className="animate-pulse" />
                </div>
                <div>
                  <span className="text-[10px] font-mono text-zinc-500 block uppercase tracking-wider">Direct Hotline</span>
                  <a href={`tel:${phone.replace(/\s/g, "")}`} className="font-mono text-zinc-200 text-sm font-black hover:text-[#F36F21] transition-colors">{phone}</a>
                </div>
              </div>

              <div className="hidden sm:block text-right">
                <span className="text-[10px] font-mono text-zinc-500 block uppercase tracking-wider">Operational Unit</span>
                <span className="text-zinc-300 font-bold text-xs uppercase tracking-wide">{area} HQ Node</span>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}