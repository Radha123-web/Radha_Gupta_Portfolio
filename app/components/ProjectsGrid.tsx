// "use client"
// import { AnimatedCard, HeroOffset } from "./ProjectCard/AnimatedCard"
// import jobSpiderPreview from "@/app/images/jobSpider.png"
// import tallybuddyPreview from "@/app/images/tallybuddy.png"
// import CineNovaPreview from "@/app/images/cineNova.png"
// import TrendoraPreview from "@/app/images/Chroma.png"
// import clsx from "clsx"
// import { useOffset } from "../hooks/useOffset"
// import { useIsMobile } from "../hooks/useMediaQuery"
// import { useRef, useEffect } from "react"
// import { useScroll, useSpring } from "motion/react"
// import { useUI } from "@react-zero-ui/core"
// import { externalLinks } from "@/config/siteConfig"

// const ids = ["jobspider", "tallybuddy", "cinenova", "trendora"]

// export function ProjectsGrid({ className }: { className?: string }) {
//   const ref = useRef<HTMLDivElement>(null)
//   const rawOffsets = useOffset(ids)
//   const isSmallScreen = useIsMobile(576)
//   const isMobile = useIsMobile()
//   const responsiveScale = isMobile ? 0.34 : 0.8
//   const [, setReveal] = useUI<"true" | "false">("reveal", "false")

//   const { scrollYProgress } = useScroll({
//     offset: isMobile ? ["start start", "10% start"] : ["start start", "15% start"],
//   })
//   const stiffness = isMobile ? 120 : 220
//   const damping = isMobile ? 50 : 90

//   const progress = useSpring(scrollYProgress, { stiffness, damping })

//   const OFFSET_TUNING: Record<string, Partial<HeroOffset>> = {
//     jobspider: { rot: 9, s: responsiveScale, dx: isMobile ? -220 : -30, dy: isMobile ? -120 : -40 },
//     tallybuddy: { rot: -5, s: responsiveScale, dx: isMobile ? -230 : -60, dy: isMobile ? -130 : -40 },
//     cinenova: { rot: 5, s: responsiveScale, dx: isMobile ? -225 : -45, dy: isMobile ? -130 : -25 },
//     trendora: { rot: 12, s: responsiveScale, dx: isMobile ? -230 : -50, dy: isMobile ? -110 : -10 },
//   }

//   const offsets = Object.fromEntries(
//     ids.map((id) => {
//       const base = rawOffsets[id]
//       const t = OFFSET_TUNING[id]
//       return [
//         id,
//         {
//           x: base.x! + t.dx!,
//           y: base.y! + t.dy!,
//           rot: t.rot!,
//           s: t.s ?? 1,
//         },
//       ]
//     })
//   )

//   const triggerProgress = isMobile ? (isSmallScreen ? 0.15 : 0.2) : 0.5
//   useEffect(() => {
//     const unsubscribe = progress.on("change", (latest) => {
//       if (latest >= triggerProgress) {
//         setReveal("true") // Reveal ON
//       } else {
//         setReveal("false") // Reveal OFF
//       }
//     })

//     return unsubscribe
//   }, [progress, setReveal, triggerProgress])
//   return (
//     <section id="projects-grid" className={clsx("relative scroll-mt-36", className)} ref={ref}>
//       <div className="relative z-4 grid grid-cols-1 gap-6 md:grid-cols-2 auto-rows-fr">
//         <AnimatedCard
//           key="JobSpider"
//           src={jobSpiderPreview}
//           alt="JobSpider Preview"
//           offset={offsets["jobspider"]}
//           gridId="jobspider"
//           color="#000000"
//           type="Job Portal Web Application"
//           progress={progress}
//           href={externalLinks.jobspider}
//           dataText="View Live"
//         />
//         <AnimatedCard
//           key="TallyBuddy"
//           src={tallybuddyPreview}
//           alt="TallyBuddy Preview"
//           offset={offsets["tallybuddy"]}
//           gridId="tallybuddy"
//           color="#14B8A6"
//           type="Inventory Management Software"
//           progress={progress}
//           href={externalLinks.tallybuddy}
//           dataText="View Website"
//         />
//         <AnimatedCard
//           key="CineNova"
//           src={CineNovaPreview}
//           alt="CineNova Preview"
//           offset={offsets["cinenova"]}
//           gridId="cinenova"
//           color="#090979"
//           type="AI-Based Movie Recommendation Platform"
//           progress={progress}
//           href={externalLinks.CineNova}
//           dataText="View On Github"
//         />
//         <AnimatedCard
//           key="Trendora"
//           src={TrendoraPreview}
//           alt="Trendora Preview"
//           offset={offsets["trendora"]}
//           gridId="trendora"
//           color="#13739C"
//           type="A Modern Electronics Shopping App"
//           progress={progress}
//           href={externalLinks.Chroma}
//           dataText="View  On Github"
//         />
//       </div>
//     </section>
//   )
// }

