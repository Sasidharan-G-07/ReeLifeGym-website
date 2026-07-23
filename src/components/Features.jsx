import React from 'react';
import { motion } from 'framer-motion';
import { Dumbbell, UserCheck, Sparkles, Users } from 'lucide-react';

const Features = () => {
  const features = [
    {
      icon: <Dumbbell size={32} />,
      title: "Gym, Cardio & Crossfit",
      desc: "Comprehensive fitness options catering to all levels. Whether you're a beginner or an experienced fitness enthusiast, we have everything you need."
    },
    {
      icon: <UserCheck size={32} />,
      title: "Get Your Own Trainer",
      desc: "Expert professionals dedicated to helping you achieve your health and fitness goals with personalized guidance."
    },
    {
      icon: <Sparkles size={32} />,
      title: "Yoga & Specialized Classes",
      desc: "A wide range of fitness classes to cater to your needs, including yoga, taught by experienced professionals."
    },
    {
      icon: <Users size={32} />,
      title: "Strengthening Exercises",
      desc: "Targeted strength training to ensure the best experience for every customer, tailored to fit your schedule and fitness level."
    }
  ];

  return (
    <section id="features" className="py-24 bg-gym-dark relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-sans text-4xl md:text-5xl font-black text-white mb-4 uppercase tracking-wide"
          >
            Why <span className="text-gym-neon">Ree Life?</span>
          </motion.h2>
          <motion.div 
            initial={{ opacity: 0, width: 0 }}
            whileInView={{ opacity: 1, width: "80px" }}
            viewport={{ once: true }}
            className="h-1 bg-gym-neon mx-auto"
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {features.map((feature, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="bg-gym-charcoal border border-gym-gray/50 p-8 hover:border-gym-neon/50 transition-colors duration-300 group rounded-2xl"
            >
              <div className="w-16 h-16 bg-gym-dark flex items-center justify-center rounded-2xl mb-6 text-gym-neon group-hover:scale-110 transition-transform duration-300 shadow-[0_0_15px_rgba(255,0,0,0.1)]">
                {feature.icon}
              </div>
              <h3 className="font-sans text-2xl font-black text-white mb-4 tracking-wide group-hover:text-gym-neon transition-colors">
                {feature.title}
              </h3>
              <p className="text-gray-400 leading-relaxed font-light">
                {feature.desc}
              </p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Features;
