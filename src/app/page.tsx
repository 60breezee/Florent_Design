"use client"

import { useState, type ComponentType } from "react"
import dynamic from "next/dynamic"
import {
  Briefcase,
  Eye,
  Fingerprint,
  Github,
  Home as HomeIcon,
  ImageIcon,
  Image,
  Layout,
  Linkedin,
  Mail,
  MessageCircle,
  Package,
  Palette,
  Pen,
  Play,
  RefreshCw,
  Search,
  Share2,
  Sparkles,
  Twitter,
} from "lucide-react"
import { AnimeNavBar } from "@/components/ui/anime-navbar"
import { AnimatedGridPattern } from "@/components/ui/animated-grid-pattern"
import { ImageCarouselHero } from "@/components/ui/ai-image-generator-hero"
import { AnimatedDock } from "@/components/ui/animated-dock"
import DisplayCards from "@/components/ui/display-cards"
import { Component as Footer } from "@/components/ui/footer-taped-design"
import {
  PopoverForm,
  PopoverFormButton,
  PopoverFormCutOutLeftIcon,
  PopoverFormCutOutRightIcon,
  PopoverFormSeparator,
  PopoverFormSuccess,
} from "@/components/ui/popover-form"
import VaporizeTextCycle from "@/components/ui/vapour-text-effect"
import WarpShaderHero from "@/components/ui/wrap-shader"
import { BookSection } from "@/components/ui/book-section"

type FormState = "idle" | "loading" | "success"

const IconCloud = dynamic(
  () =>
    import("@/components/ui/interactive-icon-cloud").then(
      (mod) => mod.IconCloud,
    ),
  {
    ssr: false,
    loading: () => (
      <div className="flex h-full w-full items-center justify-center text-sm text-muted-foreground">
        Chargement…
      </div>
    ),
  },
)

const navItems = [
  { name: "Accueil", url: "#hero", icon: HomeIcon },
  { name: "Compétences", url: "#skills", icon: Sparkles },
  { name: "Créations", url: "/creations", icon: Briefcase },
  { name: "Visuels", url: "#visuals", icon: ImageIcon },
  { name: "Contact", url: "#contact", icon: MessageCircle },
]

const servicesList: Array<{
  num: string
  title: string
  icon: ComponentType<{ className?: string }>
  desc: string
}> = [
  { num: "01", title: "Identité visuelle", icon: Eye, desc: "Logos, chartes graphiques, univers de marque." },
  { num: "02", title: "Logo Design", icon: Fingerprint, desc: "Création de logos uniques et mémorables." },
  { num: "03", title: "Branding", icon: Palette, desc: "Stratégie de marque et positionnement visuel." },
  { num: "04", title: "Affiches", icon: Image, desc: "Affiches événementielles, culturelles et publicitaires." },
  { num: "05", title: "Réseaux sociaux", icon: Share2, desc: "Visuels pour vos campagnes social media." },
  { num: "06", title: "Packaging", icon: Package, desc: "Design d'emballages et mockups produits." },
  { num: "07", title: "Motion Design", icon: Play, desc: "Animations graphiques et vidéo." },
]

