import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { 
  FileText, 
  Truck, 
  Users, 
  Clock, 
  Calculator, 
  FolderOpen,
  Phone,
  CheckCircle
} from "lucide-react";

const skills = [
  {
    category: "Amministrazione",
    icon: FileText,
    items: ["Gestione documentale", "Fatturazione", "Archiviazione", "Corrispondenza"],
  },
  {
    category: "Logistica",
    icon: Truck,
    items: ["Gestione spedizioni", "Coordinamento magazzino", "Monitoraggio ordini", "DDT e bolle"],
  },
  {
    category: "Relazioni",
    icon: Users,
    items: ["Accoglienza clienti", "Gestione fornitori", "Comunicazione interna", "Problem solving"],
  },
  {
    category: "Organizzazione",
    icon: Clock,
    items: ["Gestione agenda", "Prioritizzazione", "Multitasking", "Rispetto scadenze"],
  },
];

const softwareSkills = [
  "Microsoft Office (Word, Excel, Outlook)",
  "Gestionali aziendali",
  "Software di fatturazione",
  "Sistemi di gestione magazzino",
];

const SkillsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="section-padding bg-background">
      <div className="container-narrow">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="heading-section text-foreground">Competenze</h2>
          <div className="w-16 h-1 bg-accent mx-auto mt-4" />
        </motion.div>

        {/* Skills Grid */}
        <div className="grid sm:grid-cols-2 gap-6 mb-12">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.category}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="p-6 rounded-lg bg-secondary/50 border border-border/50"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                  <skill.icon className="w-5 h-5 text-primary" />
                </div>
                <h3 className="font-display font-semibold text-lg text-foreground">
                  {skill.category}
                </h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {skill.items.map((item) => (
                  <span key={item} className="badge-skill">
                    {item}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Software Skills */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="p-6 md:p-8 rounded-lg bg-primary/5 border border-primary/10"
        >
          <h3 className="font-display font-semibold text-lg text-foreground mb-4 flex items-center gap-2">
            <Calculator className="w-5 h-5 text-accent" />
            Competenze Informatiche
          </h3>
          <div className="grid sm:grid-cols-2 gap-3">
            {softwareSkills.map((skill) => (
              <div key={skill} className="flex items-center gap-2 text-muted-foreground">
                <CheckCircle className="w-4 h-4 text-accent flex-shrink-0" />
                <span className="text-sm">{skill}</span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default SkillsSection;
