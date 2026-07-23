import React from 'react';
import { motion } from 'framer-motion';
import { Check, Zap } from 'lucide-react';

const Pricing = () => {
  const plans = [
    {
      name: 'Monthly',
      price: '1,500',
      period: 'per month',
      features: [
        'All Gym Equipment Access',
        'Locker Room & Showers',
        'Free Wi-Fi',
        '1 Personal Training Session',
      ],
      recommended: false,
    },
    {
      name: 'Quarterly',
      price: '4,000',
      period: 'per 3 months',
      features: [
        'All Monthly Features',
        'Diet Consultation',
        'Body Composition Analysis',
        '3 Personal Training Sessions',
        'Guest Passes (2/mo)',
      ],
      recommended: true,
    },
    {
      name: 'Annual',
      price: '12,000',
      period: 'per year',
      features: [
        'All Quarterly Features',
        'Dedicated Locker',
        'Unlimited PT Sessions',
        'Nutrition Workshops',
        'Merchandise Discount',
      ],
      recommended: false,
    },
  ];

  return (
    <section id="pricing" className="py-24 bg-gym-dark relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="text-center mb-20">
          <motion.span 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-gym-neon font-bold tracking-[0.3em] uppercase text-sm mb-4 block"
          >
            Membership Plans
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-sans text-4xl md:text-6xl font-black text-white uppercase tracking-tight"
          >
            Choose Your <span className="text-gym-neon text-glow">Level</span>
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              className={`relative flex flex-col p-8 bg-gym-charcoal border ${
                plan.recommended ? 'border-gym-neon shadow-[0_0_30px_rgba(255,0,0,0.15)]' : 'border-gym-gray/50'
              } group hover:border-gym-neon/50 transition-colors duration-500`}
            >
              {plan.recommended && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-gym-neon text-white text-[10px] font-black uppercase tracking-[0.2em] px-4 py-1 flex items-center gap-1">
                  <Zap size={10} fill="currentColor" /> Recommended
                </div>
              )}

              <div className="mb-8">
                <h3 className="text-white font-bold text-xl uppercase tracking-widest mb-4">{plan.name}</h3>
                <div className="flex items-baseline gap-1">
                  <span className="text-gym-neon text-sm font-bold">₹</span>
                  <span className="text-5xl font-black text-white">{plan.price}</span>
                  <span className="text-gray-500 text-sm ml-2">{plan.period}</span>
                </div>
              </div>

              <ul className="space-y-4 mb-10 flex-grow">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3 text-gray-400 text-sm">
                    <Check size={16} className="text-gym-neon shrink-0 mt-0.5" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              <a 
                href={`https://wa.me/918778834985?text=Hi%2C%20I'm%20interested%20in%20the%20${plan.name}%20membership%20plan%20at%20Ree%20Life%20Fitness.%20Can%20you%20share%20more%20details%3F`} 
                target="_blank" rel="noreferrer"
                className={`w-full py-4 text-center font-black uppercase tracking-widest text-sm transition-all duration-300 ${
                  plan.recommended 
                    ? 'bg-gym-neon text-white hover:bg-white hover:text-gym-dark shadow-[0_10px_20px_rgba(255,0,0,0.2)]' 
                    : 'border border-gym-gray text-white hover:border-gym-neon hover:text-gym-neon'
                }`}
              >
                Get Started
              </a>
            </motion.div>
          ))}
        </div>

      </div>

      {/* Decorative background element */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gym-neon/5 blur-[120px] rounded-full -z-0 pointer-events-none"></div>
    </section>
  );
};

export default Pricing;
