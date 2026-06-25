









// import React, { useEffect, useState } from "react";
// import { useLocation, useNavigate } from "react-router-dom";
// import {
//   ShieldAlert,
//   ArrowRight,
//   Bug,
//   Rat,
//   Bird,
//   Sparkles,
//   Home,
//   SlidersHorizontal,
//   Crosshair,
//   Phone,
//   MapPin,
//   CheckCircle2,
//   Maximize2
// } from "lucide-react";
// import AboutCallbackSection from "../components/AboutCallbackSection";
// import ServicesHeroSection from "../components/ServicesHeroSection";

// const Services = () => {
//   const navigate = useNavigate();
//   const location = useLocation();
//   const [selectedCategory, setSelectedCategory] = useState("All");

//   // SINGLE SOURCE OF TRUTH FOR WANDSWORTH NODE
//   const area = "Wandsworth";
//   const postcode = "SW18";
//   const address = "91 Pirbright Rd, London SW18 5ND";
//   const phoneNo = "07356 253624";
//   const companyName = "PrimeShield Wandsworth";

//   const categories = [
//     "All",
//     "Insects",
//     "Rodents & Wildlife",
//     "Birds & Prevention",
//   ];

//   const servicesData = [
//     {
//       id: "PS-01",
//       cat: "Insects",
//       title: `Ants Control ${area}`,
//       image: "/images/ants.webp",
//       icon: Bug,
//       tag: "Residential & Commercial",
//       guarantee: "100% Eradication Guarantee",
//       details: `Complete removal of ant infestations from kitchens, walls, and foundations. We track the nests, eliminate the queen, and create protective treatment barriers around your property in ${area} to stop them from coming back.`,
//     },
//     {
//       id: "PS-02",
//       cat: "Insects",
//       title: `Bed Bugs Heat Treatment ${area}`,
//       image: "/images/bedbugs.webp",
//       icon: Bug,
//       tag: "Emergency Treatment",
//       guarantee: "Same-Day Elimination",
//       details: `Fast and reliable elimination of bed bugs from mattresses, premium bed frames, and carpets. We use safe, professional-grade formulas to clear high-density homes and rental apartments across ${area} quickly.`,
//     },
//     {
//       id: "PS-03",
//       cat: "Insects",
//       title: `Carpet Moth Treatment ${area}`,
//       image: "/images/moths.webp",
//       icon: Sparkles,
//       tag: "Fabric & Asset Protection",
//       guarantee: "Full Fabric Protection",
//       details: `Specialist moth control for your carpets, luxury rugs, wardrobes, and furniture fabrics. Our fast-acting treatments target microscopic moth eggs and larvae to protect your home assets from damage.`,
//     },
//     {
//       id: "PS-04",
//       cat: "Insects",
//       title: `Carpet Beetle Control ${area}`,
//       image: "/images/beetle.webp",
//       icon: Bug,
//       tag: "Property Care Plan",
//       guarantee: "Long-Term Protection",
//       details: `Clearing deep-seated beetle larvae hidden beneath skirting boards, dark storage areas, and floorboards. We apply safe residual barriers to completely stop their lifecycle and secure your carpets.`,
//     },
//     {
//       id: "PS-05",
//       cat: "Insects",
//       title: `Cockroach Control ${area}`,
//       image: "/images/cockroach.webp",
//       icon: Bug,
//       tag: "Kitchen Sanitation Safety",
//       guarantee: "Immediate Knockdown",
//       details: `Heavy-duty cockroach removal for domestic kitchens and commercial food outlets. We find their hideouts near water pipes and electrical appliances, using high-performance gel baiting for immediate results.`,
//     },
//     {
//       id: "PS-06",
//       cat: "Rodents & Wildlife",
//       title: `Rats & Mice Control ${area}`,
//       image: "/images/rodents.webp",
//       icon: Rat,
//       tag: "Complete Rat Proofing",
//       guarantee: "Entry Points Blocked Permanently",
//       details: `Professional rodent control and proofing for lofts, basements, and modern kitchens. Operating right from our main service base at ${address}, we track internal tunnels and seal entry points permanently with steel mesh.`,
//     },
//     {
//       id: "PS-07",
//       cat: "Insects",
//       title: `Flea Treatment ${area}`,
//       image: "/images/flea.webp",
//       icon: Bug,
//       tag: "Pet & Family Friendly",
//       guarantee: "Rapid Relief Formula",
//       details: `Thorough household flea treatments designed to break the breeding cycle instantly. We treat all carpets, baseboards, and soft upholstery fabrics to give your family and pets immediate, long-term relief.`,
//     },
//     {
//       id: "PS-08",
//       cat: "Insects",
//       title: `Wasp Nest Removal ${area}`,
//       image: "/images/wasps.webp",
//       icon: ShieldAlert,
//       tag: "High-Risk Threat Response",
//       guarantee: "Safe Nest Neutralization",
//       details: `Safe, rapid removal of active wasp nests from high rooflines, loft spaces, garden sheds, and wall cavities. Handled by trained local technicians with absolute emphasis on safety and speed.`,
//     },
//     {
//       id: "PS-09",
//       cat: "Insects",
//       title: `Bee Relocation & Advice ${area}`,
//       image: "/images/bee.webp",
//       icon: Bug,
//       tag: "Eco-Friendly Consulting",
//       guarantee: "Safe & Compliant Handling",
//       details: `Expert assessment and eco-friendly relocation support when bee nests are built too close to living areas. We advise property owners on safe management practices according to local regulations.`,
//     },
//     {
//       id: "PS-10",
//       cat: "Rodents & Wildlife",
//       title: `Squirrel Proofing ${area}`,
//       image: "/images/squirrel.webp",
//       icon: Rat,
//       tag: "Roof & Loft Security",
//       guarantee: "High-Tensile Wire Blocking",
//       details: `Securing roof voids, timber structures, and fascia boards against destructive squirrels. We find where they enter your roof and block access with heavy-duty structural metal components.`,
//     },
//     {
//       id: "PS-11",
//       cat: "Birds & Prevention",
//       title: `Property Proofing & Hygiene ${area}`,
//       image: "/images/hygene.webp",
//       icon: Home,
//       tag: "Structural Property Hardening",
//       guarantee: "Full Structural Warranty",
//       details: `Professional property proofing and gap sealing services. We repair building flaws, close structural access holes, and thoroughly sanitize previous nesting areas to block all pests out.`,
//     },
//     {
//       id: "PS-12",
//       cat: "Birds & Prevention",
//       title: `Pigeon Control & Deterrents ${area}`,
//       image: "/images/birds.webp",
//       icon: Bird,
//       tag: "Commercial & Domestic Netting",
//       guarantee: "Clean Building Envelopes",
//       details: `Premium pigeon netting, tension wires, and spike array installations. Ideal for protecting open ledges, rooftops, and storefront window panels from bird droppings and damage across ${area}.`,
//     },
//   ];

