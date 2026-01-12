import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Building2, Calendar, ChevronRight } from "lucide-react";
import officeImg from "@/assets/office-logistics.jpg";
import glassWorkImg from "@/assets/glass-automotive.jpg";

const experiences = [
  {
    company: "Doctor Glass",
    role: "Segretaria Amministrativa",
    period: "2015 - 2023",
    description: "Gestione completa della segreteria e dell'amministrazione per questa azienda leader nel settore della riparazione e sostituzione cristalli auto.",
    responsibilities: [
      "Gestione documentazione clienti e fornitori",
      "Coordinamento appuntamenti e agenda",
      "Supporto alla fatturazione e contabilità",
      "Rapporti con compagnie assicurative",
      "Gestione del front-office e accoglienza clienti"
    ],
    image: glassWorkImg,
  },
  {
    company: "Tecmo S.r.l.",
    role: "Addetta Logistica e Amministrazione",
    period: "2008 - 2015",
    description: "Ruolo ibrido che combinava responsabilità amministrative con la gestione logistica del magazzino e delle spedizioni.",
    responsibilities: [
      "Pianificazione e monitoraggio spedizioni",
      "Gestione ordini e documentazione trasporti",
      "Coordinamento con corrieri e trasportatori",
      "Registrazione movimenti di magazzino",
      "Supporto amministrativo generale"
    ],
    image: officeImg,
  },
];

const ExperienceCard = ({ experience, index }: { experience: typeof experiences[0]; index: number }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.2 }}
      className="card-experience"
    >
      <div className="grid md:grid-cols-5 gap-6">
        {/* Image */}
        <div className="md:col-span-2">
          <div className="aspect-[4/3] rounded-lg overflow-hidden bg-secondary">
            <img
              src={experience.image}
              alt={experience.company}
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Content */}
        <div className="md:col-span-3 space-y-4">
          <div>
            <div className="flex items-center gap-2 text-accent mb-2">
              <Building2 className="w-4 h-4" />
              <span className="text-sm font-medium">{experience.company}</span>
            </div>
            <h3 className="text-xl md:text-2xl font-display font-semibold text-foreground">
              {experience.role}
            </h3>
            <div className="flex items-center gap-2 text-muted-foreground mt-2">
              <Calendar className="w-4 h-4" />
              <span className="text-sm">{experience.period}</span>
            </div>
          </div>

          <p className="text-muted-foreground text-body">
            {experience.description}
          </p>

          <ul className="space-y-2">
            {experience.responsibilities.map((resp, i) => (
              <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                <ChevronRight className="w-4 h-4 text-accent mt-0.5 flex-shrink-0" />
                <span>{resp}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </motion.div>
  );
};

const ExperienceSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="section-padding bg-section-alt">
      <div className="container-narrow">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="heading-section text-foreground">Esperienze Professionali</h2>
          <div className="w-16 h-1 bg-accent mx-auto mt-4" />
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
            Le mie principali esperienze lavorative nel campo dell'amministrazione e della logistica
          </p>
        </motion.div>

        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <ExperienceCard key={exp.company} experience={exp} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
