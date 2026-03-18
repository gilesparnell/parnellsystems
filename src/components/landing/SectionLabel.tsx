interface SectionLabelProps {
  children: React.ReactNode;
}

export const SectionLabel = ({ children }: SectionLabelProps) => (
  <span className="text-xs font-bold uppercase tracking-[0.1em] text-accent">
    {children}
  </span>
);
