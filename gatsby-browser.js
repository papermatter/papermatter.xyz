/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/browser-apis/
 */

// You can delete this file if you're not using it

const React = require("react")
const {BreackpointProvider} = require('./src/lib/hooks/useBreakpoints')
const {ThemeContext} = require('./src/ThemeContext')

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
  <BreackpointProvider queries={queries}>
    <ThemeContext>
      {element}
    </ThemeContext>
  </BreackpointProvider>
)