import { motion } from "framer-motion";
import interior1 from "@/assets/interior1.jpg";
import interior2 from "@/assets/interior2.jpg";
import dough from "@/assets/dough.jpg";
import pizzaEnfourner from "@/assets/pizza-enfourner.jpg";
import cocktails from "@/assets/cocktails.jpg";
import dessert from "@/assets/dessert.jpg";

const images = [
  { src: dough, alt: "Pétrissage de la pâte à pizza", span: "col-span-1 row-span-1" },
  { src: interior1, alt: "Salle colorée du restaurant", span: "col-span-1 md:col-span-2 row-span-1" },
  { src: cocktails, alt: "Cocktails artisanaux au bar", span: "col-span-1 row-span-1 md:row-span-2" },
  { src: pizzaEnfourner, alt: "Enfournement de la pizza au feu de bois", span: "col-span-1 row-span-1" },
  { src: dessert, alt: "Gâteau au chocolat fait maison", span: "col-span-1 row-span-1" },
  { src: interior2, alt: "Détail de la décoration intérieure", span: "col-span-1 md:col-span-2 row-span-1" },
];

const Gallery = () => {
  return (
    <section id="galerie" className="bg-cream">
      <div className="divider-checkers" />
      <div className="section-padding max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <p className="font-body text-primary text-sm uppercase tracking-[0.25em] mb-3">
            Ambiance
          </p>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-foreground">
            Un goût d'<span className="italic text-primary">Italie</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-3 md:gap-4">
          {images.map((img, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className={`overflow-hidden group ${img.span}`}
            >
              <img
                src={img.src}
                alt={img.alt}
                className="w-full h-full min-h-[250px] object-cover group-hover:scale-105 transition-transform duration-700"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;
