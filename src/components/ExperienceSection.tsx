import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Building2, Calendar, ChevronRight } from "lucide-react";
import officeImg from "@/assets/office-logistics.jpg";
import glassWorkImg from "@/assets/glass-automotive.jpg";

const experiences = [
  {
    company: "Tecmo srl – Vema srl – Stein srl",
    role: "Ufficio acquisti e vendite – Segretaria amministrativa",
    period: "2025 - oggi",
    description: "Gestione completa di richieste di offerte e ordini verso fornitori italiani ed esteri (in lingua inglese), preventivi, ordini clienti e gestione documentazione di trasporto per vendita al cliente SEA.",
    responsibilities: [
      "Richieste di offerte e ordini verso fornitori italiani ed esteri",
      "Preventivi e gestione ordini clienti italiani",
      "Emissione documenti di trasporto per cliente SEA",
      "Amministrazione Stein srl: pagamenti fatture e interfaccia commercialista",
      "Segretariato per l'amministratore unico"
    ],
    image: officeImg,
  },
  {
    company: "Tecmo srl – Stein srl",
    role: "Segretaria amministrativa e logistica",
    period: "2022 - 2024",
    description: "Gestione ordini fornitori e clienti italiani, fatturazione, magazzino ricambi, emissione DDT e coordinamento spedizioni tramite corrieri in abbonamento.",
    responsibilities: [
      "Gestione ordini verso fornitori e clienti italiani",
      "Fatturazione e gestione magazzino ricambi",
      "Emissione documenti di trasporto verso fornitori e clienti",
      "Coordinamento spedizioni tramite corrieri in abbonamento",
      "Interfaccia con fornitori esteri in lingua inglese (scritta e parlata)",
      "Amministrazione Stein srl dal 2023"
    ],
    image: officeImg,
  },
  {
    company: "Doctor Glass di Lecco",
    role: "Segretaria amministrativa",
    period: "2015 - 2022",
    description: "Gestione in piena autonomia del front-desk, centralino, planning appuntamenti e pratiche sostituzione vetri auto con gestione completa dei fornitori e interfaccia amministrativa.",
    responsibilities: [
      "Gestione front-desk e centralino telefonico",
      "Gestione planning appuntamenti",
      "Gestione pratiche sostituzione vetri auto (programma proprietario)",
      "Gestione fornitori e relative fatture",
      "Interfaccia con amministrazione e contabilità aziendale"
    ],
    image: glassWorkImg,
  },
  {
    company: "Bar-tabacchi-ricevitoria di proprietà familiare",
    role: "Coadiuvante",
    period: "2009 - 2014",
    description: "Supporto nella gestione dell'attività commerciale di famiglia.",
    responsibilities: [
      "Gestione cassa e servizio clienti",
      "Amministrazione quotidiana dell'esercizio",
      "Attestato somministrazione cibi e bevande (2010)"
    ],
    image: null,
  },
  {
    company: "Nokia-Siemens Networks Italia S.p.A.",
    role: "Senior Software Developer",
    period: "2005 - 2009",
    description: "Sviluppo sistema Radio Mobile GSM 3G potenziato verso capacità UMTS, coordinamento documentazione utente e sperimentazione metodologia Agile.",
    responsibilities: [
      "Sviluppo sistema Radio Mobile GSM 3G evoluto UMTS",
      "Redazione documenti di specifica in inglese",
      "Coordinamento documentazione utente per allarmistica",
      "Sperimentazione metodologia Agile",
      "Comunicazioni in inglese con colleghi esteri"
    ],
    image: null,
  },
  {
    company: "Siemens Information & Communications S.p.A.",
    role: "Senior Software Developer",
    period: "2004 - 2005",
    description: "Ricerca e Sviluppo per la realizzazione del Sistema Radio Mobile 3G evoluto UMTS-UTRAN in collaborazione con casa madre tedesca e NEC.",
    responsibilities: [
      "Analisi per Sistema Radio Mobile 3G UMTS-UTRAN",
      "Collaborazione internazionale con Germania e NEC"
    ],
    image: null,
  },
  {
    company: "Siemens Mobile Communications S.p.A.",
    role: "Junior Software Developer",
    period: "1989 - 2003",
    description: "Sviluppo del Sistema Radio Mobile 3G GSM nazionale ed internazionale e supporto allo sviluppo della centrale a commutazione EAX-GTD5.",
    responsibilities: [
      "Sviluppo Sistema Radio Mobile 3G GSM nazionale e internazionale",
      "Supporto sviluppo centrale a commutazione EAX-GTD5 (GTE)"
    ],
    image: null,
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
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="card-experience"
    >
      <div className={`grid ${experience.image ? 'md:grid-cols-5' : ''} gap-6`}>
        {/* Image */}
        {experience.image && (
          <div className="md:col-span-2">
            <div className="aspect-[4/3] rounded-lg overflow-hidden bg-secondary">
              <img
                src={experience.image}
                alt={experience.company}
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        )}

        {/* Content */}
        <div className={experience.image ? "md:col-span-3 space-y-4" : "space-y-4"}>
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
            Una carriera che spazia dallo sviluppo software alla gestione amministrativa e logistica
          </p>
        </motion.div>

        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <ExperienceCard key={`${exp.company}-${exp.period}`} experience={exp} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
