import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Activity, Droplets, Power } from "lucide-react";

interface BoreholeData {
  waterLevel: number;
  maxDepth: number;
  pumpStatus: "running" | "stopped" | "maintenance";
  vibrationLevel: "low" | "normal" | "high";
  flowRate: number;
}

const mockData: BoreholeData = {
  waterLevel: 32.4,
  maxDepth: 50,
  pumpStatus: "running",
  vibrationLevel: "normal", 
  flowRate: 145
};

export function BoreholeVisualization() {
  const waterPercentage = ((mockData.maxDepth - mockData.waterLevel) / mockData.maxDepth) * 100;
  
  const pumpStatusColor = {
    running: "text-success",
    stopped: "text-muted-foreground", 
    maintenance: "text-warning"
  };

  const vibrationColor = {
    low: "text-success",
    normal: "text-primary",
    high: "text-destructive"
  };

  return (
    <Card className="h-full">
      <CardHeader>
        <CardTitle className="flex items-center space-x-2">
          <Droplets className="w-5 h-5 text-primary" />
          <span>Live Borehole Status</span>
        </CardTitle>
      </CardHeader>
      
      <CardContent className="space-y-6">
        {/* Borehole Visualization */}
        <div className="flex justify-center">
          <div className="relative">
            {/* Borehole casing */}
            <div className="w-24 h-64 bg-border rounded-lg border-2 border-muted relative overflow-hidden">
              {/* Water level */}
              <div 
                className="absolute bottom-0 w-full bg-gradient-water rounded-b-lg transition-all duration-1000 animate-water-flow"
                style={{ height: `${waterPercentage}%` }}
              />
              
              {/* Water level indicator line */}
              <div 
                className="absolute w-full h-0.5 bg-primary border-t-2 border-primary-glow"
                style={{ bottom: `${waterPercentage}%` }}
              />
              
              {/* Depth markers */}
              <div className="absolute right-0 top-0 h-full w-6 flex flex-col justify-between text-xs text-muted-foreground">
                <span>0m</span>
                <span>25m</span>
                <span>50m</span>
              </div>
            </div>
            
            {/* Pump indicator */}
            <div className="absolute -left-8 top-1/2 transform -translate-y-1/2">
              <div className={`p-2 rounded-full border-2 ${
                mockData.pumpStatus === 'running' 
                  ? 'bg-success/10 border-success animate-pulse-glow' 
                  : 'bg-muted border-border'
              }`}>
                <Power className={`w-4 h-4 ${
                  mockData.pumpStatus === 'running' 
                    ? 'text-success animate-rotate-pump' 
                    : 'text-muted-foreground'
                }`} />
              </div>
            </div>
          </div>
        </div>

        {/* Status Information */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <div className="text-center p-3 bg-accent/50 rounded-lg">
            <p className="text-xs text-muted-foreground">Water Level</p>
            <p className="text-lg font-semibold text-primary">{mockData.waterLevel}m</p>
          </div>
          
          <div className="text-center p-3 bg-accent/50 rounded-lg">
            <p className="text-xs text-muted-foreground">Pump Status</p>
            <p className={`text-lg font-semibold ${pumpStatusColor[mockData.pumpStatus]}`}>
              {mockData.pumpStatus.charAt(0).toUpperCase() + mockData.pumpStatus.slice(1)}
            </p>
          </div>
          
          <div className="text-center p-3 bg-accent/50 rounded-lg">
            <p className="text-xs text-muted-foreground">Flow Rate</p>
            <p className="text-lg font-semibold text-secondary">{mockData.flowRate} L/min</p>
          </div>
        </div>

        {/* Vibration Status */}
        <div className="flex items-center justify-between p-3 bg-muted/30 rounded-lg">
          <div className="flex items-center space-x-2">
            <Activity className={`w-4 h-4 ${vibrationColor[mockData.vibrationLevel]}`} />
            <span className="text-sm font-medium">Vibration Level</span>
          </div>
          <span className={`text-sm font-semibold ${vibrationColor[mockData.vibrationLevel]}`}>
            {mockData.vibrationLevel.toUpperCase()}
          </span>
        </div>
      </CardContent>
    </Card>
  );
}