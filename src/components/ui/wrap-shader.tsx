"use client"

import { useRouter } from "next/navigation"
import { Warp } from "@paper-design/shaders-react"

export default function WarpShaderHero() {
  const router = useRouter()

  const scrollToSection = (id: string) => {
    const section = document.getElementById(id)
    if (!section) return
    section.scrollIntoView({ behavior: "smooth", block: "start" })
  }

  return (
    <main className="relative min-h-screen overflow-hidden">
      <div className="absolute inset-0">
        <Warp
          style={{ height: "100%", width: "100%" }}
          proportion={0.45}
          softness={1}
          distortion={0.25}
          swirl={0.8}
          swirlIterations={10}
          shape="checks"
          shapeScale={0.1}
          scale={1}
          rotation={0}
          speed={0.7}
          colors={[
            "hsl(200, 100%, 20%)",
            "hsl(160, 100%, 75%)",
            "hsl(180, 90%, 30%)",
            "hsl(170, 100%, 80%)",
          ]}
        />
      </div>

      <div className="relative z-10 flex min-h-screen items-center justify-center px-8">
        <div className="w-full max-w-4xl space-y-8 text-center">
          <h1 className="text-5xl text-white text-balance md:text-7xl font-display font-light">
            Florent Alipoe
          </h1>

          <p className="mx-auto max-w-3xl text-xl font-light leading-relaxed text-white/90 md:text-2xl">
            Graphiste . Designer Graphique
          </p>

          <div className="flex flex-col items-center justify-center gap-4 pt-4 sm:flex-row">
            <button
              type="button"
              onClick={() => router.push("/creations")}
              className="rounded-full border border-white/30 bg-white/20 px-8 py-4 font-medium text-white backdrop-blur-sm transition-all duration-300 hover:scale-105 hover:bg-white/30"
            >
              Voir mes créations
            </button>
            <button
              type="button"
              onClick={() => scrollToSection("contact")}
              className="rounded-full bg-white px-8 py-4 font-medium text-gray-800 transition-transform duration-300 hover:scale-105"
            >
              Me contacter
            </button>
          </div>
        </div>
      </div>
    </main>
  )
}
