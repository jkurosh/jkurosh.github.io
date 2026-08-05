import { motion } from 'framer-motion';
import { skills } from '../../data/portfolio';

export function Skills() {
  return (
    <section id="skills" className="py-24 bg-card/30">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Technical Skills</h2>
          <div className="w-20 h-1 bg-secondary rounded-full"></div>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {skills.map((skillGroup, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="glass p-8 rounded-xl"
            >
              <h3 className="text-xl font-semibold mb-6 text-white">{skillGroup.category}</h3>
              <div className="flex flex-wrap gap-3">
                {skillGroup.items.map(item => (
                  <span 
                    key={item} 
                    className="px-4 py-2 bg-background border border-white/5 rounded-lg text-sm text-gray-300 hover:border-accent/50 transition-colors cursor-default"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}