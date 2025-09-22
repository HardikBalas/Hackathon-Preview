import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";
import { 
  TrendingUp, 
  CloudSun, 
  Sprout, 
  BarChart3, 
  ArrowRight,
  CheckCircle,
  Users,
  Award,
  Globe
} from "lucide-react";
import heroImage from "@/assets/hero-farming.jpg";
import cropField from "@/assets/crop-field.jpg";
import aiDashboard from "@/assets/ai-dashboard.jpg";
import soilHealth from "@/assets/soil-health.jpg";

const Index = () => {
  const features = [
    {
      icon: TrendingUp,
      title: "AI Crop Yield Prediction",
      description: "Advanced machine learning algorithms analyze soil data, weather patterns, and historical yields to predict crop performance with 90%+ accuracy.",
      link: "/prediction",
      image: aiDashboard
    },
    {
      icon: CloudSun,
      title: "Soil & Weather Analysis",
      description: "Real-time monitoring of soil health parameters and weather conditions to optimize farming decisions and resource allocation.",
      link: "/soil-weather",
      image: soilHealth
    },
    {
      icon: Sprout,
      title: "Smart Crop Recommendations",
      description: "Get personalized crop suggestions based on your soil type, climate conditions, and current market trends for maximum profitability.",
      link: "/recommendations",
      image: cropField
    },
    {
      icon: BarChart3,
      title: "Market Insights & Analytics",
      description: "Access comprehensive market data, pricing trends, and export opportunities to make informed business decisions.",
      link: "/market",
      image: aiDashboard
    }
  ];

  const stats = [
    { number: "90%+", label: "Prediction Accuracy", icon: Award },
    { number: "10K+", label: "Active Farmers", icon: Users },
    { number: "25%", label: "Average Yield Increase", icon: TrendingUp },
    { number: "50+", label: "Countries Served", icon: Globe }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src={heroImage} 
            alt="Smart farming landscape" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-background/70 backdrop-blur-sm"></div>
        </div>
        
        <div className="relative z-10 container mx-auto px-4 text-center">
          <Badge variant="secondary" className="mb-4 px-4 py-2">
            🌱 AI-Powered Agriculture Platform
          </Badge>
          
          <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6 leading-tight">
            AI-Powered Farming for{" "}
            <span className="text-primary">Smarter Harvests</span>
          </h1>
          
          <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed">
            Transform your farming operations with cutting-edge AI technology. 
            Predict yields, optimize resources, and maximize profits with data-driven insights.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="px-8 py-6 text-lg" asChild>
              <Link to="/prediction">
                Start Predicting Yields
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button variant="outline" size="lg" className="px-8 py-6 text-lg" asChild>
              <Link to="/dashboard">
                View Dashboard
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-accent/50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <div key={index} className="text-center">
                  <div className="mb-4 flex justify-center">
                    <div className="p-3 bg-primary rounded-lg">
                      <Icon className="h-6 w-6 text-primary-foreground" />
                    </div>
                  </div>
                  <h3 className="text-3xl font-bold text-foreground mb-2">{stat.number}</h3>
                  <p className="text-muted-foreground">{stat.label}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Complete Agricultural Intelligence Platform
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Everything you need to make data-driven farming decisions and optimize your agricultural operations
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <Card key={index} className="group hover:shadow-lg transition-all duration-300 border-2 hover:border-primary/20">
                  <div className="aspect-video overflow-hidden rounded-t-lg">
                    <img 
                      src={feature.image} 
                      alt={feature.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <CardHeader>
                    <div className="flex items-center space-x-3">
                      <div className="p-2 bg-primary/10 rounded-lg">
                        <Icon className="h-6 w-6 text-primary" />
                      </div>
                      <CardTitle className="text-xl">{feature.title}</CardTitle>
                    </div>
                    <CardDescription className="text-base leading-relaxed">
                      {feature.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <Button variant="outline" className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-colors" asChild>
                      <Link to={feature.link}>
                        Explore Feature
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-accent/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Why Choose AgriAI?
              </h2>
              <p className="text-xl text-muted-foreground">
                Join thousands of farmers who are already increasing their yields and profits
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-6">
                {[
                  "Increase crop yields by up to 25% with AI predictions",
                  "Reduce resource waste and optimize input costs",
                  "Make data-driven decisions with real-time insights",
                  "Access global market trends and pricing data",
                  "Get personalized recommendations for your farm",
                  "Monitor and improve soil health continuously"
                ].map((benefit, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <CheckCircle className="h-6 w-6 text-success mt-0.5 flex-shrink-0" />
                    <span className="text-foreground">{benefit}</span>
                  </div>
                ))}
              </div>

              <div className="flex items-center justify-center">
                <img 
                  src={cropField} 
                  alt="Thriving crop field" 
                  className="rounded-lg shadow-lg max-w-full h-auto"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Transform Your Farm?
          </h2>
          <p className="text-xl opacity-90 mb-8 max-w-2xl mx-auto">
            Start using AI-powered insights today and see immediate improvements in your crop yields and profits.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" className="px-8 py-6 text-lg" asChild>
              <Link to="/prediction">
                Get Started Free
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button size="lg" variant="outline" className="px-8 py-6 text-lg border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary" asChild>
              <Link to="/dashboard">
                View Demo
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
