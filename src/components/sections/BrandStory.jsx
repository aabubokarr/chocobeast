import { useRef } from "react"
import { motion, useScroll, useSpring } from "framer-motion"
import { Award, Heart, Sparkles, MapPin } from "lucide-react"

export default function BrandStory() {
  const containerRef = useRef(null)
  
  // Track scroll position of the timeline container
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"]
  })

  // Smooth scroll height animation for the golden timeline line
  const scaleY = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  })

  const timelineEvents = [
    {
      year: "2022",
      title: "Cacao Hunting",
      desc: "Deep in Madagascar's Sambirano Valley, our founders tracked down the rare wild Criollo cocoa beans. Direct Trade was established on day one.",
      icon: MapPin,
      badge: "Discovery"
    },
    {
      year: "2024",
      title: "The Micro-Factory",
      desc: "We opened our micro-roastery in Brooklyn. Bean-to-bar operations commenced in small 20kg batches to perfect temperature curves and textures.",
      icon: Sparkles,
      badge: "Crafting"
    },
    {
      year: "2026",
      title: "The Beast Awakens",
      desc: "Chocobeast officially launched! Fusing luxury confections with a playful brand attitude, winning 'Confectionery Innovation of the Year'.",
      icon: Award,
      badge: "Unleashed"
    }
  ]

  return (
    <section id="story" ref={containerRef} className="py-24 bg-brand-cream relative overflow-hidden">
      {/* Decorative blobs */}
      <div className="absolute top-10 right-0 w-80 h-80 bg-brand-caramel/10 blur-[90px] rounded-full pointer-events-none" />
      <div className="absolute bottom-10 left-0 w-80 h-80 bg-brand-plum/5 blur-[90px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Split Section Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center mb-20">
          {/* Left Column: Image with animated frame */}
          <motion.div 
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-5 relative"
          >
            {/* Background offset card border */}
            <div className="absolute inset-0 border-2 border-dashed border-brand-caramel rounded-3xl translate-x-4 translate-y-4 -z-10" />
            
            {/* Main Image Wrapper */}
            <div className="rounded-3xl overflow-hidden shadow-lux-lg bg-brand-deep-brown h-[450px]">
              <img 
                src="./images/story.png" 
                alt="Artisanal chocolate making"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
              />
            </div>

            {/* Float badge */}
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -bottom-6 -right-6 bg-brand-plum text-brand-cream py-4 px-6 rounded-2xl shadow-lux-md flex items-center gap-3 border border-brand-plum-light"
            >
              <Heart className="w-6 h-6 text-brand-caramel fill-current" />
              <div>
                <p className="font-serif font-black text-lg text-brand-gold leading-none">Artisanal</p>
                <p className="font-sans text-[10px] uppercase tracking-widest text-brand-cream/80 font-bold mt-0.5">Handcrafted Bars</p>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Column: Narrative */}
          <div className="lg:col-span-7 flex flex-col justify-center text-left space-y-6">
            <motion.span 
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-xs uppercase font-extrabold tracking-widest text-brand-plum font-sans"
            >
              Indulgent Roots
            </motion.span>
            
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="font-serif text-4xl md:text-5xl font-black text-brand-deep-brown"
            >
              Handcrafted by Dreamers, Eaten by Beasts.
            </motion.h2>

            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="font-sans text-brand-dark-brown/80 leading-relaxed text-base"
            >
              Chocobeast wasn’t born in a boardroom; it was unleashed in a kitchen of cacao-obsessed foodies who felt premium chocolate had become too serious, too stuffy, and frankly, too boring.
            </motion.p>

            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="font-sans text-brand-dark-brown/80 leading-relaxed text-base"
            >
              We set out to merge high-end culinary craftsmanship—using single-origin heirloom cocoa beans and complex infusions—with a playful, monstrous attitude. The result is a bar that looks like luxury and tastes like a wild adventure.
            </motion.p>
          </div>
        </div>

        {/* Scroll Interactive Timeline Section */}
        <div className="mt-32 max-w-4xl mx-auto relative">
          {/* Vertical central timeline line */}
          <div className="absolute left-[20px] md:left-1/2 top-0 bottom-0 w-[2px] bg-brand-dark-brown/10 transform -translate-x-1/2 -z-10">
            {/* Animated Golden Filling Track */}
            <motion.div
              style={{ scaleY, originY: 0 }}
              className="w-full h-full bg-brand-caramel shadow-glow-caramel"
            />
          </div>

          {/* Timeline Events */}
          <div className="space-y-16">
            {timelineEvents.map((event, idx) => {
              const Icon = event.icon
              const isEven = idx % 2 === 0

              return (
                <div key={idx} className="relative flex flex-col md:flex-row md:justify-between items-start">
                  
                  {/* Timeline node dot */}
                  <div className="absolute left-[20px] md:left-1/2 top-1.5 w-8 h-8 rounded-full bg-brand-cream border-2 border-brand-dark-brown/20 flex items-center justify-center transform -translate-x-1/2 z-20 group hover:border-brand-caramel transition-colors">
                    <motion.div 
                      initial={{ scale: 0 }}
                      whileInView={{ scale: 1 }}
                      viewport={{ once: true, margin: "-100px" }}
                      transition={{ delay: 0.2 }}
                      className="w-4 h-4 rounded-full bg-brand-caramel shadow-inner"
                    />
                  </div>

                  {/* Left spacer for desktop alignment */}
                  <div className={`hidden md:block w-5/12 ${isEven ? "" : "order-last"}`} />

                  {/* Card Event Content */}
                  <motion.div
                    initial={{ opacity: 0, x: isEven ? 30 : -30, y: 15 }}
                    whileInView={{ opacity: 1, x: 0, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.6, delay: 0.1 }}
                    className={`ml-12 md:ml-0 w-[calc(100%-48px)] md:w-5/12 text-left bg-white/60 border border-brand-dark-brown/10 p-6 rounded-3xl shadow-lux-sm hover:border-brand-caramel/30 transition-all duration-300 backdrop-blur-sm relative ${
                      isEven ? "md:text-right md:ml-0" : ""
                    }`}
                  >
                    <div className={`flex items-center gap-2 mb-2 ${isEven ? "md:flex-row-reverse" : ""}`}>
                      <span className="font-serif text-3xl font-black text-brand-plum leading-none">{event.year}</span>
                      <span className="text-[10px] bg-brand-caramel/25 border border-brand-caramel/20 text-brand-dark-brown font-extrabold uppercase px-2 py-0.5 rounded-full font-sans">
                        {event.badge}
                      </span>
                    </div>

                    <h3 className="font-serif text-xl font-bold text-brand-deep-brown mb-2">{event.title}</h3>
                    <p className="font-sans text-sm text-brand-dark-brown/85 leading-relaxed">{event.desc}</p>
                    
                    {/* Small Floating icon inside card */}
                    <div className={`absolute top-4 ${isEven ? "left-4" : "right-4"} p-2 bg-brand-plum/10 rounded-xl text-brand-plum`}>
                      <Icon className="w-4 h-4" />
                    </div>
                  </motion.div>

                </div>
              )
            })}
          </div>
        </div>

      </div>
    </section>
  )
}
