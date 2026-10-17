import React from 'react';
import { motion } from 'framer-motion';
import { ChevronRight, Play, Trophy, Activity, Zap, Dumbbell, Apple } from 'lucide-react';

const Capsule = ({ label, color, icon: Icon, delay }) => (
  <motion.div
    initial={{ opacity: 0, x: 50 }}
    whileInView={{ opacity: 1, x: 0 }}
    viewport={{ once: true }}
    transition={{ delay, duration: 0.8, ease: "easeOut" }}
    className="flex items-center gap-4 px-6 py-3 rounded-xl border border-white/10 backdrop-blur-xl shadow-2xl w-full max-w-[200px] group hover:border-white/30 transition-all duration-300"
    style={{ 
      background: `linear-gradient(135deg, ${color}15 0%, rgba(255,255,255,0.05) 100%)`,
    }}
  >
    <div 
      className="w-10 h-10 rounded-lg flex items-center justify-center transition-transform duration-300 group-hover:scale-110 shadow-lg"
      style={{ backgroundColor: `${color}20`, color: color }}
    >
      <Icon size={20} />
    </div>
    <span className="text-xs font-black tracking-[0.2em] text-white uppercase">{label}</span>
  </motion.div>
);

const ReeLifeLogo = () => (
  <div className="flex flex-col items-center lg:items-start select-none">
    <div className="relative flex items-baseline">
      <motion.span 
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        className="text-7xl sm:text-8xl md:text-[10rem] font-script text-gym-neon drop-shadow-[0_0_20px_rgba(255,0,0,0.8)] leading-none"
      >
        Sasi
      </motion.span>
      <motion.span 
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="text-7xl sm:text-8xl md:text-[10rem] font-black text-white ml-4 tracking-tighter leading-none"
      >
        MS
      </motion.span>
      
      {/* Heartbeat Line */}
      <div className="absolute -bottom-2 md:-bottom-6 left-0 w-full h-16 md:h-24 pointer-events-none">
        <svg className="w-full h-full overflow-visible" viewBox="0 0 400 100" preserveAspectRatio="none">
          <motion.path
            d="M0 50 L140 50 L155 20 L170 80 L185 10 L200 90 L215 50 L400 50"
            fill="none"
            stroke="#FF0000"
            strokeWidth="4"
            strokeLinecap="round"
            strokeLinejoin="round"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: 1 }}
            transition={{ duration: 2, ease: "easeInOut", delay: 0.5 }}
            className="drop-shadow-[0_0_12px_rgba(255,0,0,1)]"
          />
        </svg>
      </div>
    </div>
    <motion.div 
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 1 }}
      className="mt-12 md:mt-16"
    >
      <span className="text-2xl sm:text-3xl md:text-5xl font-light text-white tracking-[0.6em] uppercase opacity-90 font-sans">FITNESS</span>
    </motion.div>
  </div>
);

const Hero = () => {
  const whatsappMsg = encodeURIComponent("Hi, I'm interested in joining Ree Life Fitness. Can I get more details about your training programs?");

  return (
    <section id="home" className="relative min-h-screen bg-gym-dark overflow-hidden flex items-center pt-20">
      
      {/* Cinematic Background */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-black/60 z-10"></div>
        <img 
          src="/hero-bg.png" 
          alt="Premium Gym Interior" 
          className="w-full h-full object-cover opacity-80"
        />
        {/* Gradient Overlays */}
        <div className="absolute inset-0 bg-gradient-to-t from-gym-dark via-transparent to-gym-dark z-20"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-gym-dark via-transparent to-transparent z-20"></div>
      </div>

      {/* Grid Pattern Overlay */}
      <div className="absolute inset-0 z-10 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-20 pointer-events-none"></div>

      <div className="relative z-30 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="flex flex-col lg:flex-row items-center lg:items-center justify-between gap-16">
          
          {/* Main Brand Column */}
          <div className="flex flex-col items-center lg:items-start text-center lg:text-left flex-1">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="mb-8 inline-flex items-center gap-3 px-5 py-2 bg-gym-neon/10 border border-gym-neon/20 backdrop-blur-xl rounded-full shadow-[0_0_20px_rgba(255,0,0,0.1)]"
            >
              <Trophy size={16} className="text-gym-neon animate-pulse" />
              <span className="text-xs font-black text-gray-200 uppercase tracking-[0.3em]">Premier Elite Studio</span>
            </motion.div>

            <ReeLifeLogo />

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 1.2 }}
              className="mt-12 text-lg md:text-xl text-gray-300 max-w-xl font-light leading-relaxed tracking-wide"
            >
              Experience the pinnacle of fitness in Acharapakkam. State-of-the-art equipment, world-class coaching, and a community built on excellence.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.5 }}
              className="mt-12 flex flex-col sm:flex-row gap-6 w-full sm:w-auto"
            >
              <a 
                href={`https://wa.me/918778834985?text=${whatsappMsg}`} 
                target="_blank" rel="noreferrer"
                className="group relative px-10 py-5 bg-gym-neon overflow-hidden"
              >
                <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
                <div className="relative flex items-center justify-center gap-3 text-white font-black tracking-[0.2em] uppercase text-sm">
                  Start Evolution <ChevronRight size={18} className="group-hover:translate-x-1 transition-transform" />
                </div>
              </a>
              
              <button 
                className="group px-10 py-5 border border-white/10 bg-white/5 backdrop-blur-xl hover:bg-white transition-all duration-500"
              >
                <div className="flex items-center justify-center gap-4 text-white group-hover:text-gym-dark font-black tracking-[0.2em] uppercase text-sm">
                  <div className="w-8 h-8 rounded-full bg-gym-neon/20 flex items-center justify-center text-gym-neon group-hover:bg-gym-neon group-hover:text-white transition-colors">
                    <Play size={14} fill="currentColor" />
                  </div>
                  Virtual Tour
                </div>
              </button>
            </motion.div>
          </div>

          {/* Side Features Column (Capsules) */}
          <div className="flex flex-wrap lg:flex-col gap-6 justify-center items-center lg:items-end">
            <Capsule label="Cardio" color="#3B82F6" icon={Activity} delay={1.8} />
            <Capsule label="Cross Fit" color="#06B6D4" icon={Zap} delay={2.0} />
            <Capsule label="Strength" color="#EF4444" icon={Dumbbell} delay={2.2} />
            <Capsule label="Nutrition" color="#10B981" icon={Apple} delay={2.4} />
          </div>

        </div>
      </div>

      {/* Background Texture Overlay */}
      <div className="grain-overlay opacity-10"></div>

    </section>
  );
};

export default Hero;
