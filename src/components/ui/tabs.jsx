import * as React from "react"
import * as TabsPrimitive from "@radix-ui/react-tabs"
import { cn } from "../../lib/utils"

const Tabs = TabsPrimitive.Root

const TabsList = React.forwardRef(({ className, ...props }, ref) => (
  <TabsPrimitive.List
    ref={ref}
    className={cn(
      "inline-flex h-12 items-center justify-center rounded-full bg-brand-dark-brown/5 p-1.5 text-brand-dark-brown/60 border border-brand-dark-brown/5 backdrop-blur-sm",
      className
    )}
    {...props}
  />
))
TabsList.displayName = TabsPrimitive.List.displayName

const TabsTrigger = React.forwardRef(({ className, children, ...props }, ref) => {
  return (
    <TabsPrimitive.Trigger
      ref={ref}
      className={cn(
        "relative inline-flex items-center justify-center whitespace-nowrap rounded-full px-5 py-2 text-sm font-sans font-medium transition-all duration-300 focus-visible:outline-none disabled:pointer-events-none disabled:opacity-50 data-[state=active]:text-brand-cream data-[state=active]:bg-brand-dark-brown data-[state=active]:shadow-lux-sm z-10",
        className
      )}
      {...props}
    >
      {/* If using framer-motion layoutId for the sliding active pill indicator, it would render inside here.
          Since Radix handles mounting, simple CSS styles or explicit state mappings work perfectly. */}
      {children}
    </TabsPrimitive.Trigger>
  )
})
TabsTrigger.displayName = TabsPrimitive.Trigger.displayName

const TabsContent = React.forwardRef(({ className, ...props }, ref) => (
  <TabsPrimitive.Content
    ref={ref}
    className={cn(
      "mt-4 focus-visible:outline-none",
      className
    )}
    {...props}
  />
))
TabsContent.displayName = TabsPrimitive.Content.displayName

export { Tabs, TabsList, TabsTrigger, TabsContent }
