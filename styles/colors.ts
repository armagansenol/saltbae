const colors = {
  black: '#000000',
  white: '#ffffff',
  red: '#e30613',
  test: '#178b6b',
  'black-water': '#2d4c46',
  'sandy-beach': '#f8e3d1',
  'red-carpet': '#be1f24',
} as const

const themeNames = ['light', 'dark', 'red'] as const
const colorNames = ['primary', 'secondary', 'contrast'] as const

const themes = {
  light: {
    primary: colors.white,
    secondary: colors.black,
    contrast: colors.red,
  },
  dark: {
    primary: colors.black,
    secondary: colors.white,
    contrast: colors.red,
  },
  red: {
    primary: colors.red,
    secondary: colors.black,
    contrast: colors.white,
  },
} as const satisfies Themes

export { colors, themeNames, themes, colorNames }

// UTIL TYPES
type Themes = Record<
  (typeof themeNames)[number],
  Record<(typeof colorNames)[number], string>
>
