// components/layout/footer.tsx
import Link from "next/link";
import { ReactNode } from "react";
import { Send } from "lucide-react";

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
  <div>
    <div className="flex flex-col">
      <span className="text-3xl font-bold tracking-tight text-floriculture drop-shadow-sm">
        SEMEDA
      </span>
      <span className="text-xs uppercase tracking-[3px] text-mining mt-1 font-semibold">
        Trading PLC
      </span>
    </div>

    <p className="mt-6 text-muted-foreground text-[15px] leading-relaxed max-w-md">
      A leading Ethiopian trading company committed to sustainable growth,
      responsible mining, and reliable international trade.
    </p>

    {/* Social Links */}
    <div className="mt-6 flex items-center gap-3">
      <a
        href="#"
        aria-label="Telegram"
        className="group w-10 h-10 rounded-xl bg-floriculture/15 border border-floriculture/30 flex items-center justify-center text-floriculture hover:bg-floriculture hover:text-white transition-all duration-300"
      >
        <Send className="w-4 h-4" />
      </a>
      <a
        href="#"
        aria-label="Instagram"
        className="group w-10 h-10 rounded-xl bg-mining/15 border border-mining/30 flex items-center justify-center text-mining hover:bg-mining hover:text-white transition-all duration-300"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
          <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
          <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
        </svg>
      </a>
    </div>
  </div>
);

const QuickLinks = () => (
  <div>
    <h4 className="font-semibold text-foreground mb-5">Quick Links</h4>
    <nav className="flex flex-col gap-y-3 text-[15px]" aria-label="Quick links">
      {QUICK_LINKS.map(({ href, label }) => (
        <Link
          key={href}
          href={href}
          className="hover:text-floriculture transition-colors"
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
        <a href={info.href} className="hover:text-mining transition-colors">
          {info.value}
        </a>
      );
    }

    return (
      <p className="text-muted-foreground whitespace-pre-line">{info.value}</p>
    );
  };

  return (
    <div>
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
    <footer className="border-t bg-background mt-auto relative">
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-floriculture via-mining to-corporate" />
      <div className="mx-auto max-w-7xl px-6 py-12 md:py-16 mt-2">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-12">
          <BrandSection />
          <QuickLinks />
          <ContactSection />
        </div>
      </div>
      <CopyrightBar />
    </footer>
  );
}
