"use client"

import clsx from "clsx"
import { Text } from "../ui/Elements"
import { AnimatedH2 } from "./ui/AnimatedH2"
import type { Variants } from "motion"
import { MotionDiv } from "../utils/lazy-ui"
import { useState, useEffect, useRef } from "react"

// Icon components
const icons = {
  frontend: (
    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
      <path d="M20 3H4c-1.103 0-2 .897-2 2v14c0 1.103.897 2 2 2h16c1.103 0 2-.897 2-2V5c0-1.103-.897-2-2-2zM4 19V7h16l.002 12H4z" />
      <path d="M9.293 12.707l1.414-1.414L8.586 9.172 7.172 10.586l2.121 2.121zm5.414-1.414l1.414 1.414L18.242 10.586 16.828 9.172l-2.121 2.121z" />
    </svg>
  ),
  backend: (
    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
      <path d="M20 3H4c-1.103 0-2 .897-2 2v14c0 1.103.897 2 2 2h16c1.103 0 2-.897 2-2V5c0-1.103-.897-2-2-2zm-1 4v2h-5V7h5zm-5 4h5v2h-5v-2zM4 19V5h7v14H4z" />
    </svg>
  ),
  database: (
    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
      <path d="M12 2C6.486 2 2 3.343 2 5v14c0 1.657 4.486 3 10 3s10-1.343 10-3V5c0-1.657-4.486-3-10-3zm8 15c0 .84-3.582 1.5-8 1.5S4 17.84 4 17v-2.293c1.663.864 4.388 1.293 8 1.293s6.337-.429 8-1.293V17zm0-5c0 .84-3.582 1.5-8 1.5S4 12.84 4 12V9.707c1.663.864 4.388 1.293 8 1.293s6.337-.429 8-1.293V12zm0-5c0 .84-3.582 1.5-8 1.5S4 7.84 4 7V5c0-.84 3.582-1.5 8-1.5s8 .66 8 1.5v2z" />
    </svg>
  ),
  aiml: (
    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
      <path d="M17.5 2c.276 0 .5.224.5.5v19c0 .276-.224.5-.5.5h-11c-.276 0-.5-.224-.5-.5v-19c0-.276.224-.5.5-.5h11m0-2h-11C5.122 0 4 1.121 4 2.5v19C4 22.879 5.122 24 6.5 24h11c1.378 0 2.5-1.121 2.5-2.5v-19C20 1.121 18.878 0 17.5 0z" />
      <circle cx="12" cy="6" r="1.5" />
      <circle cx="12" cy="12" r="1.5" />
      <circle cx="12" cy="18" r="1.5" />
    </svg>
  ),
}

const topSkills = [
  { name: "MongoDB", level: 80, color: "#47A248", icon: "🍃" },
  { name: "Express.js", level: 85, color: "#000000", icon: "⚡" },
  { name: "React.js", level: 90, color: "#61DAFB", icon: "⚛️" },
  { name: "Node.js", level: 85, color: "#339933", icon: "🟢" },
  { name: "Next.js", level: 85, color: "#000000", icon: "▲" },
  { name: "TypeScript", level: 80, color: "#3178C6", icon: "📘" },
]

const skillCategories = [
  {
    title: "Frontend (MERN)",
    icon: icons.frontend,
    color: "from-blue-500 to-cyan-500",
    skills: ["React.js", "Next.js", "Redux", "TypeScript", "Tailwind CSS", "Material UI"],
  },
  {
    title: "Backend (MERN)",
    icon: icons.backend,
    color: "from-green-500 to-emerald-500",
    skills: ["Node.js", "Express.js", "REST APIs", "JWT Auth", "Middleware", "Socket.io"],
  },
  {
    title: "Database (MERN)",
    icon: icons.database,
    color: "from-purple-500 to-pink-500",
    skills: ["MongoDB", "Mongoose", "MySQL", "Firebase", "Redis", "Aggregation"],
  },
  {
    title: "AI & Tools",
    icon: icons.aiml,
    color: "from-orange-500 to-red-500",
    skills: ["LangChain", "LangGraph", "OpenAI API", "RAG Systems", "Git/GitHub", "Postman"],
  },
]

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.3,
    },
  },
}

const itemVariants: Variants = {
  hidden: {
    opacity: 0,
    scale: 0.8,
    rotateY: -15,
  },
  visible: {
    opacity: 1,
    scale: 1,
    rotateY: 0,
    transition: {
      duration: 0.6,
      ease: [0.25, 0.46, 0.45, 0.94],
    },
  },
}

