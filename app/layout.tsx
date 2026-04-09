import type { Metadata } from "next";
import { Geist, Geist_Mono, Inter } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";

const inter = Inter({ subsets: ["latin"], variable: "--font-sans" });

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://semedatrading.com"),
  title: {
    default: "Semeda Trading PLC | Excellence in Trading & Development",
    template: "%s | Semeda Trading PLC",
  },
  description:
    "Semeda Trading PLC is a premier Ethiopian company specializing in floriculture development, mining, and international import/export services. Based in Addis Ababa.",
  keywords: [
    "semeda trading plc",
    "semeda trading",
    "semeda",
    "Semeda Trading PLC",
    "Ethiopia trading company",
    "floriculture Ethiopia",
    "mining Ethiopia",
    "mining",
    "floriculture",
    "import export",
    "import export Addis Ababa",
    "Ethiopian flowers export",
    "mining development Ethiopia",
  ],
  authors: [{ name: "Semeda Trading PLC" }],
  creator: "Semeda Trading PLC",
  publisher: "Semeda Trading PLC",
  formatDetection: {
    email: true,
    address: true,
    telephone: true,
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://semedatrading.com",
    siteName: "Semeda Trading PLC",
    title: "Semeda Trading PLC | Excellence in Trading & Development",
    description:
      "Semeda Trading PLC is a premier Ethiopian company specializing in floriculture development, mining, and international import/export services. Based in Addis Ababa.",
    images: [
      {
        url: "/opengraph-image.png",
        width: 1200,
        height: 630,
        alt: "Semeda Trading PLC - Excellence in Trading & Development",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Semeda Trading PLC | Excellence in Trading & Development",
    description:
      "Semeda Trading PLC is a premier Ethiopian company specializing in floriculture development, mining, and international import/export services. Based in Addis Ababa.",
    images: ["/opengraph-image.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon-16x16.png",
    apple: "/apple-touch-icon.png",
  },
  manifest: "/site.webmanifest",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={cn(
        "h-full",
        "antialiased",
        geistSans.variable,
        geistMono.variable,
        inter.variable,
        "font-sans",
      )}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
