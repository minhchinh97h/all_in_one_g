/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it

const path = require("path")

exports.onCreateWebpackConfig = ({ actions }) => {
  actions.setWebpackConfig({
    resolve: {
      alias: {
        "~reducers": path.resolve(__dirname, "src/store/reducers"),
        "~actions": path.resolve(__dirname, "src/store/actions"),
        "~selectors": path.resolve(__dirname, "src/store/selectors"),
        "~components": path.resolve(__dirname, "src/components"),
        "~images": path.resolve(__dirname, "src/images"),
        "~pages": path.resolve(__dirname, "src/pages"),
        "~i18n": path.resolve(__dirname, "src/i18n"),
        "~styles": path.resolve(__dirname, "src/styles"),
        "~types": path.resolve(__dirname, "src/types")
      }
    }
  })
}
