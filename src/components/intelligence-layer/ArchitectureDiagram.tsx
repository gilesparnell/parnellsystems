import { motion } from "framer-motion";
import { BookOpen, Plug, Layers, LayoutDashboard, ArrowDown, Calendar, MessageSquare, BarChart2, FolderKanban } from "lucide-react";

const stack = [
  {
    layer: "04",
    label: "YOUR INTERFACE",
    title: "Conversation & Dashboard",
    desc: "You talk to it. It acts. A natural-language interface + live view of everything your AI has done, knows, and is tracking.",
    icon: LayoutDashboard,
    color: "hsl(var(--accent))",
    bg: "hsl(var(--accent) / 0.12)",
    border: "hsl(var(--accent) / 0.35)",
  },
  {
    layer: "03",
    label: "ORCHESTRATION",
    title: "Agent SDK + MCP Connections",
    desc: "The engine that routes tasks, manages sessions, and keeps each part of the system in sync. Connected to your tools via MCP.",
    icon: Plug,
    color: "hsl(217 91% 65%)",
    bg: "hsl(217 91% 60% / 0.10)",
    border: "hsl(217 91% 60% / 0.30)",
    tools: [
      { icon: Calendar, name: "Calendar" },
      { icon: MessageSquare, name: "Slack" },
      { icon: BarChart2, name: "ClickUp" },
      { icon: FolderKanban, name: "Gmail" },
    ],
  },
  {
    layer: "02",
    label: "WORKFLOW ENGINE",
    title: "Process + Knowledge Base",
    desc: "A self-organising knowledge base: meeting notes, decision logs, team context, and action items — continuously captured and compounding over time.",
    icon: BookOpen,
    color: "hsl(250 80% 70%)",
    bg: "hsl(250 80% 60% / 0.10)",
    border: "hsl(250 80% 60% / 0.30)",
  },
  {
    layer: "01",
    label: "CAPABILITIES",
    title: "Skills Library",
    desc: "Pre-built skills tailored to your role: prep a 1:1, draft a proposal, log a decision, summarise a pipeline. Your AI knows how your job works.",
    icon: Layers,
    color: "hsl(160 60% 55%)",
    bg: "hsl(160 60% 45% / 0.10)",
    border: "hsl(160 60% 45% / 0.30)",
  },
];

const flowItems = [
  { label: "You say something", sub: '"Morning sync" / "Prep for my 1:1 with Sam"' },
  { label: "AI reads context", sub: "Pulls from your knowledge base + connected tools" },
  { label: "Skills execute", sub: "The right workflow runs automatically" },
  { label: "It acts", sub: "Posts to Slack, updates calendar, files the note" },
  { label: "Everything logged", sub: "Knowledge base grows. System gets smarter." },
];

