import { personalInfo } from '../../data/portfolio';

export function Navbar() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#0f172a]/90 backdrop-blur-md border-b border-slate-800">
      <div className="max-w-5xl mx-auto px-6 h-16 flex items-center justify-between">
        <a href="#" className="text-base font-bold text-white tracking-wide hover:text-cyan-400 transition-colors">
          {personalInfo.name}
        </a>
        <nav className="flex items-center gap-6 text-sm font-medium text-slate-300">
          <a href="#" className="hover:text-cyan-400 transition-colors">درباره من</a>
          <a href="#projects" className="hover:text-cyan-400 transition-colors">پروژه‌ها</a>
          <a href="#contact" className="hover:text-cyan-400 transition-colors">تماس</a>
        </nav>
      </div>
    </header>
  );
}