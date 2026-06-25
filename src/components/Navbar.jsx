

// import React, { useState, useEffect } from "react";
// import { Link, NavLink } from "react-router-dom";

// export default function Navbar() {
//   const [open, setOpen] = useState(false);
//   const [isScrolled, setIsScrolled] = useState(false);

//   // MASTER CONFIG - Wandsworth SW18 Hub
//   const LOCAL = {
//     area: "Wandsworth",
//     postcode: "SW18",
//     fullAddress: "91 Pirbright Rd, London SW18 5ND",
//     phoneDisplay: "07356 253624",
//     phoneTel: "447356253624",
//   };

//   useEffect(() => {
//     let ticking = false;
//     const handleScroll = () => {
//       if (!ticking) {
//         window.requestAnimationFrame(() => {
//           const shouldBeScrolled = window.scrollY > 12;
//           setIsScrolled((prev) => (prev === shouldBeScrolled ? prev : shouldBeScrolled));
//           ticking = false;
//         });
//         ticking = true;
//       }
//     };

//     handleScroll();
//     window.addEventListener("scroll", handleScroll, { passive: true });
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   // Tracking thodi barha di hai unique CSS signature ke liye
//   const navClass = ({ isActive }) =>
//     `text-[13px] lg:text-[14px] font-black uppercase tracking-[0.15em] transition-all duration-200 relative py-2 ${
//       isActive ? "text-[#F36F21]" : "text-slate-300 hover:text-[#F36F21]"
//     }`;

//   const mobileNavClass = ({ isActive }) =>
//     `block rounded-xl px-5 py-3.5 text-base font-extrabold uppercase tracking-wider transition-all duration-200 ${
//       isActive
//         ? "bg-gradient-to-r from-[#F36F21] to-[#ff5100] text-white shadow-md pl-7"
//         : "text-slate-300 hover:bg-white/5 hover:text-[#F36F21]"
//     }`;

//   return (
//     <header className="fixed top-0 left-0 w-full z-50 transition-all duration-300">
//       {/* ================= TIER 1: NEW DESIGN (DARK MODE NAP TOPBAR) ================= */}
//       <div 
//         itemScope 
//         itemType="https://schema.org/LocalBusiness"
//         className="bg-[#09090b] text-slate-300 px-5 py-2 text-xs font-bold border-b border-[#F36F21]/20 hidden sm:block"
//       >
//         <div className="max-w-7xl mx-auto flex items-center justify-between gap-4">
//           <div className="flex items-center gap-2">
//             <span className="flex h-2 w-2 relative">
//               <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#F36F21] opacity-75"></span>
//               <span className="relative inline-flex rounded-full h-2 w-2 bg-[#F36F21]"></span>
//             </span>
//             <span className="uppercase tracking-widest text-[11px] font-black text-white">
//               Certified Pest Control Specialists - <span itemProp="areaServed" className="text-[#F36F21]">{LOCAL.area}</span>
//             </span>
//           </div>

//           <div className="flex items-center gap-6">
//             <span itemProp="address" itemScope itemType="https://schema.org/PostalAddress" className="flex items-center gap-1.5 font-semibold text-slate-400 hover:text-white transition-colors cursor-pointer">
//               <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-3.5 h-3.5 text-[#F36F21]">
//                 <path fillRule="evenodd" d="M11.54 22.351l.07.04.028.016a.76.76 0 00.723 0l.028-.015.071-.041a16.975 16.975 0 001.144-.742 19.58 19.58 0 002.683-2.282c1.944-1.99 3.963-4.98 3.963-8.827a8.25 8.25 0 00-16.5 0c0 3.846 2.02 6.837 3.963 8.827a19.58 19.58 0 002.682 2.282 16.975 16.975 0 001.145.742zM12 13.5a3 3 0 100-6 3 3 0 000 6z" clipRule="evenodd" />
//               </svg>
//               <span itemProp="streetAddress">{LOCAL.fullAddress}</span>
//             </span>

//             {/* Colors inverted here for a completely different look */}
//             <a href={`tel:${LOCAL.phoneTel}`} className="bg-[#F36F21] text-[#111111] px-3 py-1 rounded-lg tracking-wider hover:bg-white transition-colors font-black flex items-center gap-1 shadow-sm">
//               <span>📞</span> <span itemProp="telephone">{LOCAL.phoneDisplay}</span>
//             </a>
//           </div>
//         </div>
//       </div>

