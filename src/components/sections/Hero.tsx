import { Mail, FileText } from 'lucide-react';
import { FaGithub, FaLinkedin } from 'react-icons/fa6';
import { personalInfo } from '../../data/portfolio';

export function Hero() {
  return (
    <section className="pt-28 pb-16 border-b border-slate-800">
      <div className="max-w-5xl mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center md:items-start gap-8 justify-between">
          
          {/* بخش اطلاعات و نام */}
          <div className="flex-1 text-center md:text-right">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-3">
              {personalInfo.name}
            </h1>
            <h2 className="text-xl md:text-2xl text-cyan-400 font-medium mb-4">
              {personalInfo.title}
            </h2>
            <p className="text-slate-300 text-base leading-relaxed max-w-2xl mb-6">
              {personalInfo.bio}
            </p>

            {/* دکمه‌های ارتباطی شبیه رزومه */}
            <div className="flex flex-wrap items-center justify-center md:justify-start gap-3">
              <a
                href="#contact"
                className="inline-flex items-center gap-2 bg-cyan-600 hover:bg-cyan-500 text-white px-5 py-2.5 rounded-lg text-sm font-medium transition-colors"
              >
                <Mail className="w-4 h-4" /> تماس با من
              </a>
              <a
                href ="/Kourosh Jalilian-Resume.pdf"
                download="Kourosh Jalilian-Resume.pdf"
                className="inline-flex items-center gap-2 bg-slate-800 hover:bg-slate-700 text-slate-200 border border-slate-700 px-5 py-2.5 rounded-lg text-sm font-medium transition-colors"
              >
                <FileText className="w-4 h-4" /> دریافت فایل PDF رزومه
              </a>
              <div className="flex items-center gap-2 mr-2">
                <a
                  href={personalInfo.github}
                  target="_blank"
                  rel="noreferrer"
                  className="p-2.5 bg-slate-800 hover:bg-slate-700 text-slate-300 rounded-lg border border-slate-700 transition-colors"
                  aria-label="GitHub"
                >
                  <FaGithub className="w-5 h-5" />
                </a>
                <a
                  href={personalInfo.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  className="p-2.5 bg-slate-800 hover:bg-slate-700 text-slate-300 rounded-lg border border-slate-700 transition-colors"
                  aria-label="LinkedIn"
                >
                  <FaLinkedin className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>

          {/* قاب عکس دایره‌ای */}
          <div className="relative shrink-0">
            <div className="w-40 h-40 md:w-48 md:h-48 rounded-full overflow-hidden border-4 border-slate-700 shadow-xl bg-slate-800">
              <img
                src={personalInfo.avatar}
                alt={personalInfo.name}
                className="w-full h-full object-cover"
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
