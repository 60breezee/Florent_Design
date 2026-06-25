"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { ArrowLeft, X } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"

const creations = [
  {
    id: "1",
    title: "Identité visuelle — Branding",
    image: "/visuals/100-abonnes.png",
    tags: ["Logo", "Branding", "Charte"],
  },
  {
    id: "2",
    title: "Affiche événementielle",
    image: "/visuals/after-class.png",
    tags: ["Affiche", "Événementiel", "Print"],
  },
  {
    id: "3",
    title: "Mockup packaging",
    image: "/visuals/ccc.png",
    tags: ["Packaging", "Mockup", "Produit"],
  },
  {
    id: "4",
    title: "Illustration numérique",
    image: "/visuals/hello.png",
    tags: ["Illustration", "Vectoriel", "Éditorial"],
  },
  {
    id: "5",
    title: "Design UI — Application",
    image: "/visuals/st-vou.png",
    tags: ["UI", "Mobile", "Moderne"],
  },
  {
    id: "6",
    title: "Communication visuelle",
    image: "/visuals/ui-5.png",
    tags: ["Réseaux", "Digital", "Kit"],
  },
  {
    id: "7",
    title: "Dashboard — Scanner de vulnérabilités",
    image: "/visuals/proj-scanner-vuln.jpg",
    tags: ["UI/UX", "Dashboard", "Cybersécurité"],
  },
  {
    id: "8",
    title: "Site — Parc informatique",
    image: "/visuals/proj-parc-info.jpg",
    tags: ["UI/UX", "Web App", "IT"],
  },
  {
    id: "9",
    title: "Landing page — Lambda Lions",
    image: "/visuals/proj-lambda-lions.jpg",
    tags: ["Landing Page", "Branding", "Web"],
  },
  {
    id: "10",
    title: "Site hôtelier — Flo Hôtel",
    image: "/visuals/proj-flo-hotel.jpg",
    tags: ["UI/UX", "Hôtellerie", "Web"],
  },
  {
    id: "11",
    title: "Affiche — Académie",
    image: "/visuals/ACADEMIE.png",
    tags: ["Affiche", "Événementiel", "Print"],
  },
  {
    id: "12",
    title: "Création — All Black",
    image: "/visuals/all-black.png",
    tags: ["Création", "Mode", "Branding"],
  },
  {
    id: "13",
    title: "Affiche culturelle",
    image: "/visuals/culturelle.png",
    tags: ["Affiche", "Culture", "Print"],
  },
  {
    id: "14",
    title: "Affiche — Eco Jogging",
    image: "/visuals/eco-jogging.png",
    tags: ["Affiche", "Sport", "Événementiel"],
  },
  {
    id: "15",
    title: "Packaging — Jus",
    image: "/visuals/jus.png",
    tags: ["Packaging", "Produit", "Création"],
  },
  {
    id: "16",
    title: "Création — We",
    image: "/visuals/we.png",
    tags: ["Création", "Branding", "Digital"],
  },
  {
    id: "17",
    title: "Webinaire — Communication",
    image: "/visuals/webinaire.png",
    tags: ["Communication", "Digital", "Événementiel"],
  },
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" as const },
  },
}

export default function CreationsPage() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null)

  const openLightbox = (image: string) => setSelectedImage(image)
  const closeLightbox = () => setSelectedImage(null)

  return (
    <div className="min-h-screen bg-base-100 text-base-content">
      <div className="mx-auto max-w-6xl px-6 py-12">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-12"
        >
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
          >
            <ArrowLeft size={16} />
            Retour à l'accueil
          </Link>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mb-16 space-y-4"
        >
          <p className="text-sm uppercase tracking-[0.4em] text-muted-foreground">
            Portfolio graphique
          </p>
          <h1 className="text-5xl md:text-7xl font-display font-semibold">
            Mes Créations
          </h1>
          <p className="max-w-2xl text-lg text-muted-foreground">
            Une sélection de mes travaux en design graphique : identités visuelles,
            affiches, illustrations, packaging et communication digitale.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {creations.map((item) => (
            <motion.div
              key={item.id}
              variants={itemVariants}
              onClick={() => openLightbox(item.image)}
              className="group relative overflow-hidden rounded-2xl border border-border/60 bg-card shadow-sm transition-all duration-500 hover:shadow-xl hover:-translate-y-1 cursor-pointer"
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>
              <div className="p-5 space-y-3">
                <h3 className="text-lg font-display font-semibold text-foreground group-hover:text-primary transition-colors">
                  {item.title}
                </h3>
                <div className="flex flex-wrap gap-2 pt-2">
                  {item.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full border border-border/50 px-3 py-0.5 text-xs text-muted-foreground bg-base-200/50"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            onClick={closeLightbox}
            className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/80 backdrop-blur-sm p-4"
          >
            <button
              onClick={closeLightbox}
              className="absolute top-6 right-6 rounded-full bg-white/10 p-2 text-white hover:bg-white/20 transition-colors"
            >
              <X size={24} />
            </button>
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="relative max-h-[90vh] max-w-[90vw]"
              onClick={(e) => e.stopPropagation()}
            >
              <Image
                src={selectedImage}
                alt="Visuel agrandi"
                width={1200}
                height={900}
                className="rounded-2xl object-contain max-h-[90vh] w-auto h-auto"
                priority
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
