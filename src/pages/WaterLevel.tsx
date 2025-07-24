import { DashboardLayout } from "@/components/layout/DashboardLayout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Droplets, TrendingDown } from "lucide-react";

const WaterLevel = () => {
  return (
    <DashboardLayout>
      <div className="space-y-6">
        <div className="flex items-center space-x-3">
          <Droplets className="w-8 h-8 text-primary" />
          <div>
            <h1 className="text-3xl font-bold text-foreground">Water Level Monitoring</h1>
            <p className="text-muted-foreground">Real-time water depth tracking and historical analysis</p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <Card>
            <CardHeader>
              <CardTitle>Current Water Level</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-center py-8">
                <div className="text-6xl font-bold text-primary mb-2">32.4m</div>
                <p className="text-muted-foreground">Depth from surface</p>
                <div className="flex items-center justify-center space-x-2 mt-4">
                  <TrendingDown className="w-4 h-4 text-success" />
                  <span className="text-success text-sm">Within safe zone</span>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Historical Trends</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">Detailed charts and historical water level data coming soon...</p>
            </CardContent>
          </Card>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default WaterLevel;