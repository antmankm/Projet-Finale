import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/ui/Navbar";
import { CartProvider } from "../components/ui/CartContext"; // Assurez-vous que le chemin est correct

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "RAJAB KEUR MASSAR",
  description: "Sama restaurant",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} font-sans bg-background text-foreground`}>
        {/* Barre de navigation */}
        <Navbar />

        {/* Envelopper le contenu principal avec CartProvider */}
        <CartProvider>
          {/* Contenu principal */}
          {children}
        </CartProvider>
      </body>
    </html>
  );
}