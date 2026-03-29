import ToolPageLayout from "@/components/ToolPageLayout";
import { Mic, Volume2, Settings2, Terminal } from "lucide-react";

interface VoiceConfig {
  setting: string;
  value: string;
  description: string;
}

const copilotConfig: VoiceConfig[] = [
  { setting: "Wake Word", value: "Hey Copilot", description: "Voice activation trigger phrase" },
  { setting: "Voice Engine", value: "ElevenLabs v2", description: "Text-to-speech synthesis provider" },
  { setting: "Voice ID", value: "copilot-alpha", description: "Selected voice profile" },
  { setting: "Response Mode", value: "Streaming", description: "Real-time word-by-word output" },
  { setting: "Max Response", value: "150 tokens", description: "Maximum response length" },
  { setting: "Cooldown", value: "15s", description: "Minimum time between voice queries" },
];

const speechConfig: VoiceConfig[] = [
  { setting: "Engine", value: "Whisper v3", description: "OpenAI speech recognition model" },
  { setting: "Language", value: "Auto-detect", description: "Automatic language identification" },
  { setting: "Input Source", value: "Stream mic", description: "Audio capture device" },
  { setting: "Noise Gate", value: "-40dB", description: "Background noise threshold" },
  { setting: "VAD", value: "Enabled", description: "Voice Activity Detection for auto-segmenting" },
];

const ttsVoices = [
  { name: "Copilot", engine: "ElevenLabs", style: "Professional, calm", usage: "!copilot responses" },
  { name: "Narrator", engine: "ElevenLabs", style: "Cinematic, deep", usage: "!narrator output" },
  { name: "Kit", engine: "ElevenLabs", style: "Playful, energetic", usage: "Kit AI character" },
  { name: "Default TTS", engine: "Google TTS", style: "Neutral", usage: "Viewer !tts commands" },
  { name: "Alert Voice", engine: "Google TTS", style: "Clear, urgent", usage: "System alerts" },
];

const voiceCommands = [
  { command: "!copilot <question>", description: "Trigger voice response from AI copilot" },
  { command: "!narrator", description: "Narrated cinematic voice output" },
  { command: "!tts <message>", description: "Viewer text-to-speech on stream" },
  { command: "!voice on/off", description: "Toggle copilot voice responses (mod only)" },
  { command: "!volume <0-100>", description: "Set TTS output volume (mod only)" },
];

const VoiceAccess = () => {
  return (
    <ToolPageLayout
      title="HIVE"
      subtitle="Voice Access"
      description="Copilot voice system, speech recognition engine, and TTS configuration reference."
    >
      {/* Copilot Voice Config */}
      <section className="mb-10">
        <div className="flex items-center gap-2 mb-4">
          <Mic className="h-4 w-4 text-primary" />
          <h2 className="text-sm font-semibold uppercase tracking-widest text-primary">
            Copilot Voice Config
          </h2>
        </div>
        <div className="rounded-lg border border-border overflow-hidden">
          <table className="w-full text-sm">
            <thead>
              <tr className="bg-secondary/50">
                <th className="text-left px-4 py-2.5 text-xs font-semibold uppercase tracking-wider text-primary">Setting</th>
                <th className="text-left px-4 py-2.5 text-xs font-semibold uppercase tracking-wider text-muted-foreground">Value</th>
                <th className="text-left px-4 py-2.5 text-xs font-semibold uppercase tracking-wider text-muted-foreground hidden md:table-cell">Description</th>
              </tr>
            </thead>
            <tbody>
              {copilotConfig.map((c, i) => (
                <tr key={c.setting} className={`border-t border-border ${i % 2 === 0 ? "bg-card" : "bg-card/50"}`}>
                  <td className="px-4 py-2.5 font-medium text-foreground">{c.setting}</td>
                  <td className="px-4 py-2.5">
                    <code
                      className="text-primary font-mono text-xs font-medium bg-primary/10 px-2 py-0.5 rounded"
                      style={{ fontFamily: "'JetBrains Mono', monospace" }}
                    >
                      {c.value}
                    </code>
                  </td>
                  <td className="px-4 py-2.5 text-muted-foreground hidden md:table-cell">{c.description}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* Speech Recognition */}
      <section className="mb-10">
        <div className="flex items-center gap-2 mb-4">
          <Settings2 className="h-4 w-4 text-primary" />
          <h2 className="text-sm font-semibold uppercase tracking-widest text-primary">
            Speech Recognition
          </h2>
        </div>
        <div className="rounded-lg border border-border overflow-hidden">
          <table className="w-full text-sm">
            <thead>
              <tr className="bg-secondary/50">
                <th className="text-left px-4 py-2.5 text-xs font-semibold uppercase tracking-wider text-primary">Setting</th>
                <th className="text-left px-4 py-2.5 text-xs font-semibold uppercase tracking-wider text-muted-foreground">Value</th>
                <th className="text-left px-4 py-2.5 text-xs font-semibold uppercase tracking-wider text-muted-foreground hidden md:table-cell">Description</th>
              </tr>
            </thead>
            <tbody>
              {speechConfig.map((c, i) => (
                <tr key={c.setting} className={`border-t border-border ${i % 2 === 0 ? "bg-card" : "bg-card/50"}`}>
                  <td className="px-4 py-2.5 font-medium text-foreground">{c.setting}</td>
                  <td className="px-4 py-2.5">
                    <code
                      className="text-primary font-mono text-xs font-medium bg-primary/10 px-2 py-0.5 rounded"
                      style={{ fontFamily: "'JetBrains Mono', monospace" }}
                    >
                      {c.value}
                    </code>
                  </td>
                  <td className="px-4 py-2.5 text-muted-foreground hidden md:table-cell">{c.description}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* TTS Voices */}
      <section className="mb-10">
        <div className="flex items-center gap-2 mb-4">
          <Volume2 className="h-4 w-4 text-primary" />
          <h2 className="text-sm font-semibold uppercase tracking-widest text-primary">
            TTS Voices
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {ttsVoices.map((v) => (
            <div key={v.name} className="rounded-lg border border-border bg-card p-5">
              <h3 className="text-base font-semibold text-foreground mb-1">{v.name}</h3>
              <p className="text-xs text-muted-foreground mb-2">{v.engine}</p>
              <p className="text-sm text-muted-foreground mb-3">{v.style}</p>
              <span className="bg-primary/15 text-primary px-2 py-0.5 rounded text-xs font-medium">
                {v.usage}
              </span>
            </div>
          ))}
        </div>
      </section>

      {/* Voice Commands */}
      <section>
        <div className="flex items-center gap-2 mb-4">
          <Terminal className="h-4 w-4 text-primary" />
          <h2 className="text-sm font-semibold uppercase tracking-widest text-primary">
            Voice Commands
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
              {voiceCommands.map((cmd, i) => (
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

export default VoiceAccess;
