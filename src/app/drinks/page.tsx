import React from "react";
import Image from "next/image";
import Link from "next/link";

// Données des boissons (tu peux les remplacer par des données dynamiques)
const drinks = [
  {
    id: 1,
    name: "Cocktail Mojito",
    description: "Un classique rafraîchissant à base de rhum, menthe, citron vert et soda.",
    price: "8 €",
    image: "/mojito.jpg", // Remplace par le chemin de ton image
  },
  {
    id: 2,
    name: "Jus de Fruits Naturels",
    description: "Jus pressés à froid à base de fruits frais de saison.",
    price: "5 €",
    image: "/jus-fruits.jpg", // Remplace par le chemin de ton image
  },
  {
    id: 3,
    name: "Café Arabica",
    description: "Café torréfié artisanalement, servi avec ou sans lait.",
    price: "3 €",
    image: "/cafe.jpg", // Remplace par le chemin de ton image
  },
  {
    id: 4,
    name: "Thé à la Menthe",
    description: "Thé vert infusé avec des feuilles de menthe fraîche, sucré à volonté.",
    price: "4 €",
    image: "/the-menthe.jpg", // Remplace par le chemin de ton image
  },
];

const PageDrinks = () => {
  return (
    <div className="min-h-screen bg-background py-12">
      <div className="container mx-auto px-4">
        {/* Titre de la page */}
        <h1 className="text-4xl md:text-5xl font-bold text-center text-white mb-8">
          Nos Boissons
        </h1>

        {/* Grille des boissons */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {drinks.map((drink) => (
            <div
              key={drink.id}
              className="bg-card rounded-lg shadow-lg overflow-hidden transform hover:scale-105 transition-transform duration-300"
            >
              {/* Image de la boisson */}
              <div className="relative h-48 w-full">
                <Image
                  src={drink.image}
                  alt={drink.name}
                  fill
                  className="object-cover"
                />
              </div>

              {/* Contenu de la carte */}
              <div className="p-6">
                <h2 className="text-2xl font-bold text-white mb-2">{drink.name}</h2>
                <p className="text-muted-foreground mb-4">{drink.description}</p>
                <p className="text-primary font-semibold text-lg">{drink.price}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Bouton pour commander */}
        <div className="text-center mt-12">
          <Link
            href="/commander"
            className="inline-block bg-primary text-primary-foreground px-8 py-3 rounded-lg text-lg font-semibold hover:bg-primary/90 transition-colors"
          >
            Commander maintenant
          </Link>
        </div>
      </div>

      
      
    </div>
  );
};

export default PageDrinks;