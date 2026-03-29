import { Link } from "react-router-dom";
import { ChevronRight } from "lucide-react";

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
          <nav className="flex items-center gap-1.5 text-xs text-muted-foreground mb-3">
            <Link to="/" className="hover:text-primary transition-colors">Home</Link>
            <ChevronRight className="h-3 w-3" />
            <Link to="/tools" className="hover:text-primary transition-colors">Tools</Link>
            <ChevronRight className="h-3 w-3" />
            <span className="text-foreground font-medium">{subtitle}</span>
          </nav>
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
