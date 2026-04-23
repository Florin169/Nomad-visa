"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  MapPin,
  ChevronDown,
  ChevronUp,
  CheckCircle2,
  Flag,
  Clock,
} from "lucide-react";
import { VisaCountry } from "@/app/lib/visaData";

interface ResidencyRoadmapProps {
  country: VisaCountry;
}

export default function ResidencyRoadmap({ country }: ResidencyRoadmapProps) {
  const [expanded, setExpanded] = useState<number | null>(0);

  return (
    <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-6">
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <div>
          <h3 className="text-base font-semibold text-white flex items-center gap-2">
            <MapPin size={16} className="text-blue-400" aria-hidden="true" />
            Residency Roadmap
          </h3>
          <p className="text-xs text-zinc-500 mt-0.5">
            {country.name} · {country.roadmap.length} stages
            {country.pathToCitizenship && country.citizenshipYears && (
              <> · Citizenship eligible in {country.citizenshipYears} years</>
            )}
          </p>
        </div>
        {country.pathToCitizenship ? (
          <span className="flex items-center gap-1.5 text-xs font-medium text-emerald-400 bg-emerald-500/10 border border-emerald-500/20 px-2.5 py-1 rounded-full">
            <Flag size={11} />
            Citizenship path
          </span>
        ) : (
          <span className="text-xs text-zinc-600 bg-zinc-800 px-2.5 py-1 rounded-full">
            No citizenship
          </span>
        )}
      </div>

      {/* Timeline */}
      <div className="relative">
        {/* Hidden SEO Heading */}
        <h4 className="sr-only">Step-by-step application process for {country.name}</h4>
        
        {/* Vertical line */}
        <div className="absolute left-[19px] top-3 bottom-3 w-px bg-zinc-800" aria-hidden="true" />

        <ol className="space-y-2" role="list">
          {country.roadmap.map((stage, i) => {
            const isExpanded = expanded === i;
            const isLast = i === country.roadmap.length - 1;

            return (
              <motion.li
                key={stage.stage}
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.06, duration: 0.3 }}
                role="listitem"
              >
                <button
                  onClick={() => setExpanded(isExpanded ? null : i)}
                  className="w-full text-left focus:outline-none"
                  aria-expanded={isExpanded}
                  aria-controls={`stage-content-${i}`}
                >
                  <div className="flex items-start gap-4">
                    {/* Stage dot */}
                    <div className="relative z-10 shrink-0 mt-0.5">
                      <div
                        className={`
                          w-10 h-10 rounded-full border-2 flex items-center justify-center text-xs font-bold transition-colors
                          ${isExpanded
                            ? "bg-blue-500 border-blue-400 text-white"
                            : isLast && country.pathToCitizenship
                            ? "bg-zinc-900 border-emerald-500/50 text-emerald-400"
                            : "bg-zinc-900 border-zinc-700 text-zinc-500 hover:border-zinc-600"
                          }
                        `}
                      >
                        {isLast && country.pathToCitizenship ? (
                          <Flag size={14} className="text-emerald-400" aria-label="Final citizenship stage" />
                        ) : (
                          <span aria-label={`Stage ${stage.stage}`}>{stage.stage}</span>
                        )}
                      </div>
                    </div>

                    {/* Stage header */}
                    <div className="flex-1 min-w-0 pb-2">
                      <div className="flex items-center justify-between gap-2">
                        <p
                          className={`text-sm font-medium ${
                            isExpanded ? "text-white" : "text-zinc-300"
                          }`}
                        >
                          {stage.title}
                        </p>
                        <div className="flex items-center gap-2 shrink-0">
                          <span className="flex items-center gap-1 text-xs text-zinc-600">
                            <Clock size={10} aria-hidden="true" />
                            {stage.duration}
                          </span>
                          {isExpanded ? (
                            <ChevronUp size={14} className="text-zinc-600" aria-hidden="true" />
                          ) : (
                            <ChevronDown size={14} className="text-zinc-700" aria-hidden="true" />
                          )}
                        </div>
                      </div>

                      {/* Expanded content */}
                      <AnimatePresence>
                        {isExpanded && (
                          <motion.div
                            id={`stage-content-${i}`}
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.2 }}
                            className="overflow-hidden"
                          >
                            <p className="text-xs text-zinc-500 mt-1.5 leading-relaxed">
                              {stage.description}
                            </p>
                            <div className="mt-3 space-y-1.5" role="group" aria-label="Milestones">
                              {stage.milestones.map((m, mi) => (
                                <motion.div
                                  key={mi}
                                  initial={{ opacity: 0, x: -5 }}
                                  animate={{ opacity: 1, x: 0 }}
                                  transition={{ delay: mi * 0.05 }}
                                  className="flex items-start gap-2"
                                >
                                  <CheckCircle2
                                    size={12}
                                    className="text-blue-500 mt-0.5 shrink-0"
                                    aria-hidden="true"
                                  />
                                  <span className="text-xs text-zinc-400">{m}</span>
                                </motion.div>
                              ))}
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  </div>
                </button>
              </motion.li>
            );
          })}
        </ol>
      </div>

      {/* Footer — renewal info */}
      <footer className="mt-6 pt-4 border-t border-zinc-800 flex items-center justify-between text-xs text-zinc-600">
        <span>Visa type: {country.visaType}</span>
        <span>Max stay: {country.maxStay}</span>
      </footer>
    </div>
  );
}