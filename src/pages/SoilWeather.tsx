import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { 
  CloudSun, 
  Droplets, 
  Thermometer, 
  Wind, 
  MapPin, 
  Beaker,
  TrendingUp,
  TrendingDown
} from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const SoilWeather = () => {
  const [location, setLocation] = useState("");
  const [weatherData, setWeatherData] = useState<any>(null);
  const [soilData, setSoilData] = useState<any>(null);
  const [loading, setLoading] = useState(false);
  const { toast } = useToast();

  const fetchWeatherData = async () => {
    if (!location.trim()) {
      toast({
        title: "Location required",
        description: "Please enter a location to fetch weather data",
        variant: "destructive",
      });
      return;
    }

    setLoading(true);
    
    // Simulate API call
    setTimeout(() => {
      setWeatherData({
        location: location,
        current: {
          temperature: 24,
          humidity: 65,
          windSpeed: 8,
          rainfall: 2.3,
          condition: "Partly Cloudy"
        },
        forecast: [
          { day: "Today", temp: 24, humidity: 65, rainfall: 2.3, condition: "Partly Cloudy" },
          { day: "Tomorrow", temp: 26, humidity: 58, rainfall: 0, condition: "Sunny" },
          { day: "Day 3", temp: 22, humidity: 72, rainfall: 5.1, condition: "Light Rain" },
          { day: "Day 4", temp: 25, humidity: 60, rainfall: 0, condition: "Sunny" },
          { day: "Day 5", temp: 23, humidity: 68, rainfall: 1.2, condition: "Cloudy" },
        ]
        
      });

      setSoilData({
        ph: 6.8,
        nitrogen: 45,
        phosphorus: 32,
        potassium: 28,
        organicMatter: 3.2,
        moisture: 68,
        temperature: 18,
        recommendations: [
          "Soil pH is optimal for most crops",
          "Consider nitrogen supplementation for heavy feeders",
          "Phosphorus levels are adequate",
          "Potassium could be increased by 15%"
        ]
      });

      setLoading(false);
      toast({
        title: "Data fetched successfully",
        description: "Weather and soil analysis completed",
      });
    }, 1500);
  };

  const getStatusColor = (value: number, optimal: [number, number]) => {
    if (value >= optimal[0] && value <= optimal[1]) return "default";
    return "secondary";
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-foreground mb-2">
            Soil & Weather Analysis
          </h1>
          <p className="text-muted-foreground">
            Get real-time weather data and comprehensive soil health insights
          </p>
        </div>

        {/* Location Input */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <MapPin className="h-5 w-5 text-primary" />
              <span>Location</span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex space-x-4">
              <div className="flex-1">
                <Label htmlFor="location">Enter farm location</Label>
                <Input
                  id="location"
                  value={location}
                  onChange={(e) => setLocation(e.target.value)}
                  placeholder="e.g., Iowa, USA or coordinates"
                  className="mt-1"
                />
              </div>
              <Button 
                onClick={fetchWeatherData}
                disabled={loading}
                className="mt-6"
              >
                {loading ? "Fetching..." : "Analyze"}
              </Button>
            </div>
          </CardContent>
        </Card>

        {weatherData && (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Weather Analysis */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <CloudSun className="h-5 w-5 text-primary" />
                  <span>Weather Forecast</span>
                </CardTitle>
                <CardDescription>
                  7-day weather outlook for {weatherData.location}
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                {/* Current Weather */}
                <div className="p-4 bg-accent rounded-lg">
                  <div className="flex items-center justify-between mb-2">
                    <h4 className="font-semibold">Current Conditions</h4>
                    <Badge variant="outline">{weatherData.current.condition}</Badge>
                  </div>
                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div className="flex items-center space-x-2">
                      <Thermometer className="h-4 w-4 text-orange-500" />
                      <span>{weatherData.current.temperature}°C</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Droplets className="h-4 w-4 text-blue-500" />
                      <span>{weatherData.current.humidity}%</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Wind className="h-4 w-4 text-gray-500" />
                      <span>{weatherData.current.windSpeed} km/h</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <CloudSun className="h-4 w-4 text-blue-400" />
                      <span>{weatherData.current.rainfall}mm</span>
                    </div>
                  </div>
                </div>

                <Separator />

                {/* 5-Day Forecast */}
                <div>
                  <h4 className="font-semibold mb-3">5-Day Forecast</h4>
                  <div className="space-y-2">
                    {weatherData.forecast.map((day: any, index: number) => (
                      <div key={index} className="flex items-center justify-between p-2 hover:bg-accent rounded">
                        <span className="text-sm font-medium">{day.day}</span>
                        <div className="flex items-center space-x-4 text-sm">
                          <span>{day.temp}°C</span>
                          <span className="text-muted-foreground">{day.humidity}%</span>
                          <span className="text-blue-500">{day.rainfall}mm</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Soil Analysis */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Beaker className="h-5 w-5 text-primary" />
                  <span>Soil Health Analysis</span>
                </CardTitle>
                <CardDescription>
                  Comprehensive soil parameter analysis
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                {/* Soil Metrics */}
                <div className="grid grid-cols-1 gap-3">
                  <div className="flex items-center justify-between p-3 bg-accent rounded">
                    <span className="text-sm font-medium">pH Level</span>
                    <div className="flex items-center space-x-2">
                      <span className="font-semibold">{soilData.ph}</span>
                      <Badge variant={getStatusColor(soilData.ph, [6.0, 7.5])}>
                        {soilData.ph >= 6.0 && soilData.ph <= 7.5 ? "Optimal" : "Needs attention"}
                      </Badge>
                    </div>
                  </div>

                  <div className="flex items-center justify-between p-3 bg-accent rounded">
                    <span className="text-sm font-medium">Nitrogen (N)</span>
                    <div className="flex items-center space-x-2">
                      <span className="font-semibold">{soilData.nitrogen} ppm</span>
                      <Badge variant={getStatusColor(soilData.nitrogen, [40, 60])}>
                        {soilData.nitrogen >= 40 && soilData.nitrogen <= 60 ? "Good" : "Low"}
                      </Badge>
                    </div>
                  </div>

                  <div className="flex items-center justify-between p-3 bg-accent rounded">
                    <span className="text-sm font-medium">Phosphorus (P)</span>
                    <div className="flex items-center space-x-2">
                      <span className="font-semibold">{soilData.phosphorus} ppm</span>
                      <Badge variant={getStatusColor(soilData.phosphorus, [25, 50])}>
                        {soilData.phosphorus >= 25 && soilData.phosphorus <= 50 ? "Good" : "Low"}
                      </Badge>
                    </div>
                  </div>

                  <div className="flex items-center justify-between p-3 bg-accent rounded">
                    <span className="text-sm font-medium">Potassium (K)</span>
                    <div className="flex items-center space-x-2">
                      <span className="font-semibold">{soilData.potassium} ppm</span>
                      <Badge variant={getStatusColor(soilData.potassium, [30, 50])}>
                        {soilData.potassium >= 30 && soilData.potassium <= 50 ? "Good" : "Low"}
                      </Badge>
                    </div>
                  </div>

                  <div className="flex items-center justify-between p-3 bg-accent rounded">
                    <span className="text-sm font-medium">Organic Matter</span>
                    <div className="flex items-center space-x-2">
                      <span className="font-semibold">{soilData.organicMatter}%</span>
                      <Badge variant={getStatusColor(soilData.organicMatter, [2.5, 5.0])}>
                        {soilData.organicMatter >= 2.5 ? "Good" : "Low"}
                      </Badge>
                    </div>
                  </div>

                  <div className="flex items-center justify-between p-3 bg-accent rounded">
                    <span className="text-sm font-medium">Moisture</span>
                    <div className="flex items-center space-x-2">
                      <span className="font-semibold">{soilData.moisture}%</span>
                      <Badge variant="secondary">
                        {soilData.moisture >= 60 ? "Adequate" : "Low"}
                      </Badge>
                    </div>
                  </div>
                </div>

                <Separator />

                {/* Recommendations */}
                <div>
                  <h4 className="font-semibold mb-3">AI Recommendations</h4>
                  <ul className="space-y-2">
                    {soilData.recommendations.map((rec: string, index: number) => (
                      <li key={index} className="text-sm text-muted-foreground flex items-start space-x-2">
                        <TrendingUp className="h-4 w-4 text-success mt-0.5 flex-shrink-0" />
                        <span>{rec}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </CardContent>
            </Card>
          </div>
        )}
      </div>
    </div>
  );
};

export default SoilWeather;