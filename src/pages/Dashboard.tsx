import { useState } from "react";
import { motion } from "framer-motion";
import {
  AlertTriangle,
  CheckCircle2,
  Clock,
  TrendingUp,
  Calendar,
  MessageSquare,
  Home,
  Zap,
  ChevronRight,
  Circle,
  ArrowUpRight,
  Brain,
  RefreshCw,
  Bell,
} from "lucide-react";

/* ─── Types ─────────────────────────────────────────────────── */

type Priority = "critical" | "decision" | "progress" | "done";

interface Action {
  id: string;
  title: string;
  context: string;
  priority: Priority;
  age?: string;
  link?: string;
}

interface PipelineItem {
  name: string;
  status: string;
  value?: string;
  statusColor: string;
  detail: string;
  nextStep: string;
}

interface MeetingNote {
  date: string;
  title: string;
  outcome: string;
  tag: string;
}

/* ─── Data (synced 21 Mar 2026) ─────────────────────────────── */

const TODAY = "Saturday, 21 March 2026";
const SYNC_TIME = "synced this morning";

const actions: Action[] = [
  {
    id: "1",
    title: "Follow up George & Matthias",
    context: "16 days overdue. Promised follow-up next week after Mar 5 meeting. Robin Richards roofing demo is the deliverable they're waiting on.",
    priority: "critical",
    age: "16 days overdue",
    link: "https://app.clickup.com",
  },
  {
    id: "2",
    title: "Build Robin Richards roofing demo",
    context: "Agreed in George/Matthias intro meeting. Train agent on roofing company specifics, provide phone number for George to test.",
    priority: "critical",
    age: "Overdue",
  },
  {
    id: "3",
    title: "Contact Wateeb — Assistable account",
    context: "Account issue blocking client. Fix this before it becomes a churn risk.",
    priority: "critical",
    age: "Overdue",
  },
  {
    id: "4",
    title: "Decide: BrandLocus enrollment",
    context: "Imran Zain sent enrollment link Mar 17. $799/month part-time (80hrs), month-to-month. Dedicated AI + automation + GHL + PM team. Solves your fulfilment bottleneck today.",
    priority: "decision",
    age: "4 days since call",
  },
  {
    id: "5",
    title: "Decide: Renew Koorangi styling contract",
    context: "Styling expires Apr 14. Auction is Apr 18. $467.50 for the extra 4 days. Near-zero question — just confirm.",
    priority: "decision",
    age: "Needed before Apr 14",
  },
  {
    id: "6",
    title: "Roberto's snapshot → production",
    context: "In progress in ClickUp. Get this live.",
    priority: "progress",
    link: "https://app.clickup.com/t/86d26a6t9",
  },
  {
    id: "7",
    title: "Separate Stripe + Claude accounts from Jesse",
    context: "Post-split admin. Don't let this slip — billing exposure if you delay.",
    priority: "progress",
  },
  {
    id: "8",
    title: "Setup: email, Slack, Stripe, bank account",
    context: "Foundation tasks sitting in ClickUp. Block an hour this week.",
    priority: "progress",
  },
];

const pipeline: PipelineItem[] = [
  {
    name: "George & Matthias",
    status: "⚠️ Follow-up overdue",
    statusColor: "text-red-400",
    value: "~$750K investment / reseller",
    detail: "MSP company with thousands of clients. Robin Richards (LA) contact who consolidated roofing companies. Due diligence note: research George's background before going deeper.",
    nextStep: "Send follow-up message today. Attach roofing demo when ready.",
  },
  {
    name: "BrandLocus (Imran Zain)",
    status: "🟡 Decision pending",
    statusColor: "text-yellow-400",
    value: "$799–$1,599/month",
    detail: "Pakistan-based GHL agency. 150+ devs, 12 years experience, 100+ agency clients. Dedicated AI + automation + funnel dev + PM. White-label option available.",
    nextStep: "Enroll or decline. Enrollment link in your inbox.",
  },
  {
    name: "Fitness Boxx",
    status: "🔵 Active client",
    statusColor: "text-blue-400",
    value: "Recurring",
    detail: "Bug open: email reply stops the workflow. Track down and fix.",
    nextStep: "Fix the email-reply bug (ClickUp: 86d2bgh4g).",
  },
  {
    name: "Roberto",
    status: "🔵 Active client",
    statusColor: "text-blue-400",
    value: "Recurring",
    detail: "Snapshot needs to go to production.",
    nextStep: "Push snapshot to production (ClickUp: 86d26a6t9).",
  },
];

