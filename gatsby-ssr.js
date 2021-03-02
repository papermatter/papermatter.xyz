/**
 * Implement Gatsby's SSR (Server Side Rendering) APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/ssr-apis/
 */

// You can delete this file if you're not using it

const React = require("react")
const { UIContextProvider } = require("./src/components/UI/use-ui")

exports.wrapRootElement = ({ element }) => (
  <UIContextProvider>{element}</UIContextProvider>
)
