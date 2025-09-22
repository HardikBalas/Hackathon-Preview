import { NavLink } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { 
  Leaf, 
  TrendingUp, 
  CloudSun, 
  Sprout,
  Settings,
  BarChart3,
  DollarSign,
  Home
} from "lucide-react";

const Navigation = () => {
  const navItems = [
    { to: "/", label: "Home", icon: Home },
    { to: "/prediction", label: "Yield Prediction", icon: TrendingUp },
    { to: "/soil-weather", label: "Soil & Weather", icon: CloudSun },
    { to: "/recommendations", label: "Crop Recommendations", icon: Sprout },
    { to: "/optimization", label: "Optimization", icon: Settings },
    { to: "/dashboard", label: "Dashboard", icon: BarChart3 },
    { to: "/resources", label: "Resources", icon: DollarSign },
    { to: "/market", label: "Market Insights", icon: Leaf },
  ];

  return (
    <nav className="bg-card border-b border-border sticky top-0 z-50 backdrop-blur-sm bg-card/95">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center space-x-2">
            <Leaf className="h-8 w-8 text-primary" />
            <span className="text-xl font-bold text-foreground">KisanSahay</span>
          </div>
          
          <div className="hidden md:flex items-center space-x-1">
            {navItems.map(({ to, label, icon: Icon }) => (
              <NavLink
                key={to}
                to={to}
                className={({ isActive }) =>
                  `px-3 py-2 rounded-md text-sm font-medium transition-colors flex items-center space-x-1 ${
                    isActive
                      ? "bg-primary text-primary-foreground"
                      : "text-muted-foreground hover:text-foreground hover:bg-accent"
                  }`
                }
              >
                <Icon className="h-4 w-4" />
                <span>{label}</span>
              </NavLink>
            ))}
          </div>
          
          <Button variant="outline" size="sm">
            Get Started
          </Button>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;