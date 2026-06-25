





// import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import {
//   ShieldAlert,
//   Bug,
//   Rat,
//   ArrowRight,
//   Home,
//   Building2,
//   BadgeCheck,
//   Terminal,
//   Activity,
//   Maximize2
// } from "lucide-react";

// export default function PrimeShieldServices() {
//   const navigate = useNavigate();
//   const [activeSystem, setActiveSystem] = useState("01");

//   const LOCAL = {
//     area: "Wandsworth",
//     postcode: "SW18",
//     baseAddress: "91 Pirbright Rd, London SW18 5ND",
//   };

//   const servicesData = [
//     {
//       id: "01",
//       title: `Rodent Control ${LOCAL.area}`,
//       image: "/images/rodents.webp",
//       icon: Rat,
//       subTag: "Exclusion & Proofing Logistics",
//       metrics: { severity: "CRITICAL", vector: "Subterranean", deployment: "Immediate" },
//       details:
//         "High-density rodent interception engineered for SW18 properties. We seal subterranean ingress channels, shield external plumbing pipework, and implement multi-layered biological blocks beneath terrace sub-floors.",
//     },
//     {
//       id: "02",
//       title: `Bed Bug Treatment ${LOCAL.area}`,
//       image: "/images/bedbugs.webp",
//       icon: Bug,
//       subTag: "Thermal Eradication Matrix",
//       metrics: { severity: "HIGH", vector: "Structural Mating", deployment: "Within 2hr" },
//       details:
//         "Non-chemical thermal shocks combined with structural growth regulators. This formula breaks complex insect reproduction cycles instantly inside local multi-story rentals and private residential apartments.",
//     },
//     {
//       id: "03",
//       title: `Wasp Nest Removal ${LOCAL.area}`,
//       image: "/images/wasps.webp",
//       icon: ShieldAlert,
//       subTag: "High-Reach Vector Eradication",
//       metrics: { severity: "ACUTE", vector: "Aerial Colonization", deployment: "Same Day" },
//       details:
//         "Precision removal of defensive colonies from deep cavity voids, structural loft timbers, and roofing lines. Using micro-particle lances to suppress populations safely with zero perimeter contamination.",
//     },
//   ];

//   return (
//     <section className="relative overflow-hidden bg-[#070708] py-24 lg:py-32 font-sans selection:bg-[#F36F21] selection:text-white border-b border-white/5">
      
//       {/* Background Tech Grids */}
//       <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff03_1px,transparent_1px),linear-gradient(to_bottom,#ffffff03_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none" />
//       <div className="absolute top-10 right-10 w-[500px] h-[500px] bg-[#F36F21]/3 rounded-full filter blur-[120px] pointer-events-none" />

//       <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-10 lg:px-12">
        
//         {/* ASYMMETRICAL HEADER / TRACKING DATA */}
//         <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-24 items-end pb-8 border-b border-white/5">
//           <div className="lg:col-span-8">
//             <div className="inline-flex items-center gap-2 mb-4 bg-[#F36F21]/10 border border-[#F36F21]/20 px-3 py-1 rounded-sm">
//               <Activity size={12} className="text-[#F36F21] animate-pulse" />
//               <span className="text-slate-300 text-[10px] font-mono uppercase tracking-[0.2em]">
//                 Live Vector Feeds // Hub {LOCAL.postcode}
//               </span>
//             </div>
//             <h2 className="text-white text-3xl sm:text-5xl font-black tracking-tight leading-[1.05]">
//               Targeted Bio-Defences & <br />
//               <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-white to-slate-500">Structural Isolation.</span>
//             </h2>
//           </div>
//           <div className="lg:col-span-4 lg:text-right font-mono text-xs text-slate-500 hidden lg:block">
//             <p>LOC_DATA: {LOCAL.baseAddress}</p>
//             <p className="text-[#F36F21] mt-1">STATUS: OPERATIONAL SUB-UNIT</p>
//           </div>
//         </div>

