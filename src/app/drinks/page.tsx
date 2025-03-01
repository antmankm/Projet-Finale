"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { FaPhone, FaClock, FaShoppingCart } from "react-icons/fa";
import { useCart } from "../../components/ui/CartContext";

// Données des boissons (tu peux les remplacer par des données dynamiques)
const drinks = [
  {
    id: 1,
    name: "Cocktail Mojito",
    description: "Un classique rafraîchissant à base de rhum, menthe, citron vert et soda.",
    price: "1000 Fcfa",
    image: "/mojito.jpg", // Remplace par le chemin de ton image
  },
  {
    id: 2,
    name: "Jus de Fruits Naturels",
    description: "Jus pressés à froid à base de fruits frais de saison.",
    price: "500 Fcfa",
    image: "/naturel.jpg", // Remplace par le chemin de ton image
  },
  {
    id: 3,
    name: "Canette de Soda",
    description: "Soda classique en canette (Coca-Cola, Fanta, Sprite, etc.).",
    price: "300 Fcfa",
    image: "/canette.jpg", // Remplace par le chemin de ton image
  },
  {
    id: 4,
    name: "Thé à la Menthe",
    description: "Thé vert infusé avec des feuilles de menthe fraîche, sucré à volonté.",
    price: "150 Fcfa",
    image: "/ataya.jpg", // Remplace par le chemin de ton image
  },
];

const PageDrinks = () => {
  const { addToCart } = useCart();

  return (
    <div className="min-h-screen bg-background py-12">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl md:text-5xl font-bold text-center text-white mb-8">
          Nos Boissons
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {drinks.map((item) => (
            <div
              key={item.id}
              className="bg-card rounded-lg shadow-lg overflow-hidden transform hover:scale-105 transition-transform duration-300"
            >
              <div className="relative h-48 w-full">
                <Image
                  src={item.image}
                  alt={item.name}
                  fill
                  className="object-cover"
                />
              </div>

              <div className="p-6">
                <h2 className="text-2xl font-bold text-white mb-2">{item.name}</h2>
                <p className="text-muted-foreground mb-4">{item.description}</p>
                <p className="text-primary font-semibold text-lg">{item.price}</p>
                <button
                  onClick={() =>
                    addToCart({
                      id: item.id,
                      name: item.name,
                      price: parseInt(item.price.replace(/\D/g, "")),
                      image: item.image,
                      quantity: 1,
                    })
                  }
                  className="flex items-center text-primary mt-4"
                >
                  <FaShoppingCart className="mr-2" />
                  <span>Commander</span>
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link
            href="/panier"
            className="inline-block bg-primary text-primary-foreground px-8 py-3 rounded-lg text-lg font-semibold hover:bg-primary/90 transition-colors"
          >
            Voir mon panier
          </Link>
        </div>
      </div>
    </div>
  );
};

export default PageDrinks;