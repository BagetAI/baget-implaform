import Image from "next/image";
import { 
  ArrowRight, 
  CheckCircle2, 
  Clock, 
  DollarSign, 
  Zap, 
  ShieldCheck, 
  Stethoscope,
  ChevronRight,
  Mail
} from "lucide-react";
import CountdownTimer from "@/components/CountdownTimer";
import SavingsCalculator from "@/components/SavingsCalculator";

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="fixed w-full z-50 bg-white/80 backdrop-blur-md border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <div className="flex items-center space-x-2">
              <div className="w-9 h-9 bg-[#0A2540] rounded-xl flex items-center justify-center">
                <div className="w-5 h-5 border-2 border-[#00E0ED] rounded-md"></div>
              </div>
              <span className="text-2xl font-bold font-outfit tracking-tight text-[#0A2540]">ImplaForm</span>
            </div>
            <div className="hidden md:flex space-x-10 text-sm font-bold text-slate-500 uppercase tracking-widest">
              <a href="#problem" className="hover:text-brand-secondary transition-colors">Efficiency</a>
              <a href="#workflow" className="hover:text-brand-secondary transition-colors">Workflow</a>
              <a href="#roi" className="hover:text-brand-secondary transition-colors">ROI Calculator</a>
            </div>
            <a href="https://buy.stripe.com/test_3cIbJ0dHG6vw3Xe3ZN1ZS2e" className="bg-[#0A2540] text-white px-6 py-3 rounded-xl font-bold text-sm hover:bg-[#1e3a5a] transition-all shadow-xl shadow-blue-900/10 active:scale-[0.98]">
              Pre-order Pioneer Kit
            </a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 lg:pt-52 lg:pb-32 overflow-hidden mesh-gradient">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            <CountdownTimer />
            <h1 className="text-6xl lg:text-8xl font-bold font-outfit text-[#0A2540] mb-8 leading-[1.1] tracking-tight">
              Personalized Implant Pillars <span className="gradient-text">in Seconds.</span>
            </h1>
            <p className="text-xl lg:text-2xl text-slate-600 mb-12 leading-relaxed max-w-2xl mx-auto font-medium">
              Standardize patient-specific emergence profiles chairside. Eliminate $250+ lab fees. Join the May 2026 Pioneer Pilot.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
              <a href="https://buy.stripe.com/test_3cIbJ0dHG6vw3Xe3ZN1ZS2e" className="w-full sm:w-auto bg-brand-secondary text-white px-10 py-5 rounded-2xl font-bold text-xl hover:bg-[#008d96] transition-all shadow-2xl shadow-teal-500/30 flex items-center justify-center group">
                Pre-order Pioneer Kit ($299)
                <ArrowRight className="ml-2 w-6 h-6 group-hover:translate-x-1 transition-transform" />
              </a>
              <a href="#waitlist" className="w-full sm:w-auto bg-white border border-slate-200 text-slate-700 px-10 py-5 rounded-2xl font-bold text-xl hover:bg-slate-50 transition-all shadow-sm">
                Join Free Waitlist
              </a>
            </div>
          </div>

          <div className="mt-24 relative max-w-5xl mx-auto">
            <div className="absolute -inset-4 bg-gradient-to-r from-brand-secondary to-brand-accent rounded-[3rem] blur-3xl opacity-10"></div>
            <div className="relative bg-white p-3 rounded-[3rem] shadow-2xl border border-slate-100">
              <img 
                src="images/premium-medical-product-shot-of-the-impl.png" 
                alt="ImplaForm Universal Molding Tray" 
                className="rounded-[2.5rem] w-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Value Props */}
      <section id="problem" className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <div>
              <div className="inline-flex items-center space-x-2 bg-red-50 text-red-600 px-3 py-1 rounded-full mb-6 font-bold text-xs uppercase tracking-widest">
                <Stethoscope className="w-3 h-3" />
                <span>The Clinical Challenge</span>
              </div>
              <h2 className="text-4xl lg:text-5xl font-bold font-outfit text-[#0A2540] mb-8">The $2.5B Workflow Bottleneck</h2>
              <div className="space-y-8">
                {[
                  { title: "Excessive Lab Fees", desc: "Average $250+ for custom provisionals kills surgery profitability.", icon: <DollarSign className="w-6 h-6 text-red-600" /> },
                  { title: "Delayed Immediate Loading", desc: "Waiting days for labs prevents the delivery of same-day anatomic results.", icon: <Clock className="w-6 h-6 text-red-600" /> },
                  { title: "Manual Sculpting Fatigue", desc: "Hand-shaping resin is inconsistent and adds 45+ minutes to chair-time.", icon: <Zap className="w-6 h-6 text-red-600" /> }
                ].map((item, i) => (
                  <div key={i} className="flex items-start space-x-5">
                    <div className="w-12 h-12 bg-white rounded-2xl flex-shrink-0 flex items-center justify-center shadow-sm border border-slate-100">
                      {item.icon}
                    </div>
                    <div>
                      <h3 className="font-bold text-xl text-slate-900 mb-2">{item.title}</h3>
                      <p className="text-slate-600 leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="grid grid-cols-2 gap-6">
              <div className="bg-white p-8 rounded-3xl shadow-sm border border-slate-100 mt-12">
                <div className="text-5xl font-bold text-[#0A2540] mb-3">$250+</div>
                <p className="text-xs text-slate-400 uppercase tracking-[0.2em] font-black">Standard Lab Fee</p>
              </div>
              <div className="bg-[#0A2540] p-8 rounded-3xl shadow-xl shadow-blue-900/20 text-white">
                <div className="text-5xl font-bold text-brand-secondary mb-3">$35</div>
                <p className="text-xs text-blue-100/40 uppercase tracking-[0.2em] font-black">ImplaForm Cost</p>
              </div>
              <div className="bg-white p-10 rounded-3xl shadow-sm border border-slate-100 col-span-2 text-center">
                <div className="text-5xl font-bold text-brand-secondary mb-3">12 Min</div>
                <p className="text-xs text-slate-400 uppercase tracking-[0.2em] font-black">Chairside Completion</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ROI Calculator Section */}
      <section id="roi" className="py-24 bg-white relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SavingsCalculator />
        </div>
      </section>

      {/* Workflow Section */}
      <section id="workflow" className="py-24 bg-slate-50 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-4xl lg:text-6xl font-bold font-outfit text-[#0A2540] mb-6">Standardized Precision</h2>
            <p className="text-slate-600 max-w-2xl mx-auto text-xl font-medium">From selection to anaerobic bond in 12 minutes.</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { step: "01", title: "Well Selection", img: "extreme-macro-shot-of-a-gloved-dental-pr.png", desc: "Select the anatomic molar, premolar, or incisor profile." },
              { step: "02", title: "Analog Seating", img: "macro-photography-of-a-titanium-dental-i.png", desc: "Precision seating in 10-micron tolerance PEEK receivers." },
              { step: "03", title: "Composite Packing", img: "close-up-of-a-dental-professional-inject.png", desc: "Inject flowable resin. Micro-gutters manage excess flash." },
              { step: "04", title: "Light Curing", img: "side-view-of-a-blue-dental-led-curing-li.png", desc: "Cure directly through the translucent mold for 360° bond." }
            ].map((item, i) => (
              <div key={i} className="group relative">
                <div className="aspect-[4/3] mb-8 overflow-hidden rounded-3xl shadow-lg border-4 border-white">
                  <img 
                    src={`images/${item.img}`} 
                    alt={item.title} 
                    className="w-full h-full object-cover transition-transform group-hover:scale-110 duration-700"
                  />
                </div>
                <div className="flex items-start space-x-4 px-2">
                  <span className="text-3xl font-black text-brand-secondary/20 group-hover:text-brand-secondary transition-colors font-outfit">{item.step}</span>
                  <div>
                    <h3 className="font-bold text-xl text-[#0A2540] mb-2">{item.title}</h3>
                    <p className="text-sm text-slate-500 font-medium leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technology Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-[#0A2540] rounded-[4rem] p-12 lg:p-20 text-white flex flex-col lg:flex-row items-center gap-16 overflow-hidden relative">
            <div className="lg:w-1/2 relative z-10">
              <div className="inline-flex items-center space-x-2 bg-brand-secondary text-white px-3 py-1 rounded-full mb-8 font-bold text-xs uppercase tracking-widest">
                <Zap className="w-3 h-3" />
                <span>Proprietary Tech</span>
              </div>
              <h2 className="text-4xl lg:text-6xl font-bold font-outfit mb-8 leading-tight">Light-Penetrable Polymer.</h2>
              <p className="text-xl text-blue-100/70 mb-10 leading-relaxed font-medium">
                Standard silicone is opaque. ImplaForm uses a light-conductive medical elastomer that allows 90% transmission at 400-500nm. Achieving a full anaerobic cure around the PEEK pillar without removal from the mold.
              </p>
              <ul className="grid grid-cols-2 gap-6">
                <li className="flex items-center space-x-3">
                  <ShieldCheck className="w-5 h-5 text-brand-secondary" />
                  <span className="text-sm font-bold text-blue-50">500+ Autoclave Cycles</span>
                </li>
                <li className="flex items-center space-x-3">
                  <ShieldCheck className="w-5 h-5 text-brand-secondary" />
                  <span className="text-sm font-bold text-blue-50">USP Class VI Certified</span>
                </li>
              </ul>
            </div>
            <div className="lg:w-1/2 relative">
              <div className="absolute -inset-10 bg-brand-secondary/20 blur-[100px] rounded-full"></div>
              <img 
                src="images/close-up-shot-of-a-dental-curing-light-s.png" 
                alt="Translucent Curing Technology" 
                className="rounded-3xl shadow-2xl relative z-10"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Results / Testimonial */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="relative group rounded-[3rem] overflow-hidden shadow-2xl">
              <img 
                src="images/macro-close-up-of-a-perfectly-formed-den.png" 
                alt="Anatomic Result" 
                className="w-full aspect-square object-cover transition-transform duration-[2s] group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-primary/80 to-transparent"></div>
              <div className="absolute bottom-10 left-10">
                <p className="text-brand-accent font-black uppercase tracking-[0.3em] text-xs mb-3">The Clinical Gold Standard</p>
                <h3 className="text-3xl font-bold text-white font-outfit">Perfect Emergence Profiles.</h3>
              </div>
            </div>
            <div className="lg:pl-12">
              <div className="w-16 h-1 bg-brand-secondary mb-12"></div>
              <blockquote className="text-3xl font-medium text-slate-800 leading-snug mb-10 italic">
                "ImplaForm has completely changed how we handle immediate loading. We get lab-quality tissue contouring on the day of surgery, and the patient walks out with a perfect smile."
              </blockquote>
              <div className="flex items-center space-x-4">
                <div className="w-14 h-14 bg-[#0A2540] rounded-full flex items-center justify-center font-bold text-white">RM</div>
                <div>
                  <p className="font-bold text-[#0A2540] text-lg">Dr. R. Miller</p>
                  <p className="text-slate-500 font-bold text-xs uppercase tracking-widest">Implant Surgeon, KOL</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA / Waitlist */}
      <section id="waitlist" className="py-32 bg-white relative overflow-hidden">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h2 className="text-5xl lg:text-7xl font-bold font-outfit text-brand-primary mb-8 tracking-tight">Ready to standardise?</h2>
          <p className="text-xl text-slate-500 mb-16 leading-relaxed font-medium">
            Join the Pioneer Program today to secure your kit for the May 2026 pilot launch.
          </p>
          
          <div className="grid md:grid-cols-2 gap-8 items-stretch mb-16">
            <div className="bg-white border-2 border-slate-100 p-10 rounded-[2.5rem] shadow-sm flex flex-col justify-between">
              <div className="mb-8">
                <p className="text-brand-secondary font-black uppercase tracking-widest text-xs mb-4">Limited Availability</p>
                <h3 className="text-3xl font-bold text-brand-primary mb-4 font-outfit">Pioneer Starter Kit</h3>
                <p className="text-slate-500 text-sm">Universal tray + 100 PEEK pillars + Engineering support.</p>
              </div>
              <div className="mb-10">
                <span className="text-6xl font-black text-brand-primary font-outfit">$299</span>
                <span className="text-slate-400 font-bold">/ kit</span>
              </div>
              <a href="https://buy.stripe.com/test_3cIbJ0dHG6vw3Xe3ZN1ZS2e" className="bg-brand-primary text-white py-5 rounded-2xl font-bold text-xl hover:bg-slate-800 transition-all shadow-xl shadow-blue-900/10">
                Pre-order Now
              </a>
            </div>
            
            <div className="bg-slate-50 p-10 rounded-[2.5rem] text-left border border-slate-200">
              <h3 className="text-2xl font-bold text-brand-primary mb-6 font-outfit flex items-center">
                <Mail className="w-6 h-6 mr-3 text-brand-secondary" />
                Waitlist Signup
              </h3>
              <p className="text-slate-500 text-sm mb-8 leading-relaxed font-medium">
                Not ready to buy? Get clinical updates and priority access to the global launch at AGD 2026.
              </p>
              <div className="space-y-4">
                <input type="email" placeholder="Professional Email" className="w-full px-6 py-4 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-brand-secondary bg-white" />
                <button className="w-full bg-white border border-slate-200 text-brand-primary py-4 rounded-xl font-bold hover:bg-slate-100 transition-all">
                  Join Free Waitlist
                </button>
              </div>
            </div>
          </div>
          
          <div className="text-slate-400 text-sm flex items-center justify-center space-x-8 font-medium">
            <span className="flex items-center"><ShieldCheck className="w-4 h-4 mr-1" /> FDA Class I Listing</span>
            <span className="flex items-center"><CheckCircle2 className="w-4 h-4 mr-1" /> ISO 13485 Certified</span>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-50 py-16 border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center mb-12">
            <div className="flex items-center space-x-2 mb-8 md:mb-0">
              <div className="w-8 h-8 bg-[#0A2540] rounded-lg flex items-center justify-center">
                <div className="w-4 h-4 border border-[#00E0ED] rounded-sm"></div>
              </div>
              <span className="text-xl font-bold font-outfit tracking-tight text-[#0A2540]">ImplaForm</span>
            </div>
            <div className="flex space-x-12 text-sm font-bold text-slate-400 uppercase tracking-widest">
              <a href="#" className="hover:text-brand-secondary transition-colors">Safety Data</a>
              <a href="#" className="hover:text-brand-secondary transition-colors">Privacy</a>
              <a href="mailto:raphael@baget.ai" className="hover:text-brand-secondary transition-colors">Support</a>
            </div>
          </div>
          <p className="text-center text-slate-400 text-xs font-bold uppercase tracking-[0.2em]">
            &copy; 2026 ImplaForm Medical. Precision Molded. Chairside Perfected.
          </p>
        </div>
      </footer>
    </main>
  );
}
