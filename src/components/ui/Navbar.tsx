"use client"; // Ce composant utilise des hooks, donc il doit être un composant client

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false); // État pour gérer l'ouverture/fermeture du menu

  return (
    <nav className="w-full bg-card border-b border-border">
      <div className="container mx-auto flex items-center justify-between px-2 py-1">
        {/* Logo et nom du restaurant */}
        <Link href="/" className="flex items-center">
          <Image
            src="/logo2.png" // Remplace par le chemin de ton logo
            alt="Logo"
            width={50}
            height={50}
            className="rounded-full"
          />
          <h1 className="text-xl font-bold ml-2 text-white"><span className="text-yellow-500 font-bold">RAJAB</span> KEUR MASSAR</h1>
        </Link>

        {/* Bouton Hamburger pour les petits écrans */}
        <button
          className="md:hidden text-white focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"}
            />
          </svg>
        </button>

        {/* Liens de navigation (visibles sur les écrans moyens et larges) */}
        <div className="hidden md:flex items-center space-x-4">
          <Link href="/" className="text-white font-bold hover:text-yellow-500 transition-colors">
            Home
          </Link>
          <Link href="/about" className="text-white font-bold hover:text-yellow-500 transition-colors">
            About
          </Link>
          <Link href="/food" className="text-white font-bold hover:text-yellow-500 transition-colors">
            Food
          </Link>
          <Link href="/drinks" className="text-white font-bold hover:text-yellow-500 transition-colors">
            Drinks
          </Link>
          <Link href="/contact" className="text-white font-bold hover:text-yellow-500 transition-colors">
            Contact
          </Link>
        </div>

        {/* Bouton Panier */}
        <Link
          href="/cart"
          className="bg-primary text-primary-foreground px-5 py-1 rounded-lg hover:text-yellow-500 transition-colors text-sm"
        >
          Panier
        </Link>
      </div>

      {/* Menu déroulant pour les petits écrans */}
      {isOpen && (
        <div className="md:hidden bg-card mt-2 pb-2">
          <Link href="/" className="block px-4 py-2 text-white hover:bg-primary/10">
            Home
          </Link>
          <Link href="/about" className="block px-4 py-2 text-white hover:bg-primary/10">
            About
          </Link>
          <Link href="/food" className="block px-4 py-2 text-white hover:bg-primary/10">
            Food
          </Link>
          <Link href="/drinks" className="block px-4 py-2 text-white hover:bg-primary/10">
            Drinks
          </Link>
          <Link href="/contact" className="block px-4 py-2 text-white hover:bg-primary/10">
            Contact
          </Link>
        </div>
      )}
    </nav>
  );
}