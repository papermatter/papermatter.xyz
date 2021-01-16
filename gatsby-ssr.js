/**
 * Implement Gatsby's SSR (Server Side Rendering) APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/ssr-apis/
 */

// You can delete this file if you're not using it

const React = require("react")
const { BreakpointProvider } = require("./src/lib/hooks/useBreakpoints")

const queries = {
  mobileS: "(max-width: 320px)",
  mobileM: "(min-width: 375px)",
  mobileL: "(min-width: 425px)",
  tablet: "(min-width: 720px)",
  laptop: "(min-width: 1024px)",
  laptopL: "(min-width: 1440px)",
  or: "(orientation: portrait)", // we can check orientation also
}

exports.wrapRootElement = ({ element }) => (
  <BreakpointProvider queries={queries}>{element}</BreakpointProvider>
)
