import CustomCursor from "./components/CustomCursor"
import Navbar from "./components/sections/Navbar"
import Hero from "./components/sections/Hero"
import FlavorExplorer from "./components/sections/FlavorExplorer"
import FeaturedProducts from "./components/sections/FeaturedProducts"
import BrandStory from "./components/sections/BrandStory"
import WhyChooseUs from "./components/sections/WhyChooseUs"
import Testimonials from "./components/sections/Testimonials"
import Newsletter from "./components/sections/Newsletter"
import FAQ from "./components/sections/FAQ"
import Footer from "./components/sections/Footer"

function App() {
  return (
    <div className="relative min-h-screen selection:bg-brand-plum selection:text-white">
      {/* Premium Custom Mouse Cursor */}
      <CustomCursor />

      {/* Navigation Header */}
      <Navbar />

      {/* Hero Intro */}
      <Hero />

      {/* Flavor Labs Explorer Section */}
      <FlavorExplorer />

      {/* Featured Collection Showcase */}
      <FeaturedProducts />

      {/* Brand History Timeline & Narration */}
      <BrandStory />

      {/* Core Features Flips */}
      <WhyChooseUs />

      {/* Drag Carousel Testimonials */}
      <Testimonials />

      {/* Subscriber Bouncing Checkmark Form */}
      <Newsletter />

      {/* Collapsible FAQs */}
      <FAQ />

      {/* Footer Directory & Back to Top */}
      <Footer />
    </div>
  )
}

export default App
