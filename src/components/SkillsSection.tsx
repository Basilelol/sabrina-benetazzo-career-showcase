import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { 
  FileText, 
  Truck, 
  Users, 
  Clock, 
  Calculator, 
  Globe,
  GraduationCap,
  Heart,
  CheckCircle
} from "lucide-react";

const skills = [
  {
    category: "Amministrazione",
    icon: FileText,
    items: ["Gestione documentale", "Fatturazione", "Interfaccia commercialista", "Gestione fornitori"],
  },
  {
    category: "Logistica",
    icon: Truck,
    items: ["Gestione spedizioni", "Coordinamento magazzino", "DDT e bolle", "Corrieri in abbonamento"],
  },
  {
    category: "Segreteria",
    icon: Users,
    items: ["Front-desk e centralino", "Gestione appuntamenti", "Accoglienza clienti", "Segretariato direzione"],
  },
  {
    category: "Organizzazione",
    icon: Clock,
    items: ["Gestione ordini", "Prioritizzazione", "Multitasking", "Problem solving"],
  },
];

const softwareSkills = [
  "MS Office (Word, Excel, PowerPoint, Access)",
  "Outlook Express",
  "Gestionali aziendali",
  "Software di fatturazione",
  "Sistemi di gestione magazzino",
];

const technicalSkills = [
  "Linguaggi: C, Assembler Intel, Basic",
  "Sistemi: UNIX/Linux, Windows, DOS",
  "Embedded Real Time Multitasking",
  "CMSuite, Clearcase, Mercury Test Director",
];

const languages = [
  { language: "Italiano", level: "Madrelingua" },
  { language: "Inglese", level: "Proficient (Westminster Institute - Grade A)" },
];

const certifications = [
  { name: "Diploma Perito Informatico", institution: "ITIS P. Hensemberger, Monza", year: "1989" },
  { name: "Attestato somministrazione cibi e bevande", institution: "C.A.P.A.C., Milano", year: "2010" },
  { name: "Operatore Socio Sanitario (OSS)", institution: "Istituto L.Clerici, Merate", year: "2013" },
  { name: "Attestato Primo Soccorso", institution: "", year: "2021" },
  { name: "Attestato BLSD", institution: "", year: "2013" },
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

        {/* Languages */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="p-6 md:p-8 rounded-lg bg-primary/5 border border-primary/10 mb-8"
        >
          <h3 className="font-display font-semibold text-lg text-foreground mb-4 flex items-center gap-2">
            <Globe className="w-5 h-5 text-accent" />
            Lingue
          </h3>
          <div className="grid sm:grid-cols-2 gap-4">
            {languages.map((lang) => (
              <div key={lang.language} className="flex items-center justify-between p-3 rounded-md bg-background">
                <span className="font-medium text-foreground">{lang.language}</span>
                <span className="text-sm text-muted-foreground">{lang.level}</span>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Software & Technical Skills */}
        <div className="grid md:grid-cols-2 gap-6 mb-8">
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
            <div className="space-y-3">
              {softwareSkills.map((skill) => (
                <div key={skill} className="flex items-center gap-2 text-muted-foreground">
                  <CheckCircle className="w-4 h-4 text-accent flex-shrink-0" />
                  <span className="text-sm">{skill}</span>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="p-6 md:p-8 rounded-lg bg-secondary/50 border border-border/50"
          >
            <h3 className="font-display font-semibold text-lg text-foreground mb-4 flex items-center gap-2">
              <Calculator className="w-5 h-5 text-accent" />
              Background Tecnico
            </h3>
            <div className="space-y-3">
              {technicalSkills.map((skill) => (
                <div key={skill} className="flex items-center gap-2 text-muted-foreground">
                  <CheckCircle className="w-4 h-4 text-accent flex-shrink-0" />
                  <span className="text-sm">{skill}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Certifications & Education */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="p-6 md:p-8 rounded-lg bg-secondary/50 border border-border/50"
        >
          <h3 className="font-display font-semibold text-lg text-foreground mb-4 flex items-center gap-2">
            <GraduationCap className="w-5 h-5 text-accent" />
            Istruzione e Certificazioni
          </h3>
          <div className="space-y-4">
            {certifications.map((cert) => (
              <div key={cert.name} className="flex flex-col sm:flex-row sm:items-center sm:justify-between p-3 rounded-md bg-background">
                <div>
                  <span className="font-medium text-foreground">{cert.name}</span>
                  {cert.institution && (
                    <p className="text-sm text-muted-foreground">{cert.institution}</p>
                  )}
                </div>
                <span className="text-sm text-accent font-medium">{cert.year}</span>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Additional Info */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.7 }}
          className="mt-8 p-4 rounded-lg bg-accent/10 border border-accent/20 flex items-center gap-3"
        >
          <Heart className="w-5 h-5 text-accent flex-shrink-0" />
          <span className="text-sm text-muted-foreground">
            Patente B • Disponibile a spostamenti
          </span>
        </motion.div>
      </div>
    </section>
  );
};

export default SkillsSection;
