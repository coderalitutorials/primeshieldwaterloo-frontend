

import React, { useState } from "react";
import axios from "axios";
import toast, { Toaster } from "react-hot-toast";
import { PhoneCall, MapPin, ShieldCheck, Clock, CheckCircle } from "lucide-react";

export default function AboutCallbackSection() {
  const [formData, setFormData] = useState({ name: "", postcode: "", phone: "" });
  const [loading, setLoading] = useState(false);

  // SINGLE SOURCE OF TRUTH FOR WANDSWORTH NODE
  const address = "6 Chaplin Cl, London SE1 8TU";
  const area = "WaterLoo";
  const businessName = "PrimeShield Wandsworth";

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    toast.promise(
      axios.post("https://primeshieldwaterloo-backend.vercel.app/api/callback", {
        ...formData,
        area: area,
        business: businessName,
        address: address,
      }),
      {
        loading: "Scheduling callback request...",
        success: () => {
          setFormData({ name: "", postcode: "", phone: "" });
          setLoading(false);
          return "Request received! Our expert will call you shortly.";
        },
        error: () => {
          setLoading(false);
          return "Connection issue. Please try again or call us.";
        },
      },
      {
        style: { 
          background: "#161619", 
          color: "#fff", 
          border: "1px solid rgba(243, 111, 33, 0.2)",
          fontFamily: "sans-serif"
        },
      }
    );
  };

  return (
    <section className="relative py-24 bg-[#0a0a0c] overflow-hidden border-b border-white/[0.02]">
      <Toaster position="top-center" />

      {/* Subtle Grid Background */}
      <div className="absolute inset-0 opacity-[0.03] bg-[linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)] bg-[size:32px_32px]" />
      
      {/* Visual Ambient Light Leak */}
      <div className="absolute -top-40 -left-40 w-96 h-96 bg-[#F36F21]/5 rounded-full filter blur-[120px] pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-10">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Side: Brand Value Proposition */}
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 text-[#F36F21] bg-[#F36F21]/10 px-3 py-1 rounded text-[11px] font-mono uppercase tracking-widest">
              <PhoneCall size={12} className="animate-pulse" /> 24/7 Priority Support
            </div>
            
            <h2 className="text-white text-4xl sm:text-5xl lg:text-6xl font-extrabold uppercase tracking-tight leading-none">
              Need Expert Advice? <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#F36F21] to-[#ff8c42]">
                Get A Callback
              </span>
            </h2>
            
            <p className="text-neutral-400 text-base md:text-lg leading-relaxed max-w-xl">
              Don't let a small pest issue turn into an expensive repair. Leave your details below, and one of our certified {area} technicians will call you back within 1 hour.
            </p>
            
            <div className="pt-4 grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-lg">
              {[
                { icon: Clock, label: "1 hour Response Guarantee" },
                { icon: MapPin, label: "Wandsworth Hub Coverage" },
                { icon: ShieldCheck, label: "BPCA Certified Specialists" },
                { icon: CheckCircle, label: " Commercial Quotes" }
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-3 text-neutral-300 font-medium text-xs tracking-wide uppercase">
                  <div className="p-2 bg-white/[0.02] border border-white/[0.05] rounded">
                    <item.icon size={16} className="text-[#F36F21]" />
                  </div>
                  {item.label}
                </div>
              ))}
            </div>
          </div>

          {/* Right Side: Clean Dark SaaS Form Architecture */}
          <div className="lg:col-span-5 bg-[#121215] border border-white/[0.06] p-8 md:p-10 rounded-lg relative shadow-2xl">
            {/* Top Border Design Accent */}
            <div className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-[#F36F21] to-[#ff8c42] rounded-t-lg" />
            
            <h3 className="text-white text-xl font-bold tracking-tight mb-2">Request Free Consultation</h3>
            <p className="text-neutral-500 text-xs mb-8">Fill the fast response form below to connect with local support.</p>
            
            <form onSubmit={handleSubmit} className="space-y-5">
              {[
                { id: "name", label: "Full Name", type: "text", placeholder: "e.g. John Doe" },
                { id: "postcode", label: "Postcode", type: "text", placeholder: "e.g. SW18 5ND" },
                { id: "phone", label: "Phone Number", type: "tel", placeholder: "e.g. 07356 253624" }
              ].map((field) => (
                <div key={field.id} className="space-y-1.5">
                  <label className="block text-[10px] font-mono uppercase tracking-wider text-neutral-400">
                    {field.label}
                  </label>
                  <input
                    required
                    type={field.type}
                    name={field.id}
                    value={formData[field.id]}
                    onChange={(e) => setFormData({ ...formData, [field.id]: e.target.value })}
                    className="w-full bg-[#18181c] border border-white/[0.08] rounded px-4 py-3 text-sm text-white placeholder-neutral-600 outline-none focus:border-[#F36F21]/80 focus:ring-1 focus:ring-[#F36F21]/30 transition-all font-sans"
                    placeholder={field.placeholder}
                  />
                </div>
              ))}
              
              <button 
                disabled={loading}
                className="w-full bg-[#F36F21] hover:bg-[#ff7b2e] text-white py-3.5 mt-2 font-bold uppercase text-xs tracking-wider rounded transition-all duration-300 disabled:opacity-50 flex items-center justify-center gap-2 shadow-lg shadow-[#F36F21]/10"
              >
                {loading ? "Processing..." : "Submit Callback Request"}
              </button>
            </form>
          </div>

        </div>
      </div>
    </section>
  );
}