"use client";
import React, { useCallback } from "react";
import Image from "next/image";
import Link from "next/link";
import { FaPhone, FaClock, FaShoppingCart } from "react-icons/fa";
import { useCart } from "../../components/ui/CartContext";
import { motion } from "framer-motion";

// Données des menus de nourriture
const foodItems = [
  {
    id: 1,
    name: "Burger Classique",
    description: "Un délicieux burger avec du bœuf grillé, fromage, laitue, tomate et sauce maison.",
    price: "1500 Fcfa",
    image: "/burger.jpg",
  },
  {
    id: 2,
    name: "Pizza Margherita",
    description: "Une pizza traditionnelle avec de la sauce tomate, mozzarella et basilic frais.",
    price: "3000 Fcfa",
    image: "/pizza.jpg",
  },
  {
    id: 3,
    name: "Tacos Viande",
    description: "Tacos garni de viande marinée, fromage, légumes frais et sauce au choix.",
    price: "2000 Fcfa",
    image: "/tacosviande.jpg",
  },
  {
    id: 4,
    name: "Tacos Poulet",
    description: "Tacos garni de poulet grillé, fromage, légumes frais et sauce au choix.",
    price: "2000 Fcfa",
    image: "/tacospoulet.jpg",
  },
  {
    id: 5,
    name: "Chawarma Viande",
    description: "Chawarma à la viande marinée, accompagné de légumes frais et de sauce à l'ail.",
    price: "1700 fcfa",
    image: "/chawarmaviande.jpg",
  },
  {
    id: 6,
    name: "Chawarma Poulet",
    description: "Chawarma au poulet grillé, accompagné de légumes frais et de sauce à l'ail.",
    price: "1700 Fcfa",
    image: "/chawarmapoulet.jpg",
  },
  {
    id: 7,
    name: "Fataya Complète",
    description: "Fataya garnie de viande hachée, œuf, légumes et épices, servie avec une sauce piquante.",
    price: "500 Fcfa",
    image: "/fataya.jpg",
  },
  {
    id: 8,
    name: "Pizza Grande",
    description: "Pizza grande avec une variété de garnitures au choix : viande, légumes, fromage, etc.",
    price: "5000 Fcfa",
    image: "/pizzagm.jpg",
  },
  {
    id: 9,
    name: "Poulet Pané",
    description: "Poulet pané croustillant accompagné de frites et de sauce au choix.",
    price: "2500 Fcfa",
    image: "/pouletpanne.jpg",
  },
];

interface FoodItemProps {
  item: {
    id: number;
    name: string;
    description: string;
    price: string;
    image: string;
  };
  addToCart: (item: { id: number; name: string; price: number; image: string; quantity: number }) => void;
}

const FoodItem: React.FC<FoodItemProps> = React.memo(({ item, addToCart }) => {
  const handleAddToCart = useCallback(() => {
    addToCart({
      id: item.id,
      name: item.name,
      price: parseInt(item.price.replace(/\D/g, "")),
      image: item.image,
      quantity: 1,
    });
  }, [addToCart, item]);

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
      whileHover={{ scale: 1.05 }}
      className="bg-card rounded-lg shadow-lg overflow-hidden"
    >
      <div className="relative h-48 w-full">
        <Image
          src={item.image}
          alt={item.name}
          fill
          className="object-cover"
          onError={(e) => {
            (e.target as HTMLImageElement).src = "/fallback-image.jpg"; // Image de remplacement en cas d'erreur
          }}
        />
      </div>

      <div className="p-6">
        <h2 className="text-2xl font-bold text-white mb-2">{item.name}</h2>
        <p className="text-muted-foreground mb-4">{item.description}</p>
        <p className="text-primary font-semibold text-lg">{item.price}</p>
        <motion.button
          onClick={handleAddToCart}
          whileTap={{ scale: 0.95 }}
          className="flex items-center text-primary mt-4"
          aria-label={`Ajouter ${item.name} au panier`}
        >
          <FaShoppingCart className="mr-2 font-bold" />
          <span>Commander</span>
        </motion.button>
      </div>
    </motion.div>
  );
});

FoodItem.displayName = 'FoodItem';

const PageFood = () => {
  const { addToCart } = useCart();

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen bg-background py-12"
    >
      <div className="container mx-auto px-4">
        <h1 className="text-4xl md:text-5xl font-bold text-center text-white mb-8">
          Nos Menus
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {foodItems.map((item) => (
            <FoodItem key={item.id} item={item} addToCart={addToCart} />
          ))}
        </div>

        <div className="text-center mt-12">
          <Link
            href="/drinks"
            className="inline-block bg-transparent border border-primary text-primary px-8 py-3 rounded-lg text-lg font-semibold hover:bg-primary/10 transition-all transform hover:scale-105"
            aria-label="Voir nos boissons"
          >
            Nos Boissons
          </Link>
        </div>
      </div>
    </motion.div>
  );
};

export default PageFood;