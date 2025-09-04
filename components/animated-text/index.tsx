'use client'

import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { CustomEase } from 'gsap/CustomEase'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { SplitText } from 'gsap/SplitText'
import * as React from 'react'

export interface AnimatedTextProps {
  children: React.ReactNode
  className?: string
  delay?: number
  duration?: number
  stagger?: number
}

export function AnimatedText({
  children,
  className = 'text-6xl font-bold text-white',
  delay = 0,
  duration = 1,
  stagger = 0.1,
}: AnimatedTextProps) {
  const containerRef = React.useRef<HTMLDivElement>(null)
  const splitTextRef = React.useRef<SplitText | null>(null)

  useGSAP(
    () => {
      gsap.registerPlugin(ScrollTrigger, SplitText, CustomEase)

      const enterEase = CustomEase.create('custom', '.215, .61, .355, 1')

      if (!containerRef.current) return

      // Wait for fonts to load before creating SplitText
      const createSplitText = () => {
        console.log('Creating SplitText...')
        const splitText = new SplitText(containerRef.current, {
          type: 'lines',
          linesClass: 'line',
        })

        splitTextRef.current = splitText

        console.log('SplitText created, lines:', splitText.lines)

        // Manually create line wrappers for each line
        const lines = splitText.lines
        const wrappedLines: HTMLElement[] = []

        lines.forEach((line) => {
          const wrapper = document.createElement('div')
          wrapper.className = 'line-wrapper'
          wrapper.style.cssText =
            'display: block; overflow: hidden; perspective: 999px; transform-style: preserve-3d;'

          // Insert wrapper before the line
          line.parentNode?.insertBefore(wrapper, line)
          // Move the line into the wrapper
          wrapper.appendChild(line)

          wrappedLines.push(wrapper)
          console.log('Created line wrapper:', wrapper)
        })

        console.log(
          'Line wrappers in DOM:',
          document.querySelectorAll('.line-wrapper')
        )
        console.log('Wrapped lines array:', wrappedLines)

        // Apply initial state to the child elements (the actual text lines)
        gsap.set(lines, {
          opacity: 0,
          rotateX: -100,
          scale: 0.5,
          transformOrigin: 'center top',
        })

        const tl = gsap.timeline({ paused: true })

        // Animate the child elements (the actual text lines) with stagger
        tl.to(lines, {
          opacity: 1,
          rotateX: 0,
          scale: 1,
          duration: duration,
          ease: enterEase,
          stagger: stagger,
        })

        ScrollTrigger.create({
          animation: tl,
          trigger: containerRef.current,
          start: 'center center',
          toggleActions: 'play none none reverse',
          markers: true,
        })
      }

      // Check if fonts are loaded
      if (document.fonts && document.fonts.ready) {
        document.fonts.ready.then(() => {
          console.log('Fonts loaded, creating SplitText...')
          createSplitText()
        })
      } else {
        // Fallback for browsers that don't support document.fonts
        setTimeout(() => {
          console.log('Fonts should be loaded by now, creating SplitText...')
          createSplitText()
        }, 100)
      }

      // Cleanup function
      return () => {
        console.log('Cleaning up SplitText...')
        if (splitTextRef.current) {
          splitTextRef.current.revert()
          splitTextRef.current = null
        }
      }
    },
    { dependencies: [children, delay, duration, stagger] }
  )

  return (
    <div ref={containerRef} className={className}>
      {children}
    </div>
  )
}
