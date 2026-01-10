"use client"

import clsx from "clsx"
import Image from "next/image"
import { useState, useEffect } from "react"
import { Text } from "../ui/Elements"
import { AnimatedH2 } from "./ui/AnimatedH2"
import type { Variants } from "motion"
import { MotionUl, MotionLi } from "../utils/lazy-ui"

const certificates = [
  {
    name: "Software Developer",
    issuer: "SHASHANK SOLUTION",
    date: "15/5/2025",
    image: "/certificates/shashank.png"
  },
{
    name: "Web Development Intern ",
    issuer: "Cognifyz Technologies",
    date: " 4/2/2025",
    image: "/certificates/Cognifyz.png"
  },

  {
    name: "CERTIFICATE OF COMPETENCY",
    issuer: "NVIDIA DEEP LEARNING INSTITUTE",
    date: " 11/2/2024",
    image: "/certificates/Nivida.png"
  },

   {
    name: "Web Development Internship",
    issuer: "ZIDIO DEVELOPMENT",
    date: " 9/2/2025",
    image: "/certificates/zidio.png"
  }
  ,
   {
    name: "Certification of Participation",
    issuer: "LOREAL SUSTAINABLE CHALLENGE",
    date: " 1/5/2024",
    image: "/certificates/loreal.png"
  },
  {
    name: "Certification of Cloud Computing",
    issuer: "Nptel IIT Kharagpur",
    date: " 10/11/2024",
    image: "/certificates/CloudComputing.png"
  }
]


const container: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2,
    },
  },
}

const element: Variants = {
  hidden: {
    opacity: 0,
    y: 60,
    scale: 0.8,
    rotateY: -15,
    filter: "blur(8px)",
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    rotateY: 0,
    filter: "blur(0px)",
    transition: {
      duration: 0.8,
      ease: [0.25, 0.46, 0.45, 0.94],
      type: "spring",
      stiffness: 100,
      damping: 15,
    },
  },
}

