
// import React, { useState } from "react";
// import { ShieldCheck, Zap, Users, Phone, MapPin, CheckCircle2, ChevronRight } from "lucide-react";

// export default function WhyChoosePrimeShield() {
//   const [activeFeature, setActiveFeature] = useState(0);

//   // SINGLE SOURCE OF TRUTH - WANDSWORTH / SW18
//   const LOCAL = {
//     area: "Wandsworth",
//     postcode: "SW18 5ND",
//     baseAddress: "91 Pirbright Rd, London SW18 5ND",
//     businessName: "PrimeShield Wandsworth",
//     phone: "07356 253624",
//     phoneDisplay: "07356 253624"
//   };

//   const structuredPoints = [
//     {
//       icon: ShieldCheck,
//       title: `${LOCAL.area} Property Diagnostic Audits`,
//       tag: "EXPERT INSPECTION",
//       desc: "Complete structural property tracing engineered for Wandsworth's buildings. We look behind cavity walls, sub-floors, and lofts to find the root nesting locations instead of just spraying visible areas.",
//       metric: "100% Eradication Targeted"
//     },
//     {
//       icon: Users,
//       title: "Family & Pet Safe Treatments",
//       tag: "SAFEGUARD SYSTEM",
//       desc: "We use strictly regulated, low-toxicity targeted products. Your children and domestic pets remain completely protected while our certified technicians isolate and eliminate the infestation safely.",
//       metric: "HSE Approved Products"
//     },
//     {
//       icon: Zap,
//       title: "Pirbright Road Rapid Emergency Dispatch",
//       tag: "RAPID DEPLOYMENT",
//       desc: `Our dedicated pest control vehicles are stationed directly at ${LOCAL.baseAddress}, guaranteeing fast arrival windows across the entire SW18 postcode sector when urgent response is required.`,
//       metric: "Fast Local Arrival"
//     },
//   ];

//   return (
//     <section className="relative overflow-hidden bg-[#0a0a0c] py-24 lg:py-32 font-sans text-white selection:bg-[#F36F21] selection:text-white border-b border-white/5">
      
//       {/* Industrial Layout Lines & Accent Shadows */}
//       <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff02_1px,transparent_1px),linear-gradient(to_bottom,#ffffff02_1px,transparent_1px)] bg-[size:30px_30px] pointer-events-none" />
//       <div className="absolute top-1/2 left-1/4 w-[500px] h-[500px] bg-[#F36F21]/3 rounded-full filter blur-[140px] pointer-events-none" />

//       <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-10 lg:px-12">
        
//         {/* TOP INTERACTIVE CONTROL PANEL STRIP */}
//         <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-20 pb-6 border-b border-white/5">
//           <div className="flex items-center gap-3">
//             <span className="w-2 h-2 rounded-full bg-[#F36F21]" />
//             <span className="font-mono text-xs text-slate-400 tracking-widest uppercase">
//               Operational Standards // {LOCAL.businessName}
//             </span>
//           </div>
//           <a 
//             href={`tel:${LOCAL.phone}`}
//             className="flex items-center gap-2 font-mono text-[11px] text-[#F36F21] bg-[#F36F21]/5 px-3 py-1.5 rounded border border-[#F36F21]/20 hover:bg-[#F36F21]/10 transition-colors"
//           >
//             <Phone size={12} /> Emergency Line: {LOCAL.phoneDisplay}
//           </a>
//         </div>

//         {/* NEW ASYMMETRIC GRID SYSTEM */}
//         <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 xl:gap-16 items-stretch">
          
//           {/* LEFT SIDE: TYPOGRAPHY & YOUR ORIGINAL IMAGE CONTAINER BLOCK */}
//           <div className="lg:col-span-5 flex flex-col justify-between space-y-8">
//             <div className="space-y-5">
//               <h2 className="text-white text-3xl sm:text-5xl font-black tracking-tight leading-[1.08]">
//                 The Professional Alternative For <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#F36F21] to-[#ff9b5e]">{LOCAL.area}</span> Pest Control.
//               </h2>
//               <p className="text-slate-400 text-sm sm:text-base leading-relaxed font-normal">
//                 Pest threats demand systematic property proofing, not short-term surface fixes. At {LOCAL.businessName}, we secure local residential houses, residential flats, and commercial properties across the entire SW18 district.
//               </p>
//             </div>

