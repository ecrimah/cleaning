"use client";

import Link from "next/link";
import { Phone, Mail, Menu, MapPin } from "lucide-react";
import { Button, buttonVariants } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Container } from "./Container";
import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";

const NAV_LINKS = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Services", href: "/services" },
  { name: "Pricing", href: "/pricing" },
  { name: "FAQ", href: "/faq" },
  { name: "Contact", href: "/contact" },
];

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
            <div className="flex items-center space-x-2">
              <Phone className="h-4 w-4" />
              <span>(555) 123-4567</span>
            </div>
            <div className="flex items-center space-x-2">
              <Mail className="h-4 w-4" />
              <span>hello@premiumcleaning.com</span>
            </div>
          </div>
          <div className="flex items-center space-x-2 font-medium">
            <MapPin className="h-4 w-4" />
            <span>Trusted Cleaning Services in Your Area</span>
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
          <Link href="/" className="flex items-center space-x-2">
            <div className="bg-primary text-primary-foreground p-2 rounded-lg">
              <div className="font-heading font-bold text-xl leading-none tracking-tight">PC</div>
            </div>
            <span className="font-heading font-bold text-xl tracking-tight hidden sm:inline-block text-foreground">
              Premium<span className="text-primary">Clean</span>
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
              <SheetTrigger render={<Button variant="ghost" size="icon" className="lg:hidden" />}>
                <Menu className="h-6 w-6" />
                <span className="sr-only">Toggle menu</span>
              </SheetTrigger>
              <SheetContent side="right" className="w-[300px] sm:w-[400px]">
                <nav className="flex flex-col space-y-4 mt-8">
                  {NAV_LINKS.map((link) => (
                    <Link
                      key={link.name}
                      href={link.href}
                      className="text-lg font-medium text-foreground hover:text-primary transition-colors py-2 border-b"
                    >
                      {link.name}
                    </Link>
                  ))}
                  <div className="pt-4 flex flex-col space-y-4">
                    <Link href="/book" className={cn(buttonVariants({ size: "lg" }), "w-full rounded-full")}>
                      Free Estimate
                    </Link>
                    <div className="flex items-center space-x-2 text-muted-foreground justify-center pt-4">
                      <Phone className="h-4 w-4" />
                      <span>(555) 123-4567</span>
                    </div>
                  </div>
                </nav>
              </SheetContent>
            </Sheet>
          </div>
        </Container>
      </div>
    </header>
  );
}