//   useEffect(() => {
//     if (location.state) {
//       const targetCategory = location.state.category || "All";
//       setSelectedCategory(targetCategory);

//       if (location.state.scrollToService) {
//         const timer = setTimeout(() => {
//           const incomingText = location.state.scrollToService.toLowerCase();
//           let keyword = incomingText;

//           if (incomingText.includes("rat") || incomingText.includes("mice")) keyword = "rat";
//           else if (incomingText.includes("bed bug") || incomingText.includes("heat")) keyword = "bed bug";
//           else if (incomingText.includes("moth")) keyword = "moth";

//           const element = Array.from(document.querySelectorAll("[data-title]")).find((el) => {
//             const currentTitle = el.getAttribute("data-title").toLowerCase();
//             return currentTitle.includes(keyword);
//           });

//           if (element) {
//             const offset = 180; 
//             const bodyRect = document.body.getBoundingClientRect().top;
//             const elementRect = element.getBoundingClientRect().top;
//             const elementPosition = elementRect - bodyRect;
//             const offsetPosition = elementPosition - offset;

//             window.scrollTo({
//               top: offsetPosition,
//               behavior: "smooth",
//             });
//           }
//         }, 400); 
        
//         return () => clearTimeout(timer);
//       }
//     }
//   }, [location]);

//   const filteredServices =
//     selectedCategory === "All"
//       ? servicesData
//       : servicesData.filter((service) => service.cat === selectedCategory);

