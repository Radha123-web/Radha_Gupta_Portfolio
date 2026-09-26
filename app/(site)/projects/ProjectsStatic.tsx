import { StaticImageData } from "next/image"
import { Card } from "@/app/components/ProjectCard/Card"
import  TastyTrailPreview from "@/app/images/tastyTrail.png"
import CineNovaPreview from "@/app/images/cineNova.png"
import PaytmPreview from "@/app/images/paytm.png"
import TrendoraPreview from "@/app/images/Chroma.png"
import RestroManagePreview from "@/app/images/haldiram.png"
import BlogAppPreview from "@/app/images/blog.png"
import myProblemsPreview from "@/app/images/myproblems.png"
import jobSpiderPreview from "@/app/images/jobSpider.png"
import tallybuddyPreview from "@/app/images/tallybuddy.png"
import agentPreview from "@/app/images/ai-assistant.png"
import tubeAIPreview from "@/app/images/youtube.png"
import blogCreationPreview from "@/app/images/myblog.png"
import reaserchPreview from "@/app/images/reaserch.png"
import shayakPreview from "@/app/images/shayak.jpeg"
import { Link } from "@/app/utils/Link"
import { externalLinks, SITE_SLUGS } from "@/config/siteConfig"

type StaticProject = {
  id: string
  src: StaticImageData
  alt: string
  color?: string
  type: string
  text: string
  href: string
  dataText: string
  ariaLabel: string
  isExternal: boolean
}

