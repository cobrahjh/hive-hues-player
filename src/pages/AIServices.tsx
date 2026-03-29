import ToolPageLayout from "@/components/ToolPageLayout";
import { Bot, Mic, Image, Video, Terminal } from "lucide-react";

interface AIModel {
  name: string;
  provider: string;
  type: string;
  command: string;
  description: string;
}

const models: AIModel[] = [
  {
    name: "Flight Copilot",
    provider: "OpenAI GPT-4",
    type: "Chat",
    command: "!copilot <question>",
    description: "Answers flight questions with real sim data context. Knows altitude, heading, speed, and route.",
  },
  {
    name: "Narrator",
    provider: "OpenAI GPT-4",
    type: "Chat",
    command: "!narrator",
    description: "Cinematic narration of current location, terrain, and flight situation.",
  },
  {
    name: "Kit (Mascot AI)",
    provider: "OpenAI GPT-4",
    type: "Character",
    command: "@chat naturally",
    description: "Stream mascot with personality. Greets viewers, reacts to events, fires sim commands.",
  },
  {
    name: "Commentary Engine",
    provider: "OpenAI GPT-4",
    type: "Auto",
    command: "!commentary",
    description: "Automatic flight commentary on takeoffs, landings, turbulence, and scenic moments.",
  },
];

interface Voice {
  name: string;
  engine: string;
  language: string;
  usage: string;
}

const voices: Voice[] = [
  { name: "Copilot Voice", engine: "ElevenLabs", language: "English", usage: "AI copilot responses" },
  { name: "Narrator Voice", engine: "ElevenLabs", language: "English", usage: "Cinematic narrations" },
  { name: "Kit Voice", engine: "ElevenLabs", language: "English", usage: "Kit mascot speech" },
  { name: "TTS Default", engine: "Google TTS", language: "Multi", usage: "Viewer !tts commands" },
];

const aiCommands = [
  { command: "!copilot <question>", description: "Ask the AI copilot anything about the flight" },
  { command: "!narrator", description: "Get a cinematic narration of current location" },
  { command: "!commentary", description: "Toggle automatic flight commentary (mod only)" },
  { command: "!flightdata", description: "Kit reports live altitude, speed, and heading" },
  { command: "!autopilot", description: "Kit reports current autopilot settings" },
  { command: "!hive", description: "Kit checks AI system status" },
  { command: "!features", description: "Kit lists all available features" },
  { command: "!so @user", description: "Kit shoutout (mod only)" },
];

const AIServices = () => {
  return (
    <ToolPageLayout
      
      subtitle="AI Services"
      description="All AI models, voice engines, and Twitch commands powering the stream's intelligence layer."
    >
      {/* AI Models */}
      <section className="mb-10">
        <div className="flex items-center gap-2 mb-4">
          <Bot className="h-4 w-4 text-primary" />
          <h2 className="text-sm font-semibold uppercase tracking-widest text-primary">
            AI Models
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {models.map((model) => (
            <div
              key={model.name}
              className="rounded-lg border border-border bg-card p-5"
            >
              <div className="flex items-center justify-between mb-2">
                <h3 className="text-base font-semibold text-foreground">{model.name}</h3>
                <span className="bg-primary/15 text-primary px-2 py-0.5 rounded text-xs font-medium">
                  {model.type}
                </span>
              </div>
              <p className="text-xs text-muted-foreground mb-3">{model.provider}</p>
              <p className="text-sm text-muted-foreground mb-3 leading-relaxed">{model.description}</p>
              <code
                className="text-primary font-mono text-xs font-medium bg-primary/10 px-2 py-0.5 rounded"
                style={{ fontFamily: "'JetBrains Mono', monospace" }}
              >
                {model.command}
              </code>
            </div>
          ))}
        </div>
      </section>

      {/* Voice Engines */}
      <section className="mb-10">
        <div className="flex items-center gap-2 mb-4">
          <Mic className="h-4 w-4 text-primary" />
          <h2 className="text-sm font-semibold uppercase tracking-widest text-primary">
            Voice Engines
          </h2>
        </div>
        <div className="rounded-lg border border-border overflow-hidden">
          <table className="w-full text-sm">
            <thead>
              <tr className="bg-secondary/50">
                <th className="text-left px-4 py-2.5 text-xs font-semibold uppercase tracking-wider text-primary">Voice</th>
                <th className="text-left px-4 py-2.5 text-xs font-semibold uppercase tracking-wider text-muted-foreground">Engine</th>
                <th className="text-left px-4 py-2.5 text-xs font-semibold uppercase tracking-wider text-muted-foreground hidden md:table-cell">Language</th>
                <th className="text-left px-4 py-2.5 text-xs font-semibold uppercase tracking-wider text-muted-foreground">Usage</th>
              </tr>
            </thead>
            <tbody>
              {voices.map((v, i) => (
                <tr key={v.name} className={`border-t border-border ${i % 2 === 0 ? "bg-card" : "bg-card/50"}`}>
                  <td className="px-4 py-2.5 font-medium text-foreground">{v.name}</td>
                  <td className="px-4 py-2.5 text-muted-foreground">{v.engine}</td>
                  <td className="px-4 py-2.5 text-muted-foreground hidden md:table-cell">{v.language}</td>
                  <td className="px-4 py-2.5 text-muted-foreground">{v.usage}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* AI Commands */}
      <section>
        <div className="flex items-center gap-2 mb-4">
          <Terminal className="h-4 w-4 text-primary" />
          <h2 className="text-sm font-semibold uppercase tracking-widest text-primary">
            AI Commands
          </h2>
        </div>
        <div className="rounded-lg border border-border overflow-hidden">
          <table className="w-full text-sm">
            <thead>
              <tr className="bg-secondary/50">
                <th className="text-left px-4 py-2.5 text-xs font-semibold uppercase tracking-wider text-primary w-1/3">Command</th>
                <th className="text-left px-4 py-2.5 text-xs font-semibold uppercase tracking-wider text-muted-foreground">Description</th>
              </tr>
            </thead>
            <tbody>
              {aiCommands.map((cmd, i) => (
                <tr key={cmd.command} className={`border-t border-border ${i % 2 === 0 ? "bg-card" : "bg-card/50"} hover:bg-secondary/30 transition-colors`}>
                  <td className="px-4 py-2.5">
                    <code
                      className="text-primary font-mono text-xs font-medium bg-primary/10 px-2 py-0.5 rounded"
                      style={{ fontFamily: "'JetBrains Mono', monospace" }}
                    >
                      {cmd.command}
                    </code>
                  </td>
                  <td className="px-4 py-2.5 text-muted-foreground">{cmd.description}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
    </ToolPageLayout>
  );
};

export default AIServices;
