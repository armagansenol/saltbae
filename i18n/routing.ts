import { createNavigation } from 'next-intl/navigation'
import { defineRouting } from 'next-intl/routing'

export const routing = defineRouting({
  locales: ['tr', 'en'],
  defaultLocale: 'tr',
  pathnames: {
    '/': '/',
    '/contact': {
      tr: '/iletisim',
      en: '/contact',
    },
    '/about': {
      tr: '/hakkimizda',
      en: '/about',
    },
    '/locations': {
      tr: '/lokasyonlar',
      en: '/locations',
    },
    '/faq': {
      tr: '/sss',
      en: '/faq',
    },
  },
  localePrefix: 'as-needed',
  localeDetection: false,
})

export type Pathnames = keyof typeof routing.pathnames
export type Locale = (typeof routing.locales)[number]

export const { Link, getPathname, redirect, usePathname, useRouter } =
  createNavigation(routing)
