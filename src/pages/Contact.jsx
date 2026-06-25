






import React, { useState } from "react";
import axios from "axios";
import toast, { Toaster } from "react-hot-toast";
import { MapPin, Phone, Send, ArrowRight } from "lucide-react";

export default function Contact() {
  const [formData, setFormData] = useState({ name: "", email: "", phone: "", postcode: "", service: "", message: "" });
  const [loading, setLoading] = useState(false);

  // WATERLOO NODE CONFIGURATION
  const area = "Waterloo";
  const address = "6 Chaplin Cl, London SE1 8TU";
  const phone = "07448 180941";
  const businessName = "PrimeShield Waterloo";

  const services = [
    "Residential Pest Removal", "Commercial Rodent Control", "Bed Bug Heat Treatments",
    "Wasps & Hornets Removal", "Bird Proofing & Exclusion", "Emergency Callout Service"
  ];

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    toast.loading("Transmitting request...");
    try {
      await axios.post("https://primeshieldwaterloo-backend.vercel.app/api/contact", { ...formData, area, business: businessName, address, phoneNumber: phone });
      toast.dismiss();
      toast.success("Request received! Our team will dispatch shortly.");
      setFormData({ name: "", email: "", phone: "", postcode: "", service: "", message: "" });
    } catch {
      toast.dismiss();
      toast.error("Connection error. Please call our direct line.");
    } finally { setLoading(false); }
  };

  return (
    <main className="bg-[#060608] mt-16 text-white min-h-screen pt-20 pb-20">
      <Toaster position="top-right" />

      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* HEADER */}
        <div className="mb-16">
          <h1 className="text-5xl md:text-7xl font-black tracking-tighter uppercase mb-6">
            Get In Touch <span className="text-zinc-700">/ {area}</span>
          </h1>
          <p className="text-zinc-400 text-lg max-w-2xl font-light">
            Need an immediate pest solution in {area}? Our certified technicians are ready to secure your property.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* LEFT: INFO HUB */}
          <div className="lg:col-span-4 space-y-6">
            <div className="bg-zinc-950 border border-zinc-900 p-8 rounded-2xl h-full">
              <h2 className="text-sm font-mono text-zinc-500 uppercase tracking-widest mb-8">Service Hub Details</h2>
              <div className="space-y-8">
                <div className="flex gap-4">
                  <div className="w-12 h-12 rounded-xl bg-[#F36F21]/10 flex items-center justify-center text-[#F36F21]"><MapPin /></div>
                  <div>
                    <p className="text-[10px] uppercase tracking-wider text-zinc-500">Dispatch Location</p>
                    <p className="font-medium text-sm">{address}</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-12 h-12 rounded-xl bg-[#F36F21]/10 flex items-center justify-center text-[#F36F21]"><Phone /></div>
                  <div>
                    <p className="text-[10px] uppercase tracking-wider text-zinc-500">Emergency Hotline</p>
                    <p className="font-black text-xl font-mono">{phone}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT: FORM */}
          <div className="lg:col-span-8 bg-zinc-950 border border-zinc-900 p-8 md:p-12 rounded-2xl">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <input required placeholder="Full Name" className="bg-[#0b0b0d] border border-zinc-800 p-4 rounded-xl focus:border-[#F36F21] outline-none transition-all" onChange={(e) => setFormData({...formData, name: e.target.value})} />
                <input required placeholder="Email Address" type="email" className="bg-[#0b0b0d] border border-zinc-800 p-4 rounded-xl focus:border-[#F36F21] outline-none transition-all" onChange={(e) => setFormData({...formData, email: e.target.value})} />
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <input required placeholder="Phone Number" className="bg-[#0b0b0d] border border-zinc-800 p-4 rounded-xl focus:border-[#F36F21] outline-none transition-all" onChange={(e) => setFormData({...formData, phone: e.target.value})} />
                <input required placeholder="Postcode" className="bg-[#0b0b0d] border border-zinc-800 p-4 rounded-xl focus:border-[#F36F21] outline-none transition-all" onChange={(e) => setFormData({...formData, postcode: e.target.value})} />
              </div>
              
              <select required className="w-full bg-[#0b0b0d] border border-zinc-800 p-4 rounded-xl outline-none" onChange={(e) => setFormData({...formData, service: e.target.value})}>
                <option value="">Select Service Required</option>
                {services.map(s => <option key={s} value={s}>{s}</option>)}
              </select>

              <textarea required rows={4} placeholder="Describe the pest issue..." className="w-full bg-[#0b0b0d] border border-zinc-800 p-4 rounded-xl focus:border-[#F36F21] outline-none" onChange={(e) => setFormData({...formData, message: e.target.value})} />

              <button disabled={loading} className="w-full bg-[#F36F21] hover:bg-[#ff8c42] py-4 rounded-xl font-bold flex items-center justify-center gap-2 transition-all">
                {loading ? "PROCESSING..." : <>BOOK INSPECTION NOW <ArrowRight size={16} /></>}
              </button>
            </form>
          </div>
        </div>

        {/* LARGE RECTANGULAR MAP */}
        <div className="mt-12 w-full h-[450px] rounded-2xl border border-zinc-900 overflow-hidden grayscale contrast-[0.8] hover:grayscale-0 transition-all duration-700">
          <iframe 
            title="Waterloo Large Map"
            src="https://maps.google.com/maps?q=6+Chaplin+Cl,+London+SE1+8TU&t=&z=15&ie=UTF8&iwloc=&output=embed"
            className="w-full h-full"
          />
        </div>
      </div>
    </main>
  );
}