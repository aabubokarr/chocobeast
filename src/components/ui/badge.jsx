import { cn } from "../../lib/utils"

function Badge({ className, variant = "primary", ...props }) {
  const baseStyles = "inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold font-sans transition-colors focus:outline-none focus:ring-2 focus:ring-brand-caramel/50"
  
  const variants = {
    primary: "border-transparent bg-brand-caramel text-brand-deep-brown",
    secondary: "border-transparent bg-brand-dark-brown text-brand-cream",
    outline: "border-brand-dark-brown/20 text-brand-dark-brown bg-transparent",
    accent: "border-transparent bg-brand-plum text-brand-cream",
  }

  return (
    <div className={cn(baseStyles, variants[variant], className)} {...props} />
  )
}

export { Badge }
