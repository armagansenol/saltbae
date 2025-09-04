'use client'

import cn from 'clsx'

import { Svg180g, Svg180gOutline } from '@/components/svgs'

import { Img } from '@/components/utility/img'
import { useGSAP } from '@gsap/react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useMemo, useRef } from 'react'

gsap.registerPlugin(useGSAP, ScrollTrigger)

interface AnimatedBurgerProps {
  className?: string
  size?: number
  gap?: number
}

export const AnimatedBurger = ({
  className = '',
  size = 380,
}: AnimatedBurgerProps) => {
  const ref = useRef<HTMLDivElement>(null)
  const containerRef = useRef<HTMLDivElement>(null)

  const initialScale = 1.25
  const endScale = 1

  const parts = useMemo(
    () => [
      {
        key: 'bunTop',
        src: '/img/burger/bun-top.png',
        alt: 'Top bun',
        zIndex: 60,
        y: 170,
        initialScale: initialScale,
        endScale: endScale,
      },

      {
        key: 'onion',
        src: '/img/burger/onion.png',
        alt: 'Onion',
        zIndex: 60,
        y: 120,
        initialScale: initialScale,
        endScale: endScale,
      },
      {
        key: 'slicedMeat',
        src: '/img/burger/sliced-meat.png',
        alt: 'Sliced meat',
        zIndex: 40,
        y: 50,
        initialScale: initialScale,
        endScale: endScale,
      },
      {
        key: 'cheese',
        src: '/img/burger/cheese.png',
        alt: 'Cheese',
        zIndex: 30,
        y: -10,
        initialScale: initialScale,
        endScale: endScale,
      },
      {
        key: 'beefPatty',
        src: '/img/burger/patty.png',
        alt: 'Beef patty',
        zIndex: 20,
        y: -100,
        initialScale: initialScale,
        endScale: endScale,
      },
      {
        key: 'bunBottom',
        src: '/img/burger/bun-bottom.png',
        alt: 'Bottom bun',
        zIndex: 10,
        y: -150,
        initialScale: initialScale,
        endScale: endScale,
      },
    ],
    []
  )

  useGSAP(
    () => {
      if (!containerRef.current) return

      const tl = gsap.timeline({ paused: true })

      tl.to(
        '.part-0',
        {
          yPercent: parts[0].y,
          ease: 'power2.inOut',
          scale: parts[0].endScale,
        },
        's'
      )
        .to(
          '.part-1',
          {
            yPercent: parts[1].y,
            ease: 'power2.inOut',
            scale: parts[1].endScale,
          },
          's'
        )
        .to(
          '.part-2',
          {
            yPercent: parts[2].y,
            ease: 'power2.inOut',
            scale: parts[2].endScale,
          },
          's'
        )
        .to(
          '.part-3',
          {
            yPercent: parts[3].y,
            ease: 'power2.inOut',
            scale: parts[3].endScale,
          },
          's'
        )
        .to(
          '.part-4',
          {
            yPercent: parts[4].y,
            ease: 'power2.inOut',
            scale: parts[4].endScale,
          },
          's'
        )
        .to(
          '.part-5',
          {
            yPercent: parts[5].y,
            ease: 'power2.inOut',
            scale: parts[5].endScale,
          },
          's'
        )

      ScrollTrigger.create({
        animation: tl,
        trigger: ref.current,
        markers: true,
        pin: true,
        pinSpacing: true,
        end: '+=3000px',
        scrub: true,
        // pinReparent: true,
        anticipatePin: 1,
        invalidateOnRefresh: true,
      })
    },
    {
      scope: ref,
      revertOnUpdate: true,
    }
  )

  return (
    <div className='bg-black-water relative h-screen w-screen' ref={ref}>
      <div className='dr-h-600 dr-w-700 border-red-carpet absolute top-1/2 left-1/2 z-10 -translate-x-1/2 -translate-y-1/2'>
        <Svg180g fill='#F8E3D1' />
      </div>
      <div className='dr-h-600 dr-w-700 border-red-carpet absolute top-1/2 left-1/2 z-30 -translate-x-1/2 -translate-y-1/2'>
        <Svg180gOutline fill='#F8E3D1' />
      </div>
      <div
        className={cn(
          'relative z-20 flex h-full w-full rotate-12 items-center justify-center select-none',
          className
        )}
        ref={containerRef}
      >
        <div className='grid grid-rows-6'>
          {parts.map((part, i) => (
            <div
              key={part.key}
              className={cn(`part-${i}`, 'flex items-center justify-center')}
              style={{
                zIndex: part.zIndex,
                width: size,
                scale: part.initialScale,
              }}
            >
              <Img
                src={part.src}
                alt={part.alt}
                width={size}
                height={size}
                draggable={false}
                className='pointer-events-none block max-w-full object-contain'
                style={{ width: '100%', height: 'auto' }}
                priority
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
