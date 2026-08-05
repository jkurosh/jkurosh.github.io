import { Navbar } from './components/sections/Navbar';
import { Hero } from './components/sections/Hero';
import { Projects } from './components/sections/Projects';
import { Contact } from './components/sections/Contact';

export default function App() {
  return (
    <div className="min-h-screen bg-[#0f172a] text-slate-200 font-['Vazirmatn',sans-serif] selection:bg-cyan-500 selection:text-white">
      <Navbar />
      <main>
        <Hero />
        <Projects />
        <Contact />
      </main>

      <footer className="py-8 text-center text-slate-500 text-sm border-t border-slate-800/80">
        <p>© {new Date().getFullYear()} کوروش جلیلیان — تمامی حقوق محفوظ است.</p>
        <p className="mt-1 text-xs text-slate-600">مهندس نرم‌افزار و توسعه‌دهنده وب</p>
      </footer>
    </div>
  );
}