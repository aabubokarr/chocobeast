import { useEffect, useState } from "react"
import { motion, useMotionValue, useSpring, useReducedMotion } from "framer-motion"

export default function CustomCursor() {
  const isReducedMotion = useReducedMotion()
  const [hovered, setHovered] = useState(false)
  const [cursorText, setCursorText] = useState("")
  const [isVisible, setIsVisible] = useState(false)

  // Motion values for mouse coordinates
  const mouseX = useMotionValue(-100)
  const mouseY = useMotionValue(-100)

  // Smooth spring physics configuration
  const springConfig = { damping: 40, stiffness: 400, mass: 0.4 }
  const cursorX = useSpring(mouseX, springConfig)
  const cursorY = useSpring(mouseY, springConfig)

  useEffect(() => {
    if (isReducedMotion) return

    const moveCursor = (e) => {
      mouseX.set(e.clientX)
      mouseY.set(e.clientY)
      if (!isVisible) setIsVisible(true)
    };

    const handleMouseLeave = () => {
      setIsVisible(false)
    }

    const handleMouseEnter = () => {
      setIsVisible(true)
    }

    const handleMouseOver = (e) => {
      // Find closest interactive parent or element
      const target = e.target.closest("a, button, [role='button'], [data-cursor]")
      if (target) {
        setHovered(true)
        const customText = target.getAttribute("data-cursor-text")
        if (customText) {
          setCursorText(customText)
        }
      } else {
        setHovered(false)
        setCursorText("")
      }
    }

    // Add pointer fine styling to html body
    document.documentElement.classList.add("custom-cursor-active")

    window.addEventListener("mousemove", moveCursor)
    document.addEventListener("mouseleave", handleMouseLeave)
    document.addEventListener("mouseenter", handleMouseEnter)
    window.addEventListener("mouseover", handleMouseOver)

    return () => {
      document.documentElement.classList.remove("custom-cursor-active")
      window.removeEventListener("mousemove", moveCursor)
      document.removeEventListener("mouseleave", handleMouseLeave)
      document.removeEventListener("mouseenter", handleMouseEnter)
      window.removeEventListener("mouseover", handleMouseOver)
    }
  }, [mouseX, mouseY, isVisible, isReducedMotion])

  // Don't render cursor on touch devices or when reduced motion is on
  if (isReducedMotion || typeof window === "undefined" || !isVisible) {
    return null
  }

  return (
    <>
      {/* Outer Ring */}
      <motion.div
        className="fixed top-0 left-0 w-8 h-8 rounded-full border border-brand-caramel pointer-events-none z-[9999] mix-blend-difference flex items-center justify-center text-center select-none overflow-hidden"
        style={{
          x: cursorX,
          y: cursorY,
          translateX: "-50%",
          translateY: "-50%",
        }}
        animate={{
          width: hovered ? (cursorText ? 80 : 54) : 32,
          height: hovered ? (cursorText ? 80 : 54) : 32,
          backgroundColor: hovered ? "rgba(217, 165, 92, 0.9)" : "rgba(217, 165, 92, 0)",
          borderColor: hovered ? "#D9A55C" : "#D9A55C",
        }}
        transition={{ type: "spring", stiffness: 350, damping: 25, mass: 0.5 }}
      >
        {cursorText && (
          <motion.span
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            className="text-[10px] uppercase font-sans font-extrabold tracking-wider text-brand-deep-brown"
          >
            {cursorText}
          </motion.span>
        )}
      </motion.div>

      {/* Inner Dot */}
      <motion.div
        className="fixed top-0 left-0 w-2.5 h-2.5 bg-brand-plum rounded-full pointer-events-none z-[9999] mix-blend-difference"
        style={{
          x: mouseX,
          y: mouseY,
          translateX: "-50%",
          translateY: "-50%",
        }}
        animate={{
          scale: hovered ? 0.3 : 1,
        }}
        transition={{ duration: 0.2 }}
      />
    </>
  )
}
