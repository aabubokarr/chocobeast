import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Tabs, TabsList, TabsTrigger } from "../ui/tabs"
import { Compass, Sparkles } from "lucide-react"

export default function FlavorExplorer() {
  const [activeTab, setActiveTab] = useState("dark")

  const flavorData = {
    dark: {
      name: "Midnight Roar",
      sub: "Madagascar Dark Cacao",
      cocoa: 85,
      sweetness: 20,
      intensity: 95,
      creaminess: 45,
      desc: "Robust, dry Madagascar dark chocolate. Slow-melt brings forward rich, deep volcanic soils, dark espresso beans, and a trace of black currant acidity.",
      color: "bg-[#2A1206] text-brand-cream border-[#3E1F0D]",
      blobColor: "bg-[#3E1F0D]/20",
      accentText: "text-brand-caramel",
      progressBg: "bg-brand-caramel",
      image: "https://images.unsplash.com/photo-1548907040-4d42b52125e0?auto=format&fit=crop&q=80&w=600"
    },
    caramel: {
      name: "Salty Claws",
      sub: "Smoked Salt & Sea Salt Caramel",
      cocoa: 45,
      sweetness: 75,
      intensity: 65,
      creaminess: 85,
      desc: "Warm caramel ribbons slowly conched and smoked, blended into creamy organic dairy. Highlighted by micro-crystals of sea salt that pop on the tongue.",
      color: "bg-brand-caramel text-brand-deep-brown border-brand-gold",
      blobColor: "bg-brand-caramel/25",
      accentText: "text-brand-plum",
      progressBg: "bg-brand-plum",
      image: "https://images.unsplash.com/photo-1511381939415-e44015466834?auto=format&fit=crop&q=80&w=600"
    },
    matcha: {
      name: "Beast Matcha",
      sub: "Ceremonial Uji Matcha Fusions",
      cocoa: 32,
      sweetness: 80,
      intensity: 55,
      creaminess: 90,
      desc: "Fine ground ceremonial-grade Uji Matcha blended into raw organic cocoa butter. Offers a bright, grassy herbaceous aroma countered by sweet, rich vanilla milk.",
      color: "bg-[#4B6E40]/90 text-brand-cream border-[#4B6E40]",
      blobColor: "bg-[#4B6E40]/20",
      accentText: "text-brand-gold",
      progressBg: "bg-brand-gold",
      image: "https://images.unsplash.com/photo-1536256263959-770b48d82b0a?auto=format&fit=crop&q=80&w=600"
    },
    berry: {
      name: "Velvet Berry",
      sub: "Freeze-Dried Raspberry & Ruby Cocoa",
      cocoa: 40,
      sweetness: 50,
      intensity: 75,
      creaminess: 60,
      desc: "An exotic naturally-colored Ruby cacao base mixed with tiny crunch pieces of sharp, tart raspberry. Citric, refreshing, and beautifully pink.",
      color: "bg-brand-plum text-brand-cream border-brand-plum-light",
      blobColor: "bg-brand-plum/20",
      accentText: "text-brand-gold",
      progressBg: "bg-brand-gold",
      image: "https://images.unsplash.com/photo-1544982503-9f984c14501a?auto=format&fit=crop&q=80&w=600"
    }
  }

  const activeFlavor = flavorData[activeTab]

  return (
    <section id="flavors" className="py-24 bg-brand-cream relative overflow-hidden border-t border-brand-dark-brown/5">
      {/* Background Animated Blob */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1.1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.6 }}
            className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[550px] rounded-full blur-[100px] -z-10 ${activeFlavor.blobColor}`}
          />
        </AnimatePresence>
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-1 text-xs font-sans font-bold uppercase tracking-widest text-brand-plum mb-3"
          >
            <Compass className="w-4 h-4 animate-spin-slow" />
            <span>Flavor Lab</span>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="font-serif text-4xl md:text-5xl font-black text-brand-deep-brown"
          >
            Flavor Explorer
          </motion.h2>
          <div className="h-1 bg-brand-caramel mx-auto mt-4 rounded-full w-20" />
        </div>

        {/* Tab Interface Container */}
        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
          <div className="flex justify-center mb-16">
            <TabsList className="flex flex-wrap h-auto rounded-3xl p-1 gap-1">
              <TabsTrigger value="dark">Midnight Roar (Dark)</TabsTrigger>
              <TabsTrigger value="caramel">Salty Claws (Caramel)</TabsTrigger>
              <TabsTrigger value="matcha">Beast Matcha (Matcha)</TabsTrigger>
              <TabsTrigger value="berry">Velvet Berry (Ruby)</TabsTrigger>
            </TabsList>
          </div>

          {/* Animating Contents using AnimatePresence */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
              className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center"
            >
              {/* Left Column: Image wrapper */}
              <div className="lg:col-span-5 flex justify-center">
                <div className="relative w-80 h-96">
                  {/* Decorative dashed borders */}
                  <div className="absolute inset-0 border border-brand-dark-brown/10 rounded-3xl translate-x-3 translate-y-3" />
                  
                  {/* Image card */}
                  <div className="w-full h-full rounded-3xl overflow-hidden shadow-lux-lg border border-brand-dark-brown/10 relative z-10 bg-brand-deep-brown">
                    <img 
                      src={activeFlavor.image} 
                      alt={activeFlavor.name} 
                      className="w-full h-full object-cover"
                    />
                    {/* Shadow overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-brand-deep-brown/60 to-transparent" />
                  </div>

                  {/* Cacao percent badge */}
                  <motion.div 
                    initial={{ scale: 0, rotate: -30 }}
                    animate={{ scale: 1, rotate: -10 }}
                    transition={{ type: "spring", stiffness: 260, damping: 20, delay: 0.2 }}
                    className="absolute -top-4 -right-4 bg-brand-gold text-brand-deep-brown font-serif text-xl font-black rounded-2xl w-16 h-16 flex flex-col justify-center items-center shadow-lux-md border border-brand-caramel z-20"
                  >
                    <span>{activeFlavor.cocoa}%</span>
                    <span className="text-[7px] uppercase tracking-wider font-sans font-bold -mt-1">Cacao</span>
                  </motion.div>
                </div>
              </div>

              {/* Right Column: Flavor Specs */}
              <div className="lg:col-span-7 text-left flex flex-col justify-center space-y-6">
                <div>
                  <span className={`text-xs uppercase font-extrabold tracking-widest block font-sans ${activeFlavor.accentText}`}>
                    {activeFlavor.sub}
                  </span>
                  <h3 className="font-serif text-3xl md:text-4xl font-black text-brand-deep-brown mt-1">
                    {activeFlavor.name}
                  </h3>
                </div>

                <p className="font-sans text-brand-dark-brown/80 leading-relaxed text-base">
                  {activeFlavor.desc}
                </p>

                {/* Gauges */}
                <div className="space-y-4 pt-4 border-t border-brand-dark-brown/10">
                  <span className="text-xxs uppercase tracking-widest font-extrabold text-brand-dark-brown/50 font-sans">
                    Flavor Profile Specs
                  </span>
                  
                  {/* Gauge Item 1 */}
                  <div>
                    <div className="flex justify-between items-center text-xs font-semibold font-sans mb-1 text-brand-dark-brown">
                      <span>Cacao Intensity</span>
                      <span>{activeFlavor.intensity}%</span>
                    </div>
                    <div className="h-2 bg-brand-dark-brown/5 rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={{ width: `${activeFlavor.intensity}%` }}
                        transition={{ duration: 1, ease: "easeOut" }}
                        className={`h-full rounded-full ${activeFlavor.progressBg}`}
                      />
                    </div>
                  </div>

                  {/* Gauge Item 2 */}
                  <div>
                    <div className="flex justify-between items-center text-xs font-semibold font-sans mb-1 text-brand-dark-brown">
                      <span>Sweetness Level</span>
                      <span>{activeFlavor.sweetness}%</span>
                    </div>
                    <div className="h-2 bg-brand-dark-brown/5 rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={{ width: `${activeFlavor.sweetness}%` }}
                        transition={{ duration: 1, ease: "easeOut", delay: 0.1 }}
                        className={`h-full rounded-full ${activeFlavor.progressBg}`}
                      />
                    </div>
                  </div>

                  {/* Gauge Item 3 */}
                  <div>
                    <div className="flex justify-between items-center text-xs font-semibold font-sans mb-1 text-brand-dark-brown">
                      <span>Creaminess / Texture</span>
                      <span>{activeFlavor.creaminess}%</span>
                    </div>
                    <div className="h-2 bg-brand-dark-brown/5 rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={{ width: `${activeFlavor.creaminess}%` }}
                        transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
                        className={`h-full rounded-full ${activeFlavor.progressBg}`}
                      />
                    </div>
                  </div>
                </div>

                <div className="flex items-center gap-2 pt-2 text-xs font-bold text-brand-plum uppercase tracking-wider">
                  <Sparkles className="w-4 h-4 text-brand-caramel fill-current" />
                  <span>Specially conched for 72 hours</span>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </Tabs>

      </div>
    </section>
  )
}
