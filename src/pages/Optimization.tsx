import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Progress } from "@/components/ui/progress";
import { 
  Sprout, 
  Droplets, 
  Beaker, 
  Clock, 
  TrendingUp, 
  CheckCircle,
  AlertTriangle,
  Calendar,
  Lightbulb
} from "lucide-react";

const Optimization = () => {
  // Exchange rate USD to INR (approximately 83.5)
  const exchangeRate = 83.5;

  const formatINR = (amount) => {
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
      maximumFractionDigits: 0,
    }).format(amount);
  };

  const optimizationSuggestions = [
    {
      category: "Fertilizer Management",
      icon: Beaker,
      priority: "High",
      suggestions: [
        {
          title: "Increase Phosphorus Application",
          description: "Based on soil analysis, increase phosphorus fertilizer by 15% for optimal crop growth",
          impact: "Expected yield increase: 8-12%",
          timeline: "Apply within next 2 weeks",
          cost: `${formatINR(45 * exchangeRate)}/hectare`,
          confidence: 89
        },
        {
          title: "Optimize Nitrogen Timing",
          description: "Split nitrogen application into 3 doses for better nutrient uptake efficiency",
          impact: "Reduce nitrogen loss by 25%",
          timeline: "Implement next growing season",
          cost: `${formatINR(15 * exchangeRate)}/hectare (labor)`,
          confidence: 92
        }
      ]
    },
    {
      category: "Irrigation Optimization",
      icon: Droplets,
      priority: "Medium",
      suggestions: [
        {
          title: "Smart Irrigation Scheduling",
          description: "Adjust irrigation based on soil moisture sensors and weather forecast",
          impact: "Water savings: 20-30%",
          timeline: "Immediate implementation",
          cost: `${formatINR(120 * exchangeRate)}/hectare (equipment)`,
          confidence: 85
        },
        {
          title: "Drip Irrigation Upgrade",
          description: "Convert to drip irrigation system for water-sensitive crops",
          impact: "40% water reduction, 15% yield increase",
          timeline: "Next planting season",
          cost: `${formatINR(800 * exchangeRate)}/hectare`,
          confidence: 78
        }
      ]
    },
    {
      category: "Planting & Harvesting",
      icon: Sprout,
      priority: "Medium",
      suggestions: [
        {
          title: "Optimal Planting Window",
          description: "Plant wheat between March 15-25 for maximum yield potential",
          impact: "Avoid late frost risk, optimize growth period",
          timeline: "Next planting season",
          cost: "No additional cost",
          confidence: 94
        },
        {
          title: "Harvest Timing Optimization",
          description: "Monitor crop maturity indicators for optimal harvest timing",
          impact: "Reduce crop losses by 5-8%",
          timeline: "Current season",
          cost: `${formatINR(25 * exchangeRate)}/hectare (monitoring)`,
          confidence: 87
        }
      ]
    }
  ];

  const resourceMetrics = [
    { 
      resource: "Water Usage Efficiency", 
      current: 78, 
      target: 85, 
      trend: "improving",
      unit: "%" 
    },
    { 
      resource: "Nutrient Use Efficiency", 
      current: 72, 
      target: 80, 
      trend: "stable",
      unit: "%" 
    },
    { 
      resource: "Energy Efficiency", 
      current: 65, 
      target: 75, 
      trend: "improving",
      unit: "%" 
    },
    { 
      resource: "Cost per Hectare", 
      current: Math.round(1240 * exchangeRate), 
      target: Math.round(1150 * exchangeRate), 
      trend: "declining",
      unit: "₹" 
    }
  ];

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case "High": return "destructive";
      case "Medium": return "secondary";
      case "Low": return "outline";
      default: return "secondary";
    }
  };

  const getPriorityIcon = (priority: string) => {
    switch (priority) {
      case "High": return AlertTriangle;
      case "Medium": return Clock;
      case "Low": return CheckCircle;
      default: return Clock;
    }
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-foreground mb-2">
            AI-Powered Optimization
          </h1>
          <p className="text-muted-foreground">
            Intelligent recommendations to maximize yield and resource efficiency (All costs in INR)
          </p>
        </div>

        {/* Resource Efficiency Overview */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <TrendingUp className="h-5 w-5 text-primary" />
              <span>Resource Efficiency Metrics</span>
            </CardTitle>
            <CardDescription>
              Track your farm's resource utilization and efficiency improvements
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {resourceMetrics.map((metric, index) => (
                <div key={index} className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium">{metric.resource}</span>
                    <Badge variant="outline" className="text-xs">
                      {metric.trend}
                    </Badge>
                  </div>
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="text-lg font-bold">
                        {metric.unit === "₹" ? formatINR(metric.current) : `${metric.current}${metric.unit}`}
                      </span>
                      <span className="text-sm text-muted-foreground">
                        Target: {metric.unit === "₹" ? formatINR(metric.target) : `${metric.target}${metric.unit}`}
                      </span>
                    </div>
                    <Progress 
                      value={metric.unit === "₹" ? (metric.target / metric.current) * 100 : (metric.current / metric.target) * 100} 
                      className="h-2"
                    />
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Optimization Suggestions */}
        <div className="space-y-6">
          {optimizationSuggestions.map((category, categoryIndex) => {
            const Icon = category.icon;
            const PriorityIcon = getPriorityIcon(category.priority);
            
            return (
              <Card key={categoryIndex}>
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <CardTitle className="flex items-center space-x-2">
                      <Icon className="h-5 w-5 text-primary" />
                      <span>{category.category}</span>
                    </CardTitle>
                    <Badge variant={getPriorityColor(category.priority)} className="flex items-center space-x-1">
                      <PriorityIcon className="h-3 w-3" />
                      <span>{category.priority} Priority</span>
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-6">
                    {category.suggestions.map((suggestion, suggestionIndex) => (
                      <div key={suggestionIndex} className="space-y-4">
                        <div className="flex items-start justify-between">
                          <div className="flex-1">
                            <h4 className="font-semibold text-foreground mb-2">
                              {suggestion.title}
                            </h4>
                            <p className="text-sm text-muted-foreground mb-3">
                              {suggestion.description}
                            </p>
                            
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
                              <div className="space-y-1">
                                <span className="font-medium text-success">Impact:</span>
                                <p className="text-muted-foreground">{suggestion.impact}</p>
                              </div>
                              <div className="space-y-1">
                                <span className="font-medium text-blue-600">Timeline:</span>
                                <p className="text-muted-foreground flex items-center space-x-1">
                                  <Calendar className="h-3 w-3" />
                                  <span>{suggestion.timeline}</span>
                                </p>
                              </div>
                              <div className="space-y-1">
                                <span className="font-medium text-orange-600">Cost:</span>
                                <p className="text-muted-foreground">{suggestion.cost}</p>
                              </div>
                            </div>
                          </div>
                          
                          <div className="ml-4 text-center">
                            <div className="text-sm text-muted-foreground mb-1">AI Confidence</div>
                            <div className="text-2xl font-bold text-primary">
                              {suggestion.confidence}%
                            </div>
                          </div>
                        </div>
                        
                        <div className="flex items-center space-x-3">
                          <Button size="sm" className="flex items-center space-x-1">
                            <CheckCircle className="h-4 w-4" />
                            <span>Accept Recommendation</span>
                          </Button>
                          <Button variant="outline" size="sm">
                            View Details
                          </Button>
                          <Button variant="ghost" size="sm">
                            Dismiss
                          </Button>
                        </div>
                        
                        {suggestionIndex < category.suggestions.length - 1 && (
                          <Separator className="mt-6" />
                        )}
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Implementation Guide */}
        <Card className="mt-8">
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <Lightbulb className="h-5 w-5 text-primary" />
              <span>Implementation Tips</span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold mb-3">Quick Wins (0-30 days)</h4>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-start space-x-2">
                    <CheckCircle className="h-4 w-4 text-success mt-0.5 flex-shrink-0" />
                    <span>Adjust current irrigation schedules based on weather data</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <CheckCircle className="h-4 w-4 text-success mt-0.5 flex-shrink-0" />
                    <span>Implement split nitrogen application for current crops</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <CheckCircle className="h-4 w-4 text-success mt-0.5 flex-shrink-0" />
                    <span>Monitor soil moisture levels more frequently</span>
                  </li>
                </ul>
              </div>
              
              <div>
                <h4 className="font-semibold mb-3">Long-term Improvements (3-12 months)</h4>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-start space-x-2">
                    <CheckCircle className="h-4 w-4 text-success mt-0.5 flex-shrink-0" />
                    <span>Install smart irrigation systems with sensors</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <CheckCircle className="h-4 w-4 text-success mt-0.5 flex-shrink-0" />
                    <span>Upgrade to precision fertilizer application equipment</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <CheckCircle className="h-4 w-4 text-success mt-0.5 flex-shrink-0" />
                    <span>Implement comprehensive soil testing program</span>
                  </li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Optimization;