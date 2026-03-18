export const Footer = () => (
  <footer className="border-t border-border py-12">
    <div className="mx-auto max-w-7xl px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
      <span className="text-sm font-semibold text-foreground">SystemCo</span>
      <span className="text-xs text-muted-foreground">
        © {new Date().getFullYear()} SystemCo. All rights reserved.
      </span>
    </div>
  </footer>
);
