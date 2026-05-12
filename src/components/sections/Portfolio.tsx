import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink } from 'lucide-react';
import { projectsData, categories } from '../../data/projects';
import type { Project } from '../../data/projects';

export default function Portfolio() {
  const [activeCategory, setActiveCategory] = useState<string>('Alla');

  // Filtrera projekten baserat på vald kategori
  const filteredProjects = projectsData.filter((project) => 
    activeCategory === 'Alla' ? true : project.category === activeCategory
  );

  return (
    <section id="projects" className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto 2xl:max-w-480">
      <div className="space-y-12">
        
        {/* Rubrik & Introduktion */}
        <div className="text-center space-y-4">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-50">Mina Projekt</h2>
          <p className="text-slate-400 max-w-2xl mx-auto">
            Här är ett urval av vad jag har byggt. Klicka på länkarna för att se live-demos eller granska koden på GitHub.
          </p>
        </div>

        {}
        <div className="flex flex-wrap justify-center gap-2 sm:gap-4">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all focus-visible:ring-2 focus-visible:ring-blue-500 outline-none cursor-pointer ${
                activeCategory === category
                  ? 'bg-blue-600 text-white shadow-lg shadow-blue-500/20'
                  : 'bg-slate-800/50 text-slate-300 hover:bg-slate-700 hover:text-white border border-slate-700'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Framer Motion */}
        <motion.div 
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project: Project) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9, transition: { duration: 0.2 } }}
                transition={{ duration: 0.3 }}
                className="group flex flex-col bg-slate-900 rounded-xl border border-slate-800 overflow-hidden hover:border-blue-500/50 transition-colors focus-within:ring-2 focus-within:ring-blue-500"
              >
                {/* Bildsektion */}
                <div className="relative aspect-video overflow-hidden bg-slate-800">
                  <img 
                    src={project.imageUrl} 
                    alt={`Skärmdump av ${project.title}`} 
                    className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                  {}
                  <div className="absolute inset-0 bg-slate-950/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 items-center justify-center gap-4 hidden md:flex">
                    {project.liveUrl && (
                      <a 
                        href={project.liveUrl} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="p-3 bg-blue-600 rounded-full text-white hover:bg-blue-500 transition-colors"
                        aria-label={`Besök ${project.title} live`}
                        tabIndex={-1}
                      >
                        <ExternalLink size={20} />
                      </a>
                    )}
                    {project.githubUrl && (
                    <a 
                        href={project.githubUrl} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="p-3 bg-slate-800 rounded-full text-white hover:bg-slate-700 transition-colors flex items-center justify-center"
                        aria-label={`Se källkoden för ${project.title}`}
                        tabIndex={-1}
                    >
                        {}
                        <img 
                        src="/github-logo.png" 
                        alt="GitHub" 
                        className="w-5 h-5 object-contain invert" 
                        />
                    </a>
                    )}
                  </div>
                </div>

                {/* Innehållssektion */}
                <div className="p-6 flex flex-col grow space-y-4">
                  <div className="space-y-2">
                    <h3 className="text-xl font-bold text-slate-50">{project.title}</h3>
                    <p className="text-slate-400 text-sm line-clamp-3">
                      {project.description}
                    </p>
                  </div>

                  {/* Tech-tags */}
                  <div className="flex flex-wrap gap-2 mt-auto pt-4">
                    {project.technologies.map(tech => (
                      <span key={tech} className="px-2 py-1 bg-slate-800 text-slate-300 text-xs rounded-md border border-slate-700">
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Mobila Länkar */}
                  <div className="flex gap-4 pt-4 mt-4 border-t border-slate-800 md:hidden">
                    {project.liveUrl && (
                      <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-sm text-blue-400 hover:text-blue-300">
                        <ExternalLink size={16} /> Live Demo
                      </a>
                    )}
                    {project.githubUrl && (
                        <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-sm text-slate-300 hover:text-white">
                            <img 
                            src="/github-logo.png" 
                            alt="GitHub" 
                            className="w-4 h-4 object-contain invert" 
                            /> 
                            Kod
                        </a>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

      </div>
    </section>
  );
}