//         {/* MODERN SPLIT HUB LAYOUT */}
//         <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
//           {/* LEFT SIDE: CONTROLLER INDEX */}
//           <div className="lg:col-span-4 space-y-3 lg:sticky lg:top-24">
//             <div className="text-[10px] font-mono text-slate-500 uppercase tracking-widest mb-4 flex items-center gap-2">
//               <Terminal size={12} /> Select Defense Protocol
//             </div>
//             {servicesData.map((sys) => {
//               const Icon = sys.icon;
//               const isSelected = activeSystem === sys.id;
//               return (
//                 <button
//                   key={sys.id}
//                   onClick={() => setActiveSystem(sys.id)}
//                   className={`w-full text-left p-4 rounded-lg border transition-all duration-300 flex items-center justify-between group/btn ${
//                     isSelected 
//                       ? "bg-[#141417] border-[#F36F21] text-white shadow-[0_0_20px_rgba(243,111,33,0.05)]" 
//                       : "bg-[#0d0d0f]/60 border-white/5 text-slate-400 hover:border-white/10 hover:bg-[#111113]"
//                   }`}
//                 >
//                   <div className="flex items-center gap-4">
//                     <span className={`font-mono text-xs ${isSelected ? "text-[#F36F21]" : "text-slate-600"}`}>
//                       [{sys.id}]
//                     </span>
//                     <span className="font-bold text-sm tracking-tight">{sys.title.split(' ')[0]} Isolation</span>
//                   </div>
//                   <Icon size={16} className={isSelected ? "text-[#F36F21]" : "text-slate-600 group-hover/btn:text-slate-400 transition-colors"} />
//                 </button>
//               );
//             })}

//             {/* Quick Map Context Card */}
//             <div className="mt-8 bg-[#0d0d0f] border border-white/5 rounded-lg p-4 font-mono text-[11px] text-slate-400 space-y-2">
//               <div className="flex justify-between border-b border-white/5 pb-1.5">
//                 <span className="text-slate-600">CENTRAL_HUB:</span>
//                 <span className="text-white">{LOCAL.area}</span>
//               </div>
//               <div className="flex justify-between border-b border-white/5 pb-1.5">
//                 <span className="text-slate-600">POST_RANGE:</span>
//                 <span className="text-white">{LOCAL.postcode} Sector</span>
//               </div>
//               <p className="text-[10px] leading-relaxed text-slate-500 pt-1">
//                 Technician logs confirm localized deployment capability from Pirbright Rd routes.
//               </p>
//             </div>
//           </div>

//           {/* RIGHT SIDE: DYNAMIC SCREEN DISPLAY */}
//           <div className="lg:col-span-8">
//             {servicesData.map((service) => {
//               if (service.id !== activeSystem) return null;
//               const Icon = service.icon;
//               return (
//                 <div 
//                   key={service.id} 
//                   className="bg-[#0e0e10] border border-white/10 rounded-xl overflow-hidden p-6 lg:p-8 animate-[fadeIn_0.4s_ease-out]"
//                 >
//                   {/* System Header */}
//                   <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-white/5 pb-6 mb-6">
//                     <div className="flex items-center gap-4">
//                       <div className="w-14 h-14 bg-[#F36F21]/10 border border-[#F36F21]/20 rounded-lg flex items-center justify-center text-[#F36F21]">
//                         <Icon size={26} strokeWidth={1.5} />
//                       </div>
//                       <div>
//                         <span className="text-[10px] font-mono uppercase tracking-widest text-[#F36F21] block">
//                           {service.subTag}
//                         </span>
//                         <h3 className="text-white text-xl sm:text-2xl font-black tracking-tight mt-0.5">
//                           {service.title}
//                         </h3>
//                       </div>
//                     </div>
                    
//                     <div className="flex gap-2">
//                       {Object.entries(service.metrics).map(([key, val]) => (
//                         <div key={key} className="bg-white/5 px-2 py-1 rounded border border-white/5 font-mono text-[9px]">
//                           <span className="text-slate-500 block uppercase text-[8px]">{key}</span>
//                           <span className="text-slate-200 font-bold">{val}</span>
//                         </div>
//                       ))}
//                     </div>
//                   </div>

//                   {/* Main Content Layout Split */}
//                   <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-stretch">
//                     <div className="md:col-span-7 flex flex-col justify-between space-y-6">
//                       <p className="text-slate-300 text-sm leading-relaxed font-normal">
//                         {service.details}
//                       </p>

//                       <div className="bg-[#141417] border border-white/5 p-4 rounded-lg space-y-2">
//                         <div className="flex items-center gap-2 text-white font-mono text-xs">
//                           <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-ping" />
//                           <span>SW18 Operations Active</span>
//                         </div>
//                         <p className="text-xs text-slate-400">
//                           Deployments are managed dynamically from our <span className="text-white">{LOCAL.baseAddress}</span> station to bypass main traffic choke points.
//                         </p>
//                       </div>

