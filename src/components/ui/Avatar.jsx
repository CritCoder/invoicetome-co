import * as React from "react"
import { cn } from "@/lib/utils"

const Avatar = React.forwardRef(({ className, src, alt, ...props }, ref) => (
 <img
 ref={ref}
 src={src}
 alt={alt}
 className={cn(
 "inline-block h-12 w-12 rounded-full object-cover border-2 border-white shadow-md",
 className
 )}
 {...props}
 />
))
Avatar.displayName = "Avatar"
export { Avatar }