export const STATIC_PROJECTS: StaticProject[] = [
  {
    id: "JobSpider",
    src: jobSpiderPreview,
    color: "#000000",
    alt: "JobSpider Preview",
    type: "Job Portal Web Application",
    text: "View  Website",
    href: externalLinks.jobspider,
    dataText: "View Live",
    ariaLabel: "View jobSpider Website",
    isExternal: true,
  },
  {
    id: "CineNova",
    src: CineNovaPreview,
    color: "#090979",
    alt: "CineNova Preview", 
    type: "AI-Based Movie Recommendation Platform",
    text: "View On Github",
    href: externalLinks.CineNova,
    dataText: "View On Github",
    ariaLabel: "See CineNova on Github",
    isExternal: false,
  },
 
  

   {
    id: "TallyBuddy",
    src: tallybuddyPreview,
    alt: "TallyBuddy Preview",
    color: "#14B8A6",
    type: "Inventory Management Software",
    text: "View Website",
    href: externalLinks.tallybuddy,
    dataText: "View Website",
    ariaLabel: "View TallyBuddy Website",
    isExternal: true,
  },
  {
    id: "TastyTrail",
    src: TastyTrailPreview,
    alt: "TastyTrail Preview",
    // color: "#DA961AA5",
    color:"#FC8019",
    type: "Online Food & Grocery Delivery Platform",
    text: "View On Github",
    href: SITE_SLUGS.projectLinks.tastyTrail,
    dataText: "View On Github",
    ariaLabel: "View TastyTrail on Github",
    isExternal: false,
  },
  {
    id: "BlogApp",
    src: BlogAppPreview,
    alt: "BlogApp Preview",
    color: "#F8FAFC",
    type: " Blog Management & Publishing System",
    text: "View on github",
    href: SITE_SLUGS.projectLinks.blogApp,
    dataText: "View On github",
    ariaLabel: "View BlogApp on github",
    isExternal: false,
  },

  {
    id: "MyProblems",
    src: myProblemsPreview,
    alt: "MyProblems.Com Preview",
    color: "#059669",
    type: "Civic Complaint Management Platform",
    text: "View Case Study",
    href: SITE_SLUGS.projectLinks.myproblems,
    dataText: "View Case Study",
    ariaLabel: "View MyProblems.Com Case Study",
    isExternal: false,
  },

  

  {
    id: "AtomicPay",
    src: PaytmPreview,
    alt: "AtomicPay Preview",
    color: "#3B06D1A5",
    type: "P2P Digital Wallet System",
    text: "View on GitHub",
    href: externalLinks.AtomicPay,
    dataText: "View on GitHub",
    ariaLabel: "View AtomicPay on GitHub",
    isExternal: true,
  },
  {
    id: "RestroManage",
    src: RestroManagePreview,
    alt: "RestroManage Preview",
    color: "#e8944bff",
    type: "Restaurant Management App",
    text: "View On Github",
    href: externalLinks.Restromanage,
    dataText: "View On Github",
    ariaLabel: "View RestroManage on Github",
    isExternal: true,
  },


   {
    id: "Trendora",
    src: TrendoraPreview,
     color: "#13739C",
    alt: "Trendora Preview",
    type: "A Modern Electronics Shopping App",
    text: "View On github",
    href: externalLinks.Chroma,
    dataText: "View On Github",
    ariaLabel: "View Trendora Website",
    isExternal: true,
  },
  {
    id: "Relay",
    src: agentPreview,
    color: "#6366F1",
    alt: "Relay Preview",
    type: "Intelligent AI Agent",
    text: "View On Github",
    href: "https://github.com/Radha123-web/langchain-agent",
    dataText: "View On Github",
    ariaLabel: "View Relay on Github",
    isExternal: true,
  },
  {
    id: "TubeTalk",
    src: tubeAIPreview,
    color: "#FF0000",
    alt: "TubeTalk AI Preview",
    type: "TubeTalk AI",
    text: "View On Github",
    href: "https://github.com/Radha123-web/youtube-rag",
    dataText: "View On Github",
    ariaLabel: "View TubeTalk AI on Github",
    isExternal: true,
  },
  {
    id: "BlogAgent",
    src: blogCreationPreview,
    color: "#0EA5E9",
    alt: "Autonomous AI Research & Content Agent Preview",
    type: "Autonomous AI Research & Content Agent",
    text: "View On Github",
    href: "https://github.com/Radha123-web/blog-writing-agent",
    dataText: "View On Github",
    ariaLabel: "View Blog Writing Agent on Github",
    isExternal: true,
  },
  {
    id: "PromptCraft",
    src: reaserchPreview,
    color: "#7C3AED",
    alt: "PromptCraft AI Preview",
    type: "PromptCraft AI – Research Paper Explainer",
    text: "View On Github",
    href: "https://github.com/Radha123-web/langchain-models/blob/main/Prompt/prompt_ui.py",
    dataText: "View On Github",
    ariaLabel: "View PromptCraft AI on Github",
    isExternal: true,
  },
  {
    id: "Sahayak",
    src: shayakPreview,
    color: "#10B981",
    alt: "Sahayak Preview",
    type: "Sahayak – Intelligent AI Assistant",
    text: "View On Github",
    href: "https://github.com/Radha123-web/Shayak",
    dataText: "View On Github",
    ariaLabel: "View Sahayak on Github",
    isExternal: true,
  },
]

export const ProjectsStatic: React.FC = () => {
  return (
    <section className="border-t border-slate-200">
      <div className="inside-container-small">
        <div className="relative z-4 grid grid-cols-1 grid-rows-1 gap-4 md:grid-cols-2 md:grid-rows-2">
          {STATIC_PROJECTS.map((project) => {
            const ProjectWrapper = project.isExternal ? "a" : Link
            const wrapperProps = project.isExternal
              ? {
                  href: project.href,
                  target: "_blank",
                  rel: "noopener",
                  "data-text": project.dataText,
                  "aria-label": project.ariaLabel,
                }
              : {
                  href: project.href,
                  "data-text": project.dataText,
                  "aria-label": project.ariaLabel,
                  prefetch: true,
                }

            return (
              <ProjectWrapper key={project.id} {...wrapperProps}>
                <Card src={project.src} alt={project.alt} color={project.color} type={project.type} reveal={false} text={project.text} />
              </ProjectWrapper>
            )
          })}
        </div>
      </div>
    </section>
  )
}
