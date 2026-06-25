"use client"

import { cn } from "@/lib/utils"

type BookSectionProps = {
  id?: string
  className?: string
  children: React.ReactNode
  flipFrom?: "left" | "right"
}

export function BookSection({
  id,
  className,
  children,
}: BookSectionProps) {
  return (
    <section id={id} className={cn(className)}>
      {children}
    </section>
  )
}
