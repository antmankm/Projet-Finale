"use client";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const ReservationPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    date: new Date(),
    time: "",
    guests: 1,
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitted(true);
    console.log("Données du formulaire :", formData);
    // Ajoutez ici la logique pour envoyer les données à votre backend
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-background py-12">
      <div className="bg-card p-8 rounded-lg shadow-lg max-w-md w-full">
        {isSubmitted ? (
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h2 className="text-3xl font-bold text-white mb-4">Merci !</h2>
            <p className="text-white">Votre réservation a bien été enregistrée.</p>
            <Link href="/" className="text-primary hover:underline mt-4 inline-block">
              Retour à l'accueil
            </Link>
          </motion.div>
        ) : (
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl font-bold text-white mb-6 text-center">Réserver une table</h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-white mb-2">Nom complet</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-2 rounded-lg bg-white/10 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-primary"
                  required
                />
              </div>
              <div>
                <label htmlFor="phone" className="block text-white mb-2">Numéro de téléphone</label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-4 py-2 rounded-lg bg-white/10 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-primary"
                  required
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-white mb-2">Adresse e-mail</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-2 rounded-lg bg-white/10 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-primary"
                  required
                />
              </div>
              <div>
                <label htmlFor="date" className="block text-white mb-2">Date</label>
                <DatePicker
                  selected={formData.date}
                  onChange={(date) => setFormData({ ...formData, date: date || new Date() })}
                  className="w-full px-4 py-2 rounded-lg bg-white/10 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-primary"
                  required
                />
              </div>
              <div>
                <label htmlFor="time" className="block text-white mb-2">Heure</label>
                <input
                  type="time"
                  id="time"
                  name="time"
                  value={formData.time}
                  onChange={handleChange}
                  className="w-full px-4 py-2 rounded-lg bg-white/10 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-primary"
                  required
                />
              </div>
              <div>
                <label htmlFor="guests" className="block text-white mb-2">Nombre de personnes</label>
                <select
                  id="guests"
                  name="guests"
                  value={formData.guests}
                  onChange={handleChange}
                  className="w-full px-4 py-2 rounded-lg bg-white/10 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-primary"
                  required
                >
                  {[...Array(10)].map((_, i) => (
                    <option key={i + 1} value={i + 1}>{i + 1}</option>
                  ))}
                </select>
              </div>
              <button
                type="submit"
                className="inline-block bg-transparent border border-primary text-primary px-8 py-3 rounded-lg text-lg font-semibold hover:bg-primary/10 transition-all transform hover:scale-105"
              >
                Réserver
              </button>
            </form>

            {/* Informations utiles */}
            <div className="mt-6 text-center">
              <p className="text-white mb-2">Ouvert du lundi au dimanche, de 10h à 22h.</p>
              <p className="text-white">
                Pour réserver par téléphone :{" "}
                <a href="tel:+221771234567" className="text-primary hover:underline">
                  +221 77 114 27 27
                </a>
              </p>
            </div>

            {/* Bouton de retour */}
            <div className="mt-6 text-center">
              <Link href="/" className="text-primary hover:underline">
                Retour à l'accueil
              </Link>
            </div>
          </motion.div>
        )}
      </div>
    </div>
  );
};

export default ReservationPage;