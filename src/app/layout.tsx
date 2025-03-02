import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/ui/Navbar";
import { CartProvider } from "../components/ui/CartContext"; 

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
        <CartProvider>
          {/* Barre de navigation */}
          <Navbar />

          {/* Contenu principal avec une marge en haut pour compenser la hauteur de la Navbar */}
          <main className="pt-20"> {/* Ajout de pt-16 pour compenser la hauteur de la Navbar */}
            {children}
          </main>
        </CartProvider>
      </body>
    </html>
  );
}