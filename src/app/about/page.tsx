import Image from "next/image";
import Link from "next/link";
import { FaPhone, FaClock } from "react-icons/fa"; // Pour les icônes

export default function AboutPage() {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Section Hero */}
      <section className="relative flex-grow flex items-center justify-center py-12">
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-center px-4">
          {/* Texte à gauche */}
          <div className="text-center md:text-left">
            <h1 className="text-4xl md:text-6xl font-bold mb-4 text-white drop-shadow-lg">
              À propos de nous
            </h1>
            <p className="text-lg md:text-xl mb-8 max-w-2xl mx-auto md:mx-0 text-white/90">
              RAJAB KEUR MASSAR est bien plus qu'un simple restaurant. Nous sommes une passion, une tradition et une promesse de vous offrir une expérience culinaire inoubliable. Nos plats sont préparés avec des ingrédients frais et locaux, et notre équipe est dévouée à vous offrir un service exceptionnel.
            </p>
            <Link
              href="/food"
              className="inline-block bg-primary text-primary-foreground px-8 py-3 rounded-lg text-lg font-semibold hover:bg-primary/90 transition-all transform hover:scale-105"
            >
              Découvrir notre menu
            </Link>
          </div>

          {/* Image à droite */}
          <div className="relative h-64 md:h-96 w-full">
            <Image
              src="/logo2.png" // Remplace par le chemin de ton image
              alt="About Us"
              fill
              className="object-cover rounded-lg"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-black/20 rounded-lg"></div> {/* Overlay dégradé */}
          </div>
        </div>
      </section>

        {/* Section Notre Équipe */}
<section className="bg-neutral py-12">
  <div className="container mx-auto px-4">
    <h2 className="text-3xl font-bold text-white mb-8 text-center">Notre Équipe</h2>
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
      {/* Membre 1 */}
      <div className="bg-card p-6 rounded-lg shadow-lg flex flex-col items-center">
        <div className="relative w-32 h-32 mb-4">
          <Image
            src="/team/chef1.jpg" // Chemin de la photo du chef
            alt="Chef Marie"
            fill
            className="rounded-full object-cover"
          />
        </div>
        <h3 className="text-xl font-bold text-white mb-2">Chef Marie</h3>
        <p className="text-lg text-white/80 mb-4 text-center">
          Notre chef passionnée, spécialiste des saveurs locales.
        </p>
      </div>

      {/* Membre 2 */}
      <div className="bg-card p-6 rounded-lg shadow-lg flex flex-col items-center">
        <div className="relative w-32 h-32 mb-4">
          <Image
            src="/team/manager.jpg" // Chemin de la photo du manager
            alt="Manager Abou"
            fill
            className="rounded-full object-cover"
          />
        </div>
        <h3 className="text-xl font-bold text-white mb-2">Manager Abou</h3>
        <p className="text-lg text-white/80 mb-4 text-center">
          Garant d'un service exceptionnel et d'une ambiance chaleureuse.
        </p>
      </div>

      {/* Membre 3 */}
      <div className="bg-card p-6 rounded-lg shadow-lg flex flex-col items-center">
        <div className="relative w-32 h-32 mb-4">
          <Image
            src="/team/sommelier.jpg" // Chemin de la photo du sommelier
            alt="Sommelier Fatou"
            fill
            className="rounded-full object-cover"
          />
        </div>
        <h3 className="text-xl font-bold text-white mb-2">Sommelier Fatou</h3>
        <p className="text-lg text-white/80 mb-4 text-center">
          Experte en accords mets-vins pour sublimer vos repas.
        </p>
      </div>
    </div>
  </div>
</section>

      {/* Section Localisation */}
      <section className="bg-card py-12">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-white mb-4">Nous trouver</h2>
          <p className="text-lg text-white mb-4 flex items-center">
            <FaPhone className="mr-2 text-primary" /> {/* Icône de téléphone */}
            Téléphone : <a href="tel:+221771234567" className="text-primary hover:underline ml-2">+221 77 114 27 27</a>
          </p>
          <p className="text-lg text-white mb-4">
            Keur Massar, en face de la pharmacie 24H
          </p>
          {/* Carte Google Maps */}
          <div className="mt-8 overflow-hidden rounded-lg shadow-2xl">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3857.8481227775205!2d-17.314406742327964!3d14.777583329279805!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xec10bb839b95b85%3A0x80ee2830ba320c!2sBoulangerie%20Rajab!5e0!3m2!1sen!2ssn!4v1740607252844!5m2!1sen!2ssn"
              width="600"
              height="450"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </section>

      {/* Section Horaires de travail */}
      <section className="bg-background py-12">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-white mb-8 text-center">Horaires d'ouverture</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Horaires en semaine */}
            <div className="bg-card p-6 rounded-lg shadow-lg">
              <p className="text-lg text-white mb-2 flex items-center">
                <FaClock className="mr-2 text-primary text-2xl" /> {/* Icône d'horloge */}
                Lundi - Vendredi : 10h - 22h
              </p>
            </div>
            {/* Horaires le week-end */}
            <div className="bg-card p-6 rounded-lg shadow-lg">
              <p className="text-lg text-white flex items-center">
                <FaClock className="mr-2 text-primary text-2xl" /> {/* Icône d'horloge */}
                Samedi - Dimanche : 12h - 23h
              </p>
            </div>
          </div>
        </div>
      </section>
²
      {/* Section Témoignages */}
      <section className="bg-neutral py-12">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-white mb-8 text-center">Ce que disent nos clients</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Témoignage 1 */}
            <div className="bg-card p-6 rounded-lg shadow-lg">
              <p className="text-lg text-white mb-4">
                "Exceptionnel ! Les plats sont délicieux et l'ambiance est incroyable."
              </p>
              <p className="text-primary font-semibold">- Marie D.</p>
            </div>
            {/* Témoignage 2 */}
            <div className="bg-card p-6 rounded-lg shadow-lg">
              <p className="text-lg text-white mb-4">
                "Je recommande vivement RAJAB KEUR MASSAR. Le service est impeccable !"
              </p>
              <p className="text-primary font-semibold">- Abou T.</p>
            </div>
            {/* Témoignage 3 */}
            <div className="bg-card p-6 rounded-lg shadow-lg">
              <p className="text-lg text-white mb-4">
                "Une expérience culinaire unique. À refaire sans hésiter !"
              </p>
              <p className="text-primary font-semibold">- Fatou S.</p>
            </div>
          </div>
        </div>
      </section>


    



      {/* Footer */}
      <footer className="bg-card py-8">
        <div className="container mx-auto px-4 text-center">
          <p className="text-white mb-4">
            &copy; {new Date().getFullYear()} RAJAB KEUR MASSAR. Tous droits réservés.
          </p>
          <div className="flex justify-center space-x-4">
            <Link href="/mentions-legales" className="text-white hover:text-primary">
              Mentions légales
            </Link>
            <Link href="/politique-de-confidentialite" className="text-white hover:text-primary">
              Politique de confidentialité
            </Link>
          </div>
        </div>
      </footer>
    </div>
  );
}