//             {/* YOUR ORIGINAL GEOMETRIC MEDIA FRAME - RESTORED & OPTIMIZED */}
//             <div className="relative group w-full pt-4">
//               <div className="absolute -inset-3 rounded-2xl border border-white/5 scale-100 pointer-events-none transition-all duration-300 group-hover:border-[#F36F21]/20" />
//               <div className="absolute -top-1 -left-1 w-5 h-5 border-t-2 border-l-2 border-[#F36F21]" />
//               <div className="absolute -bottom-1 -right-1 w-5 h-5 border-b-2 border-r-2 border-[#F36F21]" />
              
//               <div className="relative overflow-hidden rounded-xl border border-white/10 aspect-[4/5] sm:aspect-[1.4] lg:aspect-[4/5] shadow-2xl bg-[#111113]">
//                 <img
//                   src="/images/why-choose-pest-control.webp"
//                   alt={`${LOCAL.businessName} professional technicians performing structural home proofing`}
//                   className="w-full h-full object-cover object-center grayscale opacity-80 group-hover:grayscale-0 group-hover:opacity-100 group-hover:scale-102 transition-all duration-700 ease-out"
//                   loading="lazy"
//                 />
//                 <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent" />
                
//                 {/* Fixed Base Location Tag on Image Cover */}
//                 <div className="absolute bottom-4 left-4 right-4 bg-[#0d0d0f]/95 backdrop-blur-md border border-white/10 p-3.5 rounded-lg shadow-xl">
//                   <div className="flex items-center gap-2 mb-1.5">
//                     <MapPin size={12} className="text-[#F36F21]" />
//                     <p className="text-[9px] text-slate-400 font-bold font-mono uppercase tracking-wider">Local Dispatch Base</p>
//                   </div>
//                   <p className="text-xs text-white font-bold tracking-wide">{LOCAL.baseAddress}</p>
//                 </div>
//               </div>
//             </div>
//           </div>

//           {/* RIGHT SIDE: MODERN RE-DESIGNED INTERACTIVE CARDS */}
//           <div className="lg:col-span-7 flex flex-col justify-center space-y-4">
//             <div className="text-[10px] font-mono text-slate-500 uppercase tracking-widest mb-1 px-1">
//               [ Click a segment below to view our service protocols ]
//             </div>

//             {structuredPoints.map((point, index) => {
//               const Icon = point.icon;
//               const isActive = activeFeature === index;

//               return (
//                 <div
//                   key={index}
//                   onClick={() => setActiveFeature(index)}
//                   className={`cursor-pointer transition-all duration-300 rounded-xl border p-5 flex flex-col sm:flex-row gap-5 items-start relative ${
//                     isActive
//                       ? "bg-[#111114] border-[#F36F21] shadow-[0_0_30px_rgba(243,111,33,0.03)]"
//                       : "bg-[#0d0d0f]/60 border-white/5 hover:bg-[#111114] hover:border-white/10"
//                   }`}
//                 >
//                   {/* Left Dynamic Icon Structure */}
//                   <div className={`w-12 h-12 rounded-lg border flex items-center justify-center shrink-0 transition-all duration-300 ${
//                     isActive 
//                       ? "bg-[#F36F21] text-white border-transparent shadow-[0_0_15px_rgba(243,111,33,0.3)]" 
//                       : "bg-white/5 text-slate-400 border-white/5"
//                   }`}>
//                     <Icon size={20} strokeWidth={1.5} />
//                   </div>

