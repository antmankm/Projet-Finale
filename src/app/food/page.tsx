"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { FaPhone, FaClock, FaShoppingCart } from "react-icons/fa";
import { useCart } from "../../components/ui/CartContext";



// Données des menus de nourriture (tu peux les remplacer par des données dynamiques)
const foodItems = [
  {
    id: 1,
    name: "Burger Classique",
    description: "Un délicieux burger avec du bœuf grillé, fromage, laitue, tomate et sauce maison.",
    price: "1500 Fcfa", 
    image: "/burger.jpg", // Remplace par le chemin de ton image
  },
  {
    id: 2,
    name: "Pizza Margherita",
    description: "Une pizza traditionnelle avec de la sauce tomate, mozzarella et basilic frais.",
    price: "3000 Fcfa",
    image: "/pizza.jpg", // Remplace par le chemin de ton image
  },
  {
    id: 3,
    name: "Tacos Viande",
    description: "Tacos garni de viande marinée, fromage, légumes frais et sauce au choix.",
    price: "2000 Fcfa",
    image: "/tacosviande.jpg", // Remplace par le chemin de ton image
  },
  {
    id: 4,
    name: "Tacos Poulet",
    description: "Tacos garni de poulet grillé, fromage, légumes frais et sauce au choix.",
    price: "2000 Fcfa",
    image: "/tacospoulet.jpg", // Remplace par le chemin de ton image
  },
  {
    id: 5,
    name: "Chawarma Viande",
    description: "Chawarma à la viande marinée, accompagné de légumes frais et de sauce à l'ail.",
    price: "1700 fcfa",
    image: "/chawarmaviande.jpg", // Remplace par le chemin de ton image
  },
  {
    id: 6,
    name: "Chawarma Poulet",
    description: "Chawarma au poulet grillé, accompagné de légumes frais et de sauce à l'ail.",
    price: "1700 Fcfa",
    image: "/chawarmapoulet.jpg", // Remplace par le chemin de ton image
  },
  {
    id: 7,
    name: "Fataya Complète",
    description: "Fataya garnie de viande hachée, œuf, légumes et épices, servie avec une sauce piquante.",
    price: "500 Fcfa",
    image: "/fataya.jpg", // Remplace par le chemin de ton image
  },
  {
    id: 8,
    name: "Pizza Grande",
    description: "Pizza grande avec une variété de garnitures au choix : viande, légumes, fromage, etc.",
    price: "5000 Fcfa",
    image: "/pizzagm.jpg", // Remplace par le chemin de ton image
  },
  {
    id: 9,
    name: "Poulet Pané",
    description: "Poulet pané croustillant accompagné de frites et de sauce au choix.",
    price: "2500 Fcfa",
    image: "/pouletpanne.jpg", // Remplace par le chemin de ton image
  },
];

const PageFood = () => {
  const { addToCart } = useCart();

  return (
    <div className="min-h-screen bg-background py-12">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl md:text-5xl font-bold text-center text-white mb-8">
          Nos Menus 
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {foodItems.map((item) => (
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
            href="/drinks"
            className="inline-block bg-primary text-primary-foreground px-8 py-3 rounded-lg text-lg font-semibold hover:bg-primary/90 transition-colors"
          >
            Nos Boissons
          </Link>
        </div>
      </div>
    </div>
  );
};

export default PageFood;