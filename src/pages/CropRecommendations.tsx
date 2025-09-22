import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  Sprout, 
  Clock, 
  TrendingUp, 
  Droplets, 
  Thermometer,
  DollarSign,
  Star
} from "lucide-react";

const CropRecommendations = () => {
  const [selectedSoilType, setSelectedSoilType] = useState("loamy");
  
  // Exchange rate USD to INR (approximately 83.5)
  const exchangeRate = 83.5;

  const formatINR = (amount) => {
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
      maximumFractionDigits: 0,
    }).format(amount);
  };
  
  const cropCategories = {
    cereals: [
      {
        name: "Wheat",
        image: "🌾",
        growthPeriod: "120-150 days",
        yield: "4.5 tons/hectare",
        marketPrice: `${formatINR(280 * exchangeRate)}/ton`,
        soilTypes: ["loamy", "clay"],
        climate: ["temperate", "cool"],
        rating: 4.5,
        benefits: ["High market demand", "Good storage life", "Multiple uses"]
      },
      {
        name: "Corn",
        image: "🌽",
        growthPeriod: "90-120 days", 
        yield: "8.2 tons/hectare",
        marketPrice: `${formatINR(220 * exchangeRate)}/ton`,
        soilTypes: ["loamy", "sandy"],
        climate: ["warm", "temperate"],
        rating: 4.8,
        benefits: ["High yield potential", "Versatile crop", "Good feed value"]
      },
      {
        name: "Rice",
        image: "🌾",
        growthPeriod: "120-180 days",
        yield: "6.8 tons/hectare", 
        marketPrice: `${formatINR(450 * exchangeRate)}/ton`,
        soilTypes: ["clay", "loamy"],
        climate: ["tropical", "subtropical"],
        rating: 4.3,
        benefits: ["Stable market", "High nutrition", "Water efficient varieties"]
      }
    ],
    vegetables: [
      {
        name: "Tomatoes",
        image: "🍅",
        growthPeriod: "70-90 days",
        yield: "45 tons/hectare",
        marketPrice: `${formatINR(800 * exchangeRate)}/ton`,
        soilTypes: ["loamy", "sandy"],
        climate: ["warm", "temperate"],
        rating: 4.6,
        benefits: ["High value crop", "Year-round demand", "Processing options"]
      },
      {
        name: "Potatoes",
        image: "🥔",
        growthPeriod: "90-120 days",
        yield: "35 tons/hectare",
        marketPrice: `${formatINR(350 * exchangeRate)}/ton`,
        soilTypes: ["sandy", "loamy"],
        climate: ["cool", "temperate"],
        rating: 4.4,
        benefits: ["Long storage life", "Multiple varieties", "Steady demand"]
      },
      {
        name: "Carrots",
        image: "🥕",
        growthPeriod: "70-80 days",
        yield: "28 tons/hectare",
        marketPrice: `${formatINR(650 * exchangeRate)}/ton`,
        soilTypes: ["sandy", "loamy"],
        climate: ["cool", "temperate"],
        rating: 4.2,
        benefits: ["Health food trend", "Good export potential", "Processing value"]
      }
    ],
    fruits: [
      {
        name: "Apples",
        image: "🍎", 
        growthPeriod: "2-3 years to bearing",
        yield: "25 tons/hectare",
        marketPrice: `${formatINR(1200 * exchangeRate)}/ton`,
        soilTypes: ["loamy", "clay"],
        climate: ["cool", "temperate"],
        rating: 4.7,
        benefits: ["Premium pricing", "Long productive life", "Export opportunities"]
      },
      {
        name: "Strawberries",
        image: "🍓",
        growthPeriod: "60-90 days",
        yield: "15 tons/hectare",
        marketPrice: `${formatINR(2500 * exchangeRate)}/ton`,
        soilTypes: ["sandy", "loamy"],
        climate: ["temperate", "cool"],
        rating: 4.9,
        benefits: ["Highest value per hectare", "Quick returns", "Premium market"]
      }
    ]
  };

  const soilTypes = [
    { key: "sandy", label: "Sandy Soil", description: "Well-draining, low fertility" },
    { key: "loamy", label: "Loamy Soil", description: "Balanced, fertile, ideal for most crops" },
    { key: "clay", label: "Clay Soil", description: "Water-retentive, high fertility" }
  ];

  const climateTypes = [
    { key: "tropical", label: "Tropical", description: "Hot, humid year-round" },
    { key: "subtropical", label: "Subtropical", description: "Warm with mild winters" },
    { key: "temperate", label: "Temperate", description: "Moderate seasons" },
    { key: "cool", label: "Cool", description: "Cold winters, mild summers" },
    { key: "warm", label: "Warm", description: "Warm temperatures year-round" }
  ];

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star
        key={i}
        className={`h-4 w-4 ${
          i < Math.floor(rating) 
            ? "text-yellow-400 fill-current" 
            : i < rating 
            ? "text-yellow-400 fill-current opacity-50"
            : "text-gray-300"
        }`}
      />
    ));
  };

  const CropCard = ({ crop }: { crop: any }) => (
    <Card className="hover:shadow-lg transition-shadow">
      <CardHeader className="pb-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <span className="text-3xl">{crop.image}</span>
            <div>
              <CardTitle className="text-lg">{crop.name}</CardTitle>
              <div className="flex items-center space-x-1 mt-1">
                {renderStars(crop.rating)}
                <span className="text-sm text-muted-foreground ml-1">
                  ({crop.rating})
                </span>
              </div>
            </div>
          </div>
          <Badge variant="secondary">{crop.marketPrice}</Badge>
        </div>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="grid grid-cols-2 gap-4 text-sm">
          <div className="flex items-center space-x-2">
            <Clock className="h-4 w-4 text-muted-foreground" />
            <span>{crop.growthPeriod}</span>
          </div>
          <div className="flex items-center space-x-2">
            <TrendingUp className="h-4 w-4 text-muted-foreground" />
            <span>{crop.yield}</span>
          </div>
        </div>
        
        <div>
          <p className="text-sm font-medium mb-2">Suitable for:</p>
          <div className="flex flex-wrap gap-1">
            {crop.soilTypes.map((soil: string) => (
              <Badge key={soil} variant="outline" className="text-xs">
                {soil}
              </Badge>
            ))}
            {crop.climate.map((climate: string) => (
              <Badge key={climate} variant="outline" className="text-xs">
                {climate}
              </Badge>
            ))}
          </div>
        </div>

        <div>
          <p className="text-sm font-medium mb-2">Key Benefits:</p>
          <ul className="text-xs text-muted-foreground space-y-1">
            {crop.benefits.slice(0, 2).map((benefit: string, index: number) => (
              <li key={index} className="flex items-start space-x-1">
                <span className="text-primary">•</span>
                <span>{benefit}</span>
              </li>
            ))}
          </ul>
        </div>

        <Button size="sm" className="w-full">
          Get Growing Guide
        </Button>
      </CardContent>
    </Card>
  );

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-foreground mb-2">
            Crop Recommendation System
          </h1>
          <p className="text-muted-foreground">
            AI-powered crop suggestions based on soil type, climate, and market trends (All prices in INR)
          </p>
        </div>

        {/* Filters */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Filter Recommendations</CardTitle>
            <CardDescription>
              Select your soil type and climate to get personalized recommendations
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-medium mb-3">Soil Type</h4>
                <div className="space-y-2">
                  {soilTypes.map((soil) => (
                    <label key={soil.key} className="flex items-center space-x-3 cursor-pointer">
                      <input
                        type="radio"
                        name="soilType"
                        value={soil.key}
                        checked={selectedSoilType === soil.key}
                        onChange={(e) => setSelectedSoilType(e.target.value)}
                        className="text-primary"
                      />
                      <div>
                        <span className="text-sm font-medium">{soil.label}</span>
                        <p className="text-xs text-muted-foreground">{soil.description}</p>
                      </div>
                    </label>
                  ))}
                </div>
              </div>

              <div>
                <h4 className="font-medium mb-3">Climate Zones</h4>
                <div className="grid grid-cols-1 gap-2">
                  {climateTypes.map((climate) => (
                    <div key={climate.key} className="p-2 bg-accent rounded text-sm">
                      <span className="font-medium">{climate.label}</span>
                      <span className="text-muted-foreground"> - {climate.description}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Crop Categories */}
        <Tabs defaultValue="cereals" className="space-y-6">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="cereals">Cereals & Grains</TabsTrigger>
            <TabsTrigger value="vegetables">Vegetables</TabsTrigger>
            <TabsTrigger value="fruits">Fruits</TabsTrigger>
          </TabsList>

          <TabsContent value="cereals" className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {cropCategories.cereals.map((crop, index) => (
                <CropCard key={index} crop={crop} />
              ))}
            </div>
          </TabsContent>

          <TabsContent value="vegetables" className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {cropCategories.vegetables.map((crop, index) => (
                <CropCard key={index} crop={crop} />
              ))}
            </div>
          </TabsContent>

          <TabsContent value="fruits" className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {cropCategories.fruits.map((crop, index) => (
                <CropCard key={index} crop={crop} />
              ))}
            </div>
          </TabsContent>
        </Tabs>

        {/* Market Trends */}
        <Card className="mt-8">
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <DollarSign className="h-5 w-5 text-primary" />
              <span>Current Market Trends</span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="p-4 bg-success/10 rounded-lg">
                <h4 className="font-semibold text-success mb-2">High Demand</h4>
                <p className="text-sm text-muted-foreground">
                  Organic vegetables, strawberries, and specialty grains showing strong market growth
                </p>
              </div>
              <div className="p-4 bg-yellow-500/10 rounded-lg">
                <h4 className="font-semibold text-yellow-600 mb-2">Stable Prices</h4>
                <p className="text-sm text-muted-foreground">
                  Wheat, corn, and rice maintaining consistent pricing with good export opportunities
                </p>
              </div>
              <div className="p-4 bg-blue-500/10 rounded-lg">
                <h4 className="font-semibold text-blue-600 mb-2">Emerging Markets</h4>
                <p className="text-sm text-muted-foreground">
                  Plant-based proteins and climate-resilient crops gaining market traction
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default CropRecommendations;