//   return (
//     <main className="bg-[#070708] min-h-screen font-sans overflow-x-hidden text-[#EEEEEE]">
//       <ServicesHeroSection />

//       {/* Local Operational Header Metrics Line */}
//       <div className="bg-[#0D0D11] border-b border-white/5 py-3 px-6 text-xs font-mono tracking-wider text-neutral-400">
//         <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
//           <div className="flex flex-wrap justify-center gap-6 items-center">
//             <span className="flex items-center gap-2 text-neutral-300"><MapPin className="w-3.5 h-3.5 text-[#F36F21]" /> Base: {address}</span>
//             <span className="flex items-center gap-2 text-neutral-300"><Phone className="w-3.5 h-3.5 text-[#F36F21]" /> Hotline: {phoneNo}</span>
//           </div>
//           <div className="flex items-center gap-2">
//             <span className="inline-block w-2 h-2 rounded-full bg-[#F36F21] animate-pulse"></span>
//             <span className="text-[11px] font-bold uppercase text-neutral-300 tracking-widest">Rapid Response Node: {area} ({postcode})</span>
//           </div>
//         </div>
//       </div>

//       {/* Premium Minimalist Sticky Filter Controls */}
//       <section className="sticky top-[72px] z-40 bg-[#070708]/80 backdrop-blur-md border-b border-white/5 shadow-2xl">
//         <div className="max-w-7xl mx-auto px-6 md:px-10 lg:px-14 py-4 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
//           <div className="flex items-center gap-2 text-neutral-400 text-[10px] font-bold uppercase tracking-[0.25em]">
//             <SlidersHorizontal className="w-3.5 h-3.5 text-[#F36F21]" />
//             Filter Framework
//           </div>

//           <div className="flex flex-wrap gap-1 bg-[#111115] p-1 rounded border border-white/5">
//             {categories.map((cat) => {
//               const active = selectedCategory === cat;
//               return (
//                 <button
//                   key={cat}
//                   onClick={() => setSelectedCategory(cat)}
//                   className={`px-4 py-1.5 text-[10px] font-bold uppercase tracking-wider transition-all duration-200 rounded ${
//                     active
//                       ? "bg-[#F36F21] text-white"
//                       : "text-neutral-400 hover:text-white"
//                   }`}
//                 >
//                   {cat}
//                 </button>
//               );
//             })}
//           </div>
//         </div>
//       </section>

//       {/* NEW BENTO GRID DESIGN ARCHITECTURE */}
//       <section className="py-20 lg:py-32 relative">
//         <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-[#F36F21]/5 via-transparent to-transparent pointer-events-none" />
        
//         <div className="max-w-7xl mx-auto px-6 md:px-10 lg:px-14">
          
//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//             {filteredServices.map((service) => {
//               const Icon = service.icon;
//               return (
//                 <div
//                   key={service.id}
//                   data-title={service.title}
//                   onClick={() => navigate("/contact-us")}
//                   className="group relative bg-[#0D0D11] border border-white/5 rounded-xl overflow-hidden cursor-pointer transition-all duration-500 hover:border-[#F36F21]/30 scroll-mt-44 flex flex-col justify-between h-[450px]"
//                 >
//                   {/* Image Backdrop System with Dark Overlay */}
//                   <div className="absolute inset-0 z-0">
//                     <img
//                       src={service.image}
//                       alt={`${companyName} - ${service.title}`}
//                       className="w-full h-full object-cover object-center transform transition-transform duration-1000 ease-out scale-105 group-hover:scale-100 opacity-20 group-hover:opacity-35"
//                       loading="lazy"
//                       decoding="async"
//                     />
//                     <div className="absolute inset-0 bg-gradient-to-t from-[#0D0D11] via-[#0D0D11]/70 to-[#0D0D11]/40" />
//                   </div>

//                   {/* Top Bar Layout (ID and Category Badge) */}
//                   <div className="p-6 relative z-10 flex items-center justify-between">
//                     <span className="text-[10px] font-mono tracking-widest text-neutral-500 group-hover:text-[#F36F21] transition-colors">
//                       // {service.id}
//                     </span>
//                     <span className="text-[9px] font-mono bg-white/5 border border-white/10 px-2.5 py-1 uppercase tracking-wider text-neutral-400 rounded-md">
//                       {service.cat}
//                     </span>
//                   </div>