//                       <div>
//                         <button
//                           onClick={() => navigate("/contact-us")}
//                           className="w-full sm:w-auto inline-flex items-center justify-center gap-3 bg-[#F36F21] hover:bg-[#d65b14] text-white px-6 py-3 rounded-md text-[11px] font-black uppercase tracking-[0.2em] transition-all duration-300 cursor-pointer"
//                         >
//                           <span>Initiate Immediate Containment</span>
//                           <ArrowRight size={14} />
//                         </button>
//                       </div>
//                     </div>

//                     <div className="md:col-span-5 h-64 md:h-auto min-h-[220px] relative rounded-lg overflow-hidden border border-white/5 group">
//                       <img
//                         src={service.image}
//                         alt={service.title}
//                         className="w-full h-full object-cover opacity-80 group-hover:scale-105 transition-transform duration-700"
//                         loading="lazy"
//                       />
//                       <div className="absolute inset-0 bg-gradient-to-t from-[#0e0e10] via-transparent to-transparent" />
//                       <div className="absolute bottom-3 left-3 bg-black/60 backdrop-blur-sm px-2 py-1 rounded font-mono text-[9px] text-slate-400 flex items-center gap-1.5">
//                         <Maximize2 size={10} /> FIELD_SNAP_{service.id}.SYS
//                       </div>
//                     </div>
//                   </div>

//                 </div>
//               );
//             })}
//           </div>

//         </div>

//         {/* BOTTOM HORIZONTAL INDUSTRIAL METRICS */}
//         <div className="mt-20 pt-12 border-t border-white/5 grid grid-cols-1 md:grid-cols-3 gap-6">
//           {[
//             {
//               icon: Home,
//               title: "SW18 Domestic Isolation",
//               text: "Sanitisation systems mapped to Wandsworth residential properties, riverside apartments, and character conversions near East Hill.",
//             },
//             {
//               icon: Building2,
//               title: "Commercial Asset Armor",
//               text: "Low-profile, zero-trace corporate auditing and rapid regulatory compliance defense frameworks designed for busy local commercial sectors.",
//             },
//             {
//               icon: BadgeCheck,
//               title: "The Pirbright Rd Link",
//               text: "Proximity scheduling models run directly from our central SW18 hub guarantee pinpoint technician timing with no transit drag.",
//             },
//           ].map((item, index) => {
//             const Icon = item.icon;
//             return (
//               <div key={index} className="flex gap-4 p-2">
//                 <div className="w-8 h-8 rounded bg-white/5 border border-white/10 text-slate-400 flex items-center justify-center shrink-0 mt-0.5">
//                   <Icon size={16} />
//                 </div>
//                 <div>
//                   <h4 className="text-white font-bold text-sm tracking-tight">{item.title}</h4>
//                   <p className="mt-1.5 text-slate-400 text-xs leading-relaxed font-normal">{item.text}</p>
//                 </div>
//               </div>
//             );
//           })}
//         </div>

//         {/* GLOBAL ROUTE TRIGGER */}
//         <div className="text-center mt-16 pt-8 border-t border-white/5">
//           <button
//             onClick={() => navigate("/services")}
//             className="group inline-flex items-center gap-3 text-slate-400 hover:text-white text-xs font-mono uppercase tracking-[0.2em] transition-colors cursor-pointer"
//           >
//             <span>Access Full Services Matrix (All 12 {LOCAL.area} Services)</span>
//             <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform text-[#F36F21]" />
//           </button>
//         </div>

//       </div>
//     </section>
//   );
// }










// import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import {
//   ShieldAlert,
//   Bug,
//   Rat,
//   ArrowRight,
//   Home,
//   Building2,
//   BadgeCheck,
//   MapPin,
//   Phone,
//   Maximize2
// } from "lucide-react";

// export default function PrimeShieldServices() {
//   const navigate = useNavigate();
//   const [activeSystem, setActiveSystem] = useState("01");

//   const LOCAL = {
//     area: "Waterloo",
//     postcode: "SE1",
//     baseAddress: "6 Chaplin Cl, London SE1 8TU",
//     phone: "07448 180941",
//   };

