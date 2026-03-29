interface ToolPageLayoutProps {
  subtitle: string;
  description: string;
  children: React.ReactNode;
}

const ToolPageLayout = ({ subtitle, description, children }: ToolPageLayoutProps) => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <header className="border-b border-border px-6 py-6 md:px-12">
        <div className="mx-auto max-w-5xl">
          <h1 className="text-lg md:text-xl font-bold text-foreground mb-1">{subtitle}</h1>
          <p className="text-muted-foreground text-sm max-w-2xl">{description}</p>
        </div>
      </header>

      <main className="px-6 md:px-12 py-8">
        <div className="mx-auto max-w-5xl">{children}</div>
      </main>
    </div>
  );
};

export default ToolPageLayout;
