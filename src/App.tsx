/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion, useScroll, useTransform, useSpring, AnimatePresence } from 'motion/react';
import { Menu, ArrowRight, Shield, Zap, Globe, Github, Instagram, Twitter, Linkedin, X, Maximize2 } from 'lucide-react';
import { useRef, useState } from 'react';

const projects = [
  {
    id: '01',
    title: 'Iridescent Flow',
    category: 'G E N E R A T I V E  A R T',
    image: 'https://images.unsplash.com/photo-1633167606207-d840b5070fc2?auto=format&fit=crop&q=80&w=1000',
    span: 'col-span-1 row-span-1',
  },
  {
    id: '02',
    title: 'Ethereal Spheres',
    category: '3 D  R E N D E R',
    image: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&q=80&w=1000',
    span: 'col-span-1 row-span-2',
  },
  {
    id: '03',
    title: 'Digital Horizon',
    category: 'V I S U A L  I D E N T I T Y',
    image: 'https://images.unsplash.com/photo-1550684848-fac1c5b4e853?auto=format&fit=crop&q=80&w=1000',
    span: 'col-span-1 row-span-1',
  },
  {
    id: '04',
    title: 'Neon Pulse',
    category: 'M O T I O N',
    image: 'https://images.unsplash.com/photo-1635776062127-d338bc8ad9fc?auto=format&fit=crop&q=80&w=1000',
    span: 'col-span-2 row-span-1',
  },
];

