import type { CSSProperties } from 'react'

const fonts = {
  mono: '--next-font-mono',
  'self-written': '--font-self-written',
  sink: '--font-sink',
  'funnel-sans': '--font-funnel-sans',
} as const

const typography: TypeStyles = {
  'test-mono': {
    'font-family': `var(${fonts.mono})`,
    'font-style': 'normal',
    'font-weight': 400,
    'line-height': '90%',
    'letter-spacing': '0em',
    'font-size': { mobile: 20, desktop: 24 },
  },
  'test-self-written': {
    'font-family': `var(${fonts['self-written']})`,
    'font-style': 'normal',
    'font-weight': 400,
    'line-height': '90%',
    'letter-spacing': '0em',
    'font-size': { mobile: 20, desktop: 24 },
  },
  'test-sink': {
    'font-family': `var(${fonts.sink})`,
    'font-style': 'normal',
    'font-weight': 400,
    'line-height': '90%',
    'letter-spacing': '0em',
    'font-size': { mobile: 20, desktop: 24 },
  },
  'test-funnel-sans': {
    'font-family': `var(${fonts['funnel-sans']})`,
    'font-style': 'normal',
    'font-weight': 400,
    'line-height': '90%',
    'letter-spacing': '0em',
    'font-size': { mobile: 20, desktop: 24 },
  },
} as const

export { fonts, typography }

// UTIL TYPES
type TypeStyles = Record<
  string,
  {
    'font-family': string
    'font-style': CSSProperties['fontStyle']
    'font-weight': CSSProperties['fontWeight']
    'line-height':
      | `${number}%`
      | { mobile: `${number}%`; desktop: `${number}%` }
    'letter-spacing':
      | `${number}em`
      | { mobile: `${number}em`; desktop: `${number}em` }
    'font-feature-settings'?: string
    'font-size': number | { mobile: number; desktop: number }
  }
>
