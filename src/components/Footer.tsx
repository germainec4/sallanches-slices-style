const Footer = () => {
  return (
    <footer className="bg-foreground">
      <div className="divider-checkers" />
      <div className="max-w-7xl mx-auto px-6 py-12 md:py-16">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="text-center md:text-left">
            <h3 className="font-display text-3xl font-bold text-cream mb-2">
              Mamma Mia!
            </h3>
            <p className="font-body text-cream/40 text-sm">
              Pizzeria artisanale à Sallanches
            </p>
          </div>

          <div className="flex items-center gap-8">
            <a href="#accueil" className="font-body text-cream/60 hover:text-amber text-sm transition-colors">Accueil</a>
            <a href="#histoire" className="font-body text-cream/60 hover:text-amber text-sm transition-colors">Notre histoire</a>
            <a href="#carte" className="font-body text-cream/60 hover:text-amber text-sm transition-colors">La carte</a>
            <a href="#contact" className="font-body text-cream/60 hover:text-amber text-sm transition-colors">Contact</a>
          </div>
        </div>

        <div className="border-t border-cream/10 mt-8 pt-8 text-center">
          <p className="font-body text-cream/30 text-xs">
            © {new Date().getFullYear()} Mamma Mia Sallanches. Tous droits réservés.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
