import * as React from "react"
import { cn } from "@/lib/utils"

const Card = React.forwardRef(({ className, ...props }, ref) => (
 <div
 ref={ref}
 className={cn(
 "bg-white rounded-2xl shadow-xl border border-gray-100 p-8",
 className
 )}
 {...props}
 />
))
Card.displayName = "Card"
export { Card }