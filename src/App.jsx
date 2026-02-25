import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaWhatsapp, FaArrowRight, FaCog, FaHistory, FaCheckCircle, FaUserShield, FaChevronDown, FaDownload, FaAndroid } from 'react-icons/fa';
import { RiDashboardLine, RiCustomerService2Fill, RiSecurePaymentLine } from 'react-icons/ri';
import logo from './assets/logo.jpeg';
import s1 from './assets/s1.jpeg';
import s2 from './assets/s2.jpeg';
import s3 from './assets/s3.jpeg';
import s4 from './assets/s4.jpeg';
import s5 from './assets/s5.jpeg';
import s6 from './assets/s6.jpeg';
import s7 from './assets/s7.jpeg';
import s8 from './assets/s8.jpeg';
// import s9 from './assets/s9.jpeg';
import s10 from './assets/s10.jpeg';
import s11 from './assets/s11.jpeg';
import s12 from './assets/s12.jpeg';
import s13 from './assets/s13.jpeg';
import s14 from './assets/s14.jpeg';
import s15 from './assets/s15.jpeg';
import s16 from './assets/s16.jpeg';
import s17 from './assets/s17.jpeg';
import s18 from './assets/s18.jpeg';
import s19 from './assets/s19.jpeg';
import s20 from './assets/s20.jpeg';
import s21 from './assets/s21.jpeg';