//   const servicesData = [
//     {
//       id: "01",
//       title: `Rodent Control ${LOCAL.area}`,
//       image: "/images/rodents.webp",
//       icon: Rat,
//       subTag: "Mice & Rat Proofing",
//       metrics: { priority: "URGENT", type: "Rats & Mice", response: "Same Day" },
//       details:
//         "Complete structural eradication designed for Waterloo properties. We thoroughly inspect your premises, block deep structural gaps, seal pipe entry points, and install secure proofing barriers to stop pests from returning.",
//     },
//     {
//       id: "02",
//       title: `Bed Bug Treatment ${LOCAL.area}`,
//       image: "/images/bedbugs.webp",
//       icon: Bug,
//       subTag: "Advanced Eradication",
//       metrics: { priority: "CRITICAL", type: "Bed Bugs", response: "Within 2hr" },
//       details:
//         "Highly effective heat treatments and targeted spray solutions that eliminate bed bugs at all life stages. Perfect for residential homes, rental apartments, and local commercial hotels looking for quick, discreet relief.",
//     },
//     {
//       id: "03",
//       title: `Wasp Nest Removal ${LOCAL.area}`,
//       image: "/images/wasps.webp",
//       icon: ShieldAlert,
//       subTag: "Safe Nest Elimination",
//       metrics: { priority: "HIGH", type: "Wasps & Hornets", response: "Rapid" },
//       details:
//         "Safe and fast removal of aggressive wasp nests from lofts, cavity walls, and rooflines. Our technicians use professional equipment to neutralise the nest quickly without damaging your property.",
//     },
//   ];

//   return (
//     <section className="relative overflow-hidden bg-[#070708] py-24 lg:py-32 font-sans selection:bg-[#F36F21] selection:text-white border-b border-white/5">
      
//       {/* Background Grids & Ambient Glow */}
//       <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff02_1px,transparent_1px),linear-gradient(to_bottom,#ffffff02_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none" />
//       <div className="absolute top-10 right-10 w-[500px] h-[500px] bg-[#F36F21]/5 rounded-full filter blur-[120px] pointer-events-none" />

//       <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-10 lg:px-12">
        
//         {/* UPPER HEADER - ADDRESS & CONTACT OVERVIEW */}
//         <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-16 items-end pb-8 border-b border-white/5">
//           <div className="lg:col-span-8">
//             <div className="inline-flex items-center gap-2 mb-4 bg-[#F36F21]/10 border border-[#F36F21]/20 px-3 py-1 rounded-full">
//               <span className="w-1.5 h-1.5 rounded-full bg-[#F36F21] animate-pulse" />
//               <span className="text-slate-300 text-[10px] font-mono uppercase tracking-[0.15em]">
//                 Local Pest Experts // {LOCAL.postcode} Hub
//               </span>
//             </div>
//             <h2 className="text-white text-3xl sm:text-5xl font-black tracking-tight leading-[1.1]">
//               Professional Pest Control & <br />
//               <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-slate-200 to-slate-400">Guaranteed Property Proofing.</span>
//             </h2>
//           </div>
//           <div className="lg:col-span-4 lg:text-right font-mono text-xs text-slate-400 space-y-1.5 hidden lg:block">
//             <div className="flex items-center justify-end gap-2 text-slate-500">
//               <MapPin size={12} className="text-[#F36F21]" />
//               <span>{LOCAL.baseAddress}</span>
//             </div>
//             <div className="flex items-center justify-end gap-2 text-white font-bold">
//               <Phone size={12} className="text-[#F36F21]" />
//               <span>{LOCAL.phone}</span>
//             </div>
//           </div>
//         </div>

//         {/* SPLIT SERVICES LAYOUT */}
//         <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
//           {/* LEFT CONTENT: TABS SELECTION */}
//           <div className="lg:col-span-4 space-y-3 lg:sticky lg:top-24">
//             <div className="text-[10px] font-mono text-slate-500 uppercase tracking-widest mb-4">
//               Select a Pest Service
//             </div>
//             {servicesData.map((sys) => {
//               const Icon = sys.icon;
//               const isSelected = activeSystem === sys.id;
//               return (
//                 <button
//                   key={sys.id}
//                   onClick={() => setActiveSystem(sys.id)}
//                   className={`w-full text-left p-4 rounded-xl border transition-all duration-300 flex items-center justify-between group/btn ${
//                     isSelected 
//                       ? "bg-[#141417] border-[#F36F21] text-white shadow-[0_0_25px_rgba(243,111,33,0.06)]" 
//                       : "bg-[#0d0d0f]/60 border-white/5 text-slate-400 hover:border-white/10 hover:bg-[#111113]"
//                   }`}
//                 >
//                   <div className="flex items-center gap-4">
//                     <span className={`font-mono text-xs ${isSelected ? "text-[#F36F21]" : "text-slate-600"}`}>
//                       0{sys.id}
//                     </span>
//                     <span className="font-bold text-sm tracking-tight">{sys.title.split(' ')[0]} Control</span>
//                   </div>
//                   <Icon size={16} className={isSelected ? "text-[#F36F21]" : "text-slate-500 group-hover/btn:text-slate-400 transition-colors"} />
//                 </button>
//               );
//             })}

