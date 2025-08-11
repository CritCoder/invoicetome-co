import * as React from "react"
import { cn } from "@/lib/utils"

const Input = React.forwardRef(({ className, ...props }, ref) => (
 <input
 ref={ref}
 className={cn(
 "flex h-12 w-full rounded-xl border border-gray-300 bg-white px-4 py-2 text-base placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary transition-all duration-300",
 className
 )}
 {...props}
 />
))
Input.displayName = "Input"
export { Input }