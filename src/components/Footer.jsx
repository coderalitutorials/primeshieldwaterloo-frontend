


// import React from "react";

// import { Link } from "react-router-dom";

// import { ShieldCheck, Phone, MapPin, ArrowRight, Radio, Server } from "lucide-react";



// const Footer = () => {

//   // SINGLE SOURCE OF TRUTH FOR WANDSWORTH NODE

//   const phoneNumber = "07356 253624";

//   const address = "91 Pirbright Rd, London SW18 5ND";

//   const area = "Wandsworth";

//   const postcodeZone = "SW18";



//   return (

//     <footer className="relative bg-[#070708] text-white overflow-hidden border-t border-white/5 z-30 font-sans selection:bg-[#F36F21] selection:text-white">

     

//       {/* Premium Micro-Grid System Overlay */}

//       <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff02_1px,transparent_1px),linear-gradient(to_bottom,#ffffff02_1px,transparent_1px)] bg-[size:3rem_3rem] pointer-events-none" />

     

//       {/* Targeted Ambient Aura Glows */}

//       <div className="absolute -top-40 right-10 w-[450px] h-[450px] bg-[#F36F21]/5 rounded-full blur-[130px] pointer-events-none" />

//       <div className="absolute bottom-0 left-1/4 w-[350px] h-[350px] bg-orange-500/[0.03] rounded-full blur-[100px] pointer-events-none" />



//       <div className="max-w-7xl mx-auto px-6 md:px-10 lg:px-12 pt-24 pb-10 relative z-10">

       

//         {/* NEW 4-COLUMN GRID CONFIGURATION */}

//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8 pb-16 border-b border-white/5">

         

//           {/* COLUMN 1: BRAND PLATFORM (Occupies 5 Cols) */}

//           <div className="lg:col-span-5 space-y-8 text-left">

//             <div className="space-y-5">

//               <Link to="/" className="inline-block group focus:outline-none">

//                 <img

//                   src="/images/primelogo.webp"

//                   alt={`PrimeShield ${area} Pest Control`}

//                   className="h-14 w-auto object-contain filter brightness-110 group-hover:opacity-90 transition-opacity"

//                   loading="lazy"

//                   decoding="async"

//                 />

//               </Link>

//               <p className="text-slate-400 text-xs sm:text-sm leading-relaxed max-w-sm font-normal">

//                 Structural biological defense and risk isolation frameworks engineered for high-end residential assets, corporate landmarks, and premium real estate portfolios across {area} and the {postcodeZone} corridor.

//               </p>

//             </div>



//             {/* Redesigned Active Status Badge */}

//             <div className="inline-flex items-center gap-3 bg-white/[0.02] border border-white/5 rounded-xl px-4 py-2.5">

//               <span className="relative flex h-2 w-2">

//                 <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>

//                 <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>

//               </span>

//               <div>

//                 <p className="text-[9px] font-bold uppercase tracking-widest font-mono text-slate-500">{postcodeZone} Operations Hub</p>

//                 <p className="text-xs font-bold text-white mt-0.5">Grid Monitoring Live</p>

//               </div>

//             </div>

//           </div>



//           {/* COLUMN 2: CORE FRAMEWORK (Occupies 3 Cols) */}

//           <div className="lg:col-span-3 lg:pl-4 space-y-6 text-left">

//             <div className="flex items-center gap-2 border-b border-white/5 pb-3">

//               <Radio size={12} className="text-[#F36F21]" />

//               <h4 className="text-[10px] font-mono tracking-[0.2em] text-[#F36F21] uppercase font-black">

//                 Core Framework

//               </h4>

//             </div>

           

//             <nav className="flex flex-col gap-3.5 text-slate-400 text-xs sm:text-sm font-medium">

//               {[

//                 { name: `PrimeShield ${area} Home`, path: "/" },

//                 { name: `About Our ${area} Branch`, path: "/about-us" },

//                 { name: `Professional ${postcodeZone} Services`, path: "/services" },

//                 { name: "Secure Response Ticket", path: "/contact-us" },

//               ].map((link) => (

//                 <Link

//                   key={link.name}

//                   to={link.path}

//                   className="hover:text-white transition-colors duration-200 flex items-center justify-between group/link"

//                 >

//                   <span>{link.name}</span>

//                   <ArrowRight size={12} className="opacity-0 -translate-x-1 group-hover/link:opacity-100 group-hover/link:translate-x-0 text-slate-500 transition-all duration-200" />

//                 </Link>

//               ))}

//             </nav>

//           </div>



//           {/* COLUMN 3: DEPLOYMENT SECTORS (Occupies 4 Cols) */}

//           <div className="lg:col-span-4 lg:pl-6 space-y-6 text-left">

//             <div className="flex items-center gap-2 border-b border-white/5 pb-3">

//               <Server size={12} className="text-[#F36F21]" />

//               <h4 className="text-[10px] font-mono tracking-[0.2em] text-[#F36F21] uppercase font-black">

//                 Targeted Interventions

//               </h4>

//             </div>



//             <div className="flex flex-col gap-3.5 text-slate-400 text-xs sm:text-sm font-medium">

//               {[

//                 { name: `Rat & Mice Control ${postcodeZone}`, state: { scrollToService: "Rats & Mice Control", category: "Rodents & Wildlife" } },

//                 { name: `Bed Bugs Thermal Eradication ${postcodeZone}`, state: { scrollToService: "Bed Bugs Control", category: "Insects" } },

//                 { name: `Carpet Moth Proofing ${area}`, state: { scrollToService: "Carpet Moth Control Treatment", category: "Insects" } },

//                 { name: "Advanced Micro-Biocide Sanitation", state: { scrollToService: null, category: "All" } },

//               ].map((service) => (

//                 <Link

//                   key={service.name}

//                   to="/services"

//                   state={service.state}

//                   className="hover:text-white transition-colors duration-200 flex items-center justify-between group/link"

//                 >

//                   <span>{service.name}</span>

//                   <ArrowRight size={12} className="opacity-0 -translate-x-1 group-hover/link:opacity-100 group-hover/link:translate-x-0 text-slate-500 transition-all duration-200" />

//                 </Link>

//               ))}

//             </div>

//           </div>



//         </div>



//         {/* MIDDLE COMMAND PODS: THREE CONSOLIDATED MATRIX CARDS */}

//         <div className="grid grid-cols-1 md:grid-cols-3 gap-4 my-8">

         

//           {/* POD 1: LOGISTICS CENTER */}

//           <div className="p-5 rounded-xl bg-white/[0.01] border border-white/5 flex items-center gap-4 text-left group hover:bg-white/[0.02] hover:border-white/10 transition-all duration-300">

//             <div className="p-3 rounded-lg bg-white/[0.02] border border-white/5 text-[#F36F21] group-hover:bg-[#F36F21]/10 group-hover:border-[#F36F21]/20 transition-all">

//               <MapPin className="w-4 h-4" />

//             </div>

//             <div className="min-w-0">

//               <span className="block text-[9px] font-mono text-slate-500 uppercase tracking-wider">HQ Logistics Node</span>

//               <span className="text-xs font-bold text-slate-200 block mt-0.5 truncate">{address}</span>

//             </div>

//           </div>



//           {/* POD 2: TELEMETRY HOTLINE */}

//           <a

//             href={`tel:${phoneNumber.replace(/\s/g, "")}`}

//             className="p-5 rounded-xl bg-white/[0.01] border border-white/5 flex items-center gap-4 text-left group hover:bg-[#F36F21]/5 hover:border-[#F36F21]/20 transition-all duration-300"

//           >

//             <div className="p-3 rounded-lg bg-white/[0.02] border border-white/5 text-emerald-400 group-hover:bg-emerald-500/10 group-hover:border-emerald-500/20 transition-all">

//               <Phone className="w-4 h-4" />

//             </div>

//             <div className="min-w-0">

//               <span className="block text-[9px] font-mono text-slate-500 uppercase tracking-wider">Emergency Dispatch Desk</span>

//               <span className="text-xs font-black text-white block mt-0.5 group-hover:text-[#F36F21] transition-colors">{phoneNumber}</span>

//             </div>

//           </a>



//           {/* POD 3: SECTOR CATCHMENT */}

//           <div className="p-5 rounded-xl bg-white/[0.01] border border-white/5 flex items-center gap-4 text-left group hover:bg-white/[0.02] hover:border-white/10 transition-all duration-300">

//             <div className="p-3 rounded-lg bg-white/[0.02] border border-white/5 text-[#F36F21] group-hover:bg-[#F36F21]/10 group-hover:border-[#F36F21]/20 transition-all">

//               <ShieldCheck className="w-4 h-4" />

//             </div>

//             <div className="min-w-0">

//               <span className="block text-[9px] font-mono text-slate-500 uppercase tracking-wider">Enforcement Catchment</span>

//               <span className="text-xs font-bold text-slate-200 block mt-0.5">{area} & {postcodeZone} Postcodes</span>

//             </div>

//           </div>



//         </div>



//         {/* LOWER COMPLIANCE FLOOR */}

//         <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-6 border-t border-white/5 text-[11px] font-medium text-slate-500">

//           <p className="tracking-wide text-center sm:text-left">

//             Copyright © {new Date().getFullYear()}{" "}

