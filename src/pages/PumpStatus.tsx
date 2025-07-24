import { DashboardLayout } from "@/components/layout/DashboardLayout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Activity, Power } from "lucide-react";

const PumpStatus = () => {
  return (
    <DashboardLayout>
      <div className="space-y-6">
        <div className="flex items-center space-x-3">
          <Activity className="w-8 h-8 text-secondary" />
          <div>
            <h1 className="text-3xl font-bold text-foreground">Pump Status & Vibration</h1>
            <p className="text-muted-foreground">Motor performance and vibration analysis</p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Power className="w-5 h-5 text-success" />
                <span>Pump Motor Status</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-center py-8">
                <div className="w-16 h-16 bg-success/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Power className="w-8 h-8 text-success animate-rotate-pump" />
                </div>
                <div className="text-2xl font-bold text-success mb-2">Running Normally</div>
                <p className="text-muted-foreground">Operational for 12 hours today</p>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Vibration Analysis</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">Vibration frequency monitoring and analysis coming soon...</p>
            </CardContent>
          </Card>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default PumpStatus;