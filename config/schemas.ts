import { ProjectData } from "@/app/data/project-data"
import { DOMAIN_URL, SITE_CONFIG, SITE_NAP, SITE_SLUGS, externalLinks } from "./siteConfig"
import type { Graph, ItemList } from "schema-dts"
interface ProjectItem {
  name: string
  url: string // your case-study URL (internal) OR absolute external URL
  date: string
  description: string
  external?: string // when you host the case study, put the client URL here
  type?: "SoftwareSourceCode" | "SoftwareApplication" | "WebSite" | "WebApplication" | "CreativeWork"
}

// Project data for schema
const projectsData: ProjectItem[] = [
  {
    name: "JobSpider",
    url: externalLinks.jobspider, 
    date: "2025-06-01",
    description: "Job Portal Web Application",
    type: "WebSite",
  },
  {
    name: "CineNova",
    url: externalLinks.CineNova, 
    date: "2025-03-11",
    description: "AI-Based Movie Recommendation Platform",
    type: "WebSite",
  },

  {
    name: "TallyBuddy",
    url: externalLinks.tallybuddy, 
    date: "2024-12-02",
    description: "Inventory Management Software",
    type: "WebSite",
  },
  {
    name: "TastyTrail",
    url: SITE_SLUGS.projectLinks.tastyTrail,
    date: "2024-06-15",
    description: "Online Food & Grocery Delivery Platform",
    type: "WebSite",
  },
  {
    name: "BlogApp",
    url: SITE_SLUGS.projectLinks.blogApp, // external canonical
    date: "2025-05-20",
    description: "Blog Management & Publishing System",
    type: "WebSite",
  },
  {
    name: "AtomicPay",
    url: externalLinks.AtomicPay, // external canonical
    date: "2025-05-20",
    description: "P2P Digital Wallet System",
    type: "WebApplication",
  },
  {
    name: "FoodFly",
    url: externalLinks.CineNova, // external canonical
    date: "2024-12-02",
    description: "Food Delivery App",
    type: "WebApplication",
  },
  {
    name: "RestroManage",
    url: externalLinks.Restromanage, // external canonical
    date: "2024-06-15",
    description: "Restaurant Management App",
    type: "SoftwareApplication",
  },
  {
    name: "Trendora",
    url: externalLinks.Chroma, // external canonical
    date: "2024-02-10",
    description: "Event Management Web App",
    type: "WebApplication",
  },
]

const SITE = DOMAIN_URL.replace(/\/$/, "")

const imgSrc = (x?: { src?: string } | string) => (typeof x === "string" ? x : x?.src)

export function buildProjectGraphMinimal(slug: string, pd: ProjectData, type = "CreativeWork" as const): Graph {
  const id = `${SITE}${SITE_SLUGS.projects}/${slug}`
  const title = typeof pd.hero.title === "string" ? pd.hero.title : "Case Study"
  const description = typeof pd.hero.description === "string" ? pd.hero.description : undefined
  const image = imgSrc(pd.beforeAfter?.heroAfter) || imgSrc(pd.beforeAfter?.heroBefore)

  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": type,
        "@id": id,
        url: id,
        name: title,
        ...(description ? { description } : {}),
        ...(image ? { image } : {}),
        ...(pd.hero.link ? { sameAs: [pd.hero.link] } : {}),
        mainEntityOfPage: id,
        isPartOf: { "@id": `${SITE}${SITE_SLUGS.projects}#page` },
        author: { "@id": `${SITE}/#Radha Guptarb` },
        publisher: { "@id": `${SITE}#org` },
        inLanguage: "en",
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: SITE },
          { "@type": "ListItem", position: 2, name: "Projects", item: `${SITE}${SITE_SLUGS.projects}` },
          { "@type": "ListItem", position: 3, name: title, item: id },
        ],
      },
    ],
  }
}

const itemList: ItemList = {
  "@type": "ItemList",
  "@id": `${SITE}${SITE_SLUGS.projects}#list`,
  itemListOrder: "Descending",
  numberOfItems: projectsData.length,
  itemListElement: projectsData.map((p, i) => ({
    "@type": "ListItem",
    position: i + 1,
    item: { "@id": p.url.startsWith("/") ? `${SITE}${p.url}` : p.url },
  })),
}

// 2) Include the ItemList node inside @graph, then reference it from CollectionPage.mainEntity
export const projectsGraph: Graph = {
  "@context": "https://schema.org",
  "@graph": [
    itemList,
    {
      "@type": "CollectionPage",
      "@id": `${SITE}${SITE_SLUGS.projects}#page`,
      url: `${SITE}${SITE_SLUGS.projects}`,
      name: "Projects - Austin Serb",
      isPartOf: { "@id": `${SITE}#website` },
      mainEntity: { "@id": `${SITE}${SITE_SLUGS.projects}#list` }, // <-- REFERENCES ABOVE
      mainEntityOfPage: `${SITE}${SITE_SLUGS.projects}`,
      inLanguage: "en",
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: SITE },
        { "@type": "ListItem", position: 2, name: "Projects", item: `${SITE}${SITE_SLUGS.projects}` },
      ],
    },
  ],
}

export const homeGraph = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": `${SITE}#home`,
      url: SITE,
      name: SITE_CONFIG.title,
      isPartOf: { "@id": `${SITE}#website` },
      mainEntityOfPage: SITE,
      mainEntity: {
        "@type": "ItemList",
        name: "Featured projects",
        itemListElement: projectsData.slice(0, 4).map((p, i) => ({
          "@type": "ListItem",
          position: i + 1,
          item: { "@id": p.url.startsWith("/") ? `${SITE}${p.url}` : p.url }, // reference-only
        })),
      },
      inLanguage: "en",
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [{ "@type": "ListItem", position: 1, name: "Home", item: SITE }],
    },
  ],
}

export const siteGraph = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": `${SITE}#org`,
      name: "Serbyte Development",
      url: SITE,
      logo: { "@id": `${SITE}#logo` },
      sameAs: Object.values(SITE_NAP.profiles),
      contactPoint: [
        {
          "@type": "ContactPoint",
          contactType: "Hiring",
          email: `mailto:${SITE_NAP.email}`,
          areaServed: "US",
          availableLanguage: ["en"],
        },
      ],
    },
    {
      "@type": "Person",
      "@id": `${SITE}/#Radha Guptarb`,
      name: "Austin Serb",
      url: SITE,
      jobTitle: "Full-Stack Engineer",
      image: { "@id": `${SITE}#headshot` },
      worksFor: { "@id": `${SITE}#org` },
      sameAs: Object.values(SITE_NAP.profiles),
      email: SITE_NAP.email,
    },
    {
      "@type": "WebSite",
      "@id": `${SITE}#website`,
      url: SITE,
      name: "Austin Serb - Developer Portfolio",
      publisher: { "@id": `${SITE}#org` },
      inLanguage: "en",
    },
    { "@type": "ImageObject", "@id": `${SITE}#headshot`, url: `${SITE}/profile.jpg` },
    { "@type": "ImageObject", "@id": `${SITE}#logo`, url: `${SITE}/serbyte-logo.png` },
  ],
}
