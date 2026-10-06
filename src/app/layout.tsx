import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: {
    default: "PristineClean | Premium Commercial Cleaning Services",
    template: "%s | PristineClean",
  },
  description:
    "Premium commercial cleaning services for offices and businesses. Reliable, accountable, and immaculate. Serving London and the M25 corridor.",
  keywords: [
    "commercial cleaning",
    "office cleaning",
    "cleaning services London",
    "professional cleaning",
    "contract cleaning",
  ],
  openGraph: {
    title: "PristineClean | Premium Commercial Cleaning Services",
    description:
      "Impeccable commercial cleaning for offices and businesses. Serving London and the M25 corridor.",
    type: "website",
    locale: "en_GB",
    siteName: "PristineClean",
  },
  icons: {
    icon: "/images/pristineclean-logo.jpg",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable}`}>
      <body className="flex min-h-screen flex-col font-sans antialiased">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
