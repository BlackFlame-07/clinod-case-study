import { useTheme } from "../context/ThemeContext";
import { Sun, Moon } from "lucide-react";

export function UnbrandedNav() {
  const { theme, toggleTheme } = useTheme();

  return (
    <header className="fixed top-0 left-0 right-0 z-50 px-4 sm:px-6 md:px-12 py-4 md:py-6 transition-all duration-300 pointer-events-none">
      <div className="max-w-[1400px] mx-auto flex items-center justify-between pointer-events-auto">
        {/* Left: Minimal status indicator */}
        <div className="flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[var(--bg-card)]/80 backdrop-blur-md border border-[var(--border-primary)] shadow-sm">
          <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
          <span className="font-inter text-xs uppercase tracking-widest font-semibold text-[var(--text-primary)]">
            Case Study · Clinod
          </span>
        </div>

        {/* Right: Theme Toggle */}
        <button
          onClick={toggleTheme}
          aria-label="Toggle theme mode"
          className="w-9 h-9 rounded-full bg-[var(--bg-card)]/80 hover:bg-[var(--bg-card)] active:scale-95 backdrop-blur-md border border-[var(--border-primary)] shadow-sm flex items-center justify-center text-[var(--text-primary)] transition-all cursor-pointer"
        >
          {theme === "dark" ? (
            <Sun className="w-4 h-4 text-amber-400" />
          ) : (
            <Moon className="w-4 h-4 text-zinc-700" />
          )}
        </button>
      </div>
    </header>
  );
}
