import { motion } from "framer-motion";
import chefsImg from "@/assets/chefs.jpg";
import interiorImg from "@/assets/interior1.jpg";

const About = () => {
  return (
    <section id="histoire" className="bg-cream">
      <div className="divider-checkers" />
      <div className="section-padding max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Text */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <p className="font-body text-primary text-sm uppercase tracking-[0.25em] mb-3">
              Notre histoire
            </p>
            <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight mb-6">
              La passion de la<br />
              <span className="italic text-primary">vraie pizza</span>
            </h2>
            <div className="space-y-4 font-body text-muted-foreground text-base md:text-lg leading-relaxed">
              <p>
                Au cœur de Sallanches, face au Mont-Blanc, Mamma Mia vous accueille 
                dans une ambiance chaleureuse et colorée, fidèle à la tradition italienne.
              </p>
              <p>
                Notre pizzaïolo pétrit chaque jour sa pâte à la main, la laisse lever 
                lentement, puis la cuit dans notre four à bois pour obtenir cette croûte 
                parfaite : croustillante à l'extérieur, moelleuse à l'intérieur.
              </p>
              <p>
                Des ingrédients frais, des recettes authentiques et beaucoup d'amour — 
                voilà le secret de Mamma Mia.
              </p>
            </div>
          </motion.div>

          {/* Images */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="relative"
          >
            <div className="relative">
              <img
                src={chefsImg}
                alt="Nos chefs pizzaïolos"
                className="w-full aspect-[4/3] object-cover shadow-[var(--shadow-deep)]"
              />
              <img
                src={interiorImg}
                alt="Intérieur coloré du restaurant Mamma Mia"
                className="absolute -bottom-12 -left-8 w-48 md:w-64 aspect-square object-cover border-4 border-cream shadow-[var(--shadow-deep)] hidden md:block"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
