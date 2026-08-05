import { ExternalLink } from 'lucide-react';
import { FaGithub } from 'react-icons/fa6';
import { projects, skills } from '../../data/portfolio';

export function Projects() {
  return (
    <div className="max-w-5xl mx-auto px-6 py-12 space-y-16">
      
      {/* بخش مهارت‌ها */}
      <section>
        <h2 className="text-2xl font-bold text-white mb-6 border-r-4 border-cyan-500 pr-3">
          مهارت‌های تخصصی
        </h2>
        <div className="grid md:grid-cols-3 gap-6">
          {skills.map((skillGroup, idx) => (
            <div key={idx} className="bg-slate-800/60 border border-slate-700/60 p-5 rounded-xl">
              <h3 className="text-cyan-400 font-semibold mb-4 text-base">
                {skillGroup.category}
              </h3>
              <div className="flex flex-wrap gap-2">
                {skillGroup.items.map((item, itemIdx) => (
                  <span
                    key={itemIdx}
                    className="bg-slate-900 border border-slate-700 text-slate-300 text-xs px-3 py-1.5 rounded-md font-medium"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* بخش پروژه‌ها */}
      <section id="projects">
        <h2 className="text-2xl font-bold text-white mb-6 border-r-4 border-cyan-500 pr-3">
          پروژه‌های برجسته نرم‌افزاری
        </h2>
        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-slate-800/40 border border-slate-700/80 rounded-xl p-6 flex flex-col justify-between hover:border-slate-600 transition-colors"
            >
              <div>
                <h3 className="text-xl font-bold text-white mb-3">
                  {project.title}
                </h3>
                <p className="text-slate-400 text-sm leading-relaxed mb-6">
                  {project.description}
                </p>
              </div>

              <div>
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="text-xs bg-cyan-950/60 text-cyan-300 border border-cyan-800/50 px-2.5 py-1 rounded"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex gap-4 border-t border-slate-700/60 pt-4 text-sm">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noreferrer"
                    className="text-slate-300 hover:text-cyan-400 transition-colors flex items-center gap-1.5"
                  >
                    <FaGithub className="w-4 h-4" /> مشاهده سورس‌کد
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

    </div>
  );
}