const App = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  const screenshots = [s1, s2, s3, s4, s5, s6, s7, s8, s10, s11, s12, s13, s14, s15, s16, s17, s18, s19, s20, s21];
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1 >= screenshots.length ? 0 : prev + 1));
    }, 3000); // Moves every 3 seconds
    return () => clearInterval(timer);
  }, [screenshots.length]);

  return (
    <div className="relative min-h-screen bg-bg-dark text-text-main selection:bg-primary/30">
      {/* Background Blobs */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
        <div className="absolute top-[-10%] right-[-10%] w-[500px] h-[500px] bg-primary/10 blur-[120px] rounded-full animate-pulse" />
        <div className="absolute bottom-[-10%] left-[-10%] w-[500px] h-[500px] bg-primary-dark/10 blur-[120px] rounded-full animate-pulse" style={{ animationDelay: '2s' }} />
      </div>

      {/* Navigation */}
      <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 px-6 py-4 ${isScrolled ? 'bg-white/80 backdrop-blur-lg border-b border-primary/10 shadow-sm' : 'bg-transparent'}`}>
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex items-center gap-3">
            <motion.img
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              src={logo}
              alt="RKM Logo"
              className="h-12 w-12 rounded-full border-2 border-primary/30 object-cover shadow-sm"
            />
            <span className="text-2xl font-black tracking-tighter gradient-text">RKM</span>
          </div>

          <div className="hidden md:flex items-center gap-8">
            <a href="#" className="text-text-main hover:text-primary transition-colors font-semibold">Home</a>
            <a href="#services" className="text-text-main hover:text-primary transition-colors font-semibold">Services</a>
            <a href="#experience" className="text-text-main hover:text-primary transition-colors font-semibold">Experience</a>
            <a href="#about" className="text-text-main hover:text-primary transition-colors font-semibold">About</a>
            <a href="#contact" className="text-text-main hover:text-primary transition-colors font-semibold">Contact</a>

            <motion.a
              href="/rkm.apk"
              download
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-primary hover:bg-primary-dark text-white px-6 py-2 rounded-full font-bold transition-all shadow-lg shadow-primary/25 flex items-center gap-2"
            >
              <FaDownload className="text-sm" /> Download App
            </motion.a>
          </div>

          <button className="md:hidden text-text-main">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
            </svg>
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-6 overflow-hidden min-h-[90vh] flex items-center">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.span
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="inline-block px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary-dark text-sm font-bold mb-6"
            >
              WELCOME TO THE FUTURE OF MANAGEMENT
            </motion.span>
            <h1 className="text-6xl md:text-7xl font-black mb-6 leading-[1.1] tracking-tight text-text-main">
              Manage Your <br />
              <span className="gradient-text">Business Better</span>
            </h1>
            <p className="text-xl text-text-muted mb-10 max-w-lg leading-relaxed">
              Experience the next generation of business management with RKM. Streamline workflows, increase efficiency, and scale your operations with ease.
            </p>
            <div className="flex flex-wrap gap-4">
              <motion.button
                whileHover={{ scale: 1.05, x: 5 }}
                whileTap={{ scale: 0.95 }}
                className="bg-primary hover:bg-primary-dark text-white px-8 py-4 rounded-full font-bold text-lg flex items-center gap-3 transition-all shadow-xl shadow-primary/20"
              >
                Join Now <FaArrowRight />
              </motion.button>

              <motion.a
                href="/rkm.apk"
                download
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-primary/5 hover:bg-primary/10 border border-primary/30 text-primary-dark px-8 py-4 rounded-full font-bold text-lg flex items-center gap-3 backdrop-blur-md transition-all"
              >
                <FaAndroid className="text-2xl" /> Download APK
              </motion.a>
            </div>

            <div className="mt-12 flex items-center gap-4 text-text-muted font-medium">
              <div className="flex -space-x-3">
                {[1, 2, 3, 4].map(i => (
                  <div key={i} className="w-10 h-10 rounded-full border-2 border-white bg-primary/20 flex items-center justify-center text-[10px] uppercase font-bold text-primary-dark">User</div>
                ))}
              </div>
              <span>Trusted by 5,000+ businesses worldwide</span>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
            className="relative hidden lg:block"
          >
            <div className="absolute inset-0 bg-primary/10 blur-[100px] rounded-full animate-float" />
            <div className="relative glass-card rounded-3xl p-8 border-primary/10 z-10 animate-float shadow-xl">
              <div className="space-y-6">
                <div className="flex justify-between items-center">
                  <div className="h-4 w-32 bg-primary/10 rounded-full" />
                  <div className="h-4 w-12 bg-primary/20 rounded-full" />
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div className="h-24 bg-primary/5 rounded-2xl border border-primary/10 p-4 space-y-3">
                    <div className="h-3 w-3/4 bg-primary/10 rounded-full" />
                    <div className="h-6 w-1/2 bg-primary/30 rounded-full" />
                  </div>
                  <div className="h-24 bg-primary/5 rounded-2xl border border-primary/10 p-4 space-y-3">
                    <div className="h-3 w-3/4 bg-primary/10 rounded-full" />
                    <div className="h-6 w-1/2 bg-primary/20 rounded-full" />
                  </div>
                </div>
                <div className="h-40 bg-primary/5 rounded-2xl border border-primary/10" />
                <div className="flex gap-3">
                  <div className="h-10 w-full bg-primary rounded-xl" />
                  <div className="h-10 w-full bg-primary/10 rounded-xl" />
                </div>
              </div>
            </div>

            {/* Decor Elements */}
            <div className="absolute -top-10 -right-10 w-24 h-24 glass rounded-2xl flex items-center justify-center text-primary-dark text-3xl shadow-xl animate-bounce">
              <FaCheckCircle />
            </div>
            <div className="absolute top-1/2 -left-12 w-20 h-20 glass rounded-full flex items-center justify-center text-primary-dark text-2xl shadow-xl" style={{ animation: 'float 4s infinite alternate' }}>
              <FaUserShield />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-bg-darker py-16 border-y border-primary/5">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { label: 'Active Users', value: '10K+' },
              { label: 'Success Rate', value: '99.9%' },
              { label: 'Cloud Servers', value: '500+' },
              { label: 'Countries', value: '45+' }
            ].map((stat, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
              >
                <h2 className="text-4xl font-black text-primary-dark mb-2">{stat.value}</h2>
                <p className="text-text-muted text-sm font-bold uppercase tracking-widest">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-24 px-6 relative">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl md:text-5xl font-black mb-6 text-text-main"
            >
              Our Premium <span className="gradient-text">Services</span>
            </motion.h2>
            <p className="text-text-muted max-w-2xl mx-auto text-lg leading-relaxed font-medium">
              We provide cutting-edge solutions designed to take your business to new heights with modern technology and seamless integration.
            </p>
          </div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid md:grid-cols-3 gap-8"
          >
            {[
              { icon: <RiDashboardLine />, title: 'Advanced Analytics', desc: 'Real-time monitoring and deep insights into your business performance to make data-driven decisions.' },
              { icon: <RiSecurePaymentLine />, title: 'Secure Infrastructure', desc: 'Enterprise-grade security standards to keep your data and financial transactions protected at all times.' },
              { icon: <RiCustomerService2Fill />, title: '24/7 Priority Support', desc: 'Dedicated team of experts available around the clock to ensure your operations run without a hitch.' },
              { icon: <FaCog />, title: 'Smart Automation', desc: 'Reduce manual tasks by up to 80% with our intelligent workflow automation engine and AI-powered tools.' },
              { icon: <FaHistory />, title: 'Legacy Migration', desc: 'Seamlessly transition from your existing systems to our modern platform with zero downtime and data loss.' },
              { icon: <FaUserShield />, title: 'Identity Management', desc: 'Sophisticated user permissions and role-based access control to maintain total control over your workspace.' }
            ].map((service, i) => (
              <motion.div
                key={i}
                variants={itemVariants}
                className="group glass-card p-10 rounded-3xl"
              >
                <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center text-3xl text-primary-dark mb-6 group-hover:bg-primary group-hover:text-white transition-all duration-300 shadow-sm">
                  {service.icon}
                </div>
                <h3 className="text-2xl font-bold mb-4 text-text-main">{service.title}</h3>
                <p className="text-text-muted leading-relaxed font-medium">
                  {service.desc}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-24 px-6 bg-bg-darker/50">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="order-2 lg:order-1"
          >
            <h2 className="text-4xl md:text-5xl font-black mb-8 leading-tight text-text-main">
              Crafting Excellence <br />
              <span className="gradient-text">Since Day One</span>
            </h2>
            <p className="text-text-muted mb-8 text-lg leading-relaxed font-medium">
              At RKM, we believe that complexity should never be a barrier to growth. Our mission is to provide businesses of all sizes with the tools they need to operate at peak efficiency.
            </p>
            <div className="space-y-4 mb-10">
              {[
                "Innovation-First Approach",
                "Customer-Centric Design",
                "Scalable Architecture",
                "Enterprise-Grade Reliability"
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-3 font-bold text-text-main">
                  <FaCheckCircle className="text-primary-dark" />
                  {item}
                </div>
              ))}
            </div>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-3 rounded-full border-2 border-primary text-primary-dark font-black hover:bg-primary hover:text-white transition-all"
            >
              Meet Our Team
            </motion.button>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="order-1 lg:order-2"
          >
            <div className="relative">
              <div className="absolute inset-0 bg-primary/20 blur-[80px] rounded-full" />
              <div className="relative glass-card aspect-square rounded-[40px] overflow-hidden p-8 shadow-2xl">
                <img src={logo} alt="About RKM" className="w-full h-full object-contain" />
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-black mb-4 text-text-main">What Our <span className="gradient-text">Clients Say</span></h2>
            <p className="text-text-muted max-w-xl mx-auto font-medium">Join thousands of satisfied business owners who have transformed their operations with RKM.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { name: "Sarah Johnson", role: "CEO, TechFlow", quote: "RKM has completely changed how we handle our backend. The efficiency gains are incredible." },
              { name: "Michael Chen", role: "Manager, GlobalLogistics", quote: "The automation tools saved us over 20 hours of manual data entry every week. Absolute lifesaver!" },
              { name: "David Rodriguez", role: "Founder, PeakPerformance", quote: "The best support team I've ever worked with. They were there whenever we needed them during migration." }
            ].map((t, i) => (
              <motion.div
                key={i}
                whileHover={{ y: -10 }}
                className="glass-card p-8 rounded-3xl shadow-sm"
              >
                <div className="flex gap-1 text-primary-dark mb-6">
                  {[1, 2, 3, 4, 5].map(star => <FaCheckCircle key={star} className="text-sm" />)}
                </div>
                <p className="text-lg italic text-text-main/80 mb-8 font-semibold">"{t.quote}"</p>
                <div>
                  <h4 className="font-bold text-text-main">{t.name}</h4>
                  <p className="text-primary-dark text-sm font-black uppercase tracking-wider">{t.role}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* App Download Section */}
      <section id="download" className="py-24 px-6 overflow-hidden">
        <div className="max-w-7xl mx-auto glass-card rounded-[40px] p-12 md:p-20 relative bg-bg-darker/50">
          <div className="absolute top-[-20%] left-[-10%] w-[400px] h-[400px] bg-primary/10 blur-[100px] rounded-full" />
          <div className="grid lg:grid-cols-2 gap-12 items-center relative z-10">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl md:text-5xl font-black mb-6 leading-tight text-text-main">
                Work on the Go with <br />
                <span className="text-primary-dark underline decoration-primary/30 decoration-8 underline-offset-4">Our Mobile App</span>
              </h2>
              <p className="text-xl text-text-muted mb-10 leading-relaxed font-medium">
                Stay connected and manage your business from anywhere. Our Android app provides a full-featured experience optimized for mobile connectivity.
              </p>
              <div className="flex flex-col sm:flex-row gap-6">
                <motion.a
                  href="/rkm.apk"
                  download
                  whileHover={{ scale: 1.05, y: -5 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-primary hover:bg-primary-dark text-white px-10 py-5 rounded-3xl font-black text-xl flex items-center justify-center gap-4 shadow-2xl shadow-primary/30 transition-all"
                >
                  <FaAndroid className="text-3xl" /> Direct Download APK
                </motion.a>
              </div>
              <p className="mt-6 text-text-muted/60 text-sm font-bold flex items-center gap-2">
                <FaCheckCircle className="text-primary-dark" /> Scan for Viruses: 100% Secure & Verified APK
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="relative flex justify-center lg:justify-end"
            >
              <div className="w-64 h-[520px] bg-white rounded-[3rem] border-8 border-primary/10 shadow-2xl relative overflow-hidden">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-6 bg-primary/5 rounded-b-2xl z-20" />
                <div className="absolute inset-0 bg-linear-to-b from-primary/5 to-primary/20 flex flex-col items-center justify-center p-6 text-center">
                  <img src={logo} alt="App Logo" className="w-20 h-20 rounded-full mb-6 border-2 border-primary/20 shadow-xl" />
                  <h3 className="text-2xl font-black mb-2 tracking-tighter text-text-main">RKM Mobile</h3>
                  <p className="text-xs text-text-muted mb-8 font-bold uppercase tracking-widest">Powering businesses</p>
                  <div className="w-full h-32 bg-primary/5 border border-primary/10 rounded-2xl mb-4" />
                  <div className="w-full h-8 bg-primary rounded-xl mb-3 shadow-lg shadow-primary/20" />
                  <div className="w-full h-8 bg-white rounded-xl border border-primary/10" />
                </div>
              </div>
              {/* Floating Notifications */}
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 4, repeat: Infinity }}
                className="absolute top-20 -left-10 glass p-4 rounded-2xl border-primary/20 shadow-xl"
              >
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-primary/20 rounded-full flex items-center justify-center text-primary-dark">
                    <FaCheckCircle />
                  </div>
                  <div className="text-xs font-bold text-text-main">New Order Received!</div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* App Screenshots Slider Section */}
      <section id="experience" className="py-24 px-6 bg-bg-darker">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="text-5xl md:text-7xl font-black mb-8 leading-tight text-text-main"
            >
              Ultimate <span className="gradient-text">Control in Your Hand</span>
            </motion.h2>
            <p className="text-2xl md:text-3xl text-text-muted font-bold tracking-tight">
              Next-gen Architecture. <span className="text-primary-dark">Lightning Fast.</span> Absolute Precision.
            </p>
          </div>

          <div className="relative overflow-hidden py-10">
            {/* Smooth Infinite Slider */}
            <motion.div
              className="flex gap-8"
              animate={{ x: -(currentIndex * 320) }}
              transition={{
                duration: 2, // Slow and smooth transition
                ease: "easeInOut"
              }}
            >
              {[...screenshots, ...screenshots].map((img, i) => (
                <div key={i} className="w-72 h-[500px] bg-white rounded-[2.5rem] border-4 border-primary/10 overflow-hidden shadow-2xl flex-shrink-0 relative group">
                  <img src={img} alt={`Screenshot ${i + 1}`} className="w-full h-full object-cover" />
                  <div className="absolute inset-0 bg-linear-to-b from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
              ))}
            </motion.div>

            {/* Gradient Overlays for smooth edges */}
            <div className="absolute inset-y-0 left-0 w-32 bg-linear-to-r from-bg-darker to-transparent z-10" />
            <div className="absolute inset-y-0 right-0 w-32 bg-linear-to-l from-bg-darker to-transparent z-10" />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-6">
        <div className="max-w-5xl mx-auto relative overflow-hidden bg-bg-darker rounded-[40px] p-12 md:p-20 border border-primary/5 text-center shadow-2xl">
          <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-primary/10 blur-[100px] rounded-full translate-x-1/2 -translate-y-1/2" />
          <div className="relative z-10">
            <h2 className="text-4xl md:text-6xl font-black mb-8 leading-tight text-text-main">
              Ready to <span className="gradient-text">Level Up</span> <br />
              Your Management?
            </h2>
            <p className="text-xl text-text-muted mb-12 max-w-2xl mx-auto leading-relaxed font-semibold">
              Don't wait for your competition to overtake you. Join thousands of successful entrepreneurs using RKM to dominate their markets.
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-primary hover:bg-primary-dark text-white px-10 py-5 rounded-full font-black text-xl shadow-2xl shadow-primary/30 transition-all"
            >
              Start Free Trial Now
            </motion.button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-20 px-6 border-t border-primary/10 bg-bg-darker">
        <div className="max-w-7xl mx-auto grid md:grid-cols-4 gap-12">
          <div className="col-span-1 md:col-span-1">
            <div className="flex items-center gap-3 mb-6">
              <img src={logo} alt="Logo" className="h-10 w-10 rounded-full object-cover shadow-sm" />
              <span className="text-xl font-black tracking-tighter gradient-text">RKM</span>
            </div>
            <p className="text-text-muted font-bold leading-relaxed">
              Building the next generation of business management software. Simple, powerful, and secure.
            </p>
          </div>

          <div>
            <h4 className="font-black mb-6 text-text-main uppercase tracking-widest text-sm">Product</h4>
            <ul className="space-y-4 text-text-muted font-bold">
              <li><a href="#" className="hover:text-primary transition-colors">Features</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">API Reference</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Pricing</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Enterprise</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-black mb-6 text-text-main uppercase tracking-widest text-sm">Company</h4>
            <ul className="space-y-4 text-text-muted font-bold">
              <li><a href="#" className="hover:text-primary transition-colors">About</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Careers</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Press</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">News</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-black mb-6 text-text-main uppercase tracking-widest text-sm">Resources</h4>
            <ul className="space-y-4 text-text-muted font-bold">
              <li><a href="#" className="hover:text-primary transition-colors">Documentation</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Tutorials</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Support</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Status</a></li>
            </ul>
          </div>
        </div>
        <div className="max-w-7xl mx-auto mt-20 pt-8 border-t border-primary/10 flex flex-col md:flex-row justify-between items-center gap-4 text-text-muted/60 font-bold text-sm">
          <span>&copy; 2026 RKM Management Solutions. All rights reserved.</span>
          <div className="flex gap-8">
            <a href="#" className="hover:text-primary transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-primary transition-colors">Terms of Service</a>
          </div>
        </div>
      </footer>

      {/* Floating WhatsApp */}
      <motion.a
        href="https://wa.me/your-number"
        target="_blank"
        rel="noopener noreferrer"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        whileHover={{ scale: 1.1, rotate: 10 }}
        className="fixed bottom-8 right-8 w-16 h-16 bg-accent rounded-full flex items-center justify-center text-3xl shadow-2xl shadow-accent/40 z-50 text-white"
      >
        <FaWhatsapp />
        <div className="absolute -top-1 -right-1 w-5 h-5 bg-red-500 rounded-full border-2 border-white animate-ping" />
      </motion.a>
    </div>
  );
};

export default App;
