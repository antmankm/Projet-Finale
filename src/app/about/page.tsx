"use client";
import Image from "next/image";
import Link from "next/link";
import { FaPhone, FaClock, FaStar, FaSun, FaMoon } from "react-icons/fa";
import { motion } from "framer-motion";

export default function AboutPage() {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Section Hero */}
      <section className="relative flex-grow flex items-center justify-center py-12">
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-center px-4">
          {/* Texte à gauche */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-center md:text-left"
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-4 text-white drop-shadow-lg">
              À propos de nous
            </h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-lg md:text-xl mb-8 max-w-2xl mx-auto md:mx-0 text-white/90"
            >
              RAJAB KEUR MASSAR est bien plus qu'un simple restaurant. Nous sommes une passion, une tradition et une promesse de vous offrir une expérience culinaire inoubliable. Nos plats sont préparés avec des ingrédients frais et locaux, et notre équipe est dévouée à vous offrir un service exceptionnel.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="flex space-x-4"
            >
              <Link
                href="/food"
                className="inline-block bg-transparent border border-primary text-primary px-8 py-3 rounded-lg text-lg font-semibold hover:bg-primary/10 transition-all transform hover:scale-105"
              >
                Découvrir notre menu
              </Link>
              <Link
                href="/reservation"
                className="inline-block bg-transparent border border-primary text-primary px-8 py-3 rounded-lg text-lg font-semibold hover:bg-primary/10 transition-all transform hover:scale-105"
              >
                Réserver une table
              </Link>
            </motion.div>
          </motion.div>

          {/* Image à droite */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative h-64 md:h-96 w-full"
          >
            <Image
              src="/logo2.png"
              alt="Logo de RAJAB KEUR MASSAR"
              fill
              className="object-cover rounded-lg"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-black/30 rounded-lg"></div>
          </motion.div>
        </div>
      </section>

      {/* Section Notre Histoire */}
      <motion.section
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="bg-background py-12"
      >
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-white mb-8 text-center">Notre Histoire</h2>
          <p className="text-lg text-white/80 max-w-2xl mx-auto text-center">
            Fondé en 2010, RAJAB KEUR MASSAR est né de la passion pour la cuisine sénégalaise. Notre mission est de vous offrir des plats authentiques préparés avec des ingrédients locaux et frais, dans une ambiance chaleureuse et conviviale. Nous croyons en la qualité, la tradition et le service exceptionnel.
          </p>
        </div>
      </motion.section>

      {/* Section Notre Équipe */}
      <motion.section
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="bg-neutral py-12"
      >
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-white mb-8 text-center">Notre Équipe</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Membre 1 */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-card p-6 rounded-lg shadow-lg flex flex-col items-center"
            >
              <div className="relative w-32 h-32 mb-4">
                <Image
                  src="/team/ekip2.jpg"
                  alt="Chef Marie"
                  fill
                  className="rounded-full object-cover"
                  loading="lazy"
                />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Chef Marie</h3>
              <p className="text-lg text-white/80 mb-4 text-center">
                Notre chef passionnée, spécialiste des saveurs locales.
              </p>
            </motion.div>

            {/* Membre 2 */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
              className="bg-card p-6 rounded-lg shadow-lg flex flex-col items-center"
            >
              <div className="relative w-32 h-32 mb-4">
                <Image
                  src="/team/ekip1.jpg"
                  alt="Manager Abou"
                  fill
                  className="rounded-full object-cover"
                  loading="lazy"
                />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Manager Abou</h3>
              <p className="text-lg text-white/80 mb-4 text-center">
                Garant d'un service exceptionnel et d'une ambiance chaleureuse.
              </p>
            </motion.div>

            {/* Membre 3 */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              viewport={{ once: true }}
              className="bg-card p-6 rounded-lg shadow-lg flex flex-col items-center"
            >
              <div className="relative w-32 h-32 mb-4">
                <Image
                  src="/team/ekip3.jpg"
                  alt="Sommelier Fatou"
                  fill
                  className="rounded-full object-cover"
                  loading="lazy"
                />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Sommelier Fatou</h3>
              <p className="text-lg text-white/80 mb-4 text-center">
                Experte en accords mets-vins pour sublimer vos repas.
              </p>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Section Localisation */}
      <motion.section
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="bg-card py-12"
      >
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-white mb-4">Nous trouver</h2>
          <p className="text-lg text-white mb-4 flex items-center">
            <FaPhone className="mr-2 text-primary" />
            Téléphone : <a href="tel:+221771234567" className="text-primary hover:underline ml-2">+221 77 114 27 27</a>
          </p>
          <p className="text-lg text-white mb-4">
            Keur Massar, en face de la pharmacie 24H
          </p>
          {/* Bouton Itinéraire */}
          <a
            href="https://www.google.com/maps/dir/?api=1&destination=Boulangerie+Rajab+Keur+Massar"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-transparent border border-primary text-primary px-8 py-3 rounded-lg text-lg font-semibold hover:bg-primary/10 transition-all transform hover:scale-105"
          >
            Obtenir l'itinéraire
          </a>
          {/* Carte Google Maps */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="mt-8 overflow-hidden rounded-lg shadow-2xl"
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3857.8481227775205!2d-17.314406742327964!3d14.777583329279805!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xec10bb839b95b85%3A0x80ee2830ba320c!2sBoulangerie%20Rajab!5e0!3m2!1sen!2ssn!4v1740607252844!5m2!1sen!2ssn"
              width="600"
              height="450"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </motion.div>
        </div>
      </motion.section>

      {/* Section Horaires de travail */}
      <motion.section
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="bg-gradient-to-r from-primary/10 to-background py-12"
      >
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-white mb-8 text-center">
            Horaires d'ouverture
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Horaires en semaine */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-card p-6 rounded-lg shadow-lg border-l-4 border-primary cursor-pointer"
            >
              <h3 className="text-xl font-bold text-white mb-4 flex items-center">
                <FaSun className="mr-2 text-primary text-2xl animate-pulse" />
                Horaires en semaine
              </h3>
              <div className="space-y-2">
                <p className="text-lg text-white flex items-center">
                  <FaClock className="mr-2 text-primary text-2xl" />
                  Lundi - Vendredi : 10h - 22h
                </p>
                <p className="text-lg text-white flex items-center">
                  <FaSun className="mr-2 text-primary text-2xl" />
                  Ouverture : 10h
                </p>
                <p className="text-lg text-white flex items-center">
                  <FaMoon className="mr-2 text-primary text-2xl" />
                  Fermeture : 22h
                </p>
              </div>
            </motion.div>

            {/* Horaires le week-end */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
              className="bg-card p-6 rounded-lg shadow-lg border-l-4 border-secondary cursor-pointer"
            >
              <h3 className="text-xl font-bold text-white mb-4 flex items-center">
                <FaMoon className="mr-2 text-secondary text-2xl animate-pulse" />
                Horaires le week-end
              </h3>
              <div className="space-y-2">
                <p className="text-lg text-white flex items-center">
                  <FaClock className="mr-2 text-secondary text-2xl" />
                  Samedi - Dimanche : 12h - 23h
                </p>
                <p className="text-lg text-white flex items-center">
                  <FaSun className="mr-2 text-secondary text-2xl" />
                  Ouverture : 12h
                </p>
                <p className="text-lg text-white flex items-center">
                  <FaMoon className="mr-2 text-secondary text-2xl" />
                  Fermeture : 23h
                </p>
              </div>
            </motion.div>
          </div>

          {/* Timeline visuelle */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            viewport={{ once: true }}
            className="mt-8 flex flex-col space-y-4 items-center"
          >
            <div className="flex items-center space-x-4">
              <div className="w-4 h-4 bg-primary rounded-full"></div>
              <p className="text-lg text-white">Lundi - Vendredi : 10h - 22h</p>
            </div>
            <div className="flex items-center space-x-4">
              <div className="w-4 h-4 bg-secondary rounded-full"></div>
              <p className="text-lg text-white">Samedi - Dimanche : 12h - 23h</p>
            </div>
          </motion.div>
        </div>
      </motion.section>

      {/* Section Témoignages */}
      <motion.section
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="bg-neutral py-12"
      >
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-white mb-8 text-center">Ce que disent nos clients</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Témoignage 1 */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-card p-6 rounded-lg shadow-lg"
            >
              <div className="flex items-center mb-2">
                {[...Array(5)].map((_, i) => (
                  <FaStar key={i} className="text-yellow-500 w-5 h-5" />
                ))}
              </div>
              <p className="text-lg text-white mb-4">
                "Exceptionnel ! Les plats sont délicieux et l'ambiance est incroyable."
              </p>
              <p className="text-primary font-semibold">- Marie D.</p>
            </motion.div>
            {/* Témoignage 2 */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
              className="bg-card p-6 rounded-lg shadow-lg"
            >
              <div className="flex items-center mb-2">
                {[...Array(5)].map((_, i) => (
                  <FaStar key={i} className="text-yellow-500 w-5 h-5" />
                ))}
              </div>
              <p className="text-lg text-white mb-4">
                "Je recommande vivement RAJAB KEUR MASSAR. Le service est impeccable !"
              </p>
              <p className="text-primary font-semibold">- Abou T.</p>
            </motion.div>
            {/* Témoignage 3 */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              viewport={{ once: true }}
              className="bg-card p-6 rounded-lg shadow-lg"
            >
              <div className="flex items-center mb-2">
                {[...Array(5)].map((_, i) => (
                  <FaStar key={i} className="text-yellow-500 w-5 h-5" />
                ))}
              </div>
              <p className="text-lg text-white mb-4">
                "Une expérience culinaire unique. À refaire sans hésiter !"
              </p>
              <p className="text-primary font-semibold">- Fatou S.</p>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Footer */}
      <motion.footer
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="bg-card py-8"
      >
        <div className="container mx-auto px-4 text-center">
          {/* Icônes des réseaux sociaux */}
          <div className="flex justify-center space-x-6 mb-4">
            <a href="#" aria-label="Facebook">
              <Image src="/icons/facebook.svg" alt="Facebook" width={24} height={24} className="hover:opacity-80" />
            </a>
            <a href="#" aria-label="Instagram">
              <Image src="/icons/instagram.svg" alt="Instagram" width={24} height={24} className="hover:opacity-80" />
            </a>
            <a href="#" aria-label="Twitter">
              <Image src="/icons/twitter.svg" alt="Twitter" width={24} height={24} className="hover:opacity-80" />
            </a>
          </div>

          {/* Formulaire de newsletter */}
          <form className="mb-4">
            <div className="flex flex-col md:flex-row justify-center items-center space-y-4 md:space-y-0 md:space-x-4">
              <input
                type="email"
                placeholder="Votre adresse e-mail"
                className="px-4 py-2 rounded-lg bg-white/10 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-primary"
                required
              />
              <button
                type="submit"
                className="bg-primary text-primary-foreground px-6 py-2 rounded-lg hover:bg-primary/90 transition-all"
              >
                S'inscrire
              </button>
            </div>
          </form>

          {/* Liens légaux */}
          <div className="flex justify-center space-x-4 mb-4">
            <Link href="/mentions-legales" className="text-white hover:text-primary">
              Mentions légales
            </Link>
            <Link href="/politique-de-confidentialite" className="text-white hover:text-primary">
              Politique de confidentialité
            </Link>
          </div>

          {/* Copyright */}
          <p className="text-white">
            &copy; {new Date().getFullYear()} RAJAB KEUR MASSAR. Tous droits réservés.
          </p>
        </div>
      </motion.footer>
    </div>
  );
}