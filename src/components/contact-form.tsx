'use client';

import { useState } from 'react';
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { CheckCircle, Mail, Building, Phone, Github, Twitter, Instagram } from 'lucide-react';
import { Separator } from "@/components/ui/separator";

const formSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email address"),
  company: z.string().min(2, "Company name must be at least 2 characters"),
  licenseType: z.string().min(1, "Please select a license type"),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

export function FooterContactForm() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      company: "",
      licenseType: "",
      message: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    // In a real app, you would handle the form submission here
    console.log(values);
    setIsSubmitted(true);
    setTimeout(() => setIsSubmitted(false), 5000);
  }

  return (
    <footer className="bg-slate-950 text-white">
      <div className="container px-4 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
          {/* Company Info Section */}
          <div className="lg:col-span-2 space-y-8">
            <div>
              <h2 className="text-2xl font-bold mb-2">Company Name</h2>
              <p className="text-slate-400 max-w-md">
                Providing enterprise software solutions since 2010. We're dedicated to helping businesses grow with our cutting-edge technology.
              </p>
            </div>
            
            <div className="space-y-4">
              <h3 className="text-lg font-semibold">Get in Touch</h3>
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <Mail size={18} className="text-primary" />
                  <span className="text-slate-300">contact@company.com</span>
                </div>
                <div className="flex items-center gap-3">
                  <Phone size={18} className="text-primary" />
                  <span className="text-slate-300">+1 (555) 123-4567</span>
                </div>
                <div className="flex items-center gap-3">
                  <Building size={18} className="text-primary" />
                  <span className="text-slate-300">123 Business St, Suite 100, San Francisco, CA 94107</span>
                </div>
              </div>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold mb-3">Follow Us</h3>
              <div className="flex gap-4">
                <a href="#" className="bg-slate-800 hover:bg-primary transition-colors p-2 rounded-full">
                  <Twitter size={20} />
                </a>
                <a href="#" className="bg-slate-800 hover:bg-primary transition-colors p-2 rounded-full">
                  <Github size={20} />
                </a>
                <a href="#" className="bg-slate-800 hover:bg-primary transition-colors p-2 rounded-full">
                  <Instagram size={20} />
                </a>
              </div>
            </div>
          </div>
          
          {/* Quick Links Section */}
          <div className="lg:col-span-1">
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-slate-300 hover:text-primary transition-colors">Home</a>
              </li>
              <li>
                <a href="#" className="text-slate-300 hover:text-primary transition-colors">About Us</a>
              </li>
              <li>
                <a href="#" className="text-slate-300 hover:text-primary transition-colors">Services</a>
              </li>
              <li>
                <a href="#" className="text-slate-300 hover:text-primary transition-colors">Products</a>
              </li>
              <li>
                <a href="#" className="text-slate-300 hover:text-primary transition-colors">Blog</a>
              </li>
            </ul>
          </div>
          
          {/* Contact Form Section */}
          <div className="lg:col-span-2 bg-slate-900 rounded-lg p-6">
            <h3 className="text-xl font-bold mb-4">Send us a message</h3>
            
            {isSubmitted ? (
              <Alert className="bg-green-900/50 border-green-600 text-white">
                <CheckCircle className="h-4 w-4" />
                <AlertTitle>Thank you!</AlertTitle>
                <AlertDescription>
                  Your message has been sent successfully. We'll get back to you within 24 hours.
                </AlertDescription>
              </Alert>
            ) : (
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <FormField
                      control={form.control}
                      name="name"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-slate-300">Name</FormLabel>
                          <FormControl>
                            <Input 
                              placeholder="Your name" 
                              {...field} 
                              className="bg-slate-800 border-slate-700 focus-visible:ring-primary" 
                            />
                          </FormControl>
                          <FormMessage className="text-red-400" />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="email"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-slate-300">Email</FormLabel>
                          <FormControl>
                            <Input 
                              placeholder="you@company.com" 
                              type="email" 
                              {...field} 
                              className="bg-slate-800 border-slate-700 focus-visible:ring-primary" 
                            />
                          </FormControl>
                          <FormMessage className="text-red-400" />
                        </FormItem>
                      )}
                    />
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <FormField
                      control={form.control}
                      name="company"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-slate-300">Company</FormLabel>
                          <FormControl>
                            <Input 
                              placeholder="Your company" 
                              {...field} 
                              className="bg-slate-800 border-slate-700 focus-visible:ring-primary" 
                            />
                          </FormControl>
                          <FormMessage className="text-red-400" />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="licenseType"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-slate-300">License Type</FormLabel>
                          <Select onValueChange={field.onChange} defaultValue={field.value}>
                            <FormControl>
                              <SelectTrigger className="bg-slate-800 border-slate-700 focus:ring-primary">
                                <SelectValue placeholder="Select license type" />
                              </SelectTrigger>
                            </FormControl>
                            <SelectContent className="bg-slate-800 border-slate-700">
                              <SelectItem value="enterprise">Enterprise Software</SelectItem>
                              <SelectItem value="cloud">Cloud Services</SelectItem>
                              <SelectItem value="desktop">Desktop Applications</SelectItem>
                              <SelectItem value="other">Other</SelectItem>
                            </SelectContent>
                          </Select>
                          <FormMessage className="text-red-400" />
                        </FormItem>
                      )}
                    />
                  </div>
                  
                  <FormField
                    control={form.control}
                    name="message"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-slate-300">Message</FormLabel>
                        <FormControl>
                          <Textarea
                            placeholder="Tell us about your needs..."
                            className="min-h-[100px] bg-slate-800 border-slate-700 focus-visible:ring-primary"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage className="text-red-400" />
                      </FormItem>
                    )}
                  />
                  
                  <Button 
                    type="submit" 
                    className="w-full bg-primary hover:bg-primary/90 text-white"
                  >
                    Send Message
                  </Button>
                </form>
              </Form>
            )}
          </div>
        </div>
        
        <Separator className="my-8 bg-slate-800" />
        
        <div className="flex flex-col md:flex-row justify-between items-center text-slate-400 text-sm">
          <p>© 2025 Company Name. All rights reserved.</p>
          <div className="flex gap-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-primary transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-primary transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-primary transition-colors">Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
}