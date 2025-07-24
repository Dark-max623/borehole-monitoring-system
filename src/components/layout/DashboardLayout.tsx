import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/layout/AppSidebar";
import { ReactNode } from "react";

interface DashboardLayoutProps {
  children: ReactNode;
}

export function DashboardLayout({ children }: DashboardLayoutProps) {
  return (
    <SidebarProvider>
      <div className="min-h-screen flex w-full bg-background">
        <AppSidebar />
        
        <main className="flex-1 flex flex-col">
          {/* Header with trigger */}
          <header className="h-16 flex items-center border-b bg-card px-6 shadow-sm">
            <SidebarTrigger className="text-foreground hover:bg-accent" />
            <div className="ml-4">
              <h1 className="text-xl font-semibold text-foreground">Smart Borehole Monitoring System</h1>
              <p className="text-sm text-muted-foreground">Real-time water monitoring and analytics</p>
            </div>
          </header>

          {/* Main content area */}
          <div className="flex-1 p-6">
            {children}
          </div>
        </main>
      </div>
    </SidebarProvider>
  );
}