//       {/* ================= TIER 2: ALTERED NAVIGATION STRUCTURE ================= */}
//       <nav
//         className={`w-full h-20 md:h-22 transition-all duration-300 ${
//           isScrolled
//             ? "bg-[#060608]/98 border-b border-[#F36F21]/20 shadow-xl backdrop-blur-md"
//             : "bg-[#111115]/80 border-b border-white/5 backdrop-blur-sm"
//         }`}
//       >
//         <div className="max-w-7xl mx-auto px-5 md:px-8 lg:px-10 h-full flex items-center justify-between gap-4">
          
//           {/* LOGO */}
//           <Link
//             to="/"
//             className="h-full py-2 flex items-center shrink-0 focus:outline-none group"
//             onClick={() => setOpen(false)}
//             aria-label={`PrimeShield Pest Control ${LOCAL.area}`}
//           >
//             <img
//               src="/images/primelogo.webp"
//               alt={`PrimeShield Pest Control ${LOCAL.area} Logo`}
//               className="h-12 md:h-14 lg:h-16 w-auto object-contain group-hover:scale-102 transition-transform"
//               loading="eager"
//             />
//           </Link>

//           {/* DESKTOP LINKS - Changed Active indicator line to top-down style */}
//           <ul role="navigation" className="hidden md:flex items-center gap-6 lg:gap-8 list-none m-0 p-0 h-full">
//             <li className="relative flex items-center h-full">
//               <NavLink to="/" className={navClass}>
//                 {({ isActive }) => (
//                   <>
//                     Home
//                     {isActive && <span className="absolute top-0 left-1/2 -translate-x-1/2 w-8 h-[3px] bg-[#F36F21] rounded-b-full" />}
//                   </>
//                 )}
//               </NavLink>
//             </li>
//             <li className="relative flex items-center h-full">
//               <NavLink to="/services" className={navClass}>
//                 {({ isActive }) => (
//                   <>
//                     Services
//                     {isActive && <span className="absolute top-0 left-1/2 -translate-x-1/2 w-8 h-[3px] bg-[#F36F21] rounded-b-full" />}
//                   </>
//                 )}
//               </NavLink>
//             </li>
//             <li className="relative flex items-center h-full">
//               <NavLink to="/about-us" className={navClass}>
//                 {({ isActive }) => (
//                   <>
//                     About Us
//                     {isActive && <span className="absolute top-0 left-1/2 -translate-x-1/2 w-8 h-[3px] bg-[#F36F21] rounded-b-full" />}
//                   </>
//                 )}
//               </NavLink>
//             </li>
//             <li className="relative flex items-center h-full">
//               <NavLink to="/contact-us" className={navClass}>
//                 {({ isActive }) => (
//                   <>
//                     Contact Us
//                     {isActive && <span className="absolute top-0 left-1/2 -translate-x-1/2 w-8 h-[3px] bg-[#F36F21] rounded-b-full" />}
//                   </>
//                 )}
//               </NavLink>
//             </li>
//           </ul>

//           {/* DESKTOP RIGHT CTA - Sleek Outlined Glass Style */}
//           <div className="hidden lg:flex items-center pl-6 border-l border-white/10">
//             <a
//               href={`tel:${LOCAL.phoneTel}`}
//               className="flex items-center gap-3 bg-transparent border-2 border-[#F36F21] text-white hover:bg-[#F36F21] hover:text-black px-5 py-2 rounded-xl font-black transition-all duration-300 shadow-lg shadow-[#F36F21]/5 group"
//             >
//               <div className="h-7 w-7 rounded-lg bg-[#F36F21]/10 flex items-center justify-center group-hover:bg-black/20 transition-colors">
//                 <span className="text-sm">🛡️</span>
//               </div>
//               <div className="text-left leading-tight">
//                 <span className="block text-[9px] uppercase tracking-widest text-[#F36F21] group-hover:text-black transition-colors font-extrabold">{LOCAL.area} Dispatch</span>
//                 <span className="block text-sm tracking-wider font-black">{LOCAL.phoneDisplay}</span>
//               </div>
//             </a>
//           </div>

