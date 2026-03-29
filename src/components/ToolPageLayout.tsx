import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

interface ToolPageLayoutProps {
  title: string;
  subtitle: string;
  description: string;
  children: React.ReactNode;
}

const ToolPageLayout = ({ title, subtitle, description, children }: ToolPageLayoutProps) => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <header className="border-b border-border px-6 py-8 md:px-12">
        <div className="mx-auto max-w-5xl">
          <Link
            to="/tools"
            className="inline-flex items-center gap-1.5 text-xs font-medium text-muted-foreground hover:text-primary transition-colors mb-6"
          >
            <ArrowLeft className="h-3.5 w-3.5" />
            Back to Tools
          </Link>
          <div className="flex items-center gap-3 mb-1">
            <div className="h-8 w-8 rounded-full border-2 border-primary flex items-center justify-center">
              <div className="h-2.5 w-2.5 rounded-full bg-primary" />
            </div>
            <div>
              <h1 className="text-xl md:text-2xl font-extrabold tracking-widest uppercase text-foreground leading-none">
                {title}
              </h1>
              <p className="text-[10px] md:text-xs tracking-[0.3em] uppercase text-muted-foreground font-medium leading-tight">
                {subtitle}
              </p>
            </div>
          </div>
          <p className="text-muted-foreground text-sm md:text-base max-w-2xl mt-4">
            {description}
          </p>
        </div>
      </header>

      <main className="px-6 md:px-12 py-8">
        <div className="mx-auto max-w-5xl">{children}</div>
      </main>

      <footer className="border-t border-border px-6 md:px-12 py-6">
        <div className="mx-auto max-w-5xl text-center text-xs text-muted-foreground">
          Powered by <span className="text-primary font-semibold">HIVE</span> · King_Cobra74
        </div>
      </footer>
    </div>
  );
};

export default ToolPageLayout;
