import Image from "next/image"
import clsx from "clsx"
import profilePhoto from "../images/profile.jpg"
import signature from "../images/signature.png"
import { Text, Typography } from "../ui/Elements"
import { AnimatedH2 } from "./ui/AnimatedH2"
import { ImageReveal } from "./ImageReveal"
import { MotionDiv } from "../utils/lazy-ui"

export const AboutSectionV2 = ({ className = "" }: { className?: string }) => {
  return (
    <section id="about" className={clsx("border-y border-gray-200 bg-white", className)}>
      <div className="inside-container relative z-2">
        {/* HEADLINE */}
        <AnimatedH2>
          <span className="text-slate-500">About</span>
          <br />
          Radha Gupta
        </AnimatedH2>
        <div className="flex flex-col-reverse gap-12 md:flex-row md:gap-16">
          {/* ---------------- left column ---------------- */}

          <div className="flex [flex:1_0_0px] flex-col gap-6">
            {/* portrait + overlay icons */}

            <ImageReveal src={profilePhoto} alt="Radha Gupta" className="custom-shadow aspect-[4/4.5]" />

            {/* name + role */}
            <MotionDiv
              initial={{ opacity: 0, filter: "blur(10px)" }}
              whileInView={{ opacity: 1, filter: "blur(0px)" }}
              viewport={{ once: true, margin: "0px 0px -100px 0px" }}
            >
              <Text as="h2" size="lg" className="font-medium">
                Radha Gupta
              </Text>
              <p className="text-sm text-gray-500">Full-Stack Developer | MERN Stack | GenAI</p>
            </MotionDiv>
          </div>
          {/* ---------------- right column ---------------- */}
          <Typography as="article" size="lg" className="[flex:1.5_0_0px] space-y-6 text-slate-500">
            <p>
              <strong className="font-semibold text-slate-900">
                I build products that work — and know why.
              </strong>{" "}
              Full-stack developer (MERN) with growing expertise in GenAI applications. I take features from idea to production — 
              from architecting a RAG-based chatbot with DeepSeek and Gemini LLM workflows, to building Opportura, a full-stack 
              job portal handling 1000+ listings across 4 user roles. Understanding the reasoning behind a solution matters to me 
              as much as shipping it.
            </p>

            <p>
              Currently deepening my GenAI engineering skills — building agentic workflows with LangGraph and exploring how 
              multiple AI agents can coordinate on real tasks.
            </p>

            <p>
              <strong className="font-semibold text-slate-900">Open to:</strong> Full Stack Developer | MERN Stack Developer | 
              Junior AI Engineer roles where I can grow, contribute, and ship real impact.
            </p>

            <p>
              <strong className="font-semibold text-slate-900">Beyond code:</strong> Singing, gaming, and pattern recognition — 
              in code or tarot cards. Curiosity transcends domains.
            </p>

            {/* signature */}
            <Image src={signature} alt="Radha Gupta" className="relative mt-6 -ml-3 h-12 w-auto" />
          </Typography>
        </div>
      </div>
    </section>
  )
}
