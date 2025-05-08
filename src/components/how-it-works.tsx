'use client';

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { UploadIcon, CircleIcon, CheckCircledIcon } from "@radix-ui/react-icons";
import { motion } from "framer-motion";

const steps = [
  {
    title: "Upload License",
    description: "Securely upload your unused software license details to our platform.",
    icon: UploadIcon,
  },
  {
    title: "Get Free Valuation",
    description: "Receive an instant, market-based valuation for your license.",
    icon: CircleIcon,
  },
  {
    title: "Get Paid",
    description: "Complete the sale and receive payment directly to your account.",
    icon: CheckCircledIcon,
  },
];

export function HowItWorks() {
  return (
    <section className="relative overflow-hidden bg-background">
      <div className="container relative z-10 mx-auto px-4 py-24 sm:px-6 sm:py-32">
        <div className="flex flex-col items-center max-w-2xl mx-auto text-center mb-16">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
            How It Works
          </h2>
          <p className="mt-4 text-xl text-muted-foreground max-w-prose">
            Simple, secure, and straightforward process
          </p>
        </div>

        <div className="grid gap-10 lg:gap-12 md:grid-cols-3 max-w-6xl mx-auto">
          {steps.map((step, index) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="flex justify-center"
            >
              <Card className="relative bg-card w-full max-w-xs hover:shadow-lg transition-shadow">
                <CardHeader className="text-center pb-8">
                  <div className="mb-4 mx-auto inline-flex h-14 w-14 items-center justify-center rounded-xl bg-primary/10 ring-8 ring-primary/5">
                    <step.icon className="h-7 w-7 text-primary" />
                  </div>
                  <CardTitle className="text-xl sm:text-2xl">{step.title}</CardTitle>
                  <CardDescription className="text-base mt-2">
                    {step.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="absolute bottom-4 right-4 text-muted-foreground/20 text-3xl font-bold">
                    {index + 1}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
      <div className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80">
        <div className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-primary to-background opacity-20 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]" />
      </div>
    </section>
  );
}