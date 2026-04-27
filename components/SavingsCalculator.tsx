"use client";

import { useState } from "react";
import { TrendingUp, Clock, DollarSign, ArrowRight } from "lucide-react";

export default function SavingsCalculator() {
  const [casesPerMonth, setCasesPerMonth] = useState(10);
  
  // Constants based on market research
  const labFee = 350;
  const implaformMaterialCost = 40;
  const chairTimeSavedMins = 45;
  const surgeonHourlyRate = 600;
  
  const directSavingsPerCase = labFee - implaformMaterialCost;
  const chairTimeRecoveryValue = (chairTimeSavedMins / 60) * surgeonHourlyRate;
  const totalValuePerCase = directSavingsPerCase + chairTimeRecoveryValue;
  
  const annualSavings = casesPerMonth * 12 * totalValuePerCase;

  return (
    <div className="bg-white rounded-[2.5rem] p-8 lg:p-12 shadow-2xl border border-slate-100 max-w-4xl mx-auto">
      <div className="text-center mb-10">
        <h3 className="text-3xl font-bold font-outfit text-brand-primary mb-4">Calculate Your Practice ROI</h3>
        <p className="text-slate-600">See how much revenue you recover by moving to a chairside workflow.</p>
      </div>

      <div className="grid md:grid-cols-2 gap-12 items-center">
        <div className="space-y-8">
          <div>
            <label className="block text-sm font-bold text-slate-500 uppercase tracking-wider mb-4">
              Monthly Implant Volume: <span className="text-brand-secondary text-lg">{casesPerMonth} Cases</span>
            </label>
            <input
              type="range"
              min="1"
              max="50"
              value={casesPerMonth}
              onChange={(e) => setCasesPerMonth(parseInt(e.target.value))}
              className="w-full h-3 bg-slate-100 rounded-lg appearance-none cursor-pointer accent-brand-secondary"
            />
            <div className="flex justify-between text-xs text-slate-400 mt-2 font-medium">
              <span>1 Case</span>
              <span>50 Cases</span>
            </div>
          </div>

          <div className="space-y-4">
            <div className="flex items-center space-x-4 p-4 bg-slate-50 rounded-2xl border border-slate-100">
              <DollarSign className="w-6 h-6 text-brand-secondary" />
              <div>
                <p className="text-sm font-bold text-slate-900">${directSavingsPerCase} Direct Savings</p>
                <p className="text-xs text-slate-500">Reduction in per-case lab fees</p>
              </div>
            </div>
            <div className="flex items-center space-x-4 p-4 bg-slate-50 rounded-2xl border border-slate-100">
              <Clock className="w-6 h-6 text-brand-secondary" />
              <div>
                <p className="text-sm font-bold text-slate-900">45 Min Recovered</p>
                <p className="text-xs text-slate-500">Per case chair-time efficiency</p>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-brand-primary rounded-[2rem] p-8 text-center relative overflow-hidden">
          <div className="absolute top-0 right-0 w-32 h-32 bg-brand-secondary/10 rounded-full -mr-16 -mt-16 blur-2xl"></div>
          <div className="relative z-10">
            <p className="text-blue-100/60 text-sm font-bold uppercase tracking-widest mb-2">Projected Annual Benefit</p>
            <div className="text-5xl lg:text-6xl font-bold text-white mb-6 font-outfit">
              ${annualSavings.toLocaleString()}
            </div>
            <p className="text-blue-100/80 text-sm mb-8 leading-relaxed">
              Based on ${totalValuePerCase} total value recovered per clinical case.
            </p>
            <a 
              href="https://buy.stripe.com/test_3cIbJ0dHG6vw3Xe3ZN1ZS2e"
              className="inline-flex items-center justify-center w-full bg-brand-secondary text-white py-4 rounded-xl font-bold text-lg hover:bg-brand-accent hover:text-brand-primary transition-all group"
            >
              Secure My Pioneer Kit
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