const meetings: MeetingNote[] = [
  {
    date: "Mar 17",
    title: "AI Agency Growth Strategy (Marcin / Elite)",
    outcome: "Not a fit. Program is for service agencies, not SaaS products. Positive outcome — saved time and money.",
    tag: "Evaluated",
  },
  {
    date: "Mar 17",
    title: "BrandLocus — Imran Zain",
    outcome: "Full discovery. $799/mo part-time, month-to-month. Enrollment link sent. Decision in your court.",
    tag: "Decision pending",
  },
  {
    date: "Mar 17",
    title: "44 Koorangi Ave — Progress Meeting",
    outcome: "Auction moved Apr 18. Guide price dropped to $2.6M. 31 inspections, 0 second inspections. Styling expires Apr 14.",
    tag: "Property",
  },
  {
    date: "Mar 5",
    title: "Introductory Meeting — George & Matthias",
    outcome: "Strong opportunity. MSP channel play. Robin Richards (LA roofing) is the key demo target. Follow-up promised but overdue.",
    tag: "🔴 Overdue follow-up",
  },
];

/* ─── Helpers ────────────────────────────────────────────────── */

const priorityConfig: Record<Priority, { bg: string; border: string; dot: string; label: string }> = {
  critical: {
    bg: "bg-red-500/10",
    border: "border-red-500/30",
    dot: "bg-red-500",
    label: "Critical",
  },
  decision: {
    bg: "bg-yellow-500/10",
    border: "border-yellow-500/30",
    dot: "bg-yellow-400",
    label: "Decide",
  },
  progress: {
    bg: "bg-blue-500/10",
    border: "border-blue-500/30",
    dot: "bg-blue-400",
    label: "In Progress",
  },
  done: {
    bg: "bg-green-500/10",
    border: "border-green-500/30",
    dot: "bg-green-400",
    label: "Done",
  },
};

function ActionCard({ action, index }: { action: Action; index: number }) {
  const [done, setDone] = useState(false);
  const cfg = priorityConfig[done ? "done" : action.priority];

  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.05 }}
      className={`rounded-xl border p-4 transition-all duration-300 ${cfg.bg} ${cfg.border} ${done ? "opacity-50" : ""}`}
    >
      <div className="flex items-start gap-3">
        <button
          onClick={() => setDone(!done)}
          className="mt-0.5 shrink-0 transition-transform hover:scale-110"
        >
          {done ? (
            <CheckCircle2 className="h-5 w-5 text-green-400" />
          ) : (
            <Circle className={`h-5 w-5 ${cfg.dot.replace("bg-", "text-")}`} />
          )}
        </button>
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-2 flex-wrap mb-1">
            <span className={`text-xs font-semibold px-2 py-0.5 rounded-full ${cfg.bg} ${cfg.border} border ${cfg.dot.replace("bg-", "text-")}`}>
              {cfg.label}
            </span>
            {action.age && (
              <span className="text-xs text-white/40">{action.age}</span>
            )}
          </div>
          <p className={`font-semibold text-sm mb-1 ${done ? "line-through text-white/40" : "text-white"}`}>
            {action.title}
          </p>
          <p className="text-xs text-white/50 leading-relaxed">{action.context}</p>
        </div>
        {action.link && (
          <a href={action.link} target="_blank" rel="noreferrer" className="shrink-0 text-white/30 hover:text-white/70 transition-colors">
            <ArrowUpRight className="h-4 w-4" />
          </a>
        )}
      </div>
    </motion.div>
  );
}

/* ─── Main Dashboard ─────────────────────────────────────────── */

