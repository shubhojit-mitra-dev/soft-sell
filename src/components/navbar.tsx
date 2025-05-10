"use client";

import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { cn } from "@/lib/utils";
import { MoonIcon, SunIcon } from "@radix-ui/react-icons";
import {
  BookOpen,
  ChevronDown,
  DollarSign,
  LifeBuoy,
  Menu,
  ShieldCheck,
  Users,
  X,
  Zap,
} from "lucide-react";
import { useTheme } from "next-themes";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

export function Navbar() {
  const { theme, setTheme } = useTheme();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  // Track scroll position for navbar styling
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Features submenu items
  const features = [
    {
      title: "License Marketplace",
      description: "Buy and sell software licenses securely",
      icon: <DollarSign className="h-5 w-5 text-primary" />,
      href: "#marketplace",
    },
    {
      title: "Verification System",
      description: "Automated validation for all licenses",
      icon: <ShieldCheck className="h-5 w-5 text-primary" />,
      href: "#verification",
    },
    {
      title: "Enterprise Solutions",
      description: "Custom solutions for large organizations",
      icon: <Users className="h-5 w-5 text-primary" />,
      href: "#enterprise",
    },
    {
      title: "Quick Transfer",
      description: "Fast and secure license transfers",
      icon: <Zap className="h-5 w-5 text-primary" />,
      href: "#transfer",
    },
  ];

  // Resources submenu items
  const resources = [
    {
      title: "Help Center",
      description: "Get support and answers to common questions",
      icon: <LifeBuoy className="h-5 w-5 text-primary" />,
      href: "#help",
    },
    {
      title: "Documentation",
      description: "Detailed guides and resources",
      icon: <BookOpen className="h-5 w-5 text-primary" />,
      href: "#docs",
    },
  ];

  return (
    <header
      className={cn(
        "sticky top-0 z-50 w-full backdrop-blur transition-all duration-300",
        isScrolled ? "bg-background/95 border-b shadow-sm" : "bg-background/60"
      )}
    >
      <div className="w-full px-4 sm:px-6 lg:px-8 flex h-16 items-center justify-between">
        {/* Logo with Favicon */}
        <Link href="/" className="flex items-center space-x-2 font-bold">
          <div className="h-8 w-8 flex items-center justify-center">
            <Image src="/favicon.ico" height={50} width={50} alt="Logo" className="h-full w-full" />
          </div>
          <span className="text-xl bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">
            SoftSell
          </span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center justify-between flex-1 pl-6">
          <NavigationMenu>
            <NavigationMenuList>
              {/* Features Dropdown */}
              <NavigationMenuItem>
                <NavigationMenuTrigger className="text-sm font-medium">
                  Features
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2">
                    {features.map((feature) => (
                      <li key={feature.title}>
                        <NavigationMenuLink asChild>
                          <Link
                            href={feature.href}
                            className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                          >
                            <div className="flex items-center gap-2">
                              {feature.icon}
                              <div className="text-sm font-medium leading-none">
                                {feature.title}
                              </div>
                            </div>
                            <p className="line-clamp-2 text-sm leading-snug text-muted-foreground mt-1">
                              {feature.description}
                            </p>
                          </Link>
                        </NavigationMenuLink>
                      </li>
                    ))}
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>

              {/* Resources Dropdown */}
              <NavigationMenuItem>
                <NavigationMenuTrigger className="text-sm font-medium">
                  Resources
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid w-[400px] gap-3 p-4">
                    {resources.map((resource) => (
                      <li key={resource.title}>
                        <NavigationMenuLink asChild>
                          <Link
                            href={resource.href}
                            className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                          >
                            <div className="flex items-center gap-2">
                              {resource.icon}
                              <div className="text-sm font-medium leading-none">
                                {resource.title}
                              </div>
                            </div>
                            <p className="line-clamp-2 text-sm leading-snug text-muted-foreground mt-1">
                              {resource.description}
                            </p>
                          </Link>
                        </NavigationMenuLink>
                      </li>
                    ))}
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>

              {/* Static Links */}
              <NavigationMenuItem>
                <NavigationMenuLink asChild>
                  <Link
                    href="#testimonials"
                    className="group inline-flex h-10 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50"
                  >
                    Testimonials
                  </Link>
                </NavigationMenuLink>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuLink asChild>
                  <Link
                    href="#contact"
                    className="group inline-flex h-10 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50"
                  >
                    Contact
                  </Link>
                </NavigationMenuLink>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>

          {/* Right side actions */}
          <div className="flex items-center gap-3">
            <Button variant="outline" size="sm">
              Sign In
            </Button>

            <Button size="sm" className="group">
              Sell Licenses
              <ChevronDown className="ml-1 h-4 w-4 transition-transform group-hover:rotate-180" />
            </Button>

            {/* Theme toggle */}
            <Button
              variant="ghost"
              size="icon"
              aria-label="Toggle theme"
              className="rounded-full"
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            >
              <SunIcon className="h-5 w-5 rotate-0 scale-100 transition-transform dark:-rotate-90 dark:scale-0" />
              <MoonIcon className="absolute h-5 w-5 rotate-90 scale-0 transition-transform dark:rotate-0 dark:scale-100" />
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <div className="md:hidden flex items-center">
          <Button
            variant="ghost"
            size="icon"
            aria-label="Toggle theme"
            className="mr-2"
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
          >
            <SunIcon className="h-5 w-5 rotate-0 scale-100 transition-transform dark:-rotate-90 dark:scale-0" />
            <MoonIcon className="absolute h-5 w-5 rotate-90 scale-0 transition-transform dark:rotate-0 dark:scale-100" />
          </Button>

          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon">
                <Menu className="h-5 w-5" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] sm:w-[400px]">
              <div className="flex flex-col h-full">
                <div className="flex justify-between items-center py-4 border-b">
                  <div className="flex items-center space-x-2">
                    <div className="h-8 w-8 flex items-center justify-center">
                      <Image
                        width={50}
                        height={50}
                        src="/favicon.ico"
                        alt="Logo"
                        className="h-full w-full"
                      />
                    </div>
                    <span className="font-bold text-xl">SoftSell</span>
                  </div>
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={() => setIsOpen(false)}
                  >
                    <X className="h-5 w-5" />
                  </Button>
                </div>

                <div className="flex-1 overflow-auto py-6 space-y-6">
                  {/* Mobile Features */}
                  <div className="space-y-3">
                    <h4 className="text-sm font-medium text-muted-foreground px-4">
                      Features
                    </h4>
                    <div className="space-y-1">
                      {features.map((feature) => (
                        <Link
                          key={feature.title}
                          href={feature.href}
                          className="flex items-center gap-2 px-4 py-2 text-sm hover:bg-accent rounded-md"
                          onClick={() => setIsOpen(false)}
                        >
                          {feature.icon}
                          <span>{feature.title}</span>
                        </Link>
                      ))}
                    </div>
                  </div>

                  {/* Mobile Resources */}
                  <div className="space-y-3">
                    <h4 className="text-sm font-medium text-muted-foreground px-4">
                      Resources
                    </h4>
                    <div className="space-y-1">
                      {resources.map((resource) => (
                        <Link
                          key={resource.title}
                          href={resource.href}
                          className="flex items-center gap-2 px-4 py-2 text-sm hover:bg-accent rounded-md"
                          onClick={() => setIsOpen(false)}
                        >
                          {resource.icon}
                          <span>{resource.title}</span>
                        </Link>
                      ))}
                    </div>
                  </div>

                  {/* Mobile Static Links */}
                  <div className="space-y-3">
                    <h4 className="text-sm font-medium text-muted-foreground px-4">
                      More
                    </h4>
                    <div className="space-y-1">
                      <Link
                        href="#testimonials"
                        className="flex items-center px-4 py-2 text-sm hover:bg-accent rounded-md"
                        onClick={() => setIsOpen(false)}
                      >
                        Testimonials
                      </Link>
                      <Link
                        href="#contact"
                        className="flex items-center px-4 py-2 text-sm hover:bg-accent rounded-md"
                        onClick={() => setIsOpen(false)}
                      >
                        Contact
                      </Link>
                    </div>
                  </div>
                </div>

                <div className="border-t py-4 space-y-3">
                  <Button className="w-full" size="sm">
                    Sell Licenses
                  </Button>
                  <Button className="w-full" variant="outline" size="sm">
                    Sign In
                  </Button>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