//                   {/* Central Body Content Area */}
//                   <div className="p-6 relative z-10 mt-auto w-full transition-transform duration-500 transform group-hover:-translate-y-2">
//                     {/* Modern Clean Floating Icon Indicator */}
//                     <div className="w-10 h-10 rounded-lg bg-white/[0.03] border border-white/10 flex items-center justify-center text-neutral-400 group-hover:text-[#F36F21] group-hover:border-[#F36F21]/30 group-hover:bg-[#F36F21]/5 transition-all duration-300 mb-5">
//                       <Icon size={18} strokeWidth={1.5} />
//                     </div>

//                     {/* Meta Specifications */}
//                     <div className="flex items-center gap-3 text-[10px] font-mono tracking-wider text-[#F36F21] uppercase mb-2">
//                       <span className="flex items-center gap-1">
//                         <CheckCircle2 className="w-3 h-3 text-neutral-500" />
//                         {service.tag.split(" & ")[0]}
//                       </span>
//                       <span className="text-white/20">|</span>
//                       <span className="text-neutral-400 truncate max-w-[150px]">
//                         {service.guarantee}
//                       </span>
//                     </div>

//                     {/* Headline */}
//                     <h3 className="text-xl font-bold tracking-tight text-white mb-3 group-hover:text-[#F36F21] transition-colors duration-300">
//                       {service.title}
//                     </h3>

//                     {/* Technical Narrative Line */}
//                     <p className="text-neutral-400 text-xs leading-relaxed font-normal opacity-80 group-hover:opacity-100 transition-opacity line-clamp-3">
//                       {service.details}
//                     </p>
//                   </div>

//                   {/* Premium Action Strip */}
//                   <div className="p-6 pt-0 relative z-10 w-full">
//                     <div className="border-t border-white/5 pt-4 flex items-center justify-between text-[11px] font-bold uppercase tracking-widest text-neutral-400 group-hover:text-white transition-colors">
//                       <span className="inline-flex items-center gap-2">
//                         <Crosshair className="w-3.5 h-3.5 text-[#F36F21]" />
//                         Deploy Inspection
//                       </span>
//                       <div className="w-6 h-6 rounded-full bg-white/5 flex items-center justify-center group-hover:bg-[#F36F21] group-hover:text-white transition-all duration-300">
//                         <ArrowRight size={12} className="transform group-hover:translate-x-0.5 transition-transform" />
//                       </div>
//                     </div>
//                   </div>

//                   {/* Absolute Bottom Border Accent Lift */}
//                   <div className="absolute bottom-0 left-0 h-[2px] bg-gradient-to-r from-transparent via-[#F36F21] to-transparent w-0 group-hover:w-full transition-all duration-500 ease-out" />
//                 </div>
//               );
//             })}
//           </div>

//         </div>
//       </section>

//       <AboutCallbackSection />
//     </main>
//   );
// };

// export default Services;








import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import {
  ShieldAlert,
  ArrowRight,
  Bug,
  Rat,
  Bird,
  Sparkles,
  Home,
  SlidersHorizontal,
  Phone,
  MapPin,
  CheckCircle2,
  ShieldCheck,
  Zap
} from "lucide-react";
import AboutCallbackSection from "../components/AboutCallbackSection";
import ServicesHeroSection from "../components/ServicesHeroSection";

