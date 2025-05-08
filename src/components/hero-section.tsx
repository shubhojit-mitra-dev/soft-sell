'use client';
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

export function HeroSection() {
  return (
    <section className="w-full h-screen flex items-center justify-center">
      <div className="container relative z-10 flex flex-col items-center justify-center px-4 py-16">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-center max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="flex flex-col gap-6 items-center max-w-2xl mx-auto"
          >
            <h1 className="text-4xl font-bold tracking-tight text-center sm:text-5xl xl:text-6xl/none">
              Turn Unused Software into Real Value
            </h1>
            <p className="text-xl text-muted-foreground text-center max-w-lg">
              With SoftSell, resell unused software licenses instantly and securely.
            </p>
            <div className="mt-2">
              <Button size="lg" className="font-semibold">
                Sell My Licenses
              </Button>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="relative flex items-center justify-center"
          >
            <div className="relative aspect-square w-full max-w-md rounded-xl bg-gradient-to-br from-primary/20 via-transparent to-transparent">
              <div className="absolute inset-0 flex items-center justify-center">
                <svg
                  className="h-3/4 w-3/4 text-primary/40"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={0.5}
                    d="M9 17l6-6-6-6"
                  />
                </svg>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
      <div className="absolute inset-0 -z-10 h-full w-full bg-gradient-to-br from-primary/5 via-transparent to-transparent" />
    </section>
  );
}