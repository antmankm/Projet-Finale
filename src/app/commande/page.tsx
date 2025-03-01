"use client";

import React, { useState } from "react";
import Link from "next/link";
import { useCart } from "../../components/ui/CartContext";

const CommandePage = () => {
  const { cartItems, clearCart } = useCart();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    address: "",
    phone: "",
    paymentMethod: "livraison", // Par défaut, le paiement à la livraison est sélectionné
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

      if (formData.paymentMethod === "orange_money") {
        const response = await fetch("/api/payment/orangeMoney", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            amount: total,
            phone: formData.phone,
            description: `Commande ${cartItems.map((item) => item.name).join(", ")}`,
          }),
        });

        const data = await response.json();

        if (!response.ok) {
          throw new Error(data.error || "Erreur lors du paiement");
        }

        console.log("Paiement réussi:", data);
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
    <div className="min-h-screen bg-background py-12">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl md:text-5xl font-bold text-center text-white mb-8">
          Passer la commande
        </h1>

        <div className="max-w-2xl mx-auto">
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Champs du formulaire (nom, email, adresse, téléphone) */}
            {/* ... (voir le code précédent pour les champs) ... */}

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
                <option value="orange_money">Paiement en ligne via Orange Money</option>
                
              </select>
            </div>

            {/* Affichage des instructions en fonction du mode de paiement */}
            {formData.paymentMethod === "orange_money" && (
              <div className="bg-yellow-100 border-l-4 border-yellow-500 text-yellow-700 p-4">
                <p>
                  Pour payer via Orange Money, veuillez effectuer le transfert au numéro suivant :{" "}
                  <strong>77 123 45 67</strong>. Indiquez votre numéro de commande dans la description du transfert.
                </p>
              </div>
            )}

            {/* Affichage des erreurs */}
            {error && (
              <div className="bg-red-100 border-l-4 border-red-500 text-red-700 p-4">
                <p>{error}</p>
              </div>
            )}

            <div className="mt-8">
              <h2 className="text-2xl font-bold text-white mb-4">
                Total : {total} Fcfa
              </h2>
              <button
                type="submit"
                disabled={loading}
                className="w-full bg-primary text-primary-foreground px-8 py-3 rounded-lg text-lg font-semibold hover:bg-primary/90 transition-colors"
              >
                {loading ? "Traitement en cours..." : "Confirmer la commande"}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default CommandePage;