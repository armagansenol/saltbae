'use client'

import { useGSAP } from '@gsap/react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useRef } from 'react'
import { Marquee } from '../marquee'

export function MaskReveal() {
  const container = useRef<HTMLDivElement>(null)
  const stickyMask = useRef<HTMLDivElement>(null)

  useGSAP(() => {
    gsap.registerPlugin(ScrollTrigger)

    if (!stickyMask.current || !container.current) return

    const maskTl = gsap.timeline({
      scrollTrigger: {
        trigger: container.current,
        end: '+=6000px',
        scrub: true,
        pin: stickyMask.current,
        pinSpacing: true,
      },
    })

    maskTl.to(stickyMask.current, {
      webkitMaskSize: '5000%',
      maskSize: '5000%',
    })
  }, [])

  return (
    <div>
      <div ref={container} className='bg-sandy-beach relative h-screen'>
        <div className='absolute top-0 left-0 flex h-screen w-screen items-center justify-center gap-4 font-sans text-8xl font-black text-black'>
          <div className='bg-sandy-beach'>
            <Marquee repeat={10}>
              <h3 className='font-sink text-black-water text-shadow-sandy-beach dr-text-180 dr-mx-50 block leading-none'>
                ANORMAL iYi
              </h3>
            </Marquee>
          </div>
        </div>
        {/* <div ref={stickyMask} className={styles.stickyMask}>
          <Image
            src='/bg.jpg'
            alt='Background'
            style={{ height: '100%', width: '100%', objectFit: 'cover' }}
            fill
            sizes='100vw'
          />
        </div> */}
      </div>
    </div>
  )
}
