import { motion } from "framer-motion";
import pizzaMakingImg from "@/assets/pizza-making.jpg";

const pizzas = [
  { name: "Margherita", desc: "Tomate, mozzarella fior di latte, basilic frais", price: "12€" },
  { name: "Diavola", desc: "Tomate, mozzarella, salame piccante, piment", price: "14€" },
  { name: "Quattro Formaggi", desc: "Mozzarella, gorgonzola, parmesan, chèvre", price: "15€" },
  { name: "Prosciutto e Rucola", desc: "Tomate, mozzarella, jambon de Parme, roquette", price: "16€" },
  { name: "Calzone", desc: "Farci tomate, mozzarella, ricotta, jambon", price: "14€" },
  { name: "Vegetariana", desc: "Tomate, mozzarella, légumes grillés de saison", price: "13€" },
];

const MenuSection = () => {
  return (
    <section id="carte" className="bg-charcoal relative overflow-hidden">
      <div className="section-padding max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="relative hidden lg:block"
          >
            <img
              src={pizzaMakingImg}
              alt="Préparation artisanale de pizza"
              className="w-full h-full object-cover max-h-[700px]"
            />
          </motion.div>

          {/* Menu */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <p className="font-body text-amber text-sm uppercase tracking-[0.25em] mb-3">
                La Carte
              </p>
              <h2 className="font-display text-4xl md:text-5xl font-bold text-cream leading-tight mb-4">
                Nos pizzas <span className="italic text-amber">signature</span>
              </h2>
              <p className="font-body text-cream/60 mb-10">
                Toutes nos pizzas sont cuites au feu de bois, 
                avec des ingrédients frais sélectionnés avec soin.
              </p>
            </motion.div>

            <div className="space-y-0">
              {pizzas.map((pizza, i) => (
                <motion.div
                  key={pizza.name}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08 }}
                  className="border-b border-cream/10 py-5 group"
                >
                  <div className="flex justify-between items-baseline mb-1">
                    <h3 className="font-display text-xl md:text-2xl text-cream group-hover:text-amber transition-colors">
                      {pizza.name}
                    </h3>
                    <span className="font-display text-xl text-amber font-semibold ml-4">
                      {pizza.price}
                    </span>
                  </div>
                  <p className="font-body text-cream/50 text-sm">
                    {pizza.desc}
                  </p>
                </motion.div>
              ))}
            </div>

            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="font-body text-cream/40 text-sm mt-8 italic"
            >
              Carte non exhaustive. Retrouvez l'intégralité de notre carte au restaurant — 
              pâtes, antipasti, desserts et bien plus encore.
            </motion.p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MenuSection;
