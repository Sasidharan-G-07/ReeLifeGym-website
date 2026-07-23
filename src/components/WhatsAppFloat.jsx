import React from 'react';
import { MessageCircle } from 'lucide-react';
import { motion } from 'framer-motion';

const WhatsAppFloat = () => {
  const whatsappMsg = encodeURIComponent("Hi Ree Life Fitness, I'm browsing your website and I'd like to ask a few questions!");

  return (
    <motion.a
      href={`https://wa.me/918778834985?text=${whatsappMsg}`}
      target="_blank"
      rel="noreferrer"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      className="fixed bottom-8 right-8 z-[100] bg-[#25D366] text-white p-4 rounded-full shadow-[0_10px_30px_rgba(37,211,102,0.4)] flex items-center justify-center group"
    >
      <MessageCircle size={28} fill="currentColor" className="group-hover:rotate-12 transition-transform" />
      <span className="max-w-0 overflow-hidden group-hover:max-w-xs group-hover:ml-3 transition-all duration-500 font-bold whitespace-nowrap text-sm">
        Chat with Us
      </span>
    </motion.a>
  );
};

export default WhatsAppFloat;