//             {/* Local Context Widget */}
//             <div className="mt-8 bg-[#0d0d0f] border border-white/5 rounded-xl p-4 font-mono text-[11px] text-slate-400 space-y-2.5">
//               <div className="flex justify-between border-b border-white/5 pb-2">
//                 <span className="text-slate-600">SERVICE AREA:</span>
//                 <span className="text-white font-sans font-semibold">{LOCAL.area} & Surrounds</span>
//               </div>
//               <div className="flex justify-between border-b border-white/5 pb-2">
//                 <span className="text-slate-600">COVERAGE:</span>
//                 <span className="text-white font-sans font-semibold">{LOCAL.postcode} Postcodes</span>
//               </div>
//               <div className="flex justify-between pb-1">
//                 <span className="text-slate-600">DIRECT LINE:</span>
//                 <span className="text-[#F36F21] font-sans font-semibold">{LOCAL.phone}</span>
//               </div>
//               <p className="text-[10px] leading-relaxed text-slate-500 pt-1 font-sans">
//                 Our local emergency response teams are based close to Waterloo station for lightning-fast dispatch.
//               </p>
//             </div>
//           </div>

//           {/* RIGHT CONTENT: MAIN DETAILS PANEL */}
//           <div className="lg:col-span-8">
//             {servicesData.map((service) => {
//               if (service.id !== activeSystem) return null;
//               const Icon = service.icon;
//               return (
//                 <div 
//                   key={service.id} 
//                   className="bg-[#0e0e10] border border-white/10 rounded-2xl overflow-hidden p-6 lg:p-8 animate-[fadeIn_0.3s_ease-out]"
//                 >
//                   {/* Service Header */}
//                   <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-white/5 pb-6 mb-6">
//                     <div className="flex items-center gap-4">
//                       <div className="w-14 h-14 bg-[#F36F21]/10 border border-[#F36F21]/20 rounded-xl flex items-center justify-center text-[#F36F21]">
//                         <Icon size={26} strokeWidth={1.5} />
//                       </div>
//                       <div>
//                         <span className="text-[10px] font-mono uppercase tracking-widest text-[#F36F21] block font-semibold">
//                           {service.subTag}
//                         </span>
//                         <h3 className="text-white text-xl sm:text-2xl font-black tracking-tight mt-0.5">
//                           {service.title}
//                         </h3>
//                       </div>
//                     </div>
                    
//                     <div className="flex gap-2">
//                       {Object.entries(service.metrics).map(([key, val]) => (
//                         <div key={key} className="bg-white/5 px-2.5 py-1 rounded-md border border-white/5 font-mono text-[9px]">
//                           <span className="text-slate-500 block uppercase text-[7px] tracking-wider">{key}</span>
//                           <span className="text-slate-200 font-bold font-sans">{val}</span>
//                         </div>
//                       ))}
//                     </div>
//                   </div>

//                   {/* Body Text & Media Box */}
//                   <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-stretch">
//                     <div className="md:col-span-7 flex flex-col justify-between space-y-6">
//                       <p className="text-slate-300 text-sm leading-relaxed font-normal">
//                         {service.details}
//                       </p>

//                       <div className="bg-[#141417] border border-white/5 p-4 rounded-xl space-y-1.5">
//                         <div className="flex items-center gap-2 text-white text-xs font-semibold">
//                           <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
//                           <span>Emergency Response Available</span>
//                         </div>
//                         <p className="text-xs text-slate-400 leading-relaxed">
//                           Local vans are packed with professional materials ready to deploy. We bypass heavy traffic to reach your location instantly.
//                         </p>
//                       </div>

//                       <div>
//                         <button
//                           onClick={() => navigate("/contact-us")}
//                           className="w-full sm:w-auto inline-flex items-center justify-center gap-3 bg-[#F36F21] hover:bg-[#d65b14] text-white px-6 py-3.5 rounded-lg text-xs font-black uppercase tracking-wider transition-all duration-300 cursor-pointer shadow-lg shadow-[#F36F21]/10"
//                         >
//                           <span>Book an Inspection Now</span>
//                           <ArrowRight size={14} />
//                         </button>
//                       </div>
//                     </div>

