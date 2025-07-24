import { DashboardLayout } from "@/components/layout/DashboardLayout";
import { StatCard } from "@/components/dashboard/StatCard";
import { BoreholeVisualization } from "@/components/dashboard/BoreholeVisualization";
import { QuickAlerts } from "@/components/dashboard/QuickAlerts";
import { MiniCharts } from "@/components/dashboard/MiniCharts";
import { 
  Droplets, 
  Activity, 
  Wifi, 
  Wrench, 
  TrendingUp 
} from "lucide-react";

const Index = () => {
  const statsData = [
    {
      title: "Water Level",
      value: "32.4",
      unit: "m",
      icon: Droplets,
      status: "safe" as const,
      timestamp: "2 min ago",
      trend: "stable" as const
    },
    {
      title: "Pump Status", 
      value: "Running",
      icon: Activity,
      status: "safe" as const,
      timestamp: "2 min ago",
      trend: "stable" as const
    },
    {
      title: "Connectivity",
      value: "Strong", 
      icon: Wifi,
      status: "safe" as const,
      timestamp: "1 min ago"
    },
    {
      title: "Last Maintenance",
      value: "12",
      unit: "days ago",
      icon: Wrench,
      status: "warning" as const,
      timestamp: "Updated daily"
    },
    {
      title: "Daily Usage",
      value: "540",
      unit: "Litres",
      icon: TrendingUp,
      status: "info" as const,
      timestamp: "Real-time",
      trend: "up" as const
    }
  ];

  return (
    <DashboardLayout>
      <div className="space-y-6">
        {/* Top Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-5 gap-4">
          {statsData.map((stat, index) => (
            <StatCard key={index} {...stat} />
          ))}
        </div>

        {/* Middle Section - Borehole Visualization and Alerts */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2">
            <BoreholeVisualization />
          </div>
          <div>
            <QuickAlerts />
          </div>
        </div>

        {/* Bottom Section - Mini Charts */}
        <MiniCharts />
      </div>
    </DashboardLayout>
  );
};

export default Index;
