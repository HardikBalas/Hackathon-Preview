import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Separator } from "@/components/ui/separator";
import { 
  DollarSign, 
  Plus, 
  TrendingUp, 
  TrendingDown, 
  Droplets, 
  Beaker,
  Sprout,
  Calendar,
  Calculator
} from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const ResourceManagement = () => {
  // Exchange rate USD to INR (approximately 83.5 as of current rates)
  const exchangeRate = 83.5;

  const [inputs, setInputs] = useState({
    seeds: 0,
    fertilizer: 0,
    water: 0,
    labor: 0,
    equipment: 0
  });

  const { toast } = useToast();

  const resourceData = [
    {
      category: "Seeds",
      icon: Sprout,
      items: [
        { name: "Wheat Seeds (Premium)", quantity: 0, unit: "kg", costPerUnit: 0, total: 0 },
        { name: "Corn Seeds (Hybrid)", quantity: 0, unit: "kg", costPerUnit: 0, total: 0 },
        { name: "Rice Seeds (High Yield)", quantity: 0, unit: "kg", costPerUnit: 0, total: 0 }
      ]
    },
    {
      category: "Fertilizers",
      icon: Beaker,
      items: [
        { name: "NPK 15-15-15", quantity: 0, unit: "kg", costPerUnit: 0, total: 0 },
        { name: "Urea (46% N)", quantity: 0, unit: "kg", costPerUnit: 0, total: 0 },
        { name: "Phosphate Rock", quantity: 0, unit: "kg", costPerUnit: 0, total: 0 }
      ]
    },
    {
      category: "Water & Irrigation",
      icon: Droplets,
      items: [
        { name: "Irrigation Water", quantity: 0, unit: "cubic meters", costPerUnit: 0, total: 0 },
        { name: "Drip Irrigation Maintenance", quantity: 0, unit: "season", costPerUnit: 0, total: 0 },
        { name: "Pump Operation", quantity: 0, unit: "hours", costPerUnit: 0, total: 0 }
      ]
    },
    {
      category: "Labor",
      icon: Calendar,
      items: [
        { name: "Planting & Seeding", quantity: 0, unit: "hours", costPerUnit: 0, total: 0 },
        { name: "Harvesting", quantity: 0, unit: "hours", costPerUnit: 0, total: 0 },
        { name: "General Maintenance", quantity: 0, unit: "hours", costPerUnit: 0, total: 0 }
      ]
    }
  ];

  const totalCosts = resourceData.reduce((total, category) => 
    total + category.items.reduce((catTotal, item) => catTotal + item.total, 0), 0
  );

  const expectedRevenue = 0; // Example revenue in INR
  const roi = ((expectedRevenue - totalCosts) / totalCosts * 100).toFixed(1);

  const addResource = (category: string) => {
    toast({
      title: "Resource Added",
      description: `New ${category.toLowerCase()} resource has been added to your inventory`,
    });
  };

  const handleInputChange = (field: string, value: string) => {
    setInputs(prev => ({
      ...prev,
      [field]: parseFloat(value) || 0
    }));
  };

  const calculateProjectedCost = () => {
    const total = Object.values(inputs).reduce((sum, value) => sum + value, 0);
    return total;
  };

  const formatINR = (amount) => {
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
      maximumFractionDigits: 0,
    }).format(amount);
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-foreground mb-2">
            Resource Management
          </h1>
          <p className="text-muted-foreground">
            Track input costs, calculate ROI, and optimize resource allocation (All prices in INR)
          </p>
        </div>

        {/* Financial Overview */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-muted-foreground">Total Costs</p>
                  <h3 className="text-2xl font-bold">{formatINR(totalCosts)}</h3>
                </div>
                <DollarSign className="h-8 w-8 text-destructive" />
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-muted-foreground">Expected Revenue</p>
                  <h3 className="text-2xl font-bold">{formatINR(expectedRevenue)}</h3>
                </div>
                <TrendingUp className="h-8 w-8 text-success" />
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-muted-foreground">Net Profit</p>
                  <h3 className="text-2xl font-bold">{formatINR(expectedRevenue - totalCosts)}</h3>
                </div>
                <Calculator className="h-8 w-8 text-primary" />
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-muted-foreground">ROI</p>
                  <h3 className="text-2xl font-bold">{roi}%</h3>
                </div>
                {parseFloat(roi) > 0 ? (
                  <TrendingUp className="h-8 w-8 text-success" />
                ) : (
                  <TrendingDown className="h-8 w-8 text-destructive" />
                )}
              </div>
            </CardContent>
          </Card>
        </div>

        <Tabs defaultValue="tracking" className="space-y-6">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="tracking">Cost Tracking</TabsTrigger>
            <TabsTrigger value="calculator">ROI Calculator</TabsTrigger>
          </TabsList>

          <TabsContent value="tracking" className="space-y-6">
            {/* Resource Categories */}
            {resourceData.map((category, categoryIndex) => {
              const Icon = category.icon;
              const categoryTotal = category.items.reduce((sum, item) => sum + item.total, 0);
              
              return (
                <Card key={categoryIndex}>
                  <CardHeader>
                    <div className="flex items-center justify-between">
                      <CardTitle className="flex items-center space-x-2">
                        <Icon className="h-5 w-5 text-primary" />
                        <span>{category.category}</span>
                      </CardTitle>
                      <div className="flex items-center space-x-2">
                        <Badge variant="secondary">
                          Total: {formatINR(categoryTotal)}
                        </Badge>
                        <Button 
                          size="sm" 
                          variant="outline"
                          onClick={() => addResource(category.category)}
                        >
                          <Plus className="h-4 w-4 mr-1" />
                          Add
                        </Button>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      {category.items.map((item, itemIndex) => (
                        <div key={itemIndex} className="flex items-center justify-between p-3 bg-accent rounded-lg">
                          <div className="flex-1">
                            <h4 className="font-medium text-sm">{item.name}</h4>
                            <p className="text-xs text-muted-foreground">
                              {item.quantity} {item.unit} × ₹{item.costPerUnit.toFixed(0)}/{item.unit}
                            </p>
                          </div>
                          <div className="text-right">
                            <p className="font-semibold">{formatINR(item.total)}</p>
                            <p className="text-xs text-muted-foreground">
                              {((item.total / totalCosts) * 100).toFixed(1)}% of total
                            </p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </TabsContent>

          <TabsContent value="calculator" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Project Cost Calculator</CardTitle>
                <CardDescription>
                  Calculate projected costs and ROI for new farming projects (Enter amounts in INR)
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-4">
                    <div>
                      <Label htmlFor="seeds">Seeds Cost (₹)</Label>
                      <Input
                        id="seeds"
                        type="number"
                        placeholder="0"
                        value={inputs.seeds || ''}
                        onChange={(e) => handleInputChange('seeds', e.target.value)}
                      />
                    </div>
                    
                    <div>
                      <Label htmlFor="fertilizer">Fertilizer Cost (₹)</Label>
                      <Input
                        id="fertilizer"
                        type="number"
                        placeholder="0"
                        value={inputs.fertilizer || ''}
                        onChange={(e) => handleInputChange('fertilizer', e.target.value)}
                      />
                    </div>
                    
                    <div>
                      <Label htmlFor="water">Water & Irrigation (₹)</Label>
                      <Input
                        id="water"
                        type="number"
                        placeholder="0"
                        value={inputs.water || ''}
                        onChange={(e) => handleInputChange('water', e.target.value)}
                      />
                    </div>
                  </div>

                  <div className="space-y-4">
                    <div>
                      <Label htmlFor="labor">Labor Cost (₹)</Label>
                      <Input
                        id="labor"
                        type="number"
                        placeholder="0"
                        value={inputs.labor || ''}
                        onChange={(e) => handleInputChange('labor', e.target.value)}
                      />
                    </div>
                    
                    <div>
                      <Label htmlFor="equipment">Equipment & Machinery (₹)</Label>
                      <Input
                        id="equipment"
                        type="number"
                        placeholder="0"
                        value={inputs.equipment || ''}
                        onChange={(e) => handleInputChange('equipment', e.target.value)}
                      />
                    </div>

                    <div className="p-4 bg-accent rounded-lg">
                      <h4 className="font-semibold mb-2">Projected Total Cost</h4>
                      <p className="text-2xl font-bold text-primary">
                        {formatINR(calculateProjectedCost())}
                      </p>
                    </div>
                  </div>
                </div>

                <Separator />

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="text-center p-4 bg-accent rounded-lg">
                    <h4 className="font-semibold text-sm text-muted-foreground">Cost per Hectare</h4>
                    <p className="text-xl font-bold">{formatINR(calculateProjectedCost() / 10)}</p>
                    <p className="text-xs text-muted-foreground">Based on 10 hectares</p>
                  </div>
                  
                  <div className="text-center p-4 bg-accent rounded-lg">
                    <h4 className="font-semibold text-sm text-muted-foreground">Break-even Yield</h4>
                    <p className="text-xl font-bold">3.2 T/Ha</p>
                    <p className="text-xs text-muted-foreground">At ₹33,400/ton</p>
                  </div>
                  
                  <div className="text-center p-4 bg-accent rounded-lg">
                    <h4 className="font-semibold text-sm text-muted-foreground">Profit Margin</h4>
                    <p className="text-xl font-bold">28%</p>
                    <p className="text-xs text-muted-foreground">At 4.5 T/Ha yield</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default ResourceManagement;