import * as React from "react"
import { cn } from "@/lib/utils"

const Button = React.forwardRef(
 (
 { className, variant = "default", size = "default", asChild = false, ...props },
 ref
 ) => {
 const Comp = asChild ? Slot : "button"
 return (
 <Comp
 className={cn(
 "inline-flex items-center justify-center rounded-xl text-base font-semibold transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-primary shadow-sm disabled:opacity-50 disabled:pointer-events-none",
 variant === "default" && "bg-primary text-white hover:bg-blue-700",
 variant === "secondary" && "bg-accent text-dark hover:bg-yellow-400",
 variant === "outline" && "border border-primary text-primary bg-white hover:bg-blue-50",
 size === "default" && "px-6 py-3",
 size === "lg" && "px-8 py-4 text-lg",
 size === "sm" && "px-4 py-2 text-sm",
 className
 )}
 ref={ref}
 {...props}
 />
 )
 }
)
Button.displayName = "Button"
export { Button }