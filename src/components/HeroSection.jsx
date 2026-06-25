


// import React, { useState } from "react";
// import { Link } from "react-router-dom";
// import { motion } from "framer-motion";
// import axios from "axios";
// import toast, { Toaster } from "react-hot-toast";

// const brandColors = {
//   dark: "#111111",
//   orange: "#F36F21",
//   orangeDark: "#D95A13",
//   charcoal: "#3B3B3B",
//   grey: "#5F5F5F",
//   light: "#F7F7F7",
// };

// export default function HeroSection() {
//   const [formData, setFormData] = useState({
//     name: "",
//     postcode: "",
//     phone: "",
//   });

//   const [loading, setLoading] = useState(false);
//   const [phoneError, setPhoneError] = useState("");

//   const LOCAL = {
//     area: "Wandsworth",
//     postcode: "SW18",
//     businessName: "PrimeShield Wandsworth",
//     address: "91 Pirbright Rd, London SW18 5ND",
//     phoneDisplay: "07356 253624",
//   };

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData((prev) => ({ ...prev, [name]: value }));
//     if (name === "phone") setPhoneError("");
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     if (!formData.phone.trim()) {
//       setPhoneError("Please enter a valid phone number");
//       return;
//     }
//     setLoading(true);

//     toast.promise(
//       axios.post("http://localhost:5000/api/callback", {
//         ...formData,
//         area: LOCAL.area,
//         business: LOCAL.businessName,
//         address: LOCAL.address,
//         phoneNumber: LOCAL.phoneDisplay,
//       }),
//       {
//         loading: `Connecting to ${LOCAL.area} service desk...`,
//         success: () => {
//           setFormData({ name: "", postcode: "", phone: "" });
//           setLoading(false);
//           return `Thank you! ${LOCAL.businessName} will contact you shortly. 📞`;
//         },
//         error: (error) => {
//           setLoading(false);
//           return error.response?.data?.message || "Something went wrong. Please call us directly.";
//         },
//       },
//       {
//         style: {
//           fontFamily: "sans-serif",
//           fontSize: "14px",
//           borderRadius: "12px",
//           padding: "14px 20px",
//         },
//         success: {
//           style: { background: "#111111", color: "#FFFFFF", border: `1px solid ${brandColors.orange}` },
//         },
//         error: {
//           style: { background: "#4c0519", color: "#fecdd3", border: "1px solid #f43f5e" },
//         },
//       }
//     );
//   };

//   return (
//     <section 
//       itemScope 
//       itemType="https://schema.org/PestControlService" 
//       className="relative min-h-screen bg-[#111111] mt-10 text-white font-sans flex items-center pt-28 pb-16 lg:py-24 overflow-hidden"
//     >
//       <Toaster position="top-center" reverseOrder={false} containerStyle={{ top: "120px", zIndex: 99999 }} />

//       {/* BACKGROUND ELEMENTS - ALTERED GRADIENT DIRECTIONS */}
//       <div className="absolute inset-0 z-0">
//         <picture>
//           <source media="(min-width: 768px)" srcSet="/images/herohome.webp" />
//           <img
//             src="/images/herohome.webp"
//             alt={`${LOCAL.businessName} Emergency Extermination`}
//             className="h-full w-full object-cover object-left md:object-center opacity-45 scale-100 transition-transform duration-1000"
//             loading="eager"
//           />
//         </picture>
//         <div className="absolute inset-0 bg-gradient-to-l from-[#111111]/95 via-[#111111]/80 to-[#111111]/40" />
//         <div className="absolute inset-0 bg-gradient-to-t from-[#111111] via-[#111111]/20 to-transparent" />
        
//         {/* Abstract Light Flare for Layout Differentiation */}
//         <div className="absolute top-12 left-1/4 w-96 h-96 bg-[#F36F21]/15 rounded-full blur-[120px] pointer-events-none" />
//       </div>

//       <div className="relative z-10 w-full max-w-7xl mx-auto px-6 md:px-10 lg:px-12">
        
//         {/* NEW GRID LAYOUT: FLIPPED FORM TO LEFT, CONTENT TO RIGHT */}
//         <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
//           {/* LEFT SIDE: MODIFIED FORM CARD (FLIPPED POSITION) */}
//           <motion.div
//             initial={{ opacity: 0, x: -40 }}
//             animate={{ opacity: 1, x: 0 }}
//             transition={{ duration: 0.8, ease: "easeOut" }}
//             className="grid order-2 lg:order-1 lg:col-span-5 w-full"
//           >
//             <div className="bg-white text-[#111111] p-6 sm:p-8 rounded-lg shadow-2xl relative border-b-8 border-[#F36F21]">
//               <div className="mb-6">
//                 <div className="bg-[#111111] text-white text-[10px] font-black uppercase tracking-widest inline-block px-2.5 py-1 rounded-sm mb-3">
//                   Direct Line Connection
//                 </div>
//                 <h3 className="text-xl sm:text-2xl font-black tracking-tight text-[#111111]">
//                   Request Rapid Dispatch
//                 </h3>
//                 <p className="mt-1.5 text-xs sm:text-sm text-[#5F5F5F] font-semibold leading-relaxed">
//                   Local controllers handling urgent callouts for {LOCAL.area} estates instantly.
//                 </p>
//               </div>

//               <form onSubmit={handleSubmit} className="space-y-4 text-left">
//                 <fieldset className="space-y-4 border-none p-0 m-0">
//                   <div className="relative">
//                     <input
//                       type="text"
//                       name="name"
//                       value={formData.name}
//                       onChange={handleChange}
//                       placeholder="Your Name / Business *"
//                       required
//                       className="w-full border-2 border-[#EBF0ED] bg-[#F7F7F7] rounded-md px-4 py-3 text-sm text-[#111111] placeholder:text-[#9A9A9A] outline-none focus:border-[#F36F21] focus:bg-white transition-all"
//                     />
//                   </div>

//                   <div className="relative">
//                     <input
//                       type="text"
//                       name="postcode"
//                       value={formData.postcode}
//                       onChange={handleChange}
//                       placeholder={`Target Postcode (e.g., ${LOCAL.postcode}) *`}
//                       required
//                       className="w-full border-2 border-[#EBF0ED] bg-[#F7F7F7] rounded-md px-4 py-3 text-sm text-[#111111] placeholder:text-[#9A9A9A] outline-none focus:border-[#F36F21] focus:bg-white transition-all"
//                     />
//                   </div>

//                   <div className="relative">
//                     <input
//                       type="tel"
//                       name="phone"
//                       value={formData.phone}
//                       onChange={handleChange}
//                       placeholder="Callback Number *"
//                       required
//                       className={`w-full border-2 bg-[#F7F7F7] rounded-md px-4 py-3 text-sm text-[#111111] placeholder:text-[#9A9A9A] outline-none focus:bg-white transition-all ${
//                         phoneError ? "border-red-500" : "border-[#EBF0ED] focus:border-[#F36F21]"
//                       }`}
//                     />
//                     {phoneError && (
//                       <span className="absolute -bottom-5 left-1 text-red-600 text-[10px] font-bold tracking-wide">
//                         ⚠️ {phoneError}
//                       </span>
//                     )}
//                   </div>
//                 </fieldset>

//                 <button
//                   type="submit"
//                   disabled={loading}
//                   className="w-full bg-[#F36F21] hover:bg-[#D95A13] text-white px-6 py-4 rounded-md text-xs sm:text-sm font-black uppercase tracking-[0.2em] transition-colors shadow-lg shadow-[#F36F21]/20 mt-2"
//                 >
//                   {loading ? "Allocating Van..." : "Connect With Technicians"}
//                 </button>
//               </form>

//               {/* STRONGLY ENHANCED LOCAL SECTIONS FOR WANDSWORTH SCHEMAS */}
//               <address className="mt-6 pt-5 border-t border-[#EDEDED] not-italic text-grid space-y-3.5 text-xs">
//                 <div className="bg-[#111111]/5 p-3 rounded-md border-l-4 border-l-[#F36F21] grid grid-cols-2 gap-2">
//                   <div>
//                     <span className="block font-black text-[#5F5F5F] uppercase text-[9px] tracking-wider mb-0.5">Local Agency</span>
//                     <span className="text-[#111111] font-extrabold text-sm">{LOCAL.businessName}</span>
//                   </div>
//                   <div>
//                     <span className="block font-black text-[#5F5F5F] uppercase text-[9px] tracking-wider mb-0.5">Emergency Line</span>
//                     <a href={`tel:${LOCAL.phoneDisplay.replace(/\s+/g, '')}`} className="text-[#F36F21] font-black text-sm block hover:underline">
//                       <span itemProp="telephone">{LOCAL.phoneDisplay}</span>
//                     </a>
//                   </div>
//                 </div>
                
//                 <div className="bg-[#111111] text-white p-3 rounded-md">
//                   <span className="block font-bold text-[#F36F21] uppercase text-[9px] tracking-widest mb-1">Registered SW18 Operational Hub</span>
//                   <span itemProp="address" className="text-white/90 font-medium leading-relaxed block text-[11px]">
//                     {LOCAL.address}
//                   </span>
//                 </div>
//               </address>
//             </div>
//           </motion.div>

//           {/* RIGHT SIDE: TEXT & REWRITTEN COPY (FLIPPED POSITION + NEW CARD WRAPPER) */}
//           <motion.div
//             initial={{ opacity: 0, x: 40 }}
//             animate={{ opacity: 1, x: 0 }}
//             transition={{ duration: 0.8, ease: "easeOut", delay: 0.1 }}
//             className="order-1 lg:order-2 lg:col-span-7 flex flex-col text-left w-full bg-[#1e1e1e]/40 backdrop-blur-md p-6 sm:p-8 lg:p-10 rounded-xl border border-white/5"
//           >
//             <div className="inline-flex items-center gap-2.5 mb-5 bg-[#F36F21]/10 px-3 py-1.5 rounded-full border border-[#F36F21]/30 self-start">
//               <span className="w-2 h-2 rounded-full bg-[#F36F21] animate-ping" />
//               <span className="text-[#F36F21] font-black uppercase tracking-[0.2em] text-[10px] sm:text-xs">
//                 Wandsworth SW18 Hub
//               </span>
//             </div>

//             <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black leading-[1.1] tracking-tight mb-5">
//               Professional Pest Control & Eradication Services In <span itemProp="areaServed" className="text-[#F36F21]">{LOCAL.area}</span>
//             </h1>

//             <h2 className="text-base sm:text-lg font-bold leading-relaxed text-white/90 max-w-xl mb-5 border-l-2 border-[#F36F21] pl-4">
//               Rapid response solutions targeting aggressive rodent infestations, bed bugs, wasps, and bird proofing.
//             </h2>

//             <p className="text-white/70 text-xs sm:text-sm leading-relaxed max-w-2xl mb-8">
//               Operating around the clock, <span itemProp="name" className="font-bold text-white">{LOCAL.businessName}</span> deploys certified exterminators directly to residential and commercial properties. Stationed right at <strong>{LOCAL.address}</strong>, our local presence yields fast emergency response times, eliminating toxic threats using eco-friendly, legally safe, and permanent multi-stage treatments.
//             </p>

//             <div className="flex flex-wrap gap-4 pt-2 border-t border-white/10">
//               <Link
//                 to="/services"
//                 className="group relative inline-flex items-center justify-center border border-white/20 bg-white/5 text-white px-7 py-3.5 text-xs font-black uppercase tracking-[0.15em] hover:bg-[#F36F21] hover:border-[#F36F21] transition-all rounded-sm"
//               >
//                 <span className="relative z-10">Explore {LOCAL.area} Range</span>
//               </Link>

//               <a
//                 href={`tel:${LOCAL.phoneDisplay.replace(/\s+/g, '')}`}
//                 className="inline-flex items-center justify-center bg-transparent border-2 border-[#F36F21] text-[#F36F21] px-7 py-3.5 text-xs font-black uppercase tracking-[0.15em] hover:bg-[#F36F21] hover:text-white transition-all rounded-sm shadow-md"
//               >
//                 Call Unit: {LOCAL.phoneDisplay}
//               </a>
//             </div>
//           </motion.div>

//         </div>
//       </div>
//     </section>
//   );
// }










// import React, { useState } from "react";
// import { Link } from "react-router-dom";
// import { motion } from "framer-motion";
// import axios from "axios";
// import toast, { Toaster } from "react-hot-toast";

// const brandColors = {
//   dark: "#111111",
//   orange: "#F36F21",
//   orangeDark: "#D95A13",
//   charcoal: "#3B3B3B",
//   grey: "#5F5F5F",
//   light: "#F7F7F7",
// };

// export default function HeroSection() {
//   const [formData, setFormData] = useState({
//     name: "",
//     postcode: "",
//     phone: "",
//   });

//   const [loading, setLoading] = useState(false);
//   const [phoneError, setPhoneError] = useState("");

//   // MASTER CONFIG - PrimeShield Waterloo SE1 Hub
//   const LOCAL = {
//     area: "Waterloo",
//     postcode: "SE1",
//     businessName: "PrimeShield Waterloo",
//     address: "6 Chaplin Cl, London SE1 8TU",
//     phoneDisplay: "07448 180941",
//   };

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData((prev) => ({ ...prev, [name]: value }));
//     if (name === "phone") setPhoneError("");
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     if (!formData.phone.trim()) {
//       setPhoneError("Please enter a valid phone number");
//       return;
//     } // <-- FIXED: `</tr>` ki jagah yahan proper block close lagaya hai

//     setLoading(true);

//     toast.promise(
//       axios.post("http://localhost:5000/api/callback", {
//         ...formData,
//         area: LOCAL.area,
//         business: LOCAL.businessName,
//         address: LOCAL.address,
//         phoneNumber: LOCAL.phoneDisplay,
//       }),
//       {
//         loading: `Connecting with ${LOCAL.area} dispatch office...`,
//         success: () => {
//           setFormData({ name: "", postcode: "", phone: "" });
//           setLoading(false);
//           return `Success! The team at ${LOCAL.businessName} will call you back immediately. 📞`;
//         },
//         error: (error) => {
//           setLoading(false);
//           return error.response?.data?.message || "Connection failed. Please call our hotline directly.";
//         },
//       },
//       {
//         style: {
//           fontFamily: "sans-serif",
//           fontSize: "14px",
//           borderRadius: "12px",
//           padding: "14px 20px",
//         },
//         success: {
//           style: { background: "#111111", color: "#FFFFFF", border: `1px solid ${brandColors.orange}` },
//         },
//         error: {
//           style: { background: "#4c0519", color: "#fecdd3", border: "1px solid #f43f5e" },
//         },
//       }
//     );
//   };

//   return (
//     <section 
//       itemScope 
//       itemType="https://schema.org/PestControlService" 
//       className="relative min-h-screen bg-[#0d0d0f] mt-10 text-white font-sans flex items-center pt-32 pb-20 lg:py-28 overflow-hidden"
//     >
//       <Toaster position="top-center" reverseOrder={false} containerStyle={{ top: "130px", zIndex: 99999 }} />

//       {/* UNIQUE BACKGROUND MATRIX - DIFFERENT GRADIENT DIRECTIONS */}
//       <div className="absolute inset-0 z-0">
//         <picture>
//           <source media="(min-width: 768px)" srcSet="/images/herohome.webp" />
//           <img
//             src="/images/herohome.webp"
//             alt={`${LOCAL.businessName} 24/7 Rapid Response Pest Elimination`}
//             className="h-full w-full object-cover object-center md:object-right opacity-35 scale-100 transition-transform duration-1000"
//             loading="eager"
//           />
//         </picture>
//         <div className="absolute inset-0 bg-gradient-to-r from-[#0d0d0f]/98 via-[#0d0d0f]/85 to-[#0d0d0f]/30" />
//         <div className="absolute inset-0 bg-gradient-to-b from-[#0d0d0f] via-transparent to-[#0d0d0f]" />
        
//         {/* Isolated Ambient Glow for Structural Differentiation */}
//         <div className="absolute bottom-10 right-1/4 w-[500px] h-[500px] bg-[#F36F21]/10 rounded-full blur-[150px] pointer-events-none" />
//       </div>

//       <div className="relative z-10 w-full max-w-7xl mx-auto px-6 md:px-8 lg:px-10">
        
//         {/* STRUCTURAL SHIFT: TEXT ON LEFT (ORDER 1), FORM ON RIGHT (ORDER 2) */}
//         <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
//           {/* LEFT SIDE: COMPLETELY REWRITTEN COPY & VALUE PROPS (ORDER 1) */}
//           <motion.div
//             initial={{ opacity: 0, x: -30 }}
//             animate={{ opacity: 1, x: 0 }}
//             transition={{ duration: 0.8, ease: "easeOut" }}
//             className="order-1 lg:col-span-7 flex flex-col text-left w-full bg-gradient-to-br from-white/[0.03] to-transparent backdrop-blur-sm p-6 sm:p-10 rounded-2xl border border-white/5"
//           >
//             <div className="inline-flex items-center gap-2 px-3.5 py-2 mb-6 bg-[#F36F21]/15 rounded-md border border-[#F36F21]/25 self-start">
//               <span className="w-2 h-2 rounded-full bg-[#F36F21] animate-pulse" />
//               <span className="text-[#F36F21] font-black uppercase tracking-[0.25em] text-[10px] sm:text-xs">
//                 Waterloo SE1 Emergency Unit
//               </span>
//             </div>

//             <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black leading-[1.15] tracking-tight mb-6 text-slate-100">
//               Emergency Pest Control & Advanced Eradication In <span itemProp="areaServed" className="text-[#F36F21] underline decoration-[#F36F21]/30 underline-offset-8">{LOCAL.area}</span>
//             </h1>

//             <h2 className="text-base sm:text-lg font-extrabold leading-relaxed text-slate-300 max-w-xl mb-6 border-l-4 border-[#F36F21] pl-4">
//               Certified multi-stage extermination targeting severe rodent breakouts, bed bug setups, wasps, insects, and bird proofing.
//             </h2>

//             <p className="text-slate-400 text-xs sm:text-sm leading-relaxed max-w-xl mb-8 font-medium">
//               Operating 24 hours a day, <span itemProp="name" className="font-black text-white">{LOCAL.businessName}</span> deploys senior RSPH-certified specialists to both residential flats and commercial landmarks. Managed locally directly from our operational base at <strong>{LOCAL.address}</strong>, we ensure immediate response times, resolving structural infestation threats using licensed, heavy-duty eco-safe technologies.
//             </p>

//             <div className="flex flex-wrap gap-4 pt-4 border-t border-slate-900">
//               <Link
//                 to="/services"
//                 className="group relative inline-flex items-center justify-center bg-white text-black hover:bg-[#F36F21] hover:text-white px-8 py-4 text-xs font-black uppercase tracking-[0.2em] transition-all duration-300 rounded-lg shadow-lg"
//               >
//                 <span>View SE1 Core Services</span>
//               </Link>

//               <a
//                 href={`tel:${LOCAL.phoneDisplay.replace(/\s+/g, '')}`}
//                 className="inline-flex items-center justify-center bg-transparent border-2 border-white/20 text-white px-8 py-4 text-xs font-black uppercase tracking-[0.2em] hover:border-[#F36F21] hover:text-[#F36F21] transition-all duration-300 rounded-lg"
//               >
//                 Call Hotline: {LOCAL.phoneDisplay}
//               </a>
//             </div>
//           </motion.div>

//           {/* RIGHT SIDE: PREMIUM HIGHLIGHTED LOCAL FORM CARD (ORDER 2) */}
//           <motion.div
//             initial={{ opacity: 0, x: 30 }}
//             animate={{ opacity: 1, x: 0 }}
//             transition={{ duration: 0.8, ease: "easeOut", delay: 0.15 }}
//             className="order-2 lg:col-span-5 w-full"
//           >
//             <div className="bg-white text-[#111111] p-6 sm:p-8 rounded-2xl shadow-2xl relative border-t-8 border-[#F36F21]">
//               <div className="mb-6">
//                 <div className="bg-[#111111] text-white text-[9px] font-black uppercase tracking-[0.2em] inline-block px-3 py-1 rounded-md mb-3.5">
//                   Priority Dispatch Queue
//                 </div>
//                 <h3 className="text-xl sm:text-2xl font-black tracking-tight text-neutral-900">
//                   Book Local Engineer
//                 </h3>
//                 <p className="mt-2 text-xs sm:text-sm text-neutral-500 font-bold leading-relaxed">
//                   Local emergency vans are active near Waterloo station. Submit details for an instant callback.
//                 </p>
//               </div>

//               <form onSubmit={handleSubmit} className="space-y-4 text-left">
//                 <fieldset className="space-y-4 border-none p-0 m-0">
//                   <div className="relative">
//                     <input
//                       type="text"
//                       name="name"
//                       value={formData.name}
//                       onChange={handleChange}
//                       placeholder="Full Name / Company Name *"
//                       required
//                       className="w-full border-2 border-neutral-200 bg-neutral-50 rounded-xl px-4 py-3.5 text-sm text-black placeholder:text-neutral-400 outline-none focus:border-[#F36F21] focus:bg-white transition-all font-semibold"
//                     />
//                   </div>

//                   <div className="relative">
//                     <input
//                       type="text"
//                       name="postcode"
//                       value={formData.postcode}
//                       onChange={handleChange}
//                       placeholder={`Waterloo Postcode (e.g., ${LOCAL.postcode}) *`}
//                       required
//                       className="w-full border-2 border-neutral-200 bg-neutral-50 rounded-xl px-4 py-3.5 text-sm text-black placeholder:text-neutral-400 outline-none focus:border-[#F36F21] focus:bg-white transition-all font-semibold"
//                     />
//                   </div>

//                   <div className="relative">
//                     <input
//                       type="tel"
//                       name="phone"
//                       value={formData.phone}
//                       onChange={handleChange}
//                       placeholder="Direct Contact Number *"
//                       required
//                       className={`w-full border-2 bg-neutral-50 rounded-xl px-4 py-3.5 text-sm text-black placeholder:text-neutral-400 outline-none focus:bg-white transition-all font-semibold ${
//                         phoneError ? "border-red-500" : "border-neutral-200 focus:border-[#F36F21]"
//                       }`}
//                     />
//                     {phoneError && (
//                       <span className="absolute -bottom-5 left-1 text-red-600 text-[10px] font-black tracking-wide animate-pulse">
//                         ⚠️ {phoneError}
//                       </span>
//                     )}
//                   </div>
//                 </fieldset>

//                 <button
//                   type="submit"
//                   disabled={loading}
//                   className="w-full bg-[#F36F21] hover:bg-[#D95A13] text-white px-6 py-4 rounded-xl text-xs sm:text-sm font-black uppercase tracking-[0.25em] transition-all duration-200 shadow-xl shadow-[#F36F21]/15 mt-3"
//                 >
//                   {loading ? "Routing Unit..." : "Request Call Guard Now"}
//                 </button>
//               </form>

//               {/* HIGHLY HIGHLIGHTED TARGET ADDRESS & INFO SECTION FOR CRAWLERS */}
//               <address className="mt-6 pt-6 border-t border-neutral-100 not-italic space-y-3 text-xs">
//                 <div className="bg-neutral-50 p-3.5 rounded-xl border-l-4 border-l-[#F36F21] grid grid-cols-2 gap-3">
//                   <div>
//                     <span className="block font-black text-neutral-400 uppercase text-[9px] tracking-widest mb-0.5">Waterloo Division</span>
//                     <span className="text-black font-black text-xs sm:text-sm">{LOCAL.businessName}</span>
//                   </div>
//                   <div>
//                     <span className="block font-black text-neutral-400 uppercase text-[9px] tracking-widest mb-0.5">Emergency Hotline</span>
//                     <a href={`tel:${LOCAL.phoneDisplay.replace(/\s+/g, '')}`} className="text-[#F36F21] font-black text-xs sm:text-sm block hover:underline">
//                       <span itemProp="telephone">{LOCAL.phoneDisplay}</span>
//                     </a>
//                   </div>
//                 </div>
                
//                 <div className="bg-neutral-900 text-white p-3.5 rounded-xl">
//                   <span className="block font-black text-[#F36F21] uppercase text-[9px] tracking-[0.2em] mb-1.5">Registered Waterloo Hub & NAP Data</span>
//                   <span itemProp="address" className="text-neutral-300 font-bold leading-relaxed block text-[11px]">
//                     📍 {LOCAL.address}
//                   </span>
//                 </div>
//               </address>
//             </div>
//           </motion.div>

//         </div>
//       </div>
//     </section>
//   );
// }











import React, { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import axios from "axios";
import toast, { Toaster } from "react-hot-toast";

const brandColors = {
  dark: "#0b0b0d",
  accent: "#F36F21",
  accentHover: "#D95A13",
  cardBg: "rgba(255, 255, 255, 0.03)",
  borderWhite: "rgba(255, 255, 255, 0.08)",
};

export default function HeroSection() {
  const [formData, setFormData] = useState({
    name: "",
    postcode: "",
    phone: "",
  });

  const [loading, setLoading] = useState(false);
  const [phoneError, setPhoneError] = useState("");

  // MASTER CONFIG - PrimeShield Waterloo SE1 Hub
  const LOCAL = {
    area: "Waterloo",
    postcode: "SE1",
    businessName: "PrimeShield Waterloo",
    address: "6 Chaplin Cl, London SE1 8TU",
    phoneDisplay: "07448 180941",
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (name === "phone") setPhoneError("");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.phone.trim()) {
      setPhoneError("Please enter a valid phone number");
      return;
    }
    setLoading(true);

    toast.promise(
      axios.post("https://primeshieldwaterloo-backend.vercel.app/api/callback", {
        ...formData,
        area: LOCAL.area,
        business: LOCAL.businessName,
        address: LOCAL.address,
        phoneNumber: LOCAL.phoneDisplay,
      }),
      {
        loading: `Securing connection to ${LOCAL.area} hub...`,
        success: () => {
          setFormData({ name: "", postcode: "", phone: "" });
          setLoading(false);
          return `Dispatched! ${LOCAL.businessName} will contact you shortly.`;
        },
        error: (error) => {
          setLoading(false);
          return error.response?.data?.message || "Connection timed out. Call hotline directly.";
        },
      },
      {
        style: {
          fontFamily: "sans-serif",
          fontSize: "14px",
          borderRadius: "12px",
          padding: "14px 20px",
        },
        success: {
          style: { background: "#111111", color: "#FFFFFF", border: `1px solid ${brandColors.accent}` },
        },
        error: {
          style: { background: "#4c0519", color: "#fecdd3", border: "1px solid #f43f5e" },
        },
      }
    );
  };

  return (
    <section 
      itemScope 
      itemType="https://schema.org/PestControlService" 
      className="relative min-h-screen bg-[#0c0c0e] mt-10 text-white font-sans pt-36 pb-24 overflow-hidden"
    >
      <Toaster position="top-center" reverseOrder={false} containerStyle={{ top: "130px", zIndex: 99999 }} />

      {/* ENHANCED LIGHTING & IMAGE VISIBILITY SCHEME */}
      <div className="absolute inset-0 z-0">
        <picture>
          <source media="(min-width: 768px)" srcSet="/images/herohome.webp" />
          <img
            src="/images/herohome.webp"
            alt={`${LOCAL.businessName} Emergency Infrastructure`}
            className="h-full w-full object-cover object-center opacity-75 contrast-110 brightness-95 scale-100 transition-all duration-700"
            loading="eager"
          />
        </picture>
        
        {/* Soft Linear & Radial Gradients that Protect Text Readability but Keep Image Clear */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/30 to-[#0c0c0e]" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/40 to-black/20" />
        
        {/* Ambient Focal Glow */}
        <div className="absolute top-12 left-1/2 -translate-x-1/2 w-[600px] h-[250px] bg-[#F36F21]/10 rounded-full blur-[120px] pointer-events-none" />
      </div>

      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 md:px-8 lg:px-10 flex flex-col">
        
        {/* PHASE 1: COMPLETELY CENTERED ATTACK TEXT BLOCK */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="w-full max-w-4xl mx-auto text-center mb-16"
        >
          <div className="inline-flex items-center gap-2.5 px-4 py-1.5 mb-6 bg-black/60 backdrop-blur-md rounded-full border border-white/10 shadow-xl">
            <span className="w-2 h-2 rounded-full bg-[#F36F21] animate-pulse" />
            <span className="text-slate-200 font-bold uppercase tracking-[0.2em] text-[10px] sm:text-xs">
              24HR Immediate Extraction Force • SE1
            </span>
          </div>

          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight leading-[1.1] mb-6 text-white drop-shadow-[0_4px_12px_rgba(0,0,0,0.8)]">
            Professional Eradication & Certified Pest Management In <span itemProp="areaServed" className="text-[#F36F21]">{LOCAL.area}</span>
          </h1>

          <p className="text-slate-200 text-sm sm:text-base max-w-2xl mx-auto leading-relaxed font-semibold bg-black/40 backdrop-blur-sm p-4 rounded-xl border border-white/5 shadow-2xl">
            Deploying heavy-duty, eco-safe molecular bait systems and structural barriers. Certified technicians operating directly from our localized base at <span className="text-[#F36F21] underline decoration-[#F36F21] font-bold">{LOCAL.address}</span> to neutralize commercial and domestic bio-hazards permanently.
          </p>
        </motion.div>

        {/* PHASE 2: MODERN TWO-COLUMN BASE WORKSPACE LAYOUT */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch max-w-6xl w-full mx-auto">
          
          {/* LEFT INTERFACE COLUMN: HIGH VALUE TRUST METRICS */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="lg:col-span-6 flex flex-col justify-between gap-6"
          >
            <div className="bg-black/60 border border-white/10 backdrop-blur-md p-6 sm:p-8 rounded-2xl flex flex-col justify-center h-full shadow-2xl">
              <h2 className="text-xs uppercase font-black text-[#F36F21] tracking-[0.25em] mb-3">
                Operational Framework
              </h2>
              <h3 className="text-lg sm:text-xl font-black text-slate-100 mb-4">
                Regulated Emergency Extermination Protocol
              </h3>
              <p className="text-slate-300 text-xs sm:text-sm leading-relaxed mb-6 font-medium">
                Every dispatch managed by <strong className="text-white font-bold" itemProp="name">{LOCAL.businessName}</strong> adheres to rigid multi-stage clearance criteria, eradicating bed bugs, commercial rodent loops, and nesting hazards with total structural security.
              </p>
              
              <div className="grid grid-cols-2 gap-4 border-t border-white/10 pt-6">
                <div className="p-4 bg-white/[0.03] rounded-xl border border-white/5 backdrop-blur-sm">
                  <div className="text-white font-black text-lg mb-1">RSPH L2</div>
                  <div className="text-slate-400 text-[11px] font-bold uppercase tracking-wider">Certified Team</div>
                </div>
                <div className="p-4 bg-white/[0.03] rounded-xl border border-white/5 backdrop-blur-sm">
                  <div className="text-[#F36F21] font-black text-lg mb-1">24 Hours</div>
                  <div className="text-slate-400 text-[11px] font-bold uppercase tracking-wider">Active Standby</div>
                </div>
              </div>
            </div>

            {/* QUICK LINK BAR */}
            <div className="flex sm:items-center justify-between flex-col sm:flex-row gap-4 p-5 bg-black/60 backdrop-blur-md border border-white/10 rounded-xl shadow-2xl">
              <div className="text-left">
                <div className="text-[10px] uppercase font-black text-slate-400 tracking-wider">Need Technical Info?</div>
                <div className="text-white font-bold text-xs">Examine our multi-tier packages</div>
              </div>
              <Link to="/services" className="bg-white/10 hover:bg-[#F36F21] hover:text-white text-white px-5 py-2.5 rounded-lg text-[11px] font-black uppercase tracking-wider text-center transition-all duration-300 border border-white/10">
                Explore Services
              </Link>
            </div>
          </motion.div>

          {/* RIGHT INTERFACE COLUMN: PREMIUM GLASS CONTROL CARD */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-6"
          >
            <div className="bg-black/75 backdrop-blur-xl text-white p-6 sm:p-8 rounded-2xl shadow-[0_25px_60px_-15px_rgba(0,0,0,0.8)] border border-white/10 flex flex-col justify-between h-full">
              <div>
                <div className="flex items-center justify-between border-b border-white/10 pb-4 mb-6">
                  <div>
                    <span className="block font-black text-[#F36F21] uppercase text-[9px] tracking-widest">Active Dispatch Desk</span>
                    <h4 className="text-lg font-black tracking-tight text-white mt-0.5">Secure Priority Booking</h4>
                  </div>
                  <a 
                    href={`tel:${LOCAL.phoneDisplay.replace(/\s+/g, '')}`} 
                    className="bg-white text-black hover:bg-[#F36F21] hover:text-white p-3 rounded-xl transition-all duration-200 text-center flex flex-col border border-white/10 shadow-lg"
                  >
                    <span className="text-[9px] font-black uppercase tracking-wider opacity-60">Call Unit</span>
                    <span className="text-xs font-black" itemProp="telephone">{LOCAL.phoneDisplay}</span>
                  </a>
                </div>

                <form onSubmit={handleSubmit} className="space-y-4">
                  <fieldset className="space-y-4 border-none p-0 m-0">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Your Name / Business *"
                        required
                        className="w-full border border-white/10 bg-white/[0.05] rounded-xl px-4 py-3.5 text-sm text-white placeholder:text-slate-400 outline-none focus:border-[#F36F21] focus:bg-white/10 transition-all font-semibold"
                      />
                      <input
                        type="text"
                        name="postcode"
                        value={formData.postcode}
                        onChange={handleChange}
                        placeholder={`Postcode (e.g., ${LOCAL.postcode}) *`}
                        required
                        className="w-full border border-white/10 bg-white/[0.05] rounded-xl px-4 py-3.5 text-sm text-white placeholder:text-slate-400 outline-none focus:border-[#F36F21] focus:bg-white/10 transition-all font-semibold"
                      />
                    </div>
                    <div className="relative">
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="Direct Mobile Number *"
                        required
                        className={`w-full border bg-white/[0.05] rounded-xl px-4 py-3.5 text-sm text-white placeholder:text-slate-400 outline-none focus:bg-white/10 transition-all font-semibold ${
                          phoneError ? "border-red-500" : "border-white/10 focus:border-[#F36F21]"
                        }`}
                      />
                      {phoneError && (
                        <span className="absolute -bottom-5 left-1 text-red-500 text-[10px] font-black tracking-wide">
                          ⚠️ {phoneError}
                        </span>
                      )}
                    </div>
                  </fieldset>

                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full bg-[#F36F21] hover:bg-[#D95A13] text-white px-6 py-4 rounded-xl text-xs sm:text-sm font-black uppercase tracking-[0.2em] transition-all duration-200 shadow-xl shadow-[#F36F21]/20 mt-2"
                  >
                    {loading ? "Transmitting Leads..." : "Initiate Direct Callback"}
                  </button>
                </form>
              </div>

              {/* REGISTERED ADDRESS FOOTPRINT FOR LOCALIZED SEARCH INDEXES */}
              <div className="mt-6 pt-4 border-t border-white/10 text-[11px] text-slate-400 font-medium flex items-center gap-2">
                <span className="text-[#F36F21]">📍</span>
                <span itemProp="address" className="truncate">
                  Registered Core Station: <strong className="text-slate-200">{LOCAL.address}</strong>
                </span>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}