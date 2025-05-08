'use client';

import { Button } from "@/components/ui/button";
import { MoonIcon, SunIcon } from "@radix-ui/react-icons";
import { useTheme } from "next-themes";
import Link from "next/link";

export function Navbar() {
  const { theme, setTheme } = useTheme();

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <nav className="container flex h-16 items-center">
        <Link href="/" className="mr-8 flex items-center space-x-2 font-bold">
          <span className="text-xl">SoftSell</span>
        </Link>
        <div className="flex flex-1 items-center justify-between">
          <div className="flex gap-6 text-sm">
            <Link href="#how-it-works" className="transition hover:text-foreground/80">How It Works</Link>
            <Link href="#why-choose-us" className="transition hover:text-foreground/80">Why Choose Us</Link>
            <Link href="#testimonials" className="transition hover:text-foreground/80">Testimonials</Link>
            <Link href="#contact" className="transition hover:text-foreground/80">Contact</Link>
          </div>
          <div className="flex items-center gap-4">
            <Button
              variant="ghost"
              size="icon"
              aria-label="Toggle theme"
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            >
              <SunIcon className="h-5 w-5 rotate-0 scale-100 transition-transform dark:-rotate-90 dark:scale-0" />
              <MoonIcon className="absolute h-5 w-5 rotate-90 scale-0 transition-transform dark:rotate-0 dark:scale-100" />
            </Button>
            <Button>Sell My Licenses</Button>
          </div>
        </div>
      </nav>
    </header>
  );
}