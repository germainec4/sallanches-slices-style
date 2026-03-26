import { motion } from "framer-motion";
import { useState } from "react";
import pizzaMakingImg from "@/assets/pizza-making.jpg";

type MenuItem = { name: string; desc: string; price: string };

const salades: MenuItem[] = [
  { name: "Salade verte", desc: "", price: "8€" },
  { name: "Caprese", desc: "Burrata, tomates, pesto de basilic", price: "14€" },
  { name: "Salade Mamma Mia", desc: "Mesclun de salades, grenade, quinoa, graines de courge, noix, Bleu d'Auvergne", price: "15€" },
  { name: "Salade nordique", desc: "Roquette, saumon fumé, fromage de chèvre, pignons de pin grillés, oignon rouge caramélisé", price: "17€" },
];

const pizzas: MenuItem[] = [
  { name: "Margherita", desc: "San Marzano AOP tomates, mozzarella, parmesan, basilic", price: "12€" },
  { name: "Marinara évoluée", desc: "San Marzano AOP tomates, ail, crème de parmesan, origan", price: "14€" },
  { name: "Parmigiana", desc: "San Marzano AOP tomates, provola, aubergines frites, parmesan râpé, crème de tomate, basilic", price: "17€" },
  { name: "Diavola", desc: "Crème de parmesan, mozzarella, spianata calabraise épicée, crème de 'nduja, saucisses, ricotta, chips de piment crusco", price: "18€" },
  { name: "Capricciosa", desc: "Crème de parmesan, mozzarella, champignons, olives noires de Gaeta, jambon, tomates cerises, artichauts grillés", price: "18€" },
  { name: "Neapolitan (Sans lactose)", desc: "Sauce tomate San Marzano, câpres, olives noires de Gaeta, anchois siciliens, persil frais", price: "18€" },
  { name: "Calabrese", desc: "Crème de parmesan, mozzarella, 'nduja, saucisse, provola fumée, friarielli", price: "18€" },
  { name: "6 Fromages", desc: "Crème de parmesan, mozzarella, reblochon, toma de Savoie, fromage de chèvre, bleu d'Auvergne", price: "20€" },
];

const pizzasSpeciales: MenuItem[] = [
  { name: "Calzone au four", desc: "Sauce tomate San Marzano, mozzarella, jambon cuit, salami épicé, parmesan gratiné", price: "18€" },
  { name: "Delicata", desc: "Mozzarella, mortadelle, burrata, pistaches de Bronte concassées", price: "20€" },
  { name: "Regina", desc: "Sauce tomate San Marzano, mozzarella, roquette, jambon de Parme, burrata, tomates cerises", price: "20€" },
  { name: "Pizza au thon", desc: "Sauce tomate San Marzano, mozzarella, filets de thon, fromage de chèvre, oignon rouge caramélisé", price: "20€" },
  { name: "Pizza au saumon", desc: "Mozzarella, roquette, saumon fumé, tomates cerises jaunes, grenade, zeste de citron", price: "22€" },
];

const plats: MenuItem[] = [
  { name: "Spaghetti carbonara", desc: "Spaghetti frais, guanciale, pecorino, jaune d'œuf, poivre noir", price: "17€" },
  { name: "Pappardelle au canard", desc: "Pâtes fraîches au ragù de canard", price: "17€" },
  { name: "Gnocchi à la sorrentina", desc: "Gnocchi de pommes de terre, crème de burrata, tomates cerises, gouttes de pesto, gratiné parmesan", price: "17€" },
  { name: "Délice à la truffe", desc: "Raviolis à la truffe, fondue de reblochon", price: "19€" },
  { name: "Aubergine du chef", desc: "Aubergine rôtie, provola fumée, sauce tomate, crème de parmesan, pesto de basilic", price: "19€" },
  { name: "Tortelloni au saumon", desc: "Tortelloni, saumon, crème de mascarpone, zeste de citron", price: "19€" },
  { name: "Risotto milanais 2.0", desc: "Risotto au safran, ragù d'ossobuco", price: "20€" },
  { name: "Cannellone à l'Émilienne", desc: "Cannellone, ragù de bœuf, béchamel, parmesan", price: "20€" },
  { name: "Burger Royal", desc: "Burger de bœuf, fromage de chèvre, oignon rouge caramélisé, enveloppé de pâte feuilletée, servi avec frites et sauce Mamma Mia", price: "22€" },
  { name: "Escalope milanaise de poulet", desc: "Suprême de poulet pané, servi avec frites", price: "22€" },
];

