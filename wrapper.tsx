import { withTrans } from "@i18n/withTrans"
import React from "react"
import { Provider } from "react-redux"
import store from "./src/store"
import { ThemeProvider } from "styled-components"
import "./style.css"
import theme from "./src/styles/theme"

interface Props {
  children: React.ReactNode
}

const Wrapper = ({ children }: Props) => {
  return (
    <ThemeProvider theme={theme}>
      <Provider store={store}>{children}</Provider>
    </ThemeProvider>
  )
}

export default withTrans(Wrapper)
