import { useState } from "react";
import { Link } from "react-router-dom";
import { categories } from "@/data/commands";
import {
  Settings,
  Terminal,
  Plane,
  Camera,
  Globe,
  Monitor,
  MessageCircle,
  Bot,
  Gamepad2,
  Navigation,
  ExternalLink,
} from "lucide-react";

interface FeatureCard {
  icon: React.ReactNode;
  title: string;
  version: string;
  description: string;
  href: string;
}

const features: FeatureCard[] = [
  {
    icon: <Plane className="h-5 w-5" />,
    title: "Fly the Plane",
    version: "v2.1",
    description:
      "Take the controls! Change heading, altitude, speed, flaps, gear, and lights — all from chat. Everyone shares the same plane, so coordinate or cause beautiful chaos!",
    href: "https://docs.kinghive.games/twitch-msfs.html",
  },
  {
    icon: <Camera className="h-5 w-5" />,
    title: "Get On Camera",
    version: "v1.0",
    description:
      "Get your face on stream! Grab a webcam slot and you'll appear in the broadcast for everyone to see. No downloads needed — works right in your browser.",
    href: "https://docs.kinghive.games/viewer-cam.html",
  },
  {
    icon: <Globe className="h-5 w-5" />,
    title: "Chat in Any Language",
    version: "v1.0",
    description:
      "Everyone's welcome, no matter what language you speak! Chat in your own language and the bot translates it to English automatically. No commands needed.",
    href: "https://docs.kinghive.games/twitch-translate.html",
  },
  {
    icon: <Monitor className="h-5 w-5" />,
    title: "Peek at the Dev Desktop",
    version: "v1.0",
    description:
      "Curious what's happening behind the scenes? Sneak a peek at the developer's desktop for 10 seconds. See the code, the tools, the chaos!",
    href: "https://docs.kinghive.games/twitch-screen-bot.html",
  },
  {
    icon: <MessageCircle className="h-5 w-5" />,
    title: "AI Flight Crew",
    version: "v1.1",
    description:
      "Your AI copilot and narrator are on board! Ask questions about the flight, request cinematic narrations, and enjoy automatic commentary on takeoffs, landings, and everything in between.",
    href: "#ai-flight-crew",
  },
  {
    icon: <Bot className="h-5 w-5" />,
    title: "Chat with Kit",
    version: "v2.0",
    description:
      "Kit is the stream's AI mascot! Chat naturally and Kit replies in character. Kit also greets new viewers, bows to mods, and can fire sim commands when the AI decides to.",
    href: "#chat-with-kit",
  },
  {
    icon: <Gamepad2 className="h-5 w-5" />,
    title: "Quick Sim Controls",
    version: "v1.0",
    description:
      "Simple one-word commands for common flight actions — toggle gear, autopilot, throttle, flaps, lights, cameras, and more. No numbers needed for the basics!",
    href: "#quick-sim-controls",
  },
];

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
                  Command Center
                </p>
              </div>
            </div>
            <p className="text-muted-foreground text-sm md:text-base max-w-2xl mt-4">
              Welcome to the cockpit! Here's everything you can do in chat — fly the plane, get on camera, talk to the AI copilot, pick where we fly next, and more.
            </p>
          </div>
          <Link
            to="/tools"
            className="flex items-center gap-2 text-xs font-medium text-muted-foreground hover:text-primary transition-colors shrink-0 mt-1"
          >
            <Settings className="h-4 w-4" />
            <span className="hidden sm:inline">Internal Tools</span>
          </Link>
        </div>
      </header>

      {/* Feature Cards */}
      <section className="px-6 md:px-12 py-8 border-b border-border">
        <div className="mx-auto max-w-5xl">
          <h2 className="text-sm font-semibold uppercase tracking-widest text-primary mb-6">
            What Can You Do?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {features.map((feature) => (
              <a
                key={feature.title}
                href={feature.href}
                target={feature.href.startsWith("http") ? "_blank" : undefined}
                rel={feature.href.startsWith("http") ? "noopener noreferrer" : undefined}
                className="group rounded-lg border border-border bg-card p-6 hover:border-primary/40 transition-colors"
              >
                <div className="flex items-start gap-3 mb-3">
                  <div className="h-9 w-9 rounded-md bg-secondary flex items-center justify-center text-primary shrink-0">
                    {feature.icon}
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2">
                      <h3 className="text-base font-semibold text-foreground group-hover:text-primary transition-colors">
                        {feature.title}
                      </h3>
                      {feature.href.startsWith("http") && (
                        <ExternalLink className="h-3.5 w-3.5 text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity" />
                      )}
                    </div>
                    <span className="text-[10px] font-medium text-muted-foreground uppercase tracking-wider">
                      {feature.version}
                    </span>
                  </div>
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>
              </a>
            ))}
          </div>
        </div>
      </section>

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
