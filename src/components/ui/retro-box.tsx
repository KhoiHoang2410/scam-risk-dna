import * as React from "react"
import { cn } from "@/lib/utils"

function RetroBox({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="retro-box"
      className={cn("border-[3px] border-ink bg-white text-ink shadow-retro", className)}
      {...props}
    />
  )
}

export { RetroBox }
