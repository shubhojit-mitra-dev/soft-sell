"use client";

import { useCallback, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { loadSlim } from "@tsparticles/slim";
import Particles from "@tsparticles/react";
import type { Container, Engine } from "@tsparticles/engine";
import { particlesConfig } from "@/config/particles-config";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
} from "@/components/ui/card";
import VanillaTilt from "vanilla-tilt";
import {
  LightningBoltIcon,
  LockClosedIcon,
  PersonIcon,
  StarIcon,
} from "@radix-ui/react-icons";
import { tsParticles } from "@tsparticles/engine";

const features = [
  {
    title: "Fast Payments",
    description: "Receive payment within 24 hours of completing your sale.",
    icon: LightningBoltIcon,
  },
  {
    title: "Transparent Valuation",
    description: "Get real-time market values based on current demand.",
    icon: StarIcon,
  },
  {
    title: "Trusted by 1,000+ Users",
    description: "Join thousands of satisfied customers who trust SoftSell.",
    icon: PersonIcon,
  },
  {
    title: "Secure Transactions",
    description: "Enterprise-grade security for all license transfers.",
    icon: LockClosedIcon,
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

function TiltCard({ children, className }: { children: React.ReactNode; className?: string }) {
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (cardRef.current) {
      VanillaTilt.init(cardRef.current, {
        max: 15,
        speed: 400,
        scale: 1.03,
        glare: true,
        "max-glare": 0.3,
        gyroscope: true,
        gyroscopeMinAngleX: -45,
        gyroscopeMaxAngleX: 45,
        gyroscopeMinAngleY: -45,
        gyroscopeMaxAngleY: 45,
        transition: true,
      });
    }
    return () => {
      if (cardRef.current) {
        // @ts-ignore
        cardRef.current.vanillaTilt?.destroy();
      }
    };
  }, []);

  return (
    <motion.div
      ref={cardRef}
      className={className}
      whileHover={{
        translateY: -5,
        transition: { duration: 0.2 },
      }}
      whileTap={{
        scale: 0.98,
        transition: { duration: 0.1 },
      }}
    >
      {children}
    </motion.div>
  );
}

export function WhyChooseUs() {
  useEffect(() => {
    let container: Container | undefined;

    const initParticles = async () => {
      await loadSlim(tsParticles);
      container = await tsParticles.load({
        id: "tsparticles",
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
      id="why-choose-us"
      className="relative min-h-screen overflow-hidden"
    >
      <div id="tsparticles" className="absolute inset-0 -z-10" />

      <div className="container max-w-4xl relative z-10 mx-auto px-4 py-24 sm:px-6 lg:py-32">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mx-auto max-w-2xl lg:text-center mb-16 lg:mb-20"
        >
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
            Why Choose Us
          </h2>
          <p className="mt-4 text-xl text-muted-foreground">
            Leading the way in secure software license resale
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mx-auto max-w-7xl"
        >
          <div className="grid gap-12 md:grid-cols-2">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                variants={itemVariants}
                className="relative"
              >
                <TiltCard className="h-full max-w-xl rounded-2xl">
                  <Card className="h-full max-w-xl bg-card/80 backdrop-blur-sm hover:shadow-lg transition-shadow duration-200 relative overflow-hidden border-transparent hover:border-primary/20">
                    <CardHeader className="relative z-10">
                      <div className="mb-6 inline-flex h-14 w-14 items-center justify-center rounded-xl bg-primary/10 ring-8 ring-primary/5">
                        <feature.icon className="h-7 w-7 text-primary" />
                      </div>
                      <h3 className="text-xl font-semibold leading-tight mb-3">
                        {feature.title}
                      </h3>
                      <p className="text-muted-foreground">
                        {feature.description}
                      </p>
                    </CardHeader>
                    <div className="absolute top-4 right-4 text-muted-foreground/10 text-7xl font-bold z-0">
                      {index + 1}
                    </div>
                  </Card>
                </TiltCard>
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
