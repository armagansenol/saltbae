import localFont from 'next/font/local'
import { Funnel_Sans } from 'next/font/google'

export const selfWrittenFont = localFont({
  src: [
    {
      path: '../public/fonts/self-written/SelfWritten-Regular.woff2',
      weight: '400',
      style: 'normal',
    },
  ],
  display: 'swap',
  variable: '--font-self-written',
  preload: true,
  adjustFontFallback: 'Arial',
})

export const sinkFont = localFont({
  src: [
    {
      path: '../public/fonts/sink/SinkRegular.woff2',
      weight: '400',
      style: 'normal',
    },
  ],
  display: 'swap',
  variable: '--font-sink',
  preload: true,
  adjustFontFallback: 'Arial',
})

export const funnelSans = Funnel_Sans({
  variable: '--font-funnel-sans',
  subsets: ['latin'],
  display: 'swap',
  preload: true,
})

const fonts = [selfWrittenFont, sinkFont, funnelSans]
const fontsVariable = fonts.map((font) => font.variable).join(' ')

export { fontsVariable }
