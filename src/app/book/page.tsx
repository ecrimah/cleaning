"use client";

import { Container } from "@/components/layout/Container";
import { Section } from "@/components/layout/Section";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { PageHero, PageBreadcrumb } from "@/components/layout/PageHero";

export default function BookPage() {
  return (
    <>
      <PageHero
        eyebrow="Book Now"
        title="Book Your Cleaning"
        description="Ready for a spotless space? Fill out the form below to request a service or get a free estimate. We'll be in touch shortly to confirm your booking."
        mobileDescription="Request a service or get a free estimate — we'll confirm your booking shortly."
        image="/images/hero-cleaning.png"
        imageAlt="Book professional cleaning with Cleanova HQ in Accra"
      />
      <PageBreadcrumb items={[{ label: "Home", href: "/" }, { label: "Book" }]} />

      <Section className="bg-background">
        <Container className="max-w-3xl mx-auto">
          <div className="bg-muted/30 p-6 md:p-8 rounded-xl shadow-md border">
            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
              
              {/* Service Details */}
              <div className="space-y-3">
                <h2 className="text-lg font-heading font-bold border-b pb-2">1. Service Details</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label htmlFor="serviceType" className="text-sm font-medium">Service Type</label>
                    <select id="serviceType" className="flex h-9 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50">
                      <option>Residential Cleaning</option>
                      <option>Commercial Cleaning</option>
                      <option>Industrial Cleaning</option>
                      <option>Specialized / Deep Cleaning</option>
                      <option>Sanitation & Disinfection</option>
                      <option>Janitorial Support</option>
                      <option>Facility Maintenance</option>
                      <option>Waste Management</option>
                    </select>
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="frequency" className="text-sm font-medium">Frequency</label>
                    <select id="frequency" className="flex h-9 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50">
                      <option>One Time</option>
                      <option>Weekly (15% off)</option>
                      <option>Bi-Weekly (10% off)</option>
                      <option>Monthly (5% off)</option>
                    </select>
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label htmlFor="bedrooms" className="text-sm font-medium">Bedrooms</label>
                    <Input id="bedrooms" type="number" min="1" placeholder="1" className="bg-background h-9" />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="bathrooms" className="text-sm font-medium">Bathrooms</label>
                    <Input id="bathrooms" type="number" min="1" placeholder="1" className="bg-background h-9" />
                  </div>
                </div>
              </div>

              {/* Personal Details */}
              <div className="space-y-3">
                <h2 className="text-lg font-heading font-bold border-b pb-2">2. Personal Details</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label htmlFor="firstName" className="text-sm font-medium">First Name</label>
                    <Input id="firstName" placeholder="John" className="bg-background h-9" />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="lastName" className="text-sm font-medium">Last Name</label>
                    <Input id="lastName" placeholder="Doe" className="bg-background h-9" />
                  </div>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label htmlFor="email" className="text-sm font-medium">Email</label>
                    <Input id="email" type="email" placeholder="john@example.com" className="bg-background h-9" />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="phone" className="text-sm font-medium">Phone</label>
                    <Input id="phone" type="tel" placeholder="059 276 1501" className="bg-background h-9" />
                  </div>
                </div>
                <div className="space-y-2">
                  <label htmlFor="address" className="text-sm font-medium">Street Address</label>
                  <Input id="address" placeholder="123 Main St" className="bg-background h-9" />
                </div>
                <div className="space-y-2">
                  <label htmlFor="notes" className="text-sm font-medium">Special Instructions / Notes</label>
                  <Textarea id="notes" placeholder="Any specific areas you want us to focus on?" className="bg-background min-h-[100px]" />
                </div>
              </div>

              <Button size="lg" className="w-full rounded-lg font-semibold">
                Request Booking
              </Button>
              <p className="text-sm text-muted-foreground text-center mt-4">
                * You won't be charged until the service is complete.
              </p>
            </form>
          </div>
        </Container>
      </Section>
    </>
  );
}