//                   {/* Text Content Area */}
//                   <div className="space-y-1.5 flex-1 w-full">
//                     <div className="flex items-center justify-between gap-4">
//                       <div className="flex flex-wrap items-center gap-2.5">
//                         <span className="font-mono text-[8px] px-2 py-0.5 rounded bg-white/5 text-slate-400 font-bold tracking-wider uppercase">
//                           {point.tag}
//                         </span>
//                         <h3 className="text-white text-base font-bold tracking-tight">
//                           {point.title}
//                         </h3>
//                       </div>
//                       <span className={`font-mono text-xs hidden sm:inline ${isActive ? "text-[#F36F21]" : "text-slate-700"}`}>
//                         0{index + 1}
//                       </span>
//                     </div>

//                     {/* Smooth Expandable Body Block */}
//                     <div className={`grid transition-all duration-300 ease-in-out ${
//                       isActive ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0 pointer-events-none"
//                     }`}>
//                       <div className="overflow-hidden">
//                         <p className="text-slate-400 text-xs sm:text-sm leading-relaxed font-normal pt-1">
//                           {point.desc}
//                         </p>
                        
//                         {/* Dynamic industry proof tags inside active cards */}
//                         <div className="mt-4 pt-3 border-t border-white/5 flex flex-wrap gap-4 text-[10px] font-mono text-[#F36F21]">
//                           <span className="flex items-center gap-1.5">
//                             <CheckCircle2 size={11} className="text-emerald-500" /> {point.metric}
//                           </span>
//                           <span className="text-slate-500">
//                             Status: Fully Operational
//                           </span>
//                         </div>
//                       </div>
//                     </div>

//                   </div>
//                 </div>
//               );
//             })}

//             {/* INTEGRATED DIRECT CALL BANNER BELOW CARDS */}
//             <div className="bg-[#111114]/50 border border-white/5 rounded-xl p-5 flex flex-col sm:flex-row items-center justify-between gap-4 mt-4">
//               <div className="space-y-1 text-center sm:text-left">
//                 <p className="text-xs text-white font-bold">Need urgent pest removal in {LOCAL.area}?</p>
//                 <p className="text-[11px] text-slate-400">Speak directly with our Pirbright Road dispatch hub team.</p>
//               </div>
//               <a 
//                 href={`tel:${LOCAL.phone}`}
//                 className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-white hover:bg-[#F36F21] text-black hover:text-white px-5 py-2.5 rounded-lg text-xs font-bold transition-all duration-300 shadow-lg"
//               >
//                 <span>Call {LOCAL.phoneDisplay}</span>
//                 <ChevronRight size={14} />
//               </a>
//             </div>

//           </div>

//         </div>

//       </div>
//     </section>
//   );
// }

















import React, { useState } from "react";
import { ShieldCheck, Zap, Users, Phone, MapPin, CheckCircle2, ArrowUpRight } from "lucide-react";

