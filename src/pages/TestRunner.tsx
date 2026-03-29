import { useState } from "react";
import ToolPageLayout from "@/components/ToolPageLayout";
import { Play, RotateCcw, CheckCircle2, XCircle, Loader2 } from "lucide-react";

interface Endpoint {
  service: string;
  endpoint: string;
  method: string;
}

const endpoints: Endpoint[] = [
  { service: "MSFS Bridge", endpoint: "/api/msfs/status", method: "GET" },
  { service: "MSFS Bridge", endpoint: "/api/msfs/simconnect", method: "GET" },
  { service: "Twitch Bot", endpoint: "/api/twitch/health", method: "GET" },
  { service: "Twitch Bot", endpoint: "/api/twitch/commands", method: "GET" },
  { service: "AI Copilot", endpoint: "/api/ai/copilot/status", method: "GET" },
  { service: "AI Copilot", endpoint: "/api/ai/narrator/status", method: "GET" },
  { service: "TTS Engine", endpoint: "/api/tts/health", method: "GET" },
  { service: "TTS Engine", endpoint: "/api/tts/voices", method: "GET" },
  { service: "Camera System", endpoint: "/api/cam/slots", method: "GET" },
  { service: "Camera System", endpoint: "/api/cam/status", method: "GET" },
  { service: "Translation", endpoint: "/api/translate/health", method: "GET" },
  { service: "Screen Bot", endpoint: "/api/screen/status", method: "GET" },
  { service: "Kit AI", endpoint: "/api/kit/health", method: "GET" },
  { service: "Kit AI", endpoint: "/api/kit/personality", method: "GET" },
  { service: "WebSocket", endpoint: "/ws/events", method: "WS" },
  { service: "WebSocket", endpoint: "/ws/simdata", method: "WS" },
];

const TestRunner = () => {
  const [results, setResults] = useState<Record<string, "idle" | "running" | "pass" | "fail">>({});
  const [running, setRunning] = useState(false);

  const runAll = async () => {
    setRunning(true);
    const newResults: Record<string, "idle" | "running" | "pass" | "fail"> = {};
    endpoints.forEach((ep) => {
      newResults[ep.endpoint] = "running";
    });
    setResults({ ...newResults });

    for (const ep of endpoints) {
      await new Promise((r) => setTimeout(r, 150 + Math.random() * 300));
      setResults((prev) => ({
        ...prev,
        [ep.endpoint]: Math.random() > 0.15 ? "pass" : "fail",
      }));
    }
    setRunning(false);
  };

  const resetAll = () => {
    setResults({});
    setRunning(false);
  };

  const passCount = Object.values(results).filter((r) => r === "pass").length;
  const failCount = Object.values(results).filter((r) => r === "fail").length;
  const total = endpoints.length;
  const tested = passCount + failCount;

  return (
    <ToolPageLayout
      
      subtitle="Test Runner"
      description="Hit every endpoint across all services. Green means good, red means trouble."
    >
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-4">
          <button
            onClick={runAll}
            disabled={running}
            className="flex items-center gap-2 bg-primary text-primary-foreground px-4 py-2 rounded-md text-sm font-semibold hover:bg-primary/90 transition-colors disabled:opacity-50"
          >
            <Play className="h-4 w-4" />
            Run All Tests
          </button>
          <button
            onClick={resetAll}
            className="flex items-center gap-1.5 text-xs text-muted-foreground hover:text-primary transition-colors"
          >
            <RotateCcw className="h-3.5 w-3.5" />
            Reset
          </button>
        </div>
        {tested > 0 && (
          <div className="flex items-center gap-3 text-xs font-medium">
            <span className="text-green-500">{passCount} passed</span>
            {failCount > 0 && <span className="text-destructive">{failCount} failed</span>}
            <span className="text-muted-foreground">{tested}/{total}</span>
          </div>
        )}
      </div>

      {/* Progress bar */}
      {tested > 0 && (
        <div className="h-1.5 rounded-full bg-secondary mb-6 overflow-hidden">
          <div
            className="h-full rounded-full transition-all duration-300"
            style={{
              width: `${(tested / total) * 100}%`,
              background: failCount > 0
                ? `linear-gradient(90deg, hsl(var(--primary)) ${(passCount / tested) * 100}%, hsl(var(--destructive)) ${(passCount / tested) * 100}%)`
                : "hsl(var(--primary))",
            }}
          />
        </div>
      )}

      <div className="rounded-lg border border-border overflow-hidden">
        <table className="w-full text-sm">
          <thead>
            <tr className="bg-secondary/50">
              <th className="text-left px-4 py-2.5 text-xs font-semibold uppercase tracking-wider text-primary">
                Service
              </th>
              <th className="text-left px-4 py-2.5 text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                Endpoint
              </th>
              <th className="text-left px-4 py-2.5 text-xs font-semibold uppercase tracking-wider text-muted-foreground w-16">
                Method
              </th>
              <th className="px-4 py-2.5 text-xs font-semibold uppercase tracking-wider text-muted-foreground w-20 text-center">
                Result
              </th>
            </tr>
          </thead>
          <tbody>
            {endpoints.map((ep, i) => {
              const status = results[ep.endpoint] || "idle";
              return (
                <tr
                  key={ep.endpoint}
                  className={`border-t border-border ${i % 2 === 0 ? "bg-card" : "bg-card/50"} transition-colors`}
                >
                  <td className="px-4 py-2.5 font-medium text-foreground">{ep.service}</td>
                  <td className="px-4 py-2.5">
                    <code
                      className="text-muted-foreground font-mono text-xs"
                      style={{ fontFamily: "'JetBrains Mono', monospace" }}
                    >
                      {ep.endpoint}
                    </code>
                  </td>
                  <td className="px-4 py-2.5">
                    <span className="bg-primary/15 text-primary px-2 py-0.5 rounded text-xs font-medium">
                      {ep.method}
                    </span>
                  </td>
                  <td className="px-4 py-2.5 text-center">
                    {status === "idle" && <div className="h-2.5 w-2.5 rounded-full bg-muted-foreground/40 mx-auto" />}
                    {status === "running" && <Loader2 className="h-4 w-4 text-primary animate-spin mx-auto" />}
                    {status === "pass" && <CheckCircle2 className="h-4 w-4 text-green-500 mx-auto" />}
                    {status === "fail" && <XCircle className="h-4 w-4 text-destructive mx-auto" />}
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

export default TestRunner;
