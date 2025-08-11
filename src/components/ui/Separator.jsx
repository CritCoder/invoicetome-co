import * as React from "react"
import { cn } from "@/lib/utils"

const Separator = React.forwardRef(({ className, ...props }, ref) => (
 <hr
 ref={ref}
 className={cn("border-t border-gray-200 my-6", className)}
 {...props}
 />
))
Separator.displayName = "Separator"
export { Separator }