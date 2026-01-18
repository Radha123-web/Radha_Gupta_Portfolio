import SimpleProjectDisplay from "@/app/components/ProjectSection/SimpleProjectDisplay"
import { myProblems } from "@/app/data/project-data"
import { Metadata } from "next"
import { SITE_SLUGS } from "@/config/siteConfig"

export const metadata: Metadata = {
  title: "MyProblems.Com - Civic Complaint Management Platform | Radha Gupta",
  description: "Full-stack web application built with Node.js, Express.js, and MongoDB for streamlining civic complaint management between residents and municipal officials.",
  keywords: ["Radha Gupta", "MyProblems.Com", "Node.js", "Express.js", "MongoDB", "Full-Stack Development", "Civic Tech", "College Project"],
  alternates: {
    canonical: SITE_SLUGS.projectLinks.myproblems,
  },
}

export default function MyProblemsPage() {
  return <SimpleProjectDisplay projectData={myProblems} />
}