import React from 'react';
import { motion } from 'framer-motion';
import { Star, Quote } from 'lucide-react';

const Testimonials = () => {
  const reviews = [
    {
      name: "SMN MN",
      text: "Well maintained gym in Acharapakkam circle. Very excellent advanced equipment. Nice place to workout for male and female clients. Superb unisex AC gym.",
      rating: 5
    },
    {
      name: "Subash S",
      text: "You will be benefited for the cost you pay. Hygiene is highly maintained, good trainers and gym is highly managed by Ashok for customer satisfaction.",
      rating: 5
    },
    {
      name: "Udhayakumar M",
      role: "Local Guide",
      text: "High quality with new updated equipment. People are nice to one another like in a friendly community.",
      rating: 5
    }
  ];

  return (
    <section id="reviews" className="py-24 bg-gym-charcoal relative overflow-hidden">
      {/* Decorative gradient */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-3xl h-64 bg-gym-gold/5 blur-[120px] rounded-full pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-display text-4xl md:text-5xl font-bold text-white mb-4 uppercase tracking-wide"
          >
            Real <span className="text-gym-gold">Results.</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-gray-400 font-light text-lg uppercase tracking-widest"
          >
            What our members say
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {reviews.map((review, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2, duration: 0.6 }}
              className="bg-gym-dark border border-gym-gray p-8 relative group hover:border-gym-neon/30 transition-colors rounded-2xl"
            >
              <Quote className="absolute top-6 right-6 text-gym-gray/30 w-12 h-12 group-hover:text-gym-neon/10 transition-colors" />
              
              <div className="flex gap-1 mb-6">
                {[...Array(review.rating)].map((_, i) => (
                  <Star key={i} size={16} className="fill-gym-neon text-gym-neon" />
                ))}
              </div>

              <p className="text-gray-300 italic font-display text-xl leading-relaxed mb-8">
                "{review.text}"
              </p>

              <div className="mt-auto">
                <h4 className="text-gym-gold font-bold uppercase tracking-wider text-sm">
                  {review.name}
                </h4>
                {review.role && (
                  <p className="text-gray-500 text-xs uppercase tracking-widest mt-1">
                    {review.role}
                  </p>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
