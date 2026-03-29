import { useState } from "react";
import { categories } from "@/data/commands";
import { Settings, Terminal } from "lucide-react";

const Index = () => {
  const [activeCategory, setActiveCategory] = useState<string | null>(null);

  const filtered = activeCategory
    ? categories.filter((c) => c.id === activeCategory)
    : categories;

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Header */}
      <header className="border-b border-border px-6 py-8 md:px-12">
        <div className="mx-auto max-w-5xl flex items-start justify-between">
          <div>
            <div className="flex items-center gap-3 mb-1">
              <div className="h-8 w-8 rounded-full border-2 border-primary flex items-center justify-center">
                <div className="h-2.5 w-2.5 rounded-full bg-primary" />
              </div>
              <div>
                <h1 className="text-xl md:text-2xl font-extrabold tracking-widest uppercase text-foreground leading-none">
                  HIVE
                </h1>
                <p className="text-[10px] md:text-xs tracking-[0.3em] uppercase text-muted-foreground font-medium leading-tight">
                  Viewer Commands
                </p>
              </div>
            </div>
            <p className="text-muted-foreground text-sm md:text-base max-w-2xl mt-4">
              Everything you can do in chat — flight controls, AI copilot, music requests, and more.
            </p>
          </div>
          <Settings className="h-5 w-5 text-muted-foreground mt-1 shrink-0" />
        </div>
      </header>

      {/* Category Tabs */}
      <nav className="border-b border-border px-6 md:px-12 py-4 overflow-x-auto">
        <div className="mx-auto max-w-5xl flex gap-2 flex-nowrap">
          <button
            onClick={() => setActiveCategory(null)}
            className={`shrink-0 px-4 py-1.5 rounded-full text-xs font-semibold transition-colors ${
              activeCategory === null
                ? "bg-primary text-primary-foreground"
                : "border border-border text-muted-foreground hover:text-foreground hover:border-primary/50"
            }`}
          >
            All
          </button>
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`shrink-0 px-4 py-1.5 rounded-full text-xs font-semibold transition-colors ${
                activeCategory === cat.id
                  ? "bg-primary text-primary-foreground"
                  : "border border-border text-muted-foreground hover:text-foreground hover:border-primary/50"
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>
      </nav>

      {/* Command Sections */}
      <main className="px-6 md:px-12 py-8">
        <div className="mx-auto max-w-5xl space-y-10">
          {filtered.map((cat) => (
            <section key={cat.id}>
              <div className="flex items-center gap-2 mb-1">
                <Terminal className="h-4 w-4 text-primary" />
                <h2 className="text-lg font-bold text-primary">{cat.label}</h2>
              </div>
              <p className="text-muted-foreground text-sm mb-4">{cat.description}</p>

              <div className="rounded-lg border border-border overflow-hidden">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="bg-secondary/50">
                      <th className="text-left px-4 py-2.5 text-xs font-semibold uppercase tracking-wider text-primary w-1/3">
                        Command
                      </th>
                      <th className="text-left px-4 py-2.5 text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                        Description
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {cat.commands.map((cmd, i) => (
                      <tr
                        key={cmd.name}
                        className={`border-t border-border ${
                          i % 2 === 0 ? "bg-card" : "bg-card/50"
                        } hover:bg-secondary/30 transition-colors`}
                      >
                        <td className="px-4 py-2.5">
                          <code
                            className="text-primary font-mono text-xs font-medium bg-primary/10 px-2 py-0.5 rounded"
                            style={{ fontFamily: "'JetBrains Mono', monospace" }}
                          >
                            {cmd.name}
                          </code>
                        </td>
                        <td className="px-4 py-2.5 text-muted-foreground">
                          {cmd.description}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </section>
          ))}
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t border-border px-6 md:px-12 py-6">
        <div className="mx-auto max-w-5xl text-center text-xs text-muted-foreground">
          Powered by <span className="text-primary font-semibold">HIVE</span> · King_Cobra74
        </div>
      </footer>
    </div>
  );
};

export default Index;
