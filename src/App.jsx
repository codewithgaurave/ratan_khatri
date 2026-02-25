import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaWhatsapp, FaArrowRight, FaCog, FaHistory, FaCheckCircle, FaUserShield, FaChevronDown, FaDownload, FaAndroid, FaBolt, FaWallet, FaHeadset, FaGift, FaUsers, FaQuestionCircle, FaShieldAlt } from 'react-icons/fa';
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
              alt="Ratan Khatri Matka Logo"
              className="h-12 w-12 rounded-full border-2 border-primary/30 object-cover shadow-sm"
            />
            <span className="text-2xl font-black tracking-tighter gradient-text"></span>
          </div>

          <div className="hidden md:flex items-center gap-8">
            <a href="#" className="text-text-main hover:text-primary transition-colors font-semibold">Home</a>
            <a href="#services" className="text-text-main hover:text-primary transition-colors font-semibold">Services</a>
            <a href="#experience" className="text-text-main hover:text-primary transition-colors font-semibold">Experience</a>
            <a href="#about" className="text-text-main hover:text-primary transition-colors font-semibold">About</a>
            <a href="#contact" className="text-text-main hover:text-primary transition-colors font-semibold">Contact</a>

            <motion.a
              href="/app-release.apk"
              download="apk"
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
              WELCOME TO THE WORLD'S BEST MATKA APP
            </motion.span>
            <h1 className="text-6xl md:text-7xl font-black mb-6 leading-[1.1] tracking-tight text-text-main">
              Play & Win <br />
              <span className="gradient-text">Real Money Daily</span>
            </h1>
            <p className="text-xl text-text-muted mb-10 max-w-lg leading-relaxed">
              Experience India's most trusted Matka platform. Play Main Matka, Starline, and Gali Dishawar with the best market rates and instant withdrawals.
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
                href="/app-release.apk"
                download="apk"
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
              <span>Trusted by 5,00,000+ players across India</span>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
            className="relative hidden lg:block"
          >
            <div className="absolute inset-0 bg-primary/10 blur-[100px] rounded-full animate-float" />
            <div className="relative glass-card rounded-[40px] p-10 border-primary/10 z-10 animate-float shadow-2xl bg-white/10 backdrop-blur-2xl">
              <div className="flex flex-col items-center text-center space-y-8">
                {/* Logo in Card */}
                <div className="relative">
                  <div className="absolute inset-0 bg-primary/20 blur-[40px] rounded-full animate-pulse" />
                  <motion.img
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.8 }}
                    src={logo}
                    alt="Logo"
                    className="w-32 h-32 rounded-full border-4 border-primary/30 shadow-2xl relative z-10 object-cover"
                  />
                  <div className="absolute -bottom-2 -right-2 bg-green-500 text-white p-2 rounded-full shadow-lg z-20 border-4 border-white">
                    <FaCheckCircle className="text-xl" />
                  </div>
                </div>

                <div className="space-y-2">
                   
                  <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary-dark text-sm font-bold">
                    <FaShieldAlt className="text-xs" /> Certified Fair Play
                  </div>
                </div>

                <div className="w-full grid grid-cols-2 gap-4">
                  <div className="bg-white/5 border border-white/10 p-4 rounded-3xl text-center">
                    <p className="text-xs text-text-muted font-bold uppercase tracking-widest mb-1">Live Wins</p>
                    <p className="text-2xl font-black text-primary-dark">₹12.5L+</p>
                  </div>
                  <div className="bg-white/5 border border-white/10 p-4 rounded-3xl text-center">
                    <p className="text-xs text-text-muted font-bold uppercase tracking-widest mb-1">Active Now</p>
                    <div className="flex items-center justify-center gap-2 text-2xl font-black text-green-500">
                      <span className="w-2 h-2 bg-green-500 rounded-full animate-ping" />
                      14.8K
                    </div>
                  </div>
                </div>

                <div className="w-full h-12 bg-linear-to-r from-primary to-primary-dark rounded-2xl flex items-center justify-center text-white font-black text-lg shadow-lg shadow-primary/30">
                  <FaBolt className="mr-2" /> Play & Win Now
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

      {/* Why Choose Us Section */}
      <section className="py-24 px-6 bg-linear-to-b from-bg-darker to-bg-dark">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-black mb-4 text-text-main">Why <span className="gradient-text">Choose Us?</span></h2>
            <p className="text-text-muted max-w-xl mx-auto font-medium">India's most loved and trusted Matka platform with premium features.</p>
          </div>
          <div className="grid md:grid-cols-4 gap-6">
            {[
              { title: "Fastest Results", desc: "Get live results faster than any other app in the market.", icon: <FaBolt className="text-yellow-500" /> },
              { title: "Instant Payout", desc: "Withdraw your winnings within 15 minutes to your bank account.", icon: <FaWallet className="text-green-500" /> },
              { title: "Safe & Secure", desc: "100% encrypted transactions and data protection for all users.", icon: <FaShieldAlt className="text-blue-500" /> },
              { title: "24/7 Support", desc: "Our team is always online to help you with any issues via WhatsApp.", icon: <FaHeadset className="text-primary-dark" /> }
            ].map((item, i) => (
              <motion.div
                key={i}
                whileHover={{ y: -10 }}
                className="glass-card p-8 rounded-3xl border border-primary/10 text-center"
              >
                <div className="text-4xl mb-4 flex justify-center">{item.icon}</div>
                <h4 className="text-xl font-bold text-text-main mb-2">{item.title}</h4>
                <p className="text-text-muted text-sm">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* How to Play Section */}
      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="order-2 lg:order-1">
              <h2 className="text-4xl md:text-5xl font-black mb-8 leading-tight text-text-main">
                How to Start <br />
                <span className="gradient-text">Winning in 4 Steps</span>
              </h2>
              <div className="space-y-8">
                {[
                  { step: "01", title: "Download & Install", desc: "Get the APK from our website and install it on your Android phone." },
                  { step: "02", title: "Free Registration", desc: "Create your account for free with your mobile number and get ₹5 bonus." },
                  { step: "03", title: "Add Funds", desc: "Deposit money using UPI or QR code. Get extra bonus on first deposit." },
                  { step: "04", title: "Play & Win", desc: "Choose your favorite market, place your bid, and withdraw wins instantly." }
                ].map((item, i) => (
                  <div key={i} className="flex gap-6">
                    <div className="flex-shrink-0 w-12 h-12 bg-primary/20 rounded-2xl flex items-center justify-center text-primary-dark font-black text-xl">
                      {item.step}
                    </div>
                    <div>
                      <h4 className="text-xl font-bold text-text-main mb-1">{item.title}</h4>
                      <p className="text-text-muted">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="order-1 lg:order-2 flex justify-center">
              <div className="relative">
                <div className="absolute inset-0 bg-primary/10 blur-[100px] rounded-full" />
                <img src={screenshots[0]} alt="Step 1" className="w-64 rounded-[3rem] border-8 border-primary/10 shadow-2xl relative z-10" />
              </div>
            </div>
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
              Best Market <span className="gradient-text">Game Rates</span>
            </motion.h2>
            <p className="text-text-muted max-w-2xl mx-auto text-lg leading-relaxed font-medium">
              We offer the highest returns in the market. Check out our unbeatable game rates for all Matka categories.
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
              { icon: <RiDashboardLine />, title: 'Single Digit', desc: 'Get 10 ka 100 — The best returns for single digit play in the industry.' },
              { icon: <RiSecurePaymentLine />, title: 'Jodi Digit', desc: 'Win Big! 10 ka 1000 for Jodi. Highest winning price guaranteed.' },
              { icon: <RiCustomerService2Fill />, title: 'Single Pana', desc: 'Earn 10 ka 1600 on Single Pana. Play with confidence on RKM.' },
              { icon: <FaCog />, title: 'Double Pana', desc: 'Secure 10 ka 3200 for Double Pana. Real profits for real players.' },
              { icon: <FaHistory />, title: 'Triple Pana', desc: 'Unbeatable! 10 ka 7000 for Triple Pana. Fast results and payouts.' },
              { icon: <FaUserShield />, title: 'Full Sangam', desc: 'The Jackpot! 10 ka 1,00,000. Try your luck with the biggest prize.' }
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
                <div className="text-primary-dark font-black text-xl mb-2">Rate: {service.desc.split(' — ')[0] || service.desc.split(' for ')[0]}</div>
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
                "Instant Withdrawals (7 AM - 10 PM)",
                "Minimum Withdrawal: ₹1000",
                "24/7 Customer Support (Call/WhatsApp)",
                "Secure & Fair Play Environment"
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
                  href="/app-release.apk"
                  download="apk"
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

      {/* Market Timings Section */}
      <section className="py-24 px-6 bg-bg-darker">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-black mb-4 text-text-main">Popular <span className="gradient-text">Market Timings</span></h2>
            <p className="text-text-muted max-w-xl mx-auto font-medium">Never miss a bid. Our markets run throughout the day with live results.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="glass-card p-8 rounded-3xl border border-primary/10 hover:border-primary/30 transition-all">
              <h3 className="text-2xl font-black text-primary-dark mb-6 flex items-center gap-3">
                Gali Dishawar
              </h3>
              <ul className="space-y-4 font-bold text-text-main">
                <li className="flex justify-between border-b border-primary/5 pb-2"><span>Desawar:</span> <span className="text-primary-dark">03:00 AM</span></li>
                <li className="flex justify-between border-b border-primary/5 pb-2"><span>Faridabad:</span> <span className="text-primary-dark">05:40 PM</span></li>
                <li className="flex justify-between border-b border-primary/5 pb-2"><span>Gaziyabad:</span> <span className="text-primary-dark">08:30 PM</span></li>
                <li className="flex justify-between border-b border-primary/5 pb-2"><span>Gali:</span> <span className="text-primary-dark">11:00 PM</span></li>
              </ul>
            </div>
            <div className="glass-card p-8 rounded-3xl border border-primary/10 hover:border-primary/30 transition-all">
              <h3 className="text-2xl font-black text-primary-dark mb-6 flex items-center gap-3">
                Starline Markets
              </h3>
              <ul className="space-y-3 font-bold text-text-main text-sm">
                <li className="flex justify-between border-b border-primary/5 pb-1"><span>12:00 PM:</span> <span className="text-primary-info">Live Now</span></li>
                <li className="flex justify-between border-b border-primary/5 pb-1"><span>02:00 PM:</span> <span className="text-primary-info">Open</span></li>
                <li className="flex justify-between border-b border-primary/5 pb-1"><span>04:00 PM:</span> <span className="text-primary-info">Open</span></li>
                <li className="flex justify-between border-b border-primary/5 pb-1"><span>06:00 PM:</span> <span className="text-primary-info">Open</span></li>
                <li className="flex justify-between border-b border-primary/5 pb-1"><span>08:00 PM:</span> <span className="text-primary-info">Open</span></li>
              </ul>
            </div>
            <div className="glass-card p-8 rounded-3xl border border-primary/10 hover:border-primary/30 transition-all">
              <h3 className="text-2xl font-black text-primary-dark mb-6 flex items-center gap-3">
                Main Markets
              </h3>
              <ul className="space-y-4 font-bold text-text-main">
                <li className="flex justify-between border-b border-primary/5 pb-2"><span>Kalyan:</span> <span className="text-primary-dark">04:00 PM</span></li>
                <li className="flex justify-between border-b border-primary/5 pb-2"><span>Milan Day:</span> <span className="text-primary-dark">03:00 PM</span></li>
                <li className="flex justify-between border-b border-primary/5 pb-2"><span>Madhuri:</span> <span className="text-primary-dark">01:00 PM</span></li>
                <li className="flex justify-between border-b border-primary/5 pb-2"><span>Supreme:</span> <span className="text-primary-dark">12:00 PM</span></li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Rules & Bonus Section */}
      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto glass-card rounded-[40px] p-12 border border-primary/10 overflow-hidden relative">
          <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 blur-[80px] rounded-full -translate-y-1/2 translate-x-1/2" />
          <div className="grid md:grid-cols-2 gap-12 relative z-10">
            <div>
              <h3 className="text-3xl font-black text-text-main mb-6 underline decoration-primary/20 decoration-4">Withdrawal & Deposit Rules</h3>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <span className="text-primary-dark mt-1">✓</span>
                  <p className="font-bold text-text-main">Min Deposit ₹200 / Max Deposit Unlimited</p>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary-dark mt-1">✓</span>
                  <p className="font-bold text-text-main">Automatic Withdrawal Time: 7:00 AM to 10:00 PM</p>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary-dark mt-1">✓</span>
                  <p className="font-bold text-text-main">Minimum Withdrawal: ₹1000</p>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary-dark mt-1">✓</span>
                  <p className="font-bold text-text-main">Points will be added within 10-15 mins of request.</p>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-3xl font-black text-text-main mb-6 underline decoration-primary/20 decoration-4">Special Offers & Bonus</h3>
              <ul className="space-y-4">
                <li className="flex items-start gap-4 p-4 bg-primary/5 rounded-2xl border border-primary/10">
                  <div className="w-12 h-12 bg-primary/20 rounded-xl flex items-center justify-center text-2xl text-primary-dark">
                    <FaGift />
                  </div>
                  <div>
                    <h5 className="font-black text-primary-dark">5% Deposit Bonus</h5>
                    <p className="text-sm font-medium text-text-muted">On all deposits above ₹5000</p>
                  </div>
                </li>
                <li className="flex items-start gap-4 p-4 bg-primary/5 rounded-2xl border border-primary/10">
                  <div className="w-12 h-12 bg-primary/20 rounded-xl flex items-center justify-center text-2xl text-primary-dark">
                    <FaGift />
                  </div>
                  <div>
                    <h5 className="font-black text-primary-dark">10% Deposit Bonus</h5>
                    <p className="text-sm font-medium text-text-muted">On all deposits above ₹10,000</p>
                  </div>
                </li>
                <li className="flex items-start gap-4 p-4 bg-primary/10 rounded-2xl border border-primary/20">
                  <div className="w-12 h-12 bg-primary/20 rounded-xl flex items-center justify-center text-2xl text-primary-dark">
                    <FaUsers />
                  </div>
                  <div>
                    <h5 className="font-black text-primary-dark">Refer & Earn ₹100</h5>
                    <p className="text-sm font-medium text-text-muted">Invite friends and get ₹100 for each referral who joins and deposits.</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 px-6 bg-bg-darker/30">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-black text-text-main mb-4">Frequently Asked <span className="gradient-text">Questions</span></h2>
            <p className="text-text-muted font-medium">Everything you need to know about the RKM app.</p>
          </div>
          <div className="space-y-4">
            {[
              { q: "Is Ratan Khatri Matka safe to play?", a: "Yes, our app is 100% secure and vetted for fair play. We have over 500,000 trusted users." },
              { q: "How long does a withdrawal take?", a: "Withdrawals are processed during our active hours (7 AM - 10 PM) and typically hit your bank within 15-20 minutes." },
              { q: "What is the minimum amount I can add?", a: "You can start playing by adding as little as ₹200 to your wallet." },
              { q: "Do I get points for referring friends?", a: "Yes! You get ₹100 in your wallet for every friend who registers using your referral and completes a deposit." }
            ].map((faq, i) => (
              <div key={i} className="glass-card p-6 rounded-2xl border border-primary/5">
                <h4 className="text-lg font-black text-text-main mb-2 flex items-center gap-3">
                  <FaQuestionCircle className="text-primary-dark" /> {faq.q}
                </h4>
                <p className="text-text-muted font-medium">A: {faq.a}</p>
              </div>
            ))}
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
              Get ₹5 Welcome Bonus on Signup. Also get 5% bonus on deposits above ₹5000 and 10% bonus above ₹10,000. Start winning with Ratan Khatri Matka today!
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
              <span className="text-xl font-black tracking-tighter gradient-text">Ratan Khatri Matka</span>
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
            <h4 className="font-black mb-6 text-text-main uppercase tracking-widest text-sm">Contact Support</h4>
            <ul className="space-y-4 text-text-muted font-bold">
              <li><a href="tel:7073767733" className="hover:text-primary transition-colors">Call: +91-7073767733</a></li>
              <li><a href="https://wa.me/7073767733" className="hover:text-primary transition-colors">WhatsApp Support</a></li>
              <li><a href="mailto:support@Ratankhatrimatka.site" className="hover:text-primary transition-colors">support@Ratankhatrimatka.site</a></li>
              <li><span className="text-xs opacity-70">Anytime Matka PVT LTD</span></li>
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
        href="https://wa.me/7073767733"
        target="_blank"
        rel="noopener noreferrer"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        whileHover={{ scale: 1.1, rotate: 10 }}
        className="fixed bottom-26 right-8 w-16 h-16 bg-accent rounded-full flex items-center justify-center text-3xl shadow-2xl shadow-accent/40 z-50 text-white"
      >
        <FaWhatsapp />
        <div className="absolute -top-1 -right-1 w-5 h-5 bg-red-500 rounded-full border-2 border-white animate-ping" />
      </motion.a>
    </div>
  );
};

export default App;
