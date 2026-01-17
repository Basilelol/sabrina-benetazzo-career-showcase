import { Mail, Phone, MapPin } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container-narrow section-padding py-12">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Brand */}
          <div>
            <h3 className="font-display text-xl font-semibold mb-4">
              Sabrina Benetazzo
            </h3>
            <p className="text-primary-foreground/80 text-sm leading-relaxed">
              Segretaria con esperienza in amministrazione e logistica. 
              Background tecnico-informatico e competenze linguistiche avanzate.
              Disponibile per nuove opportunità professionali.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4">Link Rapidi</h4>
            <ul className="space-y-2 text-sm text-primary-foreground/80">
              <li>
                <a href="#" className="hover:text-primary-foreground transition-colors">
                  Chi Sono
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary-foreground transition-colors">
                  Esperienze
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary-foreground transition-colors">
                  Competenze
                </a>
              </li>
              <li>
                <a href="#contatti" className="hover:text-primary-foreground transition-colors">
                  Contatti
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold mb-4">Contatti</h4>
            <ul className="space-y-3 text-sm text-primary-foreground/80">
              <li className="flex items-center gap-2">
                <Mail className="w-4 h-4" />
                <a href="mailto:sabrina.benetazzo@gmail.com" className="hover:text-primary-foreground transition-colors">
                  sabrina.benetazzo@gmail.com
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="w-4 h-4" />
                <a href="tel:+393339623363" className="hover:text-primary-foreground transition-colors">
                  +39 333 962 3363
                </a>
              </li>
              <li className="flex items-start gap-2">
                <MapPin className="w-4 h-4 mt-0.5" />
                <span>Merate (LC), Italia</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-primary-foreground/20 mt-8 pt-8 flex flex-col sm:flex-row justify-between items-center gap-4 text-sm text-primary-foreground/60">
          <p>© {currentYear} Sabrina Benetazzo. Tutti i diritti riservati.</p>
          <p>
            Sito realizzato con ❤️ da{" "}
            <a 
              href="#" 
              className="text-primary-foreground/80 hover:text-primary-foreground transition-colors underline underline-offset-2"
            >
              [Il tuo nome]
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
