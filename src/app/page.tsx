"use client";
import Image from "next/image";
import Link from "next/link";
import AboutPage from "./about/page";
import { Card } from "@/components/ui/card";
import { motion } from "framer-motion"; 

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Section Hero */}
      <section className="relative flex-grow flex items-center justify-center">
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-center px-4">
          {/* Image à gauche */}
          <motion.div
            initial={{ opacity: 0, x: -50 }} 
            whileInView={{ opacity: 1, x: 0 }} 
            transition={{ duration: 1, delay: 0.2 }} 
            viewport={{ once: false }} 
            className="relative h-64 md:h-96 w-full"
          >
            <Image
              src="/hero.jpg"
              alt="Hero Background"
              fill
              className="object-cover rounded-lg"
            />
            <div className="absolute inset-0 bg-blue/50 rounded-lg"></div>
          </motion.div>

          {/* Texte à droite */}
          <motion.div
            initial={{ opacity: 0, x: 50 }} 
            whileInView={{ opacity: 1, x: 0 }} 
            transition={{ duration: 1, delay: 0.4 }} 
            viewport={{ once: false }} 
            className="text-center md:text-left"
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-4 text-white">
              Bienvenue chez <span className="text-yellow-600">RAJAB</span> KEUR MASSAR
            </h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }} 
              whileInView={{ opacity: 1, y: 0 }} 
              transition={{ duration: 1, delay: 0.6 }} 
              viewport={{ once: false }} 
              className="text-lg md:text-xl mb-8 max-w-2xl mx-auto md:mx-0 text-white"
            >
              Découvrez une expérience culinaire unique avec des plats préparés avec des ingrédients frais et locaux. Commandez dès maintenant et savourez nos délices !
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Section À propos */}
      <motion.section
        initial={{ opacity: 0, y: 50 }} 
        whileInView={{ opacity: 1, y: 0 }} 
        transition={{ duration: 1, delay: 0.2 }} 
        viewport={{ once: false }} 
      >
        <AboutPage />
      </motion.section>
    </div>
  );
}