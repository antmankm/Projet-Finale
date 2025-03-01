"use client";

import React from "react";
import Link from "next/link";

const ConfirmationPage = () => {
  return (
    <div className="min-h-screen bg-background py-12">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl md:text-5xl font-bold text-center text-white mb-8">
          Commande confirmée
        </h1>
        <div className="text-center">
          <p className="text-lg text-white mb-8">
            Merci pour votre commande! Nous vous contacterons bientôt pour confirmer les détails de livraison.
          </p>
          <Link
            href="/"
            className="inline-block bg-primary text-primary-foreground px-8 py-3 rounded-lg text-lg font-semibold hover:bg-primary/90 transition-colors"
          >
            Retour à l'accueil
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ConfirmationPage;