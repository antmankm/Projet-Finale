"use client";

import React from "react";
import Link from "next/link";
import { FaTrash, FaPlus, FaMinus } from "react-icons/fa";
import { useCart } from "../../components/ui/CartContext";

const PanierPage = () => {
  const { cartItems, removeFromCart, updateQuantity } = useCart();
  const total = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);

  return (
    <div className="min-h-screen bg-background py-12">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl md:text-5xl font-bold text-center text-white mb-8">
          Votre Panier
        </h1>

        <div className="space-y-6">
          {cartItems.map((item) => (
            <div
              key={item.id}
              className="bg-card rounded-lg shadow-lg p-6 flex flex-col md:flex-row items-center justify-between"
            >
              <div className="flex items-center space-x-4">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-16 h-16 rounded-lg object-cover"
                />
                <h2 className="text-xl font-bold text-white">{item.name}</h2>
              </div>

              <div className="flex items-center space-x-4 mt-4 md:mt-0">
                <div className="flex items-center space-x-2">
                  <button
                    onClick={() => updateQuantity(item.id, item.quantity - 1)}
                    className="p-2 bg-primary rounded-lg text-white hover:bg-primary/90"
                  >
                    <FaMinus />
                  </button>
                  <span className="text-lg text-white">{item.quantity}</span>
                  <button
                    onClick={() => updateQuantity(item.id, item.quantity + 1)}
                    className="p-2 bg-primary rounded-lg text-white hover:bg-primary/90"
                  >
                    <FaPlus />
                  </button>
                </div>
                <p className="text-lg text-white">{item.price * item.quantity} Fcfa</p>
                <button
                  onClick={() => removeFromCart(item.id)}
                  className="p-2 bg-red-500 rounded-lg text-white hover:bg-red-600"
                >
                  <FaTrash />
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <h2 className="text-2xl font-bold text-white mb-4">
            Total : {total} Fcfa
          </h2>
          <Link
            href="/commande"
            className="inline-block bg-primary text-primary-foreground px-8 py-3 rounded-lg text-lg font-semibold hover:bg-primary/90 transition-colors"
          >
            Passer la commande
          </Link>
        </div>
      </div>
    </div>
  );
};

export default PanierPage;