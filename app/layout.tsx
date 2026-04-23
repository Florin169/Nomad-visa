import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// 1. High-Authority Metadata targeting our 2026 Audit
export const metadata: Metadata = {
  title: "NOMADTAX 2026 | Digital Nomad Visa & Tax Savings Index",
  description: "The global benchmark for digital nomad tax optimization. Calculate net savings, living costs, and 2026 residency requirements for Spain, France, South Korea, and 15+ breakout hubs.",
  keywords: "digital nomad tax calculator 2026, spain nomad visa requirements, france talent passport savings, best countries for 0% tax nomads, nomad residency roadmap",
  authors: [{ name: "NomadTax Intelligence" }],
  creator: "NomadTax",
  publisher: "NomadTax",
  robots: "index, follow",
  alternates: {
    canonical: "https://nomadtax.io", // Replace with your actual domain
  },
  openGraph: {
    title: "NOMADTAX 2026 | Intelligence Dashboard",
    description: "Mathematical transparency for your next global move. Compare 15+ countries side-by-side.",
    url: "https://nomadtax.io",
    siteName: "NomadTax",
    images: [
      {
        url: "/og-image.png", // Make sure to add an OG image to your public folder
        width: 1200,
        height: 630,
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "NOMADTAX 2026 | Digital Nomad Index",
    description: "Calculate your net savings after tax and rent in 15+ countries.",
  },
};

// 2. Mobile UI / Theme Optimization
export const viewport: Viewport = {
  themeColor: "#020617",
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // 3. JSON-LD Schema (Tells Google this is a professional Financial Tool)
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "name": "NomadTax 2026 Calculator",
    "operatingSystem": "Web",
    "applicationCategory": "FinanceApplication",
    "description": "A mathematical transparency tool for digital nomads to calculate tax savings and residency paths.",
    "offers": {
      "@type": "Offer",
      "price": "0",
      "priceCurrency": "USD"
    }
  };

  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased dark`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="bg-zinc-950 text-zinc-400 min-h-full flex flex-col selection:bg-blue-500/30">
        {children}
      </body>
    </html>
  );
}