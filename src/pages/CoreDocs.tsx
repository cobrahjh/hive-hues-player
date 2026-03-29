import ToolPageLayout from "@/components/ToolPageLayout";

const CoreDocs = () => {
  return (
    <ToolPageLayout
      subtitle="MSFS Core Docs"
      description="SimConnect integration, Input Events API, available commands, and WebSocket protocol."
    >
      <div className="rounded-lg border border-border overflow-hidden" style={{ height: "calc(100vh - 220px)" }}>
        <iframe
          src="https://docs.kinghive.games/"
          className="w-full h-full border-0"
          title="MSFS Core Docs"
          allow="fullscreen"
        />
      </div>
    </ToolPageLayout>
  );
};

export default CoreDocs;
