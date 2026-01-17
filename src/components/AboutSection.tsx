import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const AboutSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="section-padding bg-background">
      <div className="container-narrow">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="grid md:grid-cols-3 gap-8 md:gap-12 items-start"
        >
          {/* Left: Section title */}
          <div>
            <h2 className="heading-section text-foreground">Chi Sono</h2>
            <div className="w-16 h-1 bg-accent mt-4" />
          </div>

          {/* Right: Content */}
          <div className="md:col-span-2 space-y-6">
            <p className="text-body text-muted-foreground">
              Nata a Vimercate (MB) nel 1970, sono una professionista con una carriera 
              variegata che spazia dallo sviluppo software alla segreteria amministrativa 
              e logistica. Ho iniziato come sviluppatrice software in Siemens nel 1989, 
              maturando 14 anni di esperienza nel settore delle telecomunicazioni mobili.
            </p>
            <p className="text-body text-muted-foreground">
              Nel corso degli anni ho ampliato le mie competenze verso l'ambito amministrativo 
              e logistico, gestendo con successo segreterie, front-desk, e processi di 
              fatturazione in aziende come Doctor Glass e attualmente in Tecmo S.r.l. 
              La mia formazione tecnica e la certificazione OSS mi permettono di affrontare 
              le sfide lavorative con un approccio analitico e orientato alla soluzione.
            </p>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="grid grid-cols-3 gap-6 pt-6 border-t border-border"
            >
              <div>
                <span className="text-3xl md:text-4xl font-display font-semibold text-primary">35+</span>
                <p className="text-sm text-muted-foreground mt-1">Anni di Esperienza</p>
              </div>
              <div>
                <span className="text-3xl md:text-4xl font-display font-semibold text-primary">6</span>
                <p className="text-sm text-muted-foreground mt-1">Aziende</p>
              </div>
              <div>
                <span className="text-3xl md:text-4xl font-display font-semibold text-primary">100%</span>
                <p className="text-sm text-muted-foreground mt-1">Dedizione</p>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
