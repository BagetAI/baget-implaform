"use client";

import { useState } from "react";
import { CheckCircle2, AlertCircle, FileText, ArrowRight, ShieldCheck } from "lucide-react";

const BRANDS = [
  { id: "straumann", name: "Straumann", details: "BL, BLX, TL, TLX, and Bone Level systems supported." },
  { id: "nobel", name: "Nobel Biocare", details: "NobelActive, NobelParallel, and Replace Select supported." },
  { id: "biohorizons", name: "BioHorizons", details: "Tapered Pro, Internal Hex, and Mountless systems supported." },
  { id: "zimmer", name: "Zimmer Biomet", details: "TSV, Eztetic, and Tapered Screw-Vent systems supported." },
  { id: "dentsply", name: "Dentsply Sirona", details: "Astra Tech EV, Ankylos, and Xive systems supported." },
  { id: "megagen", name: "MegaGen", details: "AnyRidge, AnyOne, and MiNi systems supported." },
];

export default function CompatibilityTool() {
  const [selectedBrand, setSelectedBrand] = useState("");
  const [showLeadForm, setShowLeadForm] = useState(false);
  const [formStatus, setFormStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");

  const brandInfo = BRANDS.find(b => b.id === selectedBrand);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setFormStatus("loading");

    try {
      const response = await fetch("https://app.baget.ai/api/public/databases/3a76e5e0-ac80-4ac8-ad3d-fe827f8ea526/rows", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          data: {
            email,
            name,
            role: "Compatibility Check",
            practice_name: `Brand: ${brandInfo?.name || "Other"}`,
          },
        }),
      });

      if (response.ok) {
        setFormStatus("success");
      } else {
        setFormStatus("error");
      }
    } catch (error) {
      setFormStatus("error");
    }
  };

  return (
    <div className="bg-slate-50 rounded-[3rem] p-8 lg:p-16 border border-slate-200 shadow-sm">
      <div className="max-w-3xl mx-auto text-center mb-12">
        <div className="inline-flex items-center space-x-2 bg-brand-secondary/10 text-brand-secondary px-4 py-1.5 rounded-full mb-6 font-bold text-xs uppercase tracking-widest">
          <ShieldCheck className="w-4 h-4" />
          <span>System Compatibility</span>
        </div>
        <h2 className="text-4xl lg:text-5xl font-bold font-outfit text-brand-primary mb-6">Will it work with my system?</h2>
        <p className="text-slate-600 text-lg font-medium leading-relaxed">
          ImplaForm is designed for universal compatibility. Select your primary implant system below to verify the receiver interface.
        </p>
      </div>

      <div className="max-w-2xl mx-auto">
        <div className="space-y-6">
          <div className="relative">
            <select
              value={selectedBrand}
              onChange={(e) => setSelectedBrand(e.target.value)}
              className="w-full px-8 py-5 rounded-2xl border-2 border-slate-200 focus:border-brand-secondary focus:ring-0 bg-white text-xl font-bold text-brand-primary appearance-none cursor-pointer transition-all shadow-sm"
            >
              <option value="">Select your implant brand...</option>
              {BRANDS.map((brand) => (
                <option key={brand.id} value={brand.id}>
                  {brand.name}
                </option>
              ))}
              <option value="other">Other System</option>
            </select>
            <div className="absolute right-8 top-1/2 -translate-y-1/2 pointer-events-none">
              <ArrowRight className="w-6 h-6 text-slate-400" />
            </div>
          </div>

          {selectedBrand && selectedBrand !== "other" && (
            <div className="animate-fadeIn bg-green-50 border border-green-100 p-8 rounded-2xl flex items-start space-x-6">
              <div className="w-12 h-12 bg-green-500 rounded-xl flex items-center justify-center flex-shrink-0 shadow-lg shadow-green-500/20">
                <CheckCircle2 className="w-6 h-6 text-white" />
              </div>
              <div>
                <h4 className="text-xl font-bold text-green-900 mb-2">100% Compatible</h4>
                <p className="text-green-800/70 font-medium leading-relaxed">
                  {brandInfo?.details} Our PEEK receivers are precision-milled to ±10 micron tolerance for this system.
                </p>
              </div>
            </div>
          )}

          {selectedBrand === "other" && (
            <div className="animate-fadeIn bg-blue-50 border border-blue-100 p-8 rounded-2xl flex items-start space-x-6">
              <div className="w-12 h-12 bg-brand-secondary rounded-xl flex items-center justify-center flex-shrink-0 shadow-lg shadow-teal-500/20">
                <AlertCircle className="w-6 h-6 text-white" />
              </div>
              <div>
                <h4 className="text-xl font-bold text-brand-primary mb-2">Highly Likely Compatible</h4>
                <p className="text-slate-600 font-medium leading-relaxed">
                  We support 40+ smaller systems (MegaGen, Bio3, Osstem, etc.). Our universal receiver adapts to almost any standard titanium analog.
                </p>
              </div>
            </div>
          )}

          <div className="mt-12 bg-white rounded-3xl p-8 lg:p-10 border border-slate-100 shadow-xl shadow-slate-200/50 flex flex-col lg:flex-row items-center gap-10">
            <div className="lg:w-1/3">
              <img
                src="images/high-end-medical-brochure-design-for-imp.png"
                alt="Compatibility Matrix PDF"
                className="rounded-xl shadow-2xl rotate-2 hover:rotate-0 transition-transform duration-500"
              />
            </div>
            <div className="lg:w-2/3 text-left">
              <h3 className="text-2xl font-bold text-brand-primary mb-4 font-outfit">Download Technical Matrix</h3>
              <p className="text-slate-500 mb-8 font-medium">
                Get the full list of 42+ supported implant systems, including specific analog seating requirements and cervical diameter specs.
              </p>
              {!showLeadForm ? (
                <button
                  onClick={() => setShowLeadForm(true)}
                  className="bg-brand-primary text-white px-8 py-4 rounded-xl font-bold flex items-center hover:bg-slate-800 transition-all"
                >
                  <FileText className="w-5 h-5 mr-3 text-brand-accent" />
                  Send me the PDF
                </button>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4 animate-fadeIn">
                  <div className="grid sm:grid-cols-2 gap-4">
                    <input
                      type="text"
                      placeholder="Name"
                      required
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className="w-full px-5 py-3 rounded-xl border border-slate-200 focus:border-brand-secondary focus:ring-0"
                    />
                    <input
                      type="email"
                      placeholder="Professional Email"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full px-5 py-3 rounded-xl border border-slate-200 focus:border-brand-secondary focus:ring-0"
                    />
                  </div>
                  <button
                    type="submit"
                    disabled={formStatus === "loading"}
                    className="w-full bg-brand-secondary text-white py-4 rounded-xl font-bold hover:bg-[#008d96] transition-all disabled:opacity-50"
                  >
                    {formStatus === "loading" ? "Processing..." : formStatus === "success" ? "PDF Sent to Email!" : "Request Full Matrix"}
                  </button>
                  {formStatus === "error" && <p className="text-red-600 text-sm font-bold">Error submitting. Please try again.</p>}
                  {formStatus === "success" && (
                    <p className="text-green-600 text-sm font-bold">Success! Your compatibility guide is on its way.</p>
                  )}
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
