"use client";

import { Container } from "@/components/layout/Container";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card } from "@/components/ui/card";
import { MapPin, Building, Mail } from "lucide-react";

export function QuickEstimate() {
  return (
    <div className="relative -mt-10 z-20 px-4 hidden md:block">
      <Container>
        <Card className="p-2 md:p-3 rounded-xl shadow-lg border-0 bg-background flex flex-col md:flex-row items-center justify-between gap-3">
          <div className="flex-1 w-full grid grid-cols-1 md:grid-cols-3 gap-3">
            <div className="relative">
              <Building className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <select className="w-full h-9 pl-9 pr-4 rounded-lg border border-input bg-transparent text-sm font-medium focus:outline-none focus:ring-2 focus:ring-primary/50 appearance-none">
                <option value="">Select Service</option>
                <option value="residential">Residential Cleaning</option>
                <option value="commercial">Commercial Cleaning</option>
                <option value="industrial">Industrial Cleaning</option>
                <option value="specialized">Specialized Cleaning</option>
              </select>
            </div>
            <div className="relative">
              <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input 
                type="text" 
                placeholder="Area / Location" 
                className="h-9 pl-9 rounded-lg"
              />
            </div>
            <div className="relative">
              <Mail className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input 
                type="email" 
                placeholder="Email Address" 
                className="h-9 pl-9 rounded-lg"
              />
            </div>
          </div>
          <Button size="lg" className="w-full md:w-auto rounded-lg px-6 font-semibold shrink-0">
            Get Estimate
          </Button>
        </Card>
      </Container>
    </div>
  );
}
