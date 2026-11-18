import type { Metadata } from "next";
import { Plus_Jakarta_Sans, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { SITE_INFO } from "@/data/site";

const plusJakarta = Plus_Jakarta_Sans({
  variable: "--font-jakarta",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  weight: ["400", "500"],
  display: "swap",
});

export const metadata: Metadata = {
  title: `${SITE_INFO.name} | Kitchen, Bath, Flooring & Painting in Boston, MA`,
  description:
    "Over 20 years of residential renovation craftsmanship across Greater Boston. Licensed and insured specialists in kitchen remodeling, bathrooms, hardwood flooring, custom staircases, and interior painting.",
  icons: {
    icon: "/images/ashori-logo.png",
  },
  openGraph: {
    title: `${SITE_INFO.name} | Residential Remodeling in Boston, MA`,
    description:
      "Kitchen renovations, bathroom remodeling, custom hardwood flooring, and interior painting backed by 20+ years of experience.",
    type: "website",
    locale: "en_US",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${plusJakarta.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-canvas text-ink selection:bg-accent-soft selection:text-ink">
        <a
          href="#main-content"
          className="visually-hidden focus:fixed focus:top-4 focus:left-4 focus:z-50 focus:rounded-full focus:bg-accent focus:px-5 focus:py-3 focus:text-sm focus:font-semibold focus:text-white focus:shadow-lg"
        >
          Skip to main content
        </a>
        <Navbar />
        <main id="main-content" className="flex-1">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