const Services = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [selectedCategory, setSelectedCategory] = useState("All");

  // SINGLE SOURCE OF TRUTH FOR WATERLOO NODE
  const area = "Waterloo";
  const postcode = "SE1";
  const address = "6 Chaplin Cl, London SE1 8TU";
  const phoneNo = "07448 180941";
  const companyName = "PrimeShield Waterloo";

  const categories = [
    "All",
    "Insects",
    "Rodents & Wildlife",
    "Birds & Prevention",
  ];

  const servicesData = [
    {
      cat: "Insects",
      title: `Ants Control ${area}`,
      image: "/images/ants.webp",
      icon: Bug,
      tag: "Residential & Commercial",
      guarantee: "100% Clearance Guarantee",
      metric: "99.4% Success Rate",
      details: `Complete clearing of ant trails from kitchens, wall gaps, and structural foundations. We trace the nests back to the source, clear the colonies, and apply defensive protective barriers around your property in ${area} to stop their return.`,
    },
    {
      cat: "Insects",
      title: `Bed Bugs Heat Treatment ${area}`,
      image: "/images/bedbugs.webp",
      icon: Bug,
      tag: "Emergency Treatment",
      guarantee: "Fast Room Clearance",
      metric: "Thermal Eradication",
      details: `Fast and dependable elimination of bed bugs from mattresses, premium bed structures, and carpets. We apply certified safe formulas to treat high-density flats and rental rooms across ${area} quickly.`,
    },
    {
      cat: "Insects",
      title: `Carpet Moth Treatment ${area}`,
      image: "/images/moths.webp",
      icon: Sparkles,
      tag: "Fabric & Rug Protection",
      guarantee: "Full Material Safety",
      metric: "Larvae Disrupt Tech",
      details: `Targeted moth control for wool carpets, luxury rugs, clothing wardrobes, and home furniture fabrics. Our fast treatments stop active larvae to save your valuable fabrics and floor assets from damage.`,
    },
    {
      cat: "Insects",
      title: `Carpet Beetle Control ${area}`,
      image: "/images/beetle.webp",
      icon: Bug,
      tag: "Property Care Plan",
      guarantee: "Long-Term Control",
      metric: "Sub-Floor Layering",
      details: `Clearing deep beetle larvae hidden under skirting boards, low-light storage areas, and floorboards. We lay down safe residual barriers to disrupt their life cycle completely and keep your carpets clear.`,
    },
    {
      cat: "Insects",
      title: `Cockroach Control ${area}`,
      image: "/images/cockroach.webp",
      icon: Bug,
      tag: "Kitchen Sanitation Safety",
      guarantee: "Immediate Knockdown",
      metric: "Gel Bait Formulation",
      details: `Heavy-duty cockroach removal layouts tailored for household kitchens and commercial food outlets. We find their dark hiding points near plumbing pipes and electrical setups, utilizing high-grade gel bait lines.`,
    },
    {
      cat: "Rodents & Wildlife",
      title: `Rats & Mice Control ${area}`,
      image: "/images/rodents.webp",
      icon: Rat,
      tag: "Complete Rodent Proofing",
      guarantee: "Entry Gaps Sealed For Good",
      metric: "Steel Mesh Isolation",
      details: `Professional rodent control and structural baiting for dark lofts, basements, and kitchens. Dispatched straight from our service base at ${address}, we trace nesting lines and seal exterior structural gaps tightly with tough steel mesh grids.`,
    },
    {
      cat: "Insects",
      title: `Flea Treatment ${area}`,
      image: "/images/flea.webp",
      icon: Bug,
      tag: "Pet & Family Friendly",
      guarantee: "Rapid Household Relief",
      metric: "Spore Elimination",
      details: `Thorough household flea spraying routines structured to break the breeding pattern instantly. We treat all room carpets, low baseboards, and furniture fabrics to restore absolute comfort for your family and indoor pets.`,
    },
    {
      cat: "Insects",
      title: `Wasp Nest Removal ${area}`,
      image: "/images/wasps.webp",
      icon: ShieldAlert,
      tag: "High-Risk Threat Response",
      guarantee: "Safe Nest Neutralization",
      metric: "Pressure Jet Delivery",
      details: `Safe, rapid removal of active wasp nests from high rooflines, loft spaces, garden sheds, and wall cavities. Handled safely by trained operators with absolute focus on protection and site safety.`,
    },
    {
      cat: "Insects",
      title: `Bee Relocation Support ${area}`,
      image: "/images/bee.webp",
      icon: Bug,
      tag: "Eco-Friendly Support",
      guarantee: "Safe & Compliant Guidance",
      metric: "Live Hive Transit",
      details: `Expert structural checks and eco-safe redirection advice when bee swarms locate too close to entry ways. We support property owners with clear advice on safe management layouts according to local environmental rules.`,
    },
    {
      cat: "Rodents & Wildlife",
      title: `Squirrel Proofing ${area}`,
      image: "/images/squirrel.webp",
      icon: Rat,
      tag: "Roof & Loft Isolation",
      guarantee: "High-Tensile Mesh Blocking",
      metric: "Fascia Board Armoring",
      details: `Securing open roof voids, joist timbers, and fascia boards against destructive squirrels. We isolate where they bite into your roof perimeter and reinforce those gaps with thick structural metal plates.`,
    },
    {
      cat: "Birds & Prevention",
      title: `Property Proofing & Repairs ${area}`,
      image: "/images/hygene.webp",
      icon: Home,
      tag: "Structural Hardening",
      guarantee: "Full Proofing Warranty",
      metric: "Biocide Sanitization",
      details: `Professional property proofing and entry sealing layouts. We repair building flaws, close open structural gaps, and deep sanitize old nesting areas to ensure pests cannot locate an alternative path inside.`,
    },
    {
      cat: "Birds & Prevention",
      title: `Birds Control & Deterrents ${area}`,
      image: "/images/birds.webp",
      icon: Bird,
      tag: "Netting & Spike Systems",
      guarantee: "Clean Building Envelopes",
      metric: "Tension Wire Arrays",
      details: `Premium pigeon netting installations, spring tension wires, and discreet spike arrays. Ideal for safeguarding structural window ledges, rooftops, and commercial shop front displays from bird droppings and mess across ${area}.`,
    },
  ];

  useEffect(() => {
    if (location.state) {
      const targetCategory = location.state.category || "All";
      setSelectedCategory(targetCategory);

      if (location.state.scrollToService) {
        const timer = setTimeout(() => {
          const incomingText = location.state.scrollToService.toLowerCase();
          let keyword = incomingText;

          if (incomingText.includes("rat") || incomingText.includes("mice")) keyword = "rat";
          else if (incomingText.includes("bed bug") || incomingText.includes("heat")) keyword = "bed bug";
          else if (incomingText.includes("moth")) keyword = "moth";

          const element = Array.from(document.querySelectorAll("[data-title]")).find((el) => {
            const currentTitle = el.getAttribute("data-title").toLowerCase();
            return currentTitle.includes(keyword);
          });

          if (element) {
            const offset = 180; 
            const bodyRect = document.body.getBoundingClientRect().top;
            const elementRect = element.getBoundingClientRect().top;
            const elementPosition = elementRect - bodyRect;
            const offsetPosition = elementPosition - offset;

            window.scrollTo({
              top: offsetPosition,
              behavior: "smooth",
            });
          }
        }, 400); 
        
        return () => clearTimeout(timer);
      }
    }
  }, [location]);

  const filteredServices =
    selectedCategory === "All"
      ? servicesData
      : servicesData.filter((service) => service.cat === selectedCategory);

  return (
    <main className="bg-[#060608] min-h-screen font-sans overflow-x-hidden text-zinc-300 selection:bg-[#F36F21] selection:text-white">
      <ServicesHeroSection />

      {/* Real-time Status Center Bar */}
      <div className="bg-zinc-950 border-y border-zinc-900/50 py-3.5 px-6 text-[11px] font-mono tracking-wider text-zinc-400">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex flex-wrap justify-center gap-8 items-center">
            <span className="flex items-center gap-2 text-zinc-300">
              <MapPin className="w-3.5 h-3.5 text-[#F36F21]" /> LOCAL HUB: <span className="text-white font-semibold">{address}</span>
            </span>
            <span className="flex items-center gap-2">
              <Phone className="w-3.5 h-3.5 text-zinc-500" /> HELPLINE: <span className="text-zinc-200 font-semibold">{phoneNo}</span>
            </span>
          </div>
          <div className="flex items-center gap-2.5 bg-zinc-900/80 px-3 py-1 rounded border border-zinc-800">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#F36F21]/70 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-[#F36F21]"></span>
            </span>
            <span className="text-[10px] uppercase font-bold tracking-widest text-zinc-300">{area} OPERATIONAL</span>
          </div>
        </div>
      </div>

      {/* Premium Horizontal Filter Hub */}
      <section className="sticky top-[72px] z-40 bg-[#060608]/90 backdrop-blur-md border-b border-zinc-900/50">
        <div className="max-w-6xl mx-auto px-6 py-4 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <SlidersHorizontal className="w-4 h-4 text-[#F36F21]" />
            <span className="text-xs font-mono uppercase tracking-wider text-zinc-400">Filter Specialty Treatment</span>
          </div>

          <div className="flex flex-wrap gap-1.5 bg-zinc-950 p-1.5 rounded-xl border border-zinc-900">
            {categories.map((cat) => {
              const active = selectedCategory === cat;
              return (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-4 py-2 text-[11px] font-medium tracking-wide transition-all duration-200 rounded-lg ${
                    active
                      ? "bg-zinc-900 text-white border border-zinc-800 shadow-sm"
                      : "text-zinc-500 hover:text-zinc-300"
                  }`}
                >
                  {cat}
                </button>
              );
            })}
          </div>
        </div>
      </section>

      {/* MODERN MINIMAL DIRECTORY ROWS (NON-CARD DESIGN) */}
      <section className="py-16 relative">
        <div className="max-w-6xl mx-auto px-6 space-y-6">
          
          {filteredServices.map((service, index) => {
            const Icon = service.icon;
            
            return (
              <div
                key={index}
                data-title={service.title}
                onClick={() => navigate("/contact-us")}
                className="group relative w-full bg-zinc-950/40 border border-zinc-900/60 hover:border-zinc-800 rounded-2xl transition-all duration-300 scroll-mt-44 flex flex-col lg:flex-row items-stretch overflow-hidden cursor-pointer"
              >
                {/* Left Informational Structural Area */}
                <div className="flex-1 p-6 sm:p-8 lg:p-10 flex flex-col justify-between space-y-6">
                  
                  <div className="space-y-4">
                    {/* Top Detail Attributes */}
                    <div className="flex flex-wrap items-center gap-3 text-[10px] font-mono tracking-wider uppercase text-zinc-500">
                      <span className="px-2.5 py-0.5 rounded bg-zinc-900 border border-zinc-800 text-zinc-400">
                        {service.cat}
                      </span>
                      <span>•</span>
                      <span className="text-zinc-400">{service.tag}</span>
                      <span>•</span>
                      <span className="text-[#F36F21] flex items-center gap-1">
                        <Zap className="w-3 h-3" /> {service.metric}
                      </span>
                    </div>

                    {/* Headline Accent */}
                    <h3 className="text-xl sm:text-2xl font-bold tracking-tight text-white group-hover:text-[#F36F21] transition-colors duration-200">
                      {service.title}
                    </h3>

                    {/* Paragraph Content */}
                    <p className="text-zinc-400 text-sm leading-relaxed font-light max-w-3xl">
                      {service.details}
                    </p>
                  </div>

                  {/* Clean Bottom Actions Strip */}
                  <div className="pt-6 border-t border-zinc-900/80 flex flex-wrap items-center justify-between gap-4">
                    <div className="flex items-center gap-2 text-xs text-zinc-400">
                      <ShieldCheck className="w-4 h-4 text-emerald-500" />
                      <span>{service.guarantee}</span>
                    </div>

                    <div className="flex items-center gap-2 bg-zinc-900/60 group-hover:bg-[#F36F21] border border-zinc-800 group-hover:border-[#F36F21] px-5 py-2.5 rounded-xl text-xs font-semibold text-white transition-all duration-300">
                      <span>Book Inspection</span>
                      <ArrowRight size={14} className="transform group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>

                </div>

                {/* Right Pristine Image Workspace - 100% Clear View */}
                <div className="w-full lg:w-[340px] xl:w-[380px] min-h-[240px] lg:min-h-auto relative bg-zinc-900 border-t lg:border-t-0 lg:border-l border-zinc-900/60 overflow-hidden shrink-0">
                  <img
                    src={service.image}
                    alt={`${companyName} - ${service.title}`}
                    className="w-full h-full object-cover object-center absolute inset-0 transition-transform duration-700 ease-out scale-100 group-hover:scale-[0.97]"
                    loading="lazy"
                  />
                </div>

              </div>
            );
          })}

          {filteredServices.length === 0 && (
            <div className="text-center py-20 border border-dashed border-zinc-900 rounded-2xl">
              <p className="text-zinc-500 font-mono text-sm">No services found matching this specification.</p>
            </div>
          )}

        </div>
      </section>

      <AboutCallbackSection />
    </main>
  );
};

export default Services;