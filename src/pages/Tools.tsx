import { Settings } from "lucide-react";

interface ToolCard {
  title: string;
  description: string;
  tag: string;
  tagColor: "docs" | "dashboard" | "testing" | "reference";
}

const tools: ToolCard[] = [
  {
    title: "Stream Guide (Admin)",
    description: "Admin & mod reference — all Twitch commands, overlays, features, ports, and tools.",
    tag: "docs",
    tagColor: "docs",
  },
  {
    title: "Viewer Guide",
    description: "Viewer-facing command list — flight controls, AI copilot, music requests, routes.",
    tag: "docs",
    tagColor: "docs",
  },
  {
    title: "Hive Service Tester",
    description: "Simulate Twitch commands, test TTS/image/video generation live.",
    tag: "dashboard",
    tagColor: "dashboard",
  },
  {
    title: "Service Test Runner",
    description: "Hit every endpoint across all services. Green means good, red means trouble.",
    tag: "testing",
    tagColor: "testing",
  },
  {
    title: "Twitch MSFS Reference",
    description: "Complete reference for Twitch chat flight commands, viewer controls, and route system.",
    tag: "reference",
    tagColor: "reference",
  },
  {
    title: "MSFS Core Docs",
    description: "SimConnect integration, Input Events API, available commands, and WebSocket protocol.",
    tag: "reference",
    tagColor: "reference",
  },
  {
    title: "AI Services",
    description: "All AI models, voices, and Twitch commands reference.",
    tag: "reference",
    tagColor: "reference",
  },
  {
    title: "Voice Access",
    description: "Copilot voice system, speech recognition, and TTS configuration.",
    tag: "reference",
    tagColor: "reference",
  },
];

const tagStyles: Record<string, string> = {
  docs: "text-primary",
  dashboard: "text-primary",
  testing: "text-primary",
  reference: "bg-primary/15 text-primary px-2 py-0.5 rounded text-xs font-medium",
};

const Tools = () => {
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
                  Internal Tools
                </p>
              </div>
            </div>
            <p className="text-muted-foreground text-sm md:text-base max-w-2xl mt-4">
              Dashboards, test runners, and reference docs for King_Cobra74's stream infrastructure.
            </p>
          </div>
          <Settings className="h-5 w-5 text-muted-foreground mt-1 shrink-0" />
        </div>
      </header>

      {/* Tool Cards Grid */}
      <main className="px-6 md:px-12 py-8">
        <div className="mx-auto max-w-5xl grid grid-cols-1 md:grid-cols-2 gap-4">
          {tools.map((tool) => (
            <div
              key={tool.title}
              className="group rounded-lg border border-border bg-card p-6 hover:border-primary/40 transition-colors cursor-pointer"
            >
              <h3 className="text-base font-semibold text-foreground mb-2">
                {tool.title}
              </h3>
              <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
                {tool.description}
              </p>
              {tool.tagColor === "reference" ? (
                <span className="bg-primary/15 text-primary px-2.5 py-0.5 rounded text-xs font-medium">
                  {tool.tag}
                </span>
              ) : (
                <span className="text-primary text-sm font-medium">
                  {tool.tag}
                </span>
              )}
            </div>
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

export default Tools;
