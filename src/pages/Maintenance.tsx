import { DashboardLayout } from "@/components/layout/DashboardLayout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Wrench, Calendar, CheckCircle } from "lucide-react";

const Maintenance = () => {
  return (
    <DashboardLayout>
      <div className="space-y-6">
        <div className="flex items-center space-x-3">
          <Wrench className="w-8 h-8 text-primary" />
          <div>
            <h1 className="text-3xl font-bold text-foreground">Maintenance Logs</h1>
            <p className="text-muted-foreground">Service history and maintenance scheduling</p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <Card className="border-warning/20 bg-warning/5">
            <CardHeader>
              <CardTitle className="flex items-center space-x-2 text-warning">
                <Calendar className="w-5 h-5" />
                <span>Due Soon</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-center py-6">
                <div className="text-4xl font-bold text-warning mb-2">1</div>
                <p className="text-muted-foreground">Maintenance task</p>
              </div>
            </CardContent>
          </Card>

          <Card className="border-success/20 bg-success/5">
            <CardHeader>
              <CardTitle className="flex items-center space-x-2 text-success">
                <CheckCircle className="w-5 h-5" />
                <span>Completed</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-center py-6">
                <div className="text-4xl font-bold text-success mb-2">8</div>
                <p className="text-muted-foreground">This year</p>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Last Service</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-center py-6">
                <div className="text-4xl font-bold text-primary mb-2">12</div>
                <p className="text-muted-foreground">Days ago</p>
              </div>
            </CardContent>
          </Card>
        </div>

        <Card>
          <CardHeader>
            <CardTitle>Maintenance History & Scheduling</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground">Detailed maintenance logs and scheduling system coming soon...</p>
          </CardContent>
        </Card>
      </div>
    </DashboardLayout>
  );
};

export default Maintenance;