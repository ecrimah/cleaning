"use client";

import { Container } from "@/components/layout/Container";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card } from "@/components/ui/card";
import { MapPin, Building, Mail } from "lucide-react";

export function QuickEstimate() {
  return (
    <div className="relative -mt-12 z-20 px-4">
      <Container>
        <Card className="p-2 md:p-4 rounded-2xl shadow-xl border-0 bg-background flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex-1 w-full grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="relative">
              <Building className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
              <select className="w-full h-12 pl-10 pr-4 rounded-xl border border-input bg-transparent text-sm font-medium focus:outline-none focus:ring-2 focus:ring-primary/50 appearance-none">
                <option value="">Select Service</option>
                <option value="house">House Cleaning</option>
                <option value="office">Office Cleaning</option>
                <option value="deep">Deep Cleaning</option>
              </select>
            </div>
            <div className="relative">
              <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
              <Input 
                type="text" 
                placeholder="Zip Code" 
                className="h-12 pl-10 rounded-xl"
              />
            </div>
            <div className="relative">
              <Mail className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
              <Input 
                type="email" 
                placeholder="Email Address" 
                className="h-12 pl-10 rounded-xl"
              />
            </div>
          </div>
          <Button size="lg" className="w-full md:w-auto h-12 rounded-xl px-8 font-semibold shrink-0">
            Get Estimate
          </Button>
        </Card>
      </Container>
    </div>
  );
}
