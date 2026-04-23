"use client";

import { useRef } from "react";
import { motion } from "framer-motion";
import { TrendingUp, Radio } from "lucide-react";
import { tickerItems } from "@/app/lib/visaData";

// Duplicate items for seamless loop
const ITEMS = [...tickerItems, ...tickerItems, ...tickerItems];

export default function GlobalTicker() {
  return (
    <section 
      className="fixed bottom-0 left-0 right-0 z-50 bg-zinc-950/95 backdrop-blur-sm border-t border-zinc-800/80 overflow-hidden"
      aria-label="Live visa requirement trends"
    >
      <h2 className="sr-only">Live Digital Nomad Visa Trends 2026</h2>
      <div className="flex items-center">
        {/* Live badge — fixed left */}
        <div className="shrink-0 flex items-center gap-2 px-4 py-2.5 bg-zinc-900 border-r border-zinc-800 z-10">
          <div className="relative flex items-center" aria-hidden="true">
            <span className="absolute inline-flex h-2 w-2 rounded-full bg-blue-400 opacity-75 animate-ping" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-blue-400" />
          </div>
          <span className="text-xs font-semibold text-blue-400 uppercase tracking-widest whitespace-nowrap">
            Live
          </span>
        </div>

        {/* Scrolling ticker */}
        <div className="flex-1 overflow-hidden relative">
          {/* Fade edges */}
          <div className="absolute left-0 top-0 bottom-0 w-8 bg-gradient-to-r from-zinc-950 to-transparent z-10 pointer-events-none" aria-hidden="true" />
          <div className="absolute right-0 top-0 bottom-0 w-8 bg-gradient-to-l from-zinc-950 to-transparent z-10 pointer-events-none" aria-hidden="true" />

          <motion.div
            className="flex items-center gap-0"
            animate={{ x: ["0%", "-33.33%"] }}
            transition={{
              duration: 40,
              ease: "linear",
              repeat: Infinity,
            }}
            role="list"
          >
            {ITEMS.map((item, i) => (
              <div
                key={`${item.id}-${i}`}
                className="flex items-center gap-3 px-6 py-2.5 whitespace-nowrap"
                role="listitem"
              >
                <span className="text-base" role="img" aria-label={`${item.name} flag`}>{item.flag}</span>
                <span className="text-xs text-zinc-400">{item.name} Requirements</span>
                <span className="flex items-center gap-1 text-xs font-semibold text-emerald-400">
                  <TrendingUp size={11} aria-hidden="true" />
                  <span className="sr-only">Trend: Up</span>
                  +{item.velocity}% YoY
                </span>
                {/* Divider */}
                <span className="text-zinc-800 text-lg font-thin ml-2" aria-hidden="true">·</span>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}