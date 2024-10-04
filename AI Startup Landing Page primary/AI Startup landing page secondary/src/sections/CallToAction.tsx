"use client";
import { Button } from "@/components/Button";
import { motion, useMotionTemplate, useMotionValue, useScroll, useTransform } from "framer-motion";
import { RefObject, useCallback, useEffect, useRef } from "react";
import gridLines from "../../public/assets/grid-lines.png";
import starsBg from "../../public/assets/stars.png";
const useRelativeMousePosition = (to: RefObject<HTMLElement>) => {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const updateMousePosition = useCallback((event: MouseEvent) => {
    if (!to.current) return;
    const { top, left } = to.current.getBoundingClientRect();
    mouseX.set(event.x - left);
    mouseY.set(event.y - top);
  }, [to, mouseX, mouseY]);

  useEffect(() => {
    window.addEventListener('mousemove', updateMousePosition);
    return () => window.removeEventListener('mousemove', updateMousePosition);
  }, [updateMousePosition]);

  return [mouseX, mouseY];
};

export const CallToAction = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const borderedDivRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });
  const backgroundPositionY = useTransform(scrollYProgress, [0, 1], [-300, 300]);
  const [mouseX, mouseY] = useRelativeMousePosition(borderedDivRef);
 const maskImage =  useMotionTemplate`radial-gradient(50% 50% at ${mouseX}px ${mouseY}px, black, transparent)`
  return (
    <>
      <section className="py-20 md:py-24" ref={sectionRef}>
        <div className="container">
          <motion.div
          ref={borderedDivRef}
            className="border border-white/15 py-24 rounded-xl overflow-hidden relative group"
            animate={{
              backgroundPositionX: [0, starsBg.width]}}
              transition = {{
                repeat: Infinity,
                duration: 60,
                ease: "linear",
          
            }}
            style={{ backgroundPositionY, backgroundImage: `url(${starsBg.src})` }}
          >
            <div
              className="absolute inset-0 bg-[rgb(74,32,138)] bg-blend-overlay [mask-image:radial-gradient(50%_50%_at_50%_35%,black,transparent)] group-hover:opacity-0 tarnsition duration-700"
              style={{ backgroundImage: `url(${gridLines.src})` }}
            ></div>
            <motion.div
              className="absolute inset-0 bg-[rgb(74,32,138)] bg-blend-overlay group-hover:opacity-100  tarnsition duration-700"
              style={{maskImage, backgroundImage: `url(${gridLines.src})` }}
            ></motion.div>
            <div className="relative">
              <h2 className="text-5xl tracking-tighter text-center max-w-md mx-auto font-medium">
                AI-driven workflow for everyone.
              </h2>
              <p className="text-center text-lg md:text-xl max-w-xs mx-auto text-white/70 px-4 mt-5 tracking-tight">
                Acheive clear impactful results without any complexity.
              </p>
              <div className="flex justify-center mt-8 ">
                <Button>Join waitlist</Button>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
};