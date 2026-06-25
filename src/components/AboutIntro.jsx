



import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

export default function AboutIntroSection() {
  // MASTER CONFIG FOR WATERLOO SE1 HUB
  const LOCAL = {
    area: "Waterloo",
    postcode: "SE1",
    businessName: "PrimeShield Waterloo",
    address: "6 Chaplin Cl, London SE1 8TU",
    phoneDisplay: "07448 180941",
  };

  // Framer Motion Variants for Staggered Bento Grid Animation
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.12 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 25 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  };

  return (
    <section 
      itemScope 
      itemType="https://schema.org/PestControlService" 
      className="relative overflow-hidden bg-[#070709] py-24 lg:py-32 font-sans text-white border-b border-white/[0.03]"
    >
      {/* MODERN AMBIENT BACKGROUND */}
      <div className="absolute top-0 right-0 w-1/3 h-1 bg-gradient-to-l from-[#F36F21] to-transparent opacity-80" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#F36F21]/5 rounded-full blur-[150px] pointer-events-none" />
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.015)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.015)_1px,transparent_1px)] bg-[size:3rem_3rem] pointer-events-none [mask-image:linear-gradient(to_bottom,white,transparent)]" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-8 lg:px-10">
        
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          
          {/* BENTO BLOCK 1: CLEAN & POWERFUL INDUSTRY INTRO */}
          <motion.div variants={itemVariants} className="md:col-span-2 bg-white/[0.02] border border-white/5 rounded-3xl p-8 lg:p-12 backdrop-blur-sm relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/[0.01] rounded-full blur-[80px] group-hover:bg-[#F36F21]/10 transition-colors duration-700" />
            
            <div className="relative z-10">
              <div className="inline-flex items-center gap-3 mb-6 bg-black/40 px-3 py-1.5 rounded-full border border-white/10">
                <span className="w-2 h-2 bg-[#F36F21] rounded-full animate-pulse shadow-[0_0_8px_#F36F21]" />
                <span className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-300">
                  Official {LOCAL.area} Emergency Hub
                </span>
              </div>

              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight leading-[1.15] text-white mb-6">
                Professional Pest Control <span className="text-transparent bg-clip-text bg-gradient-to-r from-neutral-400 to-neutral-600">Stopping Rodent Loops</span> & Infestations permanently.
              </h2>

              <p className="text-slate-300 text-sm sm:text-base font-medium leading-relaxed max-w-2xl">
                We don’t believe in temporary fixes or cheap surface traps that fail within weeks. Our certified team isolates the entry paths pests use to compromise structures across <strong className="text-white font-bold">{LOCAL.postcode}</strong> residential and commercial properties. From active rat runs to complete bed bug eradication, we deliver safe, legally compliant solutions that protect your property for the long run.
              </p>
            </div>
          </motion.div>

          {/* BENTO BLOCK 2: CINEMATIC HOVER IMAGE */}
          <motion.div variants={itemVariants} className="md:col-span-1 md:row-span-2 relative bg-[#0b0b0d] border border-white/5 rounded-3xl overflow-hidden min-h-[400px] lg:min-h-[500px] group">
            <img
              src="/images/about-pest-control.webp"
              alt={`${LOCAL.businessName} emergency response inspection team at work`}
              className="absolute inset-0 w-full h-full  object-center opacity-60 grayscale group-hover:grayscale-0 group-hover:opacity-90 transition-all duration-700 group-hover:scale-105"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#070709] via-[#070709]/50 to-transparent" />
            
            <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-8">
              <div className="bg-black/70 backdrop-blur-md p-5 rounded-2xl border border-white/10 border-l-4 border-l-[#F36F21] transform translate-y-2 group-hover:translate-y-0 transition-transform duration-500">
                <span className="block text-[10px] font-black text-[#F36F21] uppercase tracking-widest mb-1.5">
                  24/7 Field Fleet Active
                </span>
                <p className="text-slate-300 text-xs font-semibold leading-relaxed">
                  Local multi-system response vans are actively stationed across {LOCAL.area} for rapid emergency booking.
                </p>
              </div>
            </div>
          </motion.div>

          {/* BENTO BLOCK 3: REALISTIC CONTACT DECK */}
          <motion.div variants={itemVariants} className="md:col-span-1 bg-black/40 border border-white/5 rounded-3xl p-8 backdrop-blur-md flex flex-col justify-center">
            <h3 className="text-[11px] uppercase font-black text-slate-500 tracking-[0.2em] mb-6 flex items-center gap-2">
              <span className="w-4 h-[1px] bg-slate-600" /> Dispatch Center
            </h3>
            
            <div className="space-y-6">
              <div>
                <span className="block text-[10px] uppercase font-bold text-slate-400 tracking-wider mb-1">
                  Local Operational Hub
                </span>
                <address itemProp="address" className="not-italic text-sm text-white font-semibold flex items-start gap-2 leading-relaxed">
                  <span className="text-[#F36F21] mt-0.5">📍</span> {LOCAL.address}
                </address>
              </div>
              
              <div className="pt-5 border-t border-white/5">
                <span className="block text-[10px] uppercase font-bold text-slate-400 tracking-wider mb-1">
                  Direct Response Desk
                </span>
                <a 
                  href={`tel:${LOCAL.phoneDisplay.replace(/\s+/g, '')}`} 
                  className="text-xl font-black text-white hover:text-[#F36F21] transition-colors inline-block"
                  itemProp="telephone"
                >
                  {LOCAL.phoneDisplay}
                </a>
              </div>
            </div>
          </motion.div>

          {/* BENTO BLOCK 4: CORE VALUE & CONVERSION FOOTER */}
          <motion.div variants={itemVariants} className="md:col-span-1 bg-gradient-to-br from-[#F36F21]/10 to-transparent border border-[#F36F21]/20 rounded-3xl p-8 backdrop-blur-md flex flex-col justify-between">
            <p className="text-slate-300 text-xs sm:text-sm leading-relaxed font-medium mb-8">
              By keeping experienced, RSPH-certified technicians permanently deployed close to your street networks, <span className="text-white font-semibold">{LOCAL.businessName}</span> guarantees arrival times and long-term protection parameters that generic national providers simply cannot replicate.
            </p>
            
            <Link
              to="/services"
              className="group w-full inline-flex items-center justify-between bg-white text-black px-6 py-4 rounded-xl text-xs font-black uppercase tracking-[0.15em] hover:bg-[#F36F21] hover:text-white transition-all duration-300 shadow-xl"
            >
              <span>Explore Treatments</span>
              <svg className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </Link>
          </motion.div>

        </motion.div>
      </div>
    </section>
  );
}