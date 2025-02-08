"use client"
import Image from "next/image";
import React, { useRef } from "react";
import image from "../public/image.png";
import { motion, useMotionTemplate, useScroll, useTransform } from "motion/react";
export default function Home() {
  const containerRef = useRef<HTMLDivElement>(null);

  const {scrollYProgress} = useScroll({
    target: containerRef,
  });

  const rotateX = useTransform(scrollYProgress, [0,0.1],[10,0])
  const translateY = useTransform(scrollYProgress,[0,0.1],[0,220]);
  const scale = useTransform(scrollYProgress, [0,0.1],[0.9,1.1]);
  const textTranslateY = useTransform(scrollYProgress,[0,0.1],[0,10])
  const textScale = useTransform(scrollYProgress,[0,0.1],[1,0.8]);
  const textOpacity = useTransform(scrollYProgress,[0,0.1],[1,0.5]);
  const blur = useTransform(scrollYProgress, [0,0.1], [0,10]) 
  
  const finalBlur = useMotionTemplate`blur(${blur}px)`

  return (
    <div ref={containerRef}
  className="h-[400vh] w-full flex flex-col items-center bg-neutral-50 py-40"
  style={{ perspective: "800px", transformStyle: "preserve-3d" }}
>
  <motion.h1 
  style={{
    scale:textScale,
    opacity:textOpacity,
    filter: finalBlur,
    y:textTranslateY
    
  }}
  className="text-7xl font-bold text-center p-5">
    Unleash the power of <br /> scroll animations.
  </motion.h1>
  <motion.div
    // style={{
    //   transform: "rotateX(6deg) translateZ(50px)",
    //   transformStyle: "preserve-3d",
    //   willChange: "transform",
    //   y:translateY,
    // }}
    style={{
      rotateX:rotateX,
      translateZ: "100px",
      scale,
      y:translateY,
    }}
    className="w-[58%] rounded-3xl h-[580px] bg-white shadow-2xl -mt-6 border border-neutral-100 p-2"
  >
          <div className="bg-neutral-100 w-full h-full rounded-[12px]">
            <Image src={image}
            height={1024}
            width={1024}
            alt="linear demo"
            className="h-full w-full rounded-2xl"
            />
          </div>
        </motion.div>
        
      </div>
  );
}
