"use client"

import clsx from "clsx"
import { Text } from "../ui/Elements"
import { AnimatedH2 } from "./ui/AnimatedH2"
import type { Variants } from "motion"
import { MotionDiv } from "../utils/lazy-ui"

const experienceData = [
  {
    position: "Software Developer",
    company: "SHASHANK SOLUTION",
    type: "Internship",
    duration: "Feb 2025 - May 2025",
    location: "On-site"
  },
  {
    position: "Software Developer Engineer",
    company: "Numeric Infosystem Pvt ltd", 
    type: "Internship",
    duration: "Present",
    location: "On-site"
  },
  {
    position: "Software Developer Engineer",
    company: "Freelance",
    type: "Full Time", 
    duration: "Aug 2025 -Nov 2025",
    location: "On-site"
  }
]

const leftVariant: Variants = {
  hidden: {
    opacity: 0,
    x: -60,
    filter: "blur(6px)",
  },
  visible: {
    opacity: 1,
    x: 0,
    filter: "blur(0px)",
    transition: {
      duration: 0.8,
      ease: [0.25, 0.46, 0.45, 0.94],
    },
  },
}

const rightVariant: Variants = {
  hidden: {
    opacity: 0,
    x: 60,
    scale: 0.9,
    filter: "blur(6px)",
  },
  visible: {
    opacity: 1,
    x: 0,
    scale: 1,
    filter: "blur(0px)",
    transition: {
      duration: 0.8,
      ease: [0.25, 0.46, 0.45, 0.94],
      delay: 0.2,
    },
  },
}

export const ProfessionalExperience: React.FC = ({ className = "" }: { className?: string }) => {
  return (
    <section id="experience" className={clsx("inside-container relative z-2 py-20 md:py-28", className)}>
      <div className="flex flex-col items-center mb-16">
        <AnimatedH2 className="mb-4 text-center">
          Professional <br />
          <span className="text-slate-500">Experience</span>
        </AnimatedH2>
        
        <Text size="base" className="max-w-2xl text-center">
          My professional journey in software development
        </Text>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
        {/* Left Side - Experience List */}
        <MotionDiv
          variants={leftVariant}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "0px 0px -100px 0px" }}
          className="space-y-6"
        >
          {experienceData.map((exp, index) => (
            <div key={index} className="border-l-4 border-slate-400 pl-6 pb-6">
              <h3 className="text-lg font-semibold text-slate-900 mb-2">
                {exp.position}
              </h3>
              
              <p className="text-slate-700 font-medium mb-3">
                {exp.company}
              </p>
              
              <div className="space-y-2 text-sm text-slate-600">
                <p className="flex items-center gap-2">
                  <svg className="w-4 h-4 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                  {exp.duration}
                </p>
                <p className="flex items-center gap-2">
                  <svg className="w-4 h-4 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  {exp.location}
                </p>
                <div className="pt-1">
                  <span className="bg-slate-100 text-slate-700 px-2 py-1 rounded-full text-xs font-medium">
                    {exp.type}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </MotionDiv>

        {/* Right Side - Resume Card */}
        <MotionDiv
          variants={rightVariant}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "0px 0px -100px 0px" }}
          className="lg:sticky lg:top-8"
        >
          <div className="bg-white rounded-xl shadow-lg border border-gray-200 overflow-hidden hover:shadow-xl transition-all duration-300 hover:scale-[1.02] w-64 mx-auto">
            <div className="relative p-6 text-center">
              {/* Simple Icon */}
              <div className="w-16 h-16 bg-slate-800 rounded-full flex items-center justify-center mb-4 mx-auto transition-colors duration-300 hover:bg-slate-900 shadow-lg">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </div>
              
              {/* Simple Title */}
              <h3 className="text-lg font-semibold text-slate-900 mb-2">
                My Resume
              </h3>
              
              <p className="text-sm text-slate-600 mb-6">
                Complete professional profile with experience & skills
              </p>
              
              {/* Simple Download Button */}
              <button
                onClick={() => {
                  const link = document.createElement('a');
                  link.href = '/resume.pdf';
                  link.download = 'Radha_Gupta_Resume.pdf';
                  link.target = '_blank';
                  document.body.appendChild(link);
                  link.click();
                  document.body.removeChild(link);
                }}
                className="w-full inline-flex items-center justify-center gap-2 bg-slate-800 hover:bg-slate-900 text-white font-medium px-4 py-3 rounded-lg transition-all duration-300 hover:scale-105 text-sm"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3" />
                </svg>
                Download Resume
              </button>
              
              {/* File Info */}
              <div className="mt-3">
                <span className="text-xs text-slate-400">
                  PDF Format • Updated Recently
                </span>
              </div>
            </div>
          </div>
        </MotionDiv>
      </div>
    </section>
  )
}