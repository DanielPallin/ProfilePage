import Navbar from './components/Navbar';
import Hero from './components/sections/Hero';
import Portfolio from './components/sections/Portfolio';
import About from './components/sections/About';
import Contact from './components/sections/Contact';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="bg-slate-950 text-slate-50 min-h-screen selection:bg-blue-500/30">
      {/* Skip-link */}
      <a 
        href="#main-content" 
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 z-[100] bg-blue-600 px-4 py-2 rounded-md font-bold text-white outline-none focus:ring-2 focus:ring-white"
      >
        Hoppa till innehåll
      </a>

      <Navbar />
      
      <main id="main-content">
        <Hero />
        <Portfolio />
        <About />
        <Contact /> {}
      </main>
      <Footer /> {}
    </div>
  );
}