export default function WhyChoosePrimeShield() {
  const [activeStage, setActiveStage] = useState(0);

  // SINGLE SOURCE OF TRUTH - WATERLOO / SE1
  const LOCAL = {
    area: "Waterloo",
    postcode: "SE1 8TU",
    baseAddress: "6 Chaplin Cl, London SE1 8TU",
    businessName: "PrimeShield Waterloo",
    phone: "07448 180941",
    phoneDisplay: "07448 180941"
  };

  const stepsData = [
    {
      icon: ShieldCheck,
      tag: "01 // THE SAFEGUARD",
      title: "Smart Structural Isolation",
      short: `Complete inspection for ${LOCAL.area} homes.`,
      long: `We don't do blind spraying. Our technicians map entry routes, sub-floor pipes, and brickwork gaps unique to ${LOCAL.area} flats and houses, sealing them completely so pests can't get back inside.`,
      badge: "Free Local Survey Included"
    },
    {
      icon: Users,
      tag: "02 // FAMILY FIRST",
      title: "Eco-Shield Botanical Formulas",
      short: "100% Kid & Pet Safe Treatments.",
      long: "Harsh chemical smells are outdated. We use advanced, odorless biocides approved under UK safety regulations that completely destroy infestations while remaining totally non-toxic to your children and household pets.",
      badge: "Approved HSE Safe Products"
    },
    {
      icon: Zap,
      tag: "03 // INSTANT RESPONSE",
      title: "Chaplin Close Direct Dispatch",
      short: `Emergency coverage across the entire SE1 region.`,
      long: `With our rapid response vehicles loaded and ready right on ${LOCAL.baseAddress}, you don't wait days. We guarantee a local technician on-site within hours of your call for immediate peace of mind.`,
      badge: "Guaranteed Same-Day Arrival"
    }
  ];

  return (
    <section className="relative overflow-hidden bg-[#070709] py-24 lg:py-36 font-sans text-white selection:bg-[#F36F21] border-b border-zinc-900">
      
      {/* Absolute Micro-Grid Overlay & Glow Points */}
      <div className="absolute inset-0 bg-[radial-gradient(#ffffff01_1px,transparent_1px)] [background-size:16px_16px] pointer-events-none" />
      <div className="absolute -top-40 right-10 w-[600px] h-[600px] bg-[#F36F21]/5 rounded-full filter blur-[160px] pointer-events-none" />
      <div className="absolute -bottom-40 -left-20 w-[400px] h-[400px] bg-amber-600/5 rounded-full filter blur-[130px] pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-10 lg:px-12">
        
        {/* HEADER BLOCK: Premium SaaS Asymmetric Headline */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end pb-16 border-b border-zinc-800/60">
          <div className="lg:col-span-7 space-y-4">
            <div className="inline-flex items-center gap-2.5 px-3 py-1 rounded-full bg-zinc-950 border border-zinc-800 text-[11px] font-mono tracking-wider text-zinc-400">
              <span className="w-1.5 h-1.5 rounded-full bg-[#F36F21] animate-pulse" />
              {LOCAL.businessName} // Professional Proofing
            </div>
            <h2 className="text-4xl sm:text-6xl font-black tracking-tight leading-[1.05]">
              Built Local.<br />
              Trusted in <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#F36F21] to-[#ff8c42]">{LOCAL.area}.</span>
            </h2>
          </div>
          <div className="lg:col-span-5 lg:pl-6">
            <p className="text-zinc-400 text-sm sm:text-base leading-relaxed">
              We ditched the old school toxic sprays and long waiting lists. Our team delivers clean, fast, and completely permanent pest proofing solutions designed strictly for urban homes and shops in the SE1 postcode.
            </p>
          </div>
        </div>

        {/* MAIN DESIGN INTERACTION COMPONENT */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mt-16 items-start">
          
          {/* LEFT INTERACTIVE TRACK: Horizontal Timeline Concept */}
          <div className="lg:col-span-6 space-y-3">
            <div className="text-[10px] font-mono text-zinc-500 uppercase tracking-widest mb-4 ml-1">
              [ Hover or tap to toggle structural modules ]
            </div>

            {stepsData.map((step, idx) => {
              const Icon = step.icon;
              const isCurrent = activeStage === idx;

              return (
                <div
                  key={idx}
                  onMouseEnter={() => setActiveStage(idx)}
                  onClick={() => setActiveStage(idx)}
                  className={`group relative text-left p-6 rounded-2xl transition-all duration-300 border ${
                    isCurrent 
                      ? "bg-gradient-to-br from-[#121216] to-[#0c0c0e] border-zinc-700/80 shadow-2xl shadow-black/50" 
                      : "bg-transparent border-transparent hover:bg-zinc-950/40 hover:border-zinc-900"
                  }`}
                >
                  {/* Left Active Accent Indicator Bar */}
                  <div className={`absolute top-0 bottom-0 left-0 w-[3px] rounded-l-2xl transition-all duration-300 ${
                    isCurrent ? "bg-[#F36F21]" : "bg-transparent group-hover:bg-zinc-800"
                  }`} />

                  <div className="flex gap-5 items-start">
                    <div className={`p-3 rounded-xl border transition-all duration-300 ${
                      isCurrent 
                        ? "bg-[#F36F21]/10 border-[#F36F21]/30 text-[#F36F21]" 
                        : "bg-zinc-900 border-zinc-800 text-zinc-500 group-hover:text-zinc-300"
                    }`}>
                      <Icon size={20} strokeWidth={1.5} />
                    </div>

                    <div className="space-y-1 flex-1">
                      <p className="font-mono text-[9px] tracking-widest text-zinc-500 uppercase">
                        {step.tag}
                      </p>
                      <h3 className={`text-base font-bold tracking-tight transition-colors ${
                        isCurrent ? "text-white" : "text-zinc-300 group-hover:text-white"
                      }`}>
                        {step.title}
                      </h3>
                      <p className="text-zinc-400 text-xs sm:text-sm font-normal line-clamp-1">
                        {step.short}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* RIGHT SCREEN VIEWPORT: Immersive Content Display Area */}
          <div className="lg:col-span-6 lg:pl-4">
            <div className="relative bg-gradient-to-b from-[#0e0e11] to-[#0a0a0c] border border-zinc-800/80 rounded-2xl p-8 min-h-[380px] flex flex-col justify-between overflow-hidden group shadow-2xl">
              
              {/* Corner Tech Vectors */}
              <div className="absolute top-0 right-0 w-16 h-16 bg-zinc-900/40 border-b border-l border-zinc-800/60 rounded-bl-xl flex items-center justify-center font-mono text-[10px] text-zinc-600">
                SYS-0{activeStage + 1}
              </div>

              {/* Viewport Content */}
              <div className="space-y-6 relative z-10 pt-4">
                <span className="inline-block font-mono text-[10px] bg-zinc-900 text-[#F36F21] px-2.5 py-1 rounded border border-zinc-800 font-bold uppercase tracking-wider">
                  {stepsData[activeStage].badge}
                </span>
                
                <h4 className="text-xl sm:text-2xl font-extrabold text-white tracking-tight">
                  {stepsData[activeStage].title}
                </h4>
                
                <p className="text-zinc-400 text-sm sm:text-base leading-relaxed font-normal">
                  {stepsData[activeStage].long}
                </p>
              </div>

              {/* Bottom Integrated Meta Layer */}
              <div className="mt-8 pt-6 border-t border-zinc-900 flex flex-wrap items-center justify-between gap-4 relative z-10">
                <div className="flex items-center gap-2">
                  <MapPin size={13} className="text-zinc-500" />
                  <span className="text-xs text-zinc-400 font-mono">{LOCAL.postcode} Deployment Force</span>
                </div>
                <div className="flex items-center gap-1.5 text-xs font-medium text-emerald-500">
                  <CheckCircle2 size={13} /> Secure Verification Complete
                </div>
              </div>

              {/* Ambient Background Glow matching active selection */}
              <div className="absolute -bottom-16 -right-16 w-32 h-32 bg-[#F36F21]/10 rounded-full filter blur-2xl group-hover:bg-[#F36F21]/15 transition-all duration-500" />
            </div>
          </div>

        </div>

        {/* BOTTOM FLUID CALL BANNER */}
        <div className="relative overflow-hidden bg-gradient-to-r from-zinc-950 to-[#0e0e12] border border-zinc-800/80 rounded-2xl p-6 sm:p-8 mt-12 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="absolute left-0 top-0 bottom-0 w-[4px] bg-[#F36F21]" />
          <div className="space-y-1 text-center md:text-left">
            <h4 className="text-sm font-bold text-white tracking-wide">
              Have an urgent pest problem at your flat or shop?
            </h4>
            <p className="text-xs text-zinc-400 max-w-xl">
              Our vans operate daily out of <span className="text-zinc-200 font-semibold">{LOCAL.baseAddress}</span>. Get direct phone support with local emergency routing.
            </p>
          </div>
          
          <a
            href={`tel:${LOCAL.phone}`}
            className="w-full md:w-auto inline-flex items-center justify-center gap-2.5 bg-[#F36F21] hover:bg-[#ff8c42] text-white px-6 py-3.5 rounded-xl text-xs font-bold transition-all duration-300 shadow-xl shadow-[#F36F21]/10"
          >
            <span>Call Waterloo Hub: {LOCAL.phoneDisplay}</span>
            <ArrowUpRight size={14} strokeWidth={2.5} />
          </a>
        </div>

      </div>
    </section>
  );
}