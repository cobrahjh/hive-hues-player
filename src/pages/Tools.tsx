import { useState } from "react";
import { ExternalLink, Search } from "lucide-react";
import { Link } from "react-router-dom";

interface ToolCard {
  title: string;
  description: string;
  tag: string;
  tagColor: "docs" | "dashboard" | "testing" | "reference";
  href: string;
}

const tools: ToolCard[] = [
  {
    title: "Stream Guide (Admin)",
    description: "Admin & mod reference — all Twitch commands, overlays, features, ports, and tools.",
    tag: "docs",
    tagColor: "docs",
    href: "/",
  },
  {
    title: "Viewer Guide",
    description: "Viewer-facing command list — flight controls, AI copilot, music requests, routes.",
    tag: "docs",
    tagColor: "docs",
    href: "/",
  },
  {
    title: "Hive Service Tester",
    description: "Simulate Twitch commands, test TTS/image/video generation live.",
    tag: "dashboard",
    tagColor: "dashboard",
    href: "/tools/service-tester",
  },
  {
    title: "Service Test Runner",
    description: "Hit every endpoint across all services. Green means good, red means trouble.",
    tag: "testing",
    tagColor: "testing",
    href: "/tools/test-runner",
  },
  {
    title: "Twitch MSFS Reference",
    description: "Complete reference for Twitch chat flight commands, viewer controls, and route system.",
    tag: "reference",
    tagColor: "reference",
    href: "/tools/twitch-msfs",
  },
  {
    title: "MSFS Core Docs",
    description: "SimConnect integration, Input Events API, available commands, and WebSocket protocol.",
    tag: "reference",
    tagColor: "reference",
    href: "/tools/core-docs",
  },
  {
    title: "AI Services",
    description: "All AI models, voices, and Twitch commands reference.",
    tag: "reference",
    tagColor: "reference",
    href: "/tools/ai-services",
  },
  {
    title: "Voice Access",
    description: "Copilot voice system, speech recognition, and TTS configuration.",
    tag: "reference",
    tagColor: "reference",
    href: "/tools/voice-access",
  },
];

const tagColors = ["docs", "dashboard", "testing", "reference"] as const;

const Tools = () => {
  const [search, setSearch] = useState("");
  const [activeTag, setActiveTag] = useState<string | null>(null);

  const filtered = tools.filter((t) => {
    const matchesSearch =
      !search ||
      t.title.toLowerCase().includes(search.toLowerCase()) ||
      t.description.toLowerCase().includes(search.toLowerCase());
    const matchesTag = !activeTag || t.tag === activeTag;
    return matchesSearch && matchesTag;
  });

  return (
    <div className="min-h-screen bg-background text-foreground">
      <header className="border-b border-border px-6 py-6 md:px-12">
        <div className="mx-auto max-w-5xl">
          <h1 className="text-lg md:text-xl font-bold text-foreground mb-1">Internal Tools</h1>
          <p className="text-muted-foreground text-sm max-w-2xl">
            Dashboards, test runners, and reference docs for King_Cobra74's stream infrastructure.
          </p>
        </div>
      </header>

      <main className="px-6 md:px-12 py-8">
        <div className="mx-auto max-w-5xl">
          {/* Search & Filters */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3 mb-6">
            <div className="relative flex-1 w-full sm:max-w-xs">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <input
                type="text"
                placeholder="Search tools..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="w-full rounded-md border border-border bg-card pl-9 pr-3 py-2 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-primary"
              />
            </div>
            <div className="flex items-center gap-2">
              {tagColors.map((tag) => (
                <button
                  key={tag}
                  onClick={() => setActiveTag(activeTag === tag ? null : tag)}
                  className={`px-2.5 py-1 rounded text-xs font-medium transition-colors ${
                    activeTag === tag
                      ? "bg-primary text-primary-foreground"
                      : "bg-primary/15 text-primary hover:bg-primary/25"
                  }`}
                >
                  {tag}
                </button>
              ))}
            </div>
          </div>

          {/* Tool Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {filtered.map((tool) => {
            const isExternal = tool.href.startsWith("http");
            const isPlaceholder = tool.href === "#";

            const cardContent = (
              <>
                <div className="flex items-center justify-between mb-2">
                  <h3 className="text-base font-semibold text-foreground group-hover:text-primary transition-colors">
                    {tool.title}
                  </h3>
                  {isExternal && (
                    <ExternalLink className="h-3.5 w-3.5 text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity shrink-0" />
                  )}
                </div>
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
              </>
            );

            const className =
              "group rounded-lg border border-border bg-card p-6 hover:border-primary/40 transition-colors block";

            if (isExternal) {
              return (
                <a
                  key={tool.title}
                  href={tool.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={className}
                >
                  {cardContent}
                </a>
              );
            }

            if (isPlaceholder) {
              return (
                <div
                  key={tool.title}
                  className={className + " cursor-default opacity-70"}
                >
                  {cardContent}
                </div>
              );
            }

            return (
              <Link key={tool.title} to={tool.href} className={className}>
                {cardContent}
              </Link>
            );
          })}
        </div>
      </main>

    </div>
  );
};

export default Tools;
