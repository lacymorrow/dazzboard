const cx = key => colors[key] || key

export const gradient = (n, from, to) => `linear-gradient(${n}deg, ${cx(from)}, ${cx(to)})`

export const colors = {
  cyan: '#0ff',
  blue: '#08f',
  violet: '#80f',
  magenta: '#f0f',
  pink: '#f08',
  orange: '#f80',
  yellow: '#ff0',
  lime: '#8f0',
  teal: '#0f8',

  // old
  manilla: '#f9f6d1',
  slate: '#125b7a',
  hi: '#c3ffb9',
  green: '#93ff81',
  light: '#fcfbe8',

  //Jarvis
  dark: '#1c2337',
  darker: '#171e31',
  darkest: '#141b2e',
  light: '#bbbdc3',
  lighter: '#e1e1e5',
  lightest: '#fff',
  turquoise: '#06ffff',
  blue: '',
  orange: '#fa8f71',
  red: '#fd4952',
  purple: '#db77f7',
  green: '#2bf8a5',
  yellow: '#f4f469',

  windowBgColorA: '#8041ee',
  windowBgColorB: '#f476b7',
  dashboardBgLightest: '#fff',
  dashboardBgLighter: '#2d3759',
  dashboardBgMain: '#1c2237',
  dashboardBgDarker: '#171d31',
  dashboardBgDarkest: '#141a2e',
  dashboardShadows: 'rgba(37,45,71,.34)',
  // orange
  colorData1: '#fb906f',
  // salmon
  colorData2: '#f16c9e',
  // blue
  colorData3: '#95a6ff',
  // indigo
  colorData4: '#5e78fe',
  // pink
  colorData5: '#df74f9',
  // violet
  colorData6: '#b72cf6',
  // green
  colorData7: '#0df9a3',
  // red
  colorData8: '#f55753',
  // purple
  colorData9: '#dd71f9',
  // yellow
  colorData10: '#fdcf44',
  colorMain: '#fff',
  colorLight: 'hsla(0,0%,100%,.7)',
  colorDark: '#2c2c2c',
  colorError: '#ff4a50',
  colorSuccess: '#06ffff',

  info: '#06ffff',
  warn: '#f4f469',
  error: '#f55753',
  success: '#0df9a3'
}

export const pallate = [
  colors.colorData1,
  colors.colorData3,
  colors.colorData2,
  colors.colorData9,
  colors.colorData10,
  colors.colorData8,
  colors.colorData7,
  colors.colorData4,
  colors.colorData5,
  colors.colorData6
]

export const gradients = {
  fire: gradient(315, 'colorData1', 'colorData2'),
  evening: gradient(315, 'colorData3', 'colorData4'),
  berry: gradient(315, 'colorData5', 'colorData6'),
  sunset: gradient(120, 'magenta', 'violet')
}

export const fontSizes = {
  fontBodyXS: '12px',
  fontBodySM: '14px',
  fontHeaderXS: '11px',
  fontHeaderSM: '12px',
  fontHeaderLG: '27px'
}

export default {
  colors,
  fontSizes,
  gradient,
  gradients,
  pallate
}