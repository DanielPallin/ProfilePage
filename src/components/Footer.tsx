export default function Footer() {
  return (
    <footer className="py-8 border-t border-white/10 mt-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-slate-400 text-sm flex flex-col md:flex-row items-center justify-between gap-4">
        <p>&copy; {new Date().getFullYear()} Daniel Pallin. Alla rättigheter reserverade.</p>
        <p>Byggd med <span className="text-blue-400">TypeScript</span>, <span className="text-blue-400">React</span> & <span className="text-blue-400">Tailwind v4</span>.</p>
      </div>
    </footer>
  );
}