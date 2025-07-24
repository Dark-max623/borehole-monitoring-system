import { DashboardLayout } from "@/components/layout/DashboardLayout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Brain, TrendingUp, Lightbulb } from "lucide-react";

const Forecast = () => {
  return (
    <DashboardLayout>
      <div className="space-y-6">
        <div className="flex items-center space-x-3">
          <Brain className="w-8 h-8 text-primary" />
          <div>
            <h1 className="text-3xl font-bold text-foreground">AI Forecast & Recommendations</h1>
            <p className="text-muted-foreground">Predictive insights and intelligent recommendations</p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <Card className="border-primary/20 bg-primary/5">
            <CardHeader>
              <CardTitle className="flex items-center space-x-2 text-primary">
                <TrendingUp className="w-5 h-5" />
                <span>Water Availability Forecast</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-sm text-muted-foreground">Next 7 days</span>
                  <span className="text-lg font-semibold text-success">Good availability</span>
                </div>
                <div className="w-full bg-accent rounded-full h-2">
                  <div className="bg-success h-2 rounded-full" style={{ width: '85%' }}></div>
                </div>
                <p className="text-xs text-muted-foreground">85% confidence level</p>
              </div>
            </CardContent>
          </Card>

          <Card className="border-secondary/20 bg-secondary/5">
            <CardHeader>
              <CardTitle className="flex items-center space-x-2 text-secondary">
                <Lightbulb className="w-5 h-5" />
                <span>Smart Recommendations</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                <div className="flex items-start space-x-2">
                  <div className="w-2 h-2 bg-secondary rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-sm">Optimal pumping hours: 6:00 AM - 8:00 AM</p>
                </div>
                <div className="flex items-start space-x-2">
                  <div className="w-2 h-2 bg-secondary rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-sm">Schedule maintenance in 3 days</p>
                </div>
                <div className="flex items-start space-x-2">
                  <div className="w-2 h-2 bg-secondary rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-sm">Peak demand expected tomorrow 7 AM</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        <Card>
          <CardHeader>
            <CardTitle>Advanced AI Analytics</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground">Machine learning models and predictive analytics coming soon...</p>
          </CardContent>
        </Card>
      </div>
    </DashboardLayout>
  );
};

export default Forecast;