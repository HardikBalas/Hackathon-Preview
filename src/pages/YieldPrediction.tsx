import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import { Badge } from "@/components/ui/badge";
import { Upload, TrendingUp, AlertCircle, CheckCircle } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const YieldPrediction = () => {
  const [file, setFile] = useState<File | null>(null);
  const [prediction, setPrediction] = useState<any>(null);
  const [loading, setLoading] = useState(false);
  const { toast } = useToast();

  const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = event.target.files?.[0];
    if (selectedFile) {
      setFile(selectedFile);
      toast({
        title: "File uploaded",
        description: `${selectedFile.name} ready for analysis`,
      });
    }
  };

  const runPrediction = async () => {
    if (!file) {
      toast({
        title: "No file selected",
        description: "Please upload a CSV file with your crop data",
        variant: "destructive",
      });
      return;
    }

    setLoading(true);
    
    // Simulate API call
    setTimeout(() => {
      setPrediction({
        crop: "Wheat",
        predictedYield: 4.2,
        confidence: 87,
        factors: [
          { name: "Soil pH", value: "6.8", status: "optimal" },
          { name: "Nitrogen", value: "45 kg/ha", status: "good" },
          { name: "Rainfall", value: "650mm", status: "optimal" },
          { name: "Temperature", value: "22°C avg", status: "good" },
        ],
        recommendations: [
          "Consider increasing phosphorus fertilizer by 10%",
          "Optimal planting window: March 15-30",
          "Monitor for pest activity in week 8-12",
        ]
      });
      setLoading(false);
      toast({
        title: "Prediction Complete",
        description: "AI analysis has been generated successfully",
      });
    }, 2000);
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-foreground mb-2">
            AI Crop Yield Prediction
          </h1>
          <p className="text-muted-foreground">
            Upload your crop data and get accurate yield predictions powered by AI
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Upload Section */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Upload className="h-5 w-5 text-primary" />
                <span>Upload Crop Data</span>
              </CardTitle>
              <CardDescription>
                Upload CSV/Excel file with soil parameters, past yield data, and location information
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <Label htmlFor="file-upload">Select File</Label>
                <Input
                  id="file-upload"
                  type="file"
                  accept=".csv,.xlsx,.xls"
                  onChange={handleFileUpload}
                  className="mt-1"
                />
              </div>
              
              {file && (
                <div className="p-4 bg-accent rounded-lg">
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-success" />
                    <span className="text-sm font-medium">{file.name}</span>
                  </div>
                  <p className="text-xs text-muted-foreground mt-1">
                    {(file.size / 1024).toFixed(1)} KB
                  </p>
                </div>
              )}

              <Button 
                onClick={runPrediction} 
                disabled={!file || loading}
                className="w-full"
              >
                {loading ? "Analyzing..." : "Run Prediction"}
                <TrendingUp className="ml-2 h-4 w-4" />
              </Button>

              <div className="text-xs text-muted-foreground">
                <p className="font-medium mb-1">Required data columns:</p>
                <ul className="list-disc list-inside space-y-1">
                  <li>Soil pH, Nitrogen, Phosphorus, Potassium levels</li>
                  <li>Historical yield data (tons/hectare)</li>
                  <li>Location coordinates or region</li>
                  <li>Planting and harvest dates</li>
                </ul>
              </div>
            </CardContent>
          </Card>

          {/* Results Section */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <TrendingUp className="h-5 w-5 text-primary" />
                <span>Prediction Results</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              {!prediction ? (
                <div className="text-center py-8">
                  <AlertCircle className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
                  <p className="text-muted-foreground">
                    Upload data and run prediction to see results
                  </p>
                </div>
              ) : (
                <div className="space-y-6">
                  <div className="text-center">
                    <h3 className="text-2xl font-bold text-primary">
                      {prediction.predictedYield} tons/hectare
                    </h3>
                    <p className="text-muted-foreground">
                      Predicted yield for {prediction.crop}
                    </p>
                    <Badge variant="secondary" className="mt-2">
                      {prediction.confidence}% confidence
                    </Badge>
                  </div>

                  <Separator />

                  <div>
                    <h4 className="font-semibold mb-3">Key Factors</h4>
                    <div className="space-y-2">
                      {prediction.factors.map((factor: any, index: number) => (
                        <div key={index} className="flex items-center justify-between p-2 bg-accent rounded">
                          <span className="text-sm">{factor.name}</span>
                          <div className="flex items-center space-x-2">
                            <span className="text-sm font-medium">{factor.value}</span>
                            <Badge 
                              variant={factor.status === "optimal" ? "default" : "secondary"}
                              className="text-xs"
                            >
                              {factor.status}
                            </Badge>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  <Separator />

                  <div>
                    <h4 className="font-semibold mb-3">AI Recommendations</h4>
                    <ul className="space-y-2">
                      {prediction.recommendations.map((rec: string, index: number) => (
                        <li key={index} className="text-sm text-muted-foreground flex items-start space-x-2">
                          <CheckCircle className="h-4 w-4 text-success mt-0.5 flex-shrink-0" />
                          <span>{rec}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              )}
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default YieldPrediction;