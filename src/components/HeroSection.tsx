import { motion } from "framer-motion";
import { MapPin, Mail, Briefcase } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="relative min-h-[90vh] flex items-center bg-[image:var(--hero-gradient)] overflow-hidden">
      {/* Subtle pattern overlay */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }} />
      </div>

      <div className="container-narrow relative z-10 text-primary-foreground">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="space-y-6"
        >
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="text-lg md:text-xl opacity-90 font-body"
          >
            Segretaria Amministrativa & Logistica
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="heading-display text-4xl md:text-5xl lg:text-6xl"
          >
            Sabrina Benetazzo
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.5 }}
            className="text-body max-w-2xl opacity-90"
          >
            Oltre 15 anni di esperienza nella gestione amministrativa e logistica. 
            Precisione, organizzazione e affidabilità al servizio delle aziende.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.5 }}
            className="flex flex-wrap gap-6 pt-4"
          >
            <div className="flex items-center gap-2 opacity-90">
              <MapPin className="w-5 h-5" />
              <span className="font-body">Italia</span>
            </div>
            <div className="flex items-center gap-2 opacity-90">
              <Briefcase className="w-5 h-5" />
              <span className="font-body">Disponibile</span>
            </div>
            <div className="flex items-center gap-2 opacity-90">
              <Mail className="w-5 h-5" />
              <span className="font-body">Contattami</span>
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Decorative element */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 0.1, scale: 1 }}
        transition={{ delay: 0.5, duration: 1 }}
        className="absolute -right-20 -bottom-20 w-96 h-96 rounded-full border-[40px] border-primary-foreground"
      />
    </section>
  );
};

export default HeroSection;
