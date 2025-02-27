import React from 'react'
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion"; // Pour les animations
import { FaPhone, FaClock } from "react-icons/fa";
type Props = {}

const aboutpage = (props: Props) => {
  return (
    
        <div className="min-h-screen flex flex-col">
          {/* Section Hero */}
          <motion.section
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="relative flex-grow flex items-center justify-center py-12"
          >
            <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-center px-4">
              {/* Texte à gauche */}
              <div className="text-center md:text-left">
                <h1 className="text-4xl md:text-6xl font-bold mb-4 text-white">À propos de nous</h1>
                <p className="text-lg md:text-xl mb-8 max-w-2xl mx-auto md:mx-0 text-white">
                  RAJAB KEUR MASSAR est bien plus qu'un simple restaurant. Nous sommes une passion, une tradition et une promesse de vous offrir une expérience culinaire inoubliable. Nos plats sont préparés avec des ingrédients frais et locaux, et notre équipe est dévouée à vous offrir un service exceptionnel.
                </p>
              </div>
    
              {/* Image à droite */}
              <div className="relative h-64 md:h-96 w-full">
                <Image
                  src="/about.jpg" // Remplace par le chemin de ton image
                  alt="About Us"
                  fill
                  className="object-cover rounded-lg"
                />
                <div className="absolute inset-0 bg-blue/50 rounded-lg"></div> {/* Overlay sombre */}
              </div>
            </div>
          </motion.section>
    
          {/* Section Localisation */}
          <motion.section
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="bg-card py-12"
          >
            <div className="container mx-auto px-4">
              <h2 className="text-3xl font-bold text-white mb-4">Nous trouver</h2>
              <p className="text-lg text-white mb-4 flex items-center">
                <FaPhone className="mr-2" /> {/* Icône de téléphone */}
                Téléphone : <a href="tel:+221771234567" className="text-primary hover:underline ml-2">+221 77 114 27 27</a>
              </p>
              <p className="text-lg text-white mb-4">
                Keur Massar, en face de la pharmacie 24H
              </p>
              {/* Carte Google Maps */}
              <div className="mt-8 overflow-hidden rounded-lg">
              <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3857.8481227775205!2d-17.314406742327964!3d14.777583329279805!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xec10bb839b95b85%3A0x80ee2830ba320c!2sBoulangerie%20Rajab!5e0!3m2!1sen!2ssn!4v1740607252844!5m2!1sen!2ssn" width="600" height="450" style={{ border: 0 }} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
              </div>
            </div>
          </motion.section>
    
          {/* Section Horaires de travail */}
          <motion.section
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="bg-background py-12"
          >
            <div className="container mx-auto px-4">
              <h2 className="text-3xl font-bold text-white mb-4">Horaires d'ouverture</h2>
              <p className="text-lg text-white mb-2 flex items-center">
                <FaClock className="mr-2" /> {/* Icône d'horloge */}
                Lundi - Vendredi : 10h - 22h
              </p>
              <p className="text-lg text-white flex items-center">
                <FaClock className="mr-2" /> {/* Icône d'horloge */}
                Samedi - Dimanche : 12h - 23h
              </p>
            </div>
          </motion.section>
        </div>
      );
  
}

export default aboutpage;