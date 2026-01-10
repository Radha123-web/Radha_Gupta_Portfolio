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
              <p className="text-sm text-gray-500">Full-Stack Developer. Mern Stack </p>
            </MotionDiv>
          </div>
          {/* ---------------- right column ---------------- */}
          <Typography as="article" size="lg" className="[flex:1.5_0_0px] space-y-8 text-slate-500">
    <p>
  <strong className="font-semibold text-slate-900">
    Hi, I’m Radha Gupta
  </strong>{" "}
  ,  I believe good software is built at the intersection of logic, design, and intention.

I build scalable and engaging digital experiences using modern web technologies, with a strong focus on clean, meaningful code.

Outside of development, I enjoy playing badminton, singing, and exploring palm reading, which keep me creative and curious beyond the screen.
</p>






            {/* signature */}
            <Image src={signature} alt="Radha Gupta" className="relative mt-6 -ml-3 h-12 w-auto" />
          </Typography>
        </div>
      </div>
    </section>
  )
}
