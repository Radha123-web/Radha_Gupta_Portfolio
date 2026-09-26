"use client"

import clsx from "clsx"
import { Text } from "../ui/Elements"
import { AnimatedH2 } from "./ui/AnimatedH2"
import type { Variants } from "motion"
import { MotionDiv } from "../utils/lazy-ui"


import dynamic from "next/dynamic"

const GitHubCalendar = dynamic(
  () => import("react-github-calendar").then((mod) => mod.GitHubCalendar),
  {
    ssr: false,
    loading: () => (
      <div className="flex justify-center items-center h-32 text-slate-500">
        Loading contribution graph...
      </div>
    ),
  }
)

const GITHUB_USERNAME = "Radha123-web"

const stats = [
  {
    label: "Public Repositories",
    value: "30+",
    icon: "📦",
    color: "from-blue-500 to-cyan-500",
  },
  {
    label: "Total Contributions",
    value: "62",
    icon: "🔥",
    color: "from-green-500 to-emerald-500",
  },
  {
    label: "Active Projects",
    value: "10+",
    icon: "⚡",
    color: "from-purple-500 to-pink-500",
  },
  {
    label: "Open Source",
    value: "Active",
    icon: "🌟",
    color: "from-orange-500 to-red-500",
  },
]

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
}

const itemVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 30,
    scale: 0.9,
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.5,
      ease: [0.25, 0.46, 0.45, 0.94],
    },
  },
}

export const GitHubStats: React.FC = ({ className = "" }: { className?: string }) => {
  return (
<section
  id="github"
  className={clsx(
    "inside-container relative z-2 py-20 md:py-28  border-y border-gray-200",
    className
  )}
>
      <div className="flex flex-col items-center text-center">
        <AnimatedH2 className="mb-4">
          GitHub <br />
          <span className="text-slate-500">Activity</span>
        </AnimatedH2>

        <Text size="base" className="mb-12 max-w-2xl text-slate-600">
          Building in public, one commit at a time
        </Text>

        {/* Stats Cards */}
        <MotionDiv
          className="grid grid-cols-2 md:grid-cols-4 gap-6 w-full max-w-5xl mb-12"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "0px 0px -100px 0px" }}
        >
          {stats.map((stat, index) => (
            <MotionDiv
              key={index}
              variants={itemVariants}
              className="group relative bg-white rounded-2xl p-6 shadow-lg border border-gray-200 hover:shadow-2xl hover:-translate-y-2 transition-all duration-300"
            >
              {/* Gradient background on hover */}
              <div className={`absolute inset-0 bg-gradient-to-br ${stat.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300 rounded-2xl`} />

              <div className="relative z-10 flex flex-col items-center">
                <span className="text-4xl mb-3">{stat.icon}</span>
                <p className="text-3xl font-bold text-slate-900 mb-2">{stat.value}</p>
                <p className="text-sm text-slate-600">{stat.label}</p>
              </div>

              {/* Hover glow effect */}
              <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-500 to-purple-500 rounded-2xl opacity-0 group-hover:opacity-20 blur transition-opacity duration-300" />
            </MotionDiv>
          ))}
        </MotionDiv>

        {/* GitHub Contribution Calendar */}
        <MotionDiv
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "0px 0px -100px 0px" }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="w-full max-w-5xl"
        >
          <div className="bg-gray-50 rounded-2xl p-8 shadow-sm border border-gray-200 overflow-x-auto">
            <h3 className="text-xl font-bold text-slate-800 mb-6 text-left">Contribution Graph</h3>
            <GitHubCalendar
              username={GITHUB_USERNAME}
              colorScheme="light"
              fontSize={12}
              blockSize={13}
              blockMargin={4}
              theme={{
                light: ["#f0f9ff", "#bae6fd", "#38bdf8", "#0284c7", "#0369a1"],
              }}
            />
            <div className="mt-8 flex justify-center">
              <a
                href={`https://github.com/${GITHUB_USERNAME}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-slate-800 hover:bg-slate-900 text-white font-medium px-6 py-3 rounded-lg transition-all duration-300 hover:scale-105 hover:shadow-lg"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                </svg>
                View GitHub Profile
              </a>
            </div>
          </div>
        </MotionDiv>
      </div>
    </section>
  )
}
