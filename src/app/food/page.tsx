import React from "react";
import Image from "next/image";
import Link from "next/link";

// Données des menus de nourriture (tu peux les remplacer par des données dynamiques)
const foodItems = [
  {
    id: 1,
    name: "Burger Classique",
    description: "Un délicieux burger avec du bœuf grillé, fromage, laitue, tomate et sauce maison.",
    price: "10 €",
    image: "/burger.jpg", // Remplace par le chemin de ton image
  },
  {
    id: 2,
    name: "Pizza Margherita",
    description: "Une pizza traditionnelle avec de la sauce tomate, mozzarella et basilic frais.",
    price: "12 €",
    image: "/pizza.jpg", // Remplace par le chemin de ton image
  },
  {
    id: 3,
    name: "Tacos Viande",
    description: "Tacos garni de viande marinée, fromage, légumes frais et sauce au choix.",
    price: "9 €",
    image: "/tacosviande.jpg", // Remplace par le chemin de ton image
  },
  {
    id: 4,
    name: "Tacos Poulet",
    description: "Tacos garni de poulet grillé, fromage, légumes frais et sauce au choix.",
    price: "9 €",
    image: "/tacospoulet.jpg", // Remplace par le chemin de ton image
  },
  {
    id: 5,
    name: "Chawarma Viande",
    description: "Chawarma à la viande marinée, accompagné de légumes frais et de sauce à l'ail.",
    price: "8 €",
    image: "/chawarmaviande.jpg", // Remplace par le chemin de ton image
  },
  {
    id: 6,
    name: "Chawarma Poulet",
    description: "Chawarma au poulet grillé, accompagné de légumes frais et de sauce à l'ail.",
    price: "8 €",
    image: "/chawarmapoulet.jpg", // Remplace par le chemin de ton image
  },
  {
    id: 7,
    name: "Fataya Complète",
    description: "Fataya garnie de viande hachée, œuf, légumes et épices, servie avec une sauce piquante.",
    price: "7 €",
    image: "/fataya.jpg", // Remplace par le chemin de ton image
  },
  {
    id: 8,
    name: "Pizza Grande",
    description: "Pizza grande avec une variété de garnitures au choix : viande, légumes, fromage, etc.",
    price: "15 €",
    image: "/pizzagm.jpg", // Remplace par le chemin de ton image
  },
  {
    id: 9,
    name: "Poulet Pané",
    description: "Poulet pané croustillant accompagné de frites et de sauce au choix.",
    price: "8 €",
    image: "/pouletpanne.jpg", // Remplace par le chemin de ton image
  },
];

const PageFood = () => {
  return (
    <div className="min-h-screen bg-background py-12">
      <div className="container mx-auto px-4">
        {/* Titre de la page */}
        <h1 className="text-4xl md:text-5xl font-bold text-center text-white mb-8">
          Nos Menus de Nourriture
        </h1>

        {/* Grille des menus de nourriture */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {foodItems.map((item) => (
            <div
              key={item.id}
              className="bg-card rounded-lg shadow-lg overflow-hidden transform hover:scale-105 transition-transform duration-300"
            >
              {/* Image du menu */}
              <div className="relative h-48 w-full">
                <Image
                  src={item.image}
                  alt={item.name}
                  fill
                  className="object-cover"
                />
              </div>

              {/* Contenu de la carte */}
              <div className="p-6">
                <h2 className="text-2xl font-bold text-white mb-2">{item.name}</h2>
                <p className="text-muted-foreground mb-4">{item.description}</p>
                <p className="text-primary font-semibold text-lg">{item.price}</p>
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

export default PageFood;