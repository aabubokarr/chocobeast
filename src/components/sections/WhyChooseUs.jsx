import { useState } from "react"
import { motion } from "framer-motion"
import { Leaf, Recycle, Sparkles, RefreshCw } from "lucide-react"

function FeatureCard({ icon: Icon, title, frontText, backTitle, backText, delay }) {
  const [isFlipped, setIsFlipped] = useState(false)

  return (
    <div 
      className="w-full h-80 perspective cursor-pointer"
      onClick={() => setIsFlipped(!isFlipped)}
      data-cursor-text="Flip Me"
    >
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6, delay }}
        animate={{ rotateY: isFlipped ? 180 : 0 }}
        className="w-full h-full relative preserve-3d duration-700 select-none"
      >
        {/* Front Side */}
        <div className="absolute inset-0 w-full h-full backface-hidden rounded-3xl border border-brand-dark-brown/10 bg-white/50 p-8 flex flex-col justify-between items-start shadow-lux-sm hover:border-brand-caramel hover:shadow-lux-md transition-shadow duration-300">
          <div className="p-4 bg-brand-plum/10 rounded-2xl text-brand-plum">
            <Icon className="w-8 h-8 fill-brand-caramel/20" />
          </div>
          <div>
            <h3 className="font-serif text-2xl font-black text-brand-deep-brown mb-2">{title}</h3>
            <p className="font-sans text-sm text-brand-dark-brown/75 leading-relaxed">{frontText}</p>
          </div>
          <div className="flex items-center gap-1 text-xs font-semibold text-brand-plum mt-2">
            <RefreshCw className="w-3.5 h-3.5" />
            <span>Click to flip</span>
          </div>
        </div>

        {/* Back Side (Rotated 180 degrees) */}
        <div 
          className="absolute inset-0 w-full h-full backface-hidden rounded-3xl border border-brand-caramel/30 bg-brand-deep-brown p-8 flex flex-col justify-between items-start shadow-lux-lg text-brand-cream"
          style={{ transform: "rotateY(180deg)" }}
        >
          <div className="w-full">
            <div className="flex items-center justify-between pb-3 border-b border-brand-cream/10 w-full mb-4">
              <span className="font-serif text-lg font-black text-brand-gold">{backTitle}</span>
              <Icon className="w-5 h-5 text-brand-caramel" />
            </div>
            <p className="font-sans text-sm text-brand-cream/80 leading-relaxed">{backText}</p>
          </div>
          <div className="flex items-center gap-1 text-xs font-semibold text-brand-gold">
            <RefreshCw className="w-3.5 h-3.5 animate-spin-slow" />
            <span>Click to return</span>
          </div>
        </div>
      </motion.div>
    </div>
  )
}

export default function WhyChooseUs() {
  const features = [
    {
      icon: Leaf,
      title: "100% Organic Cacao",
      frontText: "Naturally grown under wild forest canopies. No synthetic sprays, zero pesticides. Pure forest energy.",
      backTitle: "Soil to Bar Purity",
      backText: "Our single-origin cacao is grown dynamically inside agroforestry buffers. We support farmers planting companion shade trees, restoring the soil biology and maintaining the pristine quality of the cocoa fruit."
    },
    {
      icon: RefreshCw,
      title: "Direct Ethical Trade",
      frontText: "We cut out all brokers, dealing directly with cacao cooperatives. We pay up to 40% above fair-trade standard.",
      backTitle: "Monstrously Fair Pay",
      backText: "By trading directly with the growers in Madagascar and Brazil, we pay families stable, premium wages. This allows farmers to compost locally and handcraft cocoas with genuine, sustainable care."
    },
    {
      icon: Recycle,
      title: "100% Green Packaging",
      frontText: "Compostable inner wrappers made from eucalyptus fibers. Recycled gold paper boxes with zero plastic.",
      backTitle: "Zero-Waste Footprint",
      backText: "The inner wrap is naturally certified home-compostable (disintegrates within 80 days). The box uses post-consumer fibers printed with water-based soy inks. Feed the earth, don't spoil it."
    },
    {
      icon: Sparkles,
      title: "Indulgent Alchemy",
      frontText: "We refine our chocolate for 72 hours in stone melangers. Smooth, rich, and beastly buttery melt.",
      backTitle: "Artisanal Tempering",
      backText: "We use traditional granite conching machines running at lower temperatures. This preserves the aromatic fruit volatiles and ensures our rich cocoa fats melt perfectly at human body temperature."
    }
  ]

  return (
    <section id="why-choose-us" className="py-24 bg-brand-cream relative overflow-hidden border-t border-brand-dark-brown/5">
      {/* Background decoration */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#D9A55C]/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Section Heading */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="font-serif text-4xl md:text-5xl font-black text-brand-deep-brown"
          >
            Indulgence Without Compromise
          </motion.h2>
          <div className="h-1 bg-brand-caramel mx-auto mt-4 rounded-full w-20" />
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="font-sans text-brand-dark-brown/70 mt-4 text-base"
          >
            We believe that premium chocolate should make your soul happy, your body feel nourished, and the earth smile. Click the cards below to see how we do it.
          </motion.p>
        </div>

        {/* Feature Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, idx) => (
            <FeatureCard
              key={idx}
              icon={feature.icon}
              title={feature.title}
              frontText={feature.frontText}
              backTitle={feature.backTitle}
              backText={feature.backText}
              delay={idx * 0.15}
            />
          ))}
        </div>

      </div>
    </section>
  )
}
