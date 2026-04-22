"use client";
import { ReactNode, useState } from "react";

interface Props {
  title: string;
  subtitle: string;
  icon: ReactNode;
  description: string;
  painPoint: string;
}

export default function SolutionCard({ title, subtitle, icon, description, painPoint }: Props) {
  const [expanded, setExpanded] = useState(false);

  return (
    <div className="group bg-white border border-slate-200 rounded-xl p-6 hover:shadow-xl transition-all hover:-translate-y-1">
      <div className="flex items-start gap-4">
        <div className="bg-emerald-50 text-emerald-700 p-3 rounded-lg group-hover:bg-emerald-600 group-hover:text-white transition shrink-0">
          {icon}
        </div>
        <div className="flex-1">
          <h3 className="font-bold text-xl text-slate-900">{title}</h3>
          <p className="text-emerald-600 text-sm font-medium mb-3">{subtitle}</p>
          
          <p className={`text-slate-600 text-sm leading-relaxed ${expanded ? '' : 'line-clamp-3'}`}>
            {description}
          </p>
          
          <button 
            onClick={() => setExpanded(!expanded)}
            className="text-emerald-600 text-xs font-medium mt-2 hover:text-emerald-700"
          >
            {expanded ? 'Sembunyikan ↑' : 'Baca selengkapnya ↓'}
          </button>
          
          <div className="bg-amber-50 border-l-4 border-amber-400 p-3 rounded mt-4 text-sm text-amber-800">
            <span className="font-semibold">📌 Masalah yang dipecahkan:</span><br />
            {painPoint}
          </div>
        </div>
      </div>
    </div>
  );
}