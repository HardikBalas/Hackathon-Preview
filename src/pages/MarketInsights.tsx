import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  LineChart, 
  Line, 
  BarChart, 
  Bar, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  Legend, 
  ResponsiveContainer 
} from "recharts";
import { 
  TrendingUp, 
  TrendingDown, 
  DollarSign, 
  Globe, 
  Target,
  AlertCircle,
  CheckCircle
} from "lucide-react";

const MarketInsights = () => {
  // Exchange rate USD to INR (approximately 83.5)
  const exchangeRate = 83.5;

  const formatINR = (amount) => {
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
      maximumFractionDigits: 0,
    }).format(amount);
  };

  const priceData = [
    { month: 'Jan', wheat: Math.round(280 * exchangeRate), corn: Math.round(220 * exchangeRate), rice: Math.round(450 * exchangeRate), soybeans: Math.round(380 * exchangeRate) },
    { month: 'Feb', wheat: Math.round(285 * exchangeRate), corn: Math.round(225 * exchangeRate), rice: Math.round(460 * exchangeRate), soybeans: Math.round(390 * exchangeRate) },
    { month: 'Mar', wheat: Math.round(290 * exchangeRate), corn: Math.round(230 * exchangeRate), rice: Math.round(470 * exchangeRate), soybeans: Math.round(385 * exchangeRate) },
    { month: 'Apr', wheat: Math.round(295 * exchangeRate), corn: Math.round(235 * exchangeRate), rice: Math.round(475 * exchangeRate), soybeans: Math.round(395 * exchangeRate) },
    { month: 'May', wheat: Math.round(300 * exchangeRate), corn: Math.round(240 * exchangeRate), rice: Math.round(480 * exchangeRate), soybeans: Math.round(400 * exchangeRate) },
    { month: 'Jun', wheat: Math.round(305 * exchangeRate), corn: Math.round(245 * exchangeRate), rice: Math.round(485 * exchangeRate), soybeans: Math.round(405 * exchangeRate) },
  ];

  const demandData = [
    { crop: 'Wheat', demand: 85, supply: 78, price: Math.round(305 * exchangeRate) },
    { crop: 'Corn', demand: 92, supply: 88, price: Math.round(245 * exchangeRate) },
    { crop: 'Rice', demand: 78, supply: 82, price: Math.round(485 * exchangeRate) },
    { crop: 'Soybeans', demand: 88, supply: 85, price: Math.round(405 * exchangeRate) },
    { crop: 'Potatoes', demand: 95, supply: 90, price: Math.round(350 * exchangeRate) },
    { crop: 'Tomatoes', demand: 90, supply: 75, price: Math.round(800 * exchangeRate) },
  ];

  const marketTrends = [
    {
      category: "High Demand Crops",
      icon: TrendingUp,
      trend: "up",
      crops: [
        { 
          name: "Organic Vegetables", 
          growth: "+15%", 
          price: `₹66,800-1,00,200/ton`, 
          reason: "Growing health consciousness and premium market demand" 
        },
        { 
          name: "Quinoa", 
          growth: "+12%", 
          price: `₹2,33,800/ton`, 
          reason: "Superfood trend and gluten-free diet adoption" 
        },
        { 
          name: "Specialty Grains", 
          growth: "+8%", 
          price: `₹33,400-50,100/ton`, 
          reason: "Craft food industry and artisanal products growth" 
        }
      ]
    },
    {
      category: "Stable Markets",
      icon: Target,
      trend: "stable",
      crops: [
        { 
          name: "Wheat", 
          growth: "+2%", 
          price: `₹25,468/ton`, 
          reason: "Consistent global demand and stable supply chains" 
        },
        { 
          name: "Corn", 
          growth: "+3%", 
          price: `₹20,458/ton`, 
          reason: "Feed industry demand and biofuel applications" 
        },
        { 
          name: "Rice", 
          growth: "+1%", 
          price: `₹40,498/ton`, 
          reason: "Staple food crop with steady consumption patterns" 
        }
      ]
    },
    {
      category: "Declining Markets",
      icon: TrendingDown,
      trend: "down",
      crops: [
        { 
          name: "Traditional Tobacco", 
          growth: "-8%", 
          price: `₹2,67,200/ton`, 
          reason: "Health regulations and reduced consumption" 
        },
        { 
          name: "Sugar Beets", 
          growth: "-5%", 
          price: `₹15,030/ton`, 
          reason: "Sugar alternatives and health-conscious trends" 
        }
      ]
    }
  ];

  const exportOpportunities = [
    {
      crop: "Soybeans",
      destination: "China",
      opportunity: "High",
      price: `₹35,070/ton`,
      volume: "2.5M tons",
      trend: "increasing"
    },
    {
      crop: "Wheat",
      destination: "Middle East",
      opportunity: "Medium",
      price: `₹26,303/ton`,
      volume: "1.8M tons",
      trend: "stable"
    },
    {
      crop: "Organic Corn",
      destination: "Europe",
      opportunity: "High",
      price: `₹31,730/ton`,
      volume: "800K tons",
      trend: "increasing"
    },
    {
      crop: "Rice",
      destination: "Africa",
      opportunity: "Medium",
      price: `₹41,333/ton`,
      volume: "1.2M tons",
      trend: "growing"
    }
  ];

  const getTrendIcon = (trend: string) => {
    switch (trend) {
      case "up": return TrendingUp;
      case "down": return TrendingDown;
      default: return Target;
    }
  };

  const getTrendColor = (trend: string) => {
    switch (trend) {
      case "up": return "text-success";
      case "down": return "text-destructive";
      default: return "text-muted-foreground";
    }
  };

  const getOpportunityColor = (opportunity: string) => {
    switch (opportunity) {
      case "High": return "default";
      case "Medium": return "secondary";
      case "Low": return "outline";
      default: return "secondary";
    }
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-foreground mb-2">
            Market Insights & Pricing
          </h1>
          <p className="text-muted-foreground">
            Real-time market data, pricing trends, and export opportunities (All prices in INR)
          </p>
        </div>

        <Tabs defaultValue="prices" className="space-y-6">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="prices">Price Trends</TabsTrigger>
            <TabsTrigger value="demand">Supply & Demand</TabsTrigger>
            <TabsTrigger value="trends">Market Trends</TabsTrigger>
            <TabsTrigger value="exports">Export Opportunities</TabsTrigger>
          </TabsList>

          <TabsContent value="prices">
            <Card>
              <CardHeader>
                <CardTitle>Commodity Price Trends</CardTitle>
                <CardDescription>
                  6-month price movement for major agricultural commodities (₹/ton)
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ResponsiveContainer width="100%" height={400}>
                  <LineChart data={priceData}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="month" />
                    <YAxis />
                    <Tooltip formatter={(value) => [`₹${value.toLocaleString()}/ton`, '']} />
                    <Legend />
                    <Line 
                      type="monotone" 
                      dataKey="wheat" 
                      stroke="#8884d8" 
                      strokeWidth={2}
                      name="Wheat"
                    />
                    <Line 
                      type="monotone" 
                      dataKey="corn" 
                      stroke="#82ca9d" 
                      strokeWidth={2}
                      name="Corn"
                    />
                    <Line 
                      type="monotone" 
                      dataKey="rice" 
                      stroke="#ffc658" 
                      strokeWidth={2}
                      name="Rice"
                    />
                    <Line 
                      type="monotone" 
                      dataKey="soybeans" 
                      stroke="#ff7c7c" 
                      strokeWidth={2}
                      name="Soybeans"
                    />
                  </LineChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="demand">
            <Card>
              <CardHeader>
                <CardTitle>Supply vs Demand Analysis</CardTitle>
                <CardDescription>
                  Current market balance and pricing indicators
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4 mb-6">
                  {demandData.map((item, index) => (
                    <div key={index} className="flex items-center justify-between p-4 bg-accent rounded-lg">
                      <div className="flex-1">
                        <h4 className="font-semibold">{item.crop}</h4>
                        <div className="flex items-center space-x-4 mt-2">
                          <div className="text-sm">
                            <span className="text-muted-foreground">Demand: </span>
                            <span className="font-medium">{item.demand}%</span>
                          </div>
                          <div className="text-sm">
                            <span className="text-muted-foreground">Supply: </span>
                            <span className="font-medium">{item.supply}%</span>
                          </div>
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="text-lg font-bold">{formatINR(item.price)}/ton</div>
                        <Badge variant={item.demand > item.supply ? "default" : "secondary"}>
                          {item.demand > item.supply ? "High Demand" : "Balanced"}
                        </Badge>
                      </div>
                    </div>
                  ))}
                </div>

                <ResponsiveContainer width="100%" height={300}>
                  <BarChart data={demandData}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="crop" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Bar dataKey="demand" fill="#8884d8" name="Demand %" />
                    <Bar dataKey="supply" fill="#82ca9d" name="Supply %" />
                  </BarChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="trends">
            <div className="space-y-6">
              {marketTrends.map((category, categoryIndex) => {
                const Icon = getTrendIcon(category.trend);
                const colorClass = getTrendColor(category.trend);
                
                return (
                  <Card key={categoryIndex}>
                    <CardHeader>
                      <CardTitle className="flex items-center space-x-2">
                        <Icon className={`h-5 w-5 ${colorClass}`} />
                        <span>{category.category}</span>
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                        {category.crops.map((crop, cropIndex) => (
                          <div key={cropIndex} className="p-4 border border-border rounded-lg space-y-3">
                            <div className="flex items-center justify-between">
                              <h4 className="font-semibold">{crop.name}</h4>
                              <Badge variant={category.trend === 'up' ? 'default' : category.trend === 'down' ? 'destructive' : 'secondary'}>
                                {crop.growth}
                              </Badge>
                            </div>
                            <div className="text-sm">
                              <p className="font-medium text-primary">{crop.price}</p>
                              <p className="text-muted-foreground mt-2">{crop.reason}</p>
                            </div>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </TabsContent>

          <TabsContent value="exports">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Globe className="h-5 w-5 text-primary" />
                  <span>Export Opportunities</span>
                </CardTitle>
                <CardDescription>
                  High-potential international markets for agricultural exports
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {exportOpportunities.map((opportunity, index) => (
                    <div key={index} className="p-6 border border-border rounded-lg space-y-4">
                      <div className="flex items-center justify-between">
                        <h4 className="text-lg font-semibold">{opportunity.crop}</h4>
                        <Badge variant={getOpportunityColor(opportunity.opportunity)}>
                          {opportunity.opportunity} Opportunity
                        </Badge>
                      </div>
                      
                      <div className="space-y-2">
                        <div className="flex items-center justify-between">
                          <span className="text-sm text-muted-foreground">Destination:</span>
                          <span className="font-medium">{opportunity.destination}</span>
                        </div>
                        <div className="flex items-center justify-between">
                          <span className="text-sm text-muted-foreground">Price:</span>
                          <span className="font-medium text-primary">{opportunity.price}</span>
                        </div>
                        <div className="flex items-center justify-between">
                          <span className="text-sm text-muted-foreground">Volume:</span>
                          <span className="font-medium">{opportunity.volume}</span>
                        </div>
                        <div className="flex items-center justify-between">
                          <span className="text-sm text-muted-foreground">Trend:</span>
                          <div className="flex items-center space-x-1">
                            {opportunity.trend === 'increasing' || opportunity.trend === 'growing' ? (
                              <TrendingUp className="h-4 w-4 text-success" />
                            ) : (
                              <Target className="h-4 w-4 text-muted-foreground" />
                            )}
                            <span className="font-medium capitalize">{opportunity.trend}</span>
                          </div>
                        </div>
                      </div>
                      
                      <div className="pt-3 border-t border-border">
                        <div className="flex items-center space-x-2 text-sm">
                          {opportunity.opportunity === 'High' ? (
                            <CheckCircle className="h-4 w-4 text-success" />
                          ) : (
                            <AlertCircle className="h-4 w-4 text-yellow-500" />
                          )}
                          <span className="text-muted-foreground">
                            {opportunity.opportunity === 'High' 
                              ? 'Excellent market conditions and strong demand'
                              : 'Moderate opportunity with stable demand'
                            }
                          </span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default MarketInsights;