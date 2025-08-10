"use client"

import { useGSAP } from "@gsap/react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import Image from "next/image"
import { useRef } from "react"
import styles from "./page.module.css"

export function MaskReveal() {
  const container = useRef<HTMLDivElement>(null)
  const stickyMask = useRef<HTMLDivElement>(null)

  useGSAP(() => {
    gsap.registerPlugin(ScrollTrigger)

    if (!stickyMask.current || !container.current) return

    const maskTl = gsap.timeline({
      scrollTrigger: {
        trigger: container.current,
        end: "+=6000px",
        scrub: true,
        pin: stickyMask.current,
        pinSpacing: true,
      },
    })

    maskTl.to(stickyMask.current, {
      webkitMaskSize: "5000%",
      maskSize: "5000%",
    })
  }, [])

  return (
    <div>
      <div ref={container} className="relative bg-white">
        <div className="w-screen h-screen absolute top-0 left-0 flex items-center justify-center gap-4 text-black text-8xl font-black font-sans">
          <span>TEST</span>
          <span>TEST</span>
          <span>TEST</span>
          <span>TEST</span>
          <span>TEST</span>
          <span>TEST</span>
        </div>
        <div ref={stickyMask} className={styles.stickyMask}>
          <Image
            src="/bg.jpg"
            alt="Background"
            style={{ height: "100%", width: "100%", objectFit: "cover" }}
            fill
            sizes="100vw"
          />
        </div>
      </div>
    </div>
  )
}
