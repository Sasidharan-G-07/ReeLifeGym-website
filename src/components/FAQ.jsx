import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus } from 'lucide-react';

const FAQItem = ({ question, answer, isOpen, onClick }) => {
  return (
    <div className="border-b border-gym-gray/50 last:border-0">
      <button
        onClick={onClick}
        className="w-full py-6 flex items-center justify-between text-left group"
      >
        <span className={`text-lg font-black transition-colors duration-300 ${isOpen ? 'text-gym-neon' : 'text-gray-200 group-hover:text-white'}`}>
          {question}
        </span>
        <div className={`shrink-0 ml-4 transition-transform duration-300 ${isOpen ? 'rotate-180 text-gym-neon' : 'text-gray-500'}`}>
          {isOpen ? <Minus size={20} /> : <Plus size={20} />}
        </div>
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className="overflow-hidden"
          >
            <p className="pb-6 text-gray-400 font-light leading-relaxed max-w-3xl">
              {answer}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(0);

  const faqs = [
    {
      question: "Do you offer a free trial or tour?",
      answer: "Yes! We encourage everyone to visit us for a free tour of our facilities. You can book your visit via WhatsApp or just drop by during our operating hours."
    },
    {
      question: "What are the gym timings?",
      answer: "We are open Monday to Saturday from 5:30 AM to 9:00 PM. On Sundays, we are open for a morning session from 6:00 AM to 10:00 AM."
    },
    {
      question: "Do I need to be an expert to join?",
      answer: "Not at all! We welcome everyone from absolute beginners to professional athletes. Our trainers are always available to help you get started with the right techniques."
    },
    {
      question: "Is personal training available?",
      answer: "Yes, we offer personal training packages tailored to your specific fitness goals. Our certified trainers provide one-on-one guidance, diet plans, and progress tracking."
    },
    {
      question: "What equipment do you have?",
      answer: "We feature high-end strength training equipment, a full cardio section, free weights, and dedicated spaces for functional training and stretching."
    }
  ];

  return (
    <section id="faq" className="py-24 bg-gym-charcoal/50 relative border-t border-gym-gray/30">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-display text-4xl md:text-5xl font-bold text-white uppercase tracking-tight"
          >
            Common <span className="text-gym-neon">Questions</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="mt-4 text-gray-400 font-light"
          >
            Everything you need to know about starting your fitness journey with us.
          </motion.p>
        </div>

        <div className="bg-gym-dark/50 border border-gym-gray/30 p-6 md:p-10 shadow-2xl">
          {faqs.map((faq, index) => (
            <FAQItem
              key={index}
              question={faq.question}
              answer={faq.answer}
              isOpen={openIndex === index}
              onClick={() => setOpenIndex(openIndex === index ? -1 : index)}
            />
          ))}
        </div>

      </div>
    </section>
  );
};

export default FAQ;
