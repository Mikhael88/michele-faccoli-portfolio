import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";
import { ActivePathSync } from "@/components/providers/ActivePathSync";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Michele Faccoli | 3D Artist - Modellazione, Scan & Stampa 3D",
  description: "Portfolio di Michele Faccoli, 3D Artist specializzato in modellazione 3D, 3D Scan & Retopology, CAD to 3D, AI Generation, animazioni industriali e stampa 3D tecnica. Servizi per agenzie creative e aziende industriali.",
  keywords: ["3D Artist", "Modellazione 3D", "3D Scan", "Retopology", "CAD to 3D", "Stampa 3D", "Animazioni 3D", "Italy", "Michele Faccoli", "Blender", "ZBrush", "Creality"],
  authors: [{ name: "Michele Faccoli" }],
  creator: "Michele Faccoli",
  icons: {
    icon: "/logo.svg",
  },
  openGraph: {
    title: "Michele Faccoli | 3D Artist",
    description: "Trasformo idee in esperienze 3D immersive. Modellazione, Scan, CAD conversion e Stampa 3D.",
    url: "https://michelefaccoli.com",
    siteName: "Michele Faccoli Portfolio",
    type: "website",
    locale: "it_IT",
    images: [
      {
        url: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1200&q=80",
        width: 1200,
        height: 630,
        alt: "Michele Faccoli - 3D Artist Portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Michele Faccoli | 3D Artist",
    description: "Trasformo idee in esperienze 3D immersive. Modellazione, Scan, CAD conversion e Stampa 3D.",
    images: ["https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1200&q=80"],
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: "https://michelefaccoli.com",
  },
  category: "Portfolio",
};

// Structured Data for Portfolio
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  "name": "Michele Faccoli",
  "jobTitle": "3D Artist",
  "description": "3D Artist specializzato in modellazione, 3D Scan, CAD conversion e stampa 3D",
  "url": "https://michelefaccoli.com",
  "sameAs": [
    "https://linkedin.com/in/michelefaccoli",
    "https://artstation.com/michelefaccoli",
    "https://behance.net/michelefaccoli",
  ],
  "knowsAbout": [
    "3D Modeling",
    "3D Scanning",
    "Retopology",
    "CAD Conversion",
    "3D Printing",
    "Animation",
    "Blender",
    "ZBrush",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="it" className="dark" suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-background text-foreground`}
      >
        <ActivePathSync />
        {children}
        <Toaster />
      </body>
    </html>
  );
}