"use client"

import { AnimatedCard, HeroOffset } from "./ProjectCard/AnimatedCard"
import jobSpiderPreview from "@/app/images/jobSpider.png"
import tallybuddyPreview from "@/app/images/tallybuddy.png"
import CineNovaPreview from "@/app/images/cineNova.png"
import PaytmPreview from "@/app/images/paytm.png"
import clsx from "clsx"
import { useOffset } from "../hooks/useOffset"
import { useRef, useEffect } from "react"
import { useScroll, useSpring } from "motion/react"
import { useUI } from "@react-zero-ui/core"
import { externalLinks } from "@/config/siteConfig"

const ids = ["jobspider", "tallybuddy", "cinenova", "atomicpay"]

export function ProjectsGrid({ className }: { className?: string }) {
  const ref = useRef<HTMLDivElement>(null)
  const rawOffsets = useOffset(ids)
  const [, setReveal] = useUI<"true" | "false">("reveal", "false")

  const { scrollYProgress } = useScroll({
    offset: ["start start", "15% start"],
  })

  const progress = useSpring(scrollYProgress, {
    stiffness: 200,
    damping: 80,
  })

  
  const OFFSET_TUNING: Record<string, HeroOffset> = {
    jobspider: { x: 0, y: 0, rot: 6, dx: 0, dy: -10, s: 1 },
    tallybuddy: { x: 0, y: 0, rot: -6, dx: 0, dy: -10, s: 1 },
    cinenova: { x: 0, y: 0, rot: 6, dx: 0, dy: -10, s: 1 },
    atomicpay: { x: 0, y: 0, rot: 6, dx: 0, dy: -10, s: 1 },
  }

  const offsets = Object.fromEntries(
    ids.map((id) => {
      const base = rawOffsets[id]
      const t = OFFSET_TUNING[id]

      return [
        id,
        {
          x: (base?.x ?? 0) + (t.dx ?? 0),
          y: (base?.y ?? 0) + (t.dy ?? 0),
          rot: t.rot,
          s: t.s,
        },
      ]
    })
  )

  useEffect(() => {
    const unsub = progress.on("change", (v) => {
      setReveal(v > 0.4 ? "true" : "false")
    })
    return unsub
  }, [progress, setReveal])

  return (
    <section
      id="projects-grid"
      ref={ref}
      className={clsx("relative scroll-mt-36", className)}
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 place-items-center">
        <AnimatedCard
          src={jobSpiderPreview}
          alt="JobSpider Preview"
          offset={offsets.jobspider}
          gridId="jobspider"
          color="#000000"
          type="Job Portal Web Application"
          progress={progress}
          href={externalLinks.jobspider}
          dataText="View Live"
        />

      

        <AnimatedCard
          src={CineNovaPreview}
          alt="CineNova Preview"
          offset={offsets.cinenova}
          gridId="cinenova"
          color="#090979"
          type="AI-Based Movie Recommendation Platform"
          progress={progress}
          href={externalLinks.CineNova}
          dataText="View on GitHub"
        />
          <AnimatedCard
          src={tallybuddyPreview}
          alt="TallyBuddy Preview"
          offset={offsets.tallybuddy}
          gridId="tallybuddy"
          color="#14B8A6"
          type="Inventory Management Software"
          progress={progress}
          href={externalLinks.tallybuddy}
          dataText="View Website"
        />

        <AnimatedCard
          src={PaytmPreview}
          alt="AtomicPay Preview"
          offset={offsets.atomicpay}
          gridId="atomicpay"
          color="#3B06D1A5"
          type="Modern P2P Digital Wallet System"
          progress={progress}
          href={externalLinks.AtomicPay}
          dataText="View on GitHub"
        />
      </div>
    </section>
  )
}
