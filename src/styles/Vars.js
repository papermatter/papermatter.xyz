export const colors = {
  black: '#131414',
  gray: "#979797",
  darkGray: '#5E5F5F',
  lightGray: '#E2E2E2',
  white: '#fff',
}

export const size = {
  small: 400,
  medium: 480,
  mediumL: 960,
  large: 1140,
}

export const fontStyleItalic = () => {
  return `
    font-family: 'DM serif Display', serif;
    font-style: italic;
    font-weight: normal;
  `
}

export const breakpoints = {
  mobileS: "@media screen and (max-width: 320px)",
  mobileM: "@media screen and (min-width: 375px)",
  mobileL: "@media screen and (min-width: 425px)",
  tablet: "@media screen and (min-width: 768px)",
  laptop: "@media screen and (min-width: 1024px)",
  laptopL: "@media screen and (min-width: 1440px)",
}

export const responsiveSections = () => {
  return `
    ${breakpoints.tablet} {
      margin: 0 -6em -2em;
      padding: 8em 6em;
    }
    ${breakpoints.laptop} {
      margin: 0 -10em -2em;
      padding: 8em 10em;
    }
    ${breakpoints.laptopL} {
      margin: 0 -14em -2em;
      padding: 10em 14em;
    }
  `
}
