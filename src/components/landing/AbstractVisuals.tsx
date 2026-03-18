import { motion } from "framer-motion";

/** Abstract grid with animated nodes — represents connected systems */
export const NodeMapVisual = () => (
  <div className="relative w-full h-full min-h-[280px] overflow-hidden rounded-lg bg-primary p-6">
    {/* Grid lines */}
    <svg className="absolute inset-0 w-full h-full" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <pattern id="nodeGrid" width="40" height="40" patternUnits="userSpaceOnUse">
          <path d="M 40 0 L 0 0 0 40" fill="none" stroke="rgba(255,255,255,0.06)" strokeWidth="1" />
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill="url(#nodeGrid)" />
      
      {/* Connection lines */}
      <motion.line x1="20%" y1="30%" x2="50%" y2="20%" stroke="rgba(59,130,246,0.4)" strokeWidth="1.5"
        initial={{ pathLength: 0 }} whileInView={{ pathLength: 1 }} viewport={{ once: true }}
        transition={{ duration: 1, delay: 0.2, ease: [0.2, 0, 0, 1] }} />
      <motion.line x1="50%" y1="20%" x2="80%" y2="35%" stroke="rgba(59,130,246,0.4)" strokeWidth="1.5"
        initial={{ pathLength: 0 }} whileInView={{ pathLength: 1 }} viewport={{ once: true }}
        transition={{ duration: 1, delay: 0.4, ease: [0.2, 0, 0, 1] }} />
      <motion.line x1="50%" y1="20%" x2="45%" y2="60%" stroke="rgba(59,130,246,0.4)" strokeWidth="1.5"
        initial={{ pathLength: 0 }} whileInView={{ pathLength: 1 }} viewport={{ once: true }}
        transition={{ duration: 1, delay: 0.6, ease: [0.2, 0, 0, 1] }} />
      <motion.line x1="20%" y1="30%" x2="30%" y2="70%" stroke="rgba(59,130,246,0.3)" strokeWidth="1"
        initial={{ pathLength: 0 }} whileInView={{ pathLength: 1 }} viewport={{ once: true }}
        transition={{ duration: 1, delay: 0.5, ease: [0.2, 0, 0, 1] }} />
      <motion.line x1="80%" y1="35%" x2="70%" y2="75%" stroke="rgba(59,130,246,0.3)" strokeWidth="1"
        initial={{ pathLength: 0 }} whileInView={{ pathLength: 1 }} viewport={{ once: true }}
        transition={{ duration: 1, delay: 0.7, ease: [0.2, 0, 0, 1] }} />
      <motion.line x1="45%" y1="60%" x2="70%" y2="75%" stroke="rgba(59,130,246,0.3)" strokeWidth="1"
        initial={{ pathLength: 0 }} whileInView={{ pathLength: 1 }} viewport={{ once: true }}
        transition={{ duration: 1, delay: 0.8, ease: [0.2, 0, 0, 1] }} />
      <motion.line x1="30%" y1="70%" x2="45%" y2="60%" stroke="rgba(59,130,246,0.3)" strokeWidth="1"
        initial={{ pathLength: 0 }} whileInView={{ pathLength: 1 }} viewport={{ once: true }}
        transition={{ duration: 1, delay: 0.9, ease: [0.2, 0, 0, 1] }} />
    </svg>

    {/* Nodes */}
    {[
      { x: "20%", y: "30%", size: 10, delay: 0.2 },
      { x: "50%", y: "20%", size: 14, delay: 0.3, accent: true },
      { x: "80%", y: "35%", size: 10, delay: 0.4 },
      { x: "45%", y: "60%", size: 12, delay: 0.5, accent: true },
      { x: "30%", y: "70%", size: 8, delay: 0.6 },
      { x: "70%", y: "75%", size: 8, delay: 0.7 },
    ].map((node, i) => (
      <motion.div
        key={i}
        className={`absolute rounded-full ${node.accent ? "bg-accent" : "bg-accent/50"}`}
        style={{
          left: node.x,
          top: node.y,
          width: node.size,
          height: node.size,
          transform: "translate(-50%, -50%)",
        }}
        initial={{ scale: 0, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.4, delay: node.delay, ease: [0.2, 0, 0, 1] }}
      />
    ))}

    {/* Labels */}
    <motion.div className="absolute top-4 left-4 text-xs font-mono text-primary-foreground/40"
      initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ delay: 1 }}>
      SYSTEM MAP
    </motion.div>
  </div>
);