const desserts: MenuItem[] = [
  { name: "Glace du jour", desc: "Choisissez deux parfums : vanille, chocolat, café, noisette", price: "8€" },
  { name: "Tiramisù", desc: "", price: "10€" },
  { name: "Gâteau au chocolat", desc: "", price: "10€" },
  { name: "Crème pâtissière", desc: "Avec fruits de saison et crumble", price: "10€" },
  { name: "Tarte aux pommes", desc: "", price: "10€" },
];

const boissons: MenuItem[] = [
  { name: "Espresso", desc: "", price: "2€" },
  { name: "Décaféiné", desc: "", price: "2€" },
  { name: "Noisette", desc: "", price: "2,50€" },
  { name: "Cappuccino", desc: "", price: "3€" },
  { name: "Affogato au café", desc: "", price: "4€" },
  { name: "Evian (50cl)", desc: "", price: "5€" },
  { name: "San Pellegrino (50cl)", desc: "", price: "3€" },
  { name: "Perrier (33cl)", desc: "", price: "3€" },
  { name: "Schwepps (tonic/agrumes 25cl)", desc: "", price: "3€" },
  { name: "Lemonaid (orange / gingembre / fruit de la passion 33cl)", desc: "", price: "5€" },
  { name: "Jus (tomate / pomme / abricot / poire / pomme-fraise 25cl)", desc: "", price: "3€" },
  { name: "Thé à la pêche (25cl)", desc: "", price: "3€" },
  { name: "Thé glacé (menthe / citron 25cl)", desc: "", price: "3€" },
  { name: "Orangina (25cl)", desc: "", price: "3€" },
  { name: "Coca Cola / Coca Cola Zero (33cl)", desc: "", price: "4€" },
];

const categories = [
  { label: "Salades", items: salades },
  { label: "Pizzas", items: pizzas },
  { label: "Pizzas Spéciales", items: pizzasSpeciales },
  { label: "Plats", items: plats },
  { label: "Desserts", items: desserts },
  { label: "Boissons", items: boissons },
];

const MenuSection = () => {
  const [activeTab, setActiveTab] = useState(1); // Pizzas by default

  const activeCategory = categories[activeTab];

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
              className="w-full h-full object-cover max-h-[700px] sticky top-24"
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
                Notre <span className="italic text-amber">menu</span>
              </h2>
              <p className="font-body text-cream/60 mb-8">
                Toutes nos préparations sont faites maison par notre équipe de cuisine et de pâtisserie.
              </p>
            </motion.div>

            {/* Tabs */}
            <div className="flex flex-wrap gap-2 mb-8">
              {categories.map((cat, i) => (
                <button
                  key={cat.label}
                  onClick={() => setActiveTab(i)}
                  className={`font-body text-sm px-4 py-2 transition-colors ${
                    activeTab === i
                      ? "bg-amber text-charcoal font-semibold"
                      : "bg-cream/10 text-cream/60 hover:text-cream hover:bg-cream/15"
                  }`}
                >
                  {cat.label}
                </button>
              ))}
            </div>

            {/* Items */}
            <div className="space-y-0">
              {activeCategory.items.map((item, i) => (
                <motion.div
                  key={`${activeCategory.label}-${item.name}`}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.03 }}
                  className="border-b border-cream/10 py-4 group"
                >
                  <div className="flex justify-between items-baseline mb-1 gap-4">
                    <h3 className="font-display text-lg md:text-xl text-cream group-hover:text-amber transition-colors">
                      {item.name}
                    </h3>
                    <span className="font-display text-lg text-amber font-semibold shrink-0">
                      {item.price}
                    </span>
                  </div>
                  {item.desc && (
                    <p className="font-body text-cream/50 text-sm">
                      {item.desc}
                    </p>
                  )}
                </motion.div>
              ))}
            </div>

            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="font-body text-cream/40 text-xs mt-8 italic"
            >
              Veuillez informer notre équipe de toute allergie ou intolérance alimentaire. Les prix sont net service compris.
            </motion.p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MenuSection;