export const CertificatesSection: React.FC = ({ className = "" }: { className?: string }) => {
  const [selectedCertificate, setSelectedCertificate] = useState<{ image: string; name: string } | null>(null)

  const openCertificate = (image: string, name: string) => {
    setSelectedCertificate({ image, name })
    // Prevent body scroll when modal is open
    document.body.style.overflow = 'hidden'
  }

  const closeCertificate = () => {
    setSelectedCertificate(null)
    // Restore body scroll
    document.body.style.overflow = 'unset'
  }

  // Handle ESC key press
  useEffect(() => {
    const handleEscKey = (event: KeyboardEvent) => {
      if (event.key === 'Escape' && selectedCertificate) {
        closeCertificate()
      }
    }

    if (selectedCertificate) {
      document.addEventListener('keydown', handleEscKey)
    }

    return () => {
      document.removeEventListener('keydown', handleEscKey)
      // Cleanup: restore scroll on unmount
      document.body.style.overflow = 'unset'
    }
  }, [selectedCertificate])

  return (
    <section id="certificates" className={clsx("inside-container relative z-2 py-20 md:py-28", className)}>
      <div className="flex flex-col items-center text-center">
        <AnimatedH2 className="mb-4">
          Professional <br />
          <span className="text-slate-500">Certifications</span>
        </AnimatedH2>
        
        <Text size="base" className="mb-12 max-w-2xl">
          Continuous learning and professional development through industry-recognized certifications
        </Text>

        <MotionUl
          className="grid grid-cols-1 gap-6 w-full max-w-6xl md:grid-cols-2 lg:grid-cols-3"
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "0px 0px -100px 0px" }}
        >
          {certificates.map(({ name, issuer, date, image }, index) => (
            <MotionLi key={index} variants={element}>
              <div className="group relative h-full cursor-pointer">
                <div className="button-shadow flex h-full flex-col rounded-xl border border-gray-200 bg-white overflow-hidden transition-all duration-500 hover:translate-y-[-8px] hover:shadow-2xl hover:shadow-slate-500/20 hover:border-slate-300 hover:scale-[1.02] transform-gpu">
                  {/* Certificate Image */}
                  <div className="relative h-56 w-full overflow-hidden">
                    <Image
                      src={image}
                      alt={`${name} Certificate`}
                      fill
                      className="object-contain bg-gray-50 transition-all duration-700 group-hover:scale-110 group-hover:rotate-1"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />
                    {/* Animated overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-600/0 via-transparent to-transparent opacity-0 group-hover:opacity-20 transition-opacity duration-500"></div>
                    
                    <div className="absolute top-3 right-3 bg-white/90 backdrop-blur-sm rounded-full px-3 py-1 transform transition-all duration-300 group-hover:scale-110 group-hover:bg-slate-50">
                      <span className="text-xs text-slate-600 font-mono group-hover:text-slate-700 transition-colors duration-300">
                        {date}
                      </span>
                    </div>
                    
                    {/* Shine effect */}
                    <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700">
                      <div className="absolute top-0 left-[-100%] w-full h-full bg-gradient-to-r from-transparent via-white/20 to-transparent skew-x-12 group-hover:left-[100%] transition-all duration-1000 ease-out"></div>
                    </div>
                  </div>

                  {/* Certificate Details */}
                  <div className="p-6 relative">
                    {/* Animated background */}
                    <div className="absolute inset-0 bg-gradient-to-br from-slate-50/0 to-slate-50/0 group-hover:from-slate-50/50 group-hover:to-slate-50/30 transition-all duration-500 rounded-b-xl"></div>
                    
                    <div className="relative z-10">
                      <h3 className="text-lg font-medium text-slate-900 mb-2 leading-tight transition-all duration-300 group-hover:text-slate-900 group-hover:transform group-hover:translate-x-1">
                        {name}
                      </h3>
                      <p className="text-sm text-slate-600 mb-4 transition-all duration-300 group-hover:text-slate-700 group-hover:transform group-hover:translate-x-1">
                        {issuer}
                      </p>
                      
                      {/* View Certificate Button */}
                      <button
                        onClick={() => openCertificate(image, name)}
                        className="w-full bg-slate-800 hover:bg-slate-900 text-white text-sm font-medium py-2.5 px-4 rounded-lg transition-all duration-300 transform hover:scale-105 hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-slate-500 focus:ring-offset-2"
                      >
                        View Certificate
                      </button>
                    </div>
                    
                    {/* Floating particles effect */}
                    <div className="absolute top-2 right-2 w-2 h-2 bg-blue-400 rounded-full opacity-0 group-hover:opacity-100 group-hover:animate-ping transition-opacity duration-300"></div>
                    <div className="absolute bottom-4 left-4 w-1 h-1 bg-purple-400 rounded-full opacity-0 group-hover:opacity-100 group-hover:animate-pulse transition-opacity duration-500 delay-200"></div>
                  </div>
                </div>
              </div>
            </MotionLi>
          ))}
        </MotionUl>
      </div>

      {/* Certificate Modal */}
      {selectedCertificate && (
        <>
          {/* Backdrop */}
          <div 
            className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md transition-opacity duration-300"
            onClick={closeCertificate}
          />
          
          {/* Modal Content */}
          <div className="fixed inset-0 z-50 flex items-center justify-center p-6 pointer-events-none">
            <div 
              className="relative w-full max-w-6xl h-full max-h-[90vh] pointer-events-auto transform transition-all duration-300 scale-100"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Certificate Container */}
              <div className="relative w-full h-full bg-white rounded-xl overflow-hidden shadow-2xl flex flex-col">
                {/* Close Button Inside Certificate */}
                <button
                  onClick={closeCertificate}
                  className="absolute top-4 right-4 z-30 bg-red-500 hover:bg-red-600 text-white rounded-full p-2 transition-all duration-200 hover:scale-110 shadow-lg"
                  aria-label="Close certificate"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={3}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
                
                {/* Certificate Image Area */}
                <div className="relative flex-1 w-full min-h-0">
                  <Image
                    src={selectedCertificate.image}
                    alt={`${selectedCertificate.name} Certificate`}
                    fill
                    className="object-contain p-6"
                    sizes="90vw"
                    priority
                  />
                </div>
                
                {/* Certificate Info Bar */}
                <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white p-4 flex-shrink-0">
                  <h3 className="text-lg font-semibold text-center">
                    {selectedCertificate.name}
                  </h3>
                </div>
              </div>
              
              {/* Action Buttons */}
              <div className="absolute -bottom-20 left-1/2 transform -translate-x-1/2 flex gap-4">
                <button
                  onClick={closeCertificate}
                  className="bg-red-500 hover:bg-red-600 text-white px-6 py-3 rounded-lg transition-all duration-200 hover:scale-105 shadow-lg font-medium"
                >
                  ✕ Close
                </button>
                <a
                  href={selectedCertificate.image}
                  download={`${selectedCertificate.name.replace(/\s+/g, '_')}_Certificate.png`}
                  className="bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-lg transition-all duration-200 hover:scale-105 shadow-lg font-medium"
                >
                  ⬇ Download
                </a>
              </div>
            </div>
          </div>
        </>
      )}
    </section>
  )
}