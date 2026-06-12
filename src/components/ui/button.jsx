import * as React from "react"
import { motion } from "framer-motion"
import { cn } from "../../lib/utils"

const Button = React.forwardRef(({ 
  className, 
  variant = "primary", 
  size = "md", 
  whileHover = { scale: 1.03, boxShadow: "0 0 20px rgba(217, 165, 92, 0.4)" },
  whileTap = { scale: 0.98 },
  ...props 
}, ref) => {
  const baseStyles = "inline-flex items-center justify-center font-sans font-medium rounded-full transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-brand-caramel/50 disabled:opacity-50 disabled:pointer-events-none"
  
  const variants = {
    primary: "bg-brand-caramel text-brand-deep-brown hover:bg-brand-gold hover:text-brand-deep-brown shadow-lux-sm",
    secondary: "bg-brand-dark-brown text-brand-cream hover:bg-brand-deep-brown hover:text-brand-gold shadow-lux-sm",
    outline: "border border-brand-dark-brown/25 text-brand-dark-brown hover:border-brand-dark-brown hover:bg-brand-dark-brown/5",
    ghost: "text-brand-dark-brown hover:bg-brand-dark-brown/5",
    link: "text-brand-plum underline-offset-4 hover:underline",
  }

  const sizes = {
    sm: "h-9 px-4 text-xs",
    md: "h-11 px-6 text-sm",
    lg: "h-13 px-8 text-base",
  }

  return (
    <motion.button
      ref={ref}
      className={cn(baseStyles, variants[variant], sizes[size], className)}
      whileHover={whileHover}
      whileTap={whileTap}
      {...props}
    />
  )
})
Button.displayName = "Button"

export { Button }
