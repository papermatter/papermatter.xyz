/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/browser-apis/
 */

// You can delete this file if you're not using it

const React = require("react")
const { UIContextProvider } = require("./src/components/UI/use-ui")

exports.wrapRootElement = ({ element }) => (
  <UIContextProvider>{element}</UIContextProvider>
)
