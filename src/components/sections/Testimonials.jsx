import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ChevronLeft, ChevronRight, Star, Quote } from "lucide-react"

export default function Testimonials() {
  const [currentIdx, setCurrentIdx] = useState(0)
  const [direction, setDirection] = useState(0) // -1 for left, 1 for right

  const reviews = [
    {
      name: "Marcus Vance",
      role: "Founder, Cacao Critic Digest",
      quote: "Chocobeast is a complete masterclass in confectionery branding and flavor balancing. The Midnight Roar is intense, fruity, and melts with absolute grace. A must-try for chocolate purists.",
      rating: 5,
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=150"
    },
    {
      name: "Sabrina Wells",
      role: "Pastry Chef & Designer",
      quote: "The Salty Claws is incredibly addictive. The applewood smoked caramel is so rich and complex, it contrasts perfectly against the salt crystals. Plus, the packaging design is simply jaw-dropping.",
      rating: 5,
      avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=150"
    },
    {
      name: "Devon Miller",
      role: "Zero-Waste Lifestyle Blogger",
      quote: "Usually, 'sustainable confections' taste like cardboard, but Chocobeast is high luxury. The fact that the inner wrapper is fully compostable in my backyard and contains zero plastic is a massive win.",
      rating: 5,
      avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=150"
    }
  ]

  const slideVariants = {
    enter: (dir) => ({
      x: dir > 0 ? 300 : -300,
      opacity: 0,
      scale: 0.95
    }),
    center: {
      x: 0,
      opacity: 1,
      scale: 1,
      transition: {
        x: { type: "spring", stiffness: 300, damping: 25 },
        opacity: { duration: 0.3 }
      }
    },
    exit: (dir) => ({
      x: dir < 0 ? 300 : -300,
      opacity: 0,
      scale: 0.95,
      transition: {
        x: { type: "spring", stiffness: 300, damping: 25 },
        opacity: { duration: 0.3 }
      }
    })
  }

  const handleNext = () => {
    setDirection(1)
    setCurrentIdx((prev) => (prev + 1) % reviews.length)
  }

  const handlePrev = () => {
    setDirection(-1)
    setCurrentIdx((prev) => (prev - 1 + reviews.length) % reviews.length)
  }

  const currentReview = reviews[currentIdx]

  return (
    <section id="testimonials" className="py-24 bg-brand-cream relative overflow-hidden border-t border-brand-dark-brown/5">
      {/* Background decoration */}
      <div className="absolute top-12 left-10 w-96 h-96 bg-brand-plum/5 blur-[100px] rounded-full pointer-events-none" />

      <div className="max-w-4xl mx-auto px-6 md:px-12 relative z-10 flex flex-col items-center">
        
        {/* Section Heading */}
        <div className="text-center mb-16">
          <span className="text-xs uppercase font-extrabold tracking-widest text-brand-plum font-sans">
            Critically Acclaimed
          </span>
          <h2 className="font-serif text-4xl md:text-5xl font-black text-brand-deep-brown mt-2">
            Reviews from the Pack
          </h2>
          <div className="h-1 bg-brand-caramel mx-auto mt-4 rounded-full w-20" />
        </div>

        {/* Carousel Container */}
        <div className="relative w-full min-h-[350px] flex items-center justify-center">
          
          <AnimatePresence initial={false} custom={direction} mode="wait">
            <motion.div
              key={currentIdx}
              custom={direction}
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
              className="w-full bg-white/50 border border-brand-dark-brown/10 p-8 md:p-12 rounded-3xl shadow-lux-md backdrop-blur-sm flex flex-col md:flex-row gap-8 items-center md:items-start text-left relative"
            >
              {/* Quote Icon Background */}
              <Quote className="absolute right-8 bottom-8 w-24 h-24 text-brand-dark-brown/5 pointer-events-none" />

              {/* Avatar Column */}
              <div className="flex-shrink-0 flex flex-col items-center">
                <div className="w-24 h-24 rounded-2xl overflow-hidden border-2 border-brand-caramel shadow-lux-sm bg-brand-deep-brown">
                  <img
                    src={currentReview.avatar}
                    alt={currentReview.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="flex gap-0.5 mt-3 text-brand-caramel">
                  {[...Array(currentReview.rating)].map((_, i) => (
                    <Star key={i} className="w-3.5 h-3.5 fill-current stroke-none" />
                  ))}
                </div>
              </div>

              {/* Text Column */}
              <div className="flex-grow flex flex-col justify-between h-full space-y-4">
                <p className="font-serif text-lg md:text-xl font-medium text-brand-deep-brown leading-relaxed italic">
                  "{currentReview.quote}"
                </p>
                <div>
                  <h3 className="font-sans text-base font-extrabold text-brand-deep-brown">
                    {currentReview.name}
                  </h3>
                  <p className="font-sans text-xs text-brand-dark-brown/60 uppercase tracking-widest font-bold mt-0.5">
                    {currentReview.role}
                  </p>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

        </div>

        {/* Navigation Controls */}
        <div className="flex items-center gap-4 mt-12 z-20">
          <button
            onClick={handlePrev}
            className="p-3 rounded-full border border-brand-dark-brown/10 bg-white/60 hover:bg-brand-caramel hover:text-brand-deep-brown text-brand-dark-brown transition-all duration-300 shadow-sm"
            aria-label="Previous testimonial"
            data-cursor-text="Prev"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          
          {/* Bullet Indicators */}
          <div className="flex gap-2">
            {reviews.map((_, idx) => (
              <button
                key={idx}
                onClick={() => {
                  setDirection(idx > currentIdx ? 1 : -1)
                  setCurrentIdx(idx)
                }}
                className={`h-2.5 rounded-full transition-all duration-300 ${
                  idx === currentIdx ? "w-6 bg-brand-plum" : "w-2.5 bg-brand-dark-brown/15"
                }`}
                aria-label={`Go to slide ${idx + 1}`}
              />
            ))}
          </div>

          <button
            onClick={handleNext}
            className="p-3 rounded-full border border-brand-dark-brown/10 bg-white/60 hover:bg-brand-caramel hover:text-brand-deep-brown text-brand-dark-brown transition-all duration-300 shadow-sm"
            aria-label="Next testimonial"
            data-cursor-text="Next"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>

      </div>
    </section>
  )
}
