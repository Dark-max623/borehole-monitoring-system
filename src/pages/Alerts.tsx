import { DashboardLayout } from "@/components/layout/DashboardLayout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Bell, AlertTriangle, CheckCircle } from "lucide-react";

const Alerts = () => {
  return (
    <DashboardLayout>
      <div className="space-y-6">
        <div className="flex items-center space-x-3">
          <Bell className="w-8 h-8 text-warning" />
          <div>
            <h1 className="text-3xl font-bold text-foreground">Alerts & Notifications</h1>
            <p className="text-muted-foreground">System alerts and notification center</p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <Card className="border-warning/20 bg-warning/5">
            <CardHeader>
              <CardTitle className="flex items-center space-x-2 text-warning">
                <AlertTriangle className="w-5 h-5" />
                <span>Active Alerts</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-center py-6">
                <div className="text-4xl font-bold text-warning mb-2">2</div>
                <p className="text-muted-foreground">Require attention</p>
              </div>
            </CardContent>
          </Card>

          <Card className="border-success/20 bg-success/5">
            <CardHeader>
              <CardTitle className="flex items-center space-x-2 text-success">
                <CheckCircle className="w-5 h-5" />
                <span>Resolved Today</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-center py-6">
                <div className="text-4xl font-bold text-success mb-2">3</div>
                <p className="text-muted-foreground">Issues resolved</p>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>System Status</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-center py-6">
                <div className="w-3 h-3 bg-success rounded-full mx-auto mb-2 animate-pulse-glow"></div>
                <div className="text-lg font-semibold text-success mb-2">All Systems Online</div>
                <p className="text-muted-foreground">Last updated 1 min ago</p>
              </div>
            </CardContent>
          </Card>
        </div>

        <Card>
          <CardHeader>
            <CardTitle>Alert History & Management</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground">Detailed alert management and notification settings coming soon...</p>
          </CardContent>
        </Card>
      </div>
    </DashboardLayout>
  );
};

export default Alerts;