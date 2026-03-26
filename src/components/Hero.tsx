import { motion } from "framer-motion";
import heroImg from "@/assets/pizza-oven.jpg";
import logo from "@/assets/logo.png";

const Hero = () => {
  return (
    <section id="accueil" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0">
        <img
          src={heroImg}
          alt="Pizza napolitaine sortant du four à bois"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-charcoal/60" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <p className="font-body text-amber text-sm md:text-base uppercase tracking-[0.3em] mb-4">
            Pizzeria artisanale à Sallanches
          </p>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="font-display text-6xl md:text-8xl lg:text-9xl font-bold text-cream leading-[0.9] mb-6"
        >
          Mamma<br />
          <span className="italic text-amber">Mia!</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="font-body text-cream/80 text-lg md:text-xl max-w-xl mx-auto mb-10"
        >
          Pizza napolitaine authentique, pâte faite maison, 
          cuisson au feu de bois. Un voyage en Italie à chaque bouchée.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <a
            href="#carte"
            className="bg-primary text-primary-foreground px-8 py-4 font-body text-sm uppercase tracking-widest font-medium hover:bg-terracotta-dark transition-colors"
          >
            Découvrir la carte
          </a>
          <a
            href="#contact"
            className="border-2 border-cream text-cream px-8 py-4 font-body text-sm uppercase tracking-widest font-medium hover:bg-cream hover:text-charcoal transition-colors"
          >
            Réserver une table
          </a>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <div className="w-6 h-10 border-2 border-cream/40 rounded-full flex justify-center pt-2">
          <div className="w-1.5 h-1.5 bg-cream/60 rounded-full" />
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