//                     {/* Right Content Image Frame */}
//                     <div className="md:col-span-5 h-64 md:h-auto min-h-[220px] relative rounded-xl overflow-hidden border border-white/5 group">
//                       <img
//                         src={service.image}
//                         alt={service.title}
//                         className="w-full h-full object-cover opacity-80 group-hover:scale-105 transition-transform duration-700"
//                         loading="lazy"
//                       />
//                       <div className="absolute inset-0 bg-gradient-to-t from-[#0e0e10] via-transparent to-transparent" />
//                       <div className="absolute bottom-3 left-3 bg-black/60 backdrop-blur-sm px-2 py-1 rounded font-mono text-[9px] text-slate-400 flex items-center gap-1.5">
//                         <Maximize2 size={10} /> LIVE_PRO_SNAP.JPG
//                       </div>
//                     </div>
//                   </div>

//                 </div>
//               );
//             })}
//           </div>

//         </div>

//         {/* BOTTOM INFORMATIONAL FEATURES */}
//         <div className="mt-20 pt-12 border-t border-white/5 grid grid-cols-1 md:grid-cols-3 gap-6">
//           {[
//             {
//               icon: Home,
//               title: "Waterloo Domestic Protection",
//               text: "Residential treatments tailor-made for homes, rental flats, and historic terraced houses across the Waterloo area.",
//             },
//             {
//               icon: Building2,
//               title: "Commercial Asset Defense",
//               text: "Discreet, high-efficiency pest control audits and fast compliance safeguards for busy hotels, restaurants, and offices.",
//             },
//             {
//               icon: BadgeCheck,
//               title: "The Chaplin Close Edge",
//               text: "Operating directly from our SE1 hub ensures reliable arrival windows and zero delays when you need us most.",
//             },
//           ].map((item, index) => {
//             const Icon = item.icon;
//             return (
//               <div key={index} className="flex gap-4 p-2">
//                 <div className="w-9 h-9 rounded-lg bg-white/5 border border-white/10 text-slate-400 flex items-center justify-center shrink-0 mt-0.5">
//                   <Icon size={16} />
//                 </div>
//                 <div>
//                   <h4 className="text-white font-bold text-sm tracking-tight">{item.title}</h4>
//                   <p className="mt-1.5 text-slate-400 text-xs leading-relaxed font-normal">{item.text}</p>
//                 </div>
//               </div>
//             );
//           })}
//         </div>

//         {/* RE-LINKED BOTTOM REDIRECT */}
//         <div className="text-center mt-16 pt-8 border-t border-white/5">
//           <button
//             onClick={() => navigate("/services")}
//             className="group inline-flex items-center gap-3 text-slate-400 hover:text-white text-xs font-mono uppercase tracking-wider transition-colors cursor-pointer"
//           >
//             <span>View All Professional Services (All 12 {LOCAL.area} Treatments)</span>
//             <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform text-[#F36F21]" />
//           </button>
//         </div>

//       </div>
//     </section>
//   );
// }









import React from "react";
import { useNavigate } from "react-router-dom";
import {
  ShieldAlert,
  Bug,
  Rat,
  ArrowRight,
  MapPin,
  Sparkles,
  Zap,
  Crosshair,
  ShieldCheck
} from "lucide-react";

