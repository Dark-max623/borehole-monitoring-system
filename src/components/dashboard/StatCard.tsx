import { LucideIcon } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

interface StatCardProps {
  title: string;
  value: string;
  unit?: string;
  icon: LucideIcon;
  status: "safe" | "warning" | "danger" | "info";
  timestamp: string;
  trend?: "up" | "down" | "stable";
}

const statusColors = {
  safe: "text-success border-success/20 bg-success/5",
  warning: "text-warning border-warning/20 bg-warning/5", 
  danger: "text-destructive border-destructive/20 bg-destructive/5",
  info: "text-primary border-primary/20 bg-primary/5"
};

const statusIconBg = {
  safe: "bg-success/10",
  warning: "bg-warning/10",
  danger: "bg-destructive/10", 
  info: "bg-primary/10"
};

export function StatCard({ title, value, unit, icon: Icon, status, timestamp, trend }: StatCardProps) {
  return (
    <Card className={`border-2 transition-all hover:shadow-lg ${statusColors[status]}`}>
      <CardContent className="p-6">
        <div className="flex items-start justify-between">
          <div className="flex-1">
            <p className="text-sm font-medium text-muted-foreground mb-1">{title}</p>
            <div className="flex items-baseline space-x-1">
              <h3 className="text-2xl font-bold">{value}</h3>
              {unit && <span className="text-sm text-muted-foreground">{unit}</span>}
            </div>
            <p className="text-xs text-muted-foreground mt-2">Updated {timestamp}</p>
          </div>
          
          <div className={`p-3 rounded-lg ${statusIconBg[status]}`}>
            <Icon className={`w-6 h-6 ${statusColors[status].split(' ')[0]}`} />
          </div>
        </div>
        
        {trend && (
          <div className="flex items-center mt-3 pt-3 border-t border-border/50">
            <div className={`text-xs px-2 py-1 rounded-full font-medium ${
              trend === 'up' ? 'bg-success/10 text-success' :
              trend === 'down' ? 'bg-destructive/10 text-destructive' :
              'bg-muted text-muted-foreground'
            }`}>
              {trend === 'up' ? '↗' : trend === 'down' ? '↘' : '→'} 
              {trend === 'up' ? 'Trending up' : trend === 'down' ? 'Trending down' : 'Stable'}
            </div>
          </div>
        )}
      </CardContent>
    </Card>
  );
}