"use client";

import Link from "next/link";
import Image from "next/image";
import { Phone, Mail, Menu, MapPin } from "lucide-react";
import { Button, buttonVariants } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Container } from "./Container";
import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";
import { siteConfig, NAV_LINKS } from "@/lib/site";

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className="w-full flex flex-col z-50 sticky top-0">
      {/* Top Bar */}
      <div className="bg-primary text-primary-foreground py-2 hidden md:block">
        <Container className="flex justify-between items-center text-sm">
          <div className="flex items-center space-x-6">
            <a href={`tel:${siteConfig.phonePrimaryHref}`} className="flex items-center space-x-2 hover:opacity-80 transition-opacity">
              <Phone className="h-4 w-4" />
              <span>{siteConfig.phonePrimaryDisplay}</span>
            </a>
            <a href={`mailto:${siteConfig.email}`} className="flex items-center space-x-2 hover:opacity-80 transition-opacity">
              <Mail className="h-4 w-4" />
              <span>{siteConfig.email}</span>
            </a>
          </div>
          <div className="flex items-center space-x-2 font-medium">
            <MapPin className="h-4 w-4" />
            <span>Trusted Cleaning Services in {siteConfig.address.locality}, {siteConfig.address.country}</span>
          </div>
        </Container>
      </div>

      {/* Main Navbar */}
      <div
        className={cn(
          "bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 transition-all duration-300 border-b",
          isScrolled ? "py-3 shadow-sm" : "py-5"
        )}
      >
        <Container className="flex justify-between items-center">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2.5" aria-label={`${siteConfig.name} home`}>
            <Image
              src={siteConfig.logo}
              alt={`${siteConfig.name} logo`}
              width={48}
              height={48}
              className="h-11 w-11 object-contain"
              priority
            />
            <span className="font-heading font-bold text-xl tracking-tight hidden sm:inline-block text-foreground">
              Cleanova<span className="text-primary"> HQ</span>
            </span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center space-x-8">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
              >
                {link.name}
              </Link>
            ))}
          </nav>

          {/* CTAs & Mobile Nav */}
          <div className="flex items-center space-x-4">
            <div className="hidden md:block">
              <Link href="/book" className={cn(buttonVariants({ size: "lg" }), "rounded-full shadow-md hover:shadow-lg transition-all font-semibold")}>
                Free Estimate
              </Link>
            </div>

            {/* Mobile Nav Trigger */}
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="lg:hidden" aria-label="Toggle menu">
                  <Menu className="h-6 w-6" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[85vw] max-w-[400px] sm:w-[400px] border-l-0 shadow-2xl p-0 flex flex-col bg-background/95 backdrop-blur-xl">
                {/* Header inside sidebar */}
                <div className="p-6 pb-2 flex items-center justify-between border-b border-border/50 bg-background/50">
                  <Link href="/" className="flex items-center space-x-2.5">
                    <Image src={siteConfig.logo} alt="Logo" width={36} height={36} className="h-9 w-9 object-contain" />
                    <span className="font-heading font-bold text-lg tracking-tight text-foreground">
                      Cleanova<span className="text-primary"> HQ</span>
                    </span>
                  </Link>
                </div>
                
                {/* Scrollable Content */}
                <div className="flex-1 overflow-y-auto py-8 px-6">
                  <nav className="flex flex-col space-y-2">
                    <div className="text-[10px] font-extrabold text-muted-foreground uppercase tracking-widest mb-3 ml-2">Menu</div>
                    {NAV_LINKS.map((link) => (
                      <Link
                        key={link.name}
                        href={link.href}
                        className="group flex items-center justify-between text-2xl font-heading font-bold text-foreground hover:text-primary hover:bg-primary/5 rounded-2xl p-4 transition-all duration-300"
                      >
                        {link.name}
                        <div className="w-8 h-8 rounded-full bg-muted group-hover:bg-primary/10 flex items-center justify-center text-muted-foreground group-hover:text-primary transition-colors">
                          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="m9 18 6-6-6-6"/></svg>
                        </div>
                      </Link>
                    ))}
                  </nav>

                  <div className="mt-12 space-y-4">
                    <div className="text-[10px] font-extrabold text-muted-foreground uppercase tracking-widest mb-3 ml-2">Contact Support</div>
                    <a href={`tel:${siteConfig.phonePrimaryHref}`} className="flex items-center p-4 rounded-2xl bg-muted/40 hover:bg-muted/60 transition-colors border border-border/50">
                      <div className="bg-background rounded-full p-2.5 mr-4 shadow-sm text-primary border border-border/50">
                        <Phone className="w-5 h-5" />
                      </div>
                      <div>
                        <div className="text-xs text-muted-foreground font-semibold uppercase tracking-wider mb-0.5">Call Us</div>
                        <div className="font-bold text-foreground">{siteConfig.phonePrimaryDisplay}</div>
                      </div>
                    </a>
                    <a href={`mailto:${siteConfig.email}`} className="flex items-center p-4 rounded-2xl bg-muted/40 hover:bg-muted/60 transition-colors border border-border/50">
                      <div className="bg-background rounded-full p-2.5 mr-4 shadow-sm text-primary border border-border/50">
                        <Mail className="w-5 h-5" />
                      </div>
                      <div>
                        <div className="text-xs text-muted-foreground font-semibold uppercase tracking-wider mb-0.5">Email Us</div>
                        <div className="font-bold text-foreground truncate max-w-[180px]">{siteConfig.email}</div>
                      </div>
                    </a>
                  </div>
                </div>

                {/* Fixed Footer */}
                <div className="p-6 bg-muted/30 border-t border-border/50 backdrop-blur-md">
                  <Link href="/book" className={cn(buttonVariants({ size: "lg" }), "w-full rounded-2xl h-14 text-lg shadow-lg shadow-primary/20 bg-gradient-to-r from-primary to-blue-600 font-bold hover:shadow-xl transition-all hover:-translate-y-0.5")}>
                    Get a Free Estimate
                  </Link>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </Container>
      </div>
    </header>
  );
}
