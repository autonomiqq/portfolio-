import { motion } from 'framer-motion';
import { experiences } from '../data/portfolio';
import { Briefcase, Calendar } from 'lucide-react';

const Experience = () => {
  return (
    <section id="experience" className="py-24 px-4 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-secondary/5 to-transparent" />
      
      <div className="container mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            My <span className="gradient-text">Journey</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full" />
          <p className="mt-4 text-slate-400 max-w-2xl mx-auto">
            4+ years of transforming careers through technical education
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <div className="relative">
            <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-primary via-secondary to-accent transform md:-translate-x-px" />
            
            {experiences.map((exp, i) => (
              <motion.div
                key={exp.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.2 }}
                className={`relative flex flex-col md:flex-row gap-8 mb-12 ${
                  i % 2 === 0 ? 'md:flex-row-reverse' : ''
                }`}
              >
                <div className="flex-1 md:text-right">
                  {i % 2 === 0 ? (
                    <div className="glass rounded-2xl p-6 text-left">
                      <TimelineCard exp={exp} />
                    </div>
                  ) : (
                    <div className="hidden md:block" />
                  )}
                </div>
                
                <div className="absolute left-0 md:left-1/2 w-4 h-4 bg-primary rounded-full transform -translate-x-1.5 md:-translate-x-2 mt-8 border-4 border-slate-950" />
                
                <div className="flex-1">
                  {i % 2 !== 0 ? (
                    <div className="glass rounded-2xl p-6">
                      <TimelineCard exp={exp} />
                    </div>
                  ) : (
                    <div className="md:hidden glass rounded-2xl p-6">
                      <TimelineCard exp={exp} />
                    </div>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

const TimelineCard = ({ exp }: { exp: typeof experiences[0] }) => (
  <>
    <div className="flex items-center gap-2 text-primary text-sm mb-2">
      <Calendar className="w-4 h-4" />
      {exp.period}
    </div>
    
    <h3 className="text-xl font-bold mb-1">{exp.title}</h3>
    
    <div className="flex items-center gap-2 text-slate-400 text-sm mb-4">
      <Briefcase className="w-4 h-4" />
      {exp.company}
    </div>
    
    <p className="text-slate-400 text-sm mb-4">{exp.description}</p>
    
    <ul className="space-y-2">
      {exp.highlights.map((highlight, i) => (
        <li key={i} className="flex items-start gap-2 text-sm text-slate-300">
          <span className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0" />
          {highlight}
        </li>
      ))}
    </ul>
  </>
);

export default Experience;
