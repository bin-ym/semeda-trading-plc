"use client";

import Link from "next/link";
import { Menu } from "lucide-react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 z-50 w-full transition-all duration-300 ${
        scrolled ? "bg-background/90 backdrop-blur shadow-md" : "bg-transparent"
      }`}
    >
      <div
        className={`mx-auto flex max-w-7xl items-center justify-between px-6 transition-all duration-300 ${
          scrolled ? "h-14" : "h-16"
        }`}
      >
        {/* Logo */}
        <Link href="/" className="flex flex-col leading-none">
          <span className="text-xl font-bold tracking-[0.2em] text-primary">
            SEMEDA
          </span>
          <span className="text-[10px] uppercase tracking-[0.35em] text-accent">
            Trading PLC
          </span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8 text-sm font-medium">
          {["Home", "About", "Sectors", "Contact"].map((label) => (
            <Link
              key={label}
              href={label === "Home" ? "/" : `/${label.toLowerCase()}`}
              className="hover:text-accent transition-colors duration-300 relative after:absolute after:-bottom-1 after:left-0 after:h-[2px] after:w-0 after:bg-accent after:transition-all after:duration-300 hover:after:w-full"
            >
              {label}
            </Link>
          ))}
        </nav>

        {/* Mobile Menu */}
        <div className="md:hidden">
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon">
                <Menu className="h-5 w-5" />
              </Button>
            </SheetTrigger>

            <SheetContent
              side="right"
              className="flex flex-col gap-6 pt-10 text-lg font-semibold"
            >
              {["Home", "About", "Sectors", "Contact"].map((label) => (
                <Link
                  key={label}
                  href={label === "Home" ? "/" : `/${label.toLowerCase()}`}
                  className="hover:text-accent transition-colors duration-300"
                >
                  {label}
                </Link>
              ))}
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}