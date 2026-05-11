import { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Send, MapPin, Loader2, CheckCircle2, XCircle } from 'lucide-react';

export default function Contact() {
  // States
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [copied, setCopied] = useState(false);

  // kopieringsfunktion
  const handleCopyDiscord = () => {
    navigator.clipboard.writeText('danielpallin'); 
    setCopied(true);
    setTimeout(() => setCopied(false), 2000); // Återställ efter 2 sekunder
  };

  // Formulär-funktion
const handleSubmit = async (e: React.SyntheticEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    // Sparar referensen till formuläret direkt
    const form = e.currentTarget; 
    setStatus('loading');

    // Gör objekt av all data
    const formData = new FormData(form);
    const object = Object.fromEntries(formData);
    
    // Lägg till access_key
    object.access_key = "3e026dd4-d063-430e-94a9-c29ffca20d26";

    const json = JSON.stringify(object);

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: json,
      });

      const result = await response.json();

      if (result.success) {
        setStatus('success');
        form.reset(); // Tömmer formuläret
        
        // Återställ knappen till ursprungsläget
        setTimeout(() => setStatus('idle'), 3000);
      } else {
        // Om API:et skickar tillbaka ett felmeddelande
        console.log("Web3Forms fel:", result);
        setStatus('error');
        setTimeout(() => setStatus('idle'), 3000);
      }
    } catch (error) {
      // Om det blir nätverksfel eller liknande
      console.error("Nätverksfel:", error);
      setStatus('error');
      setTimeout(() => setStatus('idle'), 3000);
    }
  };

  return (
    <section id="contact" className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto 2xl:max-w-[120rem]">
      <div className="space-y-16">
        
        <div className="text-center space-y-4">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-50">Hör av dig!</h2>
          <p className="text-slate-400 max-w-2xl mx-auto">
            Letar ni efter en driven LIA-student, kollega, co-founder eller bara vill snacka digital utveckling? 
            Skicka ett meddelande så tar vi en digital kaffe.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-start">
          
 {/* Vänster sida: Kontaktinfo */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="space-y-8"
          >
            <div className="bg-slate-900 border border-slate-800 p-8 rounded-2xl space-y-8">
              <h3 className="text-xl font-bold text-slate-50">Kontaktuppgifter</h3>
              
              <div className="space-y-6">
                
                {/* Mail */}
                <a href="mailto:danielpallin94@hotmail.com" className="flex items-center gap-4 text-slate-400 hover:text-blue-400 transition-colors group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 rounded-lg">
                  <div className="p-3 bg-slate-800 group-hover:bg-blue-500/10 rounded-lg transition-colors">
                    <Mail size={24} className="group-hover:text-blue-400" aria-hidden="true" />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-slate-50">Maila mig</p>
                    <p>danielpallin94@hotmail.com</p>
                  </div>
                </a>

                {/* Plats */}
                <div className="flex items-center gap-4 text-slate-400">
                  <div className="p-3 bg-slate-800 rounded-lg">
                    <MapPin size={24} aria-hidden="true" />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-slate-50">Plats</p>
                    <p>Sverige (100% Öppen för remote)</p>
                  </div>
                </div>

                {/* --- Sociala Länkar --- */}
                {/* Gemensam ram för sociala länkar med en enda avskiljande linje */}
                <div className="pt-6 mt-6 border-t border-slate-800 space-y-6">
                  
                  {/* GitHub (Gjorde hela raden klickbar för enhetlighet) */}
                  <a 
                    href="https://github.com/DanielPallin" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center gap-4 text-slate-400 hover:text-blue-400 transition-colors group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 rounded-lg"
                  >
                    <div className="p-3 bg-slate-800 group-hover:bg-blue-500/10 rounded-lg transition-colors">
                      <img src="/GitHub-logo.png" alt="GitHub" className="w-6 h-6 invert opacity-70 group-hover:opacity-100 transition-opacity" />
                    </div>
                    <div>
                      <p className="text-sm font-medium text-slate-50">GitHub</p>
                    </div>
                  </a>

                  {/* LinkedIn */}
                  <a 
                    href="https://www.linkedin.com/in/daniel-pallin-a40a06381"
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center gap-4 text-slate-400 hover:text-blue-400 transition-colors group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 rounded-lg"
                  >
                    <div className="p-3 bg-slate-800 group-hover:bg-blue-500/10 rounded-lg transition-colors">
                      <img src="/linkedin-logo.png" alt="Linkedin" className="w-6 h-6 invert opacity-70 group-hover:opacity-100 transition-opacity" />
                    </div>
                    <div>
                      <p className="text-sm font-medium text-slate-50">Linkedin</p>
                    </div>
                  </a>

                  {/* Discord Kopieringsknapp */}
                  <button 
                    onClick={handleCopyDiscord}
                    type="button"
                    className="flex items-center gap-4 text-slate-400 hover:text-blue-400 transition-colors group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 rounded-lg text-left cursor-pointer w-full"
                  >
                    <div className="relative p-3 bg-slate-800 group-hover:bg-blue-500/10 rounded-lg transition-colors">
                      <img 
                        src="/discord-logo3.png" 
                        alt="Discord" 
                        className={`w-6 h-6 invert transition-opacity duration-200 ${copied ? 'opacity-0' : 'opacity-100'}`} 
                        aria-hidden="true"
                      />
                      {copied && (
                        <CheckCircle2 size={24} className="absolute inset-0 m-auto text-green-500" aria-hidden="true" />
                      )}
                    </div>
                    <div>
                      <p className="text-sm font-medium text-slate-50">Discord</p>
                      <p className={`transition-colors ${copied ? 'text-green-400 font-medium' : ''}`}>
                        {copied ? 'Kopierad till urklipp!' : 'danielpallin'}
                      </p>
                    </div>
                  </button>
                  
                </div>
              </div>
            </div>
          </motion.div>

          {/* Höger sida: Formulär */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <form onSubmit={handleSubmit} className="space-y-6 bg-slate-900 border border-slate-800 p-8 rounded-2xl relative">
              
              {/* anti bot spam */}
              <input type="checkbox" name="botcheck" className="hidden" style={{ display: 'none' }} />

              <div className="space-y-2">
                <label htmlFor="name" className="text-sm font-medium text-slate-300">Namn</label>
                <input 
                  type="text" 
                  id="name" 
                  name="name" 
                  required
                  placeholder="Name"
                  className="w-full px-4 py-3 bg-slate-950 border border-slate-700 rounded-lg text-slate-50 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all placeholder:text-slate-600"
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="email" className="text-sm font-medium text-slate-300">Email</label>
                <input 
                  type="email" 
                  id="email" 
                  name="email" 
                  required
                  placeholder="Email"
                  className="w-full px-4 py-3 bg-slate-950 border border-slate-700 rounded-lg text-slate-50 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all placeholder:text-slate-600"
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-medium text-slate-300">Meddelande</label>
                <textarea 
                  id="message" 
                  name="message" 
                  required
                  rows={4}
                  placeholder="Hej! Vi letar efter en LIA-student..."
                  className="w-full px-4 py-3 bg-slate-950 border border-slate-700 rounded-lg text-slate-50 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all placeholder:text-slate-600 resize-none"
                ></textarea>
              </div>

              {/* Dynamisk Submit-knapp */}
              <button 
                type="submit"
                disabled={status === 'loading'}
                className={`w-full group flex items-center justify-center gap-2 px-8 py-4 rounded-lg font-medium transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-900 focus-visible:ring-blue-500 ${
                  status === 'success' ? 'bg-green-600 hover:bg-green-500 text-white' :
                  status === 'error' ? 'bg-red-600 hover:bg-red-500 text-white' :
                  'bg-blue-600 hover:bg-blue-500 text-white cursor-pointer'
                }`}
              >
                {status === 'idle' && (
                  <>
                    Skicka meddelande
                    <Send size={18} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" aria-hidden="true" />
                  </>
                )}
                {status === 'loading' && (
                  <>
                    <Loader2 size={18} className="animate-spin" /> Skickar...
                  </>
                )}
                {status === 'success' && (
                  <>
                    <CheckCircle2 size={18} /> Skickat!
                  </>
                )}
                {status === 'error' && (
                  <>
                    <XCircle size={18} /> Något gick fel.
                  </>
                )}
              </button>
            </form>
          </motion.div>

        </div>
      </div>
    </section>
  );
}