//           {/* MOBILE HAMBURGER */}
//           <button
//             onClick={() => setOpen((prev) => !prev)}
//             className="md:hidden h-11 w-11 rounded-xl text-white flex items-center justify-center bg-white/5 hover:bg-[#F36F21]/20 border border-white/10 active:scale-95 transition-all"
//             aria-label="Toggle Navigation Menu"
//           >
//             {open ? <span className="text-xl font-black text-[#F36F21]">✕</span> : <span className="text-xl">☰</span>}
//           </button>

//         </div>

//         {/* MOBILE DROPDOWN MENU */}
//         {open && (
//           <div className="md:hidden bg-[#09090b] border-b-2 border-[#F36F21] shadow-2xl absolute top-full left-0 w-full">
//             <div className="p-6 flex flex-col gap-2.5">
              
//               {/* Mobile Area Indicator - Style Variation */}
//               <div className="bg-gradient-to-r from-[#F36F21]/10 to-transparent border-l-4 border-[#F36F21] p-3 mb-2">
//                 <span className="text-[10px] text-[#F36F21] font-black uppercase tracking-widest block">Local Response Hub</span>
//                 <span className="text-sm text-white font-bold">{LOCAL.area} Division ({LOCAL.postcode})</span>
//               </div>

//               <NavLink onClick={() => setOpen(false)} to="/" className={mobileNavClass}>Home</NavLink>
//               <NavLink onClick={() => setOpen(false)} to="/services" className={mobileNavClass}>Services</NavLink>
//               <NavLink onClick={() => setOpen(false)} to="/about-us" className={mobileNavClass}>About Us</NavLink>
//               <NavLink onClick={() => setOpen(false)} to="/contact-us" className={mobileNavClass}>Contact Us</NavLink>

//               <div className="mt-4 pt-4 border-t border-white/5 flex flex-col gap-3">
//                 <div className="text-xs text-slate-400 px-1 text-center font-medium leading-relaxed">
//                   {LOCAL.fullAddress}
//                 </div>
//                 <a
//                   href={`tel:${LOCAL.phoneTel}`}
//                   className="w-full py-3.5 bg-transparent border border-[#F36F21] text-[#F36F21] hover:bg-[#F36F21] hover:text-black font-black text-center rounded-xl uppercase tracking-widest text-sm transition-all"
//                 >
//                   Emergency Line: {LOCAL.phoneDisplay}
//                 </a>
//               </div>

//             </div>
//           </div>
//         )}
//       </nav>
//     </header>
//   );
// }









