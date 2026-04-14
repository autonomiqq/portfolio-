import { motion } from 'framer-motion';
import { Code2, Heart, Award, Globe } from 'lucide-react';

const About = () => {
  const highlights = [
    { icon: Code2, title: '10K+ Students', desc: 'Trained globally' },
    { icon: Award, title: '15+ Certifications', desc: 'Industry recognized' },
    { icon: Globe, title: 'Remote Expert', desc: 'Online & hybrid' },
    { icon: Heart, title: 'Passionate', desc: 'Love teaching' },
  ];

  return (
    <section id="about" className="py-24 px-4 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent" />
      
      <div className="container mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            About <span className="gradient-text">Me</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full" />
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="relative">
              <div className="aspect-square rounded-2xl bg-gradient-to-br from-primary/20 to-secondary/20 p-8">
                <div className="w-full h-full rounded-xl bg-slate-900/80 flex items-center justify-center">
                  <div className="text-center">
                    <div className="text-6xl mb-4">💻</div>
                    <p className="text-slate-400">Transforming complex concepts into achievable learning paths</p>
                  </div>
                </div>
              </div>
              
              <div className="absolute -bottom-6 -right-6 glass rounded-xl p-4">
                <div className="text-4xl font-bold gradient-text">4+</div>
                <div className="text-sm text-slate-400">Years of Excellence</div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <h3 className="text-2xl font-bold">
              Founder & CEO of Orbivex | Technical Trainer & Developer
            </h3>
            
            <p className="text-slate-400 leading-relaxed">
              I am the Founder and CEO of <span className="text-primary font-semibold">Orbivex</span>, where I lead innovation in Agentic AI 
              applications. We build autonomous AI systems that solve complex real-world problems through intelligent 
              automation and decision-making.
            </p>
            
            <p className="text-slate-400 leading-relaxed">
              With 4+ years in technical training and development, I specialize in Developing SLM, LLM, Optimisation, SaaS, ML & AI. 
              My mission is to empower developers and organizations to harness cutting-edge AI technology for real-world impact.
            </p>

            <div className="flex flex-wrap gap-2">
              {['SLM', 'LLM', 'Optimisation', 'SaaS', 'ML', 'AI', 'Agentic AI', 'Claude'].map((tech) => (
                <span key={tech} className="px-3 py-1 text-xs font-medium bg-primary/20 text-primary rounded-full">
                  {tech}
                </span>
              ))}
            </div>

            <div className="grid grid-cols-2 gap-4 pt-4">
              {highlights.map((item, i) => (
                <motion.div
                  key={i}
                  className="flex items-center gap-3 p-3 glass rounded-lg"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1, duration: 0.4 }}
                >
                  <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-primary to-secondary flex items-center justify-center">
                    <item.icon className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="font-semibold text-sm">{item.title}</div>
                    <div className="text-xs text-slate-500">{item.desc}</div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
