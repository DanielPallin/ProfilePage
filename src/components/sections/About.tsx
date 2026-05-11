import { motion } from 'framer-motion';
import { Terminal, Lightbulb, Coffee } from 'lucide-react';
import mittPortratt from '../../assets/Sjalvportratt.png';

export default function About() {
  return (
    <section id="about" className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto 2xl:max-w-[120rem] overflow-hidden">
      {}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-12 items-center">
        
        {/* Vänster sida: Text och presentation (Tar upp 8 av 12 kolumner = ~66%) */}
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="space-y-6 lg:col-span-8"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-slate-50">
            Vem är jag?
          </h2>
          <div className="space-y-4 text-slate-400 text-lg leading-relaxed">
            <p>
              Jag är en driven Fullstack-utvecklare under utbildning som älskar att bygga logiska, snygga och användarvänliga webbapplikationer. Just nu letar jag efter en LIA-plats (Lärande i Arbete) inför Januari 2027 där jag kan bidra med ny energi och modern kod.
            </p>
            <p>
              Min resa började med en nyfikenhet för hur saker fungerar bakom kulisserna. Idag spenderar jag mina dagar med att skriva olika tech-stacks, bygga komponenter i React och nörda ner mig i modern CSS och UX-design.
            </p>
          </div>

          {/* Tre snabba */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-6">
            <div className="p-4 bg-slate-900 border border-slate-800 rounded-xl flex flex-col items-center text-center gap-3 hover:border-blue-500/50 transition-colors">
              <div className="p-3 bg-blue-500/10 rounded-full text-blue-400">
                <Terminal size={24} aria-hidden="true" />
              </div>
              <h3 className="text-slate-50 font-medium">Flexibel</h3>
              <p className="text-sm text-slate-400">Öppen för olika tech-stacks och är tekniskt orädd.</p>
            </div>
            
            <div className="p-4 bg-slate-900 border border-slate-800 rounded-xl flex flex-col items-center text-center gap-3 hover:border-blue-500/50 transition-colors">
              <div className="p-3 bg-blue-500/10 rounded-full text-blue-400">
                <Lightbulb size={24} aria-hidden="true" />
              </div>
              <h3 className="text-slate-50 font-medium">Ansvarstagande</h3>
              <p className="text-sm text-slate-400">Sitter gärna uppe hela natten för att hjälpa andra eller bli klar med en feature.</p>
            </div>

            <div className="p-4 bg-slate-900 border border-slate-800 rounded-xl flex flex-col items-center text-center gap-3 hover:border-blue-500/50 transition-colors">
              <div className="p-3 bg-blue-500/10 rounded-full text-blue-400">
                <Coffee size={24} aria-hidden="true" />
              </div>
              <h3 className="text-slate-50 font-medium">Teamspelare</h3>
              <p className="text-sm text-slate-400">Tar gärna en kaffe och bollar idéer - Bäst idé vinner!</p>
            </div>
          </div>
        </motion.div>

        {/* Höger sida: Bild (Tar upp 4 av 12 kolumner = ~33%) */}
        <motion.div 
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
          className="relative lg:col-span-4 w-full max-w-sm mx-auto lg:max-w-none"
        >
          {/* glow-bg */}
          <div className="absolute -inset-4 bg-gradient-to-tr from-blue-600 to-cyan-400 rounded-2xl opacity-20 blur-2xl"></div>
          
          <div className="relative aspect-[4/5] bg-slate-800 rounded-2xl border border-slate-700 overflow-hidden shadow-2xl">
            <img 
              src={mittPortratt} 
              alt="Självporträtt på [Daniel Pallin]" 
              className="w-full h-full object-cover" 
              loading="lazy"
            />
            
            {/* badge */}
            <div className="absolute bottom-6 left-4 right-4 p-4 bg-slate-950/90 backdrop-blur-md border border-white/10 rounded-xl text-center shadow-lg">
              <p className="text-blue-400 font-bold text-sm mb-1">LIA-period 1:</p>
              <p className="text-slate-200 text-xs font-medium mb-3">2027: 4 Jan - 12 Mar (10v)</p>
              
              <div className="h-px w-full bg-white/10 mb-3"></div>
              
              <p className="text-blue-400 font-bold text-sm mb-1">LIA-period 2:</p>
              <p className="text-slate-200 text-xs font-medium">2027: 26 Apr - 1 Okt (23v)</p>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}