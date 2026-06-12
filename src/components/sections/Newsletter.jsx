import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Send, CheckCircle, Mail } from "lucide-react"
import { Button } from "../ui/button"

export default function Newsletter() {
  const [email, setEmail] = useState("")
  const [status, setStatus] = useState("idle") // idle | loading | success

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!email) return

    setStatus("loading")
    setTimeout(() => {
      setStatus("success")
    }, 1200)
  }

  return (
    <section className="py-24 bg-brand-cream relative overflow-hidden">
      <div className="max-w-5xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Main Card with luxury radial dark background */}
        <div className="relative overflow-hidden rounded-3xl bg-brand-deep-brown p-8 md:p-16 border border-brand-gold/25 shadow-lux-lg text-center">
          {/* Background shapes */}
          <div className="absolute inset-0 bg-chocolate-radial from-brand-plum/45 via-transparent to-transparent pointer-events-none" />
          <div className="absolute top-0 right-0 w-64 h-64 bg-brand-caramel/10 blur-[80px] rounded-full pointer-events-none" />

          <div className="max-w-2xl mx-auto relative z-10 flex flex-col items-center">
            
            {/* Mail Icon Wrapper */}
            <motion.div
              animate={{ y: [0, -6, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="p-4 bg-brand-gold/15 rounded-2xl text-brand-gold border border-brand-gold/20 mb-6"
            >
              <Mail className="w-8 h-8" />
            </motion.div>

            {/* Title & Sub */}
            <h2 className="font-serif text-3xl md:text-4xl font-black text-brand-cream tracking-tight">
              Join the Feast Guild
            </h2>
            <p className="font-sans text-sm md:text-base text-brand-cream/80 mt-4 max-w-md leading-relaxed">
              Unlock exclusive recipe drops, secret small-batch flavor releases, and 10% off your first chocolate haul. No spam, only indulgence.
            </p>

            {/* Form & Animations */}
            <div className="w-full max-w-md mt-8 min-h-[70px]">
              <AnimatePresence mode="wait">
                {status !== "success" ? (
                  <motion.form
                    key="form"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    onSubmit={handleSubmit}
                    className="flex flex-col sm:flex-row gap-3 w-full"
                  >
                    <div className="relative flex-grow">
                      <input
                        type="email"
                        required
                        disabled={status === "loading"}
                        placeholder="Enter your beast email..."
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="w-full h-12 rounded-full px-6 bg-brand-cream/10 border border-brand-gold/30 text-brand-cream placeholder:text-brand-cream/40 focus:outline-none focus:border-brand-gold focus:ring-2 focus:ring-brand-gold/25 transition-all duration-300 font-sans text-sm disabled:opacity-50"
                      />
                    </div>
                    <Button
                      type="submit"
                      variant="primary"
                      disabled={status === "loading"}
                      className="h-12 px-6 rounded-full flex-shrink-0"
                      data-cursor-text="Join!"
                    >
                      {status === "loading" ? (
                        <div className="w-5 h-5 border-2 border-brand-deep-brown border-t-transparent rounded-full animate-spin" />
                      ) : (
                        <span className="flex items-center gap-1">
                          Subscribe
                          <Send className="w-3.5 h-3.5" />
                        </span>
                      )}
                    </Button>
                  </motion.form>
                ) : (
                  <motion.div
                    key="success"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ type: "spring", stiffness: 200, damping: 15 }}
                    className="flex flex-col items-center p-2 text-brand-gold"
                  >
                    <CheckCircle className="w-12 h-12 text-brand-caramel fill-brand-deep-brown animate-pulse-slow" />
                    <span className="font-serif text-lg font-bold text-brand-cream mt-3">Welcome to the Pack!</span>
                    <span className="font-sans text-xs text-brand-cream/60 mt-1">Check your inbox for your 10% discount code.</span>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

          </div>
        </div>

      </div>
    </section>
  )
}
