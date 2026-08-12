import { motion } from "framer-motion";
import { ArrowUp, Instagram, Twitter, Facebook, Flame } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const socialLinks = [
    { icon: Instagram, href: "#", name: "Instagram" },
    { icon: Twitter, href: "#", name: "Twitter" },
    { icon: Facebook, href: "#", name: "Facebook" },
  ];

  const column1 = [
    { name: "All Chocolate Bars", href: "#products" },
    { name: "Matcha Line", href: "#products" },
    { name: "Caramel Infusions", href: "#products" },
    { name: "Gift Gift Boxes", href: "#products" },
  ];

  const column2 = [
    { name: "Our Direct Trade", href: "#story" },
    { name: "Regenerative Cocoa", href: "#story" },
    { name: "Backyard Compost wrap", href: "#why-choose-us" },
    { name: "Press & Awards", href: "#story" },
  ];

  const column3 = [
    { name: "Track Beast Box", href: "#" },
    { name: "Pack Support", href: "#" },
    { name: "Returns Policy", href: "#" },
    { name: "Store Locator", href: "#" },
  ];

  return (
    <footer className="relative bg-brand-deep-brown text-brand-cream overflow-hidden border-t-2 border-brand-gold/10 pt-16 pb-12">
      {/* Background soft shapes */}
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-brand-caramel/5 blur-[90px] rounded-full pointer-events-none" />
      <div className="absolute top-0 left-0 w-80 h-80 bg-brand-plum/5 blur-[90px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        {/* Main Footer Directory */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-brand-cream/10">
          {/* Logo & Manifesto Column */}
          <div className="lg:col-span-4 flex flex-col items-start text-left space-y-4">
            <a
              href="#"
              className="flex items-center gap-2 font-serif text-2xl font-black tracking-tight group"
            >
              <motion.div
                whileHover={{ rotate: 15, scale: 1.1 }}
                className="text-brand-plum"
              >
                <img src="./logo.svg" alt="logo" className="w-10 h-10" />
              </motion.div>
              <span>
                Choco<span className="text-brand-caramel">beast</span>
              </span>
            </a>
            <p className="font-sans text-sm text-brand-cream/70 leading-relaxed max-w-sm">
              Artisanal premium confections for wild cravings. Handcrafted from
              Madagascan heirloom cocoa, conched for 72 hours, and wrapped in
              100% compostable sheets.
            </p>

            {/* Socials */}
            <div className="flex items-center gap-3 pt-2">
              {socialLinks.map((social, idx) => {
                const Icon = social.icon;
                return (
                  <motion.a
                    key={idx}
                    href={social.href}
                    whileHover={{
                      y: -4,
                      scale: 1.1,
                      backgroundColor: "rgba(217, 165, 92, 0.25)",
                      color: "#F4C77C",
                    }}
                    className="p-2.5 rounded-xl bg-brand-cream/5 border border-brand-cream/10 text-brand-cream/80 transition-colors"
                    aria-label={`Visit our ${social.name}`}
                  >
                    <Icon className="w-4 h-4" />
                  </motion.a>
                );
              })}
            </div>
          </div>

          {/* Directory Link Column 1 */}
          <div className="lg:col-span-2 flex flex-col items-start text-left space-y-4">
            <h4 className="font-serif text-base font-extrabold text-brand-gold uppercase tracking-wider">
              Shop
            </h4>
            <ul className="space-y-2.5">
              {column1.map((link, idx) => (
                <li key={idx}>
                  <a
                    href={link.href}
                    className="font-sans text-sm text-brand-cream/70 hover:text-brand-caramel transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Directory Link Column 2 */}
          <div className="lg:col-span-3 flex flex-col items-start text-left space-y-4">
            <h4 className="font-serif text-base font-extrabold text-brand-gold uppercase tracking-wider">
              Mission
            </h4>
            <ul className="space-y-2.5">
              {column2.map((link, idx) => (
                <li key={idx}>
                  <a
                    href={link.href}
                    className="font-sans text-sm text-brand-cream/70 hover:text-brand-caramel transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Directory Link Column 3 */}
          <div className="lg:col-span-3 flex flex-col items-start text-left space-y-4">
            <h4 className="font-serif text-base font-extrabold text-brand-gold uppercase tracking-wider">
              Support
            </h4>
            <ul className="space-y-2.5">
              {column3.map((link, idx) => (
                <li key={idx}>
                  <a
                    href={link.href}
                    className="font-sans text-sm text-brand-cream/70 hover:text-brand-caramel transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Sub-footer copyright & Back-to-top */}
        <div className="flex flex-col sm:flex-row justify-between items-center pt-8 text-center text-xs text-brand-cream/50 space-y-4 sm:space-y-0">
          <div>
            <p>
              Copyright © {currentYear} Chocobeast Ltd. All rights
              reserved.
            </p>
            <p className="mt-1 font-sans font-bold uppercase tracking-widest text-[9px] text-brand-cream/35">
              Crafted in Brooklyn, NY using Madagascar Cacaos
            </p>
          </div>

          {/* Back to top button */}
          <motion.button
            onClick={handleScrollToTop}
            whileHover={{
              y: -5,
              boxShadow: "0 0 15px rgba(244, 199, 124, 0.4)",
            }}
            className="p-3 bg-brand-caramel hover:bg-brand-gold text-brand-deep-brown rounded-2xl shadow-lux-sm border border-brand-gold/20 flex items-center justify-center cursor-pointer"
            aria-label="Scroll back to top"
            data-cursor-text="Top"
          >
            <ArrowUp className="w-4.5 h-4.5 animate-bounce" />
          </motion.button>
        </div>
      </div>
    </footer>
  );
}
