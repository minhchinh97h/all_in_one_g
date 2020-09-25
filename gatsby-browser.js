/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/browser-apis/
 */

// You can delete this file if you're not using it

import "./style.css"
import Amplify from "aws-amplify"
import awsExports from "./src/aws-exports"

export default {
  onClientEntry: () => {
    Amplify.configure(awsExports)
  }
}
