

import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight, ShieldCheck, Phone, MapPin, CheckCircle2, Sparkles, Building2 } from "lucide-react";

export default function ServicesHeroSection() {
  // SINGLE SOURCE OF TRUTH FOR WATERLOO NODE
  const area = "Waterloo";
  const postcode = "SE1";
  const address = "6 Chaplin Cl, London SE1 8TU";
  const phoneNo = "07448 180941";
  const companyName = "PrimeShield Waterloo";

  return (
    <section className="relative mt-10 min-h-[90vh] flex items-center justify-center bg-[#060608] pt-28 pb-16 border-b border-zinc-900/60 overflow-hidden">
      
      {/* Structural Subtle Grid Accents */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1f29370a_1px,transparent_1px),linear-gradient(to_bottom,#1f29370a_1px,transparent_1px)] bg-[size:24px_24px] pointer-events-none" />
      <div className="absolute top-0 right-1/4 w-[400px] h-[400px] bg-[#F36F21]/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="relative z-10 max-w-6xl mx-auto px-6 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* LEFT SIDE: Core Typographic & Value Stack */}
          <div className="lg:col-span-7 space-y-8 text-left">
            
            {/* Live Station Broadcast Tag */}
            <div className="inline-flex items-center gap-3 bg-zinc-950 border border-zinc-900/80 px-4 py-2 rounded-xl">
              <span className="flex h-2 w-2 relative">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#F36F21] opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[#F36F21]"></span>
              </span>
              <span className="text-zinc-400 font-mono text-[10px] uppercase tracking-widest">
                Local Fleet Operational // <span className="text-white font-bold">{area} {postcode}</span>
              </span>
            </div>

            {/* Premium Header Layout */}
            <div className="space-y-4">
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-black font-sans tracking-tight text-white leading-[1.08]">
                Certified Pest <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#F36F21] via-[#F36F21] to-[#ff8e4c]">
                  Eradication Hub.
                </span>
              </h1>
              <p className="text-zinc-400 text-base md:text-lg leading-relaxed max-w-xl font-light">
                Immediate, safe, and absolute pest removal routines crafted for modern residential spaces and commercial units across {area}. We deploy advanced treatment barriers to protect your perimeter completely.
              </p>
            </div>

            {/* Interactive Data Strips */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-lg">
              <div className="bg-zinc-950/80 border border-zinc-900 p-4 rounded-xl flex items-start gap-3">
                <MapPin className="w-4 h-4 text-[#F36F21] shrink-0 mt-0.5" />
                <div className="space-y-0.5">
                  <span className="text-[10px] font-mono uppercase tracking-wider text-zinc-500 block">Dispatch Base</span>
                  <span className="text-xs text-zinc-300 font-medium">{address}</span>
                </div>
              </div>

              <div className="bg-zinc-950/80 border border-zinc-900 p-4 rounded-xl flex items-start gap-3">
                <Phone className="w-4 h-4 text-[#F36F21] shrink-0 mt-0.5" />
                <div className="space-y-0.5">
                  <span className="text-[10px] font-mono uppercase tracking-wider text-zinc-500 block">Emergency Line</span>
                  <span className="text-sm text-white font-mono font-bold tracking-wide">{phoneNo}</span>
                </div>
              </div>
            </div>

            {/* Action Buttons Hub */}
            <div className="pt-2 flex flex-wrap items-center gap-4">
              <Link
                to="/contact-us"
                className="group inline-flex items-center gap-2.5 bg-[#F36F21] text-white px-7 py-4 text-xs font-bold uppercase tracking-wider rounded-xl transition-all duration-300 hover:bg-white hover:text-black shadow-lg shadow-[#F36F21]/10"
              >
                <span>Book Inspection Now</span>
                <ArrowRight size={14} className="transform group-hover:translate-x-1 transition-transform" />
              </Link>
              
              <div className="flex items-center gap-2 text-[10px] font-mono text-zinc-500 bg-zinc-950/30 border border-zinc-900/60 px-4 py-3 rounded-xl">
                <ShieldCheck className="w-4 h-4 text-[#F36F21]" />
                <span className="tracking-wider uppercase">BPCA COMPLIANT ASSURANCE</span>
              </div>
            </div>

          </div>

          {/* RIGHT SIDE: 100% Crisp Dynamic Structural Image Shield */}
          <div className="lg:col-span-5 relative w-full h-[380px] lg:h-[520px] rounded-2xl border border-zinc-900 bg-zinc-950 overflow-hidden group">
            
            {/* Top Floating Mini Metric */}
            <div className="absolute top-4 left-4 z-20 bg-zinc-950/90 backdrop-blur-md border border-zinc-900 px-3 py-2 rounded-xl flex items-center gap-2">
              <Sparkles className="w-3.5 h-3.5 text-[#F36F21]" />
              <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-white">Same-Day Clearance</span>
            </div>

            {/* Pristine High-Fidelity Clear Image Window */}
            <img
              src="/images/servicehero.webp"
              alt={`${companyName} Fleet Asset`}
              className="w-full h-full object-cover object-center transition-transform duration-700 ease-out scale-100 group-hover:scale-[1.02]"
              loading="eager"
            />

            {/* Bottom Accent Checklist Strip */}
            <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-zinc-950 via-zinc-950/90 to-transparent pt-12 p-5 space-y-2">
              {[
                "100% Permanent Proofing Enclosures",
                "Eco-Safe Child & Pet Friendly Formulas"
              ].map((text, i) => (
                <div key={i} className="flex items-center gap-2 text-xs text-zinc-300">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 shrink-0" />
                  <span className="font-light">{text}</span>
                </div>
              ))}
            </div>

          </div>

        </div>
      </div>
      
    </section>
  );
}