import React, { useState, useEffect } from "react";
import { Link, NavLink } from "react-router-dom";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // MASTER CONFIG - PrimeShield Waterloo SE1 Hub
  const LOCAL = {
    area: "Waterloo",
    postcode: "SE1",
    fullAddress: "6 Chaplin Cl, London SE1 8TU",
    phoneDisplay: "07448 180941",
    phoneTel: "+447448180941",
  };

  useEffect(() => {
    let ticking = false;
    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          const shouldBeScrolled = window.scrollY > 20;
          setIsScrolled((prev) => (prev === shouldBeScrolled ? prev : shouldBeScrolled));
          ticking = false;
        });
        ticking = true;
      }
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Tracking line structure altered for unique DOM rendering signature
  const navClass = ({ isActive }) =>
    `text-[13px] lg:text-[14px] font-black uppercase tracking-[0.18em] transition-all duration-300 relative py-2 ${
      isActive ? "text-[#F36F21]" : "text-slate-200 hover:text-[#F36F21]"
    }`;

  const mobileNavClass = ({ isActive }) =>
    `block rounded-xl px-5 py-4 text-base font-black uppercase tracking-widest transition-all duration-200 ${
      isActive
        ? "bg-[#F36F21] text-black shadow-lg pl-8"
        : "text-slate-300 hover:bg-white/5 hover:text-[#F36F21]"
    }`;

  return (
    <header className="fixed top-0 left-0 w-full z-50 transition-all duration-300">
      {/* ================= TIER 1: HIGH-INTENSITY LOCAL SEO TOPBAR ================= */}
      <div 
        itemScope 
        itemType="https://schema.org/LocalBusiness"
        className="bg-[#0c0c0e] text-slate-300 px-6 py-2.5 text-xs font-bold border-b border-[#F36F21]/15 hidden sm:block"
      >
        <div className="max-w-7xl mx-auto flex items-center justify-between gap-4">
          <div className="flex items-center gap-2.5">
            <span className="flex h-2.5 w-2.5 relative">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#F36F21] opacity-70"></span>
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[#F36F21]"></span>
            </span>
            <span className="uppercase tracking-[0.12em] text-[11px] font-extrabold text-slate-200">
              Emergency Pest Control Unit - <span itemProp="areaServed" className="text-[#F36F21] underline decoration-[#F36F21]/40 decoration-2 underline-offset-4">{LOCAL.area} SE1</span>
            </span>
          </div>

          <div className="flex items-center gap-6">
            <span itemProp="address" itemScope itemType="https://schema.org/PostalAddress" className="flex items-center gap-2 font-bold text-slate-400 hover:text-white transition-colors cursor-pointer">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4 text-[#F36F21]">
                <path fillRule="evenodd" d="M11.54 22.351l.07.04.028.016a.76.76 0 00.723 0l.028-.015.071-.041a16.975 16.975 0 001.144-.742 19.58 19.58 0 002.683-2.282c1.944-1.99 3.963-4.98 3.963-8.827a8.25 8.25 0 00-16.5 0c0 3.846 2.02 6.837 3.963 8.827a19.58 19.58 0 002.682 2.282 16.975 16.975 0 001.145.742zM12 13.5a3 3 0 100-6 3 3 0 000 6z" clipRule="evenodd" />
              </svg>
              <span itemProp="streetAddress" className="tracking-wide text-[11px]">{LOCAL.fullAddress}</span>
            </span>

            <a href={`tel:${LOCAL.phoneTel}`} className="bg-gradient-to-r from-[#F36F21] to-[#ff5100] text-black px-4 py-1.5 rounded-lg tracking-widest hover:brightness-110 transition-all font-black flex items-center gap-1.5 shadow-md shadow-[#F36F21]/10">
              <span>⚡</span> <span itemProp="telephone">{LOCAL.phoneDisplay}</span>
            </a>
          </div>
        </div>
      </div>

      {/* ================= TIER 2: RESTRUCTURED LOGO & NAVIGATION ZONE ================= */}
      <nav
        className={`w-full h-20 md:h-24 transition-all duration-300 ${
          isScrolled
            ? "bg-[#09090b]/95 border-b border-[#F36F21]/30 shadow-2xl backdrop-blur-lg"
            : "bg-[#0f0f12]/90 border-b border-white/5 backdrop-blur-md"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-8 lg:px-10 h-full flex items-center justify-between gap-4">
          
          {/* BRAND LOGO CONTEXT */}
          <Link
            to="/"
            className="h-full py-3 flex items-center shrink-0 focus:outline-none group"
            onClick={() => setOpen(false)}
            aria-label={`PrimeShield Pest Control ${LOCAL.area}`}
          >
            <img
              src="/images/primelogo.webp"
              alt={`PrimeShield Pest Control ${LOCAL.area} Hub`}
              className="h-11 md:h-13 lg:h-15 w-auto object-contain group-hover:scale-103 transition-transform duration-300"
              loading="eager"
            />
          </Link>

          {/* DESKTOP ROUTING LINKS - Changed to bottom-up highlight dot indicator */}
          <ul role="navigation" className="hidden md:flex items-center gap-8 lg:gap-10 list-none m-0 p-0 h-full">
            <li className="relative flex items-center h-full">
              <NavLink to="/" className={navClass}>
                {({ isActive }) => (
                  <>
                    Home
                    {isActive && <span className="absolute bottom-2 left-1/2 -translate-x-1/2 w-1.5 h-1.5 bg-[#F36F21] rounded-full shadow-lg shadow-[#F36F21]" />}
                  </>
                )}
              </NavLink>
            </li>
            <li className="relative flex items-center h-full">
              <NavLink to="/services" className={navClass}>
                {({ isActive }) => (
                  <>
                    Services
                    {isActive && <span className="absolute bottom-2 left-1/2 -translate-x-1/2 w-1.5 h-1.5 bg-[#F36F21] rounded-full shadow-lg shadow-[#F36F21]" />}
                  </>
                )}
              </NavLink>
            </li>
            <li className="relative flex items-center h-full">
              <NavLink to="/about-us" className={navClass}>
                {({ isActive }) => (
                  <>
                    About Us
                    {isActive && <span className="absolute bottom-2 left-1/2 -translate-x-1/2 w-1.5 h-1.5 bg-[#F36F21] rounded-full shadow-lg shadow-[#F36F21]" />}
                  </>
                )}
              </NavLink>
            </li>
            <li className="relative flex items-center h-full">
              <NavLink to="/contact-us" className={navClass}>
                {({ isActive }) => (
                  <>
                    Contact Us
                    {isActive && <span className="absolute bottom-2 left-1/2 -translate-x-1/2 w-1.5 h-1.5 bg-[#F36F21] rounded-full shadow-lg shadow-[#F36F21]" />}
                  </>
                )}
              </NavLink>
            </li>
          </ul>

          {/* HIGH-LIGHTED AREA DISPATCH BUTTON */}
          <div className="hidden lg:flex items-center pl-8 border-l border-slate-800">
            <a
              href={`tel:${LOCAL.phoneTel}`}
              className="flex items-center gap-4 bg-gradient-to-b from-white/5 to-white/[0.02] border-2 border-[#F36F21] text-white hover:bg-[#F36F21] hover:text-black px-6 py-2.5 rounded-xl font-black transition-all duration-300 shadow-xl group"
            >
              <div className="h-8 w-8 rounded-lg bg-[#F36F21]/15 flex items-center justify-center group-hover:bg-black/15 transition-colors">
                <span className="text-xs">🚨</span>
              </div>
              <div className="text-left leading-tight">
                <span className="block text-[9px] uppercase tracking-widest text-[#F36F21] group-hover:text-black transition-colors font-black">{LOCAL.area} HQ</span>
                <span className="block text-sm tracking-wider font-black">{LOCAL.phoneDisplay}</span>
              </div>
            </a>
          </div>

          {/* CUSTOM MOBILE HAMBURGER BUTTON */}
          <button
            onClick={() => setOpen((prev) => !prev)}
            className="md:hidden h-11 w-11 rounded-xl text-white flex items-center justify-center bg-white/[0.03] hover:bg-[#F36F21]/10 border border-white/10 active:scale-95 transition-all"
            aria-label="Toggle Navigation Menu"
          >
            {open ? <span className="text-lg font-black text-[#F36F21]">✕</span> : <span className="text-xl">☰</span>}
          </button>

        </div>

        {/* MOBILE SLIDE-DOWN RESPONSIVE HUD */}
        {open && (
          <div className="md:hidden bg-[#070709] border-b-4 border-[#F36F21] shadow-2xl absolute top-full left-0 w-full animate-fadeIn">
            <div className="p-6 flex flex-col gap-3">
              
              {/* Waterloo Brand Injection */}
              <div className="bg-white/[0.02] border-l-4 border-[#F36F21] p-3.5 mb-2 rounded-r-xl">
                <span className="text-[10px] text-[#F36F21] font-black uppercase tracking-[0.2em] block">SE1 Emergency Hub</span>
                <span className="text-sm text-slate-100 font-extrabold">{LOCAL.area} Area Division</span>
              </div>

              <NavLink onClick={() => setOpen(false)} to="/" className={mobileNavClass}>Home</NavLink>
              <NavLink onClick={() => setOpen(false)} to="/services" className={mobileNavClass}>Services</NavLink>
              <NavLink onClick={() => setOpen(false)} to="/about-us" className={mobileNavClass}>About Us</NavLink>
              <NavLink onClick={() => setOpen(false)} to="/contact-us" className={mobileNavClass}>Contact Us</NavLink>

              <div className="mt-4 pt-5 border-t border-slate-900 flex flex-col gap-4">
                <div className="text-xs text-slate-400 px-2 text-center font-semibold leading-relaxed">
                  📍 {LOCAL.fullAddress}
                </div>
                <a
                  href={`tel:${LOCAL.phoneTel}`}
                  className="w-full py-4 bg-gradient-to-r from-[#F36F21] to-[#ff5100] text-black font-black text-center rounded-xl uppercase tracking-widest text-xs shadow-md"
                >
                  Call Waterloo Hotline: {LOCAL.phoneDisplay}
                </a>
              </div>

            </div>
          </div>
        )}
      </nav>
    </header>
  );
}