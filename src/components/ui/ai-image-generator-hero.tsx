"use client"

import type React from "react"
import { useRef } from "react"
import Image from "next/image"
import { useReducedMotion } from "framer-motion"
import { ArrowRight } from "lucide-react"
import { cn } from "@/lib/utils"

interface ImageCard {
  id: string
  src: string
  alt: string
  rotation: number
}

interface ImageCarouselHeroProps {
  title: string
  subtitle: string
  description: string
  ctaText: string
  onCtaClick?: () => void
  images: ImageCard[]
  features?: Array<{
    title: string
    description: string
  }>
}

export function ImageCarouselHero({
  title,
  subtitle,
  description,
  ctaText,
  onCtaClick,
  images,
  features = [
    {
      title: "Realistic Results",
      description: "Realistic Results Photos that look professionally crafted",
    },
    {
      title: "Fast Generation",
      description: "Turn ideas into images in seconds.",
    },
    {
      title: "Diverse Styles",
      description: "Choose from a wide range of artistic options.",
    },
  ],
}: ImageCarouselHeroProps) {
  const stageRef = useRef<HTMLDivElement>(null)
  const prefersReducedMotion = useReducedMotion()

  const handleMouseMove = (event: React.MouseEvent<HTMLDivElement>) => {
    if (prefersReducedMotion || !stageRef.current) return

    const rect = event.currentTarget.getBoundingClientRect()
    const x = ((event.clientX - rect.left) / rect.width - 0.5) * 18
    const y = ((event.clientY - rect.top) / rect.height - 0.5) * -18

    stageRef.current.style.setProperty("--tilt-x", `${x.toFixed(2)}deg`)
    stageRef.current.style.setProperty("--tilt-y", `${y.toFixed(2)}deg`)
  }

  const resetMouseTilt = () => {
    if (!stageRef.current) return

    stageRef.current.style.setProperty("--tilt-x", "0deg")
    stageRef.current.style.setProperty("--tilt-y", "0deg")
  }

  return (
    <div className="relative min-h-screen w-full overflow-hidden bg-gradient-to-b from-background via-background to-background">
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute right-0 top-0 h-96 w-96 animate-pulse rounded-full bg-gradient-to-br from-primary/5 to-transparent blur-3xl" />
        <div className="absolute bottom-0 left-0 h-96 w-96 animate-pulse rounded-full bg-gradient-to-tr from-primary/5 to-transparent blur-3xl" />
      </div>

      <div className="relative z-10 flex min-h-screen flex-col items-center justify-center px-4 sm:px-6 lg:px-8">
        <div
          className="group relative mb-12 h-96 w-full max-w-6xl sm:mb-16 sm:h-[500px]"
          onMouseMove={handleMouseMove}
          onMouseLeave={resetMouseTilt}
        >
          <div className="absolute inset-0 flex items-center justify-center [perspective:1400px]">
            <div
              ref={stageRef}
              className="relative h-full w-full transition-transform duration-500 ease-out [transform:rotateX(var(--tilt-y,0deg))_rotateY(var(--tilt-x,0deg))] [transform-style:preserve-3d]"
            >
              {images.map((image, index) => {
                const startAngle = `${(360 / images.length) * index}deg`

                return (
                  <div
                    key={image.id}
                    className="absolute left-1/2 top-1/2 h-40 w-32 will-change-transform sm:h-48 sm:w-40"
                    style={{
                      ["--start-angle" as string]: startAngle,
                      ["--orbit-radius" as string]: "clamp(7rem, 18vw, 12rem)",
                      ["--card-rotation" as string]: `${image.rotation}deg`,
                      animation: prefersReducedMotion
                        ? undefined
                        : "orbit-carousel 28s linear infinite",
                    }}
                  >
                    <div
                      className={cn(
                        "group relative h-full w-full cursor-pointer overflow-hidden rounded-2xl shadow-2xl",
                        "transition-transform duration-500 will-change-transform hover:scale-110",
                      )}
                      style={{
                        animation: prefersReducedMotion
                          ? undefined
                          : "orbit-card-counter 28s linear infinite",
                        transformStyle: "preserve-3d",
                      }}
                    >
                      <Image
                        src={image.src || "/placeholder.svg"}
                        alt={image.alt}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-110"
                        priority={index < 3}
                      />
                      <div className="absolute inset-0 bg-gradient-to-br from-white/20 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </div>

        <div className="relative z-20 mx-auto mb-12 max-w-2xl text-center sm:mb-16">
          <span className="inline-flex items-center gap-2 rounded-full border border-border/60 px-4 py-1 text-xs uppercase tracking-[0.3em] text-muted-foreground">
            {subtitle}
          </span>
          <h1 className="mb-4 text-4xl leading-tight text-balance text-foreground sm:mb-6 sm:text-5xl lg:text-6xl font-display font-bold">
            {title}
          </h1>

          <p className="mb-8 text-lg text-balance text-muted-foreground sm:text-xl">
            {description}
          </p>

          <button
            onClick={onCtaClick}
            className={cn(
              "group inline-flex items-center gap-2 rounded-full px-8 py-3",
              "bg-primary font-medium text-primary-foreground",
              "transition-all duration-300 hover:scale-105 hover:shadow-lg",
              "focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 active:scale-95",
            )}
          >
            {ctaText}
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </button>
        </div>

        <div className="relative z-20 mt-12 grid w-full max-w-4xl grid-cols-1 gap-6 sm:mt-16 sm:grid-cols-3 sm:gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className={cn(
                "group rounded-xl border border-border/50 bg-card/50 p-6 text-center backdrop-blur-sm",
                "transition-all duration-300 hover:border-border hover:bg-card/80",
              )}
            >
              <h3 className="mb-2 text-lg font-semibold text-foreground transition-colors group-hover:text-primary sm:text-xl">
                {feature.title}
              </h3>
              <p className="text-sm text-muted-foreground sm:text-base">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
