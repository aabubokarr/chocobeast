import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Menu, X, Flame } from "lucide-react"
import { Button } from "../ui/button"

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const currentYear = new Date().getFullYear()

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true)
      } else {
        setIsScrolled(false)
      }
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const navLinks = [
    { name: "Flavors", href: "#flavors" },
    { name: "Products", href: "#products" },
    { name: "Our Story", href: "#story" },
    { name: "Why Us", href: "#why-choose-us" },
    { name: "Reviews", href: "#testimonials" },
    { name: "FAQs", href: "#faq" },
  ]

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          isScrolled 
            ? "py-3 bg-brand-cream/80 backdrop-blur-md border-b border-brand-dark-brown/10 shadow-lux-sm" 
            : "py-6 bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
          {/* Logo */}
          <a 
            href="#" 
            className="flex items-center gap-2 font-serif text-2xl font-black text-brand-dark-brown tracking-tight group"
            data-cursor-text="Home"
          >
            <motion.div
              whileHover={{ rotate: 15, scale: 1.1 }}
              transition={{ type: "spring", stiffness: 300, damping: 10 }}
              className="text-brand-plum"
            >
              <img src="/favicon.svg" alt="logo" className="w-10 h-10" />
            </motion.div>
            <span>
              Choco<span className="text-brand-caramel">beast</span>
            </span>
          </a>

          {/* Desktop Nav Links */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link, idx) => (
              <a
                key={idx}
                href={link.href}
                className="relative font-sans text-sm font-semibold text-brand-dark-brown/80 hover:text-brand-plum transition-colors duration-300 py-2 group"
              >
                {link.name}
                <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-brand-caramel transition-all duration-300 group-hover:w-full" />
              </a>
            ))}
          </div>

          {/* CTA & Mobile Hamburger */}
          <div className="flex items-center gap-4">
            <Button
              variant="secondary"
              size="sm"
              className="hidden sm:inline-flex"
              onClick={() => {
                const el = document.getElementById("products")
                if (el) el.scrollIntoView({ behavior: "smooth" })
              }}
              data-cursor-text="Indulge!"
            >
              Shop Now
            </Button>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 text-brand-dark-brown hover:bg-brand-dark-brown/5 rounded-full transition-colors duration-200"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu Slide-in Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <>
            {/* Backdrop overlay */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setMobileMenuOpen(false)}
              className="fixed inset-0 bg-brand-deep-brown/40 backdrop-blur-sm z-40 md:hidden"
            />

            {/* Content Drawer */}
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="fixed top-0 right-0 bottom-0 w-[300px] bg-brand-cream border-l border-brand-dark-brown/10 p-8 pt-24 z-50 shadow-lux-lg md:hidden flex flex-col justify-between"
            >
              <button
                onClick={() => setMobileMenuOpen(false)}
                className="absolute top-6 right-6 p-2 text-brand-dark-brown hover:bg-brand-dark-brown/5 rounded-full transition-colors"
              >
                <X className="w-6 h-6" />
              </button>

              <div className="flex flex-col gap-6">
                {navLinks.map((link, idx) => (
                  <motion.a
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: idx * 0.05 }}
                    key={idx}
                    href={link.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className="font-serif text-xl font-bold text-brand-dark-brown hover:text-brand-plum transition-colors"
                  >
                    {link.name}
                  </motion.a>
                ))}
              </div>

              <div className="flex flex-col gap-4">
                <Button
                  variant="primary"
                  className="w-full"
                  onClick={() => {
                    setMobileMenuOpen(false)
                    const el = document.getElementById("products")
                    if (el) el.scrollIntoView({ behavior: "smooth" })
                  }}
                >
                  Shop Now
                </Button>
                <p className="text-[10px] text-center text-brand-dark-brown/50 uppercase tracking-widest font-sans font-bold">
                  Copyright © {currentYear} Chocobeast Ltd
                </p>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  )
}
