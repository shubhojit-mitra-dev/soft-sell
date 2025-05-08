'use client';

import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { motion } from "framer-motion";

const testimonials = [
  {
    name: "Sarah Chen",
    role: "IT Director",
    company: "TechCorp Solutions",
    content: "SoftSell made it incredibly easy to recover value from our unused enterprise licenses. The process was smooth and secure.",
  },
  {
    name: "Michael Rodriguez",
    role: "Operations Manager",
    company: "Innovate Systems",
    content: "We've saved thousands by selling our unused licenses through SoftSell. Their valuation system is transparent and fair.",
  },
];

export function Testimonials() {
  return (
    <section className="container py-24 sm:py-32 flex flex-col items-center text-center">
      <div className="max-w-3xl mx-auto space-y-4">
        <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
          What Our Users Say
        </h2>
        <p className="text-xl text-muted-foreground">
          Don&apos;t just take our word for it
        </p>
      </div>

      <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3 items-center justify-items-center">
        {testimonials.map((testimonial, index) => (
          <motion.div
            key={testimonial.name}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            viewport={{ once: true }}
          >
            <Card className="h-full">
              <CardHeader>
                <div className="flex items-center gap-4">
                  <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center">
                    <span className="text-xl font-semibold text-primary">
                      {testimonial.name[0]}
                    </span>
                  </div>
                  <div>
                    <h3 className="font-semibold">{testimonial.name}</h3>
                    <p className="text-sm text-muted-foreground">
                      {testimonial.role} at {testimonial.company}
                    </p>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">{testimonial.content}</p>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </section>
  );
}