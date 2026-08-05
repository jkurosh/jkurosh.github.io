import { Mail } from 'lucide-react';
import { FaGithub, FaLinkedin } from 'react-icons/fa6';
import { personalInfo } from '../../data/portfolio';

export function Contact() {
  return (
    <section id="contact" className="max-w-5xl mx-auto px-6 py-16 border-t border-slate-800/80">
      <h2 className="text-2xl font-bold text-white mb-6 border-r-4 border-cyan-500 pr-3">
        ارتباط با من
      </h2>
      <div className="bg-slate-800/40 border border-slate-700/80 rounded-xl p-6 md:p-8 flex flex-col md:flex-row gap-8 justify-between items-start md:items-center">
        <div className="space-y-3">
          <p className="text-slate-300 leading-relaxed text-sm max-w-md">
            جهت دریافت رزومه کامل، همکاری در پروژه‌های نرم‌افزاری یا فرصت‌های شغلی می‌توانید با من در ارتباط باشید.
          </p>
          <div className="flex items-center gap-2 text-sm text-cyan-400 font-medium">
            <Mail className="w-4 h-4 text-cyan-400" />
            <span>{personalInfo.email}</span>
          </div>
        </div>

        <div className="flex gap-3 shrink-0">
          <a
            href={personalInfo.github}
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-2 bg-slate-800 hover:bg-slate-700 text-slate-200 border border-slate-700 px-4 py-2.5 rounded-lg text-sm font-medium transition-colors"
          >
            <FaGithub className="w-4 h-4" /> گیت‌هاب
          </a>
          <a
            href={personalInfo.linkedin}
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-2 bg-slate-800 hover:bg-slate-700 text-slate-200 border border-slate-700 px-4 py-2.5 rounded-lg text-sm font-medium transition-colors"
          >
            <FaLinkedin className="w-4 h-4 text-blue-400" /> لینکدین
          </a>
        </div>
      </div>
    </section>
  );
}