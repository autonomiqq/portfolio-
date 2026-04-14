import { motion } from 'framer-motion';
import { Heart } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-8 px-4 border-t border-white/10">
      <div className="container mx-auto">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2 text-slate-400 text-sm">
            <span>© {currentYear} Rajesh Maroju. Crafted with</span>
            <Heart className="w-4 h-4 text-red-500 fill-red-500" />
            <span>and lots of</span>
            <span className="text-primary">☕</span>
          </div>
          
          <motion.div 
            className="flex gap-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            {['Privacy', 'Terms', 'Sitemap'].map((item) => (
              <a
                key={item}
                href="#"
                className="text-sm text-slate-400 hover:text-white transition-colors"
              >
                {item}
              </a>
            ))}
          </motion.div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
