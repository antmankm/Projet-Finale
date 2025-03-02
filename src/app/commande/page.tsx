"use client";

import React, { useState } from "react";
import Link from "next/link";
import { useCart } from "../../components/ui/CartContext";
import { motion } from "framer-motion";

const CommandePage = () => {
  const { cartItems, clearCart } = useCart();
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "", // E-mail optionnel
    address: "",
    phone: "",
    paymentMethod: "livraison", 
  });

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      const total = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);

      // Stocker les données du client dans le localStorage
      localStorage.setItem("clientData", JSON.stringify({
        firstName: formData.firstName,
        lastName: formData.lastName,
        email: formData.email,
        address: formData.address,
        phone: formData.phone,
        paymentMethod: formData.paymentMethod,
      }));

      if (formData.paymentMethod === "maxit") {
        // Afficher les instructions pour payer via Maxit
        alert("Veuillez effectuer le paiement via l'application Maxit en utilisant les informations suivantes :\n\n" +
              `Montant : ${total} Fcfa\n` +
              `Numéro de téléphone : 77 123 45 67\n` +
              "Description : Commande");
        return; // Arrêter l'exécution pour éviter de vider le panier immédiatement
      }

      // Vider le panier après la commande
      clearCart();

      // Rediriger l'utilisateur vers une page de confirmation
      window.location.href = "/confirmation";
    } catch (err) {
      setError((err as Error).message || "Une erreur s'est produite lors du paiement.");
    } finally {
      setLoading(false);
    }
  };

  const total = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }} 
      animate={{ opacity: 1, y: 0 }} 
      transition={{ duration: 0.5 }} 
      className="min-h-screen bg-background py-12"
    >
      <div className="container mx-auto px-4">
        <h1 className="text-4xl md:text-5xl font-bold text-center text-white mb-8">
          Passer la commande
        </h1>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }} // Animation initiale : invisible et légèrement réduite
          animate={{ opacity: 1, scale: 1 }} // Animation d'entrée : apparaître et revenir à la taille normale
          transition={{ delay: 0.2, duration: 0.5 }} // Délai et durée de l'animation
          className="max-w-2xl mx-auto bg-card p-8 rounded-lg shadow-lg"
        >
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="firstName" className="block text-sm font-medium text-white">
                  Prénom
                </label>
                <input
                  type="text"
                  name="firstName"
                  id="firstName"
                  value={formData.firstName}
                  onChange={handleChange}
                  className="mt-1 block w-full px-4 py-2 bg-card border border-gray-600 rounded-lg text-white"
                  required
                />
              </div>
              <div>
                <label htmlFor="lastName" className="block text-sm font-medium text-white">
                  Nom
                </label>
                <input
                  type="text"
                  name="lastName"
                  id="lastName"
                  value={formData.lastName}
                  onChange={handleChange}
                  className="mt-1 block w-full px-4 py-2 bg-card border border-gray-600 rounded-lg text-white"
                  required
                />
              </div>
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium text-white">
                Email (optionnel)
              </label>
              <input
                type="email"
                name="email"
                id="email"
                value={formData.email}
                onChange={handleChange}
                className="mt-1 block w-full px-4 py-2 bg-card border border-gray-600 rounded-lg text-white"
              />
            </div>

            <div>
              <label htmlFor="address" className="block text-sm font-medium text-white">
                Adresse
              </label>
              <input
                type="text"
                name="address"
                id="address"
                value={formData.address}
                onChange={handleChange}
                className="mt-1 block w-full px-4 py-2 bg-card border border-gray-600 rounded-lg text-white"
                required
              />
            </div>

            <div>
              <label htmlFor="phone" className="block text-sm font-medium text-white">
                Téléphone
              </label>
              <input
                type="tel"
                name="phone"
                id="phone"
                value={formData.phone}
                onChange={handleChange}
                className="mt-1 block w-full px-4 py-2 bg-card border border-gray-600 rounded-lg text-white"
                required
              />
            </div>

            <div>
              <label htmlFor="paymentMethod" className="block text-sm font-medium text-white">
                Méthode de paiement
              </label>
              <select
                name="paymentMethod"
                id="paymentMethod"
                value={formData.paymentMethod}
                onChange={handleChange}
                className="mt-1 block w-full px-4 py-2 bg-card border border-gray-600 rounded-lg text-white"
                required
              >
                <option value="livraison">Paiement à la livraison</option>
                <option value="maxit">Paiement en ligne via Maxit</option>
              </select>
            </div>

            {formData.paymentMethod === "maxit" && (
              <motion.div
                initial={{ opacity: 0, y: 10 }} 
                animate={{ opacity: 1, y: 0 }} 
                transition={{ duration: 0.3 }} 
                className="bg-yellow-100 border-l-4 border-yellow-500 text-yellow-700 p-4"
              >
                <p>
                  Pour payer via Maxit, veuillez effectuer le transfert au numéro suivant :{" "}
                  <strong>77 889 04 15</strong>. Indiquez votre numéro de commande dans la description du transfert.
                </p>
                <p className="mt-2">
                  Montant à payer : <strong>{total} Fcfa</strong>.
                </p>
              </motion.div>
            )}

            {error && (
              <motion.div
                initial={{ opacity: 0, y: 10 }} 
                animate={{ opacity: 1, y: 0 }} 
                transition={{ duration: 0.3 }} 
                className="bg-red-100 border-l-4 border-red-500 text-red-700 p-4"
              >
                <p>{error}</p>
              </motion.div>
            )}

            <div className="mt-8">
              <h2 className="text-2xl font-bold text-white mb-4">
                Total : {total} Fcfa
              </h2>
              <motion.button
                whileHover={{ scale: 1.05 }} 
                whileTap={{ scale: 0.95 }} 
                type="submit"
                disabled={loading}
                className="w-full bg-primary text-primary-foreground px-8 py-3 rounded-lg text-lg font-semibold hover:bg-primary/90 transition-colors"
              >
                {loading ? "Traitement en cours..." : "Confirmer la commande"}
              </motion.button>
            </div>
          </form>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default CommandePage;