const CircularProgress = ({ name, level, color, icon, delay }: { name: string; level: number; color: string; icon: string; delay: number }) => {
  const [progress, setProgress] = useState(0)
  const [isVisible, setIsVisible] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  const radius = 45
  const circumference = 2 * Math.PI * radius
  const offset = circumference - (progress / 100) * circumference

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isVisible) {
          setIsVisible(true)
          setTimeout(() => {
            setProgress(level)
          }, delay)
        }
      },
      { threshold: 0.3 }
    )

    if (ref.current) {
      observer.observe(ref.current)
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current)
      }
    }
  }, [level, delay, isVisible])

  return (
     <div
    ref={ref}
   className="flex flex-col items-center group rounded-2xl bg-white border border-gray-200 p-6 transition-all duration-300 hover:shadow-lg hover:-translate-y-2"
  >
      <div className="relative w-32 h-32 mb-3">
        {/* Background circle */}
        <svg className="transform -rotate-90 w-32 h-32">
          <circle cx="64" cy="64" r={radius} stroke="#e5e7eb" strokeWidth="8" fill="none" />
          <circle
            cx="64"
            cy="64"
            r={radius}
            stroke={color}
            strokeWidth="8"
            fill="none"
            strokeDasharray={circumference}
            strokeDashoffset={offset}
            strokeLinecap="round"
            className="transition-all duration-1000 ease-out"
            style={{
              filter: `drop-shadow(0 0 6px ${color}80)`,
            }}
          />
        </svg>
        {/* Center content */}
        <div className="absolute inset-0 flex flex-col items-center justify-center">
          <span className="text-3xl mb-1">{icon}</span>
          <span className="text-xl font-bold text-slate-800">{progress}%</span>
        </div>
      </div>
      <span className="text-sm font-semibold text-slate-700 text-center group-hover:text-slate-900 transition-colors">{name}</span>
    </div>
  )
}

export const SkillsSection: React.FC = ({ className = "" }: { className?: string }) => {
  return (
<section
  id="skills"
  className={clsx(
    "inside-container relative z-2 py-20 md:py-28  border-y border-gray-200",
    className
  )}
>
  <div className="relative z-10">
        <div className="flex flex-col items-center text-center mb-16">
          <AnimatedH2 className="mb-4">
            Technical <br />
            <span className="text-slate-500">Skills & Expertise</span>
          </AnimatedH2>

          <Text size="base" className="max-w-2xl text-slate-600">
            Full-stack MERN developer with expertise in building scalable web applications and AI-powered solutions
          </Text>
        </div>

        {/* Top Skills - Circular Progress */}
        <div className="mb-20">
          <h3 className="text-2xl font-bold text-center text-slate-800 mb-12">Core Technologies</h3>
          <MotionDiv
            className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 max-w-6xl mx-auto"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "0px 0px -100px 0px" }}
          >
            {topSkills.map((skill, index) => (
              <MotionDiv key={skill.name} variants={itemVariants}>
                <CircularProgress {...skill} delay={index * 100} />
              </MotionDiv>
            ))}
          </MotionDiv>
        </div>

        {/* Skill Categories - Card Grid */}
        <div>
          <h3 className="text-2xl font-bold text-center text-slate-800 mb-12">Technology Stack</h3>
          <MotionDiv
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "0px 0px -100px 0px" }}
          >
            {skillCategories.map((category, index) => (
              <MotionDiv
                key={category.title}
                variants={itemVariants}
 className="group relative rounded-2xl p-6 bg-white border border-gray-200 shadow-md hover:shadow-xl hover:-translate-y-2 transition-all duration-300 overflow-hidden"
              >
                {/* Gradient background on hover */}
                <div className={`absolute inset-0 bg-gradient-to-br ${category.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300`} />

                <div className="relative z-10">
                  {/* Icon header */}
                  <div className="flex items-center gap-3 mb-6">
                    <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${category.color} flex items-center justify-center text-white shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                      {category.icon}
                    </div>
                    <h4 className="text-lg font-bold text-slate-800 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:bg-clip-text group-hover:from-blue-600 group-hover:to-purple-600 transition-all duration-300">
                      {category.title}
                    </h4>
                  </div>

                  {/* Skills list */}
                  <ul className="space-y-2">
                    {category.skills.map((skill, skillIndex) => (
                      <li
                        key={skillIndex}
                        className="flex items-center gap-2 text-sm text-slate-600 group-hover:text-slate-800 transition-colors duration-200"
                        style={{
                          animationDelay: `${skillIndex * 50}ms`,
                        }}
                      >
                        <span className="w-1.5 h-1.5 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 group-hover:scale-150 transition-transform duration-200" />
                        {skill}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Corner decoration */}
                <div className="absolute -top-8 -right-8 w-24 h-24 bg-gradient-to-br from-blue-500/10 to-purple-500/10 rounded-full blur-2xl group-hover:scale-150 transition-transform duration-500" />
              </MotionDiv>
            ))}
          </MotionDiv>
        </div>
      </div>
     
    </section>
  )
}
