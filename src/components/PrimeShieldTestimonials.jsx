import React from "react";
import { Star, ShieldCheck, Phone, ArrowUpRight, Home, Flame, Building2, Quote, MapPin } from "lucide-react";

export default function PrimeShieldTestimonials() {
  // SINGLE SOURCE OF TRUTH FOR WATERLOO / SE1
  const LOCAL = {
    area: "Waterloo",
    postcode: "SE1 8TU",
    baseAddress: "6 Chaplin Cl, London SE1 8TU",
    businessName: "PrimeShield Waterloo",
    phone: "07448 180941",
    phoneDisplay: "07448 180941"
  };

  const reviews = [
    {
      category: "Residential Proofing",
      icon: Home,
      title: "Mice infestation stopped permanently",
      quote: "Discovered mice droppings behind our kitchen units in our Waterloo family house. The PrimeShield team arrived within the hour, mapped out the hidden structural entry holes under the floorboards, and sealed everything with solid wire mesh. Outstanding local service.",
      name: "David Cartwright",
      role: "Waterloo Resident"
    },
    {
      category: "Emergency Dispatch",
      icon: Flame,
      title: "Fast wasp nest removal near Chaplin Close",
      quote: "Had a massive wasp nest developing right by our main property entrance near Chaplin Close. Called their team directly and they dispatched a local tech straight away. They isolated the area, neutralized the nest safely without any mess, and gave us full clearance.",
      name: "Eleanor Vance",
      role: "SE1 Property Manager"
    },
    {
      category: "Commercial Contract",
      icon: Building2,
      title: "Discreet kitchen protection for restaurant",
      quote: "Excellent regular pest monitoring contract for our restaurant premises near the local high street. They operate completely discreetly out-of-hours, maintain clear digital paperwork for health inspectors, and keep our entire setup completely pest-free.",
      name: "Marcus Thorne",
      role: "Restaurant Owner, Waterloo"
    }
  ];

  return (
    <section className="relative overflow-hidden bg-[#050507] py-24 lg:py-32 font-sans text-white selection:bg-[#F36F21] border-b border-zinc-900">
      
      {/* SaaS Geometric & Glow Mesh Background */}
      <div className="absolute inset-0 bg-[radial-gradient(#ffffff01_1px,transparent_1px)] [background-size:20px_20px] pointer-events-none" />
      <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-gradient-to-br from-[#F36F21]/5 to-transparent rounded-full filter blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-amber-500/5 rounded-full filter blur-[100px] pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-10 lg:px-12">
        
        {/* Header Section */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16 pb-8 border-b border-zinc-900/60">
          <div className="space-y-4 max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-zinc-900 border border-zinc-800 text-[11px] font-mono tracking-wider text-[#F36F21]">
              <span className="w-1.5 h-1.5 rounded-full bg-[#F36F21] animate-pulse" />
              Verified Feedback
            </div>
            <h2 className="text-4xl sm:text-5xl font-black tracking-tight text-white leading-tight">
              Trusted By Your Neighbors <br />In <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-zinc-200 to-zinc-400">{LOCAL.area}</span>
            </h2>
            <p className="text-zinc-400 text-sm sm:text-base leading-relaxed">
              Read real feedback from local homeowners and business owners served directly from our headquarters at <span className="text-white font-medium">{LOCAL.baseAddress}</span>.
            </p>
          </div>

          {/* Quick HUD badge */}
          <div className="flex items-center gap-4 bg-zinc-950 p-4 rounded-xl border border-zinc-900 self-start md:self-auto shadow-xl">
            <div className="w-10 h-10 rounded-lg bg-[#F36F21]/10 border border-[#F36F21]/20 flex items-center justify-center text-[#F36F21]">
              <ShieldCheck size={20} />
            </div>
            <div>
              <div className="flex items-center gap-1">
                <span className="text-xl font-black text-white">4.9</span>
                <span className="text-zinc-500 text-xs">/5.0</span>
              </div>
              <p className="text-[11px] font-mono uppercase tracking-wider text-zinc-400">SE1 Rating Index</p>
            </div>
          </div>
        </div>

        {/* Testimonials Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 items-stretch">
          
          {/* Card 1: Review */}
          <article className="bg-gradient-to-b from-[#0b0b0e] to-[#08080a] border border-zinc-900/80 rounded-2xl p-6 flex flex-col justify-between hover:border-zinc-800 transition-all duration-300 group shadow-lg">
            <div className="space-y-5">
              <div className="flex items-center justify-between">
                <div className="flex gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={13} className="fill-[#F36F21] text-[#F36F21]" />
                  ))}
                </div>
                <div className="flex items-center gap-1.5 text-zinc-500 font-mono text-[9px] uppercase tracking-wider">
                  <Home size={11} className="text-zinc-600" />
                  <span>{reviews[0].category}</span>
                </div>
              </div>

              <div className="space-y-3 relative">
                <Quote className="w-6 h-6 text-zinc-900 absolute -top-3 -left-1 pointer-events-none" />
                <h3 className="text-lg font-bold text-white tracking-tight group-hover:text-[#F36F21] transition-colors">
                  "{reviews[0].title}"
                </h3>
                <p className="text-zinc-400 text-sm leading-relaxed font-normal">
                  {reviews[0].quote}
                </p>
              </div>
            </div>

            <div className="mt-8 pt-4 border-t border-zinc-900/60">
              <h4 className="text-white font-bold text-sm">{reviews[0].name}</h4>
              <p className="text-zinc-500 text-xs mt-0.5">{reviews[0].role}</p>
            </div>
          </article>

          {/* Card 2: Central Direct Contact Target */}
          <div className="bg-gradient-to-b from-[#111116] to-[#0c0c10] border border-zinc-800 rounded-2xl p-6 flex flex-col justify-between relative overflow-hidden shadow-xl shadow-black/40 md:col-span-2 lg:col-span-1 min-h-[320px]">
            <div className="absolute top-0 right-0 w-24 h-24 bg-[#F36F21]/10 rounded-full filter blur-xl pointer-events-none" />
            
            <div className="space-y-4">
              <div className="w-8 h-8 rounded-lg bg-[#F36F21] flex items-center justify-center text-white shadow-lg shadow-[#F36F21]/20">
                <MapPin size={16} />
              </div>
              <h3 className="text-xl font-black text-white tracking-tight">
                Need Fast Relief in <br />{LOCAL.area}?
              </h3>
              <p className="text-zinc-400 text-xs sm:text-sm leading-relaxed">
                Our local emergency response vehicles are fully equipped and dispatched directly from <span className="text-zinc-200 font-medium">{LOCAL.baseAddress}</span> to clear any pest issue with full certification guarantees.
              </p>
            </div>

            <div className="space-y-3 mt-6">
              <div className="text-[10px] font-mono text-zinc-500 uppercase tracking-widest pl-1">Direct Emergency Hotline</div>
              <a 
                href={`tel:${LOCAL.phone}`}
                className="group flex items-center justify-between w-full bg-[#F36F21] hover:bg-[#ff8c42] text-white font-bold text-xs uppercase tracking-wider font-mono py-3.5 px-5 rounded-xl transition-all duration-300 shadow-xl shadow-[#F36F21]/10"
              >
                <span className="flex items-center gap-2">
                  <Phone size={13} /> {LOCAL.phoneDisplay}
                </span>
                <ArrowUpRight size={14} strokeWidth={2.5} />
              </a>
            </div>
          </div>

          {/* Card 3: Review */}
          <article className="bg-gradient-to-b from-[#0b0b0e] to-[#08080a] border border-zinc-900/80 rounded-2xl p-6 flex flex-col justify-between hover:border-zinc-800 transition-all duration-300 group shadow-lg">
            <div className="space-y-5">
              <div className="flex items-center justify-between">
                <div className="flex gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={13} className="fill-[#F36F21] text-[#F36F21]" />
                  ))}
                </div>
                <div className="flex items-center gap-1.5 text-zinc-500 font-mono text-[9px] uppercase tracking-wider">
                  <Flame size={11} className="text-zinc-600" />
                  <span>{reviews[1].category}</span>
                </div>
              </div>

              <div className="space-y-3 relative">
                <Quote className="w-6 h-6 text-zinc-900 absolute -top-3 -left-1 pointer-events-none" />
                <h3 className="text-lg font-bold text-white tracking-tight group-hover:text-[#F36F21] transition-colors">
                  "{reviews[1].title}"
                </h3>
                <p className="text-zinc-400 text-sm leading-relaxed font-normal">
                  {reviews[1].quote}
                </p>
              </div>
            </div>

            <div className="mt-8 pt-4 border-t border-zinc-900/60">
              <h4 className="text-white font-bold text-sm">{reviews[1].name}</h4>
              <p className="text-zinc-500 text-xs mt-0.5">{reviews[1].role}</p>
            </div>
          </article>

          {/* Card 4: Review */}
          <article className="bg-gradient-to-b from-[#0b0b0e] to-[#08080a] border border-zinc-900/80 rounded-2xl p-6 flex flex-col justify-between hover:border-zinc-800 transition-all duration-300 group shadow-lg lg:col-span-1 md:col-span-2">
            <div className="space-y-5">
              <div className="flex items-center justify-between">
                <div className="flex gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={13} className="fill-[#F36F21] text-[#F36F21]" />
                  ))}
                </div>
                <div className="flex items-center gap-1.5 text-zinc-500 font-mono text-[9px] uppercase tracking-wider">
                  <Building2 size={11} className="text-zinc-600" />
                  <span>{reviews[2].category}</span>
                </div>
              </div>

              <div className="space-y-3 relative">
                <Quote className="w-6 h-6 text-zinc-900 absolute -top-3 -left-1 pointer-events-none" />
                <h3 className="text-lg font-bold text-white tracking-tight group-hover:text-[#F36F21] transition-colors">
                  "{reviews[2].title}"
                </h3>
                <p className="text-zinc-400 text-sm leading-relaxed font-normal">
                  {reviews[2].quote}
                </p>
              </div>
            </div>

            <div className="mt-8 pt-4 border-t border-zinc-900/60">
              <h4 className="text-white font-bold text-sm">{reviews[2].name}</h4>
              <p className="text-zinc-500 text-xs mt-0.5">{reviews[2].role}</p>
            </div>
          </article>

        </div>

      </div>
    </section>
  );
}