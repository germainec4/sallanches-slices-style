import { motion } from "framer-motion";
import { MapPin, Phone, Clock } from "lucide-react";

const Contact = () => {
  return (
    <section id="contact" className="bg-charcoal">
      <div className="section-padding max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="font-body text-amber text-sm uppercase tracking-[0.25em] mb-3">
            Venez nous voir
          </p>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-cream">
            Nous <span className="italic text-amber">trouver</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-10 md:gap-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <div className="inline-flex items-center justify-center w-14 h-14 text-primary mb-2">
              <MapPin className="w-6 h-6" />
            </div>
            <h3 className="font-display text-xl text-cream mb-3">Adresse</h3>
            <p className="font-body text-cream/60 leading-relaxed">
              22, rue de la Paix<br />
              74700 Sallanches
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-center"
          >
            <div className="inline-flex items-center justify-center w-14 h-14 text-primary mb-2">
              <Phone className="w-6 h-6" />
            </div>
            <h3 className="font-display text-xl text-cream mb-3">Nous contacter</h3>
            <a href="tel:+33956230548" className="font-body text-amber hover:text-amber/80 transition-colors text-lg">
              09 56 23 05 48
            </a>
            <br />
            <a href="mailto:reservations@themagiccollection.com" className="font-body text-amber hover:text-amber/80 transition-colors text-sm">
              reservations@themagiccollection.com
            </a>
            <p className="font-body text-cream/40 text-sm mt-2">
              Réservation conseillée le week-end
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-center"
          >
            <div className="inline-flex items-center justify-center w-14 h-14 text-primary mb-2">
              <Clock className="w-6 h-6" />
            </div>
            <h3 className="font-display text-xl text-cream mb-3">Horaires</h3>
            <div className="font-body text-cream/60 space-y-1">
              <p>Lun – Ven : 11h30 – 14h / 18h30 – 22h</p>
              <p>Sam – Dim : 11h30 – 22h</p>
            </div>
          </motion.div>
        </div>

        {/* Map embed */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16"
        >
          <iframe
            title="Localisation Mamma Mia Sallanches"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2765.5!2d6.6313!3d45.9347!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47894e3b0d3e4c4f%3A0x0!2s22+Rue+de+la+Paix%2C+74700+Sallanches!5e0!3m2!1sfr!2sfr!4v1"
            width="100%"
            height="350"
            style={{ border: 0, filter: "grayscale(0.3) contrast(1.1)" }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="w-full"
          />
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
