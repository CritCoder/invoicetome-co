import * as React from "react"
import { cn } from "@/lib/utils"

const Badge = React.forwardRef(({ className, variant = "default", ...props }, ref) => (
 <span
 ref={ref}
 className={cn(
 "inline-flex items-center rounded-full px-3 py-1 text-xs font-medium transition-colors",
 variant === "default" && "bg-blue-100 text-blue-800",
 variant === "accent" && "bg-yellow-100 text-yellow-800",
 variant === "success" && "bg-green-100 text-green-800",
 variant === "danger" && "bg-red-100 text-red-800",
 className
 )}
 {...props}
 />
))
Badge.displayName = "Badge"
export { Badge }