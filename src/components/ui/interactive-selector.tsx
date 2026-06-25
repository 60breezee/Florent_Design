"use client"

import React, { useEffect, useState } from "react"
import {
  FaCampground,
  FaFire,
  FaGithub,
  FaHotTub,
  FaTint,
} from "react-icons/fa"

const options = [
  {
    title: "Branding — Identité",
    description: "Création d'une identité visuelle complète",
    image: "/visuals/proj-lambda-lions.jpg",
    link: "",
    icon: <FaCampground size={24} className="text-white" />,
  },
  {
    title: "Affiche événementielle",
    description: "Design graphique pour événement culturel",
    image: "/visuals/proj-parc-info.jpg",
    link: "",
    icon: <FaFire size={24} className="text-white" />,
  },
  {
    title: "Packaging produit",
    description: "Conception de packaging et mockup",
    image: "/visuals/proj-scanner-vuln.jpg",
    link: "",
    icon: <FaTint size={24} className="text-white" />,
  },
  {
    title: "Illustration digitale",
    description: "Illustrations vectorielles et numériques",
    image: "/visuals/proj-flo-hotel.jpg",
    link: "",
    icon: <FaHotTub size={24} className="text-white" />,
  },
]

const InteractiveSelector = () => {
  const [activeIndex, setActiveIndex] = useState(0)
  const [animatedOptions, setAnimatedOptions] = useState<number[]>([])

  const handleOptionClick = (index: number) => {
    if (index !== activeIndex) {
      setActiveIndex(index)
    }
  }

  useEffect(() => {
    const timers: ReturnType<typeof setTimeout>[] = []

    options.forEach((_, i) => {
      const timer = setTimeout(() => {
        setAnimatedOptions((prev) => [...prev, i])
      }, 180 * i)
      timers.push(timer)
    })

    return () => {
      timers.forEach((timer) => clearTimeout(timer))
    }
  }, [])

  return (
    <div className="relative flex min-h-screen flex-col items-center justify-center bg-[#222] font-sans text-white">
      <div className="mb-2 mt-8 w-full max-w-2xl px-6 text-center">
        <h1 className="animate-fadeInTop mb-3 text-4xl font-extrabold tracking-tight text-white drop-shadow-lg delay-300 md:text-5xl">
          Créations Graphiques
        </h1>
        <p className="animate-fadeInTop mx-auto max-w-xl text-lg font-medium text-gray-300 delay-600 md:text-xl">
          Design graphique, identité visuelle et illustrations sur-mesure.
        </p>
      </div>

      <div className="h-12" />

      <div className="options relative mx-0 flex h-[420px] w-full min-w-[320px] max-w-[900px] items-stretch overflow-x-auto md:h-[400px] md:min-w-[600px] md:overflow-hidden">
        {options.map((option, index) => (
          <div
            key={option.title}
            role="button"
            tabIndex={0}
            aria-pressed={activeIndex === index}
            className={`option relative flex flex-col justify-end overflow-hidden transition-[flex-grow,opacity,transform,background-size,box-shadow,border-color] duration-500 ease-out focus:outline-none focus-visible:ring-2 focus-visible:ring-white/70 ${
              activeIndex === index ? "active" : ""
            }`}
            style={{
              backgroundImage: `url('${option.image}')`,
              backgroundSize: activeIndex === index ? "auto 100%" : "auto 112%",
              backgroundPosition: "center",
              backfaceVisibility: "hidden",
              opacity: animatedOptions.includes(index) ? 1 : 0,
              transform: animatedOptions.includes(index)
                ? "translateX(0)"
                : "translateX(-60px)",
              minWidth: "60px",
              minHeight: "100px",
              margin: 0,
              borderRadius: 0,
              borderWidth: "2px",
              borderStyle: "solid",
              borderColor: activeIndex === index ? "#fff" : "#292929",
              cursor: "pointer",
              backgroundColor: "#18181b",
              boxShadow:
                activeIndex === index
                  ? "0 20px 60px rgba(0,0,0,0.50)"
                  : "0 10px 30px rgba(0,0,0,0.30)",
              flex: activeIndex === index ? "7 1 0%" : "1 1 0%",
              zIndex: activeIndex === index ? 10 : 1,
              display: "flex",
              flexDirection: "column",
              justifyContent: "flex-end",
              position: "relative",
              overflow: "hidden",
              willChange: "flex-grow, opacity, transform, box-shadow, background-size",
            }}
            onClick={() => handleOptionClick(index)}
            onMouseEnter={() => handleOptionClick(index)}
            onFocus={() => handleOptionClick(index)}
            onKeyDown={(event) => {
              if (event.key === "Enter" || event.key === " ") {
                event.preventDefault()
                handleOptionClick(index)
              }
            }}
          >
            <div
              className="shadow pointer-events-none absolute left-0 right-0 transition-all duration-500 ease-out"
              style={{
                bottom: activeIndex === index ? "0" : "-40px",
                height: "120px",
                boxShadow:
                  activeIndex === index
                    ? "inset 0 -120px 120px -120px #000, inset 0 -120px 120px -80px #000"
                    : "inset 0 -120px 0px -120px #000, inset 0 -120px 0px -80px #000",
              }}
            />

            <div className="label absolute bottom-5 left-0 right-0 z-[2] flex h-12 w-full items-center justify-start gap-3 px-4">
              <div className="icon h-[44px] min-w-[44px] max-w-[44px] flex-shrink-0 flex-grow-0 rounded-full border-2 border-[#444] bg-[rgba(32,32,32,0.85)] shadow-[0_1px_4px_rgba(0,0,0,0.18)] backdrop-blur-[10px] transition-all duration-200 flex items-center justify-center">
                {option.icon}
              </div>
              <div className="info relative whitespace-pre text-white">
                <div
                  className="main text-lg font-bold transition-all duration-500 ease-out"
                  style={{
                    opacity: activeIndex === index ? 1 : 0,
                    transform:
                      activeIndex === index ? "translateX(0)" : "translateX(25px)",
                  }}
                >
                  {option.title}
                </div>
                <div
                  className="sub text-base text-gray-300 transition-all duration-500 ease-out"
                  style={{
                    opacity: activeIndex === index ? 1 : 0,
                    transform:
                      activeIndex === index ? "translateX(0)" : "translateX(25px)",
                  }}
                >
                  {option.description}
                </div>
                {option.link && option.link !== "" && (
                  <a
                    href={option.link}
                    target="_blank"
                    rel="noreferrer"
                    onClick={(event) => event.stopPropagation()}
                    className="mt-1 inline-flex items-center gap-2 text-sm text-white/80 transition-colors hover:text-white"
                    style={{
                      opacity: activeIndex === index ? 1 : 0,
                      transform:
                        activeIndex === index ? "translateX(0)" : "translateX(25px)",
                      transition: "all 0.5s ease-out",
                    }}
                  >
                    <FaGithub size={14} />
                    Voir sur GitHub
                  </a>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>

      <style jsx>{`
        @keyframes fadeInFromTop {
          0% {
            opacity: 0;
            transform: translateY(-20px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-fadeInTop {
          opacity: 0;
          transform: translateY(-20px);
          animation: fadeInFromTop 0.8s ease-in-out forwards;
        }

        .delay-300 {
          animation-delay: 0.3s;
        }

        .delay-600 {
          animation-delay: 0.6s;
        }
      `}</style>
    </div>
  )
}

export default InteractiveSelector
