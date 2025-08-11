import * as React from "react"
import { cn } from "@/lib/utils"

const Textarea = React.forwardRef(({ className, ...props }, ref) => (
 <textarea
 ref={ref}
 className={cn(
 "flex min-h-[80px] w-full rounded-xl border border-gray-300 bg-white px-4 py-2 text-base placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary transition-all duration-300",
 className
 )}
 {...props}
 />
))
Textarea.displayName = "Textarea"
export { Textarea }