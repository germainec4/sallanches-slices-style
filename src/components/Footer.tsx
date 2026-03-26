import logo from "@/assets/logo.png";
import { Instagram, Facebook } from "lucide-react";

const TikTokIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor" width="20" height="20">
    <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.5 2.89 2.89 0 0 1-2.89-2.89 2.89 2.89 0 0 1 2.89-2.89c.28 0 .54.04.79.1V9.01a6.27 6.27 0 0 0-.79-.05 6.34 6.34 0 0 0-6.34 6.34 6.34 6.34 0 0 0 6.34 6.34 6.34 6.34 0 0 0 6.34-6.34V8.87a8.16 8.16 0 0 0 4.77 1.52V6.93a4.85 4.85 0 0 1-1.01-.24z" />
  </svg>
);

const Footer = () => {
  return (
    <footer className="bg-foreground">
      <div className="divider-checkers" />
      <div className="max-w-7xl mx-auto px-6 py-12 md:py-16">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="text-center md:text-left">
            <img src={logo} alt="Mamma Mia!" className="h-16 w-auto mb-2" />
            <p className="font-body text-cream/40 text-sm">
              Pizzeria artisanale à Sallanches
            </p>
          </div>

          <div className="flex flex-col items-center md:items-end gap-6">
            <div className="flex items-center gap-8">
              <a href="#accueil" className="font-body text-cream/60 hover:text-amber text-sm transition-colors">Accueil</a>
              <a href="#histoire" className="font-body text-cream/60 hover:text-amber text-sm transition-colors">Notre histoire</a>
              <a href="#carte" className="font-body text-cream/60 hover:text-amber text-sm transition-colors">La carte</a>
              <a href="#contact" className="font-body text-cream/60 hover:text-amber text-sm transition-colors">Contact</a>
            </div>
            <div className="flex items-center gap-4">
              <a href="https://www.instagram.com/mammamia.resto" target="_blank" rel="noopener noreferrer" className="text-cream/40 hover:text-amber transition-colors">
                <Instagram size={20} />
              </a>
              <a href="https://www.tiktok.com/@mammamia.resto" target="_blank" rel="noopener noreferrer" className="text-cream/40 hover:text-amber transition-colors">
                <TikTokIcon />
              </a>
              <a href="https://www.facebook.com/profile.php?id=61573736914203" target="_blank" rel="noopener noreferrer" className="text-cream/40 hover:text-amber transition-colors">
                <Facebook size={20} />
              </a>
            </div>
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
