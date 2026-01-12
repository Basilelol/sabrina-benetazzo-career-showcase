import { Mail, Phone, Linkedin } from "lucide-react";

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
                <span>sabrina.benetazzo@email.com</span>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="w-4 h-4" />
                <span>+39 XXX XXX XXXX</span>
              </li>
              <li className="flex items-center gap-2">
                <Linkedin className="w-4 h-4" />
                <a href="#" className="hover:text-primary-foreground transition-colors">
                  LinkedIn
                </a>
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
