import Image from "next/image";
import Link from "next/link";
import AboutPage from "./about/page";
import { Card } from "@/components/ui/card";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Section Hero */}
      <section className="relative flex-grow flex items-center justify-center">
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-center px-4">
          {/* Image à gauche */}
          <div className="relative h-64 md:h-96 w-full">
            <Image
              src="/hero.jpg"
              alt="Hero Background"
              fill
              className="object-cover rounded-lg"
            />
            <div className="absolute inset-0 bg-blue/50 rounded-lg"></div>
          </div>

          {/* Texte à droite */}
          <div className="text-center md:text-left">
            <h1 className="text-4xl md:text-6xl font-bold mb-4 text-white">Bienvenue chez <span className="text-yellow-600">RAJAB</span> KEUR MASSAR</h1>
            <p className="text-lg md:text-xl mb-8 max-w-2xl mx-auto md:mx-0 text-white">
              Découvrez une expérience culinaire unique avec des plats préparés avec des ingrédients frais et locaux. Commandez dès maintenant et savourez nos délices !
            </p>
            <Link
              href="/menu"
              className="bg-primary text-primary-foreground px-8 py-3 rounded-lg text-lg font-semibold hover:bg-primary/90 transition-colors"
            >
              menu
            </Link>
          </div>
          
        </div>
      </section>

      {/* Section À propos */}

      
      
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