export default function Dashboard() {
  const [activeTab, setActiveTab] = useState<"actions" | "pipeline" | "meetings" | "property">("actions");

  const critical = actions.filter((a) => a.priority === "critical").length;
  const decisions = actions.filter((a) => a.priority === "decision").length;

  return (
    <div className="min-h-screen bg-[#0a0a0f] text-white font-sans">
      {/* ── Top Bar ─────────────────────────────────────────── */}
      <div className="border-b border-white/10 bg-[#0d0d15]/80 backdrop-blur-sm sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 h-14 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-7 h-7 rounded-lg bg-gradient-to-br from-[#a855f7] to-[#7c3aed] flex items-center justify-center">
              <Brain className="h-4 w-4 text-white" />
            </div>
            <span className="font-semibold text-sm tracking-tight">Gilo's Intelligence OS</span>
            <span className="hidden sm:block text-xs text-white/30">/ {TODAY}</span>
          </div>
          <div className="flex items-center gap-3">
            <div className="flex items-center gap-1.5 text-xs text-white/40">
              <RefreshCw className="h-3 w-3" />
              <span>{SYNC_TIME}</span>
            </div>
            {critical > 0 && (
              <div className="flex items-center gap-1.5 bg-red-500/20 border border-red-500/30 rounded-full px-3 py-1">
                <Bell className="h-3 w-3 text-red-400" />
                <span className="text-xs text-red-400 font-semibold">{critical} critical</span>
              </div>
            )}
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-8">
        {/* ── Morning Brief ────────────────────────────────── */}
        <motion.div
          initial={{ opacity: 0, y: -12 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-8"
        >
          <h1 className="text-2xl sm:text-3xl font-bold mb-1">
            Good morning, Gilo.{" "}
            <span className="text-white/40 font-normal text-xl">Here's where things stand.</span>
          </h1>
        </motion.div>

        {/* ── Stat Cards ───────────────────────────────────── */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-8">
          {[
            { label: "Critical actions", value: critical.toString(), color: "text-red-400", bg: "bg-red-500/10 border-red-500/20", icon: <AlertTriangle className="h-4 w-4 text-red-400" /> },
            { label: "Decisions needed", value: decisions.toString(), color: "text-yellow-400", bg: "bg-yellow-500/10 border-yellow-500/20", icon: <Zap className="h-4 w-4 text-yellow-400" /> },
            { label: "Open ClickUp tasks", value: "17", color: "text-blue-400", bg: "bg-blue-500/10 border-blue-500/20", icon: <CheckCircle2 className="h-4 w-4 text-blue-400" /> },
            { label: "Auction countdown", value: "28 days", color: "text-purple-400", bg: "bg-purple-500/10 border-purple-500/20", icon: <Home className="h-4 w-4 text-purple-400" /> },
          ].map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: i * 0.07 }}
              className={`rounded-xl border p-4 ${stat.bg}`}
            >
              <div className="flex items-center gap-2 mb-2">{stat.icon}<span className="text-xs text-white/50">{stat.label}</span></div>
              <div className={`text-2xl font-bold ${stat.color}`}>{stat.value}</div>
            </motion.div>
          ))}
        </div>

        {/* ── Tab Nav ──────────────────────────────────────── */}
        <div className="flex gap-1 mb-6 bg-white/5 rounded-xl p-1 w-fit">
          {(["actions", "pipeline", "meetings", "property"] as const).map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-all capitalize ${
                activeTab === tab
                  ? "bg-[#a855f7] text-white shadow"
                  : "text-white/50 hover:text-white/80"
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* ── Actions Tab ──────────────────────────────────── */}
        {activeTab === "actions" && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="space-y-3">
            {actions.map((action, i) => (
              <ActionCard key={action.id} action={action} index={i} />
            ))}
          </motion.div>
        )}

        {/* ── Pipeline Tab ─────────────────────────────────── */}
        {activeTab === "pipeline" && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="space-y-4">
            {pipeline.map((item, i) => (
              <motion.div
                key={item.name}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.07 }}
                className="rounded-xl border border-white/10 bg-white/5 p-5"
              >
                <div className="flex items-start justify-between gap-4 mb-3">
                  <div>
                    <h3 className="font-semibold text-base">{item.name}</h3>
                    <span className={`text-sm ${item.statusColor}`}>{item.status}</span>
                  </div>
                  {item.value && (
                    <span className="text-xs bg-white/10 rounded-full px-3 py-1 text-white/60 shrink-0">
                      {item.value}
                    </span>
                  )}
                </div>
                <p className="text-sm text-white/50 mb-3 leading-relaxed">{item.detail}</p>
                <div className="flex items-center gap-2 text-sm text-purple-300">
                  <ChevronRight className="h-4 w-4 shrink-0" />
                  <span>{item.nextStep}</span>
                </div>
              </motion.div>
            ))}
          </motion.div>
        )}

        {/* ── Meetings Tab ─────────────────────────────────── */}
        {activeTab === "meetings" && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="space-y-3">
            {meetings.map((mtg, i) => (
              <motion.div
                key={mtg.title}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.07 }}
                className="rounded-xl border border-white/10 bg-white/5 p-5"
              >
                <div className="flex items-start gap-3">
                  <div className="flex-1">
                    <div className="flex items-center gap-2 flex-wrap mb-1">
                      <span className="text-xs text-white/40">{mtg.date}</span>
                      <span className="text-xs bg-white/10 px-2 py-0.5 rounded-full text-white/60">{mtg.tag}</span>
                    </div>
                    <p className="font-semibold text-sm mb-2">{mtg.title}</p>
                    <p className="text-xs text-white/50 leading-relaxed">{mtg.outcome}</p>
                  </div>
                  <MessageSquare className="h-4 w-4 text-white/20 shrink-0 mt-1" />
                </div>
              </motion.div>
            ))}
          </motion.div>
        )}

        {/* ── Property Tab ─────────────────────────────────── */}
        {activeTab === "property" && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="space-y-4">
            <div className="rounded-xl border border-purple-500/20 bg-purple-500/10 p-6">
              <div className="flex items-center gap-2 mb-4">
                <Home className="h-5 w-5 text-purple-400" />
                <h2 className="font-semibold text-lg">44 Koorangi Ave</h2>
                <span className="text-xs bg-purple-500/20 text-purple-300 px-2 py-0.5 rounded-full">For Sale</span>
              </div>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 mb-5">
                {[
                  { label: "Auction date", value: "April 18, 2026" },
                  { label: "Guide price", value: "$2.6M" },
                  { label: "Target outcome", value: "$2.86M+" },
                  { label: "Inspections", value: "31 (0 second)" },
                  { label: "Days listed", value: "27+" },
                  { label: "Styling expires", value: "April 14" },
                ].map((stat) => (
                  <div key={stat.label} className="bg-white/5 rounded-lg p-3">
                    <p className="text-xs text-white/40 mb-1">{stat.label}</p>
                    <p className="font-semibold text-sm">{stat.value}</p>
                  </div>
                ))}
              </div>
              <div className="space-y-3">
                <div className="flex items-start gap-3 text-sm">
                  <AlertTriangle className="h-4 w-4 text-yellow-400 shrink-0 mt-0.5" />
                  <span className="text-white/70">Styling contract expires Apr 14 — auction is Apr 18. Renew for $467.50 to keep the property presented through auction day.</span>
                </div>
                <div className="flex items-start gap-3 text-sm">
                  <Clock className="h-4 w-4 text-blue-400 shrink-0 mt-0.5" />
                  <span className="text-white/70">Easter school holidays Apr 4–17 may soften buyer attendance. Auction after holidays (Apr 18) is the right call.</span>
                </div>
                <div className="flex items-start gap-3 text-sm">
                  <TrendingUp className="h-4 w-4 text-green-400 shrink-0 mt-0.5" />
                  <span className="text-white/70">Agents: R. Djogo & B. Djogo (Century 21). Guide drop from $2.9M → $2.6M to attract more prospects. Market typically adds 10%.</span>
                </div>
              </div>
            </div>
          </motion.div>
        )}

        {/* ── Quick Actions ─────────────────────────────────── */}
        <div className="mt-10 pt-8 border-t border-white/10">
          <p className="text-xs text-white/30 uppercase tracking-widest mb-4">AI OS triggers</p>
          <div className="flex flex-wrap gap-2">
            {[
              "Morning sync",
              "Prep for meeting",
              "Log a decision",
              "Process meeting notes",
              "Weekly review",
              "Draft follow-up email",
            ].map((trigger) => (
              <button
                key={trigger}
                className="px-4 py-2 rounded-full border border-white/10 bg-white/5 text-sm text-white/60 hover:border-purple-500/50 hover:text-white hover:bg-purple-500/10 transition-all"
              >
                {trigger}
              </button>
            ))}
          </div>
          <p className="text-xs text-white/20 mt-3">Coming soon: trigger these directly to open a Cowork session pre-loaded with the right context.</p>
        </div>
      </div>
    </div>
  );
}