/** Simplified bar chart — represents analytics/metrics */
export const BarChartVisual = () => {
  const bars = [35, 52, 78, 45, 90, 62, 85, 48, 72, 58, 95, 40];
  return (
    <div className="relative w-full h-full min-h-[200px] overflow-hidden rounded-lg bg-primary p-6 flex flex-col justify-end">
      {/* Grid overlay */}
      <div className="absolute inset-0 opacity-10">
        {[0, 1, 2, 3].map((i) => (
          <div
            key={i}
            className="absolute w-full border-t border-primary-foreground/20"
            style={{ top: `${25 * (i + 1)}%` }}
          />
        ))}
      </div>

      <motion.div className="absolute top-4 left-4 text-xs font-mono text-primary-foreground/40"
        initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ delay: 0.3 }}>
        THROUGHPUT
      </motion.div>
      <motion.div className="absolute top-4 right-4 text-xs font-mono text-accent"
        initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ delay: 0.5 }}>
        +42%
      </motion.div>

      <div className="relative flex items-end gap-[3px] h-[60%]">
        {bars.map((height, i) => (
          <motion.div
            key={i}
            className="flex-1 rounded-t-sm bg-accent/60"
            initial={{ height: 0 }}
            whileInView={{ height: `${height}%` }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 + i * 0.04, ease: [0.2, 0, 0, 1] }}
          />
        ))}
      </div>
    </div>
  );
};

/** Clean list UI — represents structured documentation */
export const ListUIVisual = () => (
  <div className="relative w-full h-full min-h-[200px] overflow-hidden rounded-lg bg-primary p-6">
    <motion.div className="text-xs font-mono text-primary-foreground/40 mb-4"
      initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ delay: 0.2 }}>
      RUNBOOK
    </motion.div>

    <div className="space-y-2.5">
      {[
        { label: "Deploy staging", status: "done" },
        { label: "Run integration tests", status: "done" },
        { label: "Review metrics dashboard", status: "done" },
        { label: "Notify stakeholders", status: "active" },
        { label: "Promote to production", status: "pending" },
        { label: "Post-deploy verification", status: "pending" },
      ].map((item, i) => (
        <motion.div
          key={i}
          className="flex items-center gap-3"
          initial={{ opacity: 0, x: -8 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.3, delay: 0.2 + i * 0.08, ease: [0.2, 0, 0, 1] }}
        >
          <div
            className={`h-3.5 w-3.5 rounded-sm border flex items-center justify-center ${
              item.status === "done"
                ? "bg-accent/80 border-accent"
                : item.status === "active"
                ? "border-accent bg-transparent"
                : "border-primary-foreground/20 bg-transparent"
            }`}
          >
            {item.status === "done" && (
              <svg width="8" height="8" viewBox="0 0 8 8" fill="none">
                <path d="M1.5 4L3.5 6L6.5 2" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            )}
          </div>
          <span
            className={`text-sm font-mono ${
              item.status === "done"
                ? "text-primary-foreground/40 line-through"
                : item.status === "active"
                ? "text-accent"
                : "text-primary-foreground/60"
            }`}
          >
            {item.label}
          </span>
        </motion.div>
      ))}
    </div>
  </div>
);

/** Floating geometric shapes for decorative backgrounds */
export const FloatingShapes = ({ className = "" }: { className?: string }) => (
  <div className={`absolute inset-0 overflow-hidden pointer-events-none ${className}`}>
    <motion.div
      className="absolute w-64 h-64 rounded-full border border-accent/10"
      style={{ top: "10%", right: "-5%" }}
      animate={{ rotate: 360 }}
      transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
    />
    <motion.div
      className="absolute w-40 h-40 rounded-full border border-accent/5"
      style={{ bottom: "15%", left: "-3%" }}
      animate={{ rotate: -360 }}
      transition={{ duration: 80, repeat: Infinity, ease: "linear" }}
    />
    <div
      className="absolute w-96 h-96 rounded-full"
      style={{
        background: "radial-gradient(circle, hsl(217 91% 60% / 0.04) 0%, transparent 70%)",
        top: "20%",
        left: "60%",
      }}
    />
  </div>
);
