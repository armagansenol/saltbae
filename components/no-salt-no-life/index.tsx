'use client'

import { Img } from '@/components/utility/img'
import { useGSAP } from '@gsap/react'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { gsap } from 'gsap'
import React, { useRef } from 'react'

export const NoSaltNoLife: React.FC = () => {
  const ref = useRef<HTMLDivElement>(null)

  useGSAP(
    () => {
      gsap.registerPlugin(ScrollTrigger)

      const tl = gsap.timeline()

      tl.to('.fade-out', {
        opacity: 0,
        duration: 1,
      })
        .to('.fade-out', {
          opacity: 0.1,
          duration: 1,
        })
        .to('.fade-out', {
          opacity: 0,
          duration: 1,
        })
        .to('.fade-out', {
          opacity: 0.3,
          duration: 1,
        })
        .to('.fade-out', {
          opacity: 0,
          duration: 1,
        })
        .to('.fade-out', {
          opacity: 0.6,
          duration: 1,
        })
        .to('.fade-out', {
          opacity: 0,
          duration: 1,
        })

      ScrollTrigger.create({
        animation: tl,
        trigger: ref.current,
        start: 'center center',
        markers: true,
        pin: true,
        end: '+=1500px',
        scrub: true,
      })
    },
    {
      scope: ref,
    }
  )

  return (
    <section>
      <div className='grid place-content-center' ref={ref}>
        <div className='relative z-10 col-start-1 col-end-2 row-start-1 row-end-2 h-screen w-screen'>
          <Img
            src='/img/neon-2.jpg'
            alt='Background'
            fill
            sizes='100vw'
            className='object-cover'
          />
        </div>
        <div className='fade-out relative z-20 col-start-1 col-end-2 row-start-1 row-end-2 h-screen w-screen'>
          <Img
            src='/img/neon-1.jpg'
            alt='Background'
            fill
            sizes='100vw'
            className='object-cover'
          />
        </div>
      </div>
    </section>
  )
}
