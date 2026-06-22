import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

export const viewport: Viewport = {
  themeColor: "#09090b",
  colorScheme: "dark",
};

export const metadata: Metadata = {
  title: "Andrii Dotsia — Senior Frontend & React Native Engineer",
  description:
    "Senior Frontend & React Native Engineer and Technical Lead with 10+ years of experience delivering production-grade web and mobile applications.",
  keywords: [
    "frontend engineer",
    "react native engineer",
    "senior software engineer",
    "technical lead",
    "Next.js developer",
    "TypeScript engineer",
    "React developer",
    "Andrii Dotsia",
  ],
  authors: [{ name: "Andrii Dotsia" }],
  creator: "Andrii Dotsia",
  openGraph: {
    title: "Andrii Dotsia — Senior Frontend & React Native Engineer",
    description:
      "Building scalable web and mobile products that solve real business problems.",
    type: "website",
    url: "https://andreydos.github.io",
    siteName: "Andrii Dotsia",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Andrii Dotsia — Senior Frontend & React Native Engineer",
    description:
      "Building scalable web and mobile products that solve real business problems.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} dark`}>
      <body className="font-sans antialiased bg-zinc-950 text-zinc-50 overflow-x-hidden">
        {children}
      </body>
    </html>
  );
}
