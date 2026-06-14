import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Star, ShoppingBag, Eye, Heart } from "lucide-react"
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "../ui/card"
import { Button } from "../ui/button"
import { Badge } from "../ui/badge"
import { Dialog, MotionDialogContent, DialogTitle, DialogDescription } from "../ui/dialog"

export default function FeaturedProducts() {
  const [selectedProduct, setSelectedProduct] = useState(null)
  const [cartStates, setCartStates] = useState({}) // { productId: 'idle' | 'adding' | 'added' }
  const [favorites, setFavorites] = useState({})

  const products = [
    {
      id: "midnight-roar",
      name: "Midnight Roar",
      sub: "85% Single-Origin Dark Cocoa",
      price: "$9.50",
      rating: 4.9,
      reviews: 124,
      image: "/images/bar1.png",
      color: "from-[#2A1206] to-[#3E1F0D]",
      badge: "Best Seller",
      badgeVariant: "accent",
      desc: "Robust, earthy Madagascar dark chocolate. Deep notes of wild berries, tobacco, and espresso with a velvety, slow-melting finish.",
      profile: { cocoa: "85%", sweetness: "Low", intensity: "Beastly", origin: "Madagascar" },
      ingredients: "Organic Cocoa Mass, Organic Cane Sugar, Organic Cocoa Butter, Vanilla Beans."
    },
    {
      id: "salty-claws",
      name: "Salty Claws",
      sub: "Smoked Sea Salt Caramel",
      price: "$9.50",
      rating: 4.8,
      reviews: 98,
      image: "/images/bar2.png",
      color: "from-[#D9A55C]/40 to-[#2A1206]",
      badge: "Indulgent",
      badgeVariant: "primary",
      desc: "Warm caramel ribbons smoked over applewood, blended into buttery milk chocolate and sprinkled with fleur de sel.",
      profile: { cocoa: "45%", sweetness: "Medium", intensity: "Rich", origin: "Ecuador" },
      ingredients: "Organic Milk Chocolate (Cane Sugar, Cocoa Butter, Whole Milk Powder, Cocoa Mass), Applewood Smoked Caramel, Fleur de Sel."
    },
    {
      id: "beast-matcha",
      name: "Beast Matcha",
      sub: "Ceremonial Matcha & White Chocolate",
      price: "$10.00",
      rating: 4.7,
      reviews: 74,
      image: "/images/bar3.png",
      color: "from-[#4B6E40]/20 to-[#2A1206]",
      badge: "Limited Release",
      badgeVariant: "outline",
      desc: "Stone-ground ceremonial Uji matcha fused with organic vanilla bean white chocolate. Earthy, creamy, and mildly energizing.",
      profile: { cocoa: "32%", sweetness: "High", intensity: "Balanced", origin: "Kyoto, Japan" },
      ingredients: "Organic Cocoa Butter, Cane Sugar, Whole Milk Powder, Uji Ceremonial Matcha Green Tea, Ground Vanilla."
    },
    {
      id: "velvet-berry",
      name: "Velvet Berry",
      sub: "Raspberry & Ruby Cocoa",
      price: "$10.00",
      rating: 4.9,
      reviews: 86,
      image: "/images/bar4.png",
      color: "from-pink-900/30 to-[#2A1206]",
      badge: "Award Winning",
      badgeVariant: "accent",
      desc: "Naturally pink ruby cacao loaded with freeze-dried tart organic raspberries. Tart, citrusy, and deeply refreshing.",
      profile: { cocoa: "40%", sweetness: "Medium-Low", intensity: "Vibrant", origin: "Brazil" },
      ingredients: "Ruby Cocoa Beans, Cane Sugar, Cocoa Butter, Nonfat Milk Powder, Freeze-Dried Raspberries, Citric Acid."
    }
  ]

  const handleAddToCart = (id) => {
    setCartStates(prev => ({ ...prev, [id]: "adding" }))
    setTimeout(() => {
      setCartStates(prev => ({ ...prev, [id]: "added" }))
      setTimeout(() => {
        setCartStates(prev => ({ ...prev, [id]: "idle" }))
      }, 1500)
    }, 800)
  }

  const toggleFavorite = (id) => {
    setFavorites(prev => ({ ...prev, [id]: !prev[id] }))
  }

  return (
    <section id="products" className="py-24 bg-brand-cream relative overflow-hidden">
      {/* Decorative side shape */}
      <div className="absolute top-1/2 -left-36 w-72 h-72 rounded-full bg-brand-plum/5 blur-[80px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Section Heading */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="font-serif text-4xl md:text-5xl font-black text-brand-deep-brown"
          >
            The Beast Collection
          </motion.h2>
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: 80 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="h-1 bg-brand-caramel mx-auto mt-4 rounded-full"
          />
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="font-sans text-brand-dark-brown/70 mt-4 text-base"
          >
            Indulge in our signature chocolate bars. Each recipe is meticulously balanced with organic ingredients to create a monstrously flavorful trip.
          </motion.p>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map((product, idx) => {
            const cartState = cartStates[product.id] || "idle"
            const isFavorite = favorites[product.id] || false

            return (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
              >
                <Card
                  animate={true}
                  whileHover={{ 
                    y: -10, 
                    boxShadow: "0 20px 40px rgba(62, 31, 13, 0.15), 0 0 25px rgba(217, 165, 92, 0.2)"
                  }}
                  className="group flex flex-col h-full bg-white/70 relative border-brand-dark-brown/10 hover:border-brand-caramel/45 transition-colors duration-300"
                >
                  {/* Badge */}
                  {product.badge && (
                    <Badge variant={product.badgeVariant} className="absolute top-4 left-4 z-20 shadow-sm">
                      {product.badge}
                    </Badge>
                  )}

                  {/* Favorite Button */}
                  <button
                    onClick={() => toggleFavorite(product.id)}
                    className="absolute top-4 right-4 z-20 p-2 rounded-full bg-brand-cream/80 backdrop-blur-sm shadow-sm hover:bg-brand-cream text-brand-dark-brown/70 hover:text-red-500 transition-colors"
                  >
                    <Heart className={`w-4 h-4 transition-transform ${isFavorite ? "fill-red-500 stroke-red-500 scale-110" : ""}`} />
                  </button>

                  {/* Image Holder */}
                  <div className="h-64 overflow-hidden relative bg-brand-cream">
                    {/* Shadowy gradient top overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-brand-deep-brown/40 to-transparent opacity-60 z-10" />
                    
                    <motion.img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                      loading="lazy"
                    />

                    {/* Quick View Button on Hover */}
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20">
                      <Button
                        variant="secondary"
                        size="sm"
                        className="bg-brand-cream text-brand-deep-brown hover:bg-brand-gold hover:text-brand-deep-brown shadow-lg flex items-center gap-1.5"
                        onClick={() => setSelectedProduct(product)}
                        data-cursor-text="Quick View"
                      >
                        <Eye className="w-4 h-4" />
                        Quick View
                      </Button>
                    </div>
                  </div>

                  {/* Content */}
                  <CardHeader className="flex-grow p-5 pb-0">
                    <CardDescription className="text-brand-plum font-semibold tracking-wider text-xs uppercase">
                      {product.sub}
                    </CardDescription>
                    <CardTitle className="text-xl font-serif text-brand-deep-brown font-black mt-1">
                      {product.name}
                    </CardTitle>
                    <div className="flex items-center gap-2 mt-2">
                      <div className="flex gap-0.5 text-brand-caramel">
                        {[...Array(5)].map((_, i) => (
                          <Star 
                            key={i} 
                            className={`w-3.5 h-3.5 fill-current stroke-none ${
                              i < Math.floor(product.rating) ? "" : "opacity-30"
                            }`} 
                          />
                        ))}
                      </div>
                      <span className="text-xs text-brand-dark-brown/60 font-semibold font-sans">
                        {product.rating} ({product.reviews})
                      </span>
                    </div>
                  </CardHeader>

                  <CardContent className="p-5 pt-3 flex items-center justify-between border-t border-brand-dark-brown/5 mt-4">
                    <span className="font-serif text-2xl font-black text-brand-deep-brown">
                      {product.price}
                    </span>
                    <Button
                      variant={cartState === "added" ? "primary" : "secondary"}
                      size="sm"
                      onClick={() => handleAddToCart(product.id)}
                      className="relative overflow-hidden w-28 h-9"
                      data-cursor-text="Add"
                    >
                      <AnimatePresence mode="wait">
                        {cartState === "idle" && (
                          <motion.span
                            key="idle"
                            initial={{ y: 15, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            exit={{ y: -15, opacity: 0 }}
                            className="flex items-center justify-center gap-1 text-xs"
                          >
                            <ShoppingBag className="w-3.5 h-3.5" />
                            Add
                          </motion.span>
                        )}
                        {cartState === "adding" && (
                          <motion.span
                            key="adding"
                            initial={{ y: 15, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            exit={{ y: -15, opacity: 0 }}
                            className="text-xs font-semibold"
                          >
                            Adding...
                          </motion.span>
                        )}
                        {cartState === "added" && (
                          <motion.span
                            key="added"
                            initial={{ y: 15, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            exit={{ y: -15, opacity: 0 }}
                            className="text-xs font-black flex items-center gap-0.5"
                          >
                            ✔ Added!
                          </motion.span>
                        )}
                      </AnimatePresence>
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            )
          })}
        </div>
      </div>

      {/* Quick View Dialog Modal */}
      <Dialog open={selectedProduct !== null} onOpenChange={(open) => !open && setSelectedProduct(null)}>
        <AnimatePresence>
          {selectedProduct && (
            <MotionDialogContent className="max-w-2xl bg-brand-cream border border-brand-dark-brown/10 p-0 overflow-hidden">
              <div className="grid grid-cols-1 md:grid-cols-2">
                {/* Left side: Image */}
                <div className="h-64 md:h-full relative overflow-hidden bg-brand-deep-brown">
                  <img
                    src={selectedProduct.image}
                    alt={selectedProduct.name}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-brand-deep-brown/60 to-transparent" />
                  <Badge variant={selectedProduct.badgeVariant} className="absolute top-4 left-4 z-10">
                    {selectedProduct.badge}
                  </Badge>
                </div>

                {/* Right side: Details */}
                <div className="p-8 flex flex-col justify-between">
                  <div>
                    <span className="text-xs font-bold text-brand-plum uppercase tracking-widest block mb-1">
                      {selectedProduct.sub}
                    </span>
                    <DialogTitle className="text-3xl font-serif font-black text-brand-deep-brown">
                      {selectedProduct.name}
                    </DialogTitle>
                    
                    <div className="flex items-center gap-1.5 mt-2">
                      <div className="flex text-brand-caramel">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} className="w-3.5 h-3.5 fill-current stroke-none" />
                        ))}
                      </div>
                      <span className="text-xs text-brand-dark-brown/60 font-semibold">
                        {selectedProduct.rating} / 5.0
                      </span>
                    </div>

                    <DialogDescription className="text-brand-dark-brown/80 text-sm mt-4 leading-relaxed font-sans">
                      {selectedProduct.desc}
                    </DialogDescription>

                    {/* Flavor profile stats */}
                    <div className="grid grid-cols-2 gap-4 mt-6 border-t border-b border-brand-dark-brown/10 py-4">
                      <div>
                        <span className="text-[10px] text-brand-dark-brown/50 uppercase tracking-widest font-extrabold block">Cocoa Content</span>
                        <span className="font-serif font-black text-brand-deep-brown text-base">{selectedProduct.profile.cocoa}</span>
                      </div>
                      <div>
                        <span className="text-[10px] text-brand-dark-brown/50 uppercase tracking-widest font-extrabold block">Intensity</span>
                        <span className="font-serif font-black text-brand-deep-brown text-base">{selectedProduct.profile.intensity}</span>
                      </div>
                      <div>
                        <span className="text-[10px] text-brand-dark-brown/50 uppercase tracking-widest font-extrabold block">Origin</span>
                        <span className="font-serif font-black text-brand-deep-brown text-base">{selectedProduct.profile.origin}</span>
                      </div>
                      <div>
                        <span className="text-[10px] text-brand-dark-brown/50 uppercase tracking-widest font-extrabold block">Sweetness</span>
                        <span className="font-serif font-black text-brand-deep-brown text-base">{selectedProduct.profile.sweetness}</span>
                      </div>
                    </div>

                    <div className="mt-4">
                      <span className="text-[10px] text-brand-dark-brown/50 uppercase tracking-widest font-extrabold block">Ingredients</span>
                      <p className="text-[11px] text-brand-dark-brown/70 font-sans leading-tight mt-1">{selectedProduct.ingredients}</p>
                    </div>
                  </div>

                  <div className="flex items-center justify-between mt-8 pt-4 border-t border-brand-dark-brown/10">
                    <span className="font-serif text-3xl font-black text-brand-deep-brown">
                      {selectedProduct.price}
                    </span>
                    <div className="flex gap-2">
                      <Button
                        variant="secondary"
                        onClick={() => {
                          handleAddToCart(selectedProduct.id)
                          setSelectedProduct(null)
                        }}
                      >
                        Add to Cart
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </MotionDialogContent>
          )}
        </AnimatePresence>
      </Dialog>
    </section>
  )
}
