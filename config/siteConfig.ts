export const DOMAIN_URL = "https://www.austinserb.com"

export const SITE_CONFIG = {
  title: "Radha Gupta - Mern Stack  Developer| Portfolio ",
  description: "Portfolio of Radha Gupta,  full-stack engineer. Specializing in Node.js, React, TypeScript, and Tailwind CSS.",
  url: DOMAIN_URL ?? "http://localhost:3000",
  siteName: "Radha Gupta",
  keywords: ["Radha Gupta", "Next.js", "React", "TypeScript", "Full-Stack Developer", "Gwalior", "React Native", "JavaScript", "Node.js", "Material UI", "MySQL", "Redux", "Tailwind CSS"],
  ogImage: "/assets/bg-home-poster-optimized.webp",
  logo: "/serbyte-logo.png",
} as const

export const SITE_NAP = {
  name: "Radha Gupta",
  googleBusinessType: "LocalBusiness" as const,
  contact: "Radha Gupta",
  contactTitle: "Full-Stack Developer",
  email: "radhag1879@gmail.com",
  phone: "+91  8718046596",
  formattedPhone: "+91  8718046596",
  addressLink: "https://www.google.com/maps/search/?api=1&query=serbyte+development",
  street: "12601 NE 124th ST",
  city: "Gwalior",
  state: "Madhya Pradesh",
  zipCode: "474001",
  country: "India",
  googleReviewLink: "https://g.page/r/CXHVs1ony_76EAI/review",
  profiles: {
    facebook: "https://www.facebook.com/serbytedevelopment/",
    linkedIn: "https://www.linkedin.com/in/radha-gupta-7500482a8/",
    github: "https://github.com/Radha123-web/",
    
  } as const,
  logo: "/serbyte-logo.png",
  favicon: "/favicon.ico",
  images: ["https://www.serbyte.net/serbyte-logo.png", "https://www.serbyte.net/assets/bg-home-poster-optimized.webp"],
} as const

export const SITE_SLUGS = {
  home: "/",
  projects: "/projects",
  contact: "/#contact",
  about: "/#about-Radha Gupta",
  projectLinks: {
    tastyTrail: "https://github.com/Radha123-web/swiggy_project",
    blogApp: "https://github.com/Radha123-web/blog-app",
    iao: "https://iao-seattle.vercel.app/?src=serbyte",
    myproblems: "/projects/myproblems",
  },
} as const

export const externalLinks = {
  tallybuddy: "https://tallybuddy.in/",
  CineNova: "https://github.com/Radha123-web/netflix_gpt",
  jobspider: "https://jobspider-frontend.vercel.app/",
  Restromanage: "https://github.com/Radha123-web/foodprojectbackend-",
  AtomicPay: "https://github.com/Radha123-web/paytmMonorepo", 
  Chroma: "https://github.com/Radha123-web/", 
} as const

const flattenSlugs = (obj: Record<string, string | Record<string, string>>): string[] => {
  return Object.values(obj).flatMap((value) => (typeof value === "string" ? [value] : flattenSlugs(value)))
}

export const ALL_PAGES: string[] = Object.values(SITE_SLUGS).flatMap((value) => (typeof value === "string" ? [value] : flattenSlugs(value)))
