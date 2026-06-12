import { motion } from "framer-motion"
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "../ui/accordion"
import { HelpCircle } from "lucide-react"

export default function FAQ() {
  const faqs = [
    {
      q: "What makes Chocobeast confections 'beastly'?",
      a: "Our chocolates are crafted for wild cravings. Unlike average candy bars that are loaded with palm oils and white sugar, we use 100% organic heirloom cocoa beans, extra cocoa butter for an ultra-velvety melt, and bold, playful flavor pairings (like applewood smoked caramel or ceremonial-grade Uji matcha) that slap your tastebuds."
    },
    {
      q: "Is your inner wrapper really backyard-compostable?",
      a: "Yes! We refuse to use plastic wrappers that sit in landfills. Our silver-looking inner wrappers are made from eucalyptus wood pulp. They are certified home-compostable and break down naturally in backyard compost piles within 80 days, leaving behind zero microplastics."
    },
    {
      q: "Where do you source your organic cocoa beans?",
      a: "We source directly from cocoa cooperatives in Madagascar's Sambirano Valley and Brazil's Amazon Basin. By practicing Direct Trade, we deal directly with the farming families, paying them up to 40% above fair-trade market rates to support regenerative agroforestry."
    },
    {
      q: "Do you offer vegan-friendly options?",
      a: "Absolutely! Our signature dark chocolate bars (like Midnight Roar and Velvet Berry) are 100% dairy-free, vegan-friendly, and gluten-free. We only use pure organic cocoa mass, cocoa butter, and raw cane sugar."
    },
    {
      q: "What is 'stone conching' and why does it take 72 hours?",
      a: "Conching is the process of continuously grinding and aerating chocolate to release acidic gases and smooth out grit. While mass-production factories rush this in 2 hours using heat, we conch our chocolate for 72 hours in traditional granite stone-wheel conches. This preserves delicate floral and fruity notes and guarantees our signature buttery mouthfeel."
    }
  ]

  return (
    <section id="faq" className="py-24 bg-brand-cream relative overflow-hidden border-t border-brand-dark-brown/5">
      {/* Background shape */}
      <div className="absolute top-1/2 -right-40 w-96 h-96 bg-brand-caramel/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-4xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Section Heading */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-1.5 text-xs font-sans font-bold uppercase tracking-widest text-brand-plum mb-3"
          >
            <HelpCircle className="w-4 h-4" />
            <span>Got Questions?</span>
          </motion.div>
          <h2 className="font-serif text-4xl md:text-5xl font-black text-brand-deep-brown mt-2">
            Curious beast details
          </h2>
          <div className="h-1 bg-brand-caramel mx-auto mt-4 rounded-full w-20" />
        </div>

        {/* Accordion List */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="bg-white/50 border border-brand-dark-brown/10 p-6 md:p-10 rounded-3xl backdrop-blur-sm shadow-lux-sm"
        >
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, idx) => (
              <AccordionItem key={idx} value={`item-${idx}`} className={idx === faqs.length - 1 ? "border-none" : ""}>
                <AccordionTrigger className="text-base font-serif font-black tracking-tight py-4">
                  {faq.q}
                </AccordionTrigger>
                <AccordionContent className="text-sm leading-relaxed text-brand-dark-brown/85 font-sans">
                  {faq.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>

      </div>
    </section>
  )
}
