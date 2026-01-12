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
              Sono una professionista con una solida esperienza nel campo dell'amministrazione 
              e della logistica aziendale. Nel corso della mia carriera ho sviluppato competenze 
              trasversali che mi permettono di gestire con efficienza le attività di segreteria, 
              la documentazione amministrativa e il coordinamento delle operazioni logistiche.
            </p>
            <p className="text-body text-muted-foreground">
              Ho collaborato con aziende di diversi settori, tra cui il settore automotive 
              e quello dei servizi, acquisendo una visione completa dei processi aziendali 
              e delle dinamiche operative. La mia capacità di problem solving e l'attenzione 
              ai dettagli sono i pilastri del mio approccio professionale.
            </p>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="grid grid-cols-3 gap-6 pt-6 border-t border-border"
            >
              <div>
                <span className="text-3xl md:text-4xl font-display font-semibold text-primary">15+</span>
                <p className="text-sm text-muted-foreground mt-1">Anni di Esperienza</p>
              </div>
              <div>
                <span className="text-3xl md:text-4xl font-display font-semibold text-primary">2</span>
                <p className="text-sm text-muted-foreground mt-1">Aziende Principali</p>
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