export default function Home() {
  const [formState, setFormState] = useState<FormState>("idle")
  const [open, setOpen] = useState(false)
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [message, setMessage] = useState("")

  const submit = () => {
    setFormState("loading")
    setTimeout(() => {
      setFormState("success")
    }, 1200)

    setTimeout(() => {
      setOpen(false)
      setFormState("idle")
      setName("")
      setEmail("")
      setMessage("")
    }, 2600)
  }

  const demoImages = [
    {
      id: "1",
      src: "/visuals/100-abonnes.png",
      alt: "Design graphique - 100 abonnés",
      rotation: -15,
    },
    {
      id: "2",
      src: "/visuals/ui-5.png",
      alt: "Design - écran principal",
      rotation: -8,
    },
    {
      id: "3",
      src: "/visuals/after-class.png",
      alt: "Design - After Class",
      rotation: 5,
    },
    {
      id: "4",
      src: "/visuals/ccc.png",
      alt: "Design - CCC",
      rotation: 12,
    },
    {
      id: "5",
      src: "/visuals/hello.png",
      alt: "Design - Hello",
      rotation: -12,
    },
    {
      id: "6",
      src: "/visuals/st-vou.png",
      alt: "Design - St Vou",
      rotation: 8,
    },
  ]

  const demoFeatures = [
    {
      title: "Identité visuelle",
      description: "Logos, chartes graphiques et univers de marque.",
    },
    {
      title: "Print & digital",
      description: "Affiches, flyers, packaging et supports numériques.",
    },
    {
      title: "Illustrations",
      description: "Créations vectorielles et dessins sur-mesure.",
    },
  ]

  return (
    <div className="bg-base-100 text-base-content book-stage">
      <AnimeNavBar items={navItems} defaultActive="Accueil" />

      <BookSection id="hero" className="relative" flipFrom="left">
        <WarpShaderHero />
        <AnimatedGridPattern
          numSquares={20}
          maxOpacity={0.2}
          duration={3}
          repeatDelay={1}
          className="[mask-image:radial-gradient(500px_circle_at_center,white,transparent)]"
        />
      </BookSection>

      <BookSection className="relative py-24 px-6" flipFrom="right">
        <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-[1.2fr_0.8fr] gap-12 items-center">
          <div className="space-y-6">
            <p className="text-sm uppercase tracking-[0.4em] text-muted-foreground">
              Identité
            </p>
            <h2 className="text-4xl md:text-5xl font-display font-semibold">
              Donner vie à vos idées avec une identité visuelle forte.
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Je crée des identités visuelles, des supports de communication et
              des illustrations qui racontent une histoire. Chaque projet est pensé
              pour marquer les esprits.
            </p>
          </div>
          <div className="relative h-[400px] rounded-3xl border border-border/60 bg-neutral text-neutral-foreground overflow-hidden">
            <VaporizeTextCycle
              texts={["Florent", "Alipoe", "Designer"]}
              font={{
                fontFamily: "var(--font-display), sans-serif",
                fontSize: "80px",
                fontWeight: 700,
              }}
              color="rgb(255,255,255)"
              spread={4}
              density={4}
              animation={{ vaporizeDuration: 2, fadeInDuration: 1, waitDuration: 0.6 }}
              direction="left-to-right"
              alignment="center"
            />
          </div>
        </div>
      </BookSection>

      <BookSection id="services" className="relative py-32 px-6" flipFrom="right">
        <div className="max-w-6xl mx-auto space-y-20">
          <div className="space-y-6">
            <p className="text-sm uppercase tracking-[0.4em] text-muted-foreground">
              Mes services
            </p>
            <h2 className="text-5xl md:text-7xl font-display font-semibold">
              Ce que je vous propose
            </h2>
          </div>
          <div className="space-y-16">
            {servicesList.map((s, i) => {
              const Icon = s.icon
              return (
                <div
                  key={s.num}
                  className="grid grid-cols-1 md:grid-cols-[auto_1fr] gap-8 md:gap-16 items-start border-b border-border/20 pb-16 last:border-0 last:pb-0"
                >
                  <div className="flex items-center gap-4 md:flex-col md:items-start md:sticky md:top-32">
                    <span className="text-7xl md:text-9xl font-display font-bold leading-none text-muted-foreground/15 select-none">
                      {s.num}
                    </span>
                    <Icon className="size-8 md:size-10 text-primary shrink-0" />
                  </div>
                  <div className="space-y-4 pt-1 md:pt-4">
                    <h3 className="text-3xl md:text-5xl font-display font-semibold">
                      {s.title}
                    </h3>
                    <p className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-xl">
                      {s.desc}
                    </p>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </BookSection>

      <BookSection id="skills" className="relative py-32 px-6 bg-base-200" flipFrom="left">
        <AnimatedGridPattern
          numSquares={40}
          maxOpacity={0.12}
          duration={3}
          repeatDelay={0.8}
          className="[mask-image:radial-gradient(600px_circle_at_center,white,transparent)]"
        />
        <div className="relative max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-[0.9fr_1.1fr] gap-12 items-center">
          <div className="space-y-6">
            <h2 className="text-4xl md:text-5xl font-display font-semibold">
              Compétences principales
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Création graphique, identité visuelle et direction artistique. Je
              transforme chaque idée en un visuel impactant et cohérent.
            </p>
            <div className="flex flex-wrap gap-3 text-sm">
              {[
                "Photoshop",
                "Illustrator",
                "InDesign",
                "Figma",
                "Canva",
                "After Effects",
                "Blender",
              ].map((item) => (
                <span
                  key={item}
                  className="rounded-full border border-border/60 px-4 py-2 bg-card/70"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
          <div className="relative flex size-full max-w-lg items-center justify-center overflow-hidden rounded-3xl border border-border/60 bg-card px-10 pb-16 pt-6 shadow-xl">
            <IconCloud
              iconSlugs={[
                "adobephotoshop",
                "adobeillustrator",
                "adobeindesign",
                "adobexd",
                "figma",
                "canva",
                "blender",
                "aftereffects",
                "procreate",
                "sketch",
                "notion",
              ]}
            />
          </div>
        </div>
      </BookSection>

      <BookSection id="process" className="relative py-32 px-6" flipFrom="right">
        <div className="max-w-6xl mx-auto space-y-16">
          <div className="space-y-6">
            <p className="text-sm uppercase tracking-[0.4em] text-muted-foreground">
              Mon processus
            </p>
            <h2 className="text-5xl md:text-7xl font-display font-semibold">
              Comment je travaille
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-12 gap-y-16">
            {[
              { step: "01", title: "Découverte", icon: Search, desc: "Analyse du brief et des objectifs." },
              { step: "02", title: "Recherche", icon: Palette, desc: "Inspiration, tendances & références." },
              { step: "03", title: "Moodboard", icon: Layout, desc: "Direction artistique et univers visuel." },
              { step: "04", title: "Croquis", icon: Pen, desc: "Premières pistes et explorations." },
              { step: "05", title: "Design", icon: Sparkles, desc: "Réalisation des visuels finaux." },
              { step: "06", title: "Révisions", icon: RefreshCw, desc: "Ajustements et perfectionnements." },
              { step: "07", title: "Livraison", icon: Package, desc: "Fichiers prêts à l'emploi." },
            ].map((item) => {
              const Icon = item.icon
              return (
                <div key={item.step} className="space-y-5">
                  <div className="flex items-center gap-3">
                    <span className="text-6xl md:text-7xl font-display font-bold text-muted-foreground/20">
                      {item.step}
                    </span>
                    <Icon className="size-8 text-primary" />
                  </div>
                  <h3 className="text-2xl md:text-3xl font-display font-semibold">
                    {item.title}
                  </h3>
                  <p className="text-base text-muted-foreground leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              )
            })}
          </div>
        </div>
      </BookSection>

      <BookSection id="visuals" flipFrom="left">
        <ImageCarouselHero
          title="Créations graphiques & illustrations"
          subtitle="Designs récents"
          description="Une sélection de créations visuelles : identités de marque, affiches, illustrations et supports de communication."
          ctaText="Explorer"
          onCtaClick={() => window.location.href = "/creations"}
          images={demoImages}
          features={demoFeatures}
        />
      </BookSection>

      <BookSection id="testimonials" className="py-24 px-6 bg-base-200" flipFrom="right">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-[1fr_1fr] gap-12 items-center">
          <div className="space-y-6">
            <p className="text-sm uppercase tracking-[0.4em] text-muted-foreground">
              Témoignages
            </p>
            <h2 className="text-4xl md:text-5xl font-display font-semibold">
              Des collaborations créatives et inspirantes
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Des clients satisfaits grâce à une direction artistique soignée et
              des livrables visuels impeccables.
            </p>
          </div>
          <DisplayCards
            cards={[
              {
                title: "Marque de mode",
                description: "Identité visuelle complète",
                date: "2025",
                titleClassName: "text-primary",
                className:
                  "[grid-area:stack] hover:-translate-y-10 before:absolute before:w-[100%] before:outline-1 before:rounded-xl before:outline-border before:h-[100%] before:content-[''] before:bg-blend-overlay before:bg-background/50 grayscale-[100%] hover:before:opacity-0 before:transition-opacity before:duration-700 hover:grayscale-0 before:left-0 before:top-0",
              },
              {
                title: "Agence de com'",
                description: "Campagne print & digitale",
                date: "2024",
                titleClassName: "text-primary",
                className:
                  "[grid-area:stack] translate-x-16 translate-y-10 hover:-translate-y-1 before:absolute before:w-[100%] before:outline-1 before:rounded-xl before:outline-border before:h-[100%] before:content-[''] before:bg-blend-overlay before:bg-background/50 grayscale-[100%] hover:before:opacity-0 before:transition-opacity before:duration-700 hover:grayscale-0 before:left-0 before:top-0",
              },
              {
                title: "Startup",
                description: "Packaging & branding produit",
                date: "2024",
                titleClassName: "text-primary",
                className:
                  "[grid-area:stack] translate-x-32 translate-y-20 hover:translate-y-10",
              },
            ]}
          />
        </div>
      </BookSection>

      <BookSection id="media" className="py-20 px-6" flipFrom="left">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <h2 className="text-3xl md:text-4xl font-display font-semibold">
            Suivez mes créations
          </h2>
          <AnimatedDock
            items={[
              {
                link: "https://github.com/",
                target: "_blank",
                Icon: <Github size={22} />,
              },
              {
                link: "https://www.linkedin.com/",
                target: "_blank",
                Icon: <Linkedin size={22} />,
              },
              {
                link: "https://x.com/",
                target: "_blank",
                Icon: <Twitter size={22} />,
              },
              {
                link: "mailto:hello@florentalipoe.com",
                target: "_blank",
                Icon: <Mail size={22} />,
              },
            ]}
            className="mx-auto"
          />
        </div>
      </BookSection>

      <BookSection id="contact" className="py-24 px-6 bg-base-200" flipFrom="right">
        <div className="max-w-4xl mx-auto grid grid-cols-1 lg:grid-cols-[1fr_1fr] gap-12 items-center">
          <div className="space-y-6">
            <h2 className="text-4xl md:text-5xl font-display font-semibold">
              Parlons de votre projet
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Envoyez-moi un message pour donner vie à votre prochain projet graphique.
            </p>
          </div>
          <PopoverForm
            title="Écrire un message"
            open={open}
            setOpen={setOpen}
            width="380px"
            height="380px"
            showCloseButton={formState !== "success"}
            showSuccess={formState === "success"}
            openChild={
              <form
                onSubmit={(event) => {
                  event.preventDefault()
                  if (!name || !email || !message) return
                  submit()
                }}
                className="space-y-4"
              >
                <div className="px-4 pt-4">
                  <label htmlFor="name" className="block text-sm font-medium text-muted-foreground mb-1">
                    Nom
                  </label>
                  <input
                    type="text"
                    id="name"
                    value={name}
                    onChange={(event) => setName(event.target.value)}
                    className="w-full px-3 py-2 border border-border/60 rounded-md shadow-sm focus:outline-none focus:ring-primary focus:border-primary bg-background text-foreground placeholder:text-muted-foreground"
                    required
                  />
                </div>
                <div className="px-4">
                  <label htmlFor="email" className="block text-sm font-medium text-muted-foreground mb-1">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    value={email}
                    onChange={(event) => setEmail(event.target.value)}
                    className="w-full px-3 py-2 border border-border/60 rounded-md shadow-sm focus:outline-none focus:ring-primary focus:border-primary bg-background text-foreground placeholder:text-muted-foreground"
                    required
                  />
                </div>
                <div className="px-4">
                  <label htmlFor="message" className="block text-sm font-medium text-muted-foreground mb-1">
                    Message
                  </label>
                  <textarea
                    id="message"
                    value={message}
                    onChange={(event) => setMessage(event.target.value)}
                    className="w-full px-3 py-2 border border-border/60 rounded-md shadow-sm focus:outline-none focus:ring-primary focus:border-primary bg-background text-foreground placeholder:text-muted-foreground"
                    rows={3}
                    required
                  />
                </div>
                <div className="relative flex h-12 items-center px-[10px]">
                  <PopoverFormSeparator />
                  <div className="absolute left-0 top-0 -translate-x-[1.5px] -translate-y-1/2">
                    <PopoverFormCutOutLeftIcon />
                  </div>
                  <div className="absolute right-0 top-0 translate-x-[1.5px] -translate-y-1/2 rotate-180">
                    <PopoverFormCutOutRightIcon />
                  </div>
                  <PopoverFormButton loading={formState === "loading"} text="Envoyer" />
                </div>
              </form>
            }
            successChild={
              <PopoverFormSuccess
                title="Message envoyé"
                description="Merci pour votre message. Je vous réponds rapidement."
              />
            }
          />
        </div>
      </BookSection>

      <Footer />
    </div>
  )
}
