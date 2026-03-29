import ToolPageLayout from "@/components/ToolPageLayout";

const TwitchMSFS = () => {
  return (
    <ToolPageLayout
      subtitle="Twitch MSFS Reference"
      description="Complete reference for Twitch chat flight commands, viewer controls, and route system."
    >
      <div className="rounded-lg border border-border overflow-hidden" style={{ height: "calc(100vh - 220px)" }}>
        <iframe
          src="https://docs.kinghive.games/twitch-msfs.html"
          className="w-full h-full border-0"
          title="Twitch MSFS Reference"
          allow="fullscreen"
        />
      </div>
    </ToolPageLayout>
  );
};

export default TwitchMSFS;
