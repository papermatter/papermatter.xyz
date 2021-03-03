export const colors = {
  black: "#131414",
  gray: "#979797",
  darkGray: "#5E5F5F",
  lightGray: "#E2E2E2",
  white: "#fff",
}

export const size = {
  small: 400,
  medium: 480,
  mediumL: 960,
  large: 1140,
}

export const HorizontalDashedBorder = () => `
  background-image: linear-gradient(
    to right,
    var(--primary-20) 33%,
    rgba(255, 255, 255, 0) 0%
  );
  background-size: 10px 1px;
  background-repeat: repeat-x;
`

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
      margin: 0 -6rem -2rem;
      padding: 8rem 6rem;
    }
    ${breakpoints.laptop} {
      margin: 0 -10rem -2rem;
      padding: 8rem 10rem;
    }
    ${breakpoints.laptopL} {
      margin: 0 -14rem -2rem;
      padding: 10rem 14rem;
    }
  `
}

export const responsiveSectionMargin = () => {
  return `
    margin: 0 -1.5rem;
    ${breakpoints.tablet} {
      margin: 0 -6rem;
    }
    ${breakpoints.laptop} {
      margin: 0 -10rem;
    }
    ${breakpoints.laptopL} {
      margin: 0 -14rem;
    }
  `
}

export const responsiveSectionPadding = () => {
  return `
    padding: 0 1.5rem;
    ${breakpoints.tablet} {
      padding: 0 6rem;
    }
    ${breakpoints.laptop} {
      padding: 0 10rem;
    }
    ${breakpoints.laptopL} {
      padding: 0 14rem;
    }
  `
}
