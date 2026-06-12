import { motion } from "framer-motion"
import { Button } from "../ui/button"
import { Flame, Star, Sparkles } from "lucide-react"

export default function Hero() {
  // Stagger container variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] },
    },
  }

  const scrollIntoSection = (id) => {
    const el = document.getElementById(id)
    if (el) el.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <section className="relative min-h-screen pt-32 pb-20 flex items-center justify-center overflow-hidden bg-brand-cream">
      {/* Background Floating Blobs */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <motion.div
          animate={{
            x: [0, 40, -20, 0],
            y: [0, -60, 40, 0],
            scale: [1, 1.1, 0.95, 1],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute top-1/4 left-1/10 w-[300px] h-[300px] bg-brand-caramel/15 rounded-full blur-[100px]"
        />
        <motion.div
          animate={{
            x: [0, -50, 30, 0],
            y: [0, 50, -40, 0],
            scale: [1, 0.9, 1.1, 1],
          }}
          transition={{
            duration: 18,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute bottom-1/4 right-1/10 w-[400px] h-[400px] bg-brand-plum/10 rounded-full blur-[120px]"
        />
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10">
        
        {/* Left Column: Headline and CTAs */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="lg:col-span-7 flex flex-col items-start text-left space-y-6"
        >
          {/* Top Badge */}
          <motion.div 
            variants={itemVariants}
            className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-brand-plum/10 border border-brand-plum/15 text-brand-plum font-sans text-xs font-bold uppercase tracking-wider"
          >
            <Sparkles className="w-3.5 h-3.5 fill-brand-caramel stroke-brand-plum" />
            <span>Premium Craft Confectionery</span>
          </motion.div>

          {/* Tagline */}
          <motion.h1 
            variants={itemVariants}
            className="font-serif text-5xl md:text-7xl font-extrabold text-brand-deep-brown leading-[1.05] tracking-tight"
          >
            Unleash the <span className="text-stroke-brown text-brand-cream block md:inline">Beast</span> in Every <span className="text-brand-plum block md:inline relative">Bite<span className="absolute bottom-1.5 left-0 w-full h-2 bg-brand-caramel/45 -z-10 rounded-full"></span></span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p 
            variants={itemVariants}
            className="font-sans text-lg md:text-xl text-brand-dark-brown/80 max-w-xl leading-relaxed"
          >
            Crafted for the bold. A rich, playful collision of dark Madagascar cocoa, buttery golden caramel, and beastly crunch. Indulge your wild side.
          </motion.p>

          {/* CTAs */}
          <motion.div 
            variants={itemVariants}
            className="flex flex-wrap items-center gap-4 pt-2 w-full sm:w-auto"
          >
            <Button
              variant="secondary"
              size="lg"
              className="w-full sm:w-auto"
              onClick={() => scrollIntoSection("products")}
              data-cursor-text="Shop"
            >
              Shop Collection
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="w-full sm:w-auto hover:bg-brand-plum/5"
              onClick={() => scrollIntoSection("story")}
              data-cursor-text="Our Journey"
            >
              Our Story
            </Button>
          </motion.div>

          {/* Mini-Stats Bar */}
          <motion.div 
            variants={itemVariants}
            className="flex items-center gap-8 pt-8 border-t border-brand-dark-brown/10 w-full"
          >
            <div>
              <div className="font-serif text-2xl font-black text-brand-deep-brown">100%</div>
              <div className="font-sans text-xs text-brand-dark-brown/60 uppercase tracking-widest font-bold">Organic Cocoa</div>
            </div>
            <div className="h-8 w-[1px] bg-brand-dark-brown/10" />
            <div>
              <div className="font-serif text-2xl font-black text-brand-deep-brown">10k+</div>
              <div className="font-sans text-xs text-brand-dark-brown/60 uppercase tracking-widest font-bold">Happy Beasts</div>
            </div>
            <div className="h-8 w-[1px] bg-brand-dark-brown/10" />
            <div className="flex flex-col items-start">
              <div className="flex gap-0.5 text-brand-caramel">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4.5 h-4.5 fill-current stroke-none" />
                ))}
              </div>
              <div className="font-sans text-xs text-brand-dark-brown/60 uppercase tracking-widest font-bold mt-1">5-Star Reviews</div>
            </div>
          </motion.div>
        </motion.div>

        {/* Right Column: Floating 3D CSS Chocolate Bar Mockup */}
        <div className="lg:col-span-5 flex justify-center items-center relative min-h-[400px]">
          {/* Decorative Sparkles & Rings */}
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            <div className="w-72 h-72 rounded-full border border-dashed border-brand-caramel/30 animate-spin-slow" />
            <div className="absolute w-84 h-84 rounded-full border border-brand-plum/10" />
          </div>

          {/* Interactive CSS Chocolate Bar */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8, rotate: -15 }}
            animate={{ 
              opacity: 1, 
              scale: 1, 
              rotate: -8,
              y: [0, -12, 0]
            }}
            transition={{
              rotate: { duration: 0.8, ease: "easeOut" },
              scale: { duration: 0.8, ease: "easeOut" },
              opacity: { duration: 0.8 },
              y: { duration: 5, repeat: Infinity, ease: "easeInOut" }
            }}
            whileHover={{ 
              scale: 1.05, 
              rotate: 0,
              boxShadow: "0 25px 50px -12px rgba(62, 31, 13, 0.25)"
            }}
            className="relative w-64 h-96 rounded-2xl shadow-lux-lg bg-brand-dark-brown overflow-hidden flex flex-col justify-between border-2 border-brand-gold/30 cursor-grab active:cursor-grabbing"
            data-cursor-text="Indulge!"
          >
            {/* Chocolate grids showing (Torn Foil Effect) */}
            <div className="h-32 bg-brand-deep-brown relative flex flex-wrap p-4 gap-2 border-b-4 border-brand-deep-brown shadow-inner">
              {[...Array(12)].map((_, i) => (
                <div 
                  key={i} 
                  className="w-[30%] h-6 bg-[#210c03] rounded-md border-r-2 border-b-2 border-brand-deep-brown shadow-sm relative overflow-hidden"
                >
                  <div className="absolute top-0.5 left-0.5 right-0.5 bottom-0.5 bg-[#2a1206] rounded" />
                </div>
              ))}
              
              {/* Torn Silver Foil */}
              <div 
                className="absolute left-0 right-0 bottom-0 h-10 bg-gradient-to-t from-gray-200 to-gray-400 z-10 border-t-2 border-gray-100" 
                style={{
                  clipPath: "polygon(0% 100%, 12% 50%, 25% 100%, 40% 60%, 55% 100%, 70% 50%, 82% 90%, 100% 30%, 100% 100%)"
                }}
              />
            </div>

            {/* Wrapper Body (Deep Plum Wrapper) */}
            <div className="flex-1 bg-brand-plum relative p-6 flex flex-col items-center justify-between border-t border-brand-plum-light">
              {/* Gold border decorations */}
              <div className="absolute inset-3 border border-brand-gold/20 rounded-lg pointer-events-none" />
              <div className="absolute inset-4 border-2 border-brand-gold/10 rounded-lg pointer-events-none" />
              
              {/* Gold Crown/Logo */}
              <div className="flex flex-col items-center z-10 text-brand-gold mt-2">
                <Flame className="w-8 h-8 fill-brand-caramel stroke-brand-gold" />
                <span className="font-serif text-xxs tracking-widest uppercase font-bold mt-1 text-brand-gold/80">CHOCOBEAST</span>
              </div>

              {/* Flavor Label */}
              <div className="text-center z-10 bg-brand-cream/10 backdrop-blur-sm border border-brand-gold/20 py-2.5 px-4 rounded-xl shadow-inner w-full">
                <h3 className="font-serif text-lg font-black text-brand-cream tracking-tight leading-tight">MIDNIGHT ROAR</h3>
                <p className="font-sans text-[10px] text-brand-gold font-bold uppercase tracking-widest mt-0.5">85% Organic Dark Cocoa</p>
              </div>

              {/* Claw Mark */}
              <div className="absolute top-24 left-6 flex gap-1 transform -rotate-12 opacity-30">
                <div className="w-1.5 h-16 bg-brand-deep-brown rounded-full" />
                <div className="w-1.5 h-18 bg-brand-deep-brown rounded-full mt-2" />
                <div className="w-1.5 h-14 bg-brand-deep-brown rounded-full" />
              </div>
            </div>
          </motion.div>
          
          {/* Floating cocoa bean decoration 1 */}
          <motion.div
            animate={{
              y: [0, -15, 0],
              x: [0, 8, 0],
              rotate: [0, 15, 0]
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            className="absolute top-12 right-12 text-brand-caramel/60"
          >
            <Flame className="w-8 h-8 fill-current" />
          </motion.div>

          {/* Floating cacao leaf decoration 2 */}
          <motion.div
            animate={{
              y: [0, 12, 0],
              x: [0, -10, 0],
              rotate: [0, -20, 0]
            }}
            transition={{
              duration: 5.5,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            className="absolute bottom-12 left-12 text-brand-plum/40"
          >
            <Sparkles className="w-6 h-6 fill-current" />
          </motion.div>
        </div>
      </div>
    </section>
  )
}