export default function PrimeShieldServices() {
  const navigate = useNavigate();

  const LOCAL = {
    area: "Waterloo",
    postcode: "SE1",
    baseAddress: "6 Chaplin Cl, London SE1 8TU",
    phone: "07448 180941",
  };

  const frameworks = [
    {
      id: "01",
      title: `Structural Rodent Eradication`,
      locationCtx: `Engineered for ${LOCAL.area} Properties`,
      icon: Rat,
      accentColor: "from-[#F36F21]/20 to-transparent",
      badge: "Heavy Duty Proofing",
      features: ["Mice & Rat Entry Exclusion", "Pipe & Airbrick Mesh-Sealing", "Post-Eradication Sanitisation"],
      metric: "100% Sealed",
      desc: "Complete structural protection designed for local properties. We systematically isolate, block deep foundational gaps, seal pipe paths, and mount high-tensile mesh barriers to secure your structure permanently.",
      gridClass: "lg:col-span-7",
      image: "/images/rodents.webp"
    },
    {
      id: "02",
      title: `Thermal Bed Bug Extermination`,
      locationCtx: `Fast Response Across ${LOCAL.postcode}`,
      icon: Bug,
      accentColor: "from-cyan-500/10 to-transparent",
      badge: "Thermal / Chemical Hybrid",
      features: ["All Life-Stage Elimination", "Rapid 2-Hour Mobilisation", "Zero Residual Odour"],
      metric: "Immediate Relief",
      desc: "High-grade heat distribution vectors and professional target sprays engineered to completely break bed bug reproduction cycles instantly. Discreet setup perfect for apartment complexes.",
      gridClass: "lg:col-span-5",
      image: "/images/bedbugs.webp"
    },
    {
      id: "03",
      title: `High-Reach Wasp Nest Neutralisation`,
      locationCtx: `${LOCAL.area} Emergency Response`,
      icon: ShieldAlert,
      accentColor: "from-amber-500/10 to-transparent",
      badge: "Certified Rapid Removal",
      features: ["Cavity Wall & Loft Access", "Eco-Conscious Neutralizers", "Same-Day Eradication Guarantee"],
      metric: "Zero Risk",
      desc: "Instant breakdown of aggressive hives nestled in roofs, high-level structural fascia, or cavity structures. Technicians arrive fully equipped to deploy pressure-injected countermeasures without risking secondary structural damage.",
      gridClass: "lg:col-span-12",
      image: "/images/wasps.webp"
    },
  ];

  return (
    <section className="relative overflow-hidden bg-[#070708] py-24 lg:py-32 font-sans antialiased selection:bg-[#F36F21] selection:text-white">
      {/* Structural Neon Grid-Mesh Backing */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff02_1px,transparent_1px),linear-gradient(to_bottom,#ffffff02_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none" />
      <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-[#F36F21]/[0.015] rounded-full filter blur-[150px] pointer-events-none" />
      
      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-10 lg:px-12">
        
        {/* KINETIC HEADER FRAME */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-20 pb-10 border-b border-white/[0.05]">
          <div className="max-w-xl">
            <div className="inline-flex items-center gap-2 mb-4 bg-white/[0.02] border border-white/[0.08] px-3 py-1 rounded-full">
              <Sparkles size={12} className="text-[#F36F21]" />
              <span className="text-neutral-400 text-[10px] font-mono tracking-widest uppercase">Operational Architecture</span>
            </div>
            <h2 className="text-white text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight leading-none">
              Deployable <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#F36F21] via-white to-neutral-400">
                Pest Countermeasures
              </span>
            </h2>
          </div>
          
          <div className="flex flex-col items-start md:items-end gap-2 text-left md:text-right font-mono text-xs text-neutral-500">
            <div className="flex items-center gap-2 bg-neutral-900/60 px-3 py-1.5 rounded-lg border border-white/[0.03]">
              <MapPin size={13} className="text-[#F36F21]" />
              <span className="text-neutral-300 font-sans">{LOCAL.baseAddress}</span>
            </div>
            <p>Ready Units: SE1 Dispatch Outpost &bull; Active Route Monitoring</p>
          </div>
        </div>

        {/* ASYMMETRICAL MOLECULAR GRID ROW */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
          {frameworks.map((card) => {
            const Icon = card.icon;
            const isFullWidth = card.gridClass === "lg:col-span-12";

            return (
              <div
                key={card.id}
                onClick={() => navigate("/contact-us")}
                className={`${card.gridClass} group relative bg-[#0E0F12] border border-white/[0.06] hover:border-white/20 rounded-2xl p-6 lg:p-8 transition-all duration-500 flex flex-col justify-between overflow-hidden shadow-2xl cursor-pointer`}
              >
                {/* Fixed Background Image Layer - High visibility by default */}
                <div className="absolute inset-0 z-0 overflow-hidden rounded-2xl">
                  <img 
                    src={card.image} 
                    alt={card.title}
                    className="w-full h-full object-cover opacity-65 group-hover:opacity-90 scale-100 group-hover:scale-105 transition-all duration-700 ease-out"
                  />
                  {/* Balanced Vignette overlay to keep text highly readable against a rich clear image */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#090A0C] via-[#090A0C]/85 to-[#090A0C]/50" />
                </div>

                {/* Background Ambient Flare */}
                <div className={`absolute -top-24 -right-24 w-48 h-48 bg-gradient-to-br ${card.accentColor} rounded-full filter blur-3xl opacity-40 group-hover:opacity-70 transition-opacity duration-500 pointer-events-none z-0`} />
                
                {/* Content Container (Forced Above Image Layer) */}
                <div className={`relative z-10 w-full ${isFullWidth ? "grid grid-cols-1 lg:grid-cols-12 gap-8 items-center" : "space-y-8"}`}>
                  
                  {/* Card Content Segment */}
                  <div className={`${isFullWidth ? "lg:col-span-7" : "w-full"} space-y-5`}>
                    <div className="flex items-center justify-between">
                      <div className="w-11 h-11 bg-neutral-900/90 border border-white/10 rounded-xl flex items-center justify-center text-[#F36F21] group-hover:scale-105 transition-transform duration-300 shadow-inner">
                        <Icon size={20} strokeWidth={1.5} />
                      </div>
                      <span className="text-[10px] font-mono font-semibold tracking-wider bg-neutral-900/80 border border-white/[0.08] px-2.5 py-1 rounded text-neutral-300">
                        {card.metric}
                      </span>
                    </div>

                    <div>
                      <span className="text-[10px] font-mono tracking-wide text-[#F36F21] block mb-1">
                        {card.locationCtx}
                      </span>
                      <h3 className="text-white text-xl lg:text-2xl font-bold tracking-tight group-hover:text-[#F36F21] transition-colors drop-shadow-md">
                        {card.title}
                      </h3>
                      <p className="text-neutral-200 text-xs leading-relaxed mt-2.5 font-normal drop-shadow">
                        {card.desc}
                      </p>
                    </div>

                    {/* Bullet Indicators Layout */}
                    <ul className="space-y-2 pt-2">
                      {card.features.map((feat, i) => (
                        <li key={i} className="flex items-center gap-2 text-neutral-200 text-xs drop-shadow">
                          <div className="w-1 h-1 rounded-full bg-[#F36F21]" />
                          <span className="font-sans text-neutral-300">{feat}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Call-to-action Matrix */}
                  <div className={`${isFullWidth ? "lg:col-span-5 border-t lg:border-t-0 lg:border-l border-white/[0.08] lg:pl-8 pt-6 lg:pt-0" : "pt-4 border-t border-white/[0.06]"} flex flex-col sm:flex-row lg:flex-col gap-3 relative z-10`}>
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        navigate("/contact-us");
                      }}
                      className="w-full inline-flex items-center justify-between bg-neutral-900/60 hover:bg-[#F36F21] text-white border border-white/10 hover:border-[#F36F21] px-4 py-3.5 rounded-xl text-xs font-bold tracking-wider uppercase transition-all duration-300 group/btn shadow-lg backdrop-blur-sm"
                    >
                      <span>Book service</span>
                      <ArrowRight size={14} className="transform -rotate-45 group-hover:rotate-0 transition-transform" />
                    </button>
                    
                    <a
                      href={`tel:${LOCAL.phone}`}
                      onClick={(e) => e.stopPropagation()}
                      className="w-full inline-flex items-center justify-center bg-neutral-950/40 hover:bg-neutral-900/60 text-neutral-300 hover:text-white border border-transparent hover:border-white/[0.08] px-4 py-3.5 rounded-xl text-xs font-medium transition-all text-center backdrop-blur-sm"
                    >
                      Call Duty Unit: {LOCAL.phone}
                    </a>
                  </div>

                </div>

                {/* Subtle Geometric Tech Footer Accent */}
                <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
            );
          })}
        </div>

        {/* METRIC BANNER FOR INTEGRATED SECURITY */}
        <div className="mt-16 bg-neutral-900/30 border border-white/[0.04] rounded-2xl p-6 grid grid-cols-1 md:grid-cols-3 gap-6 text-center md:text-left">
          <div className="flex items-center gap-4 justify-center md:justify-start">
            <div className="text-[#F36F21]"><Zap size={20} /></div>
            <div>
              <p className="text-white text-xs font-bold tracking-tight">Active Response Grid</p>
              <p className="text-neutral-500 text-[11px] mt-0.5">Vans pre-staged continuously inside the SE1 grid area.</p>
            </div>
          </div>
          <div className="flex items-center gap-4 justify-center md:justify-start border-y md:border-y-0 md:border-x border-white/[0.05] py-4 md:py-0 md:px-6">
            <div className="text-[#F36F21]"><Crosshair size={20} /></div>
            <div>
              <p className="text-white text-xs font-bold tracking-tight">Precision Isolation Targeting</p>
              <p className="text-neutral-500 text-[11px] mt-0.5">We track and secure path access lines down to structural millimetres.</p>
            </div>
          </div>
          <div className="flex items-center gap-4 justify-center md:justify-start">
            <div className="text-[#F36F21]"><ShieldCheck size={20} /></div>
            <div>
              <p className="text-white text-xs font-bold tracking-tight">100% Insured Clearance</p>
              <p className="text-neutral-500 text-[11px] mt-0.5">Compliant with premium UK safety guidelines and environmental standards.</p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}