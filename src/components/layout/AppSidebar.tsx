import { useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import {
  Home,
  Droplets,
  Settings,
  TrendingUp,
  Bell,
  Brain,
  Wrench,
  Shield,
  User,
  Activity
} from "lucide-react";

import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  useSidebar,
} from "@/components/ui/sidebar";

const navigationItems = [
  { 
    title: "Dashboard Overview", 
    url: "/", 
    icon: Home,
    description: "Main monitoring hub"
  },
  { 
    title: "Water Level", 
    url: "/water-level", 
    icon: Droplets,
    description: "Water depth & quality"
  },
  { 
    title: "Pump Status", 
    url: "/pump-status", 
    icon: Activity,
    description: "Motor & vibration"
  },
  { 
    title: "Usage & Trends", 
    url: "/usage-trends", 
    icon: TrendingUp,
    description: "Consumption analytics"
  },
  { 
    title: "Alerts", 
    url: "/alerts", 
    icon: Bell,
    description: "Notifications center"
  },
  { 
    title: "AI Forecast", 
    url: "/forecast", 
    icon: Brain,
    description: "Predictive insights"
  },
  { 
    title: "Maintenance", 
    url: "/maintenance", 
    icon: Wrench,
    description: "Service logs"
  },
  { 
    title: "Admin Settings", 
    url: "/admin", 
    icon: Shield,
    description: "System configuration"
  },
];

export function AppSidebar() {
  const { state } = useSidebar();
  const location = useLocation();
  const currentPath = location.pathname;
  const collapsed = state === "collapsed";

  const isActive = (path: string) => currentPath === path;
  
  const getNavClasses = (active: boolean) => 
    active 
      ? "bg-primary text-primary-foreground font-medium shadow-sm" 
      : "hover:bg-accent hover:text-accent-foreground";

  return (
    <Sidebar 
      className={`${collapsed ? "w-16" : "w-64"} transition-all duration-300 border-r bg-card`}
      collapsible="icon"
    >
      <SidebarContent className="px-3 py-4">
        {/* User section */}
        <div className={`mb-6 p-3 bg-gradient-primary rounded-lg text-primary-foreground ${collapsed ? 'text-center' : ''}`}>
          <div className="flex items-center space-x-3">
            <div className="w-8 h-8 bg-primary-foreground/20 rounded-full flex items-center justify-center">
              <User className="w-4 h-4" />
            </div>
            {!collapsed && (
              <div>
                <p className="font-semibold text-sm">Admin User</p>
                <p className="text-xs opacity-90">Kitui Borehole 3</p>
              </div>
            )}
          </div>
        </div>

        <SidebarGroup>
          <SidebarGroupLabel className="text-muted-foreground font-medium">
            {!collapsed ? "Navigation" : ""}
          </SidebarGroupLabel>

          <SidebarGroupContent className="mt-3">
            <SidebarMenu className="space-y-1">
              {navigationItems.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <NavLink 
                      to={item.url} 
                      end 
                      className={`${getNavClasses(isActive(item.url))} flex items-center space-x-3 p-3 rounded-lg transition-colors`}
                      title={collapsed ? item.title : ""}
                    >
                      <item.icon className="w-5 h-5 flex-shrink-0" />
                      {!collapsed && (
                        <div className="flex-1 min-w-0">
                          <span className="font-medium text-sm">{item.title}</span>
                          <p className="text-xs opacity-70 truncate">{item.description}</p>
                        </div>
                      )}
                    </NavLink>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>

        {/* Status indicator at bottom */}
        <div className={`mt-auto pt-4 border-t ${collapsed ? 'text-center' : ''}`}>
          <div className="flex items-center space-x-2 text-sm text-muted-foreground">
            <div className="w-2 h-2 bg-success rounded-full animate-pulse-glow"></div>
            {!collapsed && <span>System Online</span>}
          </div>
        </div>
      </SidebarContent>
    </Sidebar>
  );
}