//             <span className="text-slate-300 font-semibold">PrimeShield {area}</span>. All rights reserved. Engineered for biological structural integrity.

//           </p>



//           <div className="flex items-center gap-2 bg-white/[0.02] border border-white/5 px-3 py-1.5 rounded-lg text-[10px] font-mono text-slate-400">

//             <span className="w-1.5 h-1.5 rounded-full bg-[#F36F21]" />

//             <span>Deployment Architecture v2.6</span>

//           </div>

//         </div>



//       </div>

//     </footer>

//   );

// };



// export default Footer;

















import React from "react";
import { Link } from "react-router-dom";
import { ShieldCheck, Phone, MapPin, ArrowRight, Activity, Layers, Clock } from "lucide-react";

const Footer = () => {
  // SINGLE SOURCE OF TRUTH FOR WATERLOO NODE
  const phoneNumber = "07448 180941";
  const phoneDisplay = "07448 180941";
  const address = "6 Chaplin Cl, London SE1 8TU";
  const area = "Waterloo";
  const postcodeZone = "SE1";

  return (
    <footer className="relative bg-[#050507] text-white overflow-hidden border-t border-zinc-900 z-30 font-sans selection:bg-[#F36F21] selection:text-white">
      
      {/* Premium Micro-Grid System Overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff01_1px,transparent_1px),linear-gradient(to_bottom,#ffffff01_1px,transparent_1px)] bg-[size:3rem_3rem] pointer-events-none" />
      
      {/* Targeted Ambient Aura Glows */}
      <div className="absolute -top-40 right-10 w-[450px] h-[450px] bg-[#F36F21]/5 rounded-full blur-[130px] pointer-events-none" />
      <div className="absolute bottom-0 left-1/4 w-[350px] h-[350px] bg-amber-500/[0.02] rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-10 lg:px-12 pt-24 pb-10 relative z-10">
        
        {/* NEW 4-COLUMN MODERN GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8 pb-16 border-b border-zinc-900">
          
          {/* COLUMN 1: BRAND PLATFORM (Occupies 5 Cols) */}
          <div className="lg:col-span-5 space-y-6 text-left">
            <div className="space-y-4">
              <Link to="/" className="inline-block group focus:outline-none">
                <img
                  src="/images/primelogo.webp"
                  alt={`PrimeShield ${area} Pest Control`}
                  className="h-12 w-auto object-contain filter brightness-110 group-hover:opacity-90 transition-opacity"
                  loading="lazy"
                  decoding="async"
                />
              </Link>
              <p className="text-zinc-400 text-sm leading-relaxed max-w-sm font-normal">
                Your trusted local pest control specialists in {area}. Providing fast, safe, and guaranteed eradication and proofing services for homeowners and local commercial businesses across the {postcodeZone} area.
              </p>
            </div>

            {/* Active Status Badge */}
            <div className="inline-flex items-center gap-3 bg-zinc-950 border border-zinc-900 rounded-xl px-4 py-2.5">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              <div>
                <p className="text-[9px] font-bold uppercase tracking-widest font-mono text-zinc-500">{postcodeZone} Emergency Center</p>
                <p className="text-xs font-bold text-zinc-200 mt-0.5">Local Experts On-Duty</p>
              </div>
            </div>
          </div>

          {/* COLUMN 2: QUICK LINKS (Occupies 3 Cols) */}
          <div className="lg:col-span-3 lg:pl-4 space-y-6 text-left">
            <div className="flex items-center gap-2 border-b border-zinc-900 pb-3">
              <Layers size={12} className="text-[#F36F21]" />
              <h4 className="text-[10px] font-mono tracking-[0.2em] text-[#F36F21] uppercase font-black">
                Quick Navigation
              </h4>
            </div>
            
            <nav className="flex flex-col gap-3.5 text-zinc-400 text-sm font-medium">
              {[
                { name: `PrimeShield ${area} Home`, path: "/" },
                { name: `About Our ${area} Team`, path: "/about-us" },
                { name: "Pest Control Services", path: "/services" },
                { name: "Contact Local Branch", path: "/contact-us" },
              ].map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  className="hover:text-white transition-colors duration-200 flex items-center justify-between group/link"
                >
                  <span>{link.name}</span>
                  <ArrowRight size={12} className="opacity-0 -translate-x-1 group-hover/link:opacity-100 group-hover/link:translate-x-0 text-[#F36F21] transition-all duration-200" />
                </Link>
              ))}
            </nav>
          </div>

          {/* COLUMN 3: PEST SERVICES (Occupies 4 Cols) */}
          <div className="lg:col-span-4 lg:pl-6 space-y-6 text-left">
            <div className="flex items-center gap-2 border-b border-zinc-900 pb-3">
              <Activity size={12} className="text-[#F36F21]" />
              <h4 className="text-[10px] font-mono tracking-[0.2em] text-[#F36F21] uppercase font-black">
                Our Expert Treatments
              </h4>
            </div>

            <div className="flex flex-col gap-3.5 text-zinc-400 text-sm font-medium">
              {[
                { name: `Rat & Mice Control ${postcodeZone}`, state: { scrollToService: "Rats & Mice Control", category: "Rodents & Wildlife" } },
                { name: `Wasp Nest Removal ${area}`, state: { scrollToService: "Wasp Nest Removal", category: "Insects" } },
                { name: `Bed Bug Extermination ${postcodeZone}`, state: { scrollToService: "Bed Bugs Control", category: "Insects" } },
                { name: "Complete Property Proofing", state: { scrollToService: null, category: "All" } },
              ].map((service) => (
                <Link
                  key={service.name}
                  to="/services"
                  state={service.state}
                  className="hover:text-white transition-colors duration-200 flex items-center justify-between group/link"
                >
                  <span>{service.name}</span>
                  <ArrowRight size={12} className="opacity-0 -translate-x-1 group-hover/link:opacity-100 group-hover/link:translate-x-0 text-[#F36F21] transition-all duration-200" />
                </Link>
              ))}
            </div>
          </div>

        </div>

        {/* MIDDLE SECTION: 3 HUB CONTROL PODS */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 my-8">
          
          {/* POD 1: LOCAL ADDRESS */}
          <div className="p-5 rounded-xl bg-zinc-950 border border-zinc-900 flex items-center gap-4 text-left group hover:border-zinc-800 transition-all duration-300">
            <div className="p-3 rounded-lg bg-zinc-900 border border-zinc-800 text-[#F36F21] group-hover:bg-[#F36F21]/10 group-hover:border-[#F36F21]/20 transition-all">
              <MapPin className="w-4 h-4" />
            </div>
            <div className="min-w-0">
              <span className="block text-[9px] font-mono text-zinc-500 uppercase tracking-wider">Local Branch Address</span>
              <span className="text-xs font-bold text-zinc-200 block mt-0.5 truncate">{address}</span>
            </div>
          </div>

          {/* POD 2: PHONE HOTLINE */}
          <a
            href={`tel:${phoneNumber.replace(/\s/g, "")}`}
            className="p-5 rounded-xl bg-zinc-950 border border-zinc-900 flex items-center gap-4 text-left group hover:bg-[#F36F21]/5 hover:border-[#F36F21]/20 transition-all duration-300"
          >
            <div className="p-3 rounded-lg bg-zinc-900 border border-zinc-800 text-emerald-400 group-hover:bg-emerald-500/10 group-hover:border-emerald-500/20 transition-all">
              <Phone className="w-4 h-4" />
            </div>
            <div className="min-w-0">
              <span className="block text-[9px] font-mono text-zinc-500 uppercase tracking-wider">24/7 Response Hotline</span>
              <span className="text-xs font-black text-white block mt-0.5 group-hover:text-[#F36F21] transition-colors">{phoneDisplay}</span>
            </div>
          </a>

          {/* POD 3: COVERAGE AREA */}
          <div className="p-5 rounded-xl bg-zinc-950 border border-zinc-900 flex items-center gap-4 text-left group hover:border-zinc-800 transition-all duration-300">
            <div className="p-3 rounded-lg bg-zinc-900 border border-zinc-800 text-[#F36F21] group-hover:bg-[#F36F21]/10 group-hover:border-[#F36F21]/20 transition-all">
              <ShieldCheck className="w-4 h-4" />
            </div>
            <div className="min-w-0">
              <span className="block text-[9px] font-mono text-zinc-500 uppercase tracking-wider">Service Catchment</span>
              <span className="text-xs font-bold text-zinc-200 block mt-0.5">{area} & {postcodeZone} Area Residents</span>
            </div>
          </div>

        </div>

        {/* LOWER COMPLIANCE & COPYRIGHT */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-6 border-t border-zinc-900 text-[11px] font-medium text-zinc-500">
          <p className="tracking-wide text-center sm:text-left">
            Copyright © {new Date().getFullYear()}{" "}
            <span className="text-zinc-300 font-semibold">PrimeShield {area}</span>. All rights reserved. Professional Pest Eradication & Guard Protection.
          </p>

          <div className="flex items-center gap-2 bg-zinc-950 border border-zinc-900 px-3 py-1.5 rounded-lg text-[10px] font-mono text-zinc-400">
            <Clock size={10} className="text-[#F36F21]" />
            <span>Fast Response Dispatched Locally</span>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;