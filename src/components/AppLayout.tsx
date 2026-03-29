import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/AppSidebar";

export default function AppLayout({ children }: { children: React.ReactNode }) {
  return (
    <SidebarProvider>
      <div className="min-h-screen flex w-full">
        <AppSidebar />
        <div className="flex-1 flex flex-col min-w-0">
          <header className="h-12 flex items-center border-b border-border bg-background sticky top-0 z-10">
            <SidebarTrigger className="ml-3 text-muted-foreground hover:text-primary" />
          </header>
          <div className="flex-1">{children}</div>
        </div>
      </div>
    </SidebarProvider>
  );
}
