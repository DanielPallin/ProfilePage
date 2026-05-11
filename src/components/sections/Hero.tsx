import { motion, type Variants } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

export default function Hero() {
  // 1. Typa båda som Variants
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 }, 
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { 
        duration: 0.5, 
        ease: "easeOut"
      } 
    },
  };

  return (
    <section 
      aria-label="Introduktion" 
      className="relative min-h-screen flex items-center justify-center pt-20 px-4 sm:px-6 lg:px-8 overflow-hidden"
    >
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-blue-900/20 via-slate-950 to-slate-950"></div>

      <motion.div 
        className="max-w-4xl mx-auto text-center space-y-8"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.div variants={itemVariants}>
          <span className="inline-block py-1 px-3 rounded-full bg-blue-500/10 text-blue-400 text-sm font-medium border border-blue-500/20 mb-4">
            Söker LIA / Mid-level / Junior roll med start Januari 2027
          </span>
        </motion.div>

        <motion.h1 
          variants={itemVariants}
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight text-slate-50"
        >
          Kreativ Fullstack-utvecklare med passion för <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">Projekt-arkitektur och Skalbar kod.</span>
        </motion.h1>

        <motion.p 
          variants={itemVariants}
          className="max-w-2xl mx-auto text-lg sm:text-xl text-slate-400 leading-relaxed"
        >
          Jag bygger snabba, tillgängliga och smarta webbapplikationer. 
          Fokus på TypeScript, React, SQL och modern CSS.
        </motion.p>

        <motion.div 
          variants={itemVariants}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4"
        >
          <a 
            href="#projects" 
            className="w-full sm:w-auto group flex items-center justify-center gap-2 px-8 py-4 bg-blue-600 hover:bg-blue-500 text-white rounded-lg font-medium transition-all focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950 focus-visible:ring-blue-500 outline-none"
          >
            Se mina projekt
            <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" aria-hidden="true" />
          </a>

        </motion.div>
      </motion.div>
    </section>
  );
}