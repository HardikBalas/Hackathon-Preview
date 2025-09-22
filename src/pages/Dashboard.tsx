import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  LineChart, 
  Line, 
  AreaChart, 
  Area, 
  BarChart, 
  Bar, 
  PieChart, 
  Pie, 
  Cell,
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  Legend, 
  ResponsiveContainer 
} from "recharts";
import { TrendingUp, TrendingDown, Activity, Target } from "lucide-react";

const Dashboard = () => {
  const yieldData = [
    { month: 'Jan', wheat: 3.2, corn: 7.1, rice: 5.8 },
    { month: 'Feb', wheat: 3.5, corn: 7.4, rice: 6.1 },
    { month: 'Mar', wheat: 3.8, corn: 7.8, rice: 6.4 },
    { month: 'Apr', wheat: 4.1, corn: 8.2, rice: 6.7 },
    { month: 'May', wheat: 4.3, corn: 8.5, rice: 6.9 },
    { month: 'Jun', wheat: 4.2, corn: 8.3, rice: 6.8 },
  ];

  const soilData = [
    { parameter: 'pH', value: 6.8, optimal: 7.0 },
    { parameter: 'Nitrogen', value: 45, optimal: 50 },
    { parameter: 'Phosphorus', value: 32, optimal: 35 },
    { parameter: 'Potassium', value: 28, optimal: 40 },
    { parameter: 'Organic Matter', value: 3.2, optimal: 4.0 },
  ];

  const weatherData = [
    { day: 'Mon', temperature: 22, rainfall: 2.3, humidity: 65 },
    { day: 'Tue', temperature: 24, rainfall: 0, humidity: 58 },
    { day: 'Wed', temperature: 21, rainfall: 5.1, humidity: 72 },
    { day: 'Thu', temperature: 25, rainfall: 0, humidity: 60 },
    { day: 'Fri', temperature: 23, rainfall: 1.2, humidity: 68 },
    { day: 'Sat', temperature: 26, rainfall: 0, humidity: 55 },
    { day: 'Sun', temperature: 24, rainfall: 3.5, humidity: 70 },
  ];

  const cropDistribution = [
    { name: 'Wheat', value: 35, color: '#8884d8' },
    { name: 'Corn', value: 30, color: '#82ca9d' },
    { name: 'Rice', value: 20, color: '#ffc658' },
    { name: 'Vegetables', value: 15, color: '#ff7c7c' },
  ];

  const StatCard = ({ title, value, change, icon: Icon, trend }: any) => (
    <Card>
      <CardContent className="p-6">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-sm font-medium text-muted-foreground">{title}</p>
            <div className="flex items-center space-x-2">
              <h3 className="text-2xl font-bold">{value}</h3>
              <div className={`flex items-center space-x-1 text-sm ₹{
                trend === 'up' ? 'text-success' : 'text-destructive'
              }`}>
                {trend === 'up' ? (
                  <TrendingUp className="h-4 w-4" />
                ) : (
                  <TrendingDown className="h-4 w-4" />
                )}
                <span>{change}</span>
              </div>
            </div>
          </div>
          <div className="p-3 bg-accent rounded-lg">
            <Icon className="h-6 w-6 text-primary" />
          </div>
        </div>
      </CardContent>
    </Card>
  );

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-7xl mx-auto">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-foreground mb-2">
            Analytics Dashboard
          </h1>
          <p className="text-muted-foreground">
            Comprehensive insights into your farm's performance and trends
          </p>
        </div>

        {/* Stats Overview */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <StatCard
            title="Average Yield"
            value="4.2 T/Ha"
            change="+12%"
            trend="up"
            icon={Target}
          />
          <StatCard
            title="Efficiency Score"
            value="87%"
            change="+5%"
            trend="up"
            icon={Activity}
          />
          <StatCard
            title="Soil Health"
            value="Good"
            change="+8%"
            trend="up"
            icon={TrendingUp}
          />
          <StatCard
            title="Cost per Hectare"
            value="₹1,240"
            change="-3%"
            trend="up"
            icon={TrendingDown}
          />
        </div>

        {/* Charts */}
        <Tabs defaultValue="yield" className="space-y-6">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="yield">Yield Trends</TabsTrigger>
            <TabsTrigger value="soil">Soil Analysis</TabsTrigger>
            <TabsTrigger value="weather">Weather Patterns</TabsTrigger>
            <TabsTrigger value="distribution">Crop Distribution</TabsTrigger>
          </TabsList>

          <TabsContent value="yield">
            <Card>
              <CardHeader>
                <CardTitle>Crop Yield Trends</CardTitle>
                <CardDescription>
                  Monthly yield performance across different crops
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ResponsiveContainer width="100%" height={400}>
                  <LineChart data={yieldData}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="month" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Line 
                      type="monotone" 
                      dataKey="wheat" 
                      stroke="#8884d8" 
                      strokeWidth={2}
                      name="Wheat (T/Ha)"
                    />
                    <Line 
                      type="monotone" 
                      dataKey="corn" 
                      stroke="#82ca9d" 
                      strokeWidth={2}
                      name="Corn (T/Ha)"
                    />
                    <Line 
                      type="monotone" 
                      dataKey="rice" 
                      stroke="#ffc658" 
                      strokeWidth={2}
                      name="Rice (T/Ha)"
                    />
                  </LineChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="soil">
            <Card>
              <CardHeader>
                <CardTitle>Soil Parameter Analysis</CardTitle>
                <CardDescription>
                  Current vs optimal soil conditions
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ResponsiveContainer width="100%" height={400}>
                  <BarChart data={soilData}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="parameter" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Bar dataKey="value" fill="#8884d8" name="Current Value" />
                    <Bar dataKey="optimal" fill="#82ca9d" name="Optimal Range" />
                  </BarChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="weather">
            <Card>
              <CardHeader>
                <CardTitle>Weather Patterns</CardTitle>
                <CardDescription>
                  7-day temperature, rainfall, and humidity trends
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ResponsiveContainer width="100%" height={400}>
                  <AreaChart data={weatherData}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="day" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Area 
                      type="monotone" 
                      dataKey="temperature" 
                      stackId="1"
                      stroke="#8884d8" 
                      fill="#8884d8"
                      name="Temperature (°C)"
                    />
                    <Area 
                      type="monotone" 
                      dataKey="rainfall" 
                      stackId="2"
                      stroke="#82ca9d" 
                      fill="#82ca9d"
                      name="Rainfall (mm)"
                    />
                  </AreaChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="distribution">
            <Card>
              <CardHeader>
                <CardTitle>Crop Distribution</CardTitle>
                <CardDescription>
                  Current farm area allocation by crop type
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ResponsiveContainer width="100%" height={400}>
                  <PieChart>
                    <Pie
                      data={cropDistribution}
                      cx="50%"
                      cy="50%"
                      labelLine={false}
                      label={({ name, percent }) => `₹{name} ₹{(percent * 100).toFixed(0)}%`}
                      outerRadius={120}
                      fill="#8884d8"
                      dataKey="value"
                    >
                      {cropDistribution.map((entry, index) => (
                        <Cell key={`cell-₹{index}`} fill={entry.color} />
                      ))}
                    </Pie>
                    <Tooltip />
                  </PieChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default Dashboard;