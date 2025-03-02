"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { CheckCircle } from "lucide-react";

const ConfirmationPage = () => {
  const [clientData, setClientData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    address: "",
    phone: "",
    paymentMethod: "",
  });

  // Récupérer les données du client depuis le localStorage
  useEffect(() => {
    const storedData = localStorage.getItem("clientData");
    if (storedData) {
      setClientData(JSON.parse(storedData));
    }
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen bg-background py-12"
    >
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="max-w-2xl mx-auto bg-card p-8 rounded-lg shadow-lg text-center"
        >
          {/* Icône de confirmation */}
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.4, duration: 0.5 }}
            className="flex justify-center mb-6"
          >
            <CheckCircle className="w-16 h-16 text-green-500" />
          </motion.div>

          <h1 className="text-4xl md:text-5xl font-bold text-white mb-8">
            Commande confirmée !
          </h1>

          {/* Message de confirmation */}
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.5 }}
            className="text-lg text-white mb-8"
          >
            Merci pour votre commande, <strong>{clientData.firstName} {clientData.lastName}</strong> !
          </motion.p>

          {/* Résumé de la commande */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.5 }}
            className="bg-gray-800 p-6 rounded-lg text-left mb-8"
          >
            <h2 className="text-2xl font-bold text-white mb-4">Résumé de la commande</h2>
            <p className="text-white mb-2">
              <strong>Prénom :</strong> {clientData.firstName}
            </p>
            <p className="text-white mb-2">
              <strong>Nom :</strong> {clientData.lastName}
            </p>
            <p className="text-white mb-2">
              <strong>Email :</strong> {clientData.email || "Non renseigné"}
            </p>
            <p className="text-white mb-2">
              <strong>Adresse :</strong> {clientData.address}
            </p>
            <p className="text-white mb-2">
              <strong>Téléphone :</strong> {clientData.phone}
            </p>
            <p className="text-white mb-2">
              <strong>Méthode de paiement :</strong>{" "}
              {clientData.paymentMethod === "livraison"
                ? "Paiement à la livraison"
                : "Paiement en ligne via Orange Money"}
            </p>
          </motion.div>

          {/* Bouton de retour à l'accueil */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2, duration: 0.5 }}
          >
            <Link
              href="/"
              className="inline-block bg-primary text-primary-foreground px-8 py-3 rounded-lg text-lg font-semibold hover:bg-primary/90 transition-colors"
            >
              Retour à l'accueil
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default ConfirmationPage;