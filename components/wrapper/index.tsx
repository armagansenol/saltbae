'use client'

import s from './wrapper.module.css'

import cn from 'clsx'

import { SmoothScroll } from '@/components/smooth-scroll'

interface WrapperProps extends React.HTMLAttributes<HTMLDivElement> {
  lenis?: boolean
  webgl?: boolean | object
}

export function Wrapper({
  children,
  lenis = true,
  className,
  ...props
}: WrapperProps) {
  return (
    <>
      {/* <Header /> */}
      <main
        className={cn(s.main, className, 'wrapper')}
        {...props}
        style={{ zIndex: 'var(--z-content)' }}
      >
        {children}
      </main>
      {/* <Footer /> */}
      {lenis && <SmoothScroll root />}
    </>
  )
}
