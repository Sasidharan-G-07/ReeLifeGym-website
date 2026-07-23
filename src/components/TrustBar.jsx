import React from 'react';
import { motion } from 'framer-motion';
import { Dumbbell, Wind, Users, Clock, MapPin } from 'lucide-react';

const TrustBar = () => {
  const items = [
    { icon: <Dumbbell size={20} />, text: 'Advanced Equipment' },
    { icon: <Wind size={20} />, text: 'Fully Air-Conditioned' },
    { icon: <Users size={20} />, text: 'Unisex Environment' },
    { icon: <Clock size={20} />, text: 'Open 5:30 AM – 9 PM' },
    { icon: <MapPin size={20} />, text: 'Acharapakkam, Melmaruvathur' },
  ];

  return (
    <div className="bg-gym-charcoal border-b border-gym-gray py-4 relative z-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 overflow-x-auto hide-scrollbar">
        <div className="flex items-center justify-between min-w-max gap-8 px-4">
          {items.map((item, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="flex items-center gap-3 text-gray-300 font-bold tracking-wider"
            >
              <span className="text-gym-neon drop-shadow-[0_0_8px_rgba(255,0,0,0.5)]">{item.icon}</span>
              <span className="text-xs uppercase whitespace-nowrap">{item.text}</span>
              {index < items.length - 1 && (
                <span className="text-gym-gray/30 ml-8 hidden md:inline-block">|</span>
              )}
            </motion.div>
          ))}
        </div>
      </div>
      <style dangerouslySetInnerHTML={{__html: `
        .hide-scrollbar::-webkit-scrollbar { display: none; }
        .hide-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
      `}} />
    </div>
  );
};

export default TrustBar;