export const ArchitectureDiagram = () => (
  <div className="w-full space-y-16">

    {/* ── Stack diagram ─────────────────────────────────────────── */}
    <div>
      <p className="text-xs font-bold uppercase tracking-[0.1em] text-accent mb-8 text-center">
        The four-layer stack
      </p>

      <div className="relative mx-auto max-w-2xl space-y-3">
        {stack.map((item, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.45, delay: i * 0.07, ease: [0.2, 0, 0, 1] }}
          >
            <div
              className="relative rounded-xl px-6 py-5 border transition-all duration-300 hover:-translate-y-0.5"
              style={{
                background: item.bg,
                borderColor: item.border,
              }}
            >
              <div className="flex items-start gap-4">
                {/* Layer number */}
                <span
                  className="text-3xl font-bold tracking-tighter leading-none shrink-0 mt-0.5 select-none"
                  style={{ color: item.color, opacity: 0.35 }}
                >
                  {item.layer}
                </span>

                {/* Content */}
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 mb-1">
                    <span
                      className="text-[9px] font-bold uppercase tracking-[0.12em]"
                      style={{ color: item.color }}
                    >
                      {item.label}
                    </span>
                  </div>
                  <div className="flex items-start gap-3">
                    <item.icon
                      size={16}
                      className="shrink-0 mt-0.5"
                      style={{ color: item.color }}
                    />
                    <div>
                      <h4 className="text-sm font-semibold text-foreground leading-snug">
                        {item.title}
                      </h4>
                      <p className="mt-1 text-xs text-muted-foreground leading-relaxed">
                        {item.desc}
                      </p>
                    </div>
                  </div>

                  {/* Tool badges for orchestration layer */}
                  {item.tools && (
                    <div className="mt-3 flex flex-wrap gap-2 pl-7">
                      {item.tools.map((tool, j) => (
                        <div
                          key={j}
                          className="flex items-center gap-1.5 px-2.5 py-1 rounded-full border text-[10px] font-medium"
                          style={{
                            borderColor: item.border,
                            color: item.color,
                            background: item.bg,
                          }}
                        >
                          <tool.icon size={10} />
                          {tool.name}
                        </div>
                      ))}
                      <div
                        className="flex items-center gap-1 px-2.5 py-1 rounded-full border text-[10px] font-medium"
                        style={{
                          borderColor: item.border,
                          color: item.color,
                          background: item.bg,
                        }}
                      >
                        + any tool via MCP
                      </div>
                    </div>
                  )}
                </div>
              </div>

              {/* Connector arrow between layers */}
              {i < stack.length - 1 && (
                <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 z-10 flex items-center justify-center w-7 h-7 rounded-full bg-background border border-border">
                  <ArrowDown size={12} className="text-muted-foreground" />
                </div>
              )}
            </div>
          </motion.div>
        ))}

        {/* Foundation label */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="text-center pt-2"
        >
          <span className="text-[10px] text-muted-foreground/50 font-medium uppercase tracking-widest">
            ↑ foundation · each layer builds on the one below ↑
          </span>
        </motion.div>
      </div>
    </div>

    {/* ── Day-in-the-life flow ──────────────────────────────────── */}
    <div>
      <p className="text-xs font-bold uppercase tracking-[0.1em] text-accent mb-8 text-center">
        A day in the life — from one sentence to full context
      </p>

      <div className="relative mx-auto max-w-xl">
        {/* Vertical line */}
        <div
          className="absolute left-[22px] top-6 bottom-6 w-px"
          style={{
            background: "linear-gradient(to bottom, hsl(var(--accent) / 0.4), hsl(var(--accent) / 0.05))",
          }}
        />

        <div className="space-y-4">
          {flowItems.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -12 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-30px" }}
              transition={{ duration: 0.4, delay: i * 0.08, ease: [0.2, 0, 0, 1] }}
              className="flex items-start gap-4"
            >
              {/* Step dot */}
              <div
                className="relative z-10 flex items-center justify-center w-11 h-11 rounded-full shrink-0 border"
                style={{
                  background: i === 0
                    ? "hsl(var(--accent) / 0.15)"
                    : "hsl(var(--background))",
                  borderColor: i === 0
                    ? "hsl(var(--accent) / 0.5)"
                    : "hsl(var(--border))",
                }}
              >
                <span
                  className="text-xs font-bold"
                  style={{ color: i === 0 ? "hsl(var(--accent))" : "hsl(var(--muted-foreground))" }}
                >
                  {String(i + 1).padStart(2, "0")}
                </span>
              </div>

              {/* Text */}
              <div className="pt-2">
                <p className="text-sm font-semibold text-foreground leading-snug">
                  {item.label}
                </p>
                <p className="mt-0.5 text-xs text-muted-foreground leading-relaxed">
                  {item.sub}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Result callout */}
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.45 }}
          className="mt-6 ml-[60px] rounded-lg px-5 py-4 border"
          style={{
            background: "hsl(var(--accent) / 0.06)",
            borderColor: "hsl(var(--accent) / 0.25)",
          }}
        >
          <p className="text-xs text-muted-foreground leading-relaxed italic">
            The system reads your calendar, surfaces what needs attention, and tells you exactly where to focus — before you've opened a single tab.
          </p>
        </motion.div>
      </div>
    </div>

  </div>
);
