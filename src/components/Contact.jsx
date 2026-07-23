import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { MapPin, Phone, Clock, Mail } from 'lucide-react';

const Contact = () => {
  // 1. Form State Management
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });
  // Status can be: 'idle', 'loading', 'success', 'error'
  const [status, setStatus] = useState('idle');
  const [errorMessage, setErrorMessage] = useState('');

  // PASTE_YOUR_SCRIPT_URL_HERE
  const GOOGLE_SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbyPokkmDpLBuzYW32ph2SbvbnkFHKLL9-8mj2JL8PyKty7c_rv_qebfqhipLEqCTfbx/exec';

  // 2. Handle input changes
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value
    });
  };

  // 3. Handle Form Submission
  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevent page reload on form submit

    // Proper form validation
    if (!formData.name || !formData.email || !formData.phone || !formData.message) {
      setErrorMessage('Please fill in all fields.');
      setStatus('error');
      return;
    }

    setStatus('loading');
    setErrorMessage('');

    try {
      // 4. Format data for Google Sheets using URLSearchParams
      // This format is more reliable with Google Apps Script's doPost
      const submitData = new URLSearchParams();
      submitData.append('name', formData.name);
      submitData.append('email', formData.email);
      // Prepend a single quote so Google Sheets treats it as plain text (fixes disappearing zeros)
      submitData.append('phone', "'" + formData.phone);
      submitData.append('message', formData.message);
      // Store submitted date/time
      submitData.append('submitted', new Date().toLocaleString());

      // 5. Send data using JavaScript fetch()
      const response = await fetch(GOOGLE_SCRIPT_URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: submitData.toString(),
        mode: 'no-cors' // Bypasses CORS blocks
      });

      // If you use no-cors, response.ok is always false, so we assume success if no error thrown
      setStatus('success');

      // 6. Reset form after successful submission
      setFormData({ name: '', email: '', phone: '', message: '' });

      // Clear success message after 5 seconds
      setTimeout(() => {
        setStatus('idle');
      }, 5000);

    } catch (error) {
      console.error('Error submitting form:', error);
      setStatus('error');
      setErrorMessage('Something went wrong. Please try again or contact us directly.');
    }
  };

  return (
    <section id="location" className="py-24 bg-gym-dark relative border-t border-gym-gray/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-sans text-4xl md:text-5xl font-black text-white mb-4 uppercase tracking-wide"
          >
            Find <span className="text-gym-neon">Us.</span>
          </motion.h2>
        </div>

        <div className="flex flex-col lg:flex-row gap-8 lg:gap-16">
          {/* Left Side: Info & Hours */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex-1 bg-gym-charcoal border border-gym-neon/20 p-8 lg:p-12 shadow-[0_0_30px_rgba(255,0,0,0.05)] rounded-2xl"
          >
            <h3 className="font-sans text-2xl font-black text-white mb-8 uppercase tracking-widest border-b border-gym-gray pb-4">
              Hours & Info
            </h3>

            <div className="space-y-8">
              <div className="flex items-start gap-4">
                <Clock className="text-gym-neon w-6 h-6 shrink-0 mt-1" />
                <div>
                  <h4 className="text-white font-bold uppercase tracking-wider mb-2">Operating Hours</h4>
                  <ul className="text-gray-400 space-y-2 font-light">
                    <li className="flex justify-between border-b border-gym-gray/30 pb-2">
                      <span>Mon - Sat</span>
                      <span className="text-white font-medium">5:30 AM – 9:00 PM</span>
                    </li>
                    <li className="flex justify-between pt-2">
                      <span>Sunday</span>
                      <span className="text-white font-medium">6:00 AM – 10:00 AM</span>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <MapPin className="text-gym-neon w-6 h-6 shrink-0 mt-1" />
                <div>
                  <h4 className="text-white font-bold uppercase tracking-wider mb-2">Location</h4>
                  <p className="text-gray-400 font-light leading-relaxed">
                    Near Opposite Chengalpattu Dt, <br />
                    Acharapakkam, Melmaruvathur, <br />
                    Tamil Nadu
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <Phone className="text-gym-neon w-6 h-6 shrink-0 mt-1" />
                <div>
                  <h4 className="text-white font-bold uppercase tracking-wider mb-2">Contact</h4>
                  <a href="tel:08778834985" className="text-gray-400 font-light hover:text-gym-neon transition-colors text-lg">
                    087788 34985
                  </a>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Side: Address Card / Visual */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex-1 relative min-h-[400px] bg-gym-charcoal border border-gym-gray group overflow-hidden rounded-2xl"
          >
            {/* Simple stylised map placeholder if no iframe is provided */}
            <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>

            <div className="absolute inset-0 flex flex-col items-center justify-center p-8 text-center bg-gradient-to-tr from-gym-dark/90 to-gym-charcoal/80 z-10">
              <MapPin className="text-gym-neon w-16 h-16 mb-6 opacity-80 group-hover:scale-110 transition-transform duration-500" />
              <h3 className="font-sans text-3xl font-black text-white mb-4 uppercase tracking-widest text-glow">
                Acharapakkam & Melmaruvathur
              </h3>
              <p className="text-gray-400 font-light max-w-sm">
                Conveniently located near Opposite Chengalpattu Dt. Drop by for a free tour of our facilities.
              </p>
              <a
                href="https://maps.google.com/?q=CR36+5V+Zinna+Nagar,+Acharapakkam,+Tamil+Nadu"
                target="_blank" rel="noreferrer"
                className="mt-8 px-6 py-3 border border-gym-neon text-gym-neon uppercase tracking-widest text-sm font-bold hover:bg-gym-neon hover:text-white transition-all duration-300 shadow-[0_0_15px_rgba(255,0,0,0.1)]"
              >
                Get Directions
              </a>
            </div>
          </motion.div>
        </div>

        {/* Contact Form Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 bg-gym-charcoal border border-gym-neon/20 p-8 lg:p-12 shadow-[0_0_30px_rgba(255,0,0,0.05)] rounded-2xl max-w-3xl mx-auto"
        >
          <div className="text-center mb-10">
            <h3 className="font-sans text-3xl font-black text-white uppercase tracking-widest">
              Send Us a Message
            </h3>
            <p className="text-gray-400 mt-2 font-light">Have a question? We'll get back to you shortly.</p>
          </div>

          <form id="contactForm" onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label htmlFor="name" className="text-white text-sm font-bold uppercase tracking-wider">Full Name</label>
                <input
                  type="text"
                  id="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full bg-gym-dark border border-gym-gray/50 text-white px-4 py-3 focus:outline-none focus:border-gym-neon transition-colors"
                  placeholder="John Doe"
                  required
                />
              </div>
              <div className="space-y-2">
                <label htmlFor="email" className="text-white text-sm font-bold uppercase tracking-wider">Email Address</label>
                <input
                  type="email"
                  id="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full bg-gym-dark border border-gym-gray/50 text-white px-4 py-3 focus:outline-none focus:border-gym-neon transition-colors"
                  placeholder="john@example.com"
                  required
                />
              </div>
            </div>

            <div className="space-y-2">
              <label htmlFor="phone" className="text-white text-sm font-bold uppercase tracking-wider">Phone Number</label>
              <input
                type="tel"
                id="phone"
                value={formData.phone}
                onChange={handleChange}
                className="w-full bg-gym-dark border border-gym-gray/50 text-white px-4 py-3 focus:outline-none focus:border-gym-neon transition-colors"
                placeholder="Your Phone Number"
                required
              />
            </div>

            <div className="space-y-2">
              <label htmlFor="message" className="text-white text-sm font-bold uppercase tracking-wider">Message</label>
              <textarea
                id="message"
                rows="4"
                value={formData.message}
                onChange={handleChange}
                className="w-full bg-gym-dark border border-gym-gray/50 text-white px-4 py-3 focus:outline-none focus:border-gym-neon transition-colors resize-none"
                placeholder="How can we help you?"
                required
              ></textarea>
            </div>

            {/* Status Messages */}
            {status === 'success' && (
              <div className="p-4 bg-[#0a1a0a] border border-green-500/50 text-green-400 text-sm font-medium rounded-lg text-center">
                Thank you! Your message has been sent successfully. We will get back to you soon.
              </div>
            )}
            {status === 'error' && (
              <div className="p-4 bg-[#1a0a0a] border border-red-500/50 text-red-400 text-sm font-medium rounded-lg text-center">
                {errorMessage}
              </div>
            )}

            <button
              type="submit"
              disabled={status === 'loading'}
              className="w-full py-4 bg-gym-neon text-white font-black uppercase tracking-widest hover:bg-white hover:text-gym-dark transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed mt-4"
            >
              {status === 'loading' ? 'Sending...' : 'Submit Message'}
            </button>
          </form>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;

