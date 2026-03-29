import { useState } from "react";
import ToolPageLayout from "@/components/ToolPageLayout";
import { Play, RotateCcw } from "lucide-react";

interface CommandTest {
  command: string;
  description: string;
  category: string;
}

const testCommands: CommandTest[] = [
  { command: "!heading 180", description: "Set heading to 180°", category: "Flight" },
  { command: "!altitude 10000", description: "Set altitude to 10,000ft", category: "Flight" },
  { command: "!speed 250", description: "Set speed to 250kts", category: "Flight" },
  { command: "!gear 1", description: "Deploy landing gear", category: "Flight" },
  { command: "!copilot What's our ETA?", description: "AI copilot query", category: "AI" },
  { command: "!narrator", description: "Trigger cinematic narration", category: "AI" },
  { command: "!tts Hello world", description: "Text-to-speech test", category: "TTS" },
  { command: "!cam", description: "Request camera slot", category: "Camera" },
  { command: "!screen", description: "Peek at dev desktop", category: "Screen" },
  { command: "!translate Bonjour le monde", description: "Translate to English", category: "Translate" },
];

const ServiceTester = () => {
  const [results, setResults] = useState<Record<string, "idle" | "running" | "success" | "error">>({});

  const simulateTest = (command: string) => {
    setResults((prev) => ({ ...prev, [command]: "running" }));
    setTimeout(() => {
      setResults((prev) => ({
        ...prev,
        [command]: Math.random() > 0.2 ? "success" : "error",
      }));
    }, 800 + Math.random() * 1200);
  };

  const resetAll = () => setResults({});

  const statusDot = (status: "idle" | "running" | "success" | "error") => {
    const colors = {
      idle: "bg-muted-foreground/40",
      running: "bg-primary animate-pulse",
      success: "bg-green-500",
      error: "bg-destructive",
    };
    return <div className={`h-2.5 w-2.5 rounded-full ${colors[status]}`} />;
  };

  return (
    <ToolPageLayout
      
      subtitle="Service Tester"
      description="Simulate Twitch commands and test TTS, image, and video generation live. Click play to fire a test."
    >
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-sm font-semibold uppercase tracking-widest text-primary">
          Command Simulator
        </h2>
        <button
          onClick={resetAll}
          className="flex items-center gap-1.5 text-xs text-muted-foreground hover:text-primary transition-colors"
        >
          <RotateCcw className="h-3.5 w-3.5" />
          Reset
        </button>
      </div>

      <div className="rounded-lg border border-border overflow-hidden">
        <table className="w-full text-sm">
          <thead>
            <tr className="bg-secondary/50">
              <th className="text-left px-4 py-2.5 text-xs font-semibold uppercase tracking-wider text-primary">
                Command
              </th>
              <th className="text-left px-4 py-2.5 text-xs font-semibold uppercase tracking-wider text-muted-foreground hidden md:table-cell">
                Description
              </th>
              <th className="text-left px-4 py-2.5 text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                Category
              </th>
              <th className="px-4 py-2.5 text-xs font-semibold uppercase tracking-wider text-muted-foreground w-20 text-center">
                Status
              </th>
              <th className="px-4 py-2.5 w-12" />
            </tr>
          </thead>
          <tbody>
            {testCommands.map((tc, i) => {
              const status = results[tc.command] || "idle";
              return (
                <tr
                  key={tc.command}
                  className={`border-t border-border ${i % 2 === 0 ? "bg-card" : "bg-card/50"} hover:bg-secondary/30 transition-colors`}
                >
                  <td className="px-4 py-2.5">
                    <code
                      className="text-primary font-mono text-xs font-medium bg-primary/10 px-2 py-0.5 rounded"
                      style={{ fontFamily: "'JetBrains Mono', monospace" }}
                    >
                      {tc.command}
                    </code>
                  </td>
                  <td className="px-4 py-2.5 text-muted-foreground hidden md:table-cell">
                    {tc.description}
                  </td>
                  <td className="px-4 py-2.5">
                    <span className="bg-primary/15 text-primary px-2 py-0.5 rounded text-xs font-medium">
                      {tc.category}
                    </span>
                  </td>
                  <td className="px-4 py-2.5 text-center">
                    <div className="flex justify-center">{statusDot(status)}</div>
                  </td>
                  <td className="px-4 py-2.5">
                    <button
                      onClick={() => simulateTest(tc.command)}
                      disabled={status === "running"}
                      className="text-muted-foreground hover:text-primary transition-colors disabled:opacity-30"
                    >
                      <Play className="h-4 w-4" />
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </ToolPageLayout>
  );
};

export default ServiceTester;
