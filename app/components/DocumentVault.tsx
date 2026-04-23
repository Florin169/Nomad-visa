"use client";

import { useState, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FileText,
  CreditCard,
  Shield,
  Heart,
  Home,
  Briefcase,
  ChevronDown,
  ChevronUp,
  Clock,
  CheckCircle2,
  Circle,
  ExternalLink,
  Filter,
} from "lucide-react";
import { DocumentRequirement, VisaCountry } from "@/app/lib/visaData";

// ─── CONFIG ───────────────────────────────────────────────────────────────────
const CATEGORY_CONFIG: Record<
  DocumentRequirement["category"],
  { label: string; icon: typeof FileText; color: string; bg: string; border: string }
> = {
  financial: {
    label: "Financial",
    icon: CreditCard,
    color: "text-emerald-400",
    bg: "bg-emerald-500/10",
    border: "border-emerald-500/20",
  },
  identity: {
    label: "Identity",
    icon: CreditCard,
    color: "text-blue-400",
    bg: "bg-blue-500/10",
    border: "border-blue-500/20",
  },
  legal: {
    label: "Legal",
    icon: Shield,
    color: "text-violet-400",
    bg: "bg-violet-500/10",
    border: "border-violet-500/20",
  },
  health: {
    label: "Health",
    icon: Heart,
    color: "text-rose-400",
    bg: "bg-rose-500/10",
    border: "border-rose-500/20",
  },
  housing: {
    label: "Housing",
    icon: Home,
    color: "text-amber-400",
    bg: "bg-amber-500/10",
    border: "border-amber-500/20",
  },
};

const DIFFICULTY_CONFIG: Record<
  DocumentRequirement["difficulty"],
  { label: string; color: string; bg: string; dots: number }
> = {
  easy: {
    label: "Easy",
    color: "text-emerald-400",
    bg: "bg-emerald-500/10",
    dots: 1,
  },
  medium: {
    label: "Medium",
    color: "text-amber-400",
    bg: "bg-amber-500/10",
    dots: 2,
  },
  hard: {
    label: "Hard",
    color: "text-red-400",
    bg: "bg-red-500/10",
    dots: 3,
  },
};