const brandingAssets = [
  { title: 'Nexus Identity', type: 'Logo', img: 'https://images.unsplash.com/photo-1626785774573-4b799315345d?auto=format&fit=crop&q=80&w=800' },
  { title: 'Premium Stationery', type: 'Mockup', img: 'https://images.unsplash.com/photo-1586075010633-2475518ecb3b?auto=format&fit=crop&q=80&w=800' },
  { title: 'Minimalist Mark', type: 'Logo', img: 'https://images.unsplash.com/photo-1560171907-268e0018a1ae?auto=format&fit=crop&q=80&w=800' },
  { title: 'Packaging System', type: 'Mockup', img: 'https://images.unsplash.com/photo-1589384273476-eb293d9788bf?auto=format&fit=crop&q=80&w=800' },
  { title: 'Aura Brand', type: 'Identity', img: 'https://images.unsplash.com/photo-1613909209432-8406f582c7a5?auto=format&fit=crop&q=80&w=800' },
  { title: 'Tech Hardware', type: 'Mockup', img: 'https://images.unsplash.com/photo-1522273400909-fd1a8f77637e?auto=format&fit=crop&q=80&w=800' },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const itemVariants = {
  hidden: { y: 30, opacity: 0, scale: 0.95 },
  visible: {
    y: 0,
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.8,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

const hoverScale = {
  scale: 1.02,
  transition: { duration: 0.4, ease: "easeOut" }
};

const capabilities = [
  { icon: Shield, label: 'S T U D I O', description: 'Bespoke branding and visual systems for elite partners.' },
  { icon: Zap, label: 'R E N D E R', description: 'High-fidelity 3D assets and generative design simulations.' },
  { icon: Globe, label: 'W E B', description: 'Immersive digital experiences built for performance.' },
];

export default function App() {
  const containerRef = useRef(null);
  const [showIdentity, setShowIdentity] = useState(false);
  const [showContact, setShowContact] = useState(false);
  const { scrollYProgress } = useScroll();
  const torusY = useTransform(scrollYProgress, [0, 1], [0, -200]);

  return (
    <div ref={containerRef} className="min-h-screen bg-midnight-dark text-slate-300 selection:bg-accent-cyan/30 overflow-x-hidden">
      {/* Structural Grid Overlays */}
      <div className="fixed inset-0 pointer-events-none z-50">
        <div className="absolute inset-0 grid grid-cols-4 gap-0 opacity-[0.03]">
          {[...Array(4)].map((_, i) => (
            <div key={i} className="border-r border-white h-full" />
          ))}
        </div>
        <div className="absolute inset-0 grid grid-rows-6 gap-0 opacity-[0.03]">
          {[...Array(6)].map((_, i) => (
            <div key={i} className="border-b border-white w-full" />
          ))}
        </div>
      </div>

      {/* Navigation */}
      <nav className="fixed top-0 w-full z-[100] glass-nav py-6 px-10 flex justify-between items-center">
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          whileHover={{ scale: 1.05 }}
          className="flex items-center gap-3 group cursor-pointer"
        >
          <img 
            src="/input_file_0.png" 
            alt="StampYourPic Logo" 
            className="w-10 h-10 object-contain rounded-full border border-white/10 group-hover:border-accent-cyan transition-all duration-300"
            referrerPolicy="no-referrer"
          />
          <div className="text-white font-serif text-xl tracking-tighter">
            stampyour<span className="text-accent-cyan">pic</span>
          </div>
        </motion.div>
        
        <div className="hidden md:flex items-center gap-12 text-[10px] tracking-[0.3em] font-medium text-slate-400">
          {['WORK', 'SERVICES', 'ABOUT', 'CONTACT'].map((item) => (
            <motion.a
              key={item}
              href={`#${item.toLowerCase()}`}
              whileHover={{ color: '#fff', scale: 1.05 }}
              className="hover:text-white transition-colors cursor-pointer"
            >
              {item}
            </motion.a>
          ))}
        </div>

        <motion.button 
          whileHover={{ rotate: 90 }}
          className="p-2 text-white"
          id="menu-toggle"
        >
          <Menu size={20} />
        </motion.button>
      </nav>

      {/* Hero Section */}
      <section id="work" className="relative h-screen flex flex-col items-center justify-center pt-20 overflow-hidden px-6">
        <motion.div 
          style={{ y: torusY }}
          className="absolute w-[80vw] h-[80vw] md:w-[40vw] md:h-[40vw] rounded-full bg-gradient-to-br from-accent-magenta/20 via-accent-cyan/10 to-transparent blur-3xl"
        />
        
        <motion.div
          animate={{ 
            rotateZ: 360,
            y: [0, -20, 0]
          }}
          transition={{ 
            rotateZ: { duration: 20, repeat: Infinity, ease: "linear" },
            y: { duration: 4, repeat: Infinity, ease: "easeInOut" }
          }}
          className="absolute z-0 w-64 h-64 md:w-96 md:h-96 opacity-40 mix-blend-screen"
        >
          <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <linearGradient id="torusGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#FF007F" />
                <stop offset="100%" stopColor="#00F0FF" />
              </linearGradient>
            </defs>
            <path fill="url(#torusGrad)" d="M40,-68C53.3,-60.7,66.7,-52.3,75.4,-40.4C84.1,-28.5,88.1,-13.2,85.1,0.6C82.1,14.4,72.1,26.7,61.9,37.3C51.7,47.9,41.3,56.8,29.7,63.9C18.1,71,-1.7,76.2,-21.8,74.7C-41.9,73.2,-62.3,64.9,-73.4,50.1C-84.5,35.3,-86.3,13.9,-83.4,-6.2C-80.5,-26.3,-72.9,-45.1,-58.9,-53.4C-44.9,-61.7,-24.5,-59.5,-6.6,-70.9C11.3,-82.3,26.7,-75.3,40,-68Z" transform="translate(100 100)" />
          </svg>
        </motion.div>

        <div className="z-10 text-center">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-[10px] md:text-sm tracking-[0.5em] font-medium mb-6 uppercase"
          >
            P R E M I U M  D I G I T A L  E X P E R I E N C E S
          </motion.p>
          <motion.h1 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
            className="text-7xl md:text-[10rem] font-serif font-bold text-white leading-none tracking-tighter"
          >
            stampyour<span className="text-gradient-cyan italic">pic</span>
          </motion.h1>
          <motion.div 
            initial={{ width: 0 }}
            animate={{ width: '100%' }}
            transition={{ delay: 0.8, duration: 1 }}
            className="h-px bg-gradient-to-r from-transparent via-white/20 to-transparent mt-8"
          />
        </div>

        <motion.div 
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-30"
        >
          <div className="w-px h-12 bg-white" />
          <span className="text-[8px] tracking-[0.4em] uppercase">Scroll</span>
        </motion.div>
      </section>

      {/* Brand Identity Entry Section */}
      <section className="py-40 relative px-6 md:px-20 bg-midnight-base/30">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row items-center gap-20 mb-32">
            <div className="w-full md:w-1/2">
              <motion.div
                initial={{ opacity: 0, rotate: -5 }}
                whileInView={{ opacity: 1, rotate: 0 }}
                className="relative aspect-square bg-[#0D1117] border border-white/5 p-20 flex items-center justify-center group cursor-pointer"
                onClick={() => setShowIdentity(true)}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-accent-cyan/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="text-white font-serif text-[12vw] md:text-[8vw] opacity-10 group-hover:opacity-100 group-hover:scale-110 transition-all duration-1000 select-none">
                  S Y P
                </div>
                <motion.div 
                  animate={{ rotate: 360 }}
                  transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
                  className="absolute w-full h-full p-10 pointer-events-none"
                >
                  <div className="w-4 h-4 rounded-full bg-accent-cyan blur-sm absolute top-0 left-1/2 -translate-x-1/2" />
                </motion.div>
                <div className="absolute bottom-10 left-10 flex items-center gap-4 text-[10px] tracking-widest text-accent-cyan uppercase">
                  <Maximize2 size={14} /> Enter Identity Gallery
                </div>
              </motion.div>
            </div>
            
            <div className="w-full md:w-1/2 flex flex-col gap-8">
              <span className="text-[10px] tracking-[0.5em] text-accent-magenta uppercase font-bold">B R A N D  I D E N T I T Y</span>
              <h2 className="text-5xl md:text-7xl font-serif text-white italic">Signature <br /><span className="text-gradient-cyan">Modernism.</span></h2>
              <p className="text-slate-400 leading-relaxed text-lg font-light">
                We specialize in reductive, high-precision visual systems that stand the test of time. Every mark is engineered for maximum clarity and emotional impact across high-end digital atmospheres.
              </p>
              <motion.button 
                whileHover={{ x: 20 }}
                onClick={() => setShowIdentity(true)}
                className="group flex items-center gap-6 text-white uppercase tracking-[0.5em] text-xs font-bold pt-4"
              >
                V I E W  S Y S T E M S <ArrowRight className="text-accent-cyan group-hover:translate-x-2 transition-transform" />
              </motion.button>
            </div>
          </div>

          {/* New: Featured Identity Photos directly on page */}
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 gap-10"
          >
            <motion.div 
              variants={itemVariants}
              whileHover={hoverScale}
              className="group relative h-[600px] overflow-hidden rounded-2xl cursor-pointer"
            >
              <img 
                src="https://images.unsplash.com/photo-1626785774625-ddc7c82a722e?auto=format&fit=crop&q=80&w=1200" 
                alt="Branding System 1" 
                className="w-full h-full object-cover grayscale brightness-50 group-hover:grayscale-0 group-hover:brightness-100 transition-all duration-1000 group-hover:scale-105"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-midnight-dark via-transparent to-transparent opacity-80" />
              <div className="absolute bottom-12 left-12 group-hover:translate-x-4 transition-transform duration-500">
                <p className="text-accent-cyan text-[10px] tracking-[0.5em] uppercase mb-4">M O D E R N  S Y S T E M S</p>
                <h3 className="text-white font-serif text-4xl italic">Minimalist Architectures</h3>
              </div>
            </motion.div>
            <motion.div 
              variants={itemVariants}
              whileHover={hoverScale}
              className="group relative h-[600px] overflow-hidden rounded-2xl cursor-pointer"
            >
              <img 
                src="https://images.unsplash.com/photo-1572044162444-ad60f128bde7?auto=format&fit=crop&q=80&w=1200" 
                alt="Branding System 2" 
                className="w-full h-full object-cover grayscale brightness-50 group-hover:grayscale-0 group-hover:brightness-100 transition-all duration-1000 group-hover:scale-105"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-midnight-dark via-transparent to-transparent opacity-80" />
              <div className="absolute bottom-12 left-12 group-hover:translate-x-4 transition-transform duration-500">
                <p className="text-accent-magenta text-[10px] tracking-[0.5em] uppercase mb-4">P R E M I U M  M O C K U P S</p>
                <h3 className="text-white font-serif text-4xl italic">Tactile Brand Experiences</h3>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Identity Showcase Overlay */}
      <AnimatePresence>
        {showIdentity && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[200] bg-midnight-dark/95 backdrop-blur-2xl overflow-y-auto"
          >
            <div className="sticky top-0 w-full p-10 flex justify-between items-center z-[210]">
              <div className="text-white font-serif text-2xl">IDENTITY <span className="text-accent-cyan italic">SHOWCASE</span></div>
              <motion.button 
                whileHover={{ rotate: 90, scale: 1.2 }}
                onClick={() => setShowIdentity(false)}
                className="p-4 bg-white/5 rounded-full text-white backdrop-blur-md border border-white/10"
              >
                <X size={24} />
              </motion.button>
            </div>

            <div className="p-10 md:p-32">
              <div className="max-w-7xl mx-auto">
                <div className="mb-20 text-center">
                  <h3 className="text-white text-6xl md:text-8xl font-serif italic mb-6">Visual Systems</h3>
                  <p className="text-slate-500 max-w-2xl mx-auto tracking-wide">A curated selection of minimalist logo marks and their architectural applications. Focused on precision, proportion, and aesthetic purity.</p>
                </div>

                <motion.div 
                  variants={containerVariants}
                  initial="hidden"
                  animate="visible"
                  className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12"
                >
                  {brandingAssets.map((asset, i) => (
                    <motion.div
                      key={i}
                      variants={itemVariants}
                      whileHover={hoverScale}
                      className="group relative flex flex-col gap-6"
                    >
                      <div className="aspect-[4/5] overflow-hidden rounded-sm bg-[#0D1117] border border-white/5 relative cursor-pointer">
                        <img 
                          src={asset.img} 
                          alt={asset.title}
                          className="w-full h-full object-cover grayscale opacity-60 group-hover:grayscale-0 group-hover:opacity-100 group-hover:scale-105 transition-all duration-1000"
                          referrerPolicy="no-referrer"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-midnight-dark to-transparent opacity-60" />
                        <div className="absolute bottom-6 left-6 right-6 flex justify-between items-end overflow-hidden">
                          <div className="group-hover:translate-y-0 translate-y-4 transition-transform duration-500">
                            <span className="text-[8px] tracking-[0.3em] text-accent-cyan uppercase mb-1 block">{asset.type}</span>
                            <h4 className="text-white font-serif text-xl italic">{asset.title}</h4>
                          </div>
                          <div className="w-10 h-10 border border-white/20 rounded-full flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-all duration-500 group-hover:scale-110">
                            <ArrowRight size={14} className="-rotate-45" />
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </motion.div>
              </div>
            </div>

            {/* Vertical Decorative Line */}
            <div className="fixed top-0 right-32 w-px h-full bg-white/5 pointer-events-none" />
          </motion.div>
        )}
      </AnimatePresence>

      {/* Capabilities Strip */}
      <section className="py-40 bg-midnight-base border-y border-white/5 relative z-10 px-6 md:px-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-20">
          {capabilities.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="flex flex-col gap-6"
            >
              <div className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center text-accent-cyan">
                <item.icon size={20} />
              </div>
              <h3 className="text-white text-xs tracking-[0.4em] font-bold">{item.label}</h3>
              <p className="text-slate-500 text-sm leading-relaxed">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Boundless Art Showcase */}
      <section className="py-40 relative flex flex-col md:flex-row gap-20 items-center px-6 md:px-20 overflow-hidden">
        <div className="w-full md:w-1/2 order-2 md:order-1">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative aspect-video overflow-hidden group rounded-lg"
          >
            <img 
              src="https://images.unsplash.com/photo-1614850523296-d8c1af93d400?auto=format&fit=crop&q=80&w=1200" 
              alt="Immersive Digital Space"
              className="w-full h-full object-cover grayscale brightness-50 group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-midnight-dark via-transparent to-transparent opacity-60" />
            <div className="absolute bottom-10 left-10">
              <span className="text-[10px] tracking-[0.5em] text-white/60 mb-2 block uppercase">Featured Projection</span>
              <h4 className="text-2xl font-serif text-white italic">Boundless Horizons</h4>
            </div>
          </motion.div>
        </div>
        
        <div className="w-full md:w-1/2 order-1 md:order-2 flex flex-col gap-8">
          <motion.span 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-accent-orange text-[10px] tracking-[0.5em] font-bold uppercase"
          >
            S H O W C A S E
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-7xl font-serif text-white leading-tight"
          >
            Boundless Art in a <br /><span className="text-gradient-orange italic">Digital Realm</span>
          </motion.h2>
          <p className="text-slate-400 max-w-md leading-relaxed">
            Exploring the intersection of mathematical precision and organic fluidity. Our generative processes create unique visual narratives that scale across every dimension of modern branding.
          </p>
          <motion.button className="ghost-button w-fit mt-4">
            [ Read More ]
          </motion.button>
        </div>
      </section>

      {/* Project Grid */}
      <section className="py-40 bg-midnight-base/50 relative px-6 md:px-20">
        <div className="mb-20 flex justify-between items-end">
          <div className="flex flex-col gap-4">
            <span className="text-[10px] tracking-[0.5em] text-accent-cyan uppercase">Portfolio</span>
            <h2 className="text-5xl font-serif text-white italic">Selected Works</h2>
          </div>
          <div className="hidden md:block w-32 h-px bg-white/10" />
        </div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10"
        >
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              variants={itemVariants}
              whileHover={{ ...hoverScale, translateY: -10 }}
              className={`relative group overflow-hidden ${project.span} cursor-pointer`}
            >
              <div className="relative aspect-[4/5] md:aspect-auto md:h-full overflow-hidden rounded-lg">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-midnight-dark/80 opacity-0 group-hover:opacity-100 transition-all duration-500 backdrop-blur-md flex flex-col justify-center items-center text-center p-6 translate-y-4 group-hover:translate-y-0">
                  <span className="text-[8px] tracking-[0.3em] text-accent-cyan mb-4 uppercase">{project.category}</span>
                  <h3 className="text-white font-serif text-3xl italic mb-6">{project.title}</h3>
                  <motion.div 
                    whileHover={{ x: 10 }}
                    className="flex items-center gap-2 text-[10px] tracking-widest text-white cursor-pointer"
                  >
                    VIEW PROJECT <ArrowRight size={12} />
                  </motion.div>
                </div>
              </div>
              <div className="absolute top-6 left-6 text-[10px] font-mono text-white/40 group-hover:text-accent-cyan transition-colors">{project.id}</div>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* Creator About Section */}
      <section id="about" className="py-40 relative px-6 md:px-20 bg-midnight-base/20 overflow-hidden border-y border-white/5">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-20">
          <div className="w-full md:w-1/2 order-2 md:order-1">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative group lg:w-4/5"
            >
              <div className="absolute -inset-4 bg-gradient-to-br from-accent-magenta/20 to-accent-cyan/20 blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
              <div className="aspect-[3/4] overflow-hidden rounded-2xl border border-white/10 relative z-10 shadow-2xl">
                <img 
                  src="/input_file_1.png" 
                  alt="The Creator of StampYourPic" 
                  className="w-full h-full object-cover grayscale brightness-90 group-hover:grayscale-0 transition-all duration-700 hover:scale-105"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 w-32 h-32 border-b-2 border-r-2 border-accent-cyan opacity-40 z-0" />
              <div className="absolute -top-6 -left-6 w-32 h-32 border-t-2 border-l-2 border-accent-magenta opacity-40 z-0" />
            </motion.div>
          </div>
          
          <div className="w-full md:w-1/2 order-1 md:order-2 flex flex-col gap-8">
            <span className="text-accent-magenta text-[10px] tracking-[0.5em] font-bold uppercase mb-2">T H E  C R E A T O R</span>
            <h2 className="text-5xl md:text-7xl font-serif text-white italic">Pioneering <br />Digital <span className="text-gradient-cyan italic">Minimalism</span></h2>
            <p className="text-slate-400 text-lg leading-relaxed font-light">
              Driven by a obsession for generative aesthetics and geometric precision, I founded StampYourPic to redefine visual identities for the high-end digital market. My work bridges the gap between technological mastery and human emotion.
            </p>
            <div className="grid grid-cols-2 gap-12 mt-4">
              <div>
                <h4 className="border-l border-accent-cyan pl-4 text-white text-xl font-serif italic mb-2">Expertise</h4>
                <p className="pl-4 text-slate-500 text-[10px] tracking-widest uppercase">Identity / 3D Render / Code</p>
              </div>
              <div>
                <h4 className="border-l border-accent-magenta pl-4 text-white text-xl font-serif italic mb-2">Location</h4>
                <p className="pl-4 text-slate-500 text-[10px] tracking-widest uppercase">Maharashtra / Global</p>
              </div>
            </div>
            <motion.div 
              whileHover={{ x: 10 }}
              className="mt-8 flex items-center gap-4 text-white uppercase tracking-[0.4em] text-[10px] font-bold cursor-pointer group"
            >
              LEARN MORE ABOUT MY PROCESS <ArrowRight className="text-accent-cyan" size={14} />
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-60 relative overflow-hidden px-6 text-center border-t border-white/5">
        <motion.div
           initial={{ scale: 0.8, opacity: 0 }}
           whileInView={{ scale: 1, opacity: 0.1 }}
           className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120vw] h-[120vw] bg-accent-cyan rounded-full blur-[200px]"
        />
        <div className="relative z-10">
          <motion.h2 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-6xl md:text-9xl font-serif text-white italic mb-12"
          >
            Organizing a <br /><span className="hover:text-accent-cyan transition-colors duration-500 cursor-pointer">project?</span>
          </motion.h2>
          <AnimatePresence mode="wait">
            {!showContact ? (
              <motion.button 
                key="btn"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9 }}
                whileHover={{ scale: 1.1 }}
                onClick={() => setShowContact(true)}
                className="px-12 py-5 bg-white text-midnight-dark uppercase tracking-[0.5em] text-xs font-bold rounded-full"
              >
                Get In Touch
              </motion.button>
            ) : (
              <motion.div 
                key="options"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="flex flex-col md:flex-row items-center justify-center gap-6"
              >
                <motion.a 
                  href="mailto:manthanpawarr@gmail.com"
                  whileHover={{ scale: 1.05 }}
                  className="px-10 py-4 border border-white/20 text-white uppercase tracking-[0.3em] text-[10px] font-bold rounded-full hover:border-accent-cyan transition-colors"
                >
                  G M A I L
                </motion.a>
                <motion.a 
                  href="https://www.instagram.com/stampyourpic?igsh=Z2Q3NTF5bWtoN2c0"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.05 }}
                  className="px-10 py-4 border border-white/20 text-white uppercase tracking-[0.3em] text-[10px] font-bold rounded-full hover:border-accent-magenta transition-colors"
                >
                  I N S T A G R A M
                </motion.a>
                <motion.button 
                  onClick={() => setShowContact(false)}
                  className="text-[10px] tracking-[0.3em] text-white/40 uppercase mt-4 md:mt-0 md:ml-6 hover:text-white transition-colors"
                >
                  [ BACK ]
                </motion.button>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-20 px-6 md:px-20 border-t border-white/5 bg-midnight-base/80 backdrop-blur-xl">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-20">
          <div className="md:col-span-1 flex flex-col justify-between h-full">
            <div className="flex items-center gap-4 mb-8 group">
              <img 
                src="/input_file_0.png" 
                alt="StampYourPic Logo" 
                className="w-12 h-12 object-contain rounded-full border border-white/10 group-hover:border-accent-cyan transition-colors"
                referrerPolicy="no-referrer"
              />
              <div className="text-white font-serif text-3xl">
                S Y P <span className="text-accent-cyan">.</span>
              </div>
            </div>
            <div className="flex gap-6 mt-auto">
              <Github className="text-slate-500 hover:text-white cursor-pointer transition-colors" size={18} />
              <a href="https://www.instagram.com/stampyourpic?igsh=Z2Q3NTF5bWtoN2c0" target="_blank" rel="noopener noreferrer">
                <Instagram className="text-slate-500 hover:text-white cursor-pointer transition-colors" size={18} />
              </a>
              <Twitter className="text-slate-500 hover:text-white cursor-pointer transition-colors" size={18} />
              <Linkedin className="text-slate-500 hover:text-white cursor-pointer transition-colors" size={18} />
            </div>
          </div>

          <div className="md:col-span-1 border-l border-white/5 pl-10">
            <h5 className="text-[10px] tracking-[0.4em] text-white/40 uppercase mb-8">Services</h5>
            <ul className="flex flex-col gap-4 text-xs tracking-widest">
              {['Visual Identity', 'Generative Design', '3D Motion', 'Web Experience'].map(item => (
                <li key={item} className="hover:text-white cursor-pointer transition-colors">{item}</li>
              ))}
            </ul>
          </div>

          <div className="md:col-span-1 border-l border-white/5 pl-10">
            <h5 className="text-[10px] tracking-[0.4em] text-white/40 uppercase mb-8">Navigation</h5>
            <ul className="flex flex-col gap-4 text-xs tracking-widest">
              {['Home', 'Work', 'Studio', 'Archive', 'Process'].map(item => (
                <li key={item} className="hover:text-white cursor-pointer transition-colors">{item}</li>
              ))}
            </ul>
          </div>

          <div className="md:col-span-1 border-l border-white/5 pl-10 flex flex-col justify-between">
            <div>
              <h5 className="text-[10px] tracking-[0.4em] text-white/40 uppercase mb-8">Location</h5>
              <p className="text-xs tracking-widest leading-relaxed">
                MAHARASHTRA, INDIA <br />
                DIGITAL ONLY <br />
                24 / 7 / 365
              </p>
            </div>
            <div className="text-[8px] tracking-[0.2em] text-white/20 uppercase mt-auto">
              © 2024 STAMPYOURPIC STUDIO. ALL RIGHTS RESERVED.
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
