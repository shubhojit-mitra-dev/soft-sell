"use client";

import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { motion } from "framer-motion";
import { useEffect } from "react";
import { loadSlim } from "@tsparticles/slim";
import Particles from "@tsparticles/react";
import type { Container } from "@tsparticles/engine";
import { particlesConfig } from "@/config/particles-config";
import { tsParticles } from "@tsparticles/engine";

const testimonials = [
  {
    name: "Sarah Chen",
    role: "IT Director",
    company: "TechCorp Solutions",
    content:
      "SoftSell made it incredibly easy to recover value from our unused enterprise licenses. The process was smooth and secure.",
  },
  {
    name: "Michael Rodriguez",
    role: "Operations Manager",
    company: "Innovate Systems",
    content:
      "We've saved thousands by selling our unused licenses through SoftSell. Their valuation system is transparent and fair.",
  },
  {
    name: "Emily Watson",
    role: "Software Procurement Lead",
    company: "DataFlow Analytics",
    content:
      "The verification system gives us confidence in every purchase. We've acquired essential software at significant discounts without any licensing issues.",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 10,
    },
  },
};

export function Testimonials() {
  useEffect(() => {
    let container: Container | undefined;

    const initParticles = async () => {
      await loadSlim(tsParticles);
      container = await tsParticles.load({
        id: "testimonialsParticles",
        options: particlesConfig,
      });
    };

    initParticles();

    return () => {
      container?.destroy();
    };
  }, []);

  return (
    <section
      id="testimonials"
      className="relative min-h-screen overflow-hidden"
    >
      <div id="testimonialsParticles" className="absolute inset-0 -z-10" />

      <div className="container relative z-10 mx-auto px-4 py-24 sm:px-6 lg:py-32">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mx-auto max-w-2xl lg:text-center mb-16 lg:mb-20"
        >
          <div className="relative inline-block">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/70">
              What Our Users Say
            </h2>
            {/* <div className="absolute -inset-x-20 -inset-y-10 opacity-30 blur-2xl -z-10 bg-gradient-to-r from-primary to-primary/20 rounded-full" /> */}
          </div>
          <p className="mt-4 text-xl text-muted-foreground">
            Don&apos;t just take our word for it
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mx-auto max-w-7xl"
        >
          <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-3">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.name}
                variants={itemVariants}
                className="relative"
              >
                <Card className="h-full bg-card/80 backdrop-blur-sm hover:shadow-lg transition-shadow duration-200 relative overflow-hidden border-transparent hover:border-primary/20">
                  <CardHeader className="relative z-10">
                    <div className="flex items-center gap-4">
                      <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center ring-8 ring-primary/5">
                        <span className="text-xl font-semibold text-primary">
                          {testimonial.name[0]}
                        </span>
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold leading-tight bg-clip-text text-transparent bg-gradient-to-r from-foreground to-foreground/80">
                          {testimonial.name}
                        </h3>
                        <p className="text-sm text-muted-foreground mt-1">
                          {testimonial.role} at {testimonial.company}
                        </p>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground relative">
                      "{testimonial.content}"
                    </p>
                    <div className="absolute top-4 right-4 text-primary/5 text-8xl font-serif">
                      "
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>

      <div className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80">
        {/* <div className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-primary to-background opacity-20 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]" /> */}
      </div>
    </section>
  );
}
