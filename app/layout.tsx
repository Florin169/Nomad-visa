import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Script from 'next/script'

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
  title: "NomadTaxIndex 2026 | Digital Nomad Visa Comparison & Tax Savings Index",
  description: "The global benchmark for 2026 digital nomad visa requirements. Compare income thresholds, tax rates, and net savings for 11 countries with mathematical transparency.",
  keywords: "digital nomad tax calculator 2026, spain nomad visa requirements, france talent passport savings, best countries for 0% tax nomads, nomad residency roadmap, digital nomad visa countries, digital nomad tax calculator 2026, remote work visa requirements, spain digital nomad visa income, brazil nomad visa 2026",
  authors: [{ name: "NomadTaxIndex Intelligence" }],
  creator: "NomadTaxIndex",
  publisher: "NomadTaxIndex",
  robots: "index, follow",
  
  openGraph: {
    title: "NomadTaxIndex 2026 | Intelligence Dashboard",
    description: "Mathematical transparency for your next global move. Compare 11 countries side-by-side.",
    url: "https://www.nomadtaxindex.com",
    siteName: "NomadTaxIndex",
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
    title: "NomadTaxIndex 2026 | Digital Nomad Index",
    description: "Calculate your net savings after tax and rent in 11 countries.",
  },
  icons: {
  icon: '/favicon.ico', // Standard favicon
  shortcut: '/favicon-32x32.png', // Secondary
  apple: '/apple-touch-icon.png', // Apple specific
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
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased dark`}
    >
      <body className="bg-zinc-950 text-zinc-400 min-h-full flex flex-col selection:bg-blue-500/30">
        {children}
        
        {/* Microsoft Clarity Script */}
        <Script
          id="microsoft-clarity"
          strategy="afterInteractive"
        >
          {`
            (function(c,l,a,r,i,t,y){
                c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
                t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
                y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
            })(window, document, "clarity", "script", "wieu672stq");
          `}
        </Script>
      </body>
    </html>
  );
}