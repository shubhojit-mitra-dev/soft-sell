"use client";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { particlesConfig } from "@/config/particles-config";
import type { Container } from "@tsparticles/engine";
import { tsParticles } from "@tsparticles/engine";
import { loadSlim } from "@tsparticles/slim";
import {
  ArrowRight,
  Check,
  DollarSign,
  ShieldCheck,
  Sparkles,
} from "lucide-react";
import { useEffect, useState } from "react";

export function HeroSection() {
  const [activeTab, setActiveTab] = useState("sell");
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  // Initialize particles
  useEffect(() => {
    let container: Container | undefined;

    const initParticles = async () => {
      await loadSlim(tsParticles);
      container = await tsParticles.load({
        id: "heroParticles",
        options: {
          ...particlesConfig,
          particles: {
            ...particlesConfig.particles,
            color: {
              value: "#808080",
            },
            number: {
              value: 25,
            },
            opacity: {
              value: 0.15,
            },
          },
        },
      });
    };

    initParticles();

    return () => {
      container?.destroy();
    };
  }, []);

  // Stats for the animated counter
  const [stats, setStats] = useState([
    { value: 0, target: 2500, label: "Active Users" },
    { value: 0, target: 15000, label: "Licenses Sold" },
    { value: 0, target: 98, label: "Satisfaction Rate", suffix: "%" },
  ]);

  // Animate the stats
  useEffect(() => {
    const interval = setInterval(() => {
      setStats((prev) =>
        prev.map((stat) => ({
          ...stat,
          value: Math.min(
            stat.value + Math.ceil(stat.target / 50),
            stat.target
          ),
        }))
      );
    }, 50);

    // Clear interval when all stats reach their target
    if (stats.every((stat) => stat.value === stat.target)) {
      clearInterval(interval);
    }

    return () => clearInterval(interval);
  }, [stats]);

  return (
    <section className="w-full min-h-screen bg-gradient-to-b from-background to-primary/5 flex items-center justify-center overflow-hidden relative py-16">
      <div id="heroParticles" className="absolute inset-0 -z-0" />
      {/* Background elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* <div className="absolute -top-40 -right-40 w-96 h-96 bg-primary/10 rounded-full blur-3xl" /> */}
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-secondary/10 rounded-full blur-3xl" />
      </div>

      <div className="container relative z-10 px-4 py-8 mx-auto">
        <div
          className={`flex flex-col items-center gap-8 transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          {/* Announcement badge */}
          <Badge
            variant="outline"
            className="px-4 py-1.5 bg-background/80 backdrop-blur border-primary/20 text-[12px] sm:text-sm font-medium mb-2"
          >
            <Sparkles className="h-3.5 w-3.5 mr-2 text-primary" />
            New platform launch! Save up to 60% on enterprise software
          </Badge>

          <div className="text-center max-w-3xl mx-auto space-y-4">
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl xl:text-6xl bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">
              Turn Unused Software into Real Value
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              SoftSell is the secure marketplace for businesses to buy and sell
              unused software licenses at incredible prices.
            </p>
          </div>

          <div className="w-full max-w-4xl mx-auto mt-6">
            <Tabs
              defaultValue="sell"
              className="w-full"
              value={activeTab}
              onValueChange={setActiveTab}
            >
              <TabsList className="grid grid-cols-2 w-full max-w-md mx-auto mb-8">
                <TabsTrigger value="sell">Sell Licenses</TabsTrigger>
                <TabsTrigger value="buy">Buy Licenses</TabsTrigger>
              </TabsList>

              <TabsContent value="sell" className="mt-0">
                <Card className="border border-primary/10 shadow-lg bg-background/70 backdrop-blur">
                  <CardContent className="p-6 lg:p-8">
                    <div className="grid lg:grid-cols-5 gap-8 items-center">
                      <div className="lg:col-span-3 space-y-4">
                        <h3 className="text-2xl font-semibold">
                          Convert idle licenses to cash
                        </h3>
                        <p className="text-muted-foreground">
                          List your unused enterprise software licenses on our
                          secure marketplace and turn sunk costs into revenue.
                        </p>
                        <ul className="space-y-2">
                          {[
                            "Instant verification system",
                            "Secure payment processing",
                            "Professional license transfer support",
                          ].map((item, i) => (
                            <li key={i} className="flex items-center gap-2">
                              <Check className="h-5 w-5 text-primary" />
                              <span>{item}</span>
                            </li>
                          ))}
                        </ul>
                        <div className="pt-4">
                          <div className="relative">
                            <input
                              type="file"
                              accept=".pdf"
                              onChange={(e) => {
                                const file = e.target.files?.[0];
                                if (file) {
                                  // Handle the file upload here
                                  console.log("Selected file:", file);
                                }
                              }}
                              className="absolute inset-0 w-full h-full opacity-0 cursor-pointer z-10"
                              aria-label="Upload license document"
                            />
                            <Button size="lg" className="group w-full">
                              Start Selling
                              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                            </Button>
                          </div>
                        </div>
                      </div>
                      <div className="lg:col-span-2 relative">
                        <div className="bg-gradient-to-br from-primary/20 via-primary/5 to-transparent rounded-xl aspect-square flex items-center justify-center p-8">
                          <DollarSign className="w-32 h-32 text-primary/40" />
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="buy" className="mt-0">
                <Card className="border border-secondary/10 shadow-lg bg-background/70 backdrop-blur">
                  <CardContent className="p-6 lg:p-8">
                    <div className="grid lg:grid-cols-5 gap-8 items-center">
                      <div className="lg:col-span-3 space-y-4">
                        <h3 className="text-2xl font-semibold">
                          Get premium software at a fraction of the cost
                        </h3>
                        <p className="text-muted-foreground">
                          Browse verified licenses from trusted sources and save
                          up to 60% off retail prices.
                        </p>
                        <ul className="space-y-2">
                          {[
                            "All licenses verified and guaranteed",
                            "Full transfer of ownership rights",
                            "30-day money back guarantee",
                          ].map((item, i) => (
                            <li key={i} className="flex items-center gap-2">
                              <Check className="h-5 w-5 text-secondary" />
                              <span>{item}</span>
                            </li>
                          ))}
                        </ul>
                        <div className="pt-4">
                          <Button
                            size="lg"
                            variant="secondary"
                            className="group"
                          >
                            Browse Marketplace
                            <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                          </Button>
                        </div>
                      </div>
                      <div className="lg:col-span-2 relative">
                        <div className="bg-gradient-to-br from-primary/20 via-primary/5 to-transparent rounded-xl aspect-square flex items-center justify-center p-8">
                          <ShieldCheck className="w-32 h-32 text-primary/40" />
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </div>

          {/* Stats section */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-12 w-full max-w-3xl mx-auto">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="bg-background/50 backdrop-blur border border-primary/10 rounded-lg p-6 text-center"
              >
                <div className="text-3xl font-bold text-primary">
                  {stat.value.toLocaleString()}
                  {stat.suffix || ""}
                </div>
                <div className="text-sm text-muted-foreground mt-1">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