// ─── DOCUMENT CARD ────────────────────────────────────────────────────────────
function DocumentCard({
  doc,
  checked,
  onToggle,
  index,
}: {
  doc: DocumentRequirement;
  checked: boolean;
  onToggle: () => void;
  index: number;
}) {
  const [expanded, setExpanded] = useState(false);
  const cat = CATEGORY_CONFIG[doc.category];
  const diff = DIFFICULTY_CONFIG[doc.difficulty];
  const Icon = cat.icon;

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3, delay: index * 0.04 }}
      className={`
        rounded-xl border transition-all duration-200
        ${checked
          ? "bg-zinc-900/40 border-zinc-800/40 opacity-60"
          : "bg-zinc-900 border-zinc-800 hover:border-zinc-700"
        }
      `}
      role="listitem"
    >
      {/* Main row */}
      <div className="flex items-start gap-3 p-4">
        {/* Checkbox */}
        <button
          onClick={onToggle}
          className="mt-0.5 shrink-0 transition-transform hover:scale-110"
          aria-label={checked ? `Unmark ${doc.title}` : `Mark ${doc.title} as complete`}
        >
          {checked ? (
            <CheckCircle2 size={18} className="text-blue-400" />
          ) : (
            <Circle size={18} className="text-zinc-600 hover:text-zinc-400 transition-colors" />
          )}
        </button>

        {/* Category icon */}
        <div className={`shrink-0 p-1.5 rounded-lg ${cat.bg} ${cat.border} border mt-0.5`} aria-hidden="true">
          <Icon size={13} className={cat.color} />
        </div>

        {/* Content */}
        <div className="flex-1 min-w-0">
          <div className="flex items-start justify-between gap-2">
            <p
              className={`text-sm font-medium leading-tight ${
                checked ? "line-through text-zinc-500" : "text-white"
              }`}
            >
              {doc.title}
            </p>
            {/* Expand toggle */}
            <button
              onClick={() => setExpanded(!expanded)}
              className="shrink-0 text-zinc-600 hover:text-zinc-400 transition-colors"
              aria-expanded={expanded}
              aria-label="View description"
            >
              {expanded ? <ChevronUp size={15} /> : <ChevronDown size={15} />}
            </button>
          </div>

          {/* Badges row */}
          <div className="flex items-center gap-2 mt-1.5 flex-wrap">
            <span className={`text-[10px] px-2 py-0.5 rounded-full uppercase font-bold tracking-wider ${cat.bg} ${cat.color}`}>
              {cat.label}
            </span>
            <span className={`text-[10px] px-2 py-0.5 rounded-full uppercase font-bold tracking-wider ${diff.bg} ${diff.color}`}>
              {diff.label}
            </span>
            {doc.estimatedDays > 0 && (
              <span className="flex items-center gap-1 text-[11px] text-zinc-500">
                <Clock size={11} aria-hidden="true" />
                {doc.estimatedDays}d to obtain
              </span>
            )}
            {doc.estimatedDays === 0 && (
              <span className="flex items-center gap-1 text-[11px] text-emerald-500">
                <Clock size={11} aria-hidden="true" />
                Immediate
              </span>
            )}
          </div>
        </div>
      </div>

      {/* Expanded description */}
      <AnimatePresence>
        {expanded && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="overflow-hidden"
          >
            <div className="px-4 pb-4 ml-[62px]">
              <p className="text-sm text-zinc-400 leading-relaxed">{doc.description}</p>
              {doc.officialLink && (
                <a
                  href={doc.officialLink}
                  target="_blank"
                  rel="noopener noreferrer nofollow"
                  className="flex items-center gap-1.5 text-xs text-blue-400 hover:text-blue-300 mt-2.5 transition-colors w-fit"
                >
                  <ExternalLink size={12} aria-hidden="true" />
                  Official source
                </a>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

// ─── PROGRESS BAR ─────────────────────────────────────────────────────────────
function ProgressBar({ checked, total }: { checked: number; total: number }) {
  const pct = total > 0 ? (checked / total) * 100 : 0;
  const allDone = checked === total;

  return (
    <div className="mb-6" role="progressbar" aria-valuenow={pct} aria-valuemin={0} aria-valuemax={100}>
      <div className="flex items-center justify-between mb-2">
        <span className="text-xs text-zinc-500 uppercase tracking-wider">Document Readiness</span>
        <span className={`text-xs font-semibold ${allDone ? "text-emerald-400" : "text-zinc-400"}`}>
          {checked}/{total} complete
        </span>
      </div>
      <div className="h-1.5 bg-zinc-800 rounded-full overflow-hidden" aria-hidden="true">
        <motion.div
          className={`h-full rounded-full transition-colors duration-500 ${
            allDone ? "bg-emerald-400" : "bg-blue-500"
          }`}
          initial={{ width: 0 }}
          animate={{ width: `${pct}%` }}
          transition={{ duration: 0.4, ease: "easeOut" }}
        />
      </div>
      {allDone && (
        <motion.p
          initial={{ opacity: 0, y: 4 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-xs text-emerald-400 mt-2 flex items-center gap-1.5"
        >
          <CheckCircle2 size={12} />
          All documents ready — you're cleared to apply
        </motion.p>
      )}
    </div>
  );
}

// ─── FILTER BAR ───────────────────────────────────────────────────────────────
type FilterCategory = DocumentRequirement["category"] | "all";

function FilterBar({
  active,
  onChange,
  docs,
}: {
  active: FilterCategory;
  onChange: (v: FilterCategory) => void;
  docs: DocumentRequirement[];
}) {
  const categories = ["all", ...new Set(docs.map((d) => d.category))] as FilterCategory[];

  const counts: Record<string, number> = { all: docs.length };
  docs.forEach((d) => {
    counts[d.category] = (counts[d.category] || 0) + 1;
  });

  return (
    <div className="flex items-center gap-2 flex-wrap mb-4" role="tablist" aria-label="Filter documents by category">
      <Filter size={13} className="text-zinc-600 shrink-0" aria-hidden="true" />
      {categories.map((cat) => {
        const config = cat !== "all" ? CATEGORY_CONFIG[cat as DocumentRequirement["category"]] : null;
        const isActive = active === cat;
        return (
          <button
            key={cat}
            role="tab"
            aria-selected={isActive}
            onClick={() => onChange(cat)}
            className={`
              flex items-center gap-1.5 px-2.5 py-1 rounded-lg text-xs font-medium transition-all
              ${isActive
                ? config
                  ? `${config.bg} ${config.color} border ${config.border}`
                  : "bg-blue-500/15 text-blue-400 border border-blue-500/30"
                : "bg-zinc-800/60 text-zinc-500 border border-zinc-800 hover:border-zinc-700 hover:text-zinc-400"
              }
            `}
          >
            {cat === "all" ? "All" : CATEGORY_CONFIG[cat as DocumentRequirement["category"]].label}
            <span className={`text-[10px] ${isActive ? "opacity-70" : "opacity-50"}`}>
              {counts[cat]}
            </span>
          </button>
        );
      })}
    </div>
  );
}

// ─── MAIN COMPONENT ───────────────────────────────────────────────────────────
interface DocumentVaultProps {
  country: VisaCountry;
}

export default function DocumentVault({ country }: DocumentVaultProps) {
  const [checked, setChecked] = useState<Set<string>>(new Set());
  const [filter, setFilter] = useState<FilterCategory>("all");

  const docs = country.detailedDocs;

  const filteredDocs = filter === "all"
    ? docs
    : docs.filter((d) => d.category === filter);

  const toggleDoc = useCallback((id: string) => {
    setChecked((prev) => {
      const next = new Set(prev);
      if (next.has(id)) {
        next.delete(id);
      } else {
        next.add(id);
      }
      return next;
    });
  }, []);

  const totalDays = docs.reduce((sum, d) => Math.max(sum, d.estimatedDays), 0);
  const checkedCount = docs.filter((d) => checked.has(d.id)).length;

  return (
    <section className="bg-zinc-900 border border-zinc-800 rounded-2xl p-6" aria-labelledby="vault-heading">
      {/* Hidden SEO Heading */}
      <h2 id="vault-heading" className="sr-only">{country.name} Digital Nomad Visa Documents and Required Checklist 2026</h2>

      {/* Header */}
      <div className="flex items-start justify-between mb-6">
        <div>
          <h3 className="text-base font-semibold text-white flex items-center gap-2">
            <Briefcase size={16} className="text-blue-400" aria-hidden="true" />
            Document Vault
          </h3>
          <p className="text-xs text-zinc-500 mt-0.5">
            {country.name} · {docs.length} required documents · ~{totalDays} days to gather
          </p>
        </div>
        {checked.size > 0 && (
          <button
            onClick={() => setChecked(new Set())}
            className="text-xs text-zinc-600 hover:text-zinc-400 transition-colors"
          >
            Clear all
          </button>
        )}
      </div>

      {/* Progress */}
      <ProgressBar checked={checkedCount} total={docs.length} />

      {/* Filters */}
      <FilterBar active={filter} onChange={setFilter} docs={docs} />

      {/* Difficulty summary */}
      <div className="grid grid-cols-3 gap-2 mb-5">
        {(["easy", "medium", "hard"] as const).map((d) => {
          const count = docs.filter((doc) => doc.difficulty === d).length;
          const cfg = DIFFICULTY_CONFIG[d];
          return (
            <div key={d} className={`rounded-lg ${cfg.bg} border border-transparent px-3 py-2`}>
              <p className={`text-[10px] font-bold uppercase tracking-wider ${cfg.color}`}>{cfg.label}</p>
              <p className="text-lg font-bold text-white">{count}</p>
              <p className="text-[10px] text-zinc-500 uppercase font-semibold">docs</p>
            </div>
          );
        })}
      </div>

      {/* Document list */}
      <div className="space-y-2.5" role="list">
        <AnimatePresence mode="popLayout">
          {filteredDocs.map((doc, i) => (
            <DocumentCard
              key={doc.id}
              doc={doc}
              checked={checked.has(doc.id)}
              onToggle={() => toggleDoc(doc.id)}
              index={i}
            />
          ))}
        </AnimatePresence>

        {filteredDocs.length === 0 && (
          <div className="text-center py-8 text-zinc-600 text-sm" role="status">
            No documents in this category
          </div>
        )}
      </div>

      {/* Footer hint */}
      <p className="text-[10px] text-zinc-700 mt-4 text-center uppercase font-bold tracking-widest">
        Check off documents as you gather them · Updated for 2026
      </p>
    </section>
  );
}