import React from 'react';
import { motion } from 'framer-motion';
import { Phone } from 'lucide-react';

const Footer = () => {
  return (
    <>
      {/* Full-Width Closer CTA Section */}
      <section className="py-32 bg-gym-dark relative overflow-hidden">
        {/* Abstract background elements */}
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-b from-gym-dark via-gym-charcoal/80 to-gym-dark z-10"></div>
          <div className="grain-overlay opacity-10"></div>
        </div>

        <div className="relative z-20 max-w-4xl mx-auto px-4 text-center">
          <motion.h2 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-sans text-5xl md:text-7xl font-black text-white mb-6 uppercase tracking-tighter text-glow"
          >
            Your Best Chapter <br />
            <span className="text-gym-neon">Starts Here.</span>
          </motion.h2>
          
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-xl text-gray-400 mb-12 font-light max-w-2xl mx-auto"
          >
            Join Ree Life Fitness today — elite training, state-of-the-art equipment, and guaranteed results.
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
          >
            <a 
              href="tel:08778834985"
              className="inline-flex items-center justify-center gap-3 px-10 py-5 bg-gym-neon text-white font-black tracking-widest uppercase text-lg hover:bg-white hover:text-gym-dark transition-all duration-300 shadow-[0_10px_30px_rgba(255,0,0,0.3)] w-full sm:w-auto group"
            >
              <Phone className="w-6 h-6 group-hover:rotate-12 transition-transform" />
              Call to Join: 087788 34985
            </a>
          </motion.div>
        </div>
      </section>

      {/* Main Footer */}
      <footer className="bg-[#050505] pt-16 pb-8 border-t border-gym-gray/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-8 mb-12">
            
            <div className="text-center md:text-left">
              <h2 className="font-sans font-black text-2xl tracking-tighter text-white mb-2">
                <span className="font-script text-3xl text-gym-neon mr-1">Ree</span> LIFE <span className="font-light opacity-80">FITNESS</span>
              </h2>
              <p className="text-gym-neon text-sm uppercase tracking-widest font-light">
                Acharapakkam's Premier Elite Fitness Destination
              </p>
            </div>

            <nav>
              <ul className="flex flex-wrap justify-center gap-6 md:gap-10">
                {['Home', 'About', 'Hours', 'Contact'].map((link) => (
                  <li key={link}>
                    <a href={`#${link.toLowerCase()}`} className="text-gray-500 hover:text-gym-neon text-sm uppercase tracking-widest font-semibold transition-colors">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>

          </div>

          <div className="border-t border-gym-gray/30 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-gray-600 uppercase tracking-widest">
            <p>&copy; {new Date().getFullYear()} Ree Life Fitness. All Rights Reserved.</p>
            <p>Designed for Real Results</p>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
