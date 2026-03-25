// components/layout/footer.tsx
import Link from "next/link";
import { ReactNode } from "react";

// Types
interface FooterLink {
  href: string;
  label: string;
}

interface ContactInfo {
  type: "email" | "phone" | "address";
  label: string;
  value: string;
  href?: string;
}

// Constants
const QUICK_LINKS: FooterLink[] = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About Us" },
  { href: "/sectors", label: "Our Sectors" },
  { href: "/contact", label: "Contact" },
];

const CONTACT_INFO: ContactInfo[] = [
  {
    type: "email",
    label: "Email",
    value: "info@semeda.com",
    href: "mailto:info@semeda.com",
  },
  {
    type: "phone",
    label: "Phone",
    value: "+251 911 234 567",
    href: "tel:+251911234567",
  },
  {
    type: "address",
    label: "Address",
    value: "Bole Subcity\nAddis Ababa, Ethiopia",
  },
];

// Sub-components
const BrandSection = () => (
  <div className="md:col-span-5">
    <div className="flex flex-col">
      <span className="text-3xl font-bold tracking-tight text-primary">
        SEMEDA
      </span>
      <span className="text-xs uppercase tracking-[3px] text-accent mt-1">
        Trading PLC
      </span>
    </div>

    <p className="mt-6 text-muted-foreground text-[15px] leading-relaxed max-w-md">
      A leading Ethiopian trading company committed to sustainable growth,
      responsible mining, and reliable international trade.
    </p>

    <div className="mt-8 text-sm text-muted-foreground">
      Addis Ababa, Bole
      <br />
      Ethiopia
    </div>
  </div>
);

const QuickLinks = () => (
  <div className="md:col-span-3">
    <h4 className="font-semibold text-foreground mb-5">Quick Links</h4>
    <nav className="flex flex-col gap-y-3 text-[15px]" aria-label="Quick links">
      {QUICK_LINKS.map(({ href, label }) => (
        <Link
          key={href}
          href={href}
          className="hover:text-primary transition-colors"
        >
          {label}
        </Link>
      ))}
    </nav>
  </div>
);

const ContactSection = () => {
  const renderContactValue = (info: ContactInfo): ReactNode => {
    if (info.href) {
      return (
        <a href={info.href} className="hover:text-primary transition-colors">
          {info.value}
        </a>
      );
    }

    return (
      <p className="text-muted-foreground whitespace-pre-line">{info.value}</p>
    );
  };

  return (
    <div className="md:col-span-4">
      <h4 className="font-semibold text-foreground mb-5">Get In Touch</h4>

      <div className="space-y-5 text-[15px]">
        {CONTACT_INFO.map((info) => (
          <div key={info.type}>
            <p className="font-bold text-xs uppercase tracking-widest mb-1">
              {info.label}
            </p>
            {renderContactValue(info)}
          </div>
        ))}
      </div>
    </div>
  );
};

const CopyrightBar = () => (
  <div className="border-t py-6 text-center text-xs text-muted-foreground bg-background/80">
    © {new Date().getFullYear()} Semeda Trading PLC. All rights reserved.
  </div>
);

// Main Component
export default function Footer() {
  return (
    <footer className="border-t bg-background mt-auto">
      <div className="mx-auto max-w-7xl px-6 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-8">
          <BrandSection />
          <QuickLinks />
          <ContactSection />
        </div>
      </div>
      <CopyrightBar />
